/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
}

/* Global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 2rem;
  margin: 0 auto;
  max-width: 1200px;
}

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  width: clamp(18rem, 10vh, 20rem);
  padding: 1.3rem;
  min-height: 250px;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 15px;
  z-index: 2;
}

.modal input {
  display: block;
  width: 100%;
}

.modal .flex {
  display: flex;
  margin-bottom: 1rem;
}

.modal .flex p {
  font-weight: bolder;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1;
}

.hidden {
  display: none;
}

header {
  font-weight: bolder;
  margin-block: 2rem;
  display: flex;
}

header .container {
  margin-left: auto;
}

header .container p {
  margin-left: 1rem;
}

.tasks-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.task {
  border-radius: 0.5rem;
  padding: 1.8rem;
  border: 1px solid gray;
}
.task:hover,
.task:active {
  background-color: #eef;
}

.task p:first-child {
  margin-bottom: 2rem;
}

.task input {
  display: block;
}

.task-due-date {
  color: gray;
  font-size: 0.8rem;
}

.task-project {
  padding-top: 1rem;
}

.btn-add-task {
  position: fixed;
  border-radius: 0.5rem;
  color: white;
  font-size: 4rem;
  line-height: 2.5rem;
  padding: 0.2rem;
  background-color: black;
  border-style: none;
  top: 90%;
  right: 5%;
}
.btn-add-task:hover,
.btn-add-task:active {
  background-color: cadetblue;
}

.btn-close {
  margin-left: auto;
  border-radius: 1rem;
  font-size: 1.3rem;
  border-style: none;
}
.btn-close:hover,
.btn-close:active {
  background-color: peachpuff;
}

input#description {
  line-height: 2rem;
}

input[type="submit"] {
  margin-top: 1rem;
  padding-block: 0.5rem;
  background-color: black;
  color: white;
  border-style: none;
  border-radius: 0.5rem;
}

.custom-select {
  min-width: 350px;
  position: relative;
}

select {
  appearance: none;
  -webkit-appearance: none;
  padding: 0.675em 2em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
}
#select-projects {
  padding-inline: 1rem;
}

.delete {
  color: darkred;
}

.complete {
  color: green;
  margin-left: auto;
}

button {
  padding: 0.3rem;
  border: 1px solid ghostwhite;
  border-radius: 2rem;
}

button:hover,
button:active {
  background-color: whitesmoke;
}

.modal.info-task label {
  font-weight: bold;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,wDAAwD;AAC1D;;AAEA,WAAW;AACX;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,gCAAgC;EAChC,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,sBAAsB;AACxB;AACA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;AACA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,gCAAgC;EAChC,sBAAsB;EACtB,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;EACX,eAAe;AACjB;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;;EAEE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,400&display=swap\");\n\n:root {\n  font-family: \"Nunito Sans\", Arial, Helvetica, sans-serif;\n}\n\n/* Global */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 2rem;\n  margin: 0 auto;\n  max-width: 1200px;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: clamp(18rem, 10vh, 20rem);\n  padding: 1.3rem;\n  min-height: 250px;\n  position: fixed;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  z-index: 2;\n}\n\n.modal input {\n  display: block;\n  width: 100%;\n}\n\n.modal .flex {\n  display: flex;\n  margin-bottom: 1rem;\n}\n\n.modal .flex p {\n  font-weight: bolder;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(2px);\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\nheader {\n  font-weight: bolder;\n  margin-block: 2rem;\n  display: flex;\n}\n\nheader .container {\n  margin-left: auto;\n}\n\nheader .container p {\n  margin-left: 1rem;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n.task {\n  border-radius: 0.5rem;\n  padding: 1.8rem;\n  border: 1px solid gray;\n}\n.task:hover,\n.task:active {\n  background-color: #eef;\n}\n\n.task p:first-child {\n  margin-bottom: 2rem;\n}\n\n.task input {\n  display: block;\n}\n\n.task-due-date {\n  color: gray;\n  font-size: 0.8rem;\n}\n\n.task-project {\n  padding-top: 1rem;\n}\n\n.btn-add-task {\n  position: fixed;\n  border-radius: 0.5rem;\n  color: white;\n  font-size: 4rem;\n  line-height: 2.5rem;\n  padding: 0.2rem;\n  background-color: black;\n  border-style: none;\n  top: 90%;\n  right: 5%;\n}\n.btn-add-task:hover,\n.btn-add-task:active {\n  background-color: cadetblue;\n}\n\n.btn-close {\n  margin-left: auto;\n  border-radius: 1rem;\n  font-size: 1.3rem;\n  border-style: none;\n}\n.btn-close:hover,\n.btn-close:active {\n  background-color: peachpuff;\n}\n\ninput#description {\n  line-height: 2rem;\n}\n\ninput[type=\"submit\"] {\n  margin-top: 1rem;\n  padding-block: 0.5rem;\n  background-color: black;\n  color: white;\n  border-style: none;\n  border-radius: 0.5rem;\n}\n\n.custom-select {\n  min-width: 350px;\n  position: relative;\n}\n\nselect {\n  appearance: none;\n  -webkit-appearance: none;\n  padding: 0.675em 2em 0.675em 1em;\n  background-color: #fff;\n  border: 1px solid #caced1;\n  border-radius: 0.25rem;\n  color: #000;\n  cursor: pointer;\n}\n#select-projects {\n  padding-inline: 1rem;\n}\n\n.delete {\n  color: darkred;\n}\n\n.complete {\n  color: green;\n  margin-left: auto;\n}\n\nbutton {\n  padding: 0.3rem;\n  border: 1px solid ghostwhite;\n  border-radius: 2rem;\n}\n\nbutton:hover,\nbutton:active {\n  background-color: whitesmoke;\n}\n\n.modal.info-task label {\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/TaskComponent.js":
/*!*****************************************!*\
  !*** ./src/components/TaskComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTaskComponent)
/* harmony export */ });
function getTaskComponent(task) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.innerHTML = `
    <p class="task-title">${task.title}</p>
    <p class="task-due-date">${task.dueDate}</p>
    <div class="container">
      <button class="complete">
        <span class="iconify" data-icon="cil:check-alt"></span>
      </button>
      <button class="edit">
        <span class="iconify" data-icon="cil:pencil"></span>
      </button>
      <button class="delete">
        <span class="iconify" data-icon="cil:delete"></span>
      </button>
    </div>
  `;

  return taskElement;
}


/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _modules_Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Task.js */ "./src/modules/Task.js");


class Project {
  #tasks;

  constructor(name) {
    this.name = name;
    this.#tasks = [];
  }

  addTask(title, description, dueDate, priority) {
    const task = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority);
    task.project = this.name;
    this.#tasks.push(task);
  }

  removeTask(index) {
    return this.#tasks.splice(index, 1);
  }

  getAllTasks() {
    return [...this.#tasks];
  }

  setTaskCompleted(index) {
    this.#tasks[index].completed = true;
  }
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.project = undefined;
  }
}


/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");


class TodoList {
  #projects;

  constructor() {
    this.#projects = [];
  }

  addProject(name) {
    const project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](name);
    this.#projects.push(project);
  }

  removeProject(name) {
    for (const index in this.#projects) {
      if (this.#projects[index].name === name) {
        this.#projects.splice(index, 1);

        return true;
      }
    }

    return false;
  }

  getProject(name) {
    for (const index in this.#projects) {
      if (name === this.#projects[index].name) {
        return this.#projects[index];
      }
    }

    throw new Error("Project not found.");
  }

  getAllProjects() {
    return [...this.#projects];
  }

  getAllTasks() {
    let tasks = [];
    this.#projects.forEach((element) => {
      const projectTasks = element.getAllTasks();
      tasks = [...tasks, ...projectTasks];
    });

    return tasks;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_TodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/TodoList.js */ "./src/modules/TodoList.js");
/* harmony import */ var _components_TaskComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TaskComponent.js */ "./src/components/TaskComponent.js");





const todoList = new _modules_TodoList_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
let selectedProject = "Default";

todoList.addProject("Default");

const projectSelectElement = document.querySelector("#select-projects");

function updateProjects() {
  projectSelectElement.innerHTML = "";

  const optionElement = document.createElement("option");
  optionElement.value = "All";
  optionElement.textContent = "All";
  projectSelectElement.appendChild(optionElement);

  todoList.getAllProjects().forEach((element) => {
    const optionElement = document.createElement("option");
    optionElement.value = element.name;
    optionElement.textContent = element.name;
    projectSelectElement.appendChild(optionElement);
  });
}

updateProjects();

function renderTasks() {
  let project = undefined;
  let tasks = undefined;

  if (selectedProject === "All") {
    tasks = todoList.getAllTasks();
  } else {
    project = todoList.getProject(selectedProject);
    tasks = project.getAllTasks();
  }
  const containerCompleted = document.querySelector(
    "#complete.tasks-container"
  );
  const containerNotCompleted = document.querySelector(
    "#not-complete.tasks-container"
  );
  containerCompleted.textContent = "";
  containerNotCompleted.textContent = "";

  tasks.forEach((task) => {
    const taskElement = (0,_components_TaskComponent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(task);
    if (selectedProject === "All") {
      const projectElement = document.createElement("p");
      projectElement.textContent = task.project;
      taskElement.appendChild(projectElement);
      projectElement.classList.add("task-project");
    }

    // Info event
    taskElement.addEventListener("click", (event) => {
      if (event.target === taskElement) {
        const infoModal = document.querySelector(".modal.info-task");
        const overlay = document.querySelector(".overlay");
        infoModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        infoModal.querySelector(".info-task-title").textContent = task.title;
        infoModal.querySelector(".info-task-description").textContent =
          task.description;
        infoModal.querySelector(".info-task-duedate").textContent =
          task.dueDate;
        infoModal.querySelector(".info-task-priority").textContent =
          task.priority;
        infoModal.querySelector(".info-task-project").textContent =
          task.project;
      }
    });

    const completeButton = taskElement.querySelector(".complete");
    const editButton = taskElement.querySelector(".edit");
    const deleteButton = taskElement.querySelector(".delete");

    if (task.completed) {
      containerCompleted.appendChild(taskElement);
    } else {
      containerNotCompleted.appendChild(taskElement);
    }

    completeButton.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    editButton.addEventListener("click", () => {
      const editTaskModal = document.querySelector(".modal.edit-task");

      const overlay = document.querySelector(".overlay");
      overlay.classList.toggle("hidden");

      editTaskModal.classList.toggle("hidden");
      editTaskModal.querySelector("#title").value = task.title;
      editTaskModal.querySelector("#description").value = task.description;
      editTaskModal.querySelector("#due-date").value = task.dueDate;
      editTaskModal.querySelector("#priority").value = task.priority;

      const saveButton = editTaskModal.querySelector("input[type='submit']");
      saveButton.addEventListener("click", () => {
        task.title = editTaskModal.querySelector("#title").value;
        task.description = editTaskModal.querySelector("#description").value;
        task.dueDate = editTaskModal.querySelector("#due-date").value;
        task.priority = editTaskModal.querySelector("#priority").value;
        editTaskModal.classList.add("hidden");
        overlay.classList.add("hidden");
        renderTasks();
      });
    });

    deleteButton.addEventListener("click", () => {
      let taskIndex = tasks.indexOf(task);

      if (selectedProject === "All") {
        project = todoList.getProject(task.project);
        const projectTasks = project.getAllTasks();
        taskIndex = projectTasks.indexOf(task);
      }

      project.removeTask(taskIndex);
      renderTasks();
    });
  });

  if (containerCompleted.hasChildNodes()) {
    const header = document.createElement("h1");
    header.textContent = "Completed";
    containerCompleted.prepend(header);
  }
  if (containerNotCompleted.hasChildNodes()) {
    const header = document.createElement("h1");
    header.textContent = "Not Completed";
    containerNotCompleted.prepend(header);
  }
}

function addEventListeners() {
  const addProjectModalOpen = document.querySelector("button.add-project");
  addProjectModalOpen.addEventListener("click", () => {
    const projectModal = document.querySelector(".modal.add-project");
    const overlay = document.querySelector(".overlay");

    projectModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  const addProjectModalClose = document.querySelector(
    ".modal.add-project .btn-close"
  );
  addProjectModalClose.addEventListener("click", () => {
    const projectModal = document.querySelector(".modal.add-project");
    const overlay = document.querySelector(".overlay");

    projectModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  const addProjectModalSubmit = document.querySelector(
    ".modal.add-project input[type='submit']"
  );
  addProjectModalSubmit.addEventListener("click", () => {
    const projectModal = document.querySelector(".modal.add-project");
    const overlay = document.querySelector(".overlay");
    const projectTitle = projectModal.querySelector("#project-title").value;
    selectedProject = projectTitle;

    const projectSelectOption = document.createElement("option");
    projectSelectOption.value = projectTitle;
    projectSelectOption.textContent = projectTitle;
    projectSelectElement.append(projectSelectOption);

    todoList.addProject(projectTitle);
    updateProjects();

    projectSelectElement.selectedIndex =
      projectSelectElement.childNodes.length - 1;

    selectedProject = projectSelectElement.value;

    // Activate add task button 
    const addTaskButton = document.querySelector("button.btn-add-task");
    addTaskButton.classList.remove("hidden");

    renderTasks();

    projectModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  const addProjectModalDelete = document.querySelector("button.delete-project");
  addProjectModalDelete.addEventListener("click", () => {
    todoList.removeProject(selectedProject);
    updateProjects();

    projectSelectElement.selectedIndex =
      projectSelectElement.childNodes.length - 1;

    selectedProject = projectSelectElement.value;
    renderTasks();
  });

  document
    .querySelector("button.delete-project")
    .addEventListener("click", () => {
      todoList.removeProject(selectedProject);
    });

  // Add task modal button open
  const taskButtonOpen = document.querySelector(".btn-open");
  taskButtonOpen.addEventListener("click", () => {
    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  const taskButtonClose = document.querySelector(".modal.add-task .btn-close");
  taskButtonClose.addEventListener("click", () => {
    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  const editTaskButtonClose = document.querySelector(
    ".modal.edit-task .btn-close"
  );
  editTaskButtonClose.addEventListener("click", () => {
    const taskModal = document.querySelector(".modal.edit-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.add("hidden");
    overlay.classList.toggle("hidden");
  });

  const taskButtonAdd = document.querySelector(
    ".add-task input[type='submit']"
  );
  taskButtonAdd.addEventListener("click", () => {
    let project = undefined;

    if (selectedProject === "All") {
      project = todoList.getAllProjects()[0];
    } else {
      project = todoList.getProject(selectedProject);
    }

    const title = document.querySelector(".modal.add-task #title").value;
    const description = document.querySelector(
      ".modal.add-task #description"
    ).value;
    const dueDate = document.querySelector(".modal.add-task #due-date").value;
    const priority = document.querySelector(".modal.add-task #priority").value;

    project.addTask(title, description, dueDate, priority);
    renderTasks();

    const taskModal = document.querySelector(".modal.add-task");
    const overlay = document.querySelector(".overlay");

    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  const taskInfoClose = document.querySelector(".modal.info-task .btn-close");
  taskInfoClose.addEventListener("click", () => {
    const infoModal = document.querySelector(".modal.info-task");
    const overlay = document.querySelector(".overlay");

    infoModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  const projectSelectElement = document.querySelector("#select-projects");
  projectSelectElement.addEventListener("change", (event) => {
    selectedProject = event.target.value;

    const addTaskButton = document.querySelector("button.btn-add-task");
    addTaskButton.classList.remove("hidden");
    if (selectedProject === "All") {
      addTaskButton.classList.add("hidden");
    }

    renderTasks();
  });
}

addEventListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0hBQStILHdCQUF3QjtBQUN2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isd0VBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOm9wc3osd2dodEA2Li4xMiwyMDA7Ni4uMTIsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBHbG9iYWwgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNHJlbTtcbiAgd2lkdGg6IGNsYW1wKDE4cmVtLCAxMHZoLCAyMHJlbSk7XG4gIHBhZGRpbmc6IDEuM3JlbTtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDQwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4ubW9kYWwgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbCAuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5tb2RhbCAuZmxleCBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgei1pbmRleDogMTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1ibG9jazogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaGVhZGVyIC5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuaGVhZGVyIC5jb250YWluZXIgcCB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4udGFza3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udGFzayB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMS44cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuLnRhc2s6aG92ZXIsXG4udGFzazphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmO1xufVxuXG4udGFzayBwOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnRhc2sgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhc2stZHVlLWRhdGUge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi50YXNrLXByb2plY3Qge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLmJ0bi1hZGQtdGFzayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB0b3A6IDkwJTtcbiAgcmlnaHQ6IDUlO1xufVxuLmJ0bi1hZGQtdGFzazpob3Zlcixcbi5idG4tYWRkLXRhc2s6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xufVxuXG4uYnRuLWNsb3NlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG4uYnRuLWNsb3NlOmhvdmVyLFxuLmJ0bi1jbG9zZTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbmlucHV0I2Rlc2NyaXB0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJsb2NrOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuc2VsZWN0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBwYWRkaW5nOiAwLjY3NWVtIDJlbSAwLjY3NWVtIDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2VkMTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzZWxlY3QtcHJvamVjdHMge1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcbn1cblxuLmRlbGV0ZSB7XG4gIGNvbG9yOiBkYXJrcmVkO1xufVxuXG4uY29tcGxldGUge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAwLjNyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdob3N0d2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubW9kYWwuaW5mby10YXNrIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx3REFBd0Q7QUFDMUQ7O0FBRUEsV0FBVztBQUNYO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6b3Bzeix3Z2h0QDYuLjEyLDIwMDs2Li4xMiw0MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gU2Fuc1xcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIEdsb2JhbCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogY2xhbXAoMThyZW0sIDEwdmgsIDIwcmVtKTtcXG4gIHBhZGRpbmc6IDEuM3JlbTtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA0MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubW9kYWwgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGFsIC5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwgLmZsZXggcCB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIG1hcmdpbi1ibG9jazogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlciAuY29udGFpbmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIgLmNvbnRhaW5lciBwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2sge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMS44cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuLnRhc2s6aG92ZXIsXFxuLnRhc2s6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWY7XFxufVxcblxcbi50YXNrIHA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnRhc2sgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50YXNrLXByb2plY3Qge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5idG4tYWRkLXRhc2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgdG9wOiA5MCU7XFxuICByaWdodDogNSU7XFxufVxcbi5idG4tYWRkLXRhc2s6aG92ZXIsXFxuLmJ0bi1hZGQtdGFzazphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbn1cXG5cXG4uYnRuLWNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG4uYnRuLWNsb3NlOmhvdmVyLFxcbi5idG4tY2xvc2U6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcXG59XFxuXFxuaW5wdXQjZGVzY3JpcHRpb24ge1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJsb2NrOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmN1c3RvbS1zZWxlY3Qge1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjY3NWVtIDJlbSAwLjY3NWVtIDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjZWQxO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jc2VsZWN0LXByb2plY3RzIHtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbn1cXG5cXG4uZGVsZXRlIHtcXG4gIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBnaG9zdHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLm1vZGFsLmluZm8tdGFzayBsYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRhc2tDb21wb25lbnQodGFzaykge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICB0YXNrRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPHAgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvcD5cbiAgICA8cCBjbGFzcz1cInRhc2stZHVlLWRhdGVcIj4ke3Rhc2suZHVlRGF0ZX08L3A+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbXBsZXRlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaWNvbj1cImNpbDpjaGVjay1hbHRcIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaWNvbj1cImNpbDpwZW5jaWxcIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uaWZ5XCIgZGF0YS1pY29uPVwiY2lsOmRlbGV0ZVwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiB0YXNrRWxlbWVudDtcbn1cbiIsImltcG9ydCBUYXNrIGZyb20gXCIuLi9tb2R1bGVzL1Rhc2suanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICN0YXNrcztcblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLiN0YXNrcyA9IFtdO1xuICB9XG5cbiAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIHRhc2sucHJvamVjdCA9IHRoaXMubmFtZTtcbiAgICB0aGlzLiN0YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgIHJldHVybiB0aGlzLiN0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZ2V0QWxsVGFza3MoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLiN0YXNrc107XG4gIH1cblxuICBzZXRUYXNrQ29tcGxldGVkKGluZGV4KSB7XG4gICAgdGhpcy4jdGFza3NbaW5kZXhdLmNvbXBsZXRlZCA9IHRydWU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvamVjdCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gICNwcm9qZWN0cztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNwcm9qZWN0cyA9IFtdO1xuICB9XG5cbiAgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIHRoaXMuI3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICByZW1vdmVQcm9qZWN0KG5hbWUpIHtcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICBpZiAodGhpcy4jcHJvamVjdHNbaW5kZXhdLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRQcm9qZWN0KG5hbWUpIHtcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICBpZiAobmFtZSA9PT0gdGhpcy4jcHJvamVjdHNbaW5kZXhdLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9qZWN0IG5vdCBmb3VuZC5cIik7XG4gIH1cblxuICBnZXRBbGxQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuI3Byb2plY3RzXTtcbiAgfVxuXG4gIGdldEFsbFRhc2tzKCkge1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIHRoaXMuI3Byb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IGVsZW1lbnQuZ2V0QWxsVGFza3MoKTtcbiAgICAgIHRhc2tzID0gWy4uLnRhc2tzLCAuLi5wcm9qZWN0VGFza3NdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vbW9kdWxlcy9Ub2RvTGlzdC5qc1wiO1xuaW1wb3J0IGdldFRhc2tDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9UYXNrQ29tcG9uZW50LmpzXCI7XG5cbmNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5sZXQgc2VsZWN0ZWRQcm9qZWN0ID0gXCJEZWZhdWx0XCI7XG5cbnRvZG9MaXN0LmFkZFByb2plY3QoXCJEZWZhdWx0XCIpO1xuXG5jb25zdCBwcm9qZWN0U2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LXByb2plY3RzXCIpO1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0cygpIHtcbiAgcHJvamVjdFNlbGVjdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IFwiQWxsXCI7XG4gIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkFsbFwiO1xuICBwcm9qZWN0U2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcblxuICB0b2RvTGlzdC5nZXRBbGxQcm9qZWN0cygpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gZWxlbWVudC5uYW1lO1xuICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgcHJvamVjdFNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gIH0pO1xufVxuXG51cGRhdGVQcm9qZWN0cygpO1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcbiAgbGV0IHByb2plY3QgPSB1bmRlZmluZWQ7XG4gIGxldCB0YXNrcyA9IHVuZGVmaW5lZDtcblxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0ID09PSBcIkFsbFwiKSB7XG4gICAgdGFza3MgPSB0b2RvTGlzdC5nZXRBbGxUYXNrcygpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gICAgdGFza3MgPSBwcm9qZWN0LmdldEFsbFRhc2tzKCk7XG4gIH1cbiAgY29uc3QgY29udGFpbmVyQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNjb21wbGV0ZS50YXNrcy1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBjb250YWluZXJOb3RDb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI25vdC1jb21wbGV0ZS50YXNrcy1jb250YWluZXJcIlxuICApO1xuICBjb250YWluZXJDb21wbGV0ZWQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb250YWluZXJOb3RDb21wbGV0ZWQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGdldFRhc2tDb21wb25lbnQodGFzayk7XG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCA9PT0gXCJBbGxcIikge1xuICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0O1xuICAgICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stcHJvamVjdFwiKTtcbiAgICB9XG5cbiAgICAvLyBJbmZvIGV2ZW50XG4gICAgdGFza0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGFza0VsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaW5mb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC5pbmZvLXRhc2tcIik7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgICAgIGluZm9Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGluZm9Nb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tdGFzay10aXRsZVwiKS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIGluZm9Nb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tdGFzay1kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgaW5mb01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby10YXNrLWR1ZWRhdGVcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRhc2suZHVlRGF0ZTtcbiAgICAgICAgaW5mb01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby10YXNrLXByaW9yaXR5XCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0YXNrLnByaW9yaXR5O1xuICAgICAgICBpbmZvTW9kYWwucXVlcnlTZWxlY3RvcihcIi5pbmZvLXRhc2stcHJvamVjdFwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdGFzay5wcm9qZWN0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29tcGxldGVCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlXCIpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGVcIik7XG5cbiAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgIGNvbnRhaW5lckNvbXBsZXRlZC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lck5vdENvbXBsZXRlZC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICB9KTtcblxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmVkaXQtdGFza1wiKTtcblxuICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcblxuICAgICAgZWRpdFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgIGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgICBjb25zdCBzYXZlQnV0dG9uID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0nc3VibWl0J11cIik7XG4gICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2sudGl0bGUgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgZWRpdFRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IHRhc2tJbmRleCA9IHRhc2tzLmluZGV4T2YodGFzayk7XG5cbiAgICAgIGlmIChzZWxlY3RlZFByb2plY3QgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgcHJvamVjdCA9IHRvZG9MaXN0LmdldFByb2plY3QodGFzay5wcm9qZWN0KTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gcHJvamVjdC5nZXRBbGxUYXNrcygpO1xuICAgICAgICB0YXNrSW5kZXggPSBwcm9qZWN0VGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgIH1cblxuICAgICAgcHJvamVjdC5yZW1vdmVUYXNrKHRhc2tJbmRleCk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoY29udGFpbmVyQ29tcGxldGVkLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZFwiO1xuICAgIGNvbnRhaW5lckNvbXBsZXRlZC5wcmVwZW5kKGhlYWRlcik7XG4gIH1cbiAgaWYgKGNvbnRhaW5lck5vdENvbXBsZXRlZC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJOb3QgQ29tcGxldGVkXCI7XG4gICAgY29udGFpbmVyTm90Q29tcGxldGVkLnByZXBlbmQoaGVhZGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgYWRkUHJvamVjdE1vZGFsT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkLXByb2plY3RcIik7XG4gIGFkZFByb2plY3RNb2RhbE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFByb2plY3RNb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5tb2RhbC5hZGQtcHJvamVjdCAuYnRuLWNsb3NlXCJcbiAgKTtcbiAgYWRkUHJvamVjdE1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFByb2plY3RNb2RhbFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubW9kYWwuYWRkLXByb2plY3QgaW5wdXRbdHlwZT0nc3VibWl0J11cIlxuICApO1xuICBhZGRQcm9qZWN0TW9kYWxTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0VGl0bGU7XG5cbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcm9qZWN0U2VsZWN0T3B0aW9uLnZhbHVlID0gcHJvamVjdFRpdGxlO1xuICAgIHByb2plY3RTZWxlY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgcHJvamVjdFNlbGVjdEVsZW1lbnQuYXBwZW5kKHByb2plY3RTZWxlY3RPcHRpb24pO1xuXG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuICAgIHVwZGF0ZVByb2plY3RzKCk7XG5cbiAgICBwcm9qZWN0U2VsZWN0RWxlbWVudC5zZWxlY3RlZEluZGV4ID1cbiAgICAgIHByb2plY3RTZWxlY3RFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTtcblxuICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RTZWxlY3RFbGVtZW50LnZhbHVlO1xuXG4gICAgLy8gQWN0aXZhdGUgYWRkIHRhc2sgYnV0dG9uIFxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmJ0bi1hZGQtdGFza1wiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICByZW5kZXJUYXNrcygpO1xuXG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICBjb25zdCBhZGRQcm9qZWN0TW9kYWxEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmRlbGV0ZS1wcm9qZWN0XCIpO1xuICBhZGRQcm9qZWN0TW9kYWxEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2RvTGlzdC5yZW1vdmVQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdHMoKTtcblxuICAgIHByb2plY3RTZWxlY3RFbGVtZW50LnNlbGVjdGVkSW5kZXggPVxuICAgICAgcHJvamVjdFNlbGVjdEVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggLSAxO1xuXG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdFNlbGVjdEVsZW1lbnQudmFsdWU7XG4gICAgcmVuZGVyVGFza3MoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5kZWxldGUtcHJvamVjdFwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdG9kb0xpc3QucmVtb3ZlUHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgIH0pO1xuXG4gIC8vIEFkZCB0YXNrIG1vZGFsIGJ1dHRvbiBvcGVuXG4gIGNvbnN0IHRhc2tCdXR0b25PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tb3BlblwiKTtcbiAgdGFza0J1dHRvbk9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC10YXNrXCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIGNvbnN0IHRhc2tCdXR0b25DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuYWRkLXRhc2sgLmJ0bi1jbG9zZVwiKTtcbiAgdGFza0J1dHRvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC5hZGQtdGFza1wiKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICBjb25zdCBlZGl0VGFza0J1dHRvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5tb2RhbC5lZGl0LXRhc2sgLmJ0bi1jbG9zZVwiXG4gICk7XG4gIGVkaXRUYXNrQnV0dG9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmVkaXQtdGFza1wiKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICBjb25zdCB0YXNrQnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5hZGQtdGFzayBpbnB1dFt0eXBlPSdzdWJtaXQnXVwiXG4gICk7XG4gIHRhc2tCdXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgcHJvamVjdCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChzZWxlY3RlZFByb2plY3QgPT09IFwiQWxsXCIpIHtcbiAgICAgIHByb2plY3QgPSB0b2RvTGlzdC5nZXRBbGxQcm9qZWN0cygpWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC5hZGQtdGFzayAjdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIubW9kYWwuYWRkLXRhc2sgI2Rlc2NyaXB0aW9uXCJcbiAgICApLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC10YXNrICNkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuYWRkLXRhc2sgI3ByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgcHJvamVjdC5hZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIHJlbmRlclRhc2tzKCk7XG5cbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC10YXNrXCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIGNvbnN0IHRhc2tJbmZvQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmluZm8tdGFzayAuYnRuLWNsb3NlXCIpO1xuICB0YXNrSW5mb0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgaW5mb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC5pbmZvLXRhc2tcIik7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblxuICAgIGluZm9Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1wcm9qZWN0c1wiKTtcbiAgcHJvamVjdFNlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5idG4tYWRkLXRhc2tcIik7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGlmIChzZWxlY3RlZFByb2plY3QgPT09IFwiQWxsXCIpIHtcbiAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICByZW5kZXJUYXNrcygpO1xuICB9KTtcbn1cblxuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==