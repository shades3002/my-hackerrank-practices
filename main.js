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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  console.log(\"Funciono ------- ----- ------ ----> \"); // Call Ajax for README.md\n\n  $.ajax({\n    dataType: \"text\",\n    url: 'README.md'\n  }).done(function (response) {\n    loadFilejs(response);\n  }).fail(function () {\n    console.log(\"error\");\n  });\n  /**\n   * method loadFilejs\n   * @param {*} list \n   */\n\n  function loadFilejs(list) {\n    // Init values\n    var re = /\"([\\w-]*)\"/g;\n    var listFileArray = list.split(\"|\");\n    var valid = []; // We prepare the data\n\n    for (var index = 0; index < listFileArray.length; index++) {\n      if (listFileArray[index].match(re)) {\n        valid.push(listFileArray[index].replace(/[\" \"]/g, \"\"));\n      }\n    } // We assign the data to the html tags\n\n\n    for (var _index = 0; _index < valid.length; _index++) {\n      $('#result').append('<pre><code class=\"language-javascript\" id=\"' + valid[_index] + '\"></code></pre>');\n      $(\"#\" + valid[_index]).load(\"./practices/\" + valid[_index] + \".js\");\n    } // Load prism-core\n\n\n    var prism = document.createElement(\"script\");\n    prism.type = \"text/javascript\";\n    prism.src = \"https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-core.min.js\"; // Load prism-autoloader\n\n    var autoloader = document.createElement(\"script\");\n    autoloader.type = \"text/javascript\";\n    autoloader.src = \"https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/plugins/autoloader/prism-autoloader.min.js\"; // Add DOM\n\n    $(\"body\").append(prism);\n    $(\"body\").append(autoloader);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js?");

/***/ })

/******/ });