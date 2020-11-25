webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FeatureBox/FeatureBox.tsx":
/*!**********************************************!*\
  !*** ./components/FeatureBox/FeatureBox.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rimble_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rimble-ui */ "./node_modules/rimble-ui/dist/es/index.js");
/* harmony import */ var _CustomHeading_CustomHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CustomHeading/CustomHeading */ "./components/CustomHeading/CustomHeading.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\shadi\\Desktop\\CONNECT LATEST\\connect-tokens-master\\components\\FeatureBox\\FeatureBox.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FeatureBox = function FeatureBox(_ref) {
  var title = _ref.title,
      description = _ref.description,
      img = _ref.img;
  return __jsx(rimble_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    my: ['15px', '15px', '20px'],
    p: '30px 20px',
    flexWrap: 'wrap',
    boxShadow: '-6px -6px 15px -12px #387669, 0px 12px 15px 0 #122622',
    bg: '#22453D',
    borderRadius: ['10px', '10px', '19px'],
    width: '100%',
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(rimble_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    height: ['50px', '50px', '100px'],
    width: ['50px', '50px', '100px'],
    mr: ['20px', '20px', '40px'],
    borderRadius: '50%',
    bg: "transparent",
    as: 'img',
    alt: title,
    src: img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx(rimble_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    width: ['calc(100% - 70px)', 'calc(100% - 70px)', 'calc(100% - 140px)'],
    alignItems: "center",
    flexWrap: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_CustomHeading_CustomHeading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: 'h2',
    color: '#DFDFDF',
    mb: ['5px', '5px', '10px'],
    width: '100%',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, title), __jsx(_CustomHeading_CustomHeading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: 'h1',
    width: '100%',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, description)));
};

_c = FeatureBox;
FeatureBox.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureBox);

var _c;

$RefreshReg$(_c, "FeatureBox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlQm94L0ZlYXR1cmVCb3gudHN4Il0sIm5hbWVzIjpbIkZlYXR1cmVCb3giLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBaUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLFdBQXVCLFFBQXZCQSxXQUF1QjtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUNoRCxTQUNJLE1BQUMsOENBQUQ7QUFDSSxNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixDQURSO0FBRUksS0FBQyxFQUFFLFdBRlA7QUFHSSxZQUFRLEVBQUUsTUFIZDtBQUlJLGFBQVMsRUFBRSx1REFKZjtBQUtJLE1BQUUsRUFBRSxTQUxSO0FBTUksZ0JBQVksRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBTmxCO0FBT0ksU0FBSyxFQUFFLE1BUFg7QUFRSSxjQUFVLEVBQUMsUUFSZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUksTUFBQyw2Q0FBRDtBQUNJLFVBQU0sRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE9BQWpCLENBRFo7QUFFSSxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixPQUFqQixDQUZYO0FBR0ksTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsQ0FIUjtBQUlJLGdCQUFZLEVBQUUsS0FKbEI7QUFLSSxNQUFFLEVBQUMsYUFMUDtBQU1JLE1BQUUsRUFBRSxLQU5SO0FBT0ksT0FBRyxFQUFFRixLQVBUO0FBUUksT0FBRyxFQUFFRSxHQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQW9CSSxNQUFDLDhDQUFEO0FBQ0ksU0FBSyxFQUFFLENBQ0gsbUJBREcsRUFFSCxtQkFGRyxFQUdILG9CQUhHLENBRFg7QUFNSSxjQUFVLEVBQUMsUUFOZjtBQU9JLFlBQVEsRUFBQyxNQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTSSxNQUFDLG9FQUFEO0FBQ0ksTUFBRSxFQUFFLElBRFI7QUFFSSxTQUFLLEVBQUUsU0FGWDtBQUdJLE1BQUUsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsTUFBZixDQUhSO0FBSUksU0FBSyxFQUFFLE1BSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1LRixLQU5MLENBVEosRUFpQkksTUFBQyxvRUFBRDtBQUFlLE1BQUUsRUFBRSxJQUFuQjtBQUF5QixTQUFLLEVBQUUsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxXQURMLENBakJKLENBcEJKLENBREo7QUE0Q0gsQ0E3Q0Q7O0tBQU1GLFU7QUErQ05BLFVBQVUsQ0FBQ0ksU0FBWCxHQUF1QjtBQUNuQkgsT0FBSyxFQUFFSSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURMO0FBRW5CTCxhQUFXLEVBQUVHLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRlgsQ0FBdkI7QUFLZVAseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTViZWQyMGQxZTAwMDUxNjEzYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmxleCwgQm94LCBUZXh0IH0gZnJvbSAncmltYmxlLXVpJztcbmltcG9ydCBDdXN0b21IZWFkaW5nIGZyb20gJy4uL0N1c3RvbUhlYWRpbmcvQ3VzdG9tSGVhZGluZyc7XG5cbmNvbnN0IEZlYXR1cmVCb3ggPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGltZyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXhcbiAgICAgICAgICAgIG15PXtbJzE1cHgnLCAnMTVweCcsICcyMHB4J119XG4gICAgICAgICAgICBwPXsnMzBweCAyMHB4J31cbiAgICAgICAgICAgIGZsZXhXcmFwPXsnd3JhcCd9XG4gICAgICAgICAgICBib3hTaGFkb3c9eyctNnB4IC02cHggMTVweCAtMTJweCAjMzg3NjY5LCAwcHggMTJweCAxNXB4IDAgIzEyMjYyMid9XG4gICAgICAgICAgICBiZz17JyMyMjQ1M0QnfVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXtbJzEwcHgnLCAnMTBweCcsICcxOXB4J119XG4gICAgICAgICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e1snNTBweCcsICc1MHB4JywgJzEwMHB4J119XG4gICAgICAgICAgICAgICAgd2lkdGg9e1snNTBweCcsICc1MHB4JywgJzEwMHB4J119XG4gICAgICAgICAgICAgICAgbXI9e1snMjBweCcsICcyMHB4JywgJzQwcHgnXX1cbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9eyc1MCUnfVxuICAgICAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIGFzPXsnaW1nJ31cbiAgICAgICAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgd2lkdGg9e1tcbiAgICAgICAgICAgICAgICAgICAgJ2NhbGMoMTAwJSAtIDcwcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NhbGMoMTAwJSAtIDcwcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NhbGMoMTAwJSAtIDE0MHB4KScsXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDdXN0b21IZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgIGFzPXsnaDInfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17JyNERkRGREYnfVxuICAgICAgICAgICAgICAgICAgICBtYj17Wyc1cHgnLCAnNXB4JywgJzEwcHgnXX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eycxMDAlJ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L0N1c3RvbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEN1c3RvbUhlYWRpbmcgYXM9eydoMSd9IHdpZHRoPXsnMTAwJSd9PlxuICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9DdXN0b21IZWFkaW5nPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgKTtcbn07XG5cbkZlYXR1cmVCb3gucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVCb3g7XG4iXSwic291cmNlUm9vdCI6IiJ9