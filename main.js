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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/audio.js":
/*!**************************!*\
  !*** ./scripts/audio.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"audio.js running\");\n// import * as Tone from 'tone';\n//\n// boxes\n//\n\nfunction createBoxes({ name, pattern }) {\n  var boxes = document.createElement(\"div\");\n  boxes.classList.add(\"boxes\");\n  var boxName = document.createElement(\"span\");\n  boxName.classList.add(\"box-label\");\n  boxName.innerText = name;\n\n  // style name\n  var nameWidth = 6.0;\n  boxName.style.width = nameWidth + \"em\";\n\n  boxes.appendChild(boxName);\n\n  for (let i = 0; i < pattern.length; i++) {\n    let box = document.createElement(\"span\");\n    box.classList.add(\"box\");\n    let status = pattern[i] == 1 ? \"filled-box\" : \"empty-box\";\n    box.classList.add(status);\n\n    // style box width\n    let percent = 100.0/pattern.length + \"%\";\n    let padding = nameWidth / pattern.length + 0.5;\n    box.style.width = \"calc(\" + percent + \" - \" + padding + \"em)\"\n\n    boxes.appendChild(box);\n  }\n\n  // .box-row-four {\n  //   width: calc(25% - #{$box-label-width}/4 - #{$box-margin-left});\n  // }\n  \n  \n  return boxes;  \n}\n\n// build loop example from a data object\nfunction createLoopExample(tagId, loopExampleData) {\n  var example = document.getElementById(tagId);\n\n  // create elements\n  var loopButton = document.createElement(\"span\");\n  loopButton.classList.add(\"btn\");\n  loopButton.innerText = \"Play loop\";\n  \n  var title = document.createElement(\"span\");\n  title.classList.add(\"title\");\n  title.innerText = loopExampleData.title;\n  \n  // append elements\n  example.appendChild(loopButton);\n  example.appendChild(title);\n  \n  for (let i = 0; i < loopExampleData.parts.length; i++) {\n    let part = createBoxes(loopExampleData.parts[i]);\n    example.appendChild(part);\n  }\n  \n  // connect audio for example 1\n  // loopButton.addEventListener('click', async() => {\n  //   console.log('loop start for ' + tagId);\n  // });\n}\n\nmodule.exports = {\n  createBoxes: createBoxes,\n  createLoopExample: createLoopExample\n}\n\n//# sourceURL=webpack:///./scripts/audio.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.js */ \"./scripts/audio.js\");\n/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_audio_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//\n// example 1\n//\nvar example1Data = {\n  title: \"Example 1: a basic rock beat\",\n  parts: [\n    {\n      name: \"High hat\",\n      pattern: [1, 1, 1, 1, 1, 1, 1, 1]\n    },\n    {\n      name: \"Snare\",\n      pattern: [0, 0, 1, 0]\n    },\n    {\n      name: \"Bass drum\",\n      pattern: [1, 0, 0, 0]\n    }\n  ]\n}\n\n_audio_js__WEBPACK_IMPORTED_MODULE_0___default.a.createLoopExample(\"example1\", example1Data);\nconsole.log(\"end\");\n\n\n//# sourceURL=webpack:///./scripts/script.js?");

/***/ })

/******/ });