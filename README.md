# vault-config

an insanely simple way to back your apps config by vault

[node-config](https://github.com/lorenwest/node-config) inspired config that is backed by hashicorp vault that is backed by [vault-get](https://github.com/icodeforlove/vault-get) data interface

## install

```
npm install vault-config
```

## usage

setup your .vaultrc

```
{
	"config": {
		"endpoint": "...", // or VAULT_CONFIG_ENDPOINT (required)
		"token": "...", // or VAULT_CONFIG_TOKEN (required)
		"key": "...", // or VAULT_CONFIG_KEY (optional)
		"keys": ["...","...","..."], // or VAULT_CONFIG_KEYS (optional)
		"rootPath": "...", // or VAULT_CONFIG_ROOT_PATH (default "secret")
		"secretShares": "..." // or VAULT_CONFIG_SECRET_SHARES (default 1)
	},
	"data": { // vault-get interface
		"database": {
			"host": "website.com/databases/mysql/master/host",
			"username": "website.com/databases/mysql/master/username",
			"password": "website.com/databases/mysql/master/password"
		}
	}
}
```

if everything is correct you should be able to do the following

```
import config from 'vault-config';

console.log(config);
```

happy vaulting