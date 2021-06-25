(window["webpackJsonp_wsuwp_plugin_auto_tagging"] = window["webpackJsonp_wsuwp_plugin_auto_tagging"] || []).push([["style-index"],{

/***/ "./assets/src/style.scss":
/*!*******************************!*\
  !*** ./assets/src/style.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_wsuwp_plugin_auto_tagging"] = window["webpackJsonp_wsuwp_plugin_auto_tagging"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/flat-term-selector.js":
/*!******************************************!*\
  !*** ./assets/src/flat-term-selector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);

// based on https://github.com/WordPress/gutenberg/blob/release/9.9/packages/editor/src/components/post-taxonomies/flat-term-selector.js

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Module constants
 */

const MAX_TERMS_SUGGESTIONS = 20;
const DEFAULT_QUERY = {
  per_page: MAX_TERMS_SUGGESTIONS,
  orderby: 'count',
  order: 'desc',
  _fields: 'id,name'
}; // Lodash unescape function handles &#39; but not &#039; which may be return in some API requests.

const unescapeString = arg => {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["unescape"])(arg.replace('&#039;', "'"));
};

const isSameTermName = (termA, termB) => unescapeString(termA).toLowerCase() === unescapeString(termB).toLowerCase();
/**
 * Returns a term object with name unescaped.
 * The unescape of the name property is done using lodash unescape function.
 *
 * @param {Object} term The term object to unescape.
 *
 * @return {Object} Term object with name property unescaped.
 */


const unescapeTerm = term => {
  return { ...term,
    name: unescapeString(term.name)
  };
};
/**
 * Returns an array of term objects with names unescaped.
 * The unescape of each term is performed using the unescapeTerm function.
 *
 * @param {Object[]} terms Array of term objects to unescape.
 *
 * @return {Object[]} Array of term objects unescaped.
 */


const unescapeTerms = terms => {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(terms, unescapeTerm);
};

class WSUFlatTermSelector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);
    this.onChange = this.onChange.bind(this);
    this.searchTerms = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["throttle"])(this.searchTerms.bind(this), 500);
    this.findOrCreateTerm = this.findOrCreateTerm.bind(this);
    this.autofillTags = this.autofillTags.bind(this);
    this.state = {
      loading: !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.props.terms),
      availableTerms: [],
      selectedTerms: [],
      allTerms: []
    };
  }

  componentDidMount() {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.props.terms)) {
      this.initRequest = this.fetchTerms({
        include: this.props.terms.join(','),
        per_page: -1
      });
      this.initRequest.then(() => {
        this.setState({
          loading: false
        });
      }, xhr => {
        if (xhr.statusText === 'abort') {
          return;
        }

        this.setState({
          loading: false
        });
      });
    }
  }

  componentWillUnmount() {
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["invoke"])(this.initRequest, ['abort']);
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["invoke"])(this.searchRequest, ['abort']);
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["invoke"])(this.allTermsRequest, ['abort']);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.terms !== this.props.terms) {
      this.updateSelectedTerms(this.props.terms);
    }
  }

  fetchTerms(params = {}) {
    const {
      taxonomy
    } = this.props;
    const query = { ...DEFAULT_QUERY,
      ...params
    };
    const request = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["addQueryArgs"])(`/wp/v2/${taxonomy.rest_base}`, query)
    });
    request.then(unescapeTerms).then(terms => {
      this.setState(state => ({
        availableTerms: state.availableTerms.concat(terms.filter(term => !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(state.availableTerms, availableTerm => availableTerm.id === term.id)))
      }));
      this.updateSelectedTerms(this.props.terms);
    });
    return request;
  }

  updateSelectedTerms(terms = []) {
    const selectedTerms = terms.reduce((accumulator, termId) => {
      const termObject = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(this.state.availableTerms, term => term.id === termId);

      if (termObject) {
        accumulator.push(termObject.name);
      }

      return accumulator;
    }, []);
    this.setState({
      selectedTerms
    });
  }

  findOrCreateTerm(termName) {
    const {
      taxonomy
    } = this.props;
    const termNameEscaped = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["escape"])(termName); // Tries to create a term or fetch it if it already exists.

    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      path: `/wp/v2/${taxonomy.rest_base}`,
      method: 'POST',
      data: {
        name: termNameEscaped
      }
    }).catch(error => {
      const errorCode = error.code;

      if (errorCode === 'term_exists') {
        // If the terms exist, fetch it instead of creating a new one.
        this.addRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
          path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__["addQueryArgs"])(`/wp/v2/${taxonomy.rest_base}`, { ...DEFAULT_QUERY,
            search: termNameEscaped
          })
        }).then(unescapeTerms);
        return this.addRequest.then(searchResult => {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(searchResult, result => isSameTermName(result.name, termName));
        });
      }

      return Promise.reject(error);
    }).then(unescapeTerm);
  }

  onChange(termNames) {
    const uniqueTerms = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"])(termNames, term => term.toLowerCase());
    this.setState({
      selectedTerms: uniqueTerms
    });
    const newTermNames = uniqueTerms.filter(termName => !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(this.state.availableTerms, term => isSameTermName(term.name, termName)));

    const termNamesToIds = (names, availableTerms) => {
      return names.map(termName => Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(availableTerms, term => isSameTermName(term.name, termName)).id);
    };

    if (newTermNames.length === 0) {
      return this.props.onUpdateTerms(termNamesToIds(uniqueTerms, this.state.availableTerms), this.props.taxonomy.rest_base);
    }

    Promise.all(newTermNames.map(this.findOrCreateTerm)).then(newTerms => {
      const newAvailableTerms = this.state.availableTerms.concat(newTerms);
      this.setState({
        availableTerms: newAvailableTerms
      });
      return this.props.onUpdateTerms(termNamesToIds(uniqueTerms, newAvailableTerms), this.props.taxonomy.rest_base);
    });
  }

  searchTerms(search = '') {
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["invoke"])(this.searchRequest, ['abort']);

    if (search.length >= 3) {
      this.searchRequest = this.fetchTerms({
        search
      });
    }
  }

  getAllTerms() {
    return new Promise((resolve, reject) => {
      if (Array.isArray(this.state.allTerms) && this.state.allTerms.length > 0) {
        resolve(this.state.allTerms);
        return;
      }

      Object(lodash__WEBPACK_IMPORTED_MODULE_1__["invoke"])(this.allTermsRequest, ['abort']);
      this.allTermsRequest = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
        path: `/autotaggingapi/v1/terms`
      });
      this.allTermsRequest.then(unescapeTerms).then(terms => {
        this.setState({
          allTerms: terms
        });
        resolve(terms);
      });
    });
  }

  autofillTags() {
    const postContent = (wp.data.select("core/editor").getEditedPostAttribute('title') + wp.data.select("core/editor").getEditedPostContent()).toLowerCase();
    this.getAllTerms().then(allTerms => {
      const newTerms = allTerms.filter(term => {
        if (this.state.selectedTerms.indexOf(term.name) !== -1) return true; // keep existing terms
        // TODO: Consider
        // Smarter matching, removing html, only searching specific component types, no partial word matches, only, tags with more than X uses, other?
        // UI Feedback for long running processes

        return postContent.indexOf(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["escape"])(term.name.toLowerCase())) !== -1; // very basic matching
      });

      if (newTerms.length > 0) {
        this.setState({
          availableTerms: newTerms
        });
        this.props.onUpdateTerms(this.state.availableTerms.map(t => t.id), this.props.taxonomy.rest_base);
      }
    });
  }

  render() {
    const {
      slug,
      taxonomy,
      hasAssignAction
    } = this.props;

    if (!hasAssignAction) {
      return null;
    }

    const {
      loading,
      availableTerms,
      selectedTerms
    } = this.state;
    const termNames = availableTerms.map(term => term.name);
    const newTermLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(taxonomy, ['labels', 'add_new_item'], slug === 'post_tag' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add new tag') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add new Term'));
    const singularName = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(taxonomy, ['labels', 'singular_name'], slug === 'post_tag' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tag') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Term'));
    const termAddedLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(
    /* translators: %s: term name. */
    Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('%s added', 'term'), singularName);
    const termRemovedLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(
    /* translators: %s: term name. */
    Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('%s removed', 'term'), singularName);
    const removeTermLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(
    /* translators: %s: term name. */
    Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Remove %s', 'term'), singularName);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["FormTokenField"], {
      value: selectedTerms,
      suggestions: termNames,
      onChange: this.onChange,
      onInputChange: this.searchTerms,
      maxSuggestions: MAX_TERMS_SUGGESTIONS,
      disabled: loading,
      label: newTermLabel,
      messages: {
        added: termAddedLabel,
        removed: termRemovedLabel,
        remove: removeTermLabel
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isSmall: "true",
      isPrimary: "true",
      variant: "primary",
      onClick: this.autofillTags
    }, "Autofill Tags")];
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])((select, {
  slug
}) => {
  const {
    getCurrentPost
  } = select('core/editor');
  const {
    getTaxonomy
  } = select('core');
  const taxonomy = getTaxonomy(slug);
  return {
    hasCreateAction: taxonomy ? Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(getCurrentPost(), ['_links', 'wp:action-create-' + taxonomy.rest_base], false) : false,
    hasAssignAction: taxonomy ? Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(getCurrentPost(), ['_links', 'wp:action-assign-' + taxonomy.rest_base], false) : false,
    terms: taxonomy ? select('core/editor').getEditedPostAttribute(taxonomy.rest_base) : [],
    taxonomy
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(dispatch => {
  return {
    onUpdateTerms(terms, restBase) {
      dispatch('core/editor').editPost({
        [restBase]: terms
      });
    }

  };
}))(WSUFlatTermSelector));

/***/ }),

/***/ "./assets/src/index.js":
/*!*****************************!*\
  !*** ./assets/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flat_term_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flat-term-selector */ "./assets/src/flat-term-selector.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./assets/src/style.scss");



const el = wp.element.createElement;

function autofillTags(OriginalComponent) {
  return function (props) {
    // TODO: Only enable on specific post type
    // console.log(props);
    // console.log(wp.data.select("core/editor").getCurrentPostType());
    if (props.slug === 'post_tag') {
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_flat_term_selector__WEBPACK_IMPORTED_MODULE_1__["default"], props)];
    } // default return


    return el(OriginalComponent, props);
  };
}

wp.hooks.addFilter('editor.PostTaxonomyType', 'wsuwp-plugin-auto-tagging', autofillTags);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map