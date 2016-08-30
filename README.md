# vault-config

an insanely simple way to back your apps config by vault

[node-config](https://github.com/lorenwest/node-config) inspired config that is backed by hashicorp vault that is backed by [vault-get](https://github.com/icodeforlove/vault-get) data interface

## install

```bash
npm install vault-config
```

## usage

setup your .vaultrc

```javascript
{
	"config": {
		"endpoint": "...", // or VAULT_CONFIG_ENDPOINT (required)
		"token": "...", // or VAULT_CONFIG_TOKEN (required)
		"key": "...", // or VAULT_CONFIG_KEY (optional)
		"keys": ["...","...","..."], // or VAULT_CONFIG_KEYS (optional)
		"rootPath": "...", // or VAULT_CONFIG_ROOT_PATH (default "secret")
		"secretShares": "..." // or VAULT_CONFIG_SECRET_SHARES (default 1)
	},

	"NODE_ENV=.*": { // default config (every other match extends this)
		"vault": { // vault-get interface
			"database": {
				"host": "website.com/databases/mysql/master/host",
				"username": "website.com/databases/mysql/master/username",
				"password": "website.com/databases/mysql/master/password"
			}
		}
	},

	"NODE_ENV=development": {
		"local": { // local temp overrides
			"database": {
				"host": "localhost",
				"username": "root",
				"password": ""
			}
		}
	},

	"NODE_ENV=production": {
		"vault": { // vault-get interface
			"gmail": {
				"username": "prod.website.com/accounts/gmail/username",
				"password": "prod.website.com/accounts/gmail/password"
			}
		}
	}
}
```

if everything is correct you should be able to do the following

```
// blocks on first module load if vault keys are requested
import config from 'vault-config';

console.log(config);
```

which would log out the following

```javascript
// in development
{
	database: {
		host: 'localhost',
		username: 'root',
		password: ''
	}
}

// in production
{
	database: {
		host: 'VAULE OBTAINED FROM VAULT',
		username: 'VAULE OBTAINED FROM VAULT',
		password: 'VAULE OBTAINED FROM VAULT'
	},
	gmail: {
		username: 'VAULE OBTAINED FROM VAULT',
		password: 'VAULE OBTAINED FROM VAULT'
	}
}
```

You can also specify the location of the `.vaultrc` via env variables

```
VAULT_CONFIG_RCPATH=/path/to/.vaultrc
```