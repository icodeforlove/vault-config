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
	
	var _promise = __webpack_require__(4);
	
	var _promise2 = _interopRequireDefault(_promise);
	
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
	
	var _nodeVault = __webpack_require__(5);
	
	var _nodeVault2 = _interopRequireDefault(_nodeVault);
	
	var _vaultGet = __webpack_require__(6);
	
	var _vaultGet2 = _interopRequireDefault(_vaultGet);
	
	var _fsPromise = __webpack_require__(7);
	
	var _fsPromise2 = _interopRequireDefault(_fsPromise);
	
	var _deasync = __webpack_require__(8);
	
	var _deasync2 = _interopRequireDefault(_deasync);
	
	var _appRootPath = __webpack_require__(9);
	
	var _appRootPath2 = _interopRequireDefault(_appRootPath);
	
	var _deepExtend = __webpack_require__(10);
	
	var _deepExtend2 = _interopRequireDefault(_deepExtend);
	
	var _debug = __webpack_require__(11);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PromiseRetryer = __webpack_require__(12)(_promise2.default);
	
	var debug = (0, _debug2.default)('vault-config');
	var VAULT_CONFIG_RCPATH = process.env.VAULT_CONFIG_RCPATH || _appRootPath2.default + '/.vaultrc';
	var VAULT_CONFIG_SECRETSPATH = process.env.VAULT_CONFIG_SECRETSPATH || _appRootPath2.default + '/.vaultsecrets';
	var VAULT_GLOBAL = '__vault-config-shared__';
	
	exports.default = (0, _deasync2.default)(function (callback) {
		PromiseRetryer.run({
			delay: 1000,
			maxRetries: 10,
			promise: loadConfigAsync
		}).then(function (config) {
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

	module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("node-vault");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("vault-get");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("fs-promise");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("deasync");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("app-root-path");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("deep-extend");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("debug");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("promise-retryer");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzM4YzE3YjhkZWQwNzM4MjA5NjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS12YXVsdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZhdWx0LWdldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWFzeW5jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlZXAtZXh0ZW5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVidWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9taXNlLXJldHJ5ZXJcIiJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsImluY3JlbWVudCIsInZhdWx0IiwiYXBpVmVyc2lvbiIsImVuZHBvaW50IiwiVkFVTFRfQ09ORklHX0VORFBPSU5UIiwidG9rZW4iLCJWQVVMVF9DT05GSUdfVE9LRU4iLCJ0b2tlblJlbmV3U2VsZiIsInJlbmV3VG9rZW4iLCJwcm9jZXNzIiwiVkFVTFRfR0xPQkFMIiwidmF1bHRyYyIsInZhdWx0bG9jYWxyYyIsInZhdWx0c2VjcmV0cyIsInJlYWRGaWxlIiwiVkFVTFRfQ09ORklHX1JDUEFUSCIsIkVycm9yIiwic3RhY2siLCJKU09OIiwicGFyc2UiLCJWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEgiLCJjb25maWdzIiwibWFwIiwiZW52TWF0Y2giLCJrZXkiLCJtYXRjaCIsIm5vZGVFbnYiLCJlbnYiLCJOT0RFX0VOViIsImZpbHRlciIsImxlbmd0aCIsInJlZHVjZSIsImxvY2FsIiwiVkFVTFRfQ09ORklHX0tFWSIsIlZBVUxUX0NPTkZJR19LRVlTIiwic3BsaXQiLCJWQVVMVF9DT05GSUdfUk9PVFBBVEgiLCJWQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFUyIsImRlYnVnIiwia2V5cyIsInJvb3RQYXRoIiwic2VjcmV0U2hhcmVzIiwiVkFVTFRfRElTQUJMRV9BVVRPUkVORVciLCJwYXJzZUludCIsIlZBVUxUX0FVVE9SRU5FV19JTkNSRU1FTlQiLCJnZXQiLCJtZXNzYWdlIiwibG9hZENvbmZpZ0FzeW5jIiwiUHJvbWlzZVJldHJ5ZXIiLCJyZXF1aXJlIiwicnVuIiwiZGVsYXkiLCJtYXhSZXRyaWVzIiwicHJvbWlzZSIsInRoZW4iLCJjYWxsYmFjayIsImNvbmZpZyIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RUN4QkEsaUJBQTJCQSxRQUEzQixFQUFxQ0MsU0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0tDLFlBREwsR0FDYSx5QkFBUztBQUNwQkMsb0JBQVksSUFEUTtBQUVwQkMsa0JBQVVKLFNBQVNLLHFCQUZDO0FBR3BCQyxlQUFPTixTQUFTTztBQUhJLFFBQVQsQ0FEYjtBQUFBO0FBQUEsY0FNT0wsTUFBTU0sY0FBTixDQUFxQixFQUFDUCxXQUFXQSxTQUFaLEVBQXJCLENBTlA7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RUFGTTtBQUdsQkMsWUFBU047QUFIUyxHQUFuQixFQUlHTyxJQUpILENBS0M7QUFBQSxVQUFVQyxTQUFTLElBQVQsRUFBZUMsTUFBZixDQUFWO0FBQUEsR0FMRCxFQU1DRCxRQU5ELEVBT0VFLEtBUEYsQ0FPUUYsUUFQUjtBQVFBLEVBVGMsRzs7Ozs7OztBQzNJZiwrRDs7Ozs7O0FDQUEsdUQ7Ozs7OztBQ0FBLG9FOzs7Ozs7QUNBQSwyRDs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3MzhjMTdiOGRlZDA3MzgyMDk2NVxuICoqLyIsImltcG9ydCBWYXVsdFJhdyBmcm9tICdub2RlLXZhdWx0JztcbmltcG9ydCBWYXVsdCBmcm9tICd2YXVsdC1nZXQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLXByb21pc2UnO1xuaW1wb3J0IGRlYXN5bmMgZnJvbSAnZGVhc3luYyc7XG5pbXBvcnQgX19yb290ZGlybmFtZSBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBleHRlbmQgZnJvbSAnZGVlcC1leHRlbmQnO1xuaW1wb3J0IERlYnVnIGZyb20gJ2RlYnVnJztcbmxldCBQcm9taXNlUmV0cnllciA9IHJlcXVpcmUoJ3Byb21pc2UtcmV0cnllcicpKFByb21pc2UpO1xuXG5jb25zdCBkZWJ1ZyA9IERlYnVnKCd2YXVsdC1jb25maWcnKTtcbmNvbnN0IFZBVUxUX0NPTkZJR19SQ1BBVEggPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfUkNQQVRIIHx8IGAke19fcm9vdGRpcm5hbWV9Ly52YXVsdHJjYDtcbmNvbnN0IFZBVUxUX0NPTkZJR19TRUNSRVRTUEFUSCA9IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19TRUNSRVRTUEFUSCB8fCBgJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRzZWNyZXRzYDtcbmNvbnN0IFZBVUxUX0dMT0JBTCA9ICdfX3ZhdWx0LWNvbmZpZy1zaGFyZWRfXyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmV3VG9rZW4gKHNldHRpbmdzLCBpbmNyZW1lbnQpIHtcblx0bGV0IHZhdWx0ID0gVmF1bHRSYXcoe1xuXHRcdGFwaVZlcnNpb246ICd2MScsXG5cdFx0ZW5kcG9pbnQ6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19FTkRQT0lOVCxcblx0XHR0b2tlbjogc2V0dGluZ3MuVkFVTFRfQ09ORklHX1RPS0VOXG5cdH0pO1xuXHRhd2FpdCB2YXVsdC50b2tlblJlbmV3U2VsZih7aW5jcmVtZW50OiBpbmNyZW1lbnR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZ0FzeW5jICgpIHtcblx0aWYgKHByb2Nlc3NbVkFVTFRfR0xPQkFMXSkge1xuXHRcdHJldHVybiBwcm9jZXNzW1ZBVUxUX0dMT0JBTF07XG5cdH1cblxuXHRsZXQgdmF1bHRyYyxcblx0XHR2YXVsdGxvY2FscmMsXG5cdFx0dmF1bHRzZWNyZXRzO1xuXG5cdHRyeSB7XG5cdFx0dmF1bHRyYyA9IGF3YWl0IGZzLnJlYWRGaWxlKFZBVUxUX0NPTkZJR19SQ1BBVEgsICd1dGY4Jyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGB2YXVsdC1jb25maWc6IGNhbid0IGZpbmQgXCIke1ZBVUxUX0NPTkZJR19SQ1BBVEh9XCJcXG4ke2Vycm9yLnN0YWNrfWApO1xuXHR9XG5cdHRyeSB7XG5cdFx0dmF1bHRyYyA9IEpTT04ucGFyc2UodmF1bHRyYyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGB2YXVsdC1jb25maWc6IGNhbid0IHBhcnNlIEpTT04gaW4gXCIke1ZBVUxUX0NPTkZJR19SQ1BBVEh9XCJcXG4ke2Vycm9yLnN0YWNrfWApO1xuXHR9XG5cblx0dHJ5IHtcblx0XHR2YXVsdGxvY2FscmMgPSBhd2FpdCBmcy5yZWFkRmlsZShgJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRsb2NhbHJjYCwgJ3V0ZjgnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHt9XG5cdGlmICh2YXVsdGxvY2FscmMpIHtcblx0XHR0cnkge1xuXHRcdFx0dmF1bHRsb2NhbHJjID0gSlNPTi5wYXJzZSh2YXVsdGxvY2FscmMpO1xuXHRcdFx0dmF1bHRyYyA9IGV4dGVuZCh2YXVsdHJjLCB2YXVsdGxvY2FscmMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYHZhdWx0LWNvbmZpZzogY2FuJ3QgcGFyc2UgSlNPTiBpbiBcIiR7X19yb290ZGlybmFtZX0vLnZhdWx0bG9jYWxyY1wiXFxuJHtlcnJvci5zdGFja31gKTtcblx0XHR9XG5cdH1cblxuXHR0cnkge1xuXHRcdHZhdWx0c2VjcmV0cyA9IGF3YWl0IGZzLnJlYWRGaWxlKFZBVUxUX0NPTkZJR19TRUNSRVRTUEFUSCwgJ3V0ZjgnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR2YXVsdHNlY3JldHMgPSB7fTtcblx0fVxuXHRpZiAodHlwZW9mIHZhdWx0c2VjcmV0cyA9PT0gJ3N0cmluZycpIHtcblx0XHR0cnkge1xuXHRcdFx0dmF1bHRzZWNyZXRzID0gSlNPTi5wYXJzZSh2YXVsdHNlY3JldHMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYHZhdWx0LWNvbmZpZzogY2FuJ3QgcGFyc2UgSlNPTiBpbiBcIiR7VkFVTFRfQ09ORklHX1NFQ1JFVFNQQVRIfVwiXFxuJHtlcnJvci5zdGFja31gKTtcblx0XHR9XG5cdH1cblxuXHQvLyBtZXJnZSBjb25maWdzXG5cdGxldCBjb25maWdzID0gT2JqZWN0LmtleXModmF1bHRyYylcblx0XHQubWFwKGtleSA9PiB7XG5cdFx0XHRsZXQgZW52TWF0Y2ggPSBrZXkubWF0Y2goL15OT0RFX0VOVj0oLispLyksXG5cdFx0XHRcdG5vZGVFbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnJztcblxuXHRcdFx0aWYgKGVudk1hdGNoICYmIG5vZGVFbnYubWF0Y2goYF4ke2Vudk1hdGNoWzFdfSRgKSkge1xuXHRcdFx0XHRyZXR1cm4ga2V5O1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmZpbHRlcihrZXkgPT4ga2V5KVxuXHRcdC5tYXAoa2V5ID0+IHZhdWx0cmNba2V5XSk7XG5cblx0aWYgKGNvbmZpZ3MubGVuZ3RoKSB7XG5cdFx0Y29uZmlncyA9IGNvbmZpZ3MucmVkdWNlKGV4dGVuZCk7XG5cdFx0Y29uZmlncy52YXVsdCA9IGNvbmZpZ3MudmF1bHQgfHwge307XG5cdFx0Y29uZmlncy5sb2NhbCA9IGNvbmZpZ3MubG9jYWwgfHwge307XG5cblx0XHQvLyBicmVhayBvdXQgZWFybHksIHdlIGhhdmUgbm8gbWF0Y2hpbmcgdmF1bHQgcnVsZXNcblx0XHRpZiAoIU9iamVjdC5rZXlzKGNvbmZpZ3MudmF1bHQpLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGNvbmZpZ3MubG9jYWw7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGJyZWFrIG91dCBlYXJseSwgd2UgZG9udCBoYXZlIGFueSBydWxlc1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGxldCBzZXR0aW5ncyA9IHt9O1xuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfVE9LRU4gPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfVE9LRU4gfHwgdmF1bHRzZWNyZXRzLlZBVUxUX0NPTkZJR19UT0tFTjtcblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWSA9IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19LRVkgfHwgdmF1bHRzZWNyZXRzLlZBVUxUX0NPTkZJR19LRVk7XG5cdGlmIChwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfS0VZUykge1xuXHRcdHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVlTID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX0tFWVMuc3BsaXQoJywnKTtcblx0fSBlbHNlIHtcblx0XHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZUyA9IHZhdWx0c2VjcmV0cy5WQVVMVF9DT05GSUdfS0VZUztcblx0fVxuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQgPSB2YXVsdHJjLlZBVUxUX0NPTkZJR19FTkRQT0lOVCB8fCBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfRU5EUE9JTlQ7XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19ST09UUEFUSCA9IHZhdWx0cmMuVkFVTFRfQ09ORklHX1JPT1RQQVRIIHx8IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19ST09UUEFUSDtcblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX1NFQ1JFVF9TSEFSRVMgPSB2YXVsdHJjLlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTIHx8IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTO1xuXG5cdGlmICghc2V0dGluZ3MuVkFVTFRfQ09ORklHX0VORFBPSU5UKSB7XG5cdFx0ZGVidWcoJ21pc3NpbmcgXCJWQVVMVF9DT05GSUdfRU5EUE9JTlRcIicpO1xuXHRcdHJldHVybiBjb25maWdzLmxvY2FsO1xuXHR9XG5cblx0aWYgKCFzZXR0aW5ncy5WQVVMVF9DT05GSUdfVE9LRU4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3ZhdWx0LWNvbmZpZzogbWlzc2luZyBcIlZBVUxUX0NPTkZJR19UT0tFTlwiJyk7XG5cdH1cblxuXHRsZXQgdmF1bHQgPSBWYXVsdCh7XG5cdFx0ZW5kcG9pbnQ6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19FTkRQT0lOVCxcblx0XHR0b2tlbjogc2V0dGluZ3MuVkFVTFRfQ09ORklHX1RPS0VOLFxuXHRcdGtleXM6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVlTLFxuXHRcdGtleTogc2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWSxcblx0XHRyb290UGF0aDogc2V0dGluZ3MuVkFVTFRfQ09ORklHX1JPT1RQQVRILFxuXHRcdHNlY3JldFNoYXJlczogc2V0dGluZ3MuVkFVTFRfQ09ORklHX1NFQ1JFVF9TSEFSRVNcblx0fSk7XG5cblx0dHJ5IHtcblx0XHRpZiAoIXByb2Nlc3MuZW52LlZBVUxUX0RJU0FCTEVfQVVUT1JFTkVXKSB7XG5cdFx0XHRjb25zdCBpbmNyZW1lbnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5WQVVMVF9BVVRPUkVORVdfSU5DUkVNRU5UIHx8IDI1ODAwMDAsIDEwKTtcblx0XHRcdGF3YWl0IHJlbmV3VG9rZW4oc2V0dGluZ3MsIGluY3JlbWVudCk7XG5cdFx0fVxuXHRcdGNvbmZpZ3MudmF1bHQgPSBhd2FpdCB2YXVsdC5nZXQoY29uZmlncy52YXVsdCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3IubWVzc2FnZSA9IGB2YXVsdC1jb25maWc6IFxcbiR7ZXJyb3IubWVzc2FnZX1gO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG5cblx0cmV0dXJuIHByb2Nlc3NbVkFVTFRfR0xPQkFMXSA9IGV4dGVuZChjb25maWdzLnZhdWx0LCBjb25maWdzLmxvY2FsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVhc3luYyhjYWxsYmFjayA9PiB7XG5cdFByb21pc2VSZXRyeWVyLnJ1bih7XG5cdFx0ZGVsYXk6IDEwMDAsXG5cdFx0bWF4UmV0cmllczogMTAsXG5cdFx0cHJvbWlzZTogbG9hZENvbmZpZ0FzeW5jXG5cdH0pLnRoZW4oXG5cdFx0Y29uZmlnID0+IGNhbGxiYWNrKG51bGwsIGNvbmZpZyksXG5cdFx0Y2FsbGJhY2tcblx0KS5jYXRjaChjYWxsYmFjayk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXZhdWx0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJub2RlLXZhdWx0XCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YXVsdC1nZXRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInZhdWx0LWdldFwiXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtcHJvbWlzZVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZnMtcHJvbWlzZVwiXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVhc3luY1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZGVhc3luY1wiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBwLXJvb3QtcGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVlcC1leHRlbmRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImRlZXAtZXh0ZW5kXCJcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVidWdcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImRlYnVnXCJcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvbWlzZS1yZXRyeWVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJwcm9taXNlLXJldHJ5ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9