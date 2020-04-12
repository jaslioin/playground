module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KTQB");


/***/ }),

/***/ "5NG/":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "KTQB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// CONCATENATED MODULE: ./components/Post/Post.jsx

var __jsx = external_react_default.a.createElement;


function Post({
  contentfulEntry
}) {
  return __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "text"
  }, __jsx("h1", null, contentfulEntry.title)), __jsx(external_react_markdown_default.a, {
    source: contentfulEntry.body
  }));
}

/* harmony default export */ var Post_Post = (Post);
// CONCATENATED MODULE: ./components/Post/index.js

/* harmony default export */ var components_Post = (Post_Post);
// EXTERNAL MODULE: ./cms/contentful.js
var contentful = __webpack_require__("P64j");

// CONCATENATED MODULE: ./pages/blog/[slug].js

var _slug_jsx = external_react_default.a.createElement;



function PostPage({
  post
}) {
  return _slug_jsx(components_Post, {
    contentfulEntry: post.fields
  });
}

async function getStaticProps(context) {
  const {
    slug
  } = context.params;
  const post = await contentful["a" /* default */].fetchPostBySlug(slug);
  return {
    props: {
      post
    }
  };
}
async function getStaticPaths() {
  //required for dynamic SSG page
  const blogs = await contentful["a" /* default */].fetchBlogPosts();
  const blogSlugs = blogs.map(post => {
    return post.fields.slug;
  });
  const paths = blogSlugs.map(slug => `/blog/${slug}`);
  return {
    paths,
    fallback: false
  };
}
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (PostPage);

/***/ }),

/***/ "P64j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5NG/");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);

const client = Object(contentful__WEBPACK_IMPORTED_MODULE_0__["createClient"])({
  space: "0ypqr78zxd2e",
  accessToken: "biDQirw96Pz7J4Z5WhWmQeJGClDM7guThtZyAnYdH_s"
});

async function fetchBlogPosts() {
  const entries = await client.getEntries({
    content_type: "blogPost"
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

async function fetchPostBySlug(slug) {
  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug
    });

    if (entries.items) {
      return entries.items[0];
    }
  } catch (e) {
    throw e;
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  fetchBlogPosts,
  fetchPostBySlug
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ })

/******/ });