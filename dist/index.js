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
						_context.next = 4;
						return _fsPromise2.default.readFile(VAULT_CONFIG_RCPATH, 'utf8');

					case 4:
						vaultrc = _context.sent;
						_context.next = 10;
						break;

					case 7:
						_context.prev = 7;
						_context.t0 = _context['catch'](1);
						throw new Error('vault-config: can\'t find "' + VAULT_CONFIG_RCPATH + '"\n' + _context.t0.stack);

					case 10:
						_context.prev = 10;

						vaultrc = JSON.parse(vaultrc);
						_context.next = 17;
						break;

					case 14:
						_context.prev = 14;
						_context.t1 = _context['catch'](10);
						throw new Error('vault-config: can\'t parse JSON in "' + VAULT_CONFIG_RCPATH + '"\n' + _context.t1.stack);

					case 17:
						_context.prev = 17;
						_context.next = 20;
						return _fsPromise2.default.readFile(VAULT_CONFIG_SECRETSPATH, 'utf8');

					case 20:
						vaultsecrets = _context.sent;
						_context.next = 26;
						break;

					case 23:
						_context.prev = 23;
						_context.t2 = _context['catch'](17);

						vaultsecrets = {};

					case 26:
						if (!(typeof vaultsecrets === 'string')) {
							_context.next = 34;
							break;
						}

						_context.prev = 27;

						vaultsecrets = JSON.parse(vaultsecrets);
						_context.next = 34;
						break;

					case 31:
						_context.prev = 31;
						_context.t3 = _context['catch'](27);
						throw new Error('vault-config: can\'t parse JSON in "' + VAULT_CONFIG_SECRETSPATH + '"\n' + _context.t3.stack);

					case 34:

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
							_context.next = 43;
							break;
						}

						configs = configs.reduce(_deepExtend2.default);
						configs.vault = configs.vault || {};
						configs.local = configs.local || {};

						// break out early, we have no matching vault rules

						if ((0, _keys2.default)(configs.vault).length) {
							_context.next = 41;
							break;
						}

						return _context.abrupt('return', configs.local);

					case 41:
						_context.next = 44;
						break;

					case 43:
						return _context.abrupt('return', {});

					case 44:
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
							_context.next = 53;
							break;
						}

						throw new Error('vault-config: missing "VAULT_CONFIG_ENDPOINT"');

					case 53:
						if (settings.VAULT_CONFIG_TOKEN) {
							_context.next = 55;
							break;
						}

						throw new Error('vault-config: missing "VAULT_CONFIG_TOKEN"');

					case 55:
						vault = (0, _vaultGet2.default)({
							endpoint: settings.VAULT_CONFIG_ENDPOINT,
							token: settings.VAULT_CONFIG_TOKEN,
							keys: settings.VAULT_CONFIG_KEYS,
							key: settings.VAULT_CONFIG_KEY,
							rootPath: settings.VAULT_CONFIG_ROOTPATH,
							secretShares: settings.VAULT_CONFIG_SECRET_SHARES
						});
						_context.prev = 56;
						_context.next = 59;
						return vault.get(configs.vault);

					case 59:
						configs.vault = _context.sent;
						_context.next = 66;
						break;

					case 62:
						_context.prev = 62;
						_context.t4 = _context['catch'](56);

						_context.t4.message = 'vault-config: \n' + _context.t4.message;
						throw _context.t4;

					case 66:
						return _context.abrupt('return', (0, _deepExtend2.default)(configs.vault, configs.local));

					case 67:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[1, 7], [10, 14], [17, 23], [27, 31], [56, 62]]);
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