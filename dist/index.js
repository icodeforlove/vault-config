module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _regenerator = __webpack_require__(2);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(3);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var renewToken = function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(settings, increment) {
			var vault;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							vault = (0, _nodeVault2.default)({
								apiVersion: 'v1',
								endpoint: settings.VAULT_CONFIG_ENDPOINT,
								token: settings.VAULT_CONFIG_TOKEN
							});
							_context.next = 3;
							return vault.tokenRenewSelf({ increment: increment });
	
						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));
	
		return function renewToken(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}();
	
	var loadConfigAsync = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
			var vaultrc, vaultlocalrc, vaultsecrets, configs, settings, vault, increment;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!process[VAULT_GLOBAL]) {
								_context2.next = 2;
								break;
							}
	
							return _context2.abrupt('return', process[VAULT_GLOBAL]);
	
						case 2:
							vaultrc = void 0, vaultlocalrc = void 0, vaultsecrets = void 0;
							_context2.prev = 3;
							_context2.next = 6;
							return _fsPromise2.default.readFile(VAULT_CONFIG_RCPATH, 'utf8');
	
						case 6:
							vaultrc = _context2.sent;
							_context2.next = 12;
							break;
	
						case 9:
							_context2.prev = 9;
							_context2.t0 = _context2['catch'](3);
							throw new Error('vault-config: can\'t find "' + VAULT_CONFIG_RCPATH + '"\n' + _context2.t0.stack);
	
						case 12:
							_context2.prev = 12;
	
							vaultrc = JSON.parse(vaultrc);
							_context2.next = 19;
							break;
	
						case 16:
							_context2.prev = 16;
							_context2.t1 = _context2['catch'](12);
							throw new Error('vault-config: can\'t parse JSON in "' + VAULT_CONFIG_RCPATH + '"\n' + _context2.t1.stack);
	
						case 19:
							_context2.prev = 19;
							_context2.next = 22;
							return _fsPromise2.default.readFile(_appRootPath2.default + '/.vaultlocalrc', 'utf8');
	
						case 22:
							vaultlocalrc = _context2.sent;
							_context2.next = 27;
							break;
	
						case 25:
							_context2.prev = 25;
							_context2.t2 = _context2['catch'](19);
	
						case 27:
							if (!vaultlocalrc) {
								_context2.next = 36;
								break;
							}
	
							_context2.prev = 28;
	
							vaultlocalrc = JSON.parse(vaultlocalrc);
							vaultrc = (0, _deepExtend2.default)(vaultrc, vaultlocalrc);
							_context2.next = 36;
							break;
	
						case 33:
							_context2.prev = 33;
							_context2.t3 = _context2['catch'](28);
							throw new Error('vault-config: can\'t parse JSON in "' + _appRootPath2.default + '/.vaultlocalrc"\n' + _context2.t3.stack);
	
						case 36:
							_context2.prev = 36;
							_context2.next = 39;
							return _fsPromise2.default.readFile(VAULT_CONFIG_SECRETSPATH, 'utf8');
	
						case 39:
							vaultsecrets = _context2.sent;
							_context2.next = 45;
							break;
	
						case 42:
							_context2.prev = 42;
							_context2.t4 = _context2['catch'](36);
	
							vaultsecrets = {};
	
						case 45:
							if (!(typeof vaultsecrets === 'string')) {
								_context2.next = 53;
								break;
							}
	
							_context2.prev = 46;
	
							vaultsecrets = JSON.parse(vaultsecrets);
							_context2.next = 53;
							break;
	
						case 50:
							_context2.prev = 50;
							_context2.t5 = _context2['catch'](46);
							throw new Error('vault-config: can\'t parse JSON in "' + VAULT_CONFIG_SECRETSPATH + '"\n' + _context2.t5.stack);
	
						case 53:
	
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
								_context2.next = 62;
								break;
							}
	
							configs = configs.reduce(_deepExtend2.default);
							configs.vault = configs.vault || {};
							configs.local = configs.local || {};
	
							// break out early, we have no matching vault rules
	
							if ((0, _keys2.default)(configs.vault).length) {
								_context2.next = 60;
								break;
							}
	
							return _context2.abrupt('return', configs.local);
	
						case 60:
							_context2.next = 63;
							break;
	
						case 62:
							return _context2.abrupt('return', {});
	
						case 63:
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
								_context2.next = 73;
								break;
							}
	
							debug('missing "VAULT_CONFIG_ENDPOINT"');
							return _context2.abrupt('return', configs.local);
	
						case 73:
							if (settings.VAULT_CONFIG_TOKEN) {
								_context2.next = 75;
								break;
							}
	
							throw new Error('vault-config: missing "VAULT_CONFIG_TOKEN"');
	
						case 75:
							vault = (0, _vaultGet2.default)({
								endpoint: settings.VAULT_CONFIG_ENDPOINT,
								token: settings.VAULT_CONFIG_TOKEN,
								keys: settings.VAULT_CONFIG_KEYS,
								key: settings.VAULT_CONFIG_KEY,
								rootPath: settings.VAULT_CONFIG_ROOTPATH,
								secretShares: settings.VAULT_CONFIG_SECRET_SHARES
							});
							_context2.prev = 76;
	
							if (process.env.VAULT_DISABLE_AUTORENEW) {
								_context2.next = 81;
								break;
							}
	
							increment = parseInt(process.env.VAULT_AUTORENEW_INCREMENT || 2580000, 10);
							_context2.next = 81;
							return renewToken(settings, increment);
	
						case 81:
							_context2.next = 83;
							return vault.get(configs.vault);
	
						case 83:
							configs.vault = _context2.sent;
							_context2.next = 90;
							break;
	
						case 86:
							_context2.prev = 86;
							_context2.t6 = _context2['catch'](76);
	
							_context2.t6.message = 'vault-config: \n' + _context2.t6.message;
							throw _context2.t6;
	
						case 90:
							return _context2.abrupt('return', process[VAULT_GLOBAL] = (0, _deepExtend2.default)(configs.vault, configs.local));
	
						case 91:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[3, 9], [12, 16], [19, 25], [28, 33], [36, 42], [46, 50], [76, 86]]);
		}));
	
		return function loadConfigAsync() {
			return _ref2.apply(this, arguments);
		};
	}();
	
	var _nodeVault = __webpack_require__(4);
	
	var _nodeVault2 = _interopRequireDefault(_nodeVault);
	
	var _vaultGet = __webpack_require__(5);
	
	var _vaultGet2 = _interopRequireDefault(_vaultGet);
	
	var _fsPromise = __webpack_require__(6);
	
	var _fsPromise2 = _interopRequireDefault(_fsPromise);
	
	var _deasync = __webpack_require__(7);
	
	var _deasync2 = _interopRequireDefault(_deasync);
	
	var _appRootPath = __webpack_require__(8);
	
	var _appRootPath2 = _interopRequireDefault(_appRootPath);
	
	var _deepExtend = __webpack_require__(9);
	
	var _deepExtend2 = _interopRequireDefault(_deepExtend);
	
	var _debug = __webpack_require__(10);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	var _promiseRetry = __webpack_require__(11);
	
	var _promiseRetry2 = _interopRequireDefault(_promiseRetry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var debug = (0, _debug2.default)('vault-config');
	var VAULT_CONFIG_RCPATH = process.env.VAULT_CONFIG_RCPATH || _appRootPath2.default + '/.vaultrc';
	var VAULT_CONFIG_SECRETSPATH = process.env.VAULT_CONFIG_SECRETSPATH || _appRootPath2.default + '/.vaultsecrets';
	var VAULT_GLOBAL = '__vault-config-shared__';
	
	exports.default = (0, _deasync2.default)(function (callback) {
		(0, _promiseRetry2.default)(function () {
			return loadConfigAsync();
		}, { retries: 10 }).then(function (config) {
			return callback(null, config);
		}, callback).catch(callback);
	})();
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/regenerator");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("node-vault");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("vault-get");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("fs-promise");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("deasync");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("app-root-path");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("deep-extend");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("debug");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("promise-retry");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQzYTcyYzM1YTI5ODZiOGRiM2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdmF1bHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YXVsdC1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVhc3luY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwcC1yb290LXBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWVwLWV4dGVuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlYnVnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvbWlzZS1yZXRyeVwiIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiaW5jcmVtZW50IiwidmF1bHQiLCJhcGlWZXJzaW9uIiwiZW5kcG9pbnQiLCJWQVVMVF9DT05GSUdfRU5EUE9JTlQiLCJ0b2tlbiIsIlZBVUxUX0NPTkZJR19UT0tFTiIsInRva2VuUmVuZXdTZWxmIiwicmVuZXdUb2tlbiIsInByb2Nlc3MiLCJWQVVMVF9HTE9CQUwiLCJ2YXVsdHJjIiwidmF1bHRsb2NhbHJjIiwidmF1bHRzZWNyZXRzIiwicmVhZEZpbGUiLCJWQVVMVF9DT05GSUdfUkNQQVRIIiwiRXJyb3IiLCJzdGFjayIsIkpTT04iLCJwYXJzZSIsIlZBVUxUX0NPTkZJR19TRUNSRVRTUEFUSCIsImNvbmZpZ3MiLCJtYXAiLCJlbnZNYXRjaCIsImtleSIsIm1hdGNoIiwibm9kZUVudiIsImVudiIsIk5PREVfRU5WIiwiZmlsdGVyIiwibGVuZ3RoIiwicmVkdWNlIiwibG9jYWwiLCJWQVVMVF9DT05GSUdfS0VZIiwiVkFVTFRfQ09ORklHX0tFWVMiLCJzcGxpdCIsIlZBVUxUX0NPTkZJR19ST09UUEFUSCIsIlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTIiwiZGVidWciLCJrZXlzIiwicm9vdFBhdGgiLCJzZWNyZXRTaGFyZXMiLCJWQVVMVF9ESVNBQkxFX0FVVE9SRU5FVyIsInBhcnNlSW50IiwiVkFVTFRfQVVUT1JFTkVXX0lOQ1JFTUVOVCIsImdldCIsIm1lc3NhZ2UiLCJsb2FkQ29uZmlnQXN5bmMiLCJyZXRyaWVzIiwidGhlbiIsImNhbGxiYWNrIiwiY29uZmlnIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0VDeEJBLGlCQUEyQkEsUUFBM0IsRUFBcUNDLFNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLQyxZQURMLEdBQ2EseUJBQVM7QUFDcEJDLG9CQUFZLElBRFE7QUFFcEJDLGtCQUFVSixTQUFTSyxxQkFGQztBQUdwQkMsZUFBT04sU0FBU087QUFISSxRQUFULENBRGI7QUFBQTtBQUFBLGNBTU9MLE1BQU1NLGNBQU4sQ0FBcUIsRUFBQ1AsV0FBV0EsU0FBWixFQUFyQixDQU5QOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlUSxVOzs7Ozs7eUVBU2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDS0MsUUFBUUMsWUFBUixDQURMO0FBQUE7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LHVEOzs7Ozs7QUNBQSxvRTs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxNDNhNzJjMzVhMjk4NmI4ZGIzY1xuICoqLyIsImltcG9ydCBWYXVsdFJhdyBmcm9tICdub2RlLXZhdWx0JztcbmltcG9ydCBWYXVsdCBmcm9tICd2YXVsdC1nZXQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLXByb21pc2UnO1xuaW1wb3J0IGRlYXN5bmMgZnJvbSAnZGVhc3luYyc7XG5pbXBvcnQgX19yb290ZGlybmFtZSBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBleHRlbmQgZnJvbSAnZGVlcC1leHRlbmQnO1xuaW1wb3J0IERlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCBwcm9taXNlUmV0cnkgZnJvbSAncHJvbWlzZS1yZXRyeSc7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoJ3ZhdWx0LWNvbmZpZycpO1xuY29uc3QgVkFVTFRfQ09ORklHX1JDUEFUSCA9IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19SQ1BBVEggfHwgYCR7X19yb290ZGlybmFtZX0vLnZhdWx0cmNgO1xuY29uc3QgVkFVTFRfQ09ORklHX1NFQ1JFVFNQQVRIID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1NFQ1JFVFNQQVRIIHx8IGAke19fcm9vdGRpcm5hbWV9Ly52YXVsdHNlY3JldHNgO1xuY29uc3QgVkFVTFRfR0xPQkFMID0gJ19fdmF1bHQtY29uZmlnLXNoYXJlZF9fJztcblxuYXN5bmMgZnVuY3Rpb24gcmVuZXdUb2tlbiAoc2V0dGluZ3MsIGluY3JlbWVudCkge1xuXHRsZXQgdmF1bHQgPSBWYXVsdFJhdyh7XG5cdFx0YXBpVmVyc2lvbjogJ3YxJyxcblx0XHRlbmRwb2ludDogc2V0dGluZ3MuVkFVTFRfQ09ORklHX0VORFBPSU5ULFxuXHRcdHRva2VuOiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfVE9LRU5cblx0fSk7XG5cdGF3YWl0IHZhdWx0LnRva2VuUmVuZXdTZWxmKHtpbmNyZW1lbnQ6IGluY3JlbWVudH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnQXN5bmMgKCkge1xuXHRpZiAocHJvY2Vzc1tWQVVMVF9HTE9CQUxdKSB7XG5cdFx0cmV0dXJuIHByb2Nlc3NbVkFVTFRfR0xPQkFMXTtcblx0fVxuXG5cdGxldCB2YXVsdHJjLFxuXHRcdHZhdWx0bG9jYWxyYyxcblx0XHR2YXVsdHNlY3JldHM7XG5cblx0dHJ5IHtcblx0XHR2YXVsdHJjID0gYXdhaXQgZnMucmVhZEZpbGUoVkFVTFRfQ09ORklHX1JDUEFUSCwgJ3V0ZjgnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYHZhdWx0LWNvbmZpZzogY2FuJ3QgZmluZCBcIiR7VkFVTFRfQ09ORklHX1JDUEFUSH1cIlxcbiR7ZXJyb3Iuc3RhY2t9YCk7XG5cdH1cblx0dHJ5IHtcblx0XHR2YXVsdHJjID0gSlNPTi5wYXJzZSh2YXVsdHJjKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYHZhdWx0LWNvbmZpZzogY2FuJ3QgcGFyc2UgSlNPTiBpbiBcIiR7VkFVTFRfQ09ORklHX1JDUEFUSH1cIlxcbiR7ZXJyb3Iuc3RhY2t9YCk7XG5cdH1cblxuXHR0cnkge1xuXHRcdHZhdWx0bG9jYWxyYyA9IGF3YWl0IGZzLnJlYWRGaWxlKGAke19fcm9vdGRpcm5hbWV9Ly52YXVsdGxvY2FscmNgLCAndXRmOCcpO1xuXHR9IGNhdGNoIChlcnJvcikge31cblx0aWYgKHZhdWx0bG9jYWxyYykge1xuXHRcdHRyeSB7XG5cdFx0XHR2YXVsdGxvY2FscmMgPSBKU09OLnBhcnNlKHZhdWx0bG9jYWxyYyk7XG5cdFx0XHR2YXVsdHJjID0gZXh0ZW5kKHZhdWx0cmMsIHZhdWx0bG9jYWxyYyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgdmF1bHQtY29uZmlnOiBjYW4ndCBwYXJzZSBKU09OIGluIFwiJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRsb2NhbHJjXCJcXG4ke2Vycm9yLnN0YWNrfWApO1xuXHRcdH1cblx0fVxuXG5cdHRyeSB7XG5cdFx0dmF1bHRzZWNyZXRzID0gYXdhaXQgZnMucmVhZEZpbGUoVkFVTFRfQ09ORklHX1NFQ1JFVFNQQVRILCAndXRmOCcpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHZhdWx0c2VjcmV0cyA9IHt9O1xuXHR9XG5cdGlmICh0eXBlb2YgdmF1bHRzZWNyZXRzID09PSAnc3RyaW5nJykge1xuXHRcdHRyeSB7XG5cdFx0XHR2YXVsdHNlY3JldHMgPSBKU09OLnBhcnNlKHZhdWx0c2VjcmV0cyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgdmF1bHQtY29uZmlnOiBjYW4ndCBwYXJzZSBKU09OIGluIFwiJHtWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEh9XCJcXG4ke2Vycm9yLnN0YWNrfWApO1xuXHRcdH1cblx0fVxuXG5cdC8vIG1lcmdlIGNvbmZpZ3Ncblx0bGV0IGNvbmZpZ3MgPSBPYmplY3Qua2V5cyh2YXVsdHJjKVxuXHRcdC5tYXAoa2V5ID0+IHtcblx0XHRcdGxldCBlbnZNYXRjaCA9IGtleS5tYXRjaCgvXk5PREVfRU5WPSguKykvKSxcblx0XHRcdFx0bm9kZUVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICcnO1xuXG5cdFx0XHRpZiAoZW52TWF0Y2ggJiYgbm9kZUVudi5tYXRjaChgXiR7ZW52TWF0Y2hbMV19JGApKSB7XG5cdFx0XHRcdHJldHVybiBrZXk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmlsdGVyKGtleSA9PiBrZXkpXG5cdFx0Lm1hcChrZXkgPT4gdmF1bHRyY1trZXldKTtcblxuXHRpZiAoY29uZmlncy5sZW5ndGgpIHtcblx0XHRjb25maWdzID0gY29uZmlncy5yZWR1Y2UoZXh0ZW5kKTtcblx0XHRjb25maWdzLnZhdWx0ID0gY29uZmlncy52YXVsdCB8fCB7fTtcblx0XHRjb25maWdzLmxvY2FsID0gY29uZmlncy5sb2NhbCB8fCB7fTtcblxuXHRcdC8vIGJyZWFrIG91dCBlYXJseSwgd2UgaGF2ZSBubyBtYXRjaGluZyB2YXVsdCBydWxlc1xuXHRcdGlmICghT2JqZWN0LmtleXMoY29uZmlncy52YXVsdCkubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gY29uZmlncy5sb2NhbDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gYnJlYWsgb3V0IGVhcmx5LCB3ZSBkb250IGhhdmUgYW55IHJ1bGVzXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0bGV0IHNldHRpbmdzID0ge307XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTiA9IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19UT0tFTiB8fCB2YXVsdHNlY3JldHMuVkFVTFRfQ09ORklHX1RPS0VOO1xuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX0tFWSB8fCB2YXVsdHNlY3JldHMuVkFVTFRfQ09ORklHX0tFWTtcblx0aWYgKHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19LRVlTKSB7XG5cdFx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWVMgPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfS0VZUy5zcGxpdCgnLCcpO1xuXHR9IGVsc2Uge1xuXHRcdHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVlTID0gdmF1bHRzZWNyZXRzLlZBVUxUX0NPTkZJR19LRVlTO1xuXHR9XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19FTkRQT0lOVCA9IHZhdWx0cmMuVkFVTFRfQ09ORklHX0VORFBPSU5UIHx8IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19FTkRQT0lOVDtcblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX1JPT1RQQVRIID0gdmF1bHRyYy5WQVVMVF9DT05GSUdfUk9PVFBBVEggfHwgcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1JPT1RQQVRIO1xuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFUyA9IHZhdWx0cmMuVkFVTFRfQ09ORklHX1NFQ1JFVF9TSEFSRVMgfHwgcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1NFQ1JFVF9TSEFSRVM7XG5cblx0aWYgKCFzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQpIHtcblx0XHRkZWJ1ZygnbWlzc2luZyBcIlZBVUxUX0NPTkZJR19FTkRQT0lOVFwiJyk7XG5cdFx0cmV0dXJuIGNvbmZpZ3MubG9jYWw7XG5cdH1cblxuXHRpZiAoIXNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTikge1xuXHRcdHRocm93IG5ldyBFcnJvcigndmF1bHQtY29uZmlnOiBtaXNzaW5nIFwiVkFVTFRfQ09ORklHX1RPS0VOXCInKTtcblx0fVxuXG5cdGxldCB2YXVsdCA9IFZhdWx0KHtcblx0XHRlbmRwb2ludDogc2V0dGluZ3MuVkFVTFRfQ09ORklHX0VORFBPSU5ULFxuXHRcdHRva2VuOiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfVE9LRU4sXG5cdFx0a2V5czogc2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWVMsXG5cdFx0a2V5OiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZLFxuXHRcdHJvb3RQYXRoOiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfUk9PVFBBVEgsXG5cdFx0c2VjcmV0U2hhcmVzOiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFU1xuXHR9KTtcblxuXHR0cnkge1xuXHRcdGlmICghcHJvY2Vzcy5lbnYuVkFVTFRfRElTQUJMRV9BVVRPUkVORVcpIHtcblx0XHRcdGNvbnN0IGluY3JlbWVudCA9IHBhcnNlSW50KHByb2Nlc3MuZW52LlZBVUxUX0FVVE9SRU5FV19JTkNSRU1FTlQgfHwgMjU4MDAwMCwgMTApO1xuXHRcdFx0YXdhaXQgcmVuZXdUb2tlbihzZXR0aW5ncywgaW5jcmVtZW50KTtcblx0XHR9XG5cdFx0Y29uZmlncy52YXVsdCA9IGF3YWl0IHZhdWx0LmdldChjb25maWdzLnZhdWx0KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvci5tZXNzYWdlID0gYHZhdWx0LWNvbmZpZzogXFxuJHtlcnJvci5tZXNzYWdlfWA7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cblxuXHRyZXR1cm4gcHJvY2Vzc1tWQVVMVF9HTE9CQUxdID0gZXh0ZW5kKGNvbmZpZ3MudmF1bHQsIGNvbmZpZ3MubG9jYWwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFzeW5jKGNhbGxiYWNrID0+IHtcblx0cHJvbWlzZVJldHJ5KCgpID0+IHtcblx0XHRyZXR1cm4gbG9hZENvbmZpZ0FzeW5jKCk7XG5cdH0sIHtyZXRyaWVzOiAxMH0pLnRoZW4oXG5cdFx0Y29uZmlnID0+IGNhbGxiYWNrKG51bGwsIGNvbmZpZyksXG5cdFx0Y2FsbGJhY2tcblx0KS5jYXRjaChjYWxsYmFjayk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS12YXVsdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibm9kZS12YXVsdFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmF1bHQtZ2V0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ2YXVsdC1nZXRcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLXByb21pc2VcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZzLXByb21pc2VcIlxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlYXN5bmNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImRlYXN5bmNcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwcC1yb290LXBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFwcC1yb290LXBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlZXAtZXh0ZW5kXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJkZWVwLWV4dGVuZFwiXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVidWdcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImRlYnVnXCJcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvbWlzZS1yZXRyeVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicHJvbWlzZS1yZXRyeVwiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=