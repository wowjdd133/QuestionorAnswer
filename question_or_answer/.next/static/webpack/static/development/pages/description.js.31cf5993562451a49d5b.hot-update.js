webpackHotUpdate("static\\development\\pages\\description.js",{

/***/ "./components/Description.js":
/*!***********************************!*\
  !*** ./components/Description.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\QuestionorAnswer\\question_or_answer\\components\\Description.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Description = function Description(_ref) {
  var store = _ref.store;
  console.log(store);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      description = _useState[0],
      setDescription = _useState[1];

  var handleChange = function handleChange(e) {
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  var handleDone = function handleDone() {
    pushQuestion();
    setTimeout(5000);
    getQuestion();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
  };

  var getQuestion = function getQuestion() {
    console.log(questions);
  };

  var handleBack = function handleBack() {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.back();
  };

  var pushQuestion = function pushQuestion() {
    store.questions.push({
      tag: localStorage.getItem('tag'),
      title: localStorage.getItem('title'),
      description: description
    });
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("textarea", {
    onChange: handleChange,
    className: "description-textarea",
    style: {
      width: 300,
      height: 400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("button", {
    onClick: handleBack,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Back"), __jsx("button", {
    onClick: handleDone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Done"));
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ })

})
//# sourceMappingURL=description.js.31cf5993562451a49d5b.hot-update.js.map