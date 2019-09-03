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
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(settings, increment) {
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
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
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
	
	var _atmpt = __webpack_require__(11);
	
	var _atmpt2 = _interopRequireDefault(_atmpt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var debug = (0, _debug2.default)('vault-config');
	var VAULT_CONFIG_RCPATH = process.env.VAULT_CONFIG_RCPATH || _appRootPath2.default + '/.vaultrc';
	var VAULT_CONFIG_SECRETSPATH = process.env.VAULT_CONFIG_SECRETSPATH || _appRootPath2.default + '/.vaultsecrets';
	var VAULT_GLOBAL = '__vault-config-shared__';
	
	exports.default = (0, _deasync2.default)(function (callback) {
		(0, _atmpt2.default)(loadConfigAsync, { maxAttempts: 10, delay: function delay(attempt) {
				return attempt * 1000;
			} }).then(function (config) {
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

	module.exports = require("atmpt");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTg5YWFlZmM2NDYyYmFlOTBmMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdmF1bHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YXVsdC1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVhc3luY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwcC1yb290LXBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWVwLWV4dGVuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlYnVnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXRtcHRcIiJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsImluY3JlbWVudCIsInZhdWx0IiwiYXBpVmVyc2lvbiIsImVuZHBvaW50IiwiVkFVTFRfQ09ORklHX0VORFBPSU5UIiwidG9rZW4iLCJWQVVMVF9DT05GSUdfVE9LRU4iLCJ0b2tlblJlbmV3U2VsZiIsInJlbmV3VG9rZW4iLCJwcm9jZXNzIiwiVkFVTFRfR0xPQkFMIiwidmF1bHRyYyIsInZhdWx0bG9jYWxyYyIsInZhdWx0c2VjcmV0cyIsImZzIiwicmVhZEZpbGUiLCJWQVVMVF9DT05GSUdfUkNQQVRIIiwiRXJyb3IiLCJzdGFjayIsIkpTT04iLCJwYXJzZSIsIl9fcm9vdGRpcm5hbWUiLCJWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEgiLCJjb25maWdzIiwibWFwIiwiZW52TWF0Y2giLCJrZXkiLCJtYXRjaCIsIm5vZGVFbnYiLCJlbnYiLCJOT0RFX0VOViIsImZpbHRlciIsImxlbmd0aCIsInJlZHVjZSIsImV4dGVuZCIsImxvY2FsIiwiVkFVTFRfQ09ORklHX0tFWSIsIlZBVUxUX0NPTkZJR19LRVlTIiwic3BsaXQiLCJWQVVMVF9DT05GSUdfUk9PVFBBVEgiLCJWQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFUyIsImRlYnVnIiwia2V5cyIsInJvb3RQYXRoIiwic2VjcmV0U2hhcmVzIiwiVkFVTFRfRElTQUJMRV9BVVRPUkVORVciLCJwYXJzZUludCIsIlZBVUxUX0FVVE9SRU5FV19JTkNSRU1FTlQiLCJnZXQiLCJtZXNzYWdlIiwibG9hZENvbmZpZ0FzeW5jIiwibWF4QXR0ZW1wdHMiLCJkZWxheSIsImF0dGVtcHQiLCJ0aGVuIiwiY2FsbGJhY2siLCJjb25maWciLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzRkN4QkEsaUJBQTJCQSxRQUEzQixFQUFxQ0MsU0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0tDLFlBREwsR0FDYSx5QkFBUztBQUNwQkMsb0JBQVksSUFEUTtBQUVwQkMsa0JBQVVKLFNBQVNLLHFCQUZDO0FBR3BCQyxlQUFPTixTQUFTTztBQUhJLFFBQVQsQ0FEYjtBQUFBO0FBQUEsY0FNT0wsTUFBTU0sY0FBTixDQUFxQixFQUFDUCxXQUFXQSxTQUFaLEVBQXJCLENBTlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWVRLFU7Ozs7Ozt1RkFTZjtBQUFBO0FBQUE7QUFB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RUFBNEVDLElBQTVFLENBQ0M7QUFBQSxVQUFVQyxTQUFTLElBQVQsRUFBZUMsTUFBZixDQUFWO0FBQUEsR0FERCxFQUVDRCxRQUZELEVBR0VFLEtBSEYsQ0FHUUYsUUFIUjtBQUlBLEVBTGMsRzs7Ozs7OztBQzNJZiwrRDs7Ozs7O0FDQUEsdUQ7Ozs7OztBQ0FBLG9FOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGU4OWFhZWZjNjQ2MmJhZTkwZjA2XG4gKiovIiwiaW1wb3J0IFZhdWx0UmF3IGZyb20gJ25vZGUtdmF1bHQnO1xuaW1wb3J0IFZhdWx0IGZyb20gJ3ZhdWx0LWdldCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMtcHJvbWlzZSc7XG5pbXBvcnQgZGVhc3luYyBmcm9tICdkZWFzeW5jJztcbmltcG9ydCBfX3Jvb3RkaXJuYW1lIGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IGV4dGVuZCBmcm9tICdkZWVwLWV4dGVuZCc7XG5pbXBvcnQgRGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IGF0bXB0IGZyb20gJ2F0bXB0JztcblxuY29uc3QgZGVidWcgPSBEZWJ1ZygndmF1bHQtY29uZmlnJyk7XG5jb25zdCBWQVVMVF9DT05GSUdfUkNQQVRIID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1JDUEFUSCB8fCBgJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRyY2A7XG5jb25zdCBWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEggPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfU0VDUkVUU1BBVEggfHwgYCR7X19yb290ZGlybmFtZX0vLnZhdWx0c2VjcmV0c2A7XG5jb25zdCBWQVVMVF9HTE9CQUwgPSAnX192YXVsdC1jb25maWctc2hhcmVkX18nO1xuXG5hc3luYyBmdW5jdGlvbiByZW5ld1Rva2VuIChzZXR0aW5ncywgaW5jcmVtZW50KSB7XG5cdGxldCB2YXVsdCA9IFZhdWx0UmF3KHtcblx0XHRhcGlWZXJzaW9uOiAndjEnLFxuXHRcdGVuZHBvaW50OiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQsXG5cdFx0dG9rZW46IHNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTlxuXHR9KTtcblx0YXdhaXQgdmF1bHQudG9rZW5SZW5ld1NlbGYoe2luY3JlbWVudDogaW5jcmVtZW50fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWdBc3luYyAoKSB7XG5cdGlmIChwcm9jZXNzW1ZBVUxUX0dMT0JBTF0pIHtcblx0XHRyZXR1cm4gcHJvY2Vzc1tWQVVMVF9HTE9CQUxdO1xuXHR9XG5cblx0bGV0IHZhdWx0cmMsXG5cdFx0dmF1bHRsb2NhbHJjLFxuXHRcdHZhdWx0c2VjcmV0cztcblxuXHR0cnkge1xuXHRcdHZhdWx0cmMgPSBhd2FpdCBmcy5yZWFkRmlsZShWQVVMVF9DT05GSUdfUkNQQVRILCAndXRmOCcpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHRocm93IG5ldyBFcnJvcihgdmF1bHQtY29uZmlnOiBjYW4ndCBmaW5kIFwiJHtWQVVMVF9DT05GSUdfUkNQQVRIfVwiXFxuJHtlcnJvci5zdGFja31gKTtcblx0fVxuXHR0cnkge1xuXHRcdHZhdWx0cmMgPSBKU09OLnBhcnNlKHZhdWx0cmMpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHRocm93IG5ldyBFcnJvcihgdmF1bHQtY29uZmlnOiBjYW4ndCBwYXJzZSBKU09OIGluIFwiJHtWQVVMVF9DT05GSUdfUkNQQVRIfVwiXFxuJHtlcnJvci5zdGFja31gKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0dmF1bHRsb2NhbHJjID0gYXdhaXQgZnMucmVhZEZpbGUoYCR7X19yb290ZGlybmFtZX0vLnZhdWx0bG9jYWxyY2AsICd1dGY4Jyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7fVxuXHRpZiAodmF1bHRsb2NhbHJjKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHZhdWx0bG9jYWxyYyA9IEpTT04ucGFyc2UodmF1bHRsb2NhbHJjKTtcblx0XHRcdHZhdWx0cmMgPSBleHRlbmQodmF1bHRyYywgdmF1bHRsb2NhbHJjKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGB2YXVsdC1jb25maWc6IGNhbid0IHBhcnNlIEpTT04gaW4gXCIke19fcm9vdGRpcm5hbWV9Ly52YXVsdGxvY2FscmNcIlxcbiR7ZXJyb3Iuc3RhY2t9YCk7XG5cdFx0fVxuXHR9XG5cblx0dHJ5IHtcblx0XHR2YXVsdHNlY3JldHMgPSBhd2FpdCBmcy5yZWFkRmlsZShWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEgsICd1dGY4Jyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dmF1bHRzZWNyZXRzID0ge307XG5cdH1cblx0aWYgKHR5cGVvZiB2YXVsdHNlY3JldHMgPT09ICdzdHJpbmcnKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHZhdWx0c2VjcmV0cyA9IEpTT04ucGFyc2UodmF1bHRzZWNyZXRzKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGB2YXVsdC1jb25maWc6IGNhbid0IHBhcnNlIEpTT04gaW4gXCIke1ZBVUxUX0NPTkZJR19TRUNSRVRTUEFUSH1cIlxcbiR7ZXJyb3Iuc3RhY2t9YCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gbWVyZ2UgY29uZmlnc1xuXHRsZXQgY29uZmlncyA9IE9iamVjdC5rZXlzKHZhdWx0cmMpXG5cdFx0Lm1hcChrZXkgPT4ge1xuXHRcdFx0bGV0IGVudk1hdGNoID0ga2V5Lm1hdGNoKC9eTk9ERV9FTlY9KC4rKS8pLFxuXHRcdFx0XHRub2RlRW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJyc7XG5cblx0XHRcdGlmIChlbnZNYXRjaCAmJiBub2RlRW52Lm1hdGNoKGBeJHtlbnZNYXRjaFsxXX0kYCkpIHtcblx0XHRcdFx0cmV0dXJuIGtleTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5maWx0ZXIoa2V5ID0+IGtleSlcblx0XHQubWFwKGtleSA9PiB2YXVsdHJjW2tleV0pO1xuXG5cdGlmIChjb25maWdzLmxlbmd0aCkge1xuXHRcdGNvbmZpZ3MgPSBjb25maWdzLnJlZHVjZShleHRlbmQpO1xuXHRcdGNvbmZpZ3MudmF1bHQgPSBjb25maWdzLnZhdWx0IHx8IHt9O1xuXHRcdGNvbmZpZ3MubG9jYWwgPSBjb25maWdzLmxvY2FsIHx8IHt9O1xuXG5cdFx0Ly8gYnJlYWsgb3V0IGVhcmx5LCB3ZSBoYXZlIG5vIG1hdGNoaW5nIHZhdWx0IHJ1bGVzXG5cdFx0aWYgKCFPYmplY3Qua2V5cyhjb25maWdzLnZhdWx0KS5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBjb25maWdzLmxvY2FsO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBicmVhayBvdXQgZWFybHksIHdlIGRvbnQgaGF2ZSBhbnkgcnVsZXNcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRsZXQgc2V0dGluZ3MgPSB7fTtcblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX1RPS0VOID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1RPS0VOIHx8IHZhdWx0c2VjcmV0cy5WQVVMVF9DT05GSUdfVE9LRU47XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVkgPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfS0VZIHx8IHZhdWx0c2VjcmV0cy5WQVVMVF9DT05GSUdfS0VZO1xuXHRpZiAocHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX0tFWVMpIHtcblx0XHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZUyA9IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19LRVlTLnNwbGl0KCcsJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWVMgPSB2YXVsdHNlY3JldHMuVkFVTFRfQ09ORklHX0tFWVM7XG5cdH1cblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX0VORFBPSU5UID0gdmF1bHRyYy5WQVVMVF9DT05GSUdfRU5EUE9JTlQgfHwgcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX0VORFBPSU5UO1xuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfUk9PVFBBVEggPSB2YXVsdHJjLlZBVUxUX0NPTkZJR19ST09UUEFUSCB8fCBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfUk9PVFBBVEg7XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTID0gdmF1bHRyYy5WQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFUyB8fCBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFUztcblxuXHRpZiAoIXNldHRpbmdzLlZBVUxUX0NPTkZJR19FTkRQT0lOVCkge1xuXHRcdGRlYnVnKCdtaXNzaW5nIFwiVkFVTFRfQ09ORklHX0VORFBPSU5UXCInKTtcblx0XHRyZXR1cm4gY29uZmlncy5sb2NhbDtcblx0fVxuXG5cdGlmICghc2V0dGluZ3MuVkFVTFRfQ09ORklHX1RPS0VOKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCd2YXVsdC1jb25maWc6IG1pc3NpbmcgXCJWQVVMVF9DT05GSUdfVE9LRU5cIicpO1xuXHR9XG5cblx0bGV0IHZhdWx0ID0gVmF1bHQoe1xuXHRcdGVuZHBvaW50OiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQsXG5cdFx0dG9rZW46IHNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTixcblx0XHRrZXlzOiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZUyxcblx0XHRrZXk6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVksXG5cdFx0cm9vdFBhdGg6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19ST09UUEFUSCxcblx0XHRzZWNyZXRTaGFyZXM6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTXG5cdH0pO1xuXG5cdHRyeSB7XG5cdFx0aWYgKCFwcm9jZXNzLmVudi5WQVVMVF9ESVNBQkxFX0FVVE9SRU5FVykge1xuXHRcdFx0Y29uc3QgaW5jcmVtZW50ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuVkFVTFRfQVVUT1JFTkVXX0lOQ1JFTUVOVCB8fCAyNTgwMDAwLCAxMCk7XG5cdFx0XHRhd2FpdCByZW5ld1Rva2VuKHNldHRpbmdzLCBpbmNyZW1lbnQpO1xuXHRcdH1cblx0XHRjb25maWdzLnZhdWx0ID0gYXdhaXQgdmF1bHQuZ2V0KGNvbmZpZ3MudmF1bHQpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yLm1lc3NhZ2UgPSBgdmF1bHQtY29uZmlnOiBcXG4ke2Vycm9yLm1lc3NhZ2V9YDtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxuXG5cdHJldHVybiBwcm9jZXNzW1ZBVUxUX0dMT0JBTF0gPSBleHRlbmQoY29uZmlncy52YXVsdCwgY29uZmlncy5sb2NhbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYXN5bmMoY2FsbGJhY2sgPT4ge1xuXHRhdG1wdChsb2FkQ29uZmlnQXN5bmMsIHttYXhBdHRlbXB0czogMTAsIGRlbGF5OiBhdHRlbXB0ID0+IGF0dGVtcHQgKiAxMDAwfSkudGhlbihcblx0XHRjb25maWcgPT4gY2FsbGJhY2sobnVsbCwgY29uZmlnKSxcblx0XHRjYWxsYmFja1xuXHQpLmNhdGNoKGNhbGxiYWNrKTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXZhdWx0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJub2RlLXZhdWx0XCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YXVsdC1nZXRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInZhdWx0LWdldFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtcHJvbWlzZVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZnMtcHJvbWlzZVwiXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVhc3luY1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZGVhc3luY1wiXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBwLXJvb3QtcGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVlcC1leHRlbmRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImRlZXAtZXh0ZW5kXCJcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZGVidWdcIlxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdG1wdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYXRtcHRcIlxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9