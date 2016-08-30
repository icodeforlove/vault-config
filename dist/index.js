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
		var vaultrc, configs, vault;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						vaultrc = void 0;
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
							_context.next = 21;
							break;
						}

						configs = configs.reduce(_deepExtend2.default);
						configs.vault = configs.vault || {};
						configs.local = configs.local || {};

						// break out early, we have no matching vault rules

						if ((0, _keys2.default)(configs.vault).length) {
							_context.next = 19;
							break;
						}

						return _context.abrupt('return', configs.local);

					case 19:
						_context.next = 22;
						break;

					case 21:
						return _context.abrupt('return', {});

					case 22:

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

						if (vaultrc.config.endpoint) {
							_context.next = 31;
							break;
						}

						throw new Error('vault-config: missing "endpoint" in .vaultrc, or env var');

					case 31:
						if (vaultrc.config.token) {
							_context.next = 33;
							break;
						}

						throw new Error('vault-config: missing "token" in .vaultrc, or env var');

					case 33:
						vault = (0, _vaultGet2.default)({
							endpoint: vaultrc.config.endpoint,
							token: vaultrc.config.token,
							keys: vaultrc.config.keys,
							key: vaultrc.config.key,
							rootPath: vaultrc.config.rootPath,
							secretShares: vaultrc.config.secretShares
						});
						_context.prev = 34;
						_context.next = 37;
						return vault.get(configs.vault);

					case 37:
						configs.vault = _context.sent;
						_context.next = 44;
						break;

					case 40:
						_context.prev = 40;
						_context.t3 = _context['catch'](34);

						_context.t3.message = 'vault-config: \n' + _context.t3.message;
						throw _context.t3;

					case 44:
						return _context.abrupt('return', (0, _deepExtend2.default)(configs.vault, configs.local));

					case 45:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[1, 9], [34, 40]]);
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

exports.default = (0, _deasync2.default)(function (callback) {
	loadConfigAsync().then(function (config) {
		return callback(null, config);
	}, callback).catch(callback);
})();
module.exports = exports['default'];