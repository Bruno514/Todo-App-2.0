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

.modal.info-task .container p {
  padding: .5rem;
  border: 1px solid #555;
  border-radius: .2rem;
}

p.info-task-description {
  line-break: anywhere;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,wDAAwD;AAC1D;;AAEA,WAAW;AACX;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,gCAAgC;EAChC,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,sBAAsB;AACxB;AACA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;AACA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;;EAEE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,gCAAgC;EAChC,sBAAsB;EACtB,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;EACX,eAAe;AACjB;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;;EAEE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,400&display=swap\");\n\n:root {\n  font-family: \"Nunito Sans\", Arial, Helvetica, sans-serif;\n}\n\n/* Global */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 2rem;\n  margin: 0 auto;\n  max-width: 1200px;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: clamp(18rem, 10vh, 20rem);\n  padding: 1.3rem;\n  min-height: 250px;\n  position: fixed;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  z-index: 2;\n}\n\n.modal input {\n  display: block;\n  width: 100%;\n}\n\n.modal .flex {\n  display: flex;\n  margin-bottom: 1rem;\n}\n\n.modal .flex p {\n  font-weight: bolder;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(2px);\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\nheader {\n  font-weight: bolder;\n  margin-block: 2rem;\n  display: flex;\n}\n\nheader .container {\n  margin-left: auto;\n}\n\nheader .container p {\n  margin-left: 1rem;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n.task {\n  border-radius: 0.5rem;\n  padding: 1.8rem;\n  border: 1px solid gray;\n}\n.task:hover,\n.task:active {\n  background-color: #eef;\n}\n\n.task p:first-child {\n  margin-bottom: 2rem;\n}\n\n.task input {\n  display: block;\n}\n\n.task-due-date {\n  color: gray;\n  font-size: 0.8rem;\n}\n\n.task-project {\n  padding-top: 1rem;\n}\n\n.btn-add-task {\n  position: fixed;\n  border-radius: 0.5rem;\n  color: white;\n  font-size: 4rem;\n  line-height: 2.5rem;\n  padding: 0.2rem;\n  background-color: black;\n  border-style: none;\n  top: 90%;\n  right: 5%;\n}\n.btn-add-task:hover,\n.btn-add-task:active {\n  background-color: cadetblue;\n}\n\n.btn-close {\n  margin-left: auto;\n  border-radius: 1rem;\n  font-size: 1.3rem;\n  border-style: none;\n}\n.btn-close:hover,\n.btn-close:active {\n  background-color: peachpuff;\n}\n\ninput#description {\n  line-height: 2rem;\n}\n\ninput[type=\"submit\"] {\n  margin-top: 1rem;\n  padding-block: 0.5rem;\n  background-color: black;\n  color: white;\n  border-style: none;\n  border-radius: 0.5rem;\n}\n\n.custom-select {\n  min-width: 350px;\n  position: relative;\n}\n\nselect {\n  appearance: none;\n  -webkit-appearance: none;\n  padding: 0.675em 2em 0.675em 1em;\n  background-color: #fff;\n  border: 1px solid #caced1;\n  border-radius: 0.25rem;\n  color: #000;\n  cursor: pointer;\n}\n#select-projects {\n  padding-inline: 1rem;\n}\n\n.delete {\n  color: darkred;\n}\n\n.complete {\n  color: green;\n  margin-left: auto;\n}\n\nbutton {\n  padding: 0.3rem;\n  border: 1px solid ghostwhite;\n  border-radius: 2rem;\n}\n\nbutton:hover,\nbutton:active {\n  background-color: whitesmoke;\n}\n\n.modal.info-task label {\n  font-weight: bold;\n}\n\n.modal.info-task .container p {\n  padding: .5rem;\n  border: 1px solid #555;\n  border-radius: .2rem;\n}\n\np.info-task-description {\n  line-break: anywhere;\n}"],"sourceRoot":""}]);
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

  addTask(
    title,
    description,
    dueDate,
    priority,
    project = undefined,
    completed = false
  ) {
    const task = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority, project);
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

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadTasks: () => (/* binding */ loadTasks),
/* harmony export */   saveTasks: () => (/* binding */ saveTasks)
/* harmony export */ });
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ "./src/modules/TodoList.js");


function saveTasks(todoList) {
  localStorage.setItem("projects", JSON.stringify(todoList));
}

function loadTasks() {
  const todoList = new _TodoList__WEBPACK_IMPORTED_MODULE_0__["default"]();

  if (!localStorage.getItem("projects")) {
    todoList.addProject("Default");

    return todoList;
  }

  // Load projects JSON in LocalStorage
  const projectsInStorage = JSON.parse(localStorage.getItem("projects"));

  projectsInStorage.forEach((project) => {
    todoList.addProject(project.name);

    project.tasks.forEach((task) => {
      todoList
        .getProject(project.name)
        .addTask(
          task.title,
          task.description,
          task.dueDate,
          task.priority,
          task.project,
          task.completed
        );
    });
  });

  return todoList;
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
  constructor(title, description, dueDate, priority, project = undefined, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    this.project = project;
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

  toJSON() {
    const projects = this.getAllProjects();
    const data = [];

    projects.forEach((project) => {
      const name = project.name;
      const tasks = project.getAllTasks();

      data.push({ name: name, tasks: tasks });
    });

    return data;
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
/* harmony import */ var _modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Storage.js */ "./src/modules/Storage.js");







let todoList = (0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();

let selectedProject = "All";

(0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveTasks)(todoList);
renderTasks();
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
      const projectElement = document.createElement("u");
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
      (0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveTasks)(todoList);
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

      const form = editTaskModal.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        task.title = editTaskModal.querySelector("#title").value;
        task.description = editTaskModal.querySelector("#description").value;
        task.dueDate = editTaskModal.querySelector("#due-date").value;
        task.priority = editTaskModal.querySelector("#priority").value;
        editTaskModal.classList.add("hidden");
        overlay.classList.add("hidden");
        (0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveTasks)(todoList);
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
      (0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveTasks)(todoList);
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
    ".modal.add-project form"
  );
  addProjectModalSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
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

    (0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveTasks)(todoList);
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
    (0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveTasks)(todoList);
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

  const taskButtonAdd = document.querySelector(".add-task form");
  taskButtonAdd.addEventListener("submit", (e) => {
    e.preventDefault();
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
    (0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveTasks)(todoList);
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

    (0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_3__.saveTasks)(todoList);
    renderTasks();
  });
}

addEventListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0hBQStILHdCQUF3QjtBQUN2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxL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c3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL21vZHVsZXMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2FuczpvcHN6LHdnaHRANi4uMTIsMjAwOzYuLjEyLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLyogR2xvYmFsICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG4gIHdpZHRoOiBjbGFtcCgxOHJlbSwgMTB2aCwgMjByZW0pO1xuICBwYWRkaW5nOiAxLjNyZW07XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA0MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgei1pbmRleDogMjtcbn1cblxuLm1vZGFsIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwgLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubW9kYWwgLmZsZXggcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tYmxvY2s6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmhlYWRlciAuY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbmhlYWRlciAuY29udGFpbmVyIHAge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnRhc2tzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRhc2sge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBhZGRpbmc6IDEuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cbi50YXNrOmhvdmVyLFxuLnRhc2s6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjtcbn1cblxuLnRhc2sgcDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi50YXNrIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YXNrLWR1ZS1kYXRlIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4udGFzay1wcm9qZWN0IHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5idG4tYWRkLXRhc2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgdG9wOiA5MCU7XG4gIHJpZ2h0OiA1JTtcbn1cbi5idG4tYWRkLXRhc2s6aG92ZXIsXG4uYnRuLWFkZC10YXNrOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbn1cblxuLmJ0bi1jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuLmJ0bi1jbG9zZTpob3Zlcixcbi5idG4tY2xvc2U6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pbnB1dCNkZXNjcmlwdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ibG9jazogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmN1c3RvbS1zZWxlY3Qge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnNlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZzogMC42NzVlbSAyZW0gMC42NzVlbSAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNlZDE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc2VsZWN0LXByb2plY3RzIHtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG59XG5cbi5kZWxldGUge1xuICBjb2xvcjogZGFya3JlZDtcbn1cblxuLmNvbXBsZXRlIHtcbiAgY29sb3I6IGdyZWVuO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBnaG9zdHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG5idXR0b246aG92ZXIsXG5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLm1vZGFsLmluZm8tdGFzayBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubW9kYWwuaW5mby10YXNrIC5jb250YWluZXIgcCB7XG4gIHBhZGRpbmc6IC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcbn1cblxucC5pbmZvLXRhc2stZGVzY3JpcHRpb24ge1xuICBsaW5lLWJyZWFrOiBhbnl3aGVyZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx3REFBd0Q7QUFDMUQ7O0FBRUEsV0FBVztBQUNYO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2FuczpvcHN6LHdnaHRANi4uMTIsMjAwOzYuLjEyLDQwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogR2xvYmFsICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNHJlbTtcXG4gIHdpZHRoOiBjbGFtcCgxOHJlbSwgMTB2aCwgMjByZW0pO1xcbiAgcGFkZGluZzogMS4zcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDQwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5tb2RhbCBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kYWwgLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5tb2RhbCAuZmxleCBwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgbWFyZ2luLWJsb2NrOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaGVhZGVyIC5jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmhlYWRlciAuY29udGFpbmVyIHAge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGFzayB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxLjhyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbn1cXG4udGFzazpob3ZlcixcXG4udGFzazphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjtcXG59XFxuXFxuLnRhc2sgcDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udGFzayBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stZHVlLWRhdGUge1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnRhc2stcHJvamVjdCB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmJ0bi1hZGQtdGFzayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICB0b3A6IDkwJTtcXG4gIHJpZ2h0OiA1JTtcXG59XFxuLmJ0bi1hZGQtdGFzazpob3ZlcixcXG4uYnRuLWFkZC10YXNrOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxufVxcblxcbi5idG4tY2xvc2Uge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcbi5idG4tY2xvc2U6aG92ZXIsXFxuLmJ0bi1jbG9zZTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xcbn1cXG5cXG5pbnB1dCNkZXNjcmlwdGlvbiB7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uY3VzdG9tLXNlbGVjdCB7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNjc1ZW0gMmVtIDAuNjc1ZW0gMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNlZDE7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgY29sb3I6ICMwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNzZWxlY3QtcHJvamVjdHMge1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxufVxcblxcbi5kZWxldGUge1xcbiAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdob3N0d2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4ubW9kYWwuaW5mby10YXNrIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubW9kYWwuaW5mby10YXNrIC5jb250YWluZXIgcCB7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XFxuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcXG59XFxuXFxucC5pbmZvLXRhc2stZGVzY3JpcHRpb24ge1xcbiAgbGluZS1icmVhazogYW55d2hlcmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUYXNrQ29tcG9uZW50KHRhc2spIHtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgdGFza0VsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgIDxwIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L3A+XG4gICAgPHAgY2xhc3M9XCJ0YXNrLWR1ZS1kYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjb21wbGV0ZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWljb249XCJjaWw6Y2hlY2stYWx0XCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25pZnlcIiBkYXRhLWljb249XCJjaWw6cGVuY2lsXCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbmlmeVwiIGRhdGEtaWNvbj1cImNpbDpkZWxldGVcIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi4vbW9kdWxlcy9UYXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAjdGFza3M7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jdGFza3MgPSBbXTtcbiAgfVxuXG4gIGFkZFRhc2soXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0ID0gdW5kZWZpbmVkLFxuICAgIGNvbXBsZXRlZCA9IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICB0YXNrLnByb2plY3QgPSB0aGlzLm5hbWU7XG4gICAgdGhpcy4jdGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGdldEFsbFRhc2tzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jdGFza3NdO1xuICB9XG5cbiAgc2V0VGFza0NvbXBsZXRlZChpbmRleCkge1xuICAgIHRoaXMuI3Rhc2tzW2luZGV4XS5jb21wbGV0ZWQgPSB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vVG9kb0xpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrcyh0b2RvTGlzdCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5cbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChcIkRlZmF1bHRcIik7XG5cbiAgICByZXR1cm4gdG9kb0xpc3Q7XG4gIH1cblxuICAvLyBMb2FkIHByb2plY3RzIEpTT04gaW4gTG9jYWxTdG9yYWdlXG4gIGNvbnN0IHByb2plY3RzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblxuICBwcm9qZWN0c0luU3RvcmFnZS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0Lm5hbWUpO1xuXG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0b2RvTGlzdFxuICAgICAgICAuZ2V0UHJvamVjdChwcm9qZWN0Lm5hbWUpXG4gICAgICAgIC5hZGRUYXNrKFxuICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgICB0YXNrLnByb2plY3QsXG4gICAgICAgICAgdGFzay5jb21wbGV0ZWRcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9MaXN0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QgPSB1bmRlZmluZWQsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgI3Byb2plY3RzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI3Byb2plY3RzID0gW107XG4gIH1cblxuICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgdGhpcy4jcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIHJlbW92ZVByb2plY3QobmFtZSkge1xuICAgIGZvciAoY29uc3QgaW5kZXggaW4gdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGlmICh0aGlzLiNwcm9qZWN0c1tpbmRleF0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldFByb2plY3QobmFtZSkge1xuICAgIGZvciAoY29uc3QgaW5kZXggaW4gdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGlmIChuYW1lID09PSB0aGlzLiNwcm9qZWN0c1tpbmRleF0ubmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdHNbaW5kZXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIlByb2plY3Qgbm90IGZvdW5kLlwiKTtcbiAgfVxuXG4gIGdldEFsbFByb2plY3RzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jcHJvamVjdHNdO1xuICB9XG5cbiAgZ2V0QWxsVGFza3MoKSB7XG4gICAgbGV0IHRhc2tzID0gW107XG4gICAgdGhpcy4jcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gZWxlbWVudC5nZXRBbGxUYXNrcygpO1xuICAgICAgdGFza3MgPSBbLi4udGFza3MsIC4uLnByb2plY3RUYXNrc107XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldEFsbFByb2plY3RzKCk7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHByb2plY3QubmFtZTtcbiAgICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdC5nZXRBbGxUYXNrcygpO1xuXG4gICAgICBkYXRhLnB1c2goeyBuYW1lOiBuYW1lLCB0YXNrczogdGFza3MgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL21vZHVsZXMvVG9kb0xpc3QuanNcIjtcbmltcG9ydCBnZXRUYXNrQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvVGFza0NvbXBvbmVudC5qc1wiO1xuXG5pbXBvcnQgeyBzYXZlVGFza3MsIGxvYWRUYXNrcyB9IGZyb20gXCIuL21vZHVsZXMvU3RvcmFnZS5qc1wiO1xuXG5sZXQgdG9kb0xpc3QgPSBsb2FkVGFza3MoKTtcblxubGV0IHNlbGVjdGVkUHJvamVjdCA9IFwiQWxsXCI7XG5cbnNhdmVUYXNrcyh0b2RvTGlzdCk7XG5yZW5kZXJUYXNrcygpO1xuY29uc3QgcHJvamVjdFNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1wcm9qZWN0c1wiKTtcblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoKSB7XG4gIHByb2plY3RTZWxlY3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBcIkFsbFwiO1xuICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gXCJBbGxcIjtcbiAgcHJvamVjdFNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG5cbiAgdG9kb0xpc3QuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IGVsZW1lbnQubmFtZTtcbiAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgIHByb2plY3RTZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICB9KTtcbn1cblxudXBkYXRlUHJvamVjdHMoKTtcblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gIGxldCBwcm9qZWN0ID0gdW5kZWZpbmVkO1xuICBsZXQgdGFza3MgPSB1bmRlZmluZWQ7XG5cbiAgaWYgKHNlbGVjdGVkUHJvamVjdCA9PT0gXCJBbGxcIikge1xuICAgIHRhc2tzID0gdG9kb0xpc3QuZ2V0QWxsVGFza3MoKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgIHRhc2tzID0gcHJvamVjdC5nZXRBbGxUYXNrcygpO1xuICB9XG4gIGNvbnN0IGNvbnRhaW5lckNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjY29tcGxldGUudGFza3MtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgY29udGFpbmVyTm90Q29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNub3QtY29tcGxldGUudGFza3MtY29udGFpbmVyXCJcbiAgKTtcbiAgY29udGFpbmVyQ29tcGxldGVkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29udGFpbmVyTm90Q29tcGxldGVkLnRleHRDb250ZW50ID0gXCJcIjtcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBnZXRUYXNrQ29tcG9uZW50KHRhc2spO1xuICAgIGlmIChzZWxlY3RlZFByb2plY3QgPT09IFwiQWxsXCIpIHtcbiAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVcIik7XG4gICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2sucHJvamVjdDtcbiAgICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByb2plY3RcIik7XG4gICAgfVxuXG4gICAgLy8gSW5mbyBldmVudFxuICAgIHRhc2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRhc2tFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGluZm9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuaW5mby10YXNrXCIpO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgICAgICBpbmZvTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBpbmZvTW9kYWwucXVlcnlTZWxlY3RvcihcIi5pbmZvLXRhc2stdGl0bGVcIikudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICBpbmZvTW9kYWwucXVlcnlTZWxlY3RvcihcIi5pbmZvLXRhc2stZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIGluZm9Nb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tdGFzay1kdWVkYXRlXCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICB0YXNrLmR1ZURhdGU7XG4gICAgICAgIGluZm9Nb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tdGFzay1wcmlvcml0eVwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgdGFzay5wcmlvcml0eTtcbiAgICAgICAgaW5mb01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby10YXNrLXByb2plY3RcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIHRhc2sucHJvamVjdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZVwiKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlXCIpO1xuXG4gICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICBjb250YWluZXJDb21wbGV0ZWQuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXJOb3RDb21wbGV0ZWQuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgICAgIHNhdmVUYXNrcyh0b2RvTGlzdCk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuZWRpdC10YXNrXCIpO1xuXG4gICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuXG4gICAgICBlZGl0VGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgICAgZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgIGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgIGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAgIGNvbnN0IGZvcm0gPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGFzay50aXRsZSA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGVkaXRUYXNrTW9kYWwucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgdGFzay5kdWVEYXRlID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gZWRpdFRhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICBlZGl0VGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgc2F2ZVRhc2tzKHRvZG9MaXN0KTtcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgdGFza0luZGV4ID0gdGFza3MuaW5kZXhPZih0YXNrKTtcblxuICAgICAgaWYgKHNlbGVjdGVkUHJvamVjdCA9PT0gXCJBbGxcIikge1xuICAgICAgICBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdCh0YXNrLnByb2plY3QpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LmdldEFsbFRhc2tzKCk7XG4gICAgICAgIHRhc2tJbmRleCA9IHByb2plY3RUYXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgfVxuXG4gICAgICBwcm9qZWN0LnJlbW92ZVRhc2sodGFza0luZGV4KTtcbiAgICAgIHNhdmVUYXNrcyh0b2RvTGlzdCk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoY29udGFpbmVyQ29tcGxldGVkLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZFwiO1xuICAgIGNvbnRhaW5lckNvbXBsZXRlZC5wcmVwZW5kKGhlYWRlcik7XG4gIH1cbiAgaWYgKGNvbnRhaW5lck5vdENvbXBsZXRlZC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJOb3QgQ29tcGxldGVkXCI7XG4gICAgY29udGFpbmVyTm90Q29tcGxldGVkLnByZXBlbmQoaGVhZGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgYWRkUHJvamVjdE1vZGFsT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkLXByb2plY3RcIik7XG4gIGFkZFByb2plY3RNb2RhbE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFByb2plY3RNb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5tb2RhbC5hZGQtcHJvamVjdCAuYnRuLWNsb3NlXCJcbiAgKTtcbiAgYWRkUHJvamVjdE1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFByb2plY3RNb2RhbFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubW9kYWwuYWRkLXByb2plY3QgZm9ybVwiXG4gICk7XG4gIGFkZFByb2plY3RNb2RhbFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuYWRkLXByb2plY3RcIik7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RUaXRsZTtcblxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByb2plY3RTZWxlY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0VGl0bGU7XG4gICAgcHJvamVjdFNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICBwcm9qZWN0U2VsZWN0RWxlbWVudC5hcHBlbmQocHJvamVjdFNlbGVjdE9wdGlvbik7XG5cbiAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3RUaXRsZSk7XG4gICAgdXBkYXRlUHJvamVjdHMoKTtcblxuICAgIHByb2plY3RTZWxlY3RFbGVtZW50LnNlbGVjdGVkSW5kZXggPVxuICAgICAgcHJvamVjdFNlbGVjdEVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggLSAxO1xuXG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdFNlbGVjdEVsZW1lbnQudmFsdWU7XG5cbiAgICAvLyBBY3RpdmF0ZSBhZGQgdGFzayBidXR0b25cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5idG4tYWRkLXRhc2tcIik7XG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gICAgc2F2ZVRhc2tzKHRvZG9MaXN0KTtcbiAgICByZW5kZXJUYXNrcygpO1xuXG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICBjb25zdCBhZGRQcm9qZWN0TW9kYWxEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmRlbGV0ZS1wcm9qZWN0XCIpO1xuICBhZGRQcm9qZWN0TW9kYWxEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2RvTGlzdC5yZW1vdmVQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdHMoKTtcblxuICAgIHByb2plY3RTZWxlY3RFbGVtZW50LnNlbGVjdGVkSW5kZXggPVxuICAgICAgcHJvamVjdFNlbGVjdEVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggLSAxO1xuXG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdFNlbGVjdEVsZW1lbnQudmFsdWU7XG4gICAgc2F2ZVRhc2tzKHRvZG9MaXN0KTtcbiAgICByZW5kZXJUYXNrcygpO1xuICB9KTtcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmRlbGV0ZS1wcm9qZWN0XCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2RvTGlzdC5yZW1vdmVQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gICAgfSk7XG5cbiAgLy8gQWRkIHRhc2sgbW9kYWwgYnV0dG9uIG9wZW5cbiAgY29uc3QgdGFza0J1dHRvbk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1vcGVuXCIpO1xuICB0YXNrQnV0dG9uT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuYWRkLXRhc2tcIik7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblxuICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG5cbiAgY29uc3QgdGFza0J1dHRvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC5hZGQtdGFzayAuYnRuLWNsb3NlXCIpO1xuICB0YXNrQnV0dG9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC10YXNrXCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLm1vZGFsLmVkaXQtdGFzayAuYnRuLWNsb3NlXCJcbiAgKTtcbiAgZWRpdFRhc2tCdXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuZWRpdC10YXNrXCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cbiAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xuXG4gIGNvbnN0IHRhc2tCdXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrIGZvcm1cIik7XG4gIHRhc2tCdXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcHJvamVjdCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChzZWxlY3RlZFByb2plY3QgPT09IFwiQWxsXCIpIHtcbiAgICAgIHByb2plY3QgPSB0b2RvTGlzdC5nZXRBbGxQcm9qZWN0cygpWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC5hZGQtdGFzayAjdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIubW9kYWwuYWRkLXRhc2sgI2Rlc2NyaXB0aW9uXCJcbiAgICApLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmFkZC10YXNrICNkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuYWRkLXRhc2sgI3ByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgcHJvamVjdC5hZGRUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIHNhdmVUYXNrcyh0b2RvTGlzdCk7XG4gICAgcmVuZGVyVGFza3MoKTtcblxuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuYWRkLXRhc2tcIik7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblxuICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG5cbiAgY29uc3QgdGFza0luZm9DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwuaW5mby10YXNrIC5idG4tY2xvc2VcIik7XG4gIHRhc2tJbmZvQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBpbmZvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLmluZm8tdGFza1wiKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG4gICAgaW5mb01vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0U2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0LXByb2plY3RzXCIpO1xuICBwcm9qZWN0U2VsZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmJ0bi1hZGQtdGFza1wiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCA9PT0gXCJBbGxcIikge1xuICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIHNhdmVUYXNrcyh0b2RvTGlzdCk7XG4gICAgcmVuZGVyVGFza3MoKTtcbiAgfSk7XG59XG5cbmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=