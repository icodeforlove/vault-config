import Vault from 'vault-get';
import fs from 'fs-promise';
import deasync from 'deasync';
import __rootdirname from 'app-root-path';

async function loadConfigAsync () {
	let vaultrc;

	try {
		vaultrc = JSON.parse(await fs.readFile(`${__rootdirname}/.vaultrc`, 'utf8'));
	} catch (error) {
		throw new Error('vault-config: cant find .vaultrc, or invalid json\n' + error.stack);
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

	let vault = Vault({
		endpoint: vaultrc.config.endpoint,
		token: vaultrc.config.token,
		keys: vaultrc.config.keys,
		key: vaultrc.config.key,
		rootPath: vaultrc.config.rootPath,
		secretShares: vaultrc.config.secretShares
	});

	let databases = await vault.get(vaultrc.data);

	return databases;
}

let loadConfigSync = deasync(callback => {
	loadConfigAsync()
		.then(config => callback(null, config), callback)
		.catch(callback);
});

export default loadConfigSync();