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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-family: \"Karla\", sans-serif;\n  background: #ecf0f3;\n  display: grid;\n  place-items: center;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 16px;\n  overflow-x: hidden;\n}\n\na {\n  text-decoration: none;\n  color: #000;\n}\n\nul {\n  list-style-type: none;\n}\n\n.app_container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n  position: relative;\n}\n\n.navbar {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 20px 10%;\n  gap: 50px;\n  background: rgb(193, 185, 185);\n}\n\n.logo {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 100%;\n  background-color: aquamarine;\n  padding: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#itemsNumber {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 100%;\n  background-color: rgb(158, 233, 176);\n  color: rgb(34, 3, 3);\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.navList {\n  display: flex;\n  gap: 30px;\n}\n\n.navItem {\n  display: flex;\n  gap: 2px;\n}\n\n.app_content {\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card {\n  width: 33.33%;\n  padding: 25px;\n}\n\n.card-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  border: 2px solid rgb(172, 243, 241);\n  padding: 10px 0;\n  border-radius: 10px;\n  box-shadow: 10px 10px;\n}\n\n.img_container {\n  width: 100%;\n  height: 100px;\n}\n\n.img_container > img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.infos {\n  display: flex;\n  gap: 10px;\n}\n\n.title {\n  flex: 2;\n}\n\n.likes {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.fa-heart {\n  cursor: pointer;\n  color: red;\n}\n\n.fa-heart:hover {\n  color: rgb(169, 61, 147);\n  transform: scale(1.5);\n}\n\n.footer {\n  width: 100%;\n  border: 1px solid black;\n  padding: 2rem 1rem;\n}\n\nbutton {\n  padding: 5px 10px;\n  cursor: pointer;\n  width: fit-content;\n  box-shadow: 4px 4px 2px #000;\n}\n\n@media only screen and (min-width: 1024px) {\n  .img_container {\n    height: 150px;\n  }\n}\n\n.hidden {\n  display: none;\n}\n\n.card-image {\n  max-width: 100%;\n}\n\n.commentSection > * {\n  display: block;\n  margin: 1rem;\n}\n\n.form-content textarea {\n  padding: 5px;\n  font-size: 1em;\n  border: 2px solid #000;\n  width: 95%;\n}\n\n.form-content input {\n  padding: 5px;\n  font-size: 1em;\n  border: 2px solid #000;\n  width: 96%;\n}\n\n.form-content button {\n  border-radius: 5%;\n  width: 5rem;\n  height: 20px;\n  border-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-property: transform;\n  transition-duration: 0.1s;\n  transition-timing-function: ease-in;\n}\n\n.modal-container {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.8);\n  padding: 20px 10px;\n}\n\n.modal {\n  width: 80%;\n  height: 100%;\n  background-color: #fff;\n  border: 1px solid #000;\n}\n\n.close {\n  position: relative;\n  top: 20px;\n  left: 95%;\n}\n\n.modal-content {\n  width: 76%;\n  padding: 15px 30px;\n  position: absolute;\n}\n\n.modal-body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.modal-body img {\n  height: 250px;\n  width: 100%;\n  object-fit: contain;\n}\n\n.form-content {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding-left: 20px;\n  gap: 10px;\n}\n\n.result {\n  font-size: 1em;\n  margin-right: 210px;\n}\n\n.result h4 {\n  font-size: 1.5em;\n  margin-bottom: 8px;\n}\n\n.modal-title {\n  font-size: 1em;\n}\n\n.comment-head {\n  font-size: 1.5em;\n  margin-bottom: 0;\n  margin-top: 8px;\n  margin-right: 260px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap\");\n\nbody {\n  margin: 0;\n  font-family: \"Karla\", sans-serif;\n  background: #ecf0f3;\n  display: grid;\n  place-items: center;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 16px;\n  overflow-x: hidden;\n}\n\na {\n  text-decoration: none;\n  color: #000;\n}\n\nul {\n  list-style-type: none;\n}\n\n.app_container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n  position: relative;\n}\n\n.navbar {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 20px 10%;\n  gap: 50px;\n  background: rgb(193, 185, 185);\n}\n\n.logo {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 100%;\n  background-color: aquamarine;\n  padding: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#itemsNumber {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 100%;\n  background-color: rgb(158, 233, 176);\n  color: rgb(34, 3, 3);\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.navList {\n  display: flex;\n  gap: 30px;\n}\n\n.navItem {\n  display: flex;\n  gap: 2px;\n}\n\n.app_content {\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card {\n  width: 33.33%;\n  padding: 25px;\n}\n\n.card-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  border: 2px solid rgb(172, 243, 241);\n  padding: 10px 0;\n  border-radius: 10px;\n  box-shadow: 10px 10px;\n}\n\n.img_container {\n  width: 100%;\n  height: 100px;\n}\n\n.img_container > img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.infos {\n  display: flex;\n  gap: 10px;\n}\n\n.title {\n  flex: 2;\n}\n\n.likes {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.fa-heart {\n  cursor: pointer;\n  color: red;\n}\n\n.fa-heart:hover {\n  color: rgb(169, 61, 147);\n  transform: scale(1.5);\n}\n\n.footer {\n  width: 100%;\n  border: 1px solid black;\n  padding: 2rem 1rem;\n}\n\nbutton {\n  padding: 5px 10px;\n  cursor: pointer;\n  width: fit-content;\n  box-shadow: 4px 4px 2px #000;\n}\n\n@media only screen and (min-width: 1024px) {\n  .img_container {\n    height: 150px;\n  }\n}\n\n.hidden {\n  display: none;\n}\n\n.card-image {\n  max-width: 100%;\n}\n\n.commentSection > * {\n  display: block;\n  margin: 1rem;\n}\n\n.form-content textarea {\n  padding: 5px;\n  font-size: 1em;\n  border: 2px solid #000;\n  width: 95%;\n}\n\n.form-content input {\n  padding: 5px;\n  font-size: 1em;\n  border: 2px solid #000;\n  width: 96%;\n}\n\n.form-content button {\n  border-radius: 5%;\n  width: 5rem;\n  height: 20px;\n  border-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-property: transform;\n  transition-duration: 0.1s;\n  transition-timing-function: ease-in;\n}\n\n.modal-container {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.8);\n  padding: 20px 10px;\n}\n\n.modal {\n  width: 80%;\n  height: 100%;\n  background-color: #fff;\n  border: 1px solid #000;\n}\n\n.close {\n  position: relative;\n  top: 20px;\n  left: 95%;\n}\n\n.modal-content {\n  width: 76%;\n  padding: 15px 30px;\n  position: absolute;\n}\n\n.modal-body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.modal-body img {\n  height: 250px;\n  width: 100%;\n  object-fit: contain;\n}\n\n.form-content {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding-left: 20px;\n  gap: 10px;\n}\n\n.result {\n  font-size: 1em;\n  margin-right: 210px;\n}\n\n.result h4 {\n  font-size: 1.5em;\n  margin-bottom: 8px;\n}\n\n.modal-title {\n  font-size: 1em;\n}\n\n.comment-head {\n  font-size: 1.5em;\n  margin-bottom: 0;\n  margin-top: 8px;\n  margin-right: 260px;\n}\n"],"sourceRoot":""}]);
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayComment = (newComment) => {
  const today = new Date().toISOString().slice(0, 10);
  const commentContent = document.querySelector('.result');
  commentContent.innerHTML += `<div>${today} ${newComment.username} : ${newComment.comment}</div>`;
};

const addComment = async (newComment, url) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(displayComment(newComment));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);


/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newComment.js */ "./src/modules/newComment.js");
/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ "./src/modules/addComment.js");
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/modules/commentsCounter.js");




const comments = async (product) => {
  const cardsContainer = document.querySelector('.app_container');
  const productList = document.querySelector('.app_content');
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"RjgqnSbtI7mLf4Cal2BK"}/comments?item_id=${product.id}`;
  let comments = [];
  try {
    comments = await fetch(url).then((response) => response.json());
    if (typeof comments.error === 'object') {
      comments = [];
    }
  // eslint-disable-next-line no-console
  } catch (error) { console.error(error); }

  productList.innerHTML += `
        <div class= 'modal-container'>
        <div class="modal" id="exampleModal${product.id}" >
            <div class="modal-content">
              <button class= 'close' type="button">Close</button>
              <div class="modal-body">
                <img src="${product.image}" alt="Sample photo" class="card-image" />
                <h5 class="modal-title" id="exampleModalLabel">${product.name}</h5>
                <div class= 'result'>
                </div>
                <h5 class= "comment-head">Add a comment</h5>
                <form class= 'form-content'>
                  <input type="text" class= 'names' id="fname${product.id}" name="${product.id}" placeholder="Your name" autocomplete="off" required>
                  <textarea id="ta${product.id}" class= 'description' name="ta${product.id}" rows="4" cols="50" placeholder="Your insights" required></textarea>
                  <button type="button" class="btn btn-primary btnAddComment">Comment</button>
                </form>
                <h4>Comments(<span class="total-comments">0</span>)</h4>
              </div>
            </div>
        </div>
      </div>
        `;

  const commentContent = cardsContainer.querySelector('.result');
  comments?.forEach((element) => { commentContent.innerHTML += `<div>${element.creation_date} ${element.username} : ${element.comment}</div>`; });
  (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  cardsContainer.addEventListener('click', (e) => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"RjgqnSbtI7mLf4Cal2BK"}/comments`;

    if (e.target.classList.contains('btnAddComment')) {
      if (e.target.parentElement[0].value !== '' && e.target.parentElement[1].value) {
        const username = e.target.parentElement[0].value;
        const comment = e.target.parentElement[1].value;
        const newComment = new _newComment_js__WEBPACK_IMPORTED_MODULE_0__["default"](username, comment, product.id);

        (0,_addComment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(newComment, url);

        e.target.parentElement[0].value = '';
        e.target.parentElement[1].value = '';
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);


/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countElement = () => {
  const commentContainer = document.querySelector('.result');
  const commentCount = document.querySelector('.total-comments');
  const itemCount = commentContainer.childElementCount;
  commentCount.innerHTML = itemCount;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countElement);


/***/ }),

/***/ "./src/modules/newComment.js":
/*!***********************************!*\
  !*** ./src/modules/newComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewComment)
/* harmony export */ });
class NewComment {
  constructor(username, comment, id) {
    this.username = username;
    this.comment = comment;
    this.item_id = id;
  }
}


/***/ }),

/***/ "./src/modules/product.js":
/*!********************************!*\
  !*** ./src/modules/product.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
class Product {
  constructor(id, name, image, likes, comments = {}) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.likes = likes;
    this.comments = comments;
  }
}

/***/ }),

/***/ "./src/modules/productCounter.js":
/*!***************************************!*\
  !*** ./src/modules/productCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countProduct = () => {
  const productList = document.querySelector('.app_content');
  const count = productList.childElementCount;
  document.getElementById('itemsNumber').innerHTML = count;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countProduct);

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProducts": () => (/* binding */ displayProducts),
/* harmony export */   "likeProduct": () => (/* binding */ likeProduct)
/* harmony export */ });
const likeProduct = async (products, id) => {
  const ProductList = document.querySelector('.app_content');
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"RjgqnSbtI7mLf4Cal2BK"}/likes/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  ).then(() => {
    const likeItem = ProductList.querySelector(`div[id="${id}"]`);
    const li = likeItem.querySelector('span');
    li.innerHTML = `${products[id].likes + 1} likes`;
    products[id].likes += 1;
  });
};

const displayProducts = (products) => {
  const storeContent = document.querySelector('.app_content');
  products.forEach((element) => {
    storeContent.innerHTML += `
         <div id="${element.id}" class="card">
          <div class="card-inner">
            <div class="img_container">
              <img src=${element.image} alt="" />
            </div>
            <div id="infos">
                <div class="title">${element.name}</div>
                <div class="likes">
                ${
  element.likes
    ? '<i class="fa-solid fa-heart"> </i>'
    : '<i class="fa-regular fa-heart"> </i>'
}
                <span>${element.likes} likes </span>
                </div>
            </div>
            
            <button id="comment">Comments</button>
            <button id="refreshs">Reservations</button>
          </div>
        </div>
 `;
  });
};


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
/* harmony import */ var _modules_product_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/product.js */ "./src/modules/product.js");
/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments.js */ "./src/modules/comments.js");
/* harmony import */ var _modules_productCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/productCounter.js */ "./src/modules/productCounter.js");
/* harmony import */ var _modules_store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/store.js */ "./src/modules/store.js");






const products = [];

const ProductList = document.querySelector('.app_content');

const store = async () => {
  const response = await fetch(
    'https://fakestoreapi.com/products/category/electronics',
  ).then((res) => res.json());

  const Likes = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"RjgqnSbtI7mLf4Cal2BK"}/likes/`,
  ).then((res) => res.json());

  response.forEach((element) => {
    const id = response.indexOf(element);
    const likes = Likes.find((l) => l.item_id === id.toString())?.likes || 0;

    const prod = new _modules_product_js__WEBPACK_IMPORTED_MODULE_1__["default"](
      id,
      element.title.substring(0, 16),
      element.image,
      likes,
    );
    products.push(prod);
  });
  (0,_modules_store_js__WEBPACK_IMPORTED_MODULE_4__.displayProducts)(products);
  (0,_modules_productCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

document.addEventListener('DOMContentLoaded', store());

ProductList.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('fa-heart')) {
    const id = element.parentElement.parentElement.parentElement.parentElement.getAttribute(
      'id',
    );
    (0,_modules_store_js__WEBPACK_IMPORTED_MODULE_4__.likeProduct)(products, id);
  } else if (element.getAttribute('id') === 'comment') {
    const id = element.parentElement.parentElement.getAttribute('id');
    const product = products.find((p) => p.id === parseInt(id, 10));
    (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(product);
  } else if (element.classList.contains('close')) {
    ProductList.lastElementChild.remove();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFV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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNzQjtBQUNFO0FBQ1U7QUFDVzs7QUFFbEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrRUFBK0Usc0JBQW1CLENBQUM7QUFDbkc7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiwyREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxrRUFBZTtBQUNqQixFQUFFLHNFQUFZO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBVztBQUNmLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSxnRUFBUTtBQUNaLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FkZENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50c0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL25ld0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3Byb2R1Y3RDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FybGE6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmZhbWlseT1TcGVjdHJhbDppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MSwyMDA7MSwzMDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6ICNlY2YwZjM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmFwcF9jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMTAlO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDE5MywgMTg1LCAxODUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpdGVtc051bWJlciB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjMzLCAxNzYpO1xcbiAgY29sb3I6IHJnYigzNCwgMywgMyk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2TGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubmF2SXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5hcHBfY29udGVudCB7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IDMzLjMzJTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5jYXJkLWlubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNzIsIDI0MywgMjQxKTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHg7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmltZ19jb250YWluZXIgPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaW5mb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZsZXg6IDI7XFxufVxcblxcbi5saWtlcyB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTY5LCA2MSwgMTQ3KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDJweCAjMDAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmltZ19jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnRTZWN0aW9uID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGVudCB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiA5NiU7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDIwcHg7XFxuICBsZWZ0OiA5NSU7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiA3NiU7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1vZGFsLWJvZHkgaW1nIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmVzdWx0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMTBweDtcXG59XFxuXFxuLnJlc3VsdCBoNCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5jb21tZW50LWhlYWQge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FybGE6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmZhbWlseT1TcGVjdHJhbDppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MSwyMDA7MSwzMDA7MSw0MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6ICNlY2YwZjM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmFwcF9jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMTAlO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDE5MywgMTg1LCAxODUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNpdGVtc051bWJlciB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjMzLCAxNzYpO1xcbiAgY29sb3I6IHJnYigzNCwgMywgMyk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2TGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubmF2SXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi5hcHBfY29udGVudCB7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNhcmQge1xcbiAgd2lkdGg6IDMzLjMzJTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5jYXJkLWlubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNzIsIDI0MywgMjQxKTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHg7XFxufVxcblxcbi5pbWdfY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmltZ19jb250YWluZXIgPiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaW5mb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZsZXg6IDI7XFxufVxcblxcbi5saWtlcyB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTY5LCA2MSwgMTQ3KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDJweCAjMDAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmltZ19jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnRTZWN0aW9uID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGVudCB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiA5NiU7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDIwcHg7XFxuICBsZWZ0OiA5NSU7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiA3NiU7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1vZGFsLWJvZHkgaW1nIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmVzdWx0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMTBweDtcXG59XFxuXFxuLnJlc3VsdCBoNCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5jb21tZW50LWhlYWQge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkaXNwbGF5Q29tbWVudCA9IChuZXdDb21tZW50KSA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgY29uc3QgY29tbWVudENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0Jyk7XG4gIGNvbW1lbnRDb250ZW50LmlubmVySFRNTCArPSBgPGRpdj4ke3RvZGF5fSAke25ld0NvbW1lbnQudXNlcm5hbWV9IDogJHtuZXdDb21tZW50LmNvbW1lbnR9PC9kaXY+YDtcbn07XG5cbmNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAobmV3Q29tbWVudCwgdXJsKSA9PiB7XG4gIGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0NvbW1lbnQpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSkudGhlbihkaXNwbGF5Q29tbWVudChuZXdDb21tZW50KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgYWRkQ29tbWVudDtcbiIsImltcG9ydCBOZXdDb21tZW50IGZyb20gJy4vbmV3Q29tbWVudC5qcyc7XG5pbXBvcnQgYWRkQ29tbWVudCBmcm9tICcuL2FkZENvbW1lbnQuanMnO1xuaW1wb3J0IGNvdW50RWxlbWVudCBmcm9tICcuL2NvbW1lbnRzQ291bnRlci5qcyc7XG5cbmNvbnN0IGNvbW1lbnRzID0gYXN5bmMgKHByb2R1Y3QpID0+IHtcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwX2NvbnRhaW5lcicpO1xuICBjb25zdCBwcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHBfY29udGVudCcpO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtwcm9jZXNzLmVudi5BUElfS0VZfS9jb21tZW50cz9pdGVtX2lkPSR7cHJvZHVjdC5pZH1gO1xuICBsZXQgY29tbWVudHMgPSBbXTtcbiAgdHJ5IHtcbiAgICBjb21tZW50cyA9IGF3YWl0IGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgaWYgKHR5cGVvZiBjb21tZW50cy5lcnJvciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbW1lbnRzID0gW107XG4gICAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICB9IGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmVycm9yKGVycm9yKTsgfVxuXG4gIHByb2R1Y3RMaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9ICdtb2RhbC1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiBpZD1cImV4YW1wbGVNb2RhbCR7cHJvZHVjdC5pZH1cIiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSAnY2xvc2UnIHR5cGU9XCJidXR0b25cIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9kdWN0LmltYWdlfVwiIGFsdD1cIlNhbXBsZSBwaG90b1wiIGNsYXNzPVwiY2FyZC1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+JHtwcm9kdWN0Lm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSAncmVzdWx0Jz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9IFwiY29tbWVudC1oZWFkXCI+QWRkIGEgY29tbWVudDwvaDU+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9ICdmb3JtLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9ICduYW1lcycgaWQ9XCJmbmFtZSR7cHJvZHVjdC5pZH1cIiBuYW1lPVwiJHtwcm9kdWN0LmlkfVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0YSR7cHJvZHVjdC5pZH1cIiBjbGFzcz0gJ2Rlc2NyaXB0aW9uJyBuYW1lPVwidGEke3Byb2R1Y3QuaWR9XCIgcm93cz1cIjRcIiBjb2xzPVwiNTBcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuQWRkQ29tbWVudFwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGg0PkNvbW1lbnRzKDxzcGFuIGNsYXNzPVwidG90YWwtY29tbWVudHNcIj4wPC9zcGFuPik8L2g0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gY2FyZHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLnJlc3VsdCcpO1xuICBjb21tZW50cz8uZm9yRWFjaCgoZWxlbWVudCkgPT4geyBjb21tZW50Q29udGVudC5pbm5lckhUTUwgKz0gYDxkaXY+JHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICR7ZWxlbWVudC51c2VybmFtZX0gOiAke2VsZW1lbnQuY29tbWVudH08L2Rpdj5gOyB9KTtcbiAgY291bnRFbGVtZW50KCk7XG4gIGNhcmRzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtwcm9jZXNzLmVudi5BUElfS0VZfS9jb21tZW50c2A7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG5BZGRDb21tZW50JykpIHtcbiAgICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50WzBdLnZhbHVlICE9PSAnJyAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50WzFdLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudFswXS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRbMV0udmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSBuZXcgTmV3Q29tbWVudCh1c2VybmFtZSwgY29tbWVudCwgcHJvZHVjdC5pZCk7XG5cbiAgICAgICAgYWRkQ29tbWVudChuZXdDb21tZW50LCB1cmwpO1xuXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnRbMF0udmFsdWUgPSAnJztcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudFsxXS52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50cztcbiIsImNvbnN0IGNvdW50RWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgY29tbWVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKTtcbiAgY29uc3QgY29tbWVudENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWNvbW1lbnRzJyk7XG4gIGNvbnN0IGl0ZW1Db3VudCA9IGNvbW1lbnRDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGNvbW1lbnRDb3VudC5pbm5lckhUTUwgPSBpdGVtQ291bnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudEVsZW1lbnQ7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDb21tZW50IHtcbiAgY29uc3RydWN0b3IodXNlcm5hbWUsIGNvbW1lbnQsIGlkKSB7XG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIHRoaXMuY29tbWVudCA9IGNvbW1lbnQ7XG4gICAgdGhpcy5pdGVtX2lkID0gaWQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3Qge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgaW1hZ2UsIGxpa2VzLCBjb21tZW50cyA9IHt9KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMubGlrZXMgPSBsaWtlcztcbiAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XG4gIH1cbn0iLCJjb25zdCBjb3VudFByb2R1Y3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcF9jb250ZW50Jyk7XG4gIGNvbnN0IGNvdW50ID0gcHJvZHVjdExpc3QuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtc051bWJlcicpLmlubmVySFRNTCA9IGNvdW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRQcm9kdWN0OyIsImV4cG9ydCBjb25zdCBsaWtlUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0cywgaWQpID0+IHtcbiAgY29uc3QgUHJvZHVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwX2NvbnRlbnQnKTtcbiAgYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0vbGlrZXMvYCxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKS50aGVuKCgpID0+IHtcbiAgICBjb25zdCBsaWtlSXRlbSA9IFByb2R1Y3RMaXN0LnF1ZXJ5U2VsZWN0b3IoYGRpdltpZD1cIiR7aWR9XCJdYCk7XG4gICAgY29uc3QgbGkgPSBsaWtlSXRlbS5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgbGkuaW5uZXJIVE1MID0gYCR7cHJvZHVjdHNbaWRdLmxpa2VzICsgMX0gbGlrZXNgO1xuICAgIHByb2R1Y3RzW2lkXS5saWtlcyArPSAxO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5UHJvZHVjdHMgPSAocHJvZHVjdHMpID0+IHtcbiAgY29uc3Qgc3RvcmVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcF9jb250ZW50Jyk7XG4gIHByb2R1Y3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBzdG9yZUNvbnRlbnQuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgIDxkaXYgaWQ9XCIke2VsZW1lbnQuaWR9XCIgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWdfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPSR7ZWxlbWVudC5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImluZm9zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHtlbGVtZW50Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzXCI+XG4gICAgICAgICAgICAgICAgJHtcbiAgZWxlbWVudC5saWtlc1xuICAgID8gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtaGVhcnRcIj4gPC9pPidcbiAgICA6ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnRcIj4gPC9pPidcbn1cbiAgICAgICAgICAgICAgICA8c3Bhbj4ke2VsZW1lbnQubGlrZXN9IGxpa2VzIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY29tbWVudFwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVmcmVzaHNcIj5SZXNlcnZhdGlvbnM8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gYDtcbiAgfSk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL21vZHVsZXMvcHJvZHVjdC5qcyc7XG5pbXBvcnQgY29tbWVudHMgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnRzLmpzJztcbmltcG9ydCBjb3VudFByb2R1Y3QgZnJvbSAnLi9tb2R1bGVzL3Byb2R1Y3RDb3VudGVyLmpzJztcbmltcG9ydCB7IGRpc3BsYXlQcm9kdWN0cywgbGlrZVByb2R1Y3QgfSBmcm9tICcuL21vZHVsZXMvc3RvcmUuanMnO1xuXG5jb25zdCBwcm9kdWN0cyA9IFtdO1xuXG5jb25zdCBQcm9kdWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHBfY29udGVudCcpO1xuXG5jb25zdCBzdG9yZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzL2NhdGVnb3J5L2VsZWN0cm9uaWNzJyxcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IExpa2VzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0vbGlrZXMvYCxcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpZCA9IHJlc3BvbnNlLmluZGV4T2YoZWxlbWVudCk7XG4gICAgY29uc3QgbGlrZXMgPSBMaWtlcy5maW5kKChsKSA9PiBsLml0ZW1faWQgPT09IGlkLnRvU3RyaW5nKCkpPy5saWtlcyB8fCAwO1xuXG4gICAgY29uc3QgcHJvZCA9IG5ldyBQcm9kdWN0KFxuICAgICAgaWQsXG4gICAgICBlbGVtZW50LnRpdGxlLnN1YnN0cmluZygwLCAxNiksXG4gICAgICBlbGVtZW50LmltYWdlLFxuICAgICAgbGlrZXMsXG4gICAgKTtcbiAgICBwcm9kdWN0cy5wdXNoKHByb2QpO1xuICB9KTtcbiAgZGlzcGxheVByb2R1Y3RzKHByb2R1Y3RzKTtcbiAgY291bnRQcm9kdWN0KCk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc3RvcmUoKSk7XG5cblByb2R1Y3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWhlYXJ0JykpIHtcbiAgICBjb25zdCBpZCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXG4gICAgICAnaWQnLFxuICAgICk7XG4gICAgbGlrZVByb2R1Y3QocHJvZHVjdHMsIGlkKTtcbiAgfSBlbHNlIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgY29uc3QgaWQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoKHApID0+IHAuaWQgPT09IHBhcnNlSW50KGlkLCAxMCkpO1xuICAgIGNvbW1lbnRzKHByb2R1Y3QpO1xuICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZScpKSB7XG4gICAgUHJvZHVjdExpc3QubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=