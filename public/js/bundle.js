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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/imports.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/imports.js":
/*!********************************!*\
  !*** ./application/imports.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classworks_objectfreeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classworks/objectfreeze */ \"./classworks/objectfreeze.js\");\n/* harmony import */ var _classworks_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classworks/singleton */ \"./classworks/singleton.js\");\n  /*\n    import defaultExport from \"module-name\"; <- node_modules\n    import * as name from \"module-name\";\n    import { export } from \"module-name\";\n    import { export as alias } from \"module-name\";\n    import { export1 , export2 } from \"module-name\";\n    import { export1 , export2 as alias2 } from \"module-name\";\n    import defaultExport, * as name from \"module-name\";\n    import \"module-name\";\n  */\n  /*\n    import defaultExport from \"module-name\";\n  */\n\n// import Singlton from './singleton';\n\n\n\n\n\n\nObject(_classworks_objectfreeze__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// singleton.addLaw(12323, \"test test\");\n// singleton.show();\n// singleton.showLaw(12323);\n// singleton.showCitizensSatisfactions();\n// singleton.showBudget ();\n// singleton.holdHolidey ();\n\nlet btnAdd = document.getElementById('addLaw');\nbtnAdd.addEventListener(\"click\",_classworks_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addLaw);\n\nlet btnShow = document.getElementById('show');\nbtnShow.addEventListener(\"click\",_classworks_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show);\n\nlet btnShowLaw = document.getElementById('showLaw');\nbtnShowLaw.addEventListener(\"click\",_classworks_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showLaw);\n\nlet btnShowCitSat = document.getElementById('showCitizensSatisfactions');\nbtnShowCitSat.addEventListener(\"click\",_classworks_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showCitizensSatisfactions);\n\nlet btnShowBud = document.getElementById('showBudget');\nbtnShowBud.addEventListener(\"click\",_classworks_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showBudget);\n\nlet btnHolidey = document.getElementById('holdHolidey');\nbtnHolidey.addEventListener(\"click\",_classworks_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].holdHolidey);\n\n\n\n//# sourceURL=webpack:///./application/imports.js?");

/***/ }),

/***/ "./classworks/objectfreeze.js":
/*!************************************!*\
  !*** ./classworks/objectfreeze.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n  Задание: написать функцию, для глубокой заморозки обьектов.\n\n  Обьект для работы:\n  let universe = {\n    infinity: Infinity,\n    good: ['cats', 'love', 'rock-n-roll'],\n    evil: {\n      bonuses: ['cookies', 'great look']\n    }\n  };\n\n  frozenUniverse.evil.humans = []; -> Не должен отработать.\n\n  Методы для работы:\n  1. Object.getOwnPropertyNames(obj);\n      -> Получаем имена свойств из объекта obj в виде массива\n\n  2. Проверка через typeof на обьект или !== null\n  if (typeof prop == 'object' && prop !== null){...}\n\n  Тестирование:\n\n  let FarGalaxy = DeepFreeze(universe);\n      FarGalaxy.good.push('javascript'); // false\n      FarGalaxy.something = 'Wow!'; // false\n      FarGalaxy.evil.humans = [];   // false\n\n*/\n\nconst work = () => {\n  \n  let universe = {\n    infinity: Infinity,\n    good: ['cats', 'love', 'rock-n-roll'],\n    evil: {\n      bonuses: ['cookies', 'great look']\n    }\n  };\n\n  const DeepFreeze = (i)=>{\n    // let frozenUniverse = Object.freeze(i);\n    Object.freeze(i);\n\n    Object.getOwnPropertyNames(i);\n  \n    let item = Object.getOwnPropertyNames(i);\n  \n    for ( let key in item ){\n      // console.log(i[item[key]]);\n      if (typeof i[item[key]] == 'object' && i[item[key]] !== null){\n        Object.freeze(i[item[key]]);\n        // console.log(i[item[key]]);\n      };\n    }\n  \n    return i\n\n  }\n  \n  let FarGalaxy = DeepFreeze(universe); //\n      // FarGalaxy.good.push('javascript'); // false\n      // FarGalaxy.something = 'Wow!'; // false\n      // FarGalaxy.evil.humans = [];   // false\n\n  // console.log( FarGalaxy );\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (work);\n\n\n//# sourceURL=webpack:///./classworks/objectfreeze.js?");

/***/ }),

/***/ "./classworks/singleton.js":
/*!*********************************!*\
  !*** ./classworks/singleton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n  Задание:\n\n    Написать синглтон, который будет создавать обьект government\n\n    Данные:\n    {\n        laws: [\n        {\n          id: 0,\n          text: '123123'\n        }\n      ],\n        budget: 1000000\n        citizensSatisfactions: 0,\n    }\n\n    У этого обьекта будут методы:\n      .добавитьЗакон({id, name, description})\n        -> добавляет закон в laws и понижает удовлетворенность граждан на -10\n\n      .читатькКонституцию -> Вывести все законы на экран\n      .читатьЗакон(ид)\n\n      .показатьУровеньДовольства()\n      .показатьБюджет()\n      .провестиПраздник -> отнимает от бюджета 50000, повышает удовлетворенность граждан на +5\n\n\n*/\nconst _data = {\n  laws: [\n    {\n      id: 0,\n      name: 'Закон Ома',\n      description: ' эмпирический физический закон, определяющий связь электродвижущей силы источника (или электрического напряжения) с силой тока, протекающего в проводнике, и сопротивлением проводника. Установлен Георгом Омом в 1826 году и назван в его честь'\n    },\n    {\n      id: 1,\n      name: 'Закон Ома2',\n      description: ' эмпирический физический закон, определяющий связь электродвижущей силы источника (или электрического напряжения) с силой тока, протекающего в проводнике, и сопротивлением проводника. Установлен Георгом Омом в 1826 году и назван в его честь'\n    }\n  ],\n  budget: 1000000,\n  citizensSatisfactions: 0,\n};\n\nconst Method = {\n  addLaw: () => {\n    let id = document.getElementById('newId');\n    let name = document.getElementById('newLaw');\n    let description = document.getElementById('newDescription');\n    let lawTemp = {\n      id: id.value,\n      name: name.value,\n      description: description.value\n    };\n    _data.laws.push(lawTemp);\n    _data.citizensSatisfactions -= 10;\n    id.value = ''; \n    name.value = '';\n    description.value = '';\n  },\n  show: () => {\n    let parent = document.getElementById('root')\n    parent.innerHTML = \"\"\n    for (let key in _data.laws){\n      // let parent = document.getElementById('root');\n      let node = document.createElement('div');\n      node.innerHTML = `\n        <p>id: ${_data.laws[key].id}</p>\n        <p>text: ${_data.laws[key].name}</p>\n        <p>description: ${_data.laws[key].description}</p>\n      `;\n      parent.appendChild(node);\n    }\n  },\n  showLaw: () => {\n    let id = document.getElementById('findId');\n    const filtredToLaws = _data.laws.filter( item => Number(item.id) === Number(id.value) );\n    let parent = document.getElementById('root');\n    parent.innerHTML = \"\";\n    let node = document.createElement('div');\n    node.innerHTML = `\n    <p>id: ${filtredToLaws[0].id}</p>\n    <p>text: ${filtredToLaws[0].name}</p>\n    <p>description: ${filtredToLaws[0].description}</p>\n    `;\n    parent.appendChild(node);\n    id.value = '';\n  },\n  \n  showCitizensSatisfactions: () => {\n    let parent = document.getElementById('root');\n    parent.innerHTML = \"\";\n    let node = document.createElement('div');\n    node.innerHTML = `\n    <p>CitizensSatisfactions: ${_data.citizensSatisfactions}</p>\n    `;\n    parent.appendChild(node);\n  },\n\n  showBudget: () => {\n    let parent = document.getElementById('root');\n    parent.innerHTML = \"\";\n    let node = document.createElement('div');\n    node.innerHTML = `\n    <p>Budget: ${_data.budget}</p>\n    `;\n    parent.appendChild(node);\n  },\n\n  holdHolidey: () => {\n    _data.citizensSatisfactions += 5;\n    _data.budget -= 50000;\n    let parent = document.getElementById('root');\n    parent.innerHTML = \"\";\n    let node = document.createElement('div');\n    node.innerHTML = `\n    <p>CitizensSatisfactions: ${_data.citizensSatisfactions}</p>\n    <p>Budget: ${_data.budget}</p>\n    `;\n    parent.appendChild(node);\n  }\n\n}\n\nObject.freeze(Method);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Method);\n\n\n//# sourceURL=webpack:///./classworks/singleton.js?");

/***/ })

/******/ });