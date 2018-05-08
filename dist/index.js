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
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(retry) {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.prev = 0;
								_context3.next = 3;
								return loadConfigAsync();
	
							case 3:
								return _context3.abrupt('return', _context3.sent);
	
							case 6:
								_context3.prev = 6;
								_context3.t0 = _context3['catch'](0);
								return _context3.abrupt('return', retry());
	
							case 9:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, undefined, [[0, 6]]);
			}));
	
			return function (_x3) {
				return _ref3.apply(this, arguments);
			};
		}(), { maxTimeout: 1000, retries: 10 }).then(function (config) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDI4NzVhOWU3ZGVlZWRhYmY2ODEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdmF1bHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YXVsdC1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVhc3luY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwcC1yb290LXBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWVwLWV4dGVuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlYnVnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvbWlzZS1yZXRyeVwiIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiaW5jcmVtZW50IiwidmF1bHQiLCJhcGlWZXJzaW9uIiwiZW5kcG9pbnQiLCJWQVVMVF9DT05GSUdfRU5EUE9JTlQiLCJ0b2tlbiIsIlZBVUxUX0NPTkZJR19UT0tFTiIsInRva2VuUmVuZXdTZWxmIiwicmVuZXdUb2tlbiIsInByb2Nlc3MiLCJWQVVMVF9HTE9CQUwiLCJ2YXVsdHJjIiwidmF1bHRsb2NhbHJjIiwidmF1bHRzZWNyZXRzIiwicmVhZEZpbGUiLCJWQVVMVF9DT05GSUdfUkNQQVRIIiwiRXJyb3IiLCJzdGFjayIsIkpTT04iLCJwYXJzZSIsIlZBVUxUX0NPTkZJR19TRUNSRVRTUEFUSCIsImNvbmZpZ3MiLCJtYXAiLCJlbnZNYXRjaCIsImtleSIsIm1hdGNoIiwibm9kZUVudiIsImVudiIsIk5PREVfRU5WIiwiZmlsdGVyIiwibGVuZ3RoIiwicmVkdWNlIiwibG9jYWwiLCJWQVVMVF9DT05GSUdfS0VZIiwiVkFVTFRfQ09ORklHX0tFWVMiLCJzcGxpdCIsIlZBVUxUX0NPTkZJR19ST09UUEFUSCIsIlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTIiwiZGVidWciLCJrZXlzIiwicm9vdFBhdGgiLCJzZWNyZXRTaGFyZXMiLCJWQVVMVF9ESVNBQkxFX0FVVE9SRU5FVyIsInBhcnNlSW50IiwiVkFVTFRfQVVUT1JFTkVXX0lOQ1JFTUVOVCIsImdldCIsIm1lc3NhZ2UiLCJsb2FkQ29uZmlnQXN5bmMiLCJyZXRyeSIsIm1heFRpbWVvdXQiLCJyZXRyaWVzIiwidGhlbiIsImNhbGxiYWNrIiwiY29uZmlnIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0VDeEJBLGlCQUEyQkEsUUFBM0IsRUFBcUNDLFNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLQyxZQURMLEdBQ2EseUJBQVM7QUFDcEJDLG9CQUFZLElBRFE7QUFFcEJDLGtCQUFVSixTQUFTSyxxQkFGQztBQUdwQkMsZUFBT04sU0FBU087QUFISSxRQUFULENBRGI7QUFBQTtBQUFBLGNBTU9MLE1BQU1NLGNBQU4sQ0FBcUIsRUFBQ1AsV0FBV0EsU0FBWixFQUFyQixDQU5QOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlUSxVOzs7Ozs7eUVBU2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDS0Ms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TUcsRUFBQ0MsWUFBWSxJQUFiLEVBQW1CQyxTQUFTLEVBQTVCLEVBTkgsRUFNb0NDLElBTnBDLENBT0M7QUFBQSxVQUFVQyxTQUFTLElBQVQsRUFBZUMsTUFBZixDQUFWO0FBQUEsR0FQRCxFQVFDRCxRQVJELEVBU0VFLEtBVEYsQ0FTUUYsUUFUUjtBQVVBLEVBWGMsRzs7Ozs7OztBQzNJZiwrRDs7Ozs7O0FDQUEsdUQ7Ozs7OztBQ0FBLG9FOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGQyODc1YTllN2RlZWVkYWJmNjgxXG4gKiovIiwiaW1wb3J0IFZhdWx0UmF3IGZyb20gJ25vZGUtdmF1bHQnO1xuaW1wb3J0IFZhdWx0IGZyb20gJ3ZhdWx0LWdldCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMtcHJvbWlzZSc7XG5pbXBvcnQgZGVhc3luYyBmcm9tICdkZWFzeW5jJztcbmltcG9ydCBfX3Jvb3RkaXJuYW1lIGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICdkZWVwLWV4dGVuZCc7XG5pbXBvcnQgRGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHByb21pc2VSZXRyeSBmcm9tICdwcm9taXNlLXJldHJ5JztcblxuY29uc3QgZGVidWcgPSBEZWJ1ZygndmF1bHQtY29uZmlnJyk7XG5jb25zdCBWQVVMVF9DT05GSUdfUkNQQVRIID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1JDUEFUSCB8fCBgJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRyY2A7XG5jb25zdCBWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEggPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfU0VDUkVUU1BBVEggfHwgYCR7X19yb290ZGlybmFtZX0vLnZhdWx0c2VjcmV0c2A7XG5jb25zdCBWQVVMVF9HTE9CQUwgPSAnX192YXVsdC1jb25maWctc2hhcmVkX18nO1xuXG5hc3luYyBmdW5jdGlvbiByZW5ld1Rva2VuIChzZXR0aW5ncywgaW5jcmVtZW50KSB7XG5cdGxldCB2YXVsdCA9IFZhdWx0UmF3KHtcblx0XHRhcGlWZXJzaW9uOiAndjEnLFxuXHRcdGVuZHBvaW50OiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQsXG5cdFx0dG9rZW46IHNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTlxuXHR9KTtcblx0YXdhaXQgdmF1bHQudG9rZW5SZW5ld1NlbGYoe2luY3JlbWVudDogaW5jcmVtZW50fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWdBc3luYyAoKSB7XG5cdGlmIChwcm9jZXNzW1ZBVUxUX0dMT0JBTF0pIHtcblx0XHRyZXR1cm4gcHJvY2Vzc1tWQVVMVF9HTE9CQUxdO1xuXHR9XG5cblx0bGV0IHZhdWx0cmMsXG5cdFx0dmF1bHRsb2NhbHJjLFxuXHRcdHZhdWx0c2VjcmV0cztcblxuXHR0cnkge1xuXHRcdHZhdWx0cmMgPSBhd2FpdCBmcy5yZWFkRmlsZShWQVVMVF9DT05GSUdfUkNQQVRILCAndXRmOCcpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHRocm93IG5ldyBFcnJvcihgdmF1bHQtY29uZmlnOiBjYW4ndCBmaW5kIFwiJHtWQVVMVF9DT05GSUdfUkNQQVRIfVwiXFxuJHtlcnJvci5zdGFja31gKTtcblx0fVxuXHR0cnkge1xuXHRcdHZhdWx0cmMgPSBKU09OLnBhcnNlKHZhdWx0cmMpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHRocm93IG5ldyBFcnJvcihgdmF1bHQtY29uZmlnOiBjYW4ndCBwYXJzZSBKU09OIGluIFwiJHtWQVVMVF9DT05GSUdfUkNQQVRIfVwiXFxuJHtlcnJvci5zdGFja31gKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0dmF1bHRsb2NhbHJjID0gYXdhaXQgZnMucmVhZEZpbGUoYCR7X19yb290ZGlybmFtZX0vLnZhdWx0bG9jYWxyY2AsICd1dGY4Jyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7fVxuXHRpZiAodmF1bHRsb2NhbHJjKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHZhdWx0bG9jYWxyYyA9IEpTT04ucGFyc2UodmF1bHRsb2NhbHJjKTtcblx0XHRcdHZhdWx0cmMgPSBleHRlbmQodmF1bHRyYywgdmF1bHRsb2NhbHJjKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGB2YXVsdC1jb25maWc6IGNhbid0IHBhcnNlIEpTT04gaW4gXCIke19fcm9vdGRpcm5hbWV9Ly52YXVsdGxvY2FscmNcIlxcbiR7ZXJyb3Iuc3RhY2t9YCk7XG5cdFx0fVxuXHR9XG5cblx0dHJ5IHtcblx0XHR2YXVsdHNlY3JldHMgPSBhd2FpdCBmcy5yZWFkRmlsZShWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEgsICd1dGY4Jyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dmF1bHRzZWNyZXRzID0ge307XG5cdH1cblx0aWYgKHR5cGVvZiB2YXVsdHNlY3JldHMgPT09ICdzdHJpbmcnKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHZhdWx0c2VjcmV0cyA9IEpTT04ucGFyc2UodmF1bHRzZWNyZXRzKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGB2YXVsdC1jb25maWc6IGNhbid0IHBhcnNlIEpTT04gaW4gXCIke1ZBVUxUX0NPTkZJR19TRUNSRVRTUEFUSH1cIlxcbiR7ZXJyb3Iuc3RhY2t9YCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gbWVyZ2UgY29uZmlnc1xuXHRsZXQgY29uZmlncyA9IE9iamVjdC5rZXlzKHZhdWx0cmMpXG5cdFx0Lm1hcChrZXkgPT4ge1xuXHRcdFx0bGV0IGVudk1hdGNoID0ga2V5Lm1hdGNoKC9eTk9ERV9FTlY9KC4rKS8pLFxuXHRcdFx0XHRub2RlRW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJyc7XG5cblx0XHRcdGlmIChlbnZNYXRjaCAmJiBub2RlRW52Lm1hdGNoKGBeJHtlbnZNYXRjaFsxXX0kYCkpIHtcblx0XHRcdFx0cmV0dXJuIGtleTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5maWx0ZXIoa2V5ID0+IGtleSlcblx0XHQubWFwKGtleSA9PiB2YXVsdHJjW2tleV0pO1xuXG5cdGlmIChjb25maWdzLmxlbmd0aCkge1xuXHRcdGNvbmZpZ3MgPSBjb25maWdzLnJlZHVjZShleHRlbmQpO1xuXHRcdGNvbmZpZ3MudmF1bHQgPSBjb25maWdzLnZhdWx0IHx8IHt9O1xuXHRcdGNvbmZpZ3MubG9jYWwgPSBjb25maWdzLmxvY2FsIHx8IHt9O1xuXG5cdFx0Ly8gYnJlYWsgb3V0IGVhcmx5LCB3ZSBoYXZlIG5vIG1hdGNoaW5nIHZhdWx0IHJ1bGVzXG5cdFx0aWYgKCFPYmplY3Qua2V5cyhjb25maWdzLnZhdWx0KS5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBjb25maWdzLmxvY2FsO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBicmVhayBvdXQgZWFybHksIHdlIGRvbnQgaGF2ZSBhbnkgcnVsZXNcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRsZXQgc2V0dGluZ3MgPSB7fTtcblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX1RPS0VOID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1RPS0VOIHx8IHZhdWx0c2VjcmV0cy5WQVVMVF9DT05GSUdfVE9LRU47XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVkgPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfS0VZIHx8IHZhdWx0c2VjcmV0cy5WQVVMVF9DT05GSUdfS0VZO1xuXHRpZiAocHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX0tFWVMpIHtcblx0XHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZUyA9IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19LRVlTLnNwbGl0KCcsJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWVMgPSB2YXVsdHNlY3JldHMuVkFVTFRfQ09ORklHX0tFWVM7XG5cdH1cblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX0VORFBPSU5UID0gdmF1bHRyYy5WQVVMVF9DT05GSUdfRU5EUE9JTlQgfHwgcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX0VORFBPSU5UO1xuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfUk9PVFBBVEggPSB2YXVsdHJjLlZBVUxUX0NPTkZJR19ST09UUEFUSCB8fCBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfUk9PVFBBVEg7XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTID0gdmF1bHRyYy5WQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFUyB8fCBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFUztcblxuXHRpZiAoIXNldHRpbmdzLlZBVUxUX0NPTkZJR19FTkRQT0lOVCkge1xuXHRcdGRlYnVnKCdtaXNzaW5nIFwiVkFVTFRfQ09ORklHX0VORFBPSU5UXCInKTtcblx0XHRyZXR1cm4gY29uZmlncy5sb2NhbDtcblx0fVxuXG5cdGlmICghc2V0dGluZ3MuVkFVTFRfQ09ORklHX1RPS0VOKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCd2YXVsdC1jb25maWc6IG1pc3NpbmcgXCJWQVVMVF9DT05GSUdfVE9LRU5cIicpO1xuXHR9XG5cblx0bGV0IHZhdWx0ID0gVmF1bHQoe1xuXHRcdGVuZHBvaW50OiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQsXG5cdFx0dG9rZW46IHNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTixcblx0XHRrZXlzOiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZUyxcblx0XHRrZXk6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVksXG5cdFx0cm9vdFBhdGg6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19ST09UUEFUSCxcblx0XHRzZWNyZXRTaGFyZXM6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTXG5cdH0pO1xuXG5cdHRyeSB7XG5cdFx0aWYgKCFwcm9jZXNzLmVudi5WQVVMVF9ESVNBQkxFX0FVVE9SRU5FVykge1xuXHRcdFx0Y29uc3QgaW5jcmVtZW50ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuVkFVTFRfQVVUT1JFTkVXX0lOQ1JFTUVOVCB8fCAyNTgwMDAwLCAxMCk7XG5cdFx0XHRhd2FpdCByZW5ld1Rva2VuKHNldHRpbmdzLCBpbmNyZW1lbnQpO1xuXHRcdH1cblx0XHRjb25maWdzLnZhdWx0ID0gYXdhaXQgdmF1bHQuZ2V0KGNvbmZpZ3MudmF1bHQpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yLm1lc3NhZ2UgPSBgdmF1bHQtY29uZmlnOiBcXG4ke2Vycm9yLm1lc3NhZ2V9YDtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxuXG5cdHJldHVybiBwcm9jZXNzW1ZBVUxUX0dMT0JBTF0gPSBleHRlbmQoY29uZmlncy52YXVsdCwgY29uZmlncy5sb2NhbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYXN5bmMoY2FsbGJhY2sgPT4ge1xuXHRwcm9taXNlUmV0cnkoYXN5bmMgcmV0cnkgPT4ge1xuXHQgICAgdHJ5IHtcblx0ICAgIFx0cmV0dXJuIGF3YWl0IGxvYWRDb25maWdBc3luYygpO1xuXHQgICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0ICAgIFx0cmV0dXJuIHJldHJ5KCk7XG5cdCAgICB9XG5cdH0sIHttYXhUaW1lb3V0OiAxMDAwLCByZXRyaWVzOiAxMH0pLnRoZW4oXG5cdFx0Y29uZmlnID0+IGNhbGxiYWNrKG51bGwsIGNvbmZpZyksXG5cdFx0Y2FsbGJhY2tcblx0KS5jYXRjaChjYWxsYmFjayk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS12YXVsdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibm9kZS12YXVsdFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmF1bHQtZ2V0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ2YXVsdC1nZXRcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLXByb21pc2VcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZzLXByb21pc2VcIlxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlYXN5bmNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImRlYXN5bmNcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwcC1yb290LXBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFwcC1yb290LXBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlZXAtZXh0ZW5kXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJkZWVwLWV4dGVuZFwiXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVidWdcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImRlYnVnXCJcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvbWlzZS1yZXRyeVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicHJvbWlzZS1yZXRyeVwiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=