'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var loadConfigAsync = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		var vaultrc, vault, databases;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						vaultrc = void 0;
						_context.prev = 1;
						_context.t0 = JSON;
						_context.next = 5;
						return _fsPromise2.default.readFile(_appRootPath2.default + '/.vaultrc', 'utf8');

					case 5:
						_context.t1 = _context.sent;
						vaultrc = _context.t0.parse.call(_context.t0, _context.t1);
						_context.next = 12;
						break;

					case 9:
						_context.prev = 9;
						_context.t2 = _context['catch'](1);
						throw new Error('vault-config: cant find .vaultrc, or invalid json\n' + _context.t2.stack);

					case 12:

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

						vault = (0, _vaultGet2.default)({
							endpoint: vaultrc.config.endpoint,
							token: vaultrc.config.token,
							keys: vaultrc.config.keys,
							key: vaultrc.config.key,
							rootPath: vaultrc.config.rootPath,
							secretShares: vaultrc.config.secretShares
						});
						_context.next = 22;
						return vault.get(vaultrc.data);

					case 22:
						databases = _context.sent;
						return _context.abrupt('return', databases);

					case 24:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[1, 9]]);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadConfigSync = (0, _deasync2.default)(function (callback) {
	loadConfigAsync().then(function (config) {
		return callback(null, config);
	}, callback).catch(callback);
});

exports.default = loadConfigSync();
module.exports = exports['default'];