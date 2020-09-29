module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/pagenotfound-images/notfoundbg.jpg":
/*!***************************************************!*\
  !*** ./assets/pagenotfound-images/notfoundbg.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/notfoundbg-9a094eaaa2e5e6c911cb128a788c535b.jpg";

/***/ }),

/***/ "./components/common.style.js":
/*!************************************!*\
  !*** ./components/common.style.js ***!
  \************************************/
/*! exports provided: Commonbtn, CommonbtnBanner, SectionHeading, SectionHeadingMultiLine, Commonh3, Commonh4, Commonpara, AnchorLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commonbtn", function() { return Commonbtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonbtnBanner", function() { return CommonbtnBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeading", function() { return SectionHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeadingMultiLine", function() { return SectionHeadingMultiLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commonh3", function() { return Commonh3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commonh4", function() { return Commonh4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commonpara", function() { return Commonpara; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorLink", function() { return AnchorLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device */ "./components/device.js");


const Commonbtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "commonstyle__Commonbtn",
  componentId: "xwwob2-0"
})(["font-size:14px;color:#fff !important;background:#2560d4;padding:12px 40px;text-decoration:none;font-weight:bold;display:inline-block;box-shadow:0px 0px 13px -2px #5ce59b;cursor:pointer;:hover{text-decoration:none;color:#fff !important;background:#333 !important;}"]);
const CommonbtnBanner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "commonstyle__CommonbtnBanner",
  componentId: "xwwob2-1"
})(["font-size:14px;color:#fff !important;background:#2560d4;padding:12px 40px;text-decoration:none;font-weight:bold;display:inline-block;line-height:1.5;box-shadow:0px 0px 13px -2px #5ce59b;:hover{text-decoration:none;color:#333 !important;}"]);
const SectionHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "commonstyle__SectionHeading",
  componentId: "xwwob2-2"
})(["font-size:42px;color:#262626;margin-bottom:30px;text-align:center;line-height:42px;font-weight:700;@media ", "{font-size:40px;line-height:40px;}@media ", "{font-size:36px;line-height:36px;}"], _device__WEBPACK_IMPORTED_MODULE_1__["device"].tablet, _device__WEBPACK_IMPORTED_MODULE_1__["device"].mobileXL);
const SectionHeadingMultiLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "commonstyle__SectionHeadingMultiLine",
  componentId: "xwwob2-3"
})(["font-size:42px;color:#262626;margin-bottom:30px;text-align:left;line-height:46px;font-weight:700;@media ", "{font-size:40px;line-height:44px;}@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:34px;line-height:38px;}@media ", "{font-size:32px;line-height:36px;}@media ", "{font-size:28px;line-height:32px;}"], _device__WEBPACK_IMPORTED_MODULE_1__["device"].laptopM, _device__WEBPACK_IMPORTED_MODULE_1__["device"].laptop, _device__WEBPACK_IMPORTED_MODULE_1__["device"].tablet, _device__WEBPACK_IMPORTED_MODULE_1__["device"].mobileXL, _device__WEBPACK_IMPORTED_MODULE_1__["device"].mobileL);
const Commonh3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "commonstyle__Commonh3",
  componentId: "xwwob2-4"
})(["font-size:36px;margin-bottom:15px;color:#262626;font-weight:700;"]);
const Commonh4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "commonstyle__Commonh4",
  componentId: "xwwob2-5"
})(["font-size:30px;color:#3a3a3a;line-height:30px;text-align:center;margin-bottom:20px;font-weight:700;"]);
const Commonpara = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "commonstyle__Commonpara",
  componentId: "xwwob2-6"
})(["color:#494949;margin-bottom:20px;font-size:14px;"]);
const AnchorLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "commonstyle__AnchorLink",
  componentId: "xwwob2-7"
})(["color:#111;font-family:'PT Serif',serif;font-weight:700;font-size:16px;line-height:20px;text-align:left;:hover{color:#111;}"]);

/***/ }),

/***/ "./components/device.js":
/*!******************************!*\
  !*** ./components/device.js ***!
  \******************************/
/*! exports provided: device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '576px',
  tablet: '767px',
  laptop: '991px',
  laptopM: '1199px',
  laptopL: '1440px'
};
const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileXL: `(max-width: ${size.mobileXL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  minlaptopL: `(min-width: ${size.laptopL})`
};

/***/ }),

/***/ "./components/fonts.js":
/*!*****************************!*\
  !*** ./components/fonts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Office work\\Garnet-theme-nextjs\\Garnet-theme-nextjs\\garnet-pools-nextjs\\components\\fonts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Fonts = () => {
  return __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=PT+Serif:400,700&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ }),

/***/ "./components/global-styles.js":
/*!*************************************!*\
  !*** ./components/global-styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

    body{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        overflow:hidden;
        .ReactModal__Overlay{
            z-index:1200 !important;
        }
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'PT Serif', serif;
        font-weight: 700;
    }
    a{
        font-family: 'Roboto', sans-serif;
        font-size:16px;
        font-weight:400;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    img{
        margin-bottom:0px;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/layout.css":
/*!*******************************!*\
  !*** ./components/layout.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./containers/PageNotFound/index.js":
/*!******************************************!*\
  !*** ./containers/PageNotFound/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pagenotfound_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagenotfound.style */ "./containers/PageNotFound/pagenotfound.style.js");
var _jsxFileName = "F:\\Office work\\Garnet-theme-nextjs\\Garnet-theme-nextjs\\garnet-pools-nextjs\\containers\\PageNotFound\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotFound = () => __jsx(_pagenotfound_style__WEBPACK_IMPORTED_MODULE_1__["NotFoundSection"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_pagenotfound_style__WEBPACK_IMPORTED_MODULE_1__["Overlay"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_pagenotfound_style__WEBPACK_IMPORTED_MODULE_1__["NotFoundSectionInner"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_pagenotfound_style__WEBPACK_IMPORTED_MODULE_1__["WarningIcon"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(_pagenotfound_style__WEBPACK_IMPORTED_MODULE_1__["NotFoundHeading"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Page not found!"), __jsx(_pagenotfound_style__WEBPACK_IMPORTED_MODULE_1__["NotFoundPara"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."), __jsx(_pagenotfound_style__WEBPACK_IMPORTED_MODULE_1__["NotFoundBtnBg"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(_pagenotfound_style__WEBPACK_IMPORTED_MODULE_1__["HomeBtn"], {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Home")))));

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./containers/PageNotFound/pagenotfound.style.js":
/*!*******************************************************!*\
  !*** ./containers/PageNotFound/pagenotfound.style.js ***!
  \*******************************************************/
/*! exports provided: NotFoundSection, Overlay, NotFoundSectionInner, NotFoundImg, NotFoundHeading, NotFoundPara, NotFoundBtnBg, WarningIcon, HomeBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundSection", function() { return NotFoundSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundSectionInner", function() { return NotFoundSectionInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundImg", function() { return NotFoundImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundHeading", function() { return NotFoundHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPara", function() { return NotFoundPara; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundBtnBg", function() { return NotFoundBtnBg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningIcon", function() { return WarningIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBtn", function() { return HomeBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_pagenotfound_images_notfoundbg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/pagenotfound-images/notfoundbg.jpg */ "./assets/pagenotfound-images/notfoundbg.jpg");
/* harmony import */ var _assets_pagenotfound_images_notfoundbg_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_pagenotfound_images_notfoundbg_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_icons_material_Warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-icons/material/Warning */ "styled-icons/material/Warning");
/* harmony import */ var styled_icons_material_Warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common.style */ "./components/common.style.js");




const NotFoundSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "pagenotfoundstyle__NotFoundSection",
  componentId: "qexktf-0"
})(["height:100vh;background:url(", ");background-size:cover;background-position:center center;background-repeat:no-repeat;"], _assets_pagenotfound_images_notfoundbg_jpg__WEBPACK_IMPORTED_MODULE_1___default.a);
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagenotfoundstyle__Overlay",
  componentId: "qexktf-1"
})(["background:#000000bb;display:flex;align-items:center;height:100vh;"]);
const NotFoundSectionInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagenotfoundstyle__NotFoundSectionInner",
  componentId: "qexktf-2"
})(["margin:auto;max-width:600px;text-align:center;padding:25px;"]);
const NotFoundImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "pagenotfoundstyle__NotFoundImg",
  componentId: "qexktf-3"
})(["max-height:230px;margin-bottom:20px;"]);
const NotFoundHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "pagenotfoundstyle__NotFoundHeading",
  componentId: "qexktf-4"
})(["margin-bottom:20px;font-size:50px;line-height:50px;color:#fff;"]);
const NotFoundPara = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "pagenotfoundstyle__NotFoundPara",
  componentId: "qexktf-5"
})(["margin-bottom:40px;color:#fff;"]);
const NotFoundBtnBg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "pagenotfoundstyle__NotFoundBtnBg",
  componentId: "qexktf-6"
})([""]);
const WarningIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_material_Warning__WEBPACK_IMPORTED_MODULE_2__["Warning"]).withConfig({
  displayName: "pagenotfoundstyle__WarningIcon",
  componentId: "qexktf-7"
})(["height:120px;width:120px;color:#fff;margin-bottom:10px;"]);
const HomeBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_components_common_style__WEBPACK_IMPORTED_MODULE_3__["Commonbtn"]).withConfig({
  displayName: "pagenotfoundstyle__HomeBtn",
  componentId: "qexktf-8"
})(["box-shadow:none;"]);

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout.css */ "./components/layout.css");
/* harmony import */ var _components_layout_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_layout_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_PageNotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/PageNotFound */ "./containers/PageNotFound/index.js");
/* harmony import */ var _components_global_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global-styles */ "./components/global-styles.js");
/* harmony import */ var _components_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/fonts */ "./components/fonts.js");
var _jsxFileName = "F:\\Office work\\Garnet-theme-nextjs\\Garnet-theme-nextjs\\garnet-pools-nextjs\\pages\\_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NotFoundPage = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_components_fonts__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(_components_global_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("main", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_containers_PageNotFound__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Office work\Garnet-theme-nextjs\Garnet-theme-nextjs\garnet-pools-nextjs\pages\_error.js */"./pages/_error.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-icons/material/Warning":
/*!************************************************!*\
  !*** external "styled-icons/material/Warning" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-icons/material/Warning");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map