(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bloc = (function () {
    function Bloc(el) {
        console.log('Created Bloc');
    }
    return Bloc;
}());
exports.default = Bloc;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(4);
var bloc_1 = __webpack_require__(0);
var Grid = (function () {
    function Grid(el) {
        var blocs = $('> div', el).map(function (i, el) { return new bloc_1.default(el); }).get();
    }
    return Grid;
}());
exports.default = Grid;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bloc_1 = __webpack_require__(0);
exports.Bloc = bloc_1.default;
var bloc_party_1 = __webpack_require__(3);
exports.BlocParty = bloc_party_1.default;
var config_1 = __webpack_require__(5);
exports.Config = config_1.default;
var grid_1 = __webpack_require__(1);
exports.Grid = grid_1.default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/**
 * First install the jquery typings:
 * npm install --save-dev @types/jquery
 *
 * Can use a reference tag, specific to TS:
 * /// <reference path ="../typings/jquery/jquery.d.ts" />
 *
 * Or import using
 * import * as $ from "jquery"
 * or
 * import { $ } from "jquery"
 * but with that second one I get an error, so I suspect no you can't
 * https://www.typescriptlang.org/docs/handbook/modules.html
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
//import * as $ from "jquery"
var grid_1 = __webpack_require__(1);
var BlocParty = (function () {
    function BlocParty(config) {
        this.config = config;
        var gridEls = $("div[data-bp-grid-w]").map(function (i, el) { return new grid_1.default(el); }).get();
        /*
        let gridNodes = document.querySelectorAll('div[data-bp-grid-w]');
        // https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
        // but I like map.
        let gridNodeArr = Array.apply(null, gridNodes);
        gridNodeArr.map(_ => console.log(_));
        */
    }
    return BlocParty;
}());
exports.default = BlocParty;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Config = (function () {
    function Config() {
        console.log('Config created');
    }
    return Config;
}());
exports.default = Config;


/***/ })
/******/ ])));