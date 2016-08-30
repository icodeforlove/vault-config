import Vault from 'vault-get';
import fs from 'fs-promise';
import deasync from 'deasync';
import __rootdirname from 'app-root-path';
import extend from 'deep-extend';

const VAULT_CONFIG_RCPATH = process.env.VAULT_CONFIG_RCPATH || `${__rootdirname}/.vaultrc`;

async function loadConfigAsync () {
	let vaultrc;

	try {
		vaultrc = JSON.parse(await fs.readFile(VAULT_CONFIG_RCPATH, 'utf8'));
	} catch (error) {
		throw new Error(`vault-config: cant find "${VAULT_CONFIG_RCPATH}", or invalid json\n${error.stack}`);
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

	vaultrc.config = vaultrc.config || {};

	if (!vaultrc.config.endpoint && process.env.VAULT_CONFIG_ENDPOINT) {
		vaultrc.config.endpoint = process.env.VAULT_CONFIG_ENDPOINT;
	}

	if (!vaultrc.config.token && process.env.VAULT_CONFIG_TOKEN) {
		vaultrc.config.token = process.env.VAULT_CONFIG_TOKEN;
	}

	if (!vaultrc.config.key && process.env.VAULT_CONFIG_KEY) {
		vaultrc.config.key = process.env.VAULT_CONFIG_KEY;
	}

	if (!vaultrc.config.keys && process.env.VAULT_CONFIG_KEYS) {
		vaultrc.config.keys = process.env.VAULT_CONFIG_KEYS.split(',');
	}

	if (!vaultrc.config.rootPath && process.env.VAULT_CONFIG_ROOTPATH) {
		vaultrc.config.rootPath = process.env.VAULT_CONFIG_ROOTPATH;
	}

	if (!vaultrc.config.secretShares && process.env.VAULT_CONFIG_SECRET_SHARES) {
		vaultrc.config.secretShares = process.env.VAULT_CONFIG_SECRET_SHARES;
	}

	if (!vaultrc.config.endpoint) {
		throw new Error('vault-config: missing "endpoint" in .vaultrc, or env var');
	}

	if (!vaultrc.config.token) {
		throw new Error('vault-config: missing "token" in .vaultrc, or env var');
	}

	let vault = Vault({
		endpoint: vaultrc.config.endpoint,
		token: vaultrc.config.token,
		keys: vaultrc.config.keys,
		key: vaultrc.config.key,
		rootPath: vaultrc.config.rootPath,
		secretShares: vaultrc.config.secretShares
	});

	try {
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