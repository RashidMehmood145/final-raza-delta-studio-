webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/HeaderMenuBS/index.js":
/*!******************************************!*\
  !*** ./containers/HeaderMenuBS/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _headermenubs_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./headermenubs.style */ "./containers/HeaderMenuBS/headermenubs.style.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pagedata_HeaderFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pagedata/HeaderFooter */ "./pagedata/HeaderFooter/index.json");
var _pagedata_HeaderFooter__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../pagedata/HeaderFooter */ "./pagedata/HeaderFooter/index.json", 1);





var _jsxFileName = "F:\\Office work\\Garnet-theme-nextjs\\Garnet-theme-nextjs\\garnet-pools-nextjs\\containers\\HeaderMenuBS\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var Headermenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Headermenu, _Component);

  function Headermenu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Headermenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Headermenu).call(this, props));
    _this.state = {
      stickyClass: 'top'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Headermenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('scroll', function () {
        var stickyClass = 'topSticky';
        var scrollPos = window.scrollY;

        if (scrollPos < 100) {
          stickyClass = 'top';
        }

        if (_this2.state.stickyClass !== stickyClass) {
          _this2.setState({
            stickyClass: stickyClass
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(_headermenubs_style__WEBPACK_IMPORTED_MODULE_6__["NavbarCustom"], {
        expand: "lg",
        fixed: "top",
        isSticky: this.state.stickyClass === "topSticky" ? true : false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"].Brand, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(_headermenubs_style__WEBPACK_IMPORTED_MODULE_6__["BrandLogo"], {
        src: this.state.stickyClass === "topSticky" ? __webpack_require__("./assets sync recursive ^\\.\\/.*$")("./" + _pagedata_HeaderFooter__WEBPACK_IMPORTED_MODULE_9__["Header"].BrandLogoSticky) : __webpack_require__("./assets sync recursive ^\\.\\/.*$")("./" + _pagedata_HeaderFooter__WEBPACK_IMPORTED_MODULE_9__["Header"].BrandLogo),
        isSticky: this.state.stickyClass === "topSticky" ? true : false,
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), __jsx(_headermenubs_style__WEBPACK_IMPORTED_MODULE_6__["NavbarToggleCustom"], {
        isSticky: this.state.stickyClass === "topSticky" ? true : false,
        "aria-controls": "basic-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
        className: "ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, _pagedata_HeaderFooter__WEBPACK_IMPORTED_MODULE_9__["Header"].MenuItems.map(function (menuItem, idx) {
        return menuItem.Type === "dropdown" ? __jsx(_headermenubs_style__WEBPACK_IMPORTED_MODULE_6__["NavDropdownCustom"], {
          title: menuItem.Menu,
          id: "basic-nav-dropdown",
          isSticky: _this3.state.stickyClass === "topSticky" ? true : false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, menuItem.Items.map(function (menuSubItem, subItemIdx) {
          return __jsx(_headermenubs_style__WEBPACK_IMPORTED_MODULE_6__["NavDropdownItemCustom"], {
            href: menuSubItem.Href,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, menuSubItem.MenuSubItem);
        })) : __jsx(_headermenubs_style__WEBPACK_IMPORTED_MODULE_6__["NavLinkCustom"], {
          href: menuItem.id,
          isSticky: _this3.state.stickyClass === "topSticky" ? true : false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, menuItem.Menu);
      })))));
    }
  }]);

  return Headermenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Headermenu);

/***/ })

})
//# sourceMappingURL=index.js.1d33e9b50d8e5030acf0.hot-update.js.map