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
  console.log(store.question);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      description = _useState[0],
      setDescription = _useState[1];

  var putQuestion = function putQuestion() {
    store.question.putQuestion({
      tag: localStorage.getItem('tag'),
      title: localStorage.getItem('title'),
      description: description
    });
  };

  var handleChange = function handleChange(e) {
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  var handleDone = function handleDone() {
    putQuestion();
    setTimeout(5000);
    getQuestion();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
  };

  var getQuestion = function getQuestion() {
    console.log(store.question.questions);
  };

  var handleBack = function handleBack() {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.back();
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
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
      lineNumber: 40
    },
    __self: this
  }), __jsx("button", {
    onClick: handleBack,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Back"), __jsx("button", {
    onClick: handleDone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Done"));
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ })

})
//# sourceMappingURL=description.js.cbb7890f7e4f07feedb5.hot-update.js.map