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
	
	var _slicedToArray2 = __webpack_require__(2);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _regenerator = __webpack_require__(3);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(4);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _asyncToGenerator2 = __webpack_require__(5);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	// make promise version of fs.readFile() + JSON.parse
	var readJsonAsync = function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(filename) {
			var doReject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
								_fs2.default.readFile(filename, function (err, data) {
									if (err) {
										if (doReject) {
											reject(err);
										} else {
											resolve(null);
										}
									} else {
										resolve(JSON.parse(data));
									}
								});
							}));
	
						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));
	
		return function readJsonAsync(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	
	var loadConfigAsync = function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var _ref3, _ref4, vaultrc, vaultlocalrc, configs, secrets;
	
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
							_context2.next = 4;
							return _promise2.default.all([readJsonAsync(VAULT_CONFIG_RCPATH), readJsonAsync(_appRootPath2.default + '/.vaultlocalrc', false)]).catch(function (error) {
								throw new Error('vault-config: invalid config/secrets files\n' + error.stack);
							});
	
						case 4:
							_ref3 = _context2.sent;
							_ref4 = (0, _slicedToArray3.default)(_ref3, 2);
							vaultrc = _ref4[0];
							vaultlocalrc = _ref4[1];
	
	
							vaultrc = (0, _deepExtend2.default)(vaultrc, vaultlocalrc);
	
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
								_context2.next = 18;
								break;
							}
	
							configs = configs.reduce(_deepExtend2.default);
							configs.vault = configs.vault || {};
							configs.local = configs.local || {};
	
							// break out early, we have no matching vault rules
	
							if ((0, _keys2.default)(configs.vault).length) {
								_context2.next = 16;
								break;
							}
	
							return _context2.abrupt('return', configs.local);
	
						case 16:
							_context2.next = 19;
							break;
	
						case 18:
							return _context2.abrupt('return', {});
	
						case 19:
	
							debug('secrets: loading');
	
							_context2.prev = 20;
							_context2.next = 23;
							return getSecrets();
	
						case 23:
							secrets = _context2.sent;
	
							configs.vault = secrets;
	
							debug('secrets: loaded ' + (0, _keys2.default)(secrets).length);
	
							_context2.next = 31;
							break;
	
						case 28:
							_context2.prev = 28;
							_context2.t0 = _context2['catch'](20);
							throw new Error('vault-config: cannot load secrets from GCP\n' + _context2.t0.stack);
	
						case 31:
							return _context2.abrupt('return', process[VAULT_GLOBAL] = (0, _deepExtend2.default)(configs.vault, configs.local));
	
						case 32:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[20, 28]]);
		}));
	
		return function loadConfigAsync() {
			return _ref2.apply(this, arguments);
		};
	}();
	
	var _fs = __webpack_require__(6);
	
	var _fs2 = _interopRequireDefault(_fs);
	
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
	
	// import VaultRaw from 'node-vault';
	// import Vault from 'vault-get';
	var getSecrets = __webpack_require__(12);
	
	var debug = (0, _debug2.default)('vault-config');
	var VAULT_CONFIG_RCPATH = process.env.VAULT_CONFIG_RCPATH || _appRootPath2.default + '/.vaultrc';
	// const VAULT_CONFIG_SECRETSPATH = process.env.VAULT_CONFIG_SECRETSPATH || `${__rootdirname}/.vaultsecrets`;
	var VAULT_GLOBAL = '__vault-config-shared__';;
	
	exports.default = (0, _deasync2.default)(function (callback) {
		(0, _atmpt2.default)(loadConfigAsync, { maxAttempts: 3, delay: function delay(attempt) {
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

	module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/regenerator");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("fs");

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

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("@auctionclub/ac-secrets");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmJlM2Y1NDdlYzQ1YWMwM2ExNTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlYXN5bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcHAtcm9vdC1wYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVlcC1leHRlbmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF0bXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGF1Y3Rpb25jbHViL2FjLXNlY3JldHNcIiJdLCJuYW1lcyI6WyJmaWxlbmFtZSIsImRvUmVqZWN0IiwicmVzb2x2ZSIsInJlamVjdCIsImZzIiwicmVhZEZpbGUiLCJlcnIiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVhZEpzb25Bc3luYyIsInByb2Nlc3MiLCJWQVVMVF9HTE9CQUwiLCJhbGwiLCJWQVVMVF9DT05GSUdfUkNQQVRIIiwiX19yb290ZGlybmFtZSIsImNhdGNoIiwiRXJyb3IiLCJlcnJvciIsInN0YWNrIiwidmF1bHRyYyIsInZhdWx0bG9jYWxyYyIsImNvbmZpZ3MiLCJtYXAiLCJlbnZNYXRjaCIsImtleSIsIm1hdGNoIiwibm9kZUVudiIsImVudiIsIk5PREVfRU5WIiwiZmlsdGVyIiwibGVuZ3RoIiwicmVkdWNlIiwiZXh0ZW5kIiwidmF1bHQiLCJsb2NhbCIsImRlYnVnIiwiZ2V0U2VjcmV0cyIsInNlY3JldHMiLCJsb2FkQ29uZmlnQXN5bmMiLCJyZXF1aXJlIiwibWF4QXR0ZW1wdHMiLCJkZWxheSIsImF0dGVtcHQiLCJ0aGVuIiwiY2FsbGJhY2siLCJjb25maWciXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOztzRkFDQSxpQkFBOEJBLFFBQTlCO0FBQUEsT0FBd0NDLFFBQXhDLHVFQUFtRCxJQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBQ1csc0JBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQyxxQkFBR0MsUUFBSCxDQUFZTCxRQUFaLEVBQXNCLFVBQUNNLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ2pDLGFBQUlELEdBQUosRUFBUztBQUNMLGNBQUlMLFFBQUosRUFBYztBQUN6QkUsa0JBQU9HLEdBQVA7QUFDQSxXQUZXLE1BRUw7QUFDTkosbUJBQVEsSUFBUjtBQUNBO0FBQ0QsVUFOUSxNQU9LO0FBQ0RBLGtCQUFRTSxLQUFLQyxLQUFMLENBQVdGLElBQVgsQ0FBUjtBQUNaO0FBQ0ssU0FYRDtBQVlILFFBYk0sQ0FEWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZUcsYTs7Ozs7O3VGQWlCZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDS0Ms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NkIsUUFIUjtBQUlBLEVBTGMsRzs7Ozs7OztBQy9GZiwrRDs7Ozs7O0FDQUEsaUU7Ozs7OztBQ0FBLHVEOzs7Ozs7QUNBQSwyRDs7Ozs7O0FDQUEsb0U7Ozs7OztBQ0FBLGdDOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyYmUzZjU0N2VjNDVhYzAzYTE1MVxuICoqLyIsIi8vIGltcG9ydCBWYXVsdFJhdyBmcm9tICdub2RlLXZhdWx0Jztcbi8vIGltcG9ydCBWYXVsdCBmcm9tICd2YXVsdC1nZXQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBkZWFzeW5jIGZyb20gJ2RlYXN5bmMnO1xuaW1wb3J0IF9fcm9vdGRpcm5hbWUgZnJvbSAnYXBwLXJvb3QtcGF0aCc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJ2RlZXAtZXh0ZW5kJztcbmltcG9ydCBEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgYXRtcHQgZnJvbSAnYXRtcHQnO1xuY29uc3QgZ2V0U2VjcmV0cyA9IHJlcXVpcmUoJ0BhdWN0aW9uY2x1Yi9hYy1zZWNyZXRzJyk7XG5cblxuY29uc3QgZGVidWcgPSBEZWJ1ZygndmF1bHQtY29uZmlnJyk7XG5jb25zdCBWQVVMVF9DT05GSUdfUkNQQVRIID0gcHJvY2Vzcy5lbnYuVkFVTFRfQ09ORklHX1JDUEFUSCB8fCBgJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRyY2A7XG4vLyBjb25zdCBWQVVMVF9DT05GSUdfU0VDUkVUU1BBVEggPSBwcm9jZXNzLmVudi5WQVVMVF9DT05GSUdfU0VDUkVUU1BBVEggfHwgYCR7X19yb290ZGlybmFtZX0vLnZhdWx0c2VjcmV0c2A7XG5jb25zdCBWQVVMVF9HTE9CQUwgPSAnX192YXVsdC1jb25maWctc2hhcmVkX18nO1xuXG4vLyBtYWtlIHByb21pc2UgdmVyc2lvbiBvZiBmcy5yZWFkRmlsZSgpICsgSlNPTi5wYXJzZVxuYXN5bmMgZnVuY3Rpb24gcmVhZEpzb25Bc3luYyAoZmlsZW5hbWUsIGRvUmVqZWN0ID0gdHJ1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZzLnJlYWRGaWxlKGZpbGVuYW1lLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvUmVqZWN0KSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZShudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGRhdGEpKTtcblx0XHRcdH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnQXN5bmMgKCkge1xuXHRpZiAocHJvY2Vzc1tWQVVMVF9HTE9CQUxdKSB7XG5cdFx0cmV0dXJuIHByb2Nlc3NbVkFVTFRfR0xPQkFMXTtcblx0fVxuXG5cdGxldCBbIHZhdWx0cmMsIHZhdWx0bG9jYWxyYyBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuXHRcdHJlYWRKc29uQXN5bmMoVkFVTFRfQ09ORklHX1JDUEFUSCksXG5cdFx0cmVhZEpzb25Bc3luYyhgJHtfX3Jvb3RkaXJuYW1lfS8udmF1bHRsb2NhbHJjYCwgZmFsc2UpLFxuXHRdKVxuXHQuY2F0Y2goZXJyb3IgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGB2YXVsdC1jb25maWc6IGludmFsaWQgY29uZmlnL3NlY3JldHMgZmlsZXNcXG4ke2Vycm9yLnN0YWNrfWApO1xuXG5cdH0pO1xuXG5cblx0dmF1bHRyYyA9IGV4dGVuZCh2YXVsdHJjLCB2YXVsdGxvY2FscmMpO1xuXG5cblx0Ly8gbWVyZ2UgY29uZmlnc1xuXHRsZXQgY29uZmlncyA9IE9iamVjdC5rZXlzKHZhdWx0cmMpXG5cdFx0Lm1hcChrZXkgPT4ge1xuXHRcdFx0bGV0IGVudk1hdGNoID0ga2V5Lm1hdGNoKC9eTk9ERV9FTlY9KC4rKS8pLFxuXHRcdFx0XHRub2RlRW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJyc7XG5cblx0XHRcdGlmIChlbnZNYXRjaCAmJiBub2RlRW52Lm1hdGNoKGBeJHtlbnZNYXRjaFsxXX0kYCkpIHtcblx0XHRcdFx0cmV0dXJuIGtleTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5maWx0ZXIoa2V5ID0+IGtleSlcblx0XHQubWFwKGtleSA9PiB2YXVsdHJjW2tleV0pO1xuXG5cdGlmIChjb25maWdzLmxlbmd0aCkge1xuXHRcdGNvbmZpZ3MgPSBjb25maWdzLnJlZHVjZShleHRlbmQpO1xuXHRcdGNvbmZpZ3MudmF1bHQgPSBjb25maWdzLnZhdWx0IHx8IHt9O1xuXHRcdGNvbmZpZ3MubG9jYWwgPSBjb25maWdzLmxvY2FsIHx8IHt9O1xuXG5cdFx0Ly8gYnJlYWsgb3V0IGVhcmx5LCB3ZSBoYXZlIG5vIG1hdGNoaW5nIHZhdWx0IHJ1bGVzXG5cdFx0aWYgKCFPYmplY3Qua2V5cyhjb25maWdzLnZhdWx0KS5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBjb25maWdzLmxvY2FsO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBicmVhayBvdXQgZWFybHksIHdlIGRvbnQgaGF2ZSBhbnkgcnVsZXNcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXG5cdGRlYnVnKCdzZWNyZXRzOiBsb2FkaW5nJyk7XG5cdFxuXHR0cnkge1xuXHRcdGNvbnN0IHNlY3JldHMgPSBhd2FpdCBnZXRTZWNyZXRzKCk7XG5cdFx0Y29uZmlncy52YXVsdCA9IHNlY3JldHM7XG5cdFxuXHRcdGRlYnVnKCdzZWNyZXRzOiBsb2FkZWQgJyArIE9iamVjdC5rZXlzKHNlY3JldHMpLmxlbmd0aCk7XG5cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYHZhdWx0LWNvbmZpZzogY2Fubm90IGxvYWQgc2VjcmV0cyBmcm9tIEdDUFxcbiR7ZXJyb3Iuc3RhY2t9YCk7XG5cdH1cblxuXHRyZXR1cm4gcHJvY2Vzc1tWQVVMVF9HTE9CQUxdID0gZXh0ZW5kKGNvbmZpZ3MudmF1bHQsIGNvbmZpZ3MubG9jYWwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWFzeW5jKGNhbGxiYWNrID0+IHtcblx0YXRtcHQobG9hZENvbmZpZ0FzeW5jLCB7bWF4QXR0ZW1wdHM6IDMsIGRlbGF5OiBhdHRlbXB0ID0+IGF0dGVtcHQgKiAxMDAwfSkudGhlbihcblx0XHRjb25maWcgPT4gY2FsbGJhY2sobnVsbCwgY29uZmlnKSxcblx0XHRjYWxsYmFja1xuXHQpLmNhdGNoKGNhbGxiYWNrKTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCJcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZzXCJcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWFzeW5jXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJkZWFzeW5jXCJcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcHAtcm9vdC1wYXRoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhcHAtcm9vdC1wYXRoXCJcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWVwLWV4dGVuZFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZGVlcC1leHRlbmRcIlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlYnVnXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJkZWJ1Z1wiXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF0bXB0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhdG1wdFwiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdWN0aW9uY2x1Yi9hYy1zZWNyZXRzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJAYXVjdGlvbmNsdWIvYWMtc2VjcmV0c1wiXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=