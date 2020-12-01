webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rimble_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rimble-ui */ \"./node_modules/rimble-ui/dist/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"/Users/mdshifut/Downloads/Connect-Project-master/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n //Binding events.\n\nnext_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeStart', function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeComplete', function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeError', function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();\n});\n\nvar customTheme = _objectSpread(_objectSpread({}, rimble_ui__WEBPACK_IMPORTED_MODULE_3__[\"theme\"]), {}, {\n  fontSizes: [16, 18, 20, 22, 24, 30, 40, 64],\n  breakpoints: ['36em', '48em', '62em', '75em'],\n  fonts: {\n    serif: 'athelas, georgia, times, serif',\n    sansSerif: '\"Helvetica Neue\", Helvetica, Arial, sans-serif',\n    heading: 'roc-grotesk, sans-serif;'\n  },\n  colors: _objectSpread(_objectSpread({}, rimble_ui__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].colors), {}, {\n    text: '#000000',\n    textSecondary: '#fff',\n    textTertiary: '#22453D',\n    textGrey: '#ACACAC',\n    hoverPrimary: '#162F2A',\n    hoverSecondary: '#264E46',\n    background: {\n      primary: '#162f2a',\n      primaryDeepLight: '#12463C',\n      primarySemiLight: '#AFBEB7',\n      primaryLight: '#D4DAD5',\n      secondary: '#FFFEFA',\n      secondarySemiDark: '#EDEDED',\n      secondaryDark: '#264E46'\n    }\n  })\n});\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"ThemeProvider\"], {\n    theme: customTheme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(\"link\", {\n    rel: \"Connect Favicon\",\n    href: \"favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }), __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, \"CONNECTx Project - An ecosystem with unstoppable liquidity\")), __jsx(rimble_ui__WEBPACK_IMPORTED_MODULE_3__[\"BaseStyles\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }))));\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsImN1c3RvbVRoZW1lIiwidGhlbWUiLCJmb250U2l6ZXMiLCJicmVha3BvaW50cyIsImZvbnRzIiwic2VyaWYiLCJzYW5zU2VyaWYiLCJoZWFkaW5nIiwiY29sb3JzIiwidGV4dCIsInRleHRTZWNvbmRhcnkiLCJ0ZXh0VGVydGlhcnkiLCJ0ZXh0R3JleSIsImhvdmVyUHJpbWFyeSIsImhvdmVyU2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJwcmltYXJ5RGVlcExpZ2h0IiwicHJpbWFyeVNlbWlMaWdodCIsInByaW1hcnlMaWdodCIsInNlY29uZGFyeSIsInNlY29uZGFyeVNlbWlEYXJrIiwic2Vjb25kYXJ5RGFyayIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQUEsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1DLGdEQUFTLENBQUNDLEtBQVYsRUFBTjtBQUFBLENBQXJDO0FBQ0FKLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0M7QUFBQSxTQUFNQyxnREFBUyxDQUFDRSxJQUFWLEVBQU47QUFBQSxDQUF4QztBQUNBTCxrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQUEsU0FBTUMsZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBckM7O0FBRUEsSUFBTUMsV0FBVyxtQ0FDVkMsK0NBRFU7QUFFYkMsV0FBUyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixDQUZFO0FBR2JDLGFBQVcsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLENBSEE7QUFJYkMsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxnQ0FESjtBQUVIQyxhQUFTLEVBQUUsZ0RBRlI7QUFHSEMsV0FBTyxFQUFFO0FBSE4sR0FKTTtBQVNiQyxRQUFNLGtDQUNDUCwrQ0FBSyxDQUFDTyxNQURQO0FBRUZDLFFBQUksRUFBRSxTQUZKO0FBR0ZDLGlCQUFhLEVBQUUsTUFIYjtBQUlGQyxnQkFBWSxFQUFFLFNBSlo7QUFLRkMsWUFBUSxFQUFFLFNBTFI7QUFNRkMsZ0JBQVksRUFBRSxTQU5aO0FBT0ZDLGtCQUFjLEVBQUUsU0FQZDtBQVNGQyxjQUFVLEVBQUU7QUFDUkMsYUFBTyxFQUFFLFNBREQ7QUFFUkMsc0JBQWdCLEVBQUUsU0FGVjtBQUdSQyxzQkFBZ0IsRUFBRSxTQUhWO0FBSVJDLGtCQUFZLEVBQUUsU0FKTjtBQUtSQyxlQUFTLEVBQUUsU0FMSDtBQU1SQyx1QkFBaUIsRUFBRSxTQU5YO0FBT1JDLG1CQUFhLEVBQUU7QUFQUDtBQVRWO0FBVE8sRUFBakI7O0FBOEJBLFNBQVNDLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3JDLFNBQ0ksTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRXpCLFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLE9BQUcsRUFBQyxpQkFBVjtBQUE0QixRQUFJLEVBQUMsYUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrRUFGSixDQURKLEVBT0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFELHlGQUFleUIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FQSixDQURKO0FBYUg7O0tBZFFGLEs7QUFnQk1BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlU3R5bGVzLCB0aGVtZSB9IGZyb20gJ3JpbWJsZS11aSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgJ25wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbi8vQmluZGluZyBldmVudHMuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG5jb25zdCBjdXN0b21UaGVtZSA9IHtcbiAgICAuLi50aGVtZSxcbiAgICBmb250U2l6ZXM6IFsxNiwgMTgsIDIwLCAyMiwgMjQsIDMwLCA0MCwgNjRdLFxuICAgIGJyZWFrcG9pbnRzOiBbJzM2ZW0nLCAnNDhlbScsICc2MmVtJywgJzc1ZW0nXSxcbiAgICBmb250czoge1xuICAgICAgICBzZXJpZjogJ2F0aGVsYXMsIGdlb3JnaWEsIHRpbWVzLCBzZXJpZicsXG4gICAgICAgIHNhbnNTZXJpZjogJ1wiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZicsXG4gICAgICAgIGhlYWRpbmc6ICdyb2MtZ3JvdGVzaywgc2Fucy1zZXJpZjsnLFxuICAgIH0sXG4gICAgY29sb3JzOiB7XG4gICAgICAgIC4uLnRoZW1lLmNvbG9ycyxcbiAgICAgICAgdGV4dDogJyMwMDAwMDAnLFxuICAgICAgICB0ZXh0U2Vjb25kYXJ5OiAnI2ZmZicsXG4gICAgICAgIHRleHRUZXJ0aWFyeTogJyMyMjQ1M0QnLFxuICAgICAgICB0ZXh0R3JleTogJyNBQ0FDQUMnLFxuICAgICAgICBob3ZlclByaW1hcnk6ICcjMTYyRjJBJyxcbiAgICAgICAgaG92ZXJTZWNvbmRhcnk6ICcjMjY0RTQ2JyxcblxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgICBwcmltYXJ5OiAnIzE2MmYyYScsXG4gICAgICAgICAgICBwcmltYXJ5RGVlcExpZ2h0OiAnIzEyNDYzQycsXG4gICAgICAgICAgICBwcmltYXJ5U2VtaUxpZ2h0OiAnI0FGQkVCNycsXG4gICAgICAgICAgICBwcmltYXJ5TGlnaHQ6ICcjRDREQUQ1JyxcbiAgICAgICAgICAgIHNlY29uZGFyeTogJyNGRkZFRkEnLFxuICAgICAgICAgICAgc2Vjb25kYXJ5U2VtaURhcms6ICcjRURFREVEJyxcbiAgICAgICAgICAgIHNlY29uZGFyeURhcms6ICcjMjY0RTQ2JyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2N1c3RvbVRoZW1lfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIkNvbm5lY3QgRmF2aWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgICAgICBDT05ORUNUeCBQcm9qZWN0IC0gQW4gZWNvc3lzdGVtIHdpdGggdW5zdG9wcGFibGUgbGlxdWlkaXR5XG4gICAgICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxCYXNlU3R5bGVzPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQmFzZVN0eWxlcz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

})