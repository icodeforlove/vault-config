'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var loadConfigAsync = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		var vaultrc, vaultsecrets, configs, settings, vault;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						vaultrc = void 0, vaultsecrets = void 0;
						_context.prev = 1;
						_context.t0 = JSON;
						_context.next = 5;
						return _fsPromise2.default.readFile(VAULT_CONFIG_RCPATH, 'utf8');

					case 5:
						_context.t1 = _context.sent;
						vaultrc = _context.t0.parse.call(_context.t0, _context.t1);
						_context.next = 12;
						break;

					case 9:
						_context.prev = 9;
						_context.t2 = _context['catch'](1);
						throw new Error('vault-config: cant find "' + VAULT_CONFIG_RCPATH + '", or invalid json\n' + _context.t2.stack);

					case 12:
						_context.prev = 12;
						_context.t3 = JSON;
						_context.next = 16;
						return _fsPromise2.default.readFile(VAULT_CONFIG_SECRETSPATH, 'utf8');

					case 16:
						_context.t4 = _context.sent;
						vaultsecrets = _context.t3.parse.call(_context.t3, _context.t4);
						_context.next = 23;
						break;

					case 20:
						_context.prev = 20;
						_context.t5 = _context['catch'](12);

						vaultsecrets = {};

					case 23:

						// merge configs
						configs = (0, _keys2.default)(vaultrc).map(function (key) {
							var envMatch = key.match(/^NODE_ENV=(.+)/),
							    nodeEnv = process.env.NODE_ENV || '';

							if (envMatch && nodeEnv.match('^' + envMatch[1] + '$')) {
								return key;
							}
						}).filter(function (key) {
							return key;
						}).map(function (key) {
							return vaultrc[key];
						});

						if (!configs.length) {
							_context.next = 32;
							break;
						}

						configs = configs.reduce(_deepExtend2.default);
						configs.vault = configs.vault || {};
						configs.local = configs.local || {};

						// break out early, we have no matching vault rules

						if ((0, _keys2.default)(configs.vault).length) {
							_context.next = 30;
							break;
						}

						return _context.abrupt('return', configs.local);

					case 30:
						_context.next = 33;
						break;

					case 32:
						return _context.abrupt('return', {});

					case 33:
						settings = {};

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

						if (settings.VAULT_CONFIG_ENDPOINT) {
							_context.next = 42;
							break;
						}

						throw new Error('vault-config: missing "endpoint" in .vaultrc, or env var');

					case 42:
						if (settings.VAULT_CONFIG_TOKEN) {
							_context.next = 44;
							break;
						}

						throw new Error('vault-config: missing "token" in .vaultrc, or env var');

					case 44:
						vault = (0, _vaultGet2.default)({
							endpoint: settings.VAULT_CONFIG_ENDPOINT,
							token: settings.VAULT_CONFIG_TOKEN,
							keys: settings.VAULT_CONFIG_KEYS,
							key: settings.VAULT_CONFIG_KEY,
							rootPath: settings.VAULT_CONFIG_ROOTPATH,
							secretShares: settings.VAULT_CONFIG_SECRET_SHARES
						});
						_context.prev = 45;
						_context.next = 48;
						return vault.get(configs.vault);

					case 48:
						configs.vault = _context.sent;
						_context.next = 55;
						break;

					case 51:
						_context.prev = 51;
						_context.t6 = _context['catch'](45);

						_context.t6.message = 'vault-config: \n' + _context.t6.message;
						throw _context.t6;

					case 55:
						return _context.abrupt('return', (0, _deepExtend2.default)(configs.vault, configs.local));

					case 56:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[1, 9], [12, 20], [45, 51]]);
	}));

	return function loadConfigAsync() {
		return _ref.apply(this, arguments);
	};
}();

var _vaultGet = require('vault-get');

var _vaultGet2 = _interopRequireDefault(_vaultGet);

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _deasync = require('deasync');

var _deasync2 = _interopRequireDefault(_deasync);

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VAULT_CONFIG_RCPATH = process.env.VAULT_CONFIG_RCPATH || _appRootPath2.default + '/.vaultrc';
var VAULT_CONFIG_SECRETSPATH = process.env.VAULT_CONFIG_SECRETSPATH || _appRootPath2.default + '/.vaultsecrets';

exports.default = (0, _deasync2.default)(function (callback) {
	loadConfigAsync().then(function (config) {
		return callback(null, config);
	}, callback).catch(callback);
})();
module.exports = exports['default'];