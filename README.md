# vault-config

an insanely simple way to back your apps config by vault, and make it committable

[node-config](https://github.com/lorenwest/node-config) inspired config that is backed by hashicorp vault that is backed by [vault-get](https://github.com/icodeforlove/vault-get) data interface

![image](https://img42.com/grqHE+)

## install

```bash
npm install vault-config
```

## usage

setup your `.vaultrc` (you can commit this to your repo)

```javascript
{
	"VAULT_CONFIG_ENDPOINT": "...", // or use env var (required)
	"VAULT_CONFIG_ROOT_PATH": "...", // or use env var (default "secret")
	"VAULT_CONFIG_SECRET_SHARES": "...", // or use env var (default 1)

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

setup your `.vaultsecrets` (do not commit to repo)

```javascript
{
	"VAULT_CONFIG_TOKEN": "...", // or use env var (required)
	"VAULT_CONFIG_KEYS": ["...", "..."], // or use env var (optional)
	"VAULT_CONFIG_KEY": "..." // or use env var (optional)
}
```

if everything is correct you should be able to do the following

```javascript
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

You can also specify the location of the `.vaultrc` / `.vaultsecret` files via env variables

```
VAULT_CONFIG_RCPATH=/path/to/.vaultrc
VAULT_CONFIG_SECRETSPATH=/path/to/.vaultsecret
```

## autorenew (token renewal)

by default tokens will be autorenewed you can disable this by specifying `VAULT_AUTORENEW_DISABLED=1`, and you can override the increment by doing `VAULT_AUTORENEW_INCREMENT=86400`

## localoverrides

you can create a `.vaultlocalrc` next to your `.vaultrc` and it will merge into `.vaultrc` (a `.vaultlocalrc` is not intended to be commited)

## debugging

```javascript
DEBUG=vault ...
```
