import VaultRaw from 'node-vault';
import Vault from 'vault-get';
import fs from 'fs-promise';
import deasync from 'deasync';
import __rootdirname from 'app-root-path';
import extend from 'deep-extend';

const VAULT_CONFIG_RCPATH = process.env.VAULT_CONFIG_RCPATH || `${__rootdirname}/.vaultrc`;
const VAULT_CONFIG_SECRETSPATH = process.env.VAULT_CONFIG_SECRETSPATH || `${__rootdirname}/.vaultsecrets`;

async function renewToken (settings) {
	let vault = VaultRaw({
		apiVersion: 'v1',
		endpoint: settings.VAULT_CONFIG_ENDPOINT,
		token: settings.VAULT_CONFIG_TOKEN
	});
	await vault.tokenRenewSelf({increment: 2580000});
}

async function loadConfigAsync () {
	let vaultrc,
		vaultlocalrc,
		vaultsecrets;

	try {
		vaultrc = await fs.readFile(VAULT_CONFIG_RCPATH, 'utf8');
	} catch (error) {
		throw new Error(`vault-config: can't find "${VAULT_CONFIG_RCPATH}"\n${error.stack}`);
	}
	try {
		vaultrc = JSON.parse(vaultrc);
	} catch (error) {
		throw new Error(`vault-config: can't parse JSON in "${VAULT_CONFIG_RCPATH}"\n${error.stack}`);
	}

	try {
		vaultlocalrc = await fs.readFile(`${__rootdirname}/.vaultlocalrc`, 'utf8');
	} catch (error) {}
	if (vaultlocalrc) {
		try {
			vaultlocalrc = JSON.parse(vaultlocalrc);
			vaultrc = extend(vaultrc, vaultlocalrc);
		} catch (error) {
			throw new Error(`vault-config: can't parse JSON in "${__rootdirname}/.vaultlocalrc"\n${error.stack}`);
		}
	}

	try {
		vaultsecrets = await fs.readFile(VAULT_CONFIG_SECRETSPATH, 'utf8');
	} catch (error) {
		vaultsecrets = {};
	}
	if (typeof vaultsecrets === 'string') {
		try {
			vaultsecrets = JSON.parse(vaultsecrets);
		} catch (error) {
			throw new Error(`vault-config: can't parse JSON in "${VAULT_CONFIG_SECRETSPATH}"\n${error.stack}`);
		}
	}

	// merge configs
	let configs = Object.keys(vaultrc)
		.map(key => {
			let envMatch = key.match(/^NODE_ENV=(.+)/),
				nodeEnv = process.env.NODE_ENV || '';

			if (envMatch && nodeEnv.match(`^${envMatch[1]}$`)) {
				return key;
			}
		})
		.filter(key => key)
		.map(key => vaultrc[key]);

	if (configs.length) {
		configs = configs.reduce(extend);
		configs.vault = configs.vault || {};
		configs.local = configs.local || {};

		// break out early, we have no matching vault rules
		if (!Object.keys(configs.vault).length) {
			return configs.local;
		}
	} else {
		// break out early, we dont have any rules
		return {};
	}

	let settings = {};
	settings.VAULT_CONFIG_TOKEN = process.env.VAULT_CONFIG_TOKEN || vaultsecrets.VAULT_CONFIG_TOKEN;
	settings.VAULT_CONFIG_KEY = process.env.VAULT_CONFIG_KEY || vaultsecrets.VAULT_CONFIG_KEY;
	if (process.env.VAULT_CONFIG_KEYS) {
		settings.VAULT_CONFIG_KEYS = process.env.VAULT_CONFIG_KEYS.split(',');
	} else {
		settings.VAULT_CONFIG_KEYS = vaultsecrets.VAULT_CONFIG_KEYS;
	}
	settings.VAULT_CONFIG_ENDPOINT = vaultrc.VAULT_CONFIG_ENDPOINT || process.env.VAULT_CONFIG_ENDPOINT;
	settings.VAULT_CONFIG_ROOTPATH = vaultrc.VAULT_CONFIG_ROOTPATH || process.env.VAULT_CONFIG_ROOTPATH;
	settings.VAULT_CONFIG_SECRET_SHARES = vaultrc.VAULT_CONFIG_SECRET_SHARES || process.env.VAULT_CONFIG_SECRET_SHARES;

	if (!settings.VAULT_CONFIG_ENDPOINT) {
		throw new Error('vault-config: missing "VAULT_CONFIG_ENDPOINT"');
	}

	if (!settings.VAULT_CONFIG_TOKEN) {
		throw new Error('vault-config: missing "VAULT_CONFIG_TOKEN"');
	}

	let vault = Vault({
		endpoint: settings.VAULT_CONFIG_ENDPOINT,
		token: settings.VAULT_CONFIG_TOKEN,
		keys: settings.VAULT_CONFIG_KEYS,
		key: settings.VAULT_CONFIG_KEY,
		rootPath: settings.VAULT_CONFIG_ROOTPATH,
		secretShares: settings.VAULT_CONFIG_SECRET_SHARES
	});

	try {
		await renewToken(settings);
		configs.vault = await vault.get(configs.vault);
	} catch (error) {
		error.message = `vault-config: \n${error.message}`;
		throw error;
	}

	return extend(configs.vault, configs.local);
}

export default deasync(callback => {
	loadConfigAsync()
		.then(config => callback(null, config), callback)
		.catch(callback);
})();