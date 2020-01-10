/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/ciel-nocturne.png":
/*!**************************************!*\
  !*** ./src/images/ciel-nocturne.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/img/ciel-nocturne.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NpZWwtbm9jdHVybmUucG5nPzBjZGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUF1QiIsImZpbGUiOiIuL3NyYy9pbWFnZXMvY2llbC1ub2N0dXJuZS5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaW1nL2NpZWwtbm9jdHVybmUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/images/ciel-nocturne.png\n");

/***/ }),

/***/ "./src/images/flyingSaucer-petit.png":
/*!*******************************************!*\
  !*** ./src/images/flyingSaucer-petit.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/img/flyingSaucer-petit.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ZseWluZ1NhdWNlci1wZXRpdC5wbmc/YTY2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2ltYWdlcy9mbHlpbmdTYXVjZXItcGV0aXQucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ltZy9mbHlpbmdTYXVjZXItcGV0aXQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/images/flyingSaucer-petit.png\n");

/***/ }),

/***/ "./src/images/flyingSaucer.png":
/*!*************************************!*\
  !*** ./src/images/flyingSaucer.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/img/flyingSaucer.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ZseWluZ1NhdWNlci5wbmc/MjYzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2ltYWdlcy9mbHlpbmdTYXVjZXIucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ltZy9mbHlpbmdTYXVjZXIucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/images/flyingSaucer.png\n");

/***/ }),

/***/ "./src/images/tir.png":
/*!****************************!*\
  !*** ./src/images/tir.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/img/tir.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Rpci5wbmc/NzA4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2ltYWdlcy90aXIucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ltZy90aXIucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/images/tir.png\n");

/***/ }),

/***/ "./src/images/vaisseau-ballon-petit.png":
/*!**********************************************!*\
  !*** ./src/images/vaisseau-ballon-petit.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/img/vaisseau-ballon-petit.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZhaXNzZWF1LWJhbGxvbi1wZXRpdC5wbmc/MWMyMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2ltYWdlcy92YWlzc2VhdS1iYWxsb24tcGV0aXQucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ltZy92YWlzc2VhdS1iYWxsb24tcGV0aXQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/images/vaisseau-ballon-petit.png\n");

/***/ }),

/***/ "./src/images/vaisseau-ballon.png":
/*!****************************************!*\
  !*** ./src/images/vaisseau-ballon.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/img/vaisseau-ballon.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZhaXNzZWF1LWJhbGxvbi5wbmc/ZDI1NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2ltYWdlcy92YWlzc2VhdS1iYWxsb24ucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ltZy92YWlzc2VhdS1iYWxsb24ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/images/vaisseau-ballon.png\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moveState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveState.js */ \"./src/scripts/moveState.js\");\n/* harmony import */ var _shoot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shoot.js */ \"./src/scripts/shoot.js\");\n\r\n\r\n\r\nconst TIME = 15;\r\nconst LOSS = 1000; // perte\r\nconst GAIN = 200;\r\n\r\nclass Game {\r\n\r\n\tconstructor () {\r\n\t\tthis._canvas = undefined;\r\n\t\tthis._starShip = undefined;\r\n\t\tthis._saucers = [];\r\n\t\tthis._score = 0;\r\n\t\tthis._raf;\r\n\t\tthis._shoots = [];\r\n\t\tthis._intervalSaucerIds = [];\r\n\t\tthis._intervalShootIds = [];\r\n\t}\r\n\r\n\tget width() {return this.canvas.width;}\r\n\tget height() {return this.canvas.height;}\r\n\tget canvas() {return this._canvas;}\r\n\tset canvas(c) {this._canvas = c;}\r\n\tget starShip() {return this._starShip;}\r\n\tset starShip(v) {this._starShip = v;}\r\n\tget saucers() {return this._saucers;}\r\n\tset addSaucer(s) {\r\n\t\tthis._saucers.push(s);\r\n\t\tthis.addintervalSaucerIds = setInterval(s.move.bind(s), TIME, this.canvas);\r\n\t}\r\n\tget shoots() {return this._shoots;}\r\n\tset addShoot(s) {\r\n\t\tthis._shoots.push(s);\r\n\t\tthis.addintervalShootIds = setInterval(s.move.bind(s), TIME, this.canvas);\r\n\t}\r\n\tget score() {return this._score;}\r\n\tset score(v) {this._score = v;}\r\n\tget intervalSaucerIds() {return this._intervalSaucerIds;}\r\n\tset addintervalSaucerIds(t) {this._intervalSaucerIds.push(t);}\r\n\tget intervalShootIds() {return this._intervalShootIds;}\r\n\tset addintervalShootIds(t) {this._intervalShootIds.push(t);}\r\n\r\n\tdeleteSaucer(saucer) {\r\n\t\tlet index = this.saucers.indexOf(saucer);\r\n\t\tthis.saucers.splice(index, 1);\r\n\t\tclearInterval(this.intervalSaucerIds[index]);\r\n\t}\r\n\r\n\tdeleteShoot(shoot) {\r\n\t\tlet index = this.shoots.indexOf(shoot);\r\n\t\tthis.shoots.splice(index, 1);\r\n\t\tclearInterval(this.intervalShootIds[index]);\r\n\t}\r\n\r\n\tmoveAndDraw() {\r\n\t\tlet context = this.canvas.getContext(\"2d\");\r\n\t\tcontext.clearRect(0, 0, this.width, this.height);\r\n\r\n\t\t// Actions liées aux balles\r\n\t\tlet shoots_tmp = [...this.shoots]; // une copie de mon tableau des tirs\r\n\t\tshoots_tmp.forEach(shoot => { // deplacer et supprimer chaque tir qui a été en collision\r\n\t\t\tshoot.move(this.canvas);\r\n\t\t\tshoot.searchCollisionAmong(this.saucers);\r\n\t\t\tif (shoot.hit) this.deleteShoot(shoot);\r\n\t\t\telse shoot.draw(context);\r\n\t\t});\r\n\r\n\t\t//  Actions liées docaux soucoupes ennemies\r\n\t\tlet saucers_tmp = [...this.saucers]; // une copie de mon tableau des tirs\r\n\t\tsaucers_tmp.forEach(saucer => {\r\n\t\t\tif (!saucer.isCrushing && saucer.hit) {\r\n\t\t\t\tsaucer.deltaX = 0;\r\n\t\t\t\tsaucer.deltaY = 3;\r\n\t\t\t\tsaucer.isCrushing = true;\r\n\t\t\t\tthis.score = this.score + GAIN;\r\n\t\t\t}\r\n\t\t\telse if (saucer.won) {\r\n\t\t\t\tthis.deleteSaucer(saucer);\r\n\t\t\t\tthis.score = this.score - LOSS; \r\n\t\t\t}\r\n\t\t\telse if (saucer.crushed) this.deleteSaucer(saucer);\r\n\t\t});\r\n\t\tthis.saucers.forEach(saucer => saucer.draw(context));\r\n\r\n\t\t// Actions liées à la soucoupe principale\r\n\t\tthis.starShip.move(this.canvas);\r\n\t\tthis.starShip.draw(context);\r\n\r\n\t\tthis.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));\r\n\t}\r\n\r\n\tkeyDownActionHandler(event) {\r\n\t\tswitch (event.key) {\r\n\t\t\tcase \"ArrowUp\":\r\n\t\t\tcase \"Up\":\r\n\t            this.starShip.moving = _moveState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].UP;\r\n\t            break;\r\n\t        case \"ArrowDown\":\r\n\t        case \"Down\":\r\n\t            this.starShip.moving = _moveState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DOWN;\r\n\t\t\t\tbreak;\r\n\t\t\tcase \" \":\r\n\t\t\t\tthis.addShoot = new _shoot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.starShip.x + this.starShip.width, this.starShip.y + (this.starShip.height / 2));\r\n\t        default: return;\r\n\t\t}\r\n\t\tevent.preventDefault();\r\n\t}\r\n\r\n\tkeyUpActionHandler(event) {\r\n\t\tswitch (event.key) {//\t\tthis._canvas = canvas;\r\n\t        case \"ArrowUp\":\r\n\t        case \"Up\":\r\n\t        case \"ArrowDown\":\r\n\t        case \"Down\":\r\n\t            this.starShip.moving = _moveState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].STILL;\r\n\t\t\t\tbreak;\r\n\t        default: return;\r\n\t    }\r\n\t    event.preventDefault();\r\n\t}\r\n}\r\n\r\nlet theGame = new Game();\r\ntheGame.constructor = undefined;\r\nObject.getPrototypeOf(theGame).constructor = undefined;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (theGame);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1I7O0FBRS9CO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxlQUFlO0FBQ2YsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxlQUFlO0FBQ2YsMEJBQTBCO0FBQzFCLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBUztBQUM3QztBQUNBO0FBQ0Esd0JBQXdCLGlEQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZSxzRUFBTyxFQUFDIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvZ2FtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZlU3RhdGUgZnJvbSAnLi9tb3ZlU3RhdGUuanMnO1xyXG5pbXBvcnQgU2hvb3QgZnJvbSAnLi9zaG9vdC5qcyc7XHJcblxyXG5jb25zdCBUSU1FID0gMTU7XHJcbmNvbnN0IExPU1MgPSAxMDAwOyAvLyBwZXJ0ZVxyXG5jb25zdCBHQUlOID0gMjAwO1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuXHRcdHRoaXMuX2NhbnZhcyA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuX3N0YXJTaGlwID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5fc2F1Y2VycyA9IFtdO1xyXG5cdFx0dGhpcy5fc2NvcmUgPSAwO1xyXG5cdFx0dGhpcy5fcmFmO1xyXG5cdFx0dGhpcy5fc2hvb3RzID0gW107XHJcblx0XHR0aGlzLl9pbnRlcnZhbFNhdWNlcklkcyA9IFtdO1xyXG5cdFx0dGhpcy5faW50ZXJ2YWxTaG9vdElkcyA9IFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0IHdpZHRoKCkge3JldHVybiB0aGlzLmNhbnZhcy53aWR0aDt9XHJcblx0Z2V0IGhlaWdodCgpIHtyZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O31cclxuXHRnZXQgY2FudmFzKCkge3JldHVybiB0aGlzLl9jYW52YXM7fVxyXG5cdHNldCBjYW52YXMoYykge3RoaXMuX2NhbnZhcyA9IGM7fVxyXG5cdGdldCBzdGFyU2hpcCgpIHtyZXR1cm4gdGhpcy5fc3RhclNoaXA7fVxyXG5cdHNldCBzdGFyU2hpcCh2KSB7dGhpcy5fc3RhclNoaXAgPSB2O31cclxuXHRnZXQgc2F1Y2VycygpIHtyZXR1cm4gdGhpcy5fc2F1Y2Vyczt9XHJcblx0c2V0IGFkZFNhdWNlcihzKSB7XHJcblx0XHR0aGlzLl9zYXVjZXJzLnB1c2gocyk7XHJcblx0XHR0aGlzLmFkZGludGVydmFsU2F1Y2VySWRzID0gc2V0SW50ZXJ2YWwocy5tb3ZlLmJpbmQocyksIFRJTUUsIHRoaXMuY2FudmFzKTtcclxuXHR9XHJcblx0Z2V0IHNob290cygpIHtyZXR1cm4gdGhpcy5fc2hvb3RzO31cclxuXHRzZXQgYWRkU2hvb3Qocykge1xyXG5cdFx0dGhpcy5fc2hvb3RzLnB1c2gocyk7XHJcblx0XHR0aGlzLmFkZGludGVydmFsU2hvb3RJZHMgPSBzZXRJbnRlcnZhbChzLm1vdmUuYmluZChzKSwgVElNRSwgdGhpcy5jYW52YXMpO1xyXG5cdH1cclxuXHRnZXQgc2NvcmUoKSB7cmV0dXJuIHRoaXMuX3Njb3JlO31cclxuXHRzZXQgc2NvcmUodikge3RoaXMuX3Njb3JlID0gdjt9XHJcblx0Z2V0IGludGVydmFsU2F1Y2VySWRzKCkge3JldHVybiB0aGlzLl9pbnRlcnZhbFNhdWNlcklkczt9XHJcblx0c2V0IGFkZGludGVydmFsU2F1Y2VySWRzKHQpIHt0aGlzLl9pbnRlcnZhbFNhdWNlcklkcy5wdXNoKHQpO31cclxuXHRnZXQgaW50ZXJ2YWxTaG9vdElkcygpIHtyZXR1cm4gdGhpcy5faW50ZXJ2YWxTaG9vdElkczt9XHJcblx0c2V0IGFkZGludGVydmFsU2hvb3RJZHModCkge3RoaXMuX2ludGVydmFsU2hvb3RJZHMucHVzaCh0KTt9XHJcblxyXG5cdGRlbGV0ZVNhdWNlcihzYXVjZXIpIHtcclxuXHRcdGxldCBpbmRleCA9IHRoaXMuc2F1Y2Vycy5pbmRleE9mKHNhdWNlcik7XHJcblx0XHR0aGlzLnNhdWNlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFNhdWNlcklkc1tpbmRleF0pO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2hvb3Qoc2hvb3QpIHtcclxuXHRcdGxldCBpbmRleCA9IHRoaXMuc2hvb3RzLmluZGV4T2Yoc2hvb3QpO1xyXG5cdFx0dGhpcy5zaG9vdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFNob290SWRzW2luZGV4XSk7XHJcblx0fVxyXG5cclxuXHRtb3ZlQW5kRHJhdygpIHtcclxuXHRcdGxldCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cdFx0Y29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuXHRcdC8vIEFjdGlvbnMgbGnDqWVzIGF1eCBiYWxsZXNcclxuXHRcdGxldCBzaG9vdHNfdG1wID0gWy4uLnRoaXMuc2hvb3RzXTsgLy8gdW5lIGNvcGllIGRlIG1vbiB0YWJsZWF1IGRlcyB0aXJzXHJcblx0XHRzaG9vdHNfdG1wLmZvckVhY2goc2hvb3QgPT4geyAvLyBkZXBsYWNlciBldCBzdXBwcmltZXIgY2hhcXVlIHRpciBxdWkgYSDDqXTDqSBlbiBjb2xsaXNpb25cclxuXHRcdFx0c2hvb3QubW92ZSh0aGlzLmNhbnZhcyk7XHJcblx0XHRcdHNob290LnNlYXJjaENvbGxpc2lvbkFtb25nKHRoaXMuc2F1Y2Vycyk7XHJcblx0XHRcdGlmIChzaG9vdC5oaXQpIHRoaXMuZGVsZXRlU2hvb3Qoc2hvb3QpO1xyXG5cdFx0XHRlbHNlIHNob290LmRyYXcoY29udGV4dCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyAgQWN0aW9ucyBsacOpZXMgZG9jYXV4IHNvdWNvdXBlcyBlbm5lbWllc1xyXG5cdFx0bGV0IHNhdWNlcnNfdG1wID0gWy4uLnRoaXMuc2F1Y2Vyc107IC8vIHVuZSBjb3BpZSBkZSBtb24gdGFibGVhdSBkZXMgdGlyc1xyXG5cdFx0c2F1Y2Vyc190bXAuZm9yRWFjaChzYXVjZXIgPT4ge1xyXG5cdFx0XHRpZiAoIXNhdWNlci5pc0NydXNoaW5nICYmIHNhdWNlci5oaXQpIHtcclxuXHRcdFx0XHRzYXVjZXIuZGVsdGFYID0gMDtcclxuXHRcdFx0XHRzYXVjZXIuZGVsdGFZID0gMztcclxuXHRcdFx0XHRzYXVjZXIuaXNDcnVzaGluZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5zY29yZSA9IHRoaXMuc2NvcmUgKyBHQUlOO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHNhdWNlci53b24pIHtcclxuXHRcdFx0XHR0aGlzLmRlbGV0ZVNhdWNlcihzYXVjZXIpO1xyXG5cdFx0XHRcdHRoaXMuc2NvcmUgPSB0aGlzLnNjb3JlIC0gTE9TUzsgXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc2F1Y2VyLmNydXNoZWQpIHRoaXMuZGVsZXRlU2F1Y2VyKHNhdWNlcik7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc2F1Y2Vycy5mb3JFYWNoKHNhdWNlciA9PiBzYXVjZXIuZHJhdyhjb250ZXh0KSk7XHJcblxyXG5cdFx0Ly8gQWN0aW9ucyBsacOpZXMgw6AgbGEgc291Y291cGUgcHJpbmNpcGFsZVxyXG5cdFx0dGhpcy5zdGFyU2hpcC5tb3ZlKHRoaXMuY2FudmFzKTtcclxuXHRcdHRoaXMuc3RhclNoaXAuZHJhdyhjb250ZXh0KTtcclxuXHJcblx0XHR0aGlzLnJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlQW5kRHJhdy5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdGtleURvd25BY3Rpb25IYW5kbGVyKGV2ZW50KSB7XHJcblx0XHRzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG5cdFx0XHRjYXNlIFwiQXJyb3dVcFwiOlxyXG5cdFx0XHRjYXNlIFwiVXBcIjpcclxuXHQgICAgICAgICAgICB0aGlzLnN0YXJTaGlwLm1vdmluZyA9IE1vdmVTdGF0ZS5VUDtcclxuXHQgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuXHQgICAgICAgIGNhc2UgXCJEb3duXCI6XHJcblx0ICAgICAgICAgICAgdGhpcy5zdGFyU2hpcC5tb3ZpbmcgPSBNb3ZlU3RhdGUuRE9XTjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIiBcIjpcclxuXHRcdFx0XHR0aGlzLmFkZFNob290ID0gbmV3IFNob290KHRoaXMuc3RhclNoaXAueCArIHRoaXMuc3RhclNoaXAud2lkdGgsIHRoaXMuc3RhclNoaXAueSArICh0aGlzLnN0YXJTaGlwLmhlaWdodCAvIDIpKTtcclxuXHQgICAgICAgIGRlZmF1bHQ6IHJldHVybjtcclxuXHRcdH1cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRrZXlVcEFjdGlvbkhhbmRsZXIoZXZlbnQpIHtcclxuXHRcdHN3aXRjaCAoZXZlbnQua2V5KSB7Ly9cdFx0dGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG5cdCAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuXHQgICAgICAgIGNhc2UgXCJVcFwiOlxyXG5cdCAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG5cdCAgICAgICAgY2FzZSBcIkRvd25cIjpcclxuXHQgICAgICAgICAgICB0aGlzLnN0YXJTaGlwLm1vdmluZyA9IE1vdmVTdGF0ZS5TVElMTDtcclxuXHRcdFx0XHRicmVhaztcclxuXHQgICAgICAgIGRlZmF1bHQ6IHJldHVybjtcclxuXHQgICAgfVxyXG5cdCAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxufVxyXG5cclxubGV0IHRoZUdhbWUgPSBuZXcgR2FtZSgpO1xyXG50aGVHYW1lLmNvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xyXG5PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhlR2FtZSkuY29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XHJcbmV4cG9ydCBkZWZhdWx0IHRoZUdhbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_ciel_nocturne_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/ciel-nocturne.png */ \"./src/images/ciel-nocturne.png\");\n/* harmony import */ var _images_ciel_nocturne_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_ciel_nocturne_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_flyingSaucer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/flyingSaucer.png */ \"./src/images/flyingSaucer.png\");\n/* harmony import */ var _images_flyingSaucer_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_flyingSaucer_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_tir_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/tir.png */ \"./src/images/tir.png\");\n/* harmony import */ var _images_tir_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_tir_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_vaisseau_ballon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/vaisseau-ballon.png */ \"./src/images/vaisseau-ballon.png\");\n/* harmony import */ var _images_vaisseau_ballon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_vaisseau_ballon_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _saucer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saucer.js */ \"./src/scripts/saucer.js\");\n/* harmony import */ var _starShip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starShip.js */ \"./src/scripts/starShip.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst TIME = 750;\r\nconst SAUCER_HEIGHT = 36;\r\nconst SAUCER_WIDTH  = 48;\r\nconst STAR_SHIP_X   = 40;\r\n\r\nvar setup = () => {\r\n \tlet theCanvas = document.getElementById(\"stars\");\r\n\t_game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].canvas = theCanvas;\r\n\r\n\t// evenements liés au bouton nouvelleSoucoupe\r\n\tlet nouvelleSoucoupe = document.getElementById(\"nouvelleSoucoupe\");\r\n\tnouvelleSoucoupe.addEventListener(\"click\", () => {\r\n\t\t_game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].starShip = new _starShip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"] (STAR_SHIP_X, _game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].canvas.height / 2);\r\n\t\tnouvelleSoucoupe.blur();\r\n\t\twindow.addEventListener(\"keydown\", _game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].keyDownActionHandler.bind(_game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));\r\n\t\twindow.addEventListener(\"keyup\", _game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].keyUpActionHandler.bind(_game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));\r\n\t\t_game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].raf = window.requestAnimationFrame(_game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].moveAndDraw.bind(_game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));\r\n\t});\r\n\r\n\t// evenements liés au bouton flotteSoucoupes\r\n\tlet flotteSoucoupes  = document.getElementById(\"flotteSoucoupes\");\r\n\tlet intervalId = null;\r\n\tlet score = document.getElementById(\"score\"); // à revoir\r\n\tflotteSoucoupes.addEventListener(\"click\", () => {\r\n\t\tif (flotteSoucoupes.classList.length == 0) {\r\n\t\t\tintervalId = setInterval(() => {\r\n\t\t\t\tif (alea (100) >= 50 ) {\r\n\t\t\t\t\tlet x = _game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].canvas.width - SAUCER_WIDTH;\r\n\t\t\t\t\tlet y = alea (_game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].canvas.height - SAUCER_HEIGHT);\r\n\t\t\t\t\t_game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addSaucer = new _saucer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"] (x, y);\r\n\t\t\t\t}\r\n\t\t\t\tscore.textContent = _game_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].score + \"\";\r\n\t\t\t}, TIME);\r\n\t\t\tflotteSoucoupes.classList.add(\"start\");\r\n\t\t\tflotteSoucoupes.style.borderColor = \"rgba(0, 255, 0, .6)\";\r\n\t\t} else {\r\n\t\t\tclearTimeout(intervalId);\r\n\t\t\tflotteSoucoupes.classList.remove(\"start\");\r\n\t\t\tflotteSoucoupes.style.borderColor = \"rgba(255, 0, 0, .6)\";\r\n\t\t}\r\n\t\tflotteSoucoupes.blur();\r\n\t\t}); \r\n\r\n}\r\n\r\n\r\nvar alea = n => Math.floor(Math.random() * n);\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", setup);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ0Q7QUFDVDtBQUNZOztBQUVOO0FBQ0k7QUFDTDs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsZ0RBQU87O0FBRVI7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnREFBTyxnQkFBZ0Isb0RBQVEsZUFBZSxnREFBTztBQUN2RDtBQUNBLHFDQUFxQyxnREFBTywyQkFBMkIsZ0RBQU87QUFDOUUsbUNBQW1DLGdEQUFPLHlCQUF5QixnREFBTztBQUMxRSxFQUFFLGdEQUFPLG9DQUFvQyxnREFBTyxrQkFBa0IsZ0RBQU87QUFDN0UsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdEQUFPO0FBQ3BCLG1CQUFtQixnREFBTztBQUMxQixLQUFLLGdEQUFPLGlCQUFpQixrREFBTTtBQUNuQztBQUNBLHdCQUF3QixnREFBTztBQUMvQixJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFOztBQUVIOzs7QUFHQTs7QUFFQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2ltYWdlcy9jaWVsLW5vY3R1cm5lLnBuZyc7XHJcbmltcG9ydCAnLi4vaW1hZ2VzL2ZseWluZ1NhdWNlci5wbmcnO1xyXG5pbXBvcnQgJy4uL2ltYWdlcy90aXIucG5nJztcclxuaW1wb3J0ICcuLi9pbWFnZXMvdmFpc3NlYXUtYmFsbG9uLnBuZyc7XHJcblxyXG5pbXBvcnQgU2F1Y2VyIGZyb20gJy4vc2F1Y2VyLmpzJztcclxuaW1wb3J0IFN0YXJTaGlwIGZyb20gJy4vc3RhclNoaXAuanMnO1xyXG5pbXBvcnQgdGhlR2FtZSBmcm9tICcuL2dhbWUuanMnO1xyXG5cclxuY29uc3QgVElNRSA9IDc1MDtcclxuY29uc3QgU0FVQ0VSX0hFSUdIVCA9IDM2O1xyXG5jb25zdCBTQVVDRVJfV0lEVEggID0gNDg7XHJcbmNvbnN0IFNUQVJfU0hJUF9YICAgPSA0MDtcclxuXHJcbnZhciBzZXR1cCA9ICgpID0+IHtcclxuIFx0bGV0IHRoZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnNcIik7XHJcblx0dGhlR2FtZS5jYW52YXMgPSB0aGVDYW52YXM7XHJcblxyXG5cdC8vIGV2ZW5lbWVudHMgbGnDqXMgYXUgYm91dG9uIG5vdXZlbGxlU291Y291cGVcclxuXHRsZXQgbm91dmVsbGVTb3Vjb3VwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm91dmVsbGVTb3Vjb3VwZVwiKTtcclxuXHRub3V2ZWxsZVNvdWNvdXBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHR0aGVHYW1lLnN0YXJTaGlwID0gbmV3IFN0YXJTaGlwIChTVEFSX1NISVBfWCwgdGhlR2FtZS5jYW52YXMuaGVpZ2h0IC8gMik7XHJcblx0XHRub3V2ZWxsZVNvdWNvdXBlLmJsdXIoKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGVHYW1lLmtleURvd25BY3Rpb25IYW5kbGVyLmJpbmQodGhlR2FtZSkpO1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGVHYW1lLmtleVVwQWN0aW9uSGFuZGxlci5iaW5kKHRoZUdhbWUpKTtcclxuXHRcdHRoZUdhbWUucmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGVHYW1lLm1vdmVBbmREcmF3LmJpbmQodGhlR2FtZSkpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBldmVuZW1lbnRzIGxpw6lzIGF1IGJvdXRvbiBmbG90dGVTb3Vjb3VwZXNcclxuXHRsZXQgZmxvdHRlU291Y291cGVzICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmxvdHRlU291Y291cGVzXCIpO1xyXG5cdGxldCBpbnRlcnZhbElkID0gbnVsbDtcclxuXHRsZXQgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpOyAvLyDDoCByZXZvaXJcclxuXHRmbG90dGVTb3Vjb3VwZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGlmIChmbG90dGVTb3Vjb3VwZXMuY2xhc3NMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0aWYgKGFsZWEgKDEwMCkgPj0gNTAgKSB7XHJcblx0XHRcdFx0XHRsZXQgeCA9IHRoZUdhbWUuY2FudmFzLndpZHRoIC0gU0FVQ0VSX1dJRFRIO1xyXG5cdFx0XHRcdFx0bGV0IHkgPSBhbGVhICh0aGVHYW1lLmNhbnZhcy5oZWlnaHQgLSBTQVVDRVJfSEVJR0hUKTtcclxuXHRcdFx0XHRcdHRoZUdhbWUuYWRkU2F1Y2VyID0gbmV3IFNhdWNlciAoeCwgeSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNjb3JlLnRleHRDb250ZW50ID0gdGhlR2FtZS5zY29yZSArIFwiXCI7XHJcblx0XHRcdH0sIFRJTUUpO1xyXG5cdFx0XHRmbG90dGVTb3Vjb3VwZXMuY2xhc3NMaXN0LmFkZChcInN0YXJ0XCIpO1xyXG5cdFx0XHRmbG90dGVTb3Vjb3VwZXMuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJnYmEoMCwgMjU1LCAwLCAuNilcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNsZWFyVGltZW91dChpbnRlcnZhbElkKTtcclxuXHRcdFx0ZmxvdHRlU291Y291cGVzLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydFwiKTtcclxuXHRcdFx0ZmxvdHRlU291Y291cGVzLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZ2JhKDI1NSwgMCwgMCwgLjYpXCI7XHJcblx0XHR9XHJcblx0XHRmbG90dGVTb3Vjb3VwZXMuYmx1cigpO1xyXG5cdFx0fSk7IFxyXG5cclxufVxyXG5cclxuXHJcbnZhciBhbGVhID0gbiA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzZXR1cCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ }),

/***/ "./src/scripts/mobile.js":
/*!*******************************!*\
  !*** ./src/scripts/mobile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mobile; });\nclass Mobile {\r\n\r\n  constructor(x, y, img, deltaX = 0, deltaY = 0) {\r\n    this._x = x;\r\n    this._y = y;\r\n    this._deltaX = deltaX;\r\n    this._deltaY = deltaY;\r\n    this._img = new Image();\r\n    this._img.src = img;\r\n    this._hit = false;\r\n  }\r\n\r\n  get x() {return this._x;}\r\n  set x(v) {return this._x = v;}\r\n  get y() {return this._y;}\r\n  set y(v) {return this._y = v;}\r\n  get deltaX() {return this._deltaX;} \r\n  set deltaX(v) {this._deltaX = v;}\r\n  get deltaY() {return this._deltaY;}\r\n  set deltaY(v) {this._deltaY = v;}\r\n  get img() {return this._img;}\r\n  get hit() {return this._hit;}\r\n  set hit(v) {this._hit = v;}\r\n  get width() {return this._img.width;}\r\n  get height() {return this._img.height;}\r\n\r\n  draw(context) {\r\n    context.drawImage(this.img, this.x, this.y);\r\n  }\r\n\r\n  move(canvas) {\r\n    this.x = this.x + this.deltaX;\r\n    this.y = this.y + this.deltaY;\r\n  }\r\n\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2JpbGUuanM/YjE0NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osV0FBVztBQUNYLFlBQVk7QUFDWixnQkFBZ0IscUI7QUFDaEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLGFBQWE7QUFDYixjQUFjO0FBQ2QsZUFBZTtBQUNmLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbW9iaWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgaW1nLCBkZWx0YVggPSAwLCBkZWx0YVkgPSAwKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gICAgdGhpcy5fZGVsdGFYID0gZGVsdGFYO1xyXG4gICAgdGhpcy5fZGVsdGFZID0gZGVsdGFZO1xyXG4gICAgdGhpcy5faW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLl9pbWcuc3JjID0gaW1nO1xyXG4gICAgdGhpcy5faGl0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgeCgpIHtyZXR1cm4gdGhpcy5feDt9XHJcbiAgc2V0IHgodikge3JldHVybiB0aGlzLl94ID0gdjt9XHJcbiAgZ2V0IHkoKSB7cmV0dXJuIHRoaXMuX3k7fVxyXG4gIHNldCB5KHYpIHtyZXR1cm4gdGhpcy5feSA9IHY7fVxyXG4gIGdldCBkZWx0YVgoKSB7cmV0dXJuIHRoaXMuX2RlbHRhWDt9IFxyXG4gIHNldCBkZWx0YVgodikge3RoaXMuX2RlbHRhWCA9IHY7fVxyXG4gIGdldCBkZWx0YVkoKSB7cmV0dXJuIHRoaXMuX2RlbHRhWTt9XHJcbiAgc2V0IGRlbHRhWSh2KSB7dGhpcy5fZGVsdGFZID0gdjt9XHJcbiAgZ2V0IGltZygpIHtyZXR1cm4gdGhpcy5faW1nO31cclxuICBnZXQgaGl0KCkge3JldHVybiB0aGlzLl9oaXQ7fVxyXG4gIHNldCBoaXQodikge3RoaXMuX2hpdCA9IHY7fVxyXG4gIGdldCB3aWR0aCgpIHtyZXR1cm4gdGhpcy5faW1nLndpZHRoO31cclxuICBnZXQgaGVpZ2h0KCkge3JldHVybiB0aGlzLl9pbWcuaGVpZ2h0O31cclxuXHJcbiAgZHJhdyhjb250ZXh0KSB7XHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy54LCB0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgbW92ZShjYW52YXMpIHtcclxuICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuZGVsdGFYO1xyXG4gICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5kZWx0YVk7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/mobile.js\n");

/***/ }),

/***/ "./src/scripts/moveState.js":
/*!**********************************!*\
  !*** ./src/scripts/moveState.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MoveState; });\n\r\nconst UP    = Symbol(\"up\");\r\nconst DOWN  = Symbol(\"down\");\r\nconst STILL = Symbol(\"immobile\");\r\n\r\n\r\nclass MoveState {\r\n\r\n  static get UP() {return UP;}\r\n  static get DOWN() {return DOWN;}\r\n  static get STILL() {return STILL;}\r\n\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb3ZlU3RhdGUuanM/MzhlMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUdlOztBQUVmLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsc0JBQXNCOztBQUV0QiIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21vdmVTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBVUCAgICA9IFN5bWJvbChcInVwXCIpO1xyXG5jb25zdCBET1dOICA9IFN5bWJvbChcImRvd25cIik7XHJcbmNvbnN0IFNUSUxMID0gU3ltYm9sKFwiaW1tb2JpbGVcIik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZVN0YXRlIHtcclxuXHJcbiAgc3RhdGljIGdldCBVUCgpIHtyZXR1cm4gVVA7fVxyXG4gIHN0YXRpYyBnZXQgRE9XTigpIHtyZXR1cm4gRE9XTjt9XHJcbiAgc3RhdGljIGdldCBTVElMTCgpIHtyZXR1cm4gU1RJTEw7fVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moveState.js\n");

/***/ }),

/***/ "./src/scripts/saucer.js":
/*!*******************************!*\
  !*** ./src/scripts/saucer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Saucer; });\n/* harmony import */ var _images_flyingSaucer_petit_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/flyingSaucer-petit.png */ \"./src/images/flyingSaucer-petit.png\");\n/* harmony import */ var _images_flyingSaucer_petit_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_flyingSaucer_petit_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile.js */ \"./src/scripts/mobile.js\");\n\r\n\r\n\r\nconst DELTA_X = -3;\r\nconst DELTA_Y = 0;\r\n\r\nclass Saucer extends _mobile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n\r\n\tconstructor(x, y) {\r\n   \t\tsuper(x, y, _images_flyingSaucer_petit_png__WEBPACK_IMPORTED_MODULE_0___default.a, DELTA_X, DELTA_Y);\r\n\t\tthis._won = false; // savoir si la soucoupe sort du jeu par la gauche\r\n\t\tthis._crushed = false;\r\n\t\tthis._isCrushing = false;\r\n  \t}\r\n\r\n  \tget won() {return this._won;}\r\n\tset won(v) {this._won = v;}\r\n\tget crushed() {return this._crushed;}\r\n\tset crushed(v) {this._crushed = v;}\r\n\tget isCrushing() {return this._isCrushing;}\r\n\tset isCrushing(v) {this._isCrushing = true;}\r\n \r\n  \tmove(canvas) {\r\n  \t\tsuper.move(canvas);\r\n\t\tif (this.x <= 0) this.won = true;\r\n\t\tif (this.y >= canvas.height) this.crushed = true;\r\n  \t}\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zYXVjZXIuanM/OTg4NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQzFCOztBQUVqQztBQUNBOztBQUVlLHFCQUFxQixrREFBTTs7QUFFMUM7QUFDQSxpQkFBaUIscUVBQVc7QUFDNUIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvc2F1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltYWdlU2F1Y2VyIGZyb20gJy4uL2ltYWdlcy9mbHlpbmdTYXVjZXItcGV0aXQucG5nJztcclxuaW1wb3J0IE1vYmlsZSBmcm9tICcuL21vYmlsZS5qcyc7XHJcblxyXG5jb25zdCBERUxUQV9YID0gLTM7XHJcbmNvbnN0IERFTFRBX1kgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F1Y2VyIGV4dGVuZHMgTW9iaWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSkge1xyXG4gICBcdFx0c3VwZXIoeCwgeSwgaW1hZ2VTYXVjZXIsIERFTFRBX1gsIERFTFRBX1kpO1xyXG5cdFx0dGhpcy5fd29uID0gZmFsc2U7IC8vIHNhdm9pciBzaSBsYSBzb3Vjb3VwZSBzb3J0IGR1IGpldSBwYXIgbGEgZ2F1Y2hlXHJcblx0XHR0aGlzLl9jcnVzaGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLl9pc0NydXNoaW5nID0gZmFsc2U7XHJcbiAgXHR9XHJcblxyXG4gIFx0Z2V0IHdvbigpIHtyZXR1cm4gdGhpcy5fd29uO31cclxuXHRzZXQgd29uKHYpIHt0aGlzLl93b24gPSB2O31cclxuXHRnZXQgY3J1c2hlZCgpIHtyZXR1cm4gdGhpcy5fY3J1c2hlZDt9XHJcblx0c2V0IGNydXNoZWQodikge3RoaXMuX2NydXNoZWQgPSB2O31cclxuXHRnZXQgaXNDcnVzaGluZygpIHtyZXR1cm4gdGhpcy5faXNDcnVzaGluZzt9XHJcblx0c2V0IGlzQ3J1c2hpbmcodikge3RoaXMuX2lzQ3J1c2hpbmcgPSB0cnVlO31cclxuIFxyXG4gIFx0bW92ZShjYW52YXMpIHtcclxuICBcdFx0c3VwZXIubW92ZShjYW52YXMpO1xyXG5cdFx0aWYgKHRoaXMueCA8PSAwKSB0aGlzLndvbiA9IHRydWU7XHJcblx0XHRpZiAodGhpcy55ID49IGNhbnZhcy5oZWlnaHQpIHRoaXMuY3J1c2hlZCA9IHRydWU7XHJcbiAgXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/saucer.js\n");

/***/ }),

/***/ "./src/scripts/shoot.js":
/*!******************************!*\
  !*** ./src/scripts/shoot.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Shoot; });\n/* harmony import */ var _images_tir_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/tir.png */ \"./src/images/tir.png\");\n/* harmony import */ var _images_tir_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_tir_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile.js */ \"./src/scripts/mobile.js\");\n\r\n\r\n\r\nconst DELTA_X = 8;\r\nconst DELTA_Y = 0;\r\n\r\nclass Shoot extends _mobile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n\r\n    constructor(x, y) {\r\n        super(x, y, _images_tir_png__WEBPACK_IMPORTED_MODULE_0___default.a, DELTA_X, DELTA_Y);\r\n    }\r\n\r\n    collisionWith(mobile) {\r\n        let mobileX_max = mobile.width + mobile.x;\r\n        let mobileY_max = mobile.height + mobile.y;\r\n        for (let i = this.x; i < this.width + this.x; i++) {\r\n            for (let j = this.y; j < this.height + this.y; j++) {\r\n                if (mobile.x <= i && i <= mobileX_max && mobile.y <= j && j <= mobileY_max) {\r\n                    return true; \r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    searchCollisionAmong(saucers) {\r\n        saucers.filter(saucer => (!saucer.hit && this.collisionWith(saucer))).forEach(saucer => { // une balle touche une soucoupe à la fois et est supprimée\r\n            saucer.hit = true;\r\n            this.hit = true;\r\n        });\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zaG9vdC5qcz9iYzQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDVjs7QUFFakM7QUFDQTs7QUFFZSxvQkFBb0Isa0RBQU07O0FBRXpDO0FBQ0Esb0JBQW9CLHNEQUFVO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQsZ0NBQWdDLDBCQUEwQjtBQUMxRDtBQUNBLGdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlHQUFpRztBQUNqRztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaG9vdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWFnZVNob290IGZyb20gJy4uL2ltYWdlcy90aXIucG5nJztcclxuaW1wb3J0IE1vYmlsZSBmcm9tICcuL21vYmlsZS5qcyc7XHJcblxyXG5jb25zdCBERUxUQV9YID0gODtcclxuY29uc3QgREVMVEFfWSA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9vdCBleHRlbmRzIE1vYmlsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIGltYWdlU2hvb3QsIERFTFRBX1gsIERFTFRBX1kpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbldpdGgobW9iaWxlKSB7XHJcbiAgICAgICAgbGV0IG1vYmlsZVhfbWF4ID0gbW9iaWxlLndpZHRoICsgbW9iaWxlLng7XHJcbiAgICAgICAgbGV0IG1vYmlsZVlfbWF4ID0gbW9iaWxlLmhlaWdodCArIG1vYmlsZS55O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLng7IGkgPCB0aGlzLndpZHRoICsgdGhpcy54OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IHRoaXMueTsgaiA8IHRoaXMuaGVpZ2h0ICsgdGhpcy55OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb2JpbGUueCA8PSBpICYmIGkgPD0gbW9iaWxlWF9tYXggJiYgbW9iaWxlLnkgPD0gaiAmJiBqIDw9IG1vYmlsZVlfbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hDb2xsaXNpb25BbW9uZyhzYXVjZXJzKSB7XHJcbiAgICAgICAgc2F1Y2Vycy5maWx0ZXIoc2F1Y2VyID0+ICghc2F1Y2VyLmhpdCAmJiB0aGlzLmNvbGxpc2lvbldpdGgoc2F1Y2VyKSkpLmZvckVhY2goc2F1Y2VyID0+IHsgLy8gdW5lIGJhbGxlIHRvdWNoZSB1bmUgc291Y291cGUgw6AgbGEgZm9pcyBldCBlc3Qgc3VwcHJpbcOpZVxyXG4gICAgICAgICAgICBzYXVjZXIuaGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/shoot.js\n");

/***/ }),

/***/ "./src/scripts/starShip.js":
/*!*********************************!*\
  !*** ./src/scripts/starShip.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StarShip; });\n/* harmony import */ var _images_vaisseau_ballon_petit_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/vaisseau-ballon-petit.png */ \"./src/images/vaisseau-ballon-petit.png\");\n/* harmony import */ var _images_vaisseau_ballon_petit_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_vaisseau_ballon_petit_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moveState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveState.js */ \"./src/scripts/moveState.js\");\n/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile.js */ \"./src/scripts/mobile.js\");\n\r\n\r\n\r\n\r\nconst DELTA_X = 0;\r\nconst DELTA_Y = 8;\r\n\r\n\r\nclass StarShip extends _mobile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\r\n\r\n  constructor(x, y) {\r\n    super(x, y, _images_vaisseau_ballon_petit_png__WEBPACK_IMPORTED_MODULE_0___default.a, DELTA_X, DELTA_Y);\r\n    this._moving = _moveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].STILL // immobile au depart\r\n  }\r\n\r\n  get moving() {return this._moving;}\r\n  set moving(v) {this._moving = v;}\r\n  get up() {return this._moving === _moveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].UP;}\r\n  get down() {return this._moving === _moveState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DOWN;}\r\n\r\n  move(canvas) {\r\n    let maxBallY = canvas.height - (this.height / 2);\r\n    \r\n    if (this.up) this.deltaY = -DELTA_Y;\r\n    else if (this.down) this.deltaY = DELTA_Y;\r\n    else this.deltaY = 0; // immobile\r\n\r\n    let nextY = this.y + this.deltaY;\r\n\r\n    if (nextY >= -(this.height / 2) && nextY <= maxBallY) {\r\n      super.move(canvas);\r\n    }\r\n  }\r\n\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdGFyU2hpcC5qcz8zZDYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRTtBQUN6QjtBQUNOOztBQUVqQztBQUNBOzs7QUFHZSx1QkFBdUIsa0RBQU07O0FBRTVDO0FBQ0EsZ0JBQWdCLHdFQUFhO0FBQzdCLG1CQUFtQixxREFBUztBQUM1Qjs7QUFFQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLFlBQVksd0JBQXdCLHFEQUFTO0FBQzdDLGNBQWMsd0JBQXdCLHFEQUFTOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvc3RhclNoaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2VTdGFyU2hpcCBmcm9tICcuLi9pbWFnZXMvdmFpc3NlYXUtYmFsbG9uLXBldGl0LnBuZyc7XHJcbmltcG9ydCBNb3ZlU3RhdGUgZnJvbSAnLi9tb3ZlU3RhdGUuanMnO1xyXG5pbXBvcnQgTW9iaWxlIGZyb20gJy4vbW9iaWxlLmpzJztcclxuXHJcbmNvbnN0IERFTFRBX1ggPSAwO1xyXG5jb25zdCBERUxUQV9ZID0gODtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyU2hpcCBleHRlbmRzIE1vYmlsZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgIHN1cGVyKHgsIHksIGltYWdlU3RhclNoaXAsIERFTFRBX1gsIERFTFRBX1kpO1xyXG4gICAgdGhpcy5fbW92aW5nID0gTW92ZVN0YXRlLlNUSUxMIC8vIGltbW9iaWxlIGF1IGRlcGFydFxyXG4gIH1cclxuXHJcbiAgZ2V0IG1vdmluZygpIHtyZXR1cm4gdGhpcy5fbW92aW5nO31cclxuICBzZXQgbW92aW5nKHYpIHt0aGlzLl9tb3ZpbmcgPSB2O31cclxuICBnZXQgdXAoKSB7cmV0dXJuIHRoaXMuX21vdmluZyA9PT0gTW92ZVN0YXRlLlVQO31cclxuICBnZXQgZG93bigpIHtyZXR1cm4gdGhpcy5fbW92aW5nID09PSBNb3ZlU3RhdGUuRE9XTjt9XHJcblxyXG4gIG1vdmUoY2FudmFzKSB7XHJcbiAgICBsZXQgbWF4QmFsbFkgPSBjYW52YXMuaGVpZ2h0IC0gKHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnVwKSB0aGlzLmRlbHRhWSA9IC1ERUxUQV9ZO1xyXG4gICAgZWxzZSBpZiAodGhpcy5kb3duKSB0aGlzLmRlbHRhWSA9IERFTFRBX1k7XHJcbiAgICBlbHNlIHRoaXMuZGVsdGFZID0gMDsgLy8gaW1tb2JpbGVcclxuXHJcbiAgICBsZXQgbmV4dFkgPSB0aGlzLnkgKyB0aGlzLmRlbHRhWTtcclxuXHJcbiAgICBpZiAobmV4dFkgPj0gLSh0aGlzLmhlaWdodCAvIDIpICYmIG5leHRZIDw9IG1heEJhbGxZKSB7XHJcbiAgICAgIHN1cGVyLm1vdmUoY2FudmFzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/starShip.js\n");

/***/ })

/******/ });