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
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(settings) {
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
							return vault.tokenRenewSelf({ increment: 2580000 });
	
						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));
	
		return function renewToken(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	
	var loadConfigAsync = function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
			var vaultrc, vaultlocalrc, vaultsecrets, configs, settings, vault;
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
								_context2.next = 70;
								break;
							}
	
							throw new Error('vault-config: missing "VAULT_CONFIG_ENDPOINT"');
	
						case 70:
							if (settings.VAULT_CONFIG_TOKEN) {
								_context2.next = 72;
								break;
							}
	
							throw new Error('vault-config: missing "VAULT_CONFIG_TOKEN"');
	
						case 72:
							vault = (0, _vaultGet2.default)({
								endpoint: settings.VAULT_CONFIG_ENDPOINT,
								token: settings.VAULT_CONFIG_TOKEN,
								keys: settings.VAULT_CONFIG_KEYS,
								key: settings.VAULT_CONFIG_KEY,
								rootPath: settings.VAULT_CONFIG_ROOTPATH,
								secretShares: settings.VAULT_CONFIG_SECRET_SHARES
							});
							_context2.prev = 73;
							_context2.next = 76;
							return renewToken(settings);
	
						case 76:
							_context2.next = 78;
							return vault.get(configs.vault);
	
						case 78:
							configs.vault = _context2.sent;
							_context2.next = 85;
							break;
	
						case 81:
							_context2.prev = 81;
							_context2.t6 = _context2['catch'](73);
	
							_context2.t6.message = 'vault-config: \n' + _context2.t6.message;
							throw _context2.t6;
	
						case 85:
							return _context2.abrupt('return', (0, _deepExtend2.default)(configs.vault, configs.local));
	
						case 86:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[1, 7], [10, 14], [17, 23], [26, 31], [34, 40], [44, 48], [73, 81]]);
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGE0YzU1ZDQwMTk5MjFmYmRkMGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdmF1bHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YXVsdC1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVhc3luY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwcC1yb290LXBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWVwLWV4dGVuZFwiIl0sIm5hbWVzIjpbInNldHRpbmdzIiwidmF1bHQiLCJhcGlWZXJzaW9uIiwiZW5kcG9pbnQiLCJWQVVMVF9DT05GSUdfRU5EUE9JTlQiLCJ0b2tlbiIsIlZBVUxUX0NPTkZJR19UT0tFTiIsInRva2VuUmVuZXdTZWxmIiwiaW5jcmVtZW50IiwicmVuZXdUb2tlbiIsInZhdWx0cmMiLCJ2YXVsdGxvY2FscmMiLCJ2YXVsdHNlY3JldHMiLCJyZWFkRmlsZSIsIlZBVUxUX0NPTkZJR19SQ1BBVEgiLCJFcnJvciIsInN0YWNrIiwiSlNPTiIsInBhcnNlIiwiVkFVTFRfQ09ORklHX1NFQ1JFVFNQQVRIIiwiY29uZmlncyIsIm1hcCIsImVudk1hdGNoIiwia2V5IiwibWF0Y2giLCJub2RlRW52IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZmlsdGVyIiwibGVuZ3RoIiwicmVkdWNlIiwibG9jYWwiLCJWQVVMVF9DT05GSUdfS0VZIiwiVkFVTFRfQ09ORklHX0tFWVMiLCJzcGxpdCIsIlZBVUxUX0NPTkZJR19ST09UUEFUSCIsIlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTIiwia2V5cyIsInJvb3RQYXRoIiwic2VjcmV0U2hhcmVzIiwiZ2V0IiwibWVzc2FnZSIsImxvYWRDb25maWdBc3luYyIsInRoZW4iLCJjYWxsYmFjayIsImNvbmZpZyIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dFQzVCQSxpQkFBMkJBLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLQyxZQURMLEdBQ2EseUJBQVM7QUFDcEJDLG9CQUFZLElBRFE7QUFFcEJDLGtCQUFVSCxTQUFTSSxxQkFGQztBQUdwQkMsZUFBT0wsU0FBU007QUFISSxRQUFULENBRGI7QUFBQTtBQUFBLGNBTU9MLE1BQU1NLGNBQU4sQ0FBcUIsRUFBQ0MsV0FBVyxPQUFaLEVBQXJCLENBTlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWVDLFU7Ozs7Ozt5RUFTZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDS0MsY0FETCxXQUVFQyxZQUZGLFdBR0VDLFlBSEY7QUFBQTtBQUFBO0FBQUEsY0FNa0Isb0JBQUdDLFFBQUgsQ0FBWUMsbUJBQVosRUFBaUMsTUFBakMsQ0FObEI7O0FBQUE7QUFNRUosY0FORjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFRUSxJQUFJSyxLQUFKLGlDQUF1Q0QsbUJBQXZDLFdBQWdFLGFBQU1FLEtBQXRFLENBUlI7O0FBQUE7QUFBQTs7QUFXRU4s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O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTTdCLHNCQUFzQlksUUFBUUMsR0FBUixDQUFZYixtQkFBWix1Q0FBNUI7QUFDQSxLQUFNSywyQkFBMkJPLFFBQVFDLEdBQVIsQ0FBWVIsd0JBQVosNENBQWpDOzttQkF1SGUsdUJBQVEsb0JBQVk7QUFDbEN3QixvQkFDRUMsSUFERixDQUNPO0FBQUEsVUFBVUMsU0FBUyxJQUFULEVBQWVDLE1BQWYsQ0FBVjtBQUFBLEdBRFAsRUFDeUNELFFBRHpDLEVBRUVFLEtBRkYsQ0FFUUYsUUFGUjtBQUdBLEVBSmMsRzs7Ozs7OztBQy9IZiwrRDs7Ozs7O0FDQUEsdUQ7Ozs7OztBQ0FBLG9FOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwYTRjNTVkNDAxOTkyMWZiZGQwZVxuICoqLyIsImltcG9ydCBWYXVsdFJhdyBmcm9tICdub2RlLXZhdWx0JztcbmltcG9ydCBWYXVsdCBmcm9tICd2YXVsdC1nZXQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLXByb21pc2UnO1xuaW1wb3J0IGRlYXN5bmMgZnJvbSAnZGVhc3luYyc7XG5pbXBvcnQgX19yb290ZGlybmFtZSBmcm9tICdhcHAtcm9vdC1wYXRoJztcbmltcG9ydCBleHRlbmQgZnJvbSAnZGVlcC1leHRlbmQnO1xuXG5jb25zdCBWQVVMVF9DT05GSUdfUkNQQVRIID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1JDUEFUSCB8fCBgJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRyY2A7XG5jb25zdCBWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEggPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfU0VDUkVUU1BBVEggfHwgYCR7X19yb290ZGlybmFtZX0vLnZhdWx0c2VjcmV0c2A7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmV3VG9rZW4gKHNldHRpbmdzKSB7XG5cdGxldCB2YXVsdCA9IFZhdWx0UmF3KHtcblx0XHRhcGlWZXJzaW9uOiAndjEnLFxuXHRcdGVuZHBvaW50OiBzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQsXG5cdFx0dG9rZW46IHNldHRpbmdzLlZBVUxUX0NPTkZJR19UT0tFTlxuXHR9KTtcblx0YXdhaXQgdmF1bHQudG9rZW5SZW5ld1NlbGYoe2luY3JlbWVudDogMjU4MDAwMH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnQXN5bmMgKCkge1xuXHRsZXQgdmF1bHRyYyxcblx0XHR2YXVsdGxvY2FscmMsXG5cdFx0dmF1bHRzZWNyZXRzO1xuXG5cdHRyeSB7XG5cdFx0dmF1bHRyYyA9IGF3YWl0IGZzLnJlYWRGaWxlKFZBVUxUX0NPTkZJR19SQ1BBVEgsICd1dGY4Jyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGB2YXVsdC1jb25maWc6IGNhbid0IGZpbmQgXCIke1ZBVUxUX0NPTkZJR19SQ1BBVEh9XCJcXG4ke2Vycm9yLnN0YWNrfWApO1xuXHR9XG5cdHRyeSB7XG5cdFx0dmF1bHRyYyA9IEpTT04ucGFyc2UodmF1bHRyYyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGB2YXVsdC1jb25maWc6IGNhbid0IHBhcnNlIEpTT04gaW4gXCIke1ZBVUxUX0NPTkZJR19SQ1BBVEh9XCJcXG4ke2Vycm9yLnN0YWNrfWApO1xuXHR9XG5cblx0dHJ5IHtcblx0XHR2YXVsdGxvY2FscmMgPSBhd2FpdCBmcy5yZWFkRmlsZShgJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRsb2NhbHJjYCwgJ3V0ZjgnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHt9XG5cdGlmICh2YXVsdGxvY2FscmMpIHtcblx0XHR0cnkge1xuXHRcdFx0dmF1bHRsb2NhbHJjID0gSlNPTi5wYXJzZSh2YXVsdGxvY2FscmMpO1xuXHRcdFx0dmF1bHRyYyA9IGV4dGVuZCh2YXVsdHJjLCB2YXVsdGxvY2FscmMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYHZhdWx0LWNvbmZpZzogY2FuJ3QgcGFyc2UgSlNPTiBpbiBcIiR7X19yb290ZGlybmFtZX0vLnZhdWx0bG9jYWxyY1wiXFxuJHtlcnJvci5zdGFja31gKTtcblx0XHR9XG5cdH1cblxuXHR0cnkge1xuXHRcdHZhdWx0c2VjcmV0cyA9IGF3YWl0IGZzLnJlYWRGaWxlKFZBVUxUX0NPTkZJR19TRUNSRVRTUEFUSCwgJ3V0ZjgnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR2YXVsdHNlY3JldHMgPSB7fTtcblx0fVxuXHRpZiAodHlwZW9mIHZhdWx0c2VjcmV0cyA9PT0gJ3N0cmluZycpIHtcblx0XHR0cnkge1xuXHRcdFx0dmF1bHRzZWNyZXRzID0gSlNPTi5wYXJzZSh2YXVsdHNlY3JldHMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYHZhdWx0LWNvbmZpZzogY2FuJ3QgcGFyc2UgSlNPTiBpbiBcIiR7VkFVTFRfQ09ORklHX1NFQ1JFVFNQQVRIfVwiXFxuJHtlcnJvci5zdGFja31gKTtcblx0XHR9XG5cdH1cblxuXHQvLyBtZXJnZSBjb25maWdzXG5cdGxldCBjb25maWdzID0gT2JqZWN0LmtleXModmF1bHRyYylcblx0XHQubWFwKGtleSA9PiB7XG5cdFx0XHRsZXQgZW52TWF0Y2ggPSBrZXkubWF0Y2goL15OT0RFX0VOVj0oLispLyksXG5cdFx0XHRcdG5vZGVFbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnJztcblxuXHRcdFx0aWYgKGVudk1hdGNoICYmIG5vZGVFbnYubWF0Y2goYF4ke2Vudk1hdGNoWzFdfSRgKSkge1xuXHRcdFx0XHRyZXR1cm4ga2V5O1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmZpbHRlcihrZXkgPT4ga2V5KVxuXHRcdC5tYXAoa2V5ID0+IHZhdWx0cmNba2V5XSk7XG5cblx0aWYgKGNvbmZpZ3MubGVuZ3RoKSB7XG5cdFx0Y29uZmlncyA9IGNvbmZpZ3MucmVkdWNlKGV4dGVuZCk7XG5cdFx0Y29uZmlncy52YXVsdCA9IGNvbmZpZ3MudmF1bHQgfHwge307XG5cdFx0Y29uZmlncy5sb2NhbCA9IGNvbmZpZ3MubG9jYWwgfHwge307XG5cblx0XHQvLyBicmVhayBvdXQgZWFybHksIHdlIGhhdmUgbm8gbWF0Y2hpbmcgdmF1bHQgcnVsZXNcblx0XHRpZiAoIU9iamVjdC5rZXlzKGNvbmZpZ3MudmF1bHQpLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGNvbmZpZ3MubG9jYWw7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGJyZWFrIG91dCBlYXJseSwgd2UgZG9udCBoYXZlIGFueSBydWxlc1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGxldCBzZXR0aW5ncyA9IHt9O1xuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfVE9LRU4gPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfVE9LRU4gfHwgdmF1bHRzZWNyZXRzLlZBVUxUX0NPTkZJR19UT0tFTjtcblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWSA9IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19LRVkgfHwgdmF1bHRzZWNyZXRzLlZBVUxUX0NPTkZJR19LRVk7XG5cdGlmIChwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfS0VZUykge1xuXHRcdHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVlTID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX0tFWVMuc3BsaXQoJywnKTtcblx0fSBlbHNlIHtcblx0XHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfS0VZUyA9IHZhdWx0c2VjcmV0cy5WQVVMVF9DT05GSUdfS0VZUztcblx0fVxuXHRzZXR0aW5ncy5WQVVMVF9DT05GSUdfRU5EUE9JTlQgPSB2YXVsdHJjLlZBVUxUX0NPTkZJR19FTkRQT0lOVCB8fCBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfRU5EUE9JTlQ7XG5cdHNldHRpbmdzLlZBVUxUX0NPTkZJR19ST09UUEFUSCA9IHZhdWx0cmMuVkFVTFRfQ09ORklHX1JPT1RQQVRIIHx8IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19ST09UUEFUSDtcblx0c2V0dGluZ3MuVkFVTFRfQ09ORklHX1NFQ1JFVF9TSEFSRVMgPSB2YXVsdHJjLlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTIHx8IHByb2Nlc3MuZW52LlZBVUxUX0NPTkZJR19TRUNSRVRfU0hBUkVTO1xuXG5cdGlmICghc2V0dGluZ3MuVkFVTFRfQ09ORklHX0VORFBPSU5UKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCd2YXVsdC1jb25maWc6IG1pc3NpbmcgXCJWQVVMVF9DT05GSUdfRU5EUE9JTlRcIicpO1xuXHR9XG5cblx0aWYgKCFzZXR0aW5ncy5WQVVMVF9DT05GSUdfVE9LRU4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3ZhdWx0LWNvbmZpZzogbWlzc2luZyBcIlZBVUxUX0NPTkZJR19UT0tFTlwiJyk7XG5cdH1cblxuXHRsZXQgdmF1bHQgPSBWYXVsdCh7XG5cdFx0ZW5kcG9pbnQ6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19FTkRQT0lOVCxcblx0XHR0b2tlbjogc2V0dGluZ3MuVkFVTFRfQ09ORklHX1RPS0VOLFxuXHRcdGtleXM6IHNldHRpbmdzLlZBVUxUX0NPTkZJR19LRVlTLFxuXHRcdGtleTogc2V0dGluZ3MuVkFVTFRfQ09ORklHX0tFWSxcblx0XHRyb290UGF0aDogc2V0dGluZ3MuVkFVTFRfQ09ORklHX1JPT1RQQVRILFxuXHRcdHNlY3JldFNoYXJlczogc2V0dGluZ3MuVkFVTFRfQ09ORklHX1NFQ1JFVF9TSEFSRVNcblx0fSk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCByZW5ld1Rva2VuKHNldHRpbmdzKTtcblx0XHRjb25maWdzLnZhdWx0ID0gYXdhaXQgdmF1bHQuZ2V0KGNvbmZpZ3MudmF1bHQpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yLm1lc3NhZ2UgPSBgdmF1bHQtY29uZmlnOiBcXG4ke2Vycm9yLm1lc3NhZ2V9YDtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxuXG5cdHJldHVybiBleHRlbmQoY29uZmlncy52YXVsdCwgY29uZmlncy5sb2NhbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYXN5bmMoY2FsbGJhY2sgPT4ge1xuXHRsb2FkQ29uZmlnQXN5bmMoKVxuXHRcdC50aGVuKGNvbmZpZyA9PiBjYWxsYmFjayhudWxsLCBjb25maWcpLCBjYWxsYmFjaylcblx0XHQuY2F0Y2goY2FsbGJhY2spO1xufSkoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtdmF1bHRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm5vZGUtdmF1bHRcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhdWx0LWdldFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwidmF1bHQtZ2V0XCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1wcm9taXNlXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCJcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWFzeW5jXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJkZWFzeW5jXCJcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcHAtcm9vdC1wYXRoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhcHAtcm9vdC1wYXRoXCJcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWVwLWV4dGVuZFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZGVlcC1leHRlbmRcIlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=