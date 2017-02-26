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
							vaultrc = void 0, vaultlocalrc = void 0, vaultsecrets = void 0;
							_context2.prev = 1;
							_context2.next = 4;
							return _fsPromise2.default.readFile(VAULT_CONFIG_RCPATH, 'utf8');
	
						case 4:
							vaultrc = _context2.sent;
							_context2.next = 10;
							break;
	
						case 7:
							_context2.prev = 7;
							_context2.t0 = _context2['catch'](1);
							throw new Error('vault-config: can\'t find "' + VAULT_CONFIG_RCPATH + '"\n' + _context2.t0.stack);
	
						case 10:
							_context2.prev = 10;
	
							vaultrc = JSON.parse(vaultrc);
							_context2.next = 17;
							break;
	
						case 14:
							_context2.prev = 14;
							_context2.t1 = _context2['catch'](10);
							throw new Error('vault-config: can\'t parse JSON in "' + VAULT_CONFIG_RCPATH + '"\n' + _context2.t1.stack);
	
						case 17:
							_context2.prev = 17;
							_context2.next = 20;
							return _fsPromise2.default.readFile(_appRootPath2.default + '/.vaultlocalrc', 'utf8');
	
						case 20:
							vaultlocalrc = _context2.sent;
							_context2.next = 25;
							break;
	
						case 23:
							_context2.prev = 23;
							_context2.t2 = _context2['catch'](17);
	
						case 25:
							if (!vaultlocalrc) {
								_context2.next = 34;
								break;
							}
	
							_context2.prev = 26;
	
							vaultlocalrc = JSON.parse(vaultlocalrc);
							vaultrc = (0, _deepExtend2.default)(vaultrc, vaultlocalrc);
							_context2.next = 34;
							break;
	
						case 31:
							_context2.prev = 31;
							_context2.t3 = _context2['catch'](26);
							throw new Error('vault-config: can\'t parse JSON in "' + _appRootPath2.default + '/.vaultlocalrc"\n' + _context2.t3.stack);
	
						case 34:
							_context2.prev = 34;
							_context2.next = 37;
							return _fsPromise2.default.readFile(VAULT_CONFIG_SECRETSPATH, 'utf8');
	
						case 37:
							vaultsecrets = _context2.sent;
							_context2.next = 43;
							break;
	
						case 40:
							_context2.prev = 40;
							_context2.t4 = _context2['catch'](34);
	
							vaultsecrets = {};
	
						case 43:
							if (!(typeof vaultsecrets === 'string')) {
								_context2.next = 51;
								break;
							}
	
							_context2.prev = 44;
	
							vaultsecrets = JSON.parse(vaultsecrets);
							_context2.next = 51;
							break;
	
						case 48:
							_context2.prev = 48;
							_context2.t5 = _context2['catch'](44);
							throw new Error('vault-config: can\'t parse JSON in "' + VAULT_CONFIG_SECRETSPATH + '"\n' + _context2.t5.stack);
	
						case 51:
	
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
								_context2.next = 60;
								break;
							}
	
							configs = configs.reduce(_deepExtend2.default);
							configs.vault = configs.vault || {};
							configs.local = configs.local || {};
	
							// break out early, we have no matching vault rules
	
							if ((0, _keys2.default)(configs.vault).length) {
								_context2.next = 58;
								break;
							}
	
							return _context2.abrupt('return', configs.local);
	
						case 58:
							_context2.next = 61;
							break;
	
						case 60:
							return _context2.abrupt('return', {});
	
						case 61:
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
								_context2.next = 71;
								break;
							}
	
							debug('missing "VAULT_CONFIG_ENDPOINT"');
							return _context2.abrupt('return', configs.local);
	
						case 71:
							if (settings.VAULT_CONFIG_TOKEN) {
								_context2.next = 73;
								break;
							}
	
							throw new Error('vault-config: missing "VAULT_CONFIG_TOKEN"');
	
						case 73:
							vault = (0, _vaultGet2.default)({
								endpoint: settings.VAULT_CONFIG_ENDPOINT,
								token: settings.VAULT_CONFIG_TOKEN,
								keys: settings.VAULT_CONFIG_KEYS,
								key: settings.VAULT_CONFIG_KEY,
								rootPath: settings.VAULT_CONFIG_ROOTPATH,
								secretShares: settings.VAULT_CONFIG_SECRET_SHARES
							});
							_context2.prev = 74;
	
							if (process.env.VAULT_DISABLE_AUTORENEW) {
								_context2.next = 79;
								break;
							}
	
							increment = parseInt(process.env.VAULT_AUTORENEW_INCREMENT || 2580000, 10);
							_context2.next = 79;
							return renewToken(settings, increment);
	
						case 79:
							_context2.next = 81;
							return vault.get(configs.vault);
	
						case 81:
							configs.vault = _context2.sent;
							_context2.next = 88;
							break;
	
						case 84:
							_context2.prev = 84;
							_context2.t6 = _context2['catch'](74);
	
							_context2.t6.message = 'vault-config: \n' + _context2.t6.message;
							throw _context2.t6;
	
						case 88:
							return _context2.abrupt('return', (0, _deepExtend2.default)(configs.vault, configs.local));
	
						case 89:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[1, 7], [10, 14], [17, 23], [26, 31], [34, 40], [44, 48], [74, 84]]);
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var debug = (0, _debug2.default)('vault-config');
	var VAULT_CONFIG_RCPATH = process.env.VAULT_CONFIG_RCPATH || _appRootPath2.default + '/.vaultrc';
	var VAULT_CONFIG_SECRETSPATH = process.env.VAULT_CONFIG_SECRETSPATH || _appRootPath2.default + '/.vaultsecrets';
	
	exports.default = (0, _deasync2.default)(function (callback) {
		loadConfigAsync().then(function (config) {
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjMwMDI5YjJmYzQ1YWFjMzViYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdmF1bHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YXVsdC1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVhc3luY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwcC1yb290LXBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWVwLWV4dGVuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlYnVnXCIiXSwibmFtZXMiOlsic2V0dGluZ3MiLCJpbmNyZW1lbnQiLCJ2YXVsdCIsImFwaVZlcnNpb24iLCJlbmRwb2ludCIsIlZBVUxUX0NPTkZJR19FTkRQT0lOVCIsInRva2VuIiwiVkFVTFRfQ09ORklHX1RPS0VOIiwidG9rZW5SZW5ld1NlbGYiLCJyZW5ld1Rva2VuIiwidmF1bHRyYyIsInZhdWx0bG9jYWxyYyIsInZhdWx0c2VjcmV0cyIsInJlYWRGaWxlIiwiVkFVTFRfQ09ORklHX1JDUEFUSCIsIkVycm9yIiwic3RhY2siLCJKU09OIiwicGFyc2UiLCJWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEgiLCJjb25maWdzIiwibWFwIiwiZW52TWF0Y2giLCJrZXkiLCJtYXRjaCIsIm5vZGVFbnYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJmaWx0ZXIiLCJsZW5ndGgiLCJyZWR1Y2UiLCJsb2NhbCIsIlZBVUxUX0NPTkZJR19LRVkiLCJWQVVMVF9DT05GSUdfS0VZUyIsInNwbGl0IiwiVkFVTFRfQ09ORklHX1JPT1RQQVRIIiwiVkFVTFRfQ09ORklHX1NFQ1JFVF9TSEFSRVMiLCJkZWJ1ZyIsImtleXMiLCJyb290UGF0aCIsInNlY3JldFNoYXJlcyIsIlZBVUxUX0RJU0FCTEVfQVVUT1JFTkVXIiwicGFyc2VJbnQiLCJWQVVMVF9BVVRPUkVORVdfSU5DUkVNRU5UIiwiZ2V0IiwibWVzc2FnZSIsImxvYWRDb25maWdBc3luYyIsInRoZW4iLCJjYWxsYmFjayIsImNvbmZpZyIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dFQzFCQSxpQkFBMkJBLFFBQTNCLEVBQXFDQyxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDS0MsWUFETCxHQUNhLHlCQUFTO0FBQ3BCQyxvQkFBWSxJQURRO0FBRXBCQyxrQkFBVUosU0FBU0sscUJBRkM7QUFHcEJDLGVBQU9OLFNBQVNPO0FBSEksUUFBVCxDQURiO0FBQUE7QUFBQSxjQU1PTCxNQUFNTSxjQUFOLENBQXFCLEVBQUNQLFdBQVdBLFNBQVosRUFBckIsQ0FOUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZVEsVTs7Ozs7O3lFQVNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLQyxjQURMLFdBRUVDLFlBRkYsV0FHRUMsWUFIRjtBQUFBO0FBQUE7QUFBQSxjQU1rQixvQkFBR0MsUUFBSCxDQUFZQyxtQkFBWixFQUFpQyxNQUFqQyxDQU5sQjs7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QTtBQUFBO0FBQUEsY0F1R3dCQyxNQUFNMkMsR0FBTixDQUFVekIsUUFBUWxCLEtBQWxCLENBdkd4Qjs7QUFBQTtBQXVHRWtCLGVBQVFsQixLQXZHVjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXlHRSxvQkFBTTRDLE9BQU4sd0JBQW1DLGFBQU1BLE9BQXpDO0FBekdGOztBQUFBO0FBQUEseUNBNkdRLDBCQUFPMUIsUUFBUWxCLEtBQWYsRUFBc0JrQixRQUFRWSxLQUE5QixDQTdHUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZWUsZTs7Ozs7QUFyQmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1ULFFBQVEscUJBQU0sY0FBTixDQUFkO0FBQ0EsS0FBTXhCLHNCQUFzQlksUUFBUUMsR0FBUixDQUFZYixtQkFBWix1Q0FBNUI7QUFDQSxLQUFNSywyQkFBMkJPLFFBQVFDLEdBQVIsQ0FBWVIsd0JBQVosNENBQWpDOzttQkEySGUsdUJBQVEsb0JBQVk7QUFDbEM0QixvQkFDRUMsSUFERixDQUNPO0FBQUEsVUFBVUMsU0FBUyxJQUFULEVBQWVDLE1BQWYsQ0FBVjtBQUFBLEdBRFAsRUFDeUNELFFBRHpDLEVBRUVFLEtBRkYsQ0FFUUYsUUFGUjtBQUdBLEVBSmMsRzs7Ozs7OztBQ3JJZiwrRDs7Ozs7O0FDQUEsdUQ7Ozs7OztBQ0FBLG9FOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxtQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjMwMDI5YjJmYzQ1YWFjMzViYjNcbiAqKi8iLCJpbXBvcnQgVmF1bHRSYXcgZnJvbSAnbm9kZS12YXVsdCc7XG5pbXBvcnQgVmF1bHQgZnJvbSAndmF1bHQtZ2V0JztcbmltcG9ydCBmcyBmcm9tICdmcy1wcm9taXNlJztcbmltcG9ydCBkZWFzeW5jIGZyb20gJ2RlYXN5bmMnO1xuaW1wb3J0IF9fcm9vdGRpcm5hbWUgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJ2RlZXAtZXh0ZW5kJztcbmltcG9ydCBEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5cbmNvbnN0IGRlYnVnID0gRGVidWcoJ3ZhdWx0LWNvbmZpZycpO1xuY29uc3QgVkFVTFRfQ09ORklHX1JDUEFUSCA9IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19SQ1BBVEggfHwgYCR7X19yb290ZGlybmFtZX0vLnZhdWx0cmNgO1xuY29uc3QgVkFVTFRfQ09ORklHX1NFQ1JFVFNQQVRIID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1NFQ1JFVFNQQVRIIHx8IGAke19fcm9vdGRpcm5hbWV9Ly52YXVsdHNlY3JldHNgO1xuXG5hc3luYyBmdW5jdGlvbiByZW5ld1Rva2VuIChzZXR0aW5ncywgaW5jcmVtZW50KSB7XG5cdGxldCB2YXVsdCA9IFZhdWx0UmF3KHtcblx0XHRhcGlWZXJzaW9uOiAndjEnLFxuXHRcdGVuZHBvaW50OiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQsXG5cdFx0dG9rZW46IHNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTlxuXHR9KTtcblx0YXdhaXQgdmF1bHQudG9rZW5SZW5ld1NlbGYoe2luY3JlbWVudDogaW5jcmVtZW50fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWdBc3luYyAoKSB7XG5cdGxldCB2YXVsdHJjLFxuXHRcdHZhdWx0bG9jYWxyYyxcblx0XHR2YXVsdHNlY3JldHM7XG5cblx0dHJ5IHtcblx0XHR2YXVsdHJjID0gYXdhaXQgZnMucmVhZEZpbGUoVkFVTFRfQ09ORklHX1JDUEFUSCwgJ3V0ZjgnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYHZhdWx0LWNvbmZpZzogY2FuJ3QgZmluZCBcIiR7VkFVTFRfQ09ORklHX1JDUEFUSH1cIlxcbiR7ZXJyb3Iuc3RhY2t9YCk7XG5cdH1cblx0dHJ5IHtcblx0XHR2YXVsdHJjID0gSlNPTi5wYXJzZSh2YXVsdHJjKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYHZhdWx0LWNvbmZpZzogY2FuJ3QgcGFyc2UgSlNPTiBpbiBcIiR7VkFVTFRfQ09ORklHX1JDUEFUSH1cIlxcbiR7ZXJyb3Iuc3RhY2t9YCk7XG5cdH1cblxuXHR0cnkge1xuXHRcdHZhdWx0bG9jYWxyYyA9IGF3YWl0IGZzLnJlYWRGaWxlKGAke19fcm9vdGRpcm5hbWV9Ly52YXVsdGxvY2FscmNgLCAndXRmOCcpO1xuXHR9IGNhdGNoIChlcnJvcikge31cblx0aWYgKHZhdWx0bG9jYWxyYykge1xuXHRcdHRyeSB7XG5cdFx0XHR2YXVsdGxvY2FscmMgPSBKU09OLnBhcnNlKHZhdWx0bG9jYWxyYyk7XG5cdFx0XHR2YXVsdHJjID0gZXh0ZW5kKHZhdWx0cmMsIHZhdWx0bG9jYWxyYyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgdmF1bHQtY29uZmlnOiBjYW4ndCBwYXJzZSBKU09OIGluIFwiJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRsb2NhbHJjXCJcXG4ke2Vycm9yLnN0YWNrfWApO1xuXHRcdH1cblx0fVxuXG5cdHRyeSB7XG5cdFx0dmF1bHRzZWNyZXRzID0gYXdhaXQgZnMucmVhZEZpbGUoVkFVTFRfQ09ORklHX1NFQ1JFVFNQQVRILCAndXRmOCcpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHZhdWx0c2VjcmV0cyA9IHt9O1xuXHR9XG5cdGlmICh0eXBlb2YgdmF1bHRzZWNyZXRzID09PSAnc3RyaW5nJykge1xuXHRcdHRyeSB7XG5cdFx0XHR2YXVsdHNlY3JldHMgPSBKU09OLnBhcnNlKHZhdWx0c2VjcmV0cyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgdmF1bHQtY29uZmlnOiBjYW4ndCBwYXJzZSBKU09OIGluIFwiJHtWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEh9XCJcXG4ke2Vycm9yLnN0YWNrfWApO1xuXHRcdH1cblx0fVxuXG5cdC8vIG1lcmdlIGNvbmZpZ3Ncblx0bGV0IGNvbmZpZ3MgPSBPYmplY3Qua2V5cyh2YXVsdHJjKVxuXHRcdC5tYXAoa2V5ID0+IHtcblx0XHRcdGxldCBlbnZNYXRjaCA9IGtleS5tYXRjaCgvXk5PREVfRU5WPSguKykvKSxcblx0XHRcdFx0bm9kZUVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICcnO1xuXG5cdFx0XHRpZiAoZW52TWF0Y2ggJiYgbm9kZUVudi5tYXRjaChgXiR7ZW52TWF0Y2hbMV19JGApKSB7XG5cdFx0XHRcdHJldHVybiBrZXk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmlsdGVyKGtleSA9PiBrZXkpXG5cdFx0Lm1hcChrZXkgPT4gdmF1bHRyY1trZXldKTtcblxuXHRpZiAoY29uZmlncy5sZW5ndGgpIHtcblx0XHRjb25maWdzID0gY29uZmlncy5yZWR1Y2UoZXh0ZW5kKTtcblx0XHRjb25maWdzLnZhdWx0ID0gY29uZmlncy52YXVsdCB8fCB7fTtcblx0XHRjb25maWdzLmxvY2FsID0gY29uZmlncy5sb2NhbCB8fCB7fTtcblxuXHRcdC8vIGJyZWFrIG91dCBlYXJseSwgd2UgaGF2ZSBubyBtYXRjaGluZyB2YXVsdCBydWxlc1xuXHRcdGlmICghT2JqZWN0LmtleXMoY29uZmlncy52YXVsdCkubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gY29uZmlncy5sb2NhbDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gYnJlYWsgb3V0IGVhcmx5LCB3ZSBkb250IGhhdmUgYW55IHJ1bGVzXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0bGV0IHNldHRpbmdzID0ge307XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTiA9IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19UT0tFTiB8fCB2YXVsdHNlY3JldHMuVkFVTFRfQ09ORklHX1RPS0VOO1xuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX0tFWSB8fCB2YXVsdHNlY3JldHMuVkFVTFRfQ09ORklHX0tFWTtcblx0aWYgKHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19LRVlTKSB7XG5cdFx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWVMgPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfS0VZUy5zcGxpdCgnLCcpO1xuXHR9IGVsc2Uge1xuXHRcdHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVlTID0gdmF1bHRzZWNyZXRzLlZBVUxUX0NPTkZJR19LRVlTO1xuXHR9XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19FTkRQT0lOVCA9IHZhdWx0cmMuVkFVTFRfQ09ORklHX0VORFBPSU5UIHx8IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19FTkRQT0lOVDtcblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX1JPT1RQQVRIID0gdmF1bHRyYy5WQVVMVF9DT05GSUdfUk9PVFBBVEggfHwgcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1JPT1RQQVRIO1xuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFUyA9IHZhdWx0cmMuVkFVTFRfQ09ORklHX1NFQ1JFVF9TSEFSRVMgfHwgcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1NFQ1JFVF9TSEFSRVM7XG5cblx0aWYgKCFzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQpIHtcblx0XHRkZWJ1ZygnbWlzc2luZyBcIlZBVUxUX0NPTkZJR19FTkRQT0lOVFwiJyk7XG5cdFx0cmV0dXJuIGNvbmZpZ3MubG9jYWw7XG5cdH1cblxuXHRpZiAoIXNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTikge1xuXHRcdHRocm93IG5ldyBFcnJvcigndmF1bHQtY29uZmlnOiBtaXNzaW5nIFwiVkFVTFRfQ09ORklHX1RPS0VOXCInKTtcblx0fVxuXG5cdGxldCB2YXVsdCA9IFZhdWx0KHtcblx0XHRlbmRwb2ludDogc2V0dGluZ3MuVkFVTFRfQ09ORklHX0VORFBPSU5ULFxuXHRcdHRva2VuOiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfVE9LRU4sXG5cdFx0a2V5czogc2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWVMsXG5cdFx0a2V5OiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZLFxuXHRcdHJvb3RQYXRoOiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfUk9PVFBBVEgsXG5cdFx0c2VjcmV0U2hhcmVzOiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfU0VDUkVUX1NIQVJFU1xuXHR9KTtcblxuXHR0cnkge1xuXHRcdGlmICghcHJvY2Vzcy5lbnYuVkFVTFRfRElTQUJMRV9BVVRPUkVORVcpIHtcblx0XHRcdGNvbnN0IGluY3JlbWVudCA9IHBhcnNlSW50KHByb2Nlc3MuZW52LlZBVUxUX0FVVE9SRU5FV19JTkNSRU1FTlQgfHwgMjU4MDAwMCwgMTApO1xuXHRcdFx0YXdhaXQgcmVuZXdUb2tlbihzZXR0aW5ncywgaW5jcmVtZW50KTtcblx0XHR9XG5cdFx0Y29uZmlncy52YXVsdCA9IGF3YWl0IHZhdWx0LmdldChjb25maWdzLnZhdWx0KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRlcnJvci5tZXNzYWdlID0gYHZhdWx0LWNvbmZpZzogXFxuJHtlcnJvci5tZXNzYWdlfWA7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cblxuXHRyZXR1cm4gZXh0ZW5kKGNvbmZpZ3MudmF1bHQsIGNvbmZpZ3MubG9jYWwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFzeW5jKGNhbGxiYWNrID0+IHtcblx0bG9hZENvbmZpZ0FzeW5jKClcblx0XHQudGhlbihjb25maWcgPT4gY2FsbGJhY2sobnVsbCwgY29uZmlnKSwgY2FsbGJhY2spXG5cdFx0LmNhdGNoKGNhbGxiYWNrKTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXZhdWx0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJub2RlLXZhdWx0XCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YXVsdC1nZXRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInZhdWx0LWdldFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtcHJvbWlzZVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZnMtcHJvbWlzZVwiXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVhc3luY1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZGVhc3luY1wiXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBwLXJvb3QtcGF0aFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYXBwLXJvb3QtcGF0aFwiXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVlcC1leHRlbmRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImRlZXAtZXh0ZW5kXCJcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZGVidWdcIlxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9