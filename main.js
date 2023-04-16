/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/json-stringify-safe/stringify.js":
/*!*******************************************************!*\
  !*** ./node_modules/json-stringify-safe/stringify.js ***!
  \*******************************************************/
/***/ ((module, exports) => {

exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}


/***/ }),

/***/ "./src/modules/UI_2.js":
/*!*****************************!*\
  !*** ./src/modules/UI_2.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




function UI() {
  //DOM cache
  const inboxButton = document.querySelector(".inbox");
  const todayButton = document.querySelector(".today");
  const thisWeekButton = document.querySelector(".this-week");
  const addNewProjectButton = document.querySelector(".add-project");
  const newProjectNameInput = document.querySelector("#project-name");
  const addNewProjectFormButton = document.querySelector(
    ".add-project-form .add"
  );
  const addNewTaskButton = document.querySelector(".add-task");
  const newTaskNameInput = document.querySelector("#task-name");
  const newTaskDateInput = document.querySelector("#task-date");
  const addNewTaskFormButton = document.querySelector(".add-task-form .add");
  const cancelNewTaskButton = document.querySelector(".add-task-form .cancel");
  const selectedProjectNameH1 = document.querySelector(".project-name");
  const addTaskForm = document.querySelector(".add-task-form");
  const tasksDiv = document.querySelector(".tasks");
  const completedTasksDiv = document.querySelector(".completed-tasks");
  const projectsDiv = document.querySelector(".projects");
  const addNewProjectForm = document.querySelector(".add-project-form");
  const projectFormButtonsDiv = document.querySelector(".project-form-buttons");

  //Active project
  let projectSelected = _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.selectProject("Inbox");

  //Event handlers
  function projectSelectHandler(e) {
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
    closeAddProjectForm();
    closeAddTaskForm();
    selectAllProjectButtons().forEach((projBut) => {
      projBut.classList.remove("active");
    });
    let selectedButton =
      e.target.tagName === "BUTTON" ? e.target : e.target.closest("button");
    selectedButton.classList.add("active");
    projectSelected = _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.selectProject(selectedButton.textContent.trim());
    // remove project *******
    if (Array.from(e.target.classList).includes("fa-trash")) {
      _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.removeProject(projectSelected.name);
      projectSelected = _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.selectProject("Inbox");
      inboxButton.classList.add("active");
    }
    // remove project *******
    if (
      projectSelected.name === "Today" ||
      projectSelected.name === "This week"
    ) {
      addNewTaskButton.classList.add("composite");
      addTaskForm.classList.add("composite");
    } else {
      addNewTaskButton.classList.remove("composite");
      addTaskForm.classList.remove("composite");
    }
    selectedProjectNameH1.textContent = projectSelected.name;
    populateTasks();
    populateProjects(projectSelected.name);
  }
  function taskCompleteToggleHandler(e) {
    closeAddTaskForm();
    projectSelected.completeTaskToggle(e.target.id);
    populateTasks(projectSelected);
  }

  function taskDetailsUpdateHandler(e) {
    allElementsFocusReset();
    closeAddTaskForm();
    let localParent = e.target.closest("button");
    let previousTaskName = localParent.querySelector(".fa-circle")
      ? localParent.querySelector(".fa-circle").id
      : localParent.querySelector(".fa-circle-check").id;
    let previousTaskDate = projectSelected.selectTask(previousTaskName).date;
    let paragraphs = localParent.querySelectorAll("p");
    paragraphs.forEach((para) => para.classList.toggle("active"));
    let inputs = localParent.querySelectorAll("input");
    inputs.forEach((input) => {
      input.classList.toggle("active");
      if (input.type === "text") input.value = previousTaskName;
      else input.value = previousTaskDate;
    });
    let editIcon = localParent.querySelector(".fa-square-pen");
    editIcon.classList.add("active");
    editIcon.addEventListener("click", saveTaskEditsHandler);
  }

  function saveTaskEditsHandler(e) {
    let localParent = e.target.closest("button");
    let taskTextInput = localParent.querySelector(".input-task-name");
    let taskDateInput = localParent.querySelector(".input-due-date");
    let previousTaskName = localParent.querySelector(".fa-circle")
      ? localParent.querySelector(".fa-circle").id
      : localParent.querySelector(".fa-circle-check").id;
    let taskToModify = projectSelected.selectTask(previousTaskName);
    taskToModify.setName(taskTextInput.value);
    taskToModify.setDate(taskDateInput.value);
    populateTasks();
  }

  function deleteTaskHandler(e) {
    closeAddTaskForm();
    let localParent = e.target.closest("button");

    let previousTaskName = localParent.querySelector(".fa-circle")
      ? localParent.querySelector(".fa-circle").id
      : localParent.querySelector(".fa-circle-check").id;
    let taskToDelete = projectSelected.selectTask(previousTaskName);
    projectSelected.removeTask(taskToDelete);
    populateTasks();
  }

  function addProjectHandler(e) {
    _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectNameInput.value));
    populateProjects();
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
  }

  function addTaskHandler(e) {
    projectSelected.addTask(
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"](newTaskNameInput.value, newTaskDateInput.value)
    );
    populateTasks(projectSelected);
    closeAddTaskForm();
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
  }

  function toggleAddProjectFormHandler(e) {
    addNewProjectForm.classList.toggle("active");
    addNewProjectButton.classList.toggle("active");
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
    closeAddTaskForm();
  }

  function toggleAddTaskFormHandler(e) {
    addTaskForm.classList.toggle("active");
    addNewTaskButton.classList.toggle("active");
    populateTasks();
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
    closeAddProjectForm();
  }

  //Event binding
  addNewTaskFormButton.addEventListener("click", addTaskHandler);
  addNewProjectFormButton.addEventListener("click", addProjectHandler);
  addNewProjectButton.addEventListener("click", toggleAddProjectFormHandler);
  projectFormButtonsDiv.addEventListener("click", toggleAddProjectFormHandler);
  inboxButton.addEventListener("click", projectSelectHandler);
  todayButton.addEventListener("click", projectSelectHandler);
  thisWeekButton.addEventListener("click", projectSelectHandler);
  addNewTaskButton.addEventListener("click", toggleAddTaskFormHandler);
  cancelNewTaskButton.addEventListener("click", toggleAddTaskFormHandler);

  //   Worker functions
  function populateTasks() {
    tasksDiv.textContent = "";
    completedTasksDiv.textContent = "";
    projectSelected.tasks.forEach((t) => {
      let taskButton = document.createElement("button");
      taskButton.classList.add("button-task");

      let taskButtonLeftDiv = document.createElement("div");
      taskButtonLeftDiv.classList.add("left-task-panel");

      let completeTaskIcon = document.createElement("i");
      completeTaskIcon.setAttribute("id", t.name);
      completeTaskIcon.classList.add("fa-regular");
      completeTaskIcon.classList.add("fa-circle");
      let taskContentPara = document.createElement("p");
      taskContentPara.classList.add("task-content");
      taskContentPara.textContent =
        projectSelected.name === "Today" || projectSelected.name === "This week"
          ? `${t.name} -------------------- (${t.projectName})`
          : t.name;
      let taskContentModificationInput = document.createElement("input");
      taskContentModificationInput.type = "text";
      taskContentModificationInput.classList.add("input-task-name");
      taskButtonLeftDiv.append(
        completeTaskIcon,
        taskContentPara,
        taskContentModificationInput
      );

      let taskButtonRightDiv = document.createElement("div");
      taskButtonRightDiv.classList.add("right-task-panel");
      let dueDatePara = document.createElement("p");
      dueDatePara.classList.add("due-date");
      dueDatePara.textContent = t.date;
      let dateInput = document.createElement("input");
      dateInput.classList.add("input-due-date");
      dateInput.type = "date";
      let trashTaskIcon = document.createElement("i");
      trashTaskIcon.classList.add("fa-solid");
      trashTaskIcon.classList.add("fa-trash");

      let updateTaskIcon = document.createElement("i");
      updateTaskIcon.classList.add("fa-solid");
      updateTaskIcon.classList.add("fa-square-pen");
      taskButtonRightDiv.append(
        dueDatePara,
        dateInput,
        updateTaskIcon,
        trashTaskIcon
      );

      taskButton.append(taskButtonLeftDiv, taskButtonRightDiv);
      tasksDiv.appendChild(taskButton);

      completeTaskIcon.addEventListener("click", taskCompleteToggleHandler);
      taskContentPara.addEventListener("click", taskDetailsUpdateHandler);
      dueDatePara.addEventListener("click", taskDetailsUpdateHandler);
      trashTaskIcon.addEventListener("click", deleteTaskHandler);
    });
    projectSelected.completedTasks.forEach((t) => {
      let taskButton = document.createElement("button");
      taskButton.classList.add("button-task");

      let taskButtonLeftDiv = document.createElement("div");
      taskButtonLeftDiv.classList.add("left-task-panel");

      let completeTaskIcon = document.createElement("i");
      completeTaskIcon.setAttribute("id", t.name);
      completeTaskIcon.classList.add("fa-solid");
      completeTaskIcon.classList.add("fa-circle-check");
      let taskContentPara = document.createElement("p");
      taskContentPara.classList.add("task-content");
      taskContentPara.textContent =
        projectSelected.name === "Today" || projectSelected.name === "This week"
          ? `${t.name} -------------------- (${t.projectName})`
          : t.name;
      let taskContentModificationInput = document.createElement("input");
      taskContentModificationInput.type = "text";
      taskContentModificationInput.classList.add("input-task-name");
      taskButtonLeftDiv.append(
        completeTaskIcon,
        taskContentPara,
        taskContentModificationInput
      );

      let taskButtonRightDiv = document.createElement("div");
      taskButtonRightDiv.classList.add("right-task-panel");
      let dueDatePara = document.createElement("p");
      dueDatePara.classList.add("due-date");
      dueDatePara.textContent = t.date;
      let dateInput = document.createElement("input");
      dateInput.classList.add("input-due-date");
      dateInput.type = "date";
      let trashTaskIcon = document.createElement("i");
      trashTaskIcon.classList.add("fa-solid");
      trashTaskIcon.classList.add("fa-trash");
      let updateTaskIcon = document.createElement("i");
      updateTaskIcon.classList.add("fa-solid");
      updateTaskIcon.classList.add("fa-square-pen");
      taskButtonRightDiv.append(
        dueDatePara,
        dateInput,
        updateTaskIcon,
        trashTaskIcon
      );

      taskButton.append(taskButtonLeftDiv, taskButtonRightDiv);
      completedTasksDiv.appendChild(taskButton);

      completeTaskIcon.addEventListener("click", taskCompleteToggleHandler);
      taskContentPara.addEventListener("click", taskDetailsUpdateHandler);
      dueDatePara.addEventListener("click", taskDetailsUpdateHandler);
      trashTaskIcon.addEventListener("click", deleteTaskHandler);
    });
  }

  function populateProjects(activeProjectName) {
    projectsDiv.textContent = "";
    _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.forEach((p) => {
      if (p.name !== "Inbox" && !p.composite) {
        let projectButton = document.createElement("button");
        projectButton.classList.add("button-project");
        let projectButtonLeftDiv = document.createElement("div");
        projectButtonLeftDiv.classList.add("left-project-panel");
        let projectButtonRightDiv = document.createElement("div");
        projectButtonRightDiv.classList.add("right-project-panel");
        let projectIcon = document.createElement("i");
        projectIcon.classList.add("fa-solid");
        projectIcon.classList.add("fa-tasks");
        let trashIcon = document.createElement("i");
        trashIcon.classList.add("fa-solid");
        trashIcon.classList.add("fa-trash");
        let projectNameSpan = document.createElement("span");
        projectNameSpan.textContent = p.name;
        projectButton.addEventListener("click", projectSelectHandler);
        projectButtonLeftDiv.append(projectIcon, projectNameSpan);
        projectButtonRightDiv.append(trashIcon);
        projectButton.append(projectButtonLeftDiv, projectButtonRightDiv);
        projectsDiv.appendChild(projectButton);
        if (p.name === activeProjectName) projectButton.classList.add("active");
      }
    });
  }

  function closeAddProjectForm() {
    addNewProjectForm.classList.remove("active");
    addNewProjectButton.classList.remove("active");
  }
  function closeAddTaskForm() {
    addTaskForm.classList.remove("active");
    addNewTaskButton.classList.remove("active");
  }

  function selectAllProjectButtons() {
    return document.querySelectorAll(".button-project");
  }

  function allElementsFocusReset() {
    document.querySelectorAll("*").forEach((e) => e.classList.remove("active"));
    document.querySelectorAll("input").forEach((i) => (i.value = ""));
  }

  //   initializers
  selectedProjectNameH1.textContent = projectSelected.name;
  populateProjects();
  populateTasks(projectSelected);
}

window.todo = {
  todoList: _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList,
  Project: _project__WEBPACK_IMPORTED_MODULE_1__["default"],
  Task: _task__WEBPACK_IMPORTED_MODULE_2__["default"],
};


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");

const stringify = __webpack_require__(/*! json-stringify-safe */ "./node_modules/json-stringify-safe/stringify.js");

class Project {
  constructor(name, composite = false) {
    this.name = name;
    this.composite = composite;
    this.tasks = [];
    this.completedTasks = [];
    this.type = this.constructor.name;
  }

  addTask(task) {
    task.project = this;
    task.projectName = this.name;
    this.tasks.push(task);
    localStorage.setItem("todoList", stringify(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList, null, 2));
  }
  removeTask(removeTask) {
    this.tasks = this.tasks.filter((task) => task !== removeTask);
    this.completedTasks = this.completedTasks.filter(
      (task) => task !== removeTask
    );
    localStorage.setItem("todoList", stringify(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList, null, 2));
  }
  addCompletedTask(task) {
    task.project = this;
    task.projectName = this.name;
    this.completedTasks.push(task);
    localStorage.setItem("todoList", stringify(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList, null, 2));
  }
  removeCompletedTask(removeTask) {
    this.completedTasks.filter((task) => task !== removeTask);
  }
  allTasks() {
    return this.tasks.concat(this.completedTasks);
  }
  selectTask(taskName) {
    return this.allTasks().filter((task) => {
      return task.name === taskName;
    })[0];
  }
  completeTaskToggle(taskToToggleName) {
    let taskSelected = this.selectTask(taskToToggleName);
    taskSelected.toggleTaskComplete();
    let project = taskSelected.project;
    let allTasks = project.allTasks();
    project.tasks = [];
    project.completedTasks = [];
    allTasks.forEach((task) => {
      if (task.complete) task.project.addCompletedTask(task);
      else task.project.addTask(task);
    });
    project.todo.assembleComposites();
  }
}


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");
const stringify = __webpack_require__(/*! json-stringify-safe */ "./node_modules/json-stringify-safe/stringify.js");


class Task {
  constructor(name = "No name", date, complete = false) {
    this.name = name;
    this.date = date || "No date";
    this.complete = complete;
    this.type = this.constructor.name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name || "No name";
    localStorage.setItem("todoList", stringify(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList, null, 2));
  }
  getDate() {
    return this.date;
  }
  setDate(date) {
    this.date = date || "No date";
    localStorage.setItem("todoList", stringify(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList, null, 2));
  }
  toggleTaskComplete() {
    this.complete = !this.complete;
  }
}


/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");



const stringify = __webpack_require__(/*! json-stringify-safe */ "./node_modules/json-stringify-safe/stringify.js");

const todoList = {
  inbox: new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox"),
  today: new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Today", true),
  thisWeek: new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("This week", true),
  projects: [],
  addProject(project) {
    project.todo = this;
    this.projects.push(project);
    localStorage.setItem("todoList", stringify(this, null, 2));
  },
  removeProject(projectName) {
    this.projects = this.projects.filter(
      (project) => project.name !== projectName
    );
  },
  assembleComposites() {
    let composites = this.projects.filter((p) => p.composite);
    composites.forEach((c) => {
      c.tasks.length = 0;
      c.completedTasks.length = 0;
      if (c.name === "Today") {
        this.projects.forEach((p) => {
          if (p.composite) return;
          let allTasks = p.allTasks();
          allTasks.forEach((t) => {
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(t.date))) {
              if (t.complete) {
                this.today.completedTasks.push(t);
              } else {
                this.today.tasks.push(t);
              }
            }
          });
        });
      } else if (c.name === "This week") {
        this.projects.forEach((p) => {
          if (p.composite) return;
          let allTasks = p.allTasks();
          allTasks.forEach((t) => {
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(t.date), { weekStartsOn: 1 })) {
              if (t.complete) {
                this.thisWeek.completedTasks.push(t);
              } else {
                this.thisWeek.tasks.push(t);
              }
            }
          });
        });
      }
    });
    localStorage.setItem("todoList", stringify(this, null, 2));
  },
  selectProject(projectName) {
    this.assembleComposites();
    return this.projects.filter((project) => {
      return project.name === projectName;
    })[0];
  },
  // console method
  displayProject(projectName) {
    let project = this.selectProject(projectName);
    for (let key in project) {
      if (key === "name") console.log(`name: ${project[key]}`);
      else if (key === "tasks") {
        project[key].forEach((task, index) =>
          console.log(
            `Task${index + 1}: Name - ${task.name} Date - ${task.date} ${
              project.name !== "Today" && project.name !== "This week"
                ? ""
                : `(${project.name})`
            }`
          )
        );
      } else {
        project[key].forEach((completeTask, index) =>
          console.log(
            `Completed Task${index + 1}: Name - ${completeTask.name} Date - ${
              completeTask.date
            } ${
              project.name !== "Today" && project.name !== "This week"
                ? ""
                : `(${project.name})`
            }`
          )
        );
      }
    }
  },
};

if (localStorage.getItem("todoList")) {
  // Grab data from localStorage
  let todoListStore = JSON.parse(localStorage.getItem("todoList"));
  let allStoredTasks = [];
  todoListStore.projects.forEach((p) => {
    if (!p.composite) {
      // && p.name !== 'Inbox'
      if (p.tasks.length !== 0 || p.completedTasks.length !== 0) {
        p.tasks.forEach((t) => allStoredTasks.push(t));
        p.completedTasks.forEach((t) => allStoredTasks.push(t));
      } else allStoredTasks.push(p);
    }
  });
  let projects = {};
  allStoredTasks.forEach((t) => {
    if (t.type === "Task") {
      projects[t.projectName] = projects[t.projectName] || [];
      projects[t.projectName].push(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](t.name, t.date, t.complete));
    } else if (t.type === "Project") {
      projects[t.name] = projects[t.name] || [];
    }
  });
  for (let project in projects) {
    let projObj = project === "Inbox" ? todoList.inbox : new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](project);
    projects[project].forEach((t) => {
      if (t.complete) projObj.addCompletedTask(t);
      else projObj.addTask(t);
    });
    todoList.addProject(projObj);
  }
} else {
  // Create starter projects and tasks:
  const starterProject1 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Learn Javascript");
  const starterProject2 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Learn more Javascript");
  const starterTasks1 = [
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Write code1", "2023-04-10"),
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Refactor old code1", "2023-04-12"),
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("foo1", "2023-04-14"),
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("bar1", "2023-04-20"),
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("baz1", "2023-04-25"),
  ];
  const starterTasks2 = [
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Write code2", "2023-04-11"),
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Refactor old code2", "2023-04-13"),
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("foo2", "2023-04-16"),
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("bar2", "2023-04-20"),
    new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("baz2", "2023-04-25"),
  ];

  todoList.addProject(starterProject1);
  starterTasks1.forEach((task) => starterProject1.addTask(task));

  todoList.addProject(starterProject2);
  starterTasks2.forEach((task) => starterProject2.addTask(task));
}
if (!todoList.projects.includes(todoList.inbox))
  todoList.addProject(todoList.inbox);
todoList.addProject(todoList.today);
todoList.addProject(todoList.thisWeek);
todoList.assembleComposites("Today");
todoList.assembleComposites("This week");


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI_2 */ "./src/modules/UI_2.js");


document.addEventListener("DOMContentLoaded", _modules_UI_2__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQyw4Q0FBOEMscURBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvanNvbi1zdHJpbmdpZnktc2FmZS9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSV8yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5leHBvcnRzLmdldFNlcmlhbGl6ZSA9IHNlcmlhbGl6ZXJcblxuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaiwgcmVwbGFjZXIsIHNwYWNlcywgY3ljbGVSZXBsYWNlcikge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBzZXJpYWxpemVyKHJlcGxhY2VyLCBjeWNsZVJlcGxhY2VyKSwgc3BhY2VzKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVyKHJlcGxhY2VyLCBjeWNsZVJlcGxhY2VyKSB7XG4gIHZhciBzdGFjayA9IFtdLCBrZXlzID0gW11cblxuICBpZiAoY3ljbGVSZXBsYWNlciA9PSBudWxsKSBjeWNsZVJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGlmIChzdGFja1swXSA9PT0gdmFsdWUpIHJldHVybiBcIltDaXJjdWxhciB+XVwiXG4gICAgcmV0dXJuIFwiW0NpcmN1bGFyIH4uXCIgKyBrZXlzLnNsaWNlKDAsIHN0YWNrLmluZGV4T2YodmFsdWUpKS5qb2luKFwiLlwiKSArIFwiXVwiXG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgdGhpc1BvcyA9IHN0YWNrLmluZGV4T2YodGhpcylcbiAgICAgIH50aGlzUG9zID8gc3RhY2suc3BsaWNlKHRoaXNQb3MgKyAxKSA6IHN0YWNrLnB1c2godGhpcylcbiAgICAgIH50aGlzUG9zID8ga2V5cy5zcGxpY2UodGhpc1BvcywgSW5maW5pdHksIGtleSkgOiBrZXlzLnB1c2goa2V5KVxuICAgICAgaWYgKH5zdGFjay5pbmRleE9mKHZhbHVlKSkgdmFsdWUgPSBjeWNsZVJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgZWxzZSBzdGFjay5wdXNoKHZhbHVlKVxuXG4gICAgcmV0dXJuIHJlcGxhY2VyID09IG51bGwgPyB2YWx1ZSA6IHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVSSgpIHtcbiAgLy9ET00gY2FjaGVcbiAgY29uc3QgaW5ib3hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xuICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XG4gIGNvbnN0IHRoaXNXZWVrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGlzLXdlZWtcIik7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBjb25zdCBuZXdQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIik7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3RGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5hZGQtcHJvamVjdC1mb3JtIC5hZGRcIlxuICApO1xuICBjb25zdCBhZGROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgY29uc3QgbmV3VGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpO1xuICBjb25zdCBuZXdUYXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIik7XG4gIGNvbnN0IGFkZE5ld1Rhc2tGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtIC5hZGRcIik7XG4gIGNvbnN0IGNhbmNlbE5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZvcm0gLmNhbmNlbFwiKTtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0TmFtZUgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIik7XG4gIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtXCIpO1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gIGNvbnN0IGNvbXBsZXRlZFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtdGFza3NcIik7XG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgY29uc3QgYWRkTmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWZvcm1cIik7XG4gIGNvbnN0IHByb2plY3RGb3JtQnV0dG9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtLWJ1dHRvbnNcIik7XG5cbiAgLy9BY3RpdmUgcHJvamVjdFxuICBsZXQgcHJvamVjdFNlbGVjdGVkID0gdG9kb0xpc3Quc2VsZWN0UHJvamVjdChcIkluYm94XCIpO1xuXG4gIC8vRXZlbnQgaGFuZGxlcnNcbiAgZnVuY3Rpb24gcHJvamVjdFNlbGVjdEhhbmRsZXIoZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKChpKSA9PiAoaS52YWx1ZSA9IFwiXCIpKTtcbiAgICBjbG9zZUFkZFByb2plY3RGb3JtKCk7XG4gICAgY2xvc2VBZGRUYXNrRm9ybSgpO1xuICAgIHNlbGVjdEFsbFByb2plY3RCdXR0b25zKCkuZm9yRWFjaCgocHJvakJ1dCkgPT4ge1xuICAgICAgcHJvakJ1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGxldCBzZWxlY3RlZEJ1dHRvbiA9XG4gICAgICBlLnRhcmdldC50YWdOYW1lID09PSBcIkJVVFRPTlwiID8gZS50YXJnZXQgOiBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xuICAgIHNlbGVjdGVkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgcHJvamVjdFNlbGVjdGVkID0gdG9kb0xpc3Quc2VsZWN0UHJvamVjdChzZWxlY3RlZEJ1dHRvbi50ZXh0Q29udGVudC50cmltKCkpO1xuICAgIC8vIHJlbW92ZSBwcm9qZWN0ICoqKioqKipcbiAgICBpZiAoQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKFwiZmEtdHJhc2hcIikpIHtcbiAgICAgIHRvZG9MaXN0LnJlbW92ZVByb2plY3QocHJvamVjdFNlbGVjdGVkLm5hbWUpO1xuICAgICAgcHJvamVjdFNlbGVjdGVkID0gdG9kb0xpc3Quc2VsZWN0UHJvamVjdChcIkluYm94XCIpO1xuICAgICAgaW5ib3hCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIHByb2plY3QgKioqKioqKlxuICAgIGlmIChcbiAgICAgIHByb2plY3RTZWxlY3RlZC5uYW1lID09PSBcIlRvZGF5XCIgfHxcbiAgICAgIHByb2plY3RTZWxlY3RlZC5uYW1lID09PSBcIlRoaXMgd2Vla1wiXG4gICAgKSB7XG4gICAgICBhZGROZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wb3NpdGVcIik7XG4gICAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiY29tcG9zaXRlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGROZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wb3NpdGVcIik7XG4gICAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcG9zaXRlXCIpO1xuICAgIH1cbiAgICBzZWxlY3RlZFByb2plY3ROYW1lSDEudGV4dENvbnRlbnQgPSBwcm9qZWN0U2VsZWN0ZWQubmFtZTtcbiAgICBwb3B1bGF0ZVRhc2tzKCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0cyhwcm9qZWN0U2VsZWN0ZWQubmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gdGFza0NvbXBsZXRlVG9nZ2xlSGFuZGxlcihlKSB7XG4gICAgY2xvc2VBZGRUYXNrRm9ybSgpO1xuICAgIHByb2plY3RTZWxlY3RlZC5jb21wbGV0ZVRhc2tUb2dnbGUoZS50YXJnZXQuaWQpO1xuICAgIHBvcHVsYXRlVGFza3MocHJvamVjdFNlbGVjdGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhc2tEZXRhaWxzVXBkYXRlSGFuZGxlcihlKSB7XG4gICAgYWxsRWxlbWVudHNGb2N1c1Jlc2V0KCk7XG4gICAgY2xvc2VBZGRUYXNrRm9ybSgpO1xuICAgIGxldCBsb2NhbFBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIik7XG4gICAgbGV0IHByZXZpb3VzVGFza05hbWUgPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZVwiKVxuICAgICAgPyBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZVwiKS5pZFxuICAgICAgOiBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZS1jaGVja1wiKS5pZDtcbiAgICBsZXQgcHJldmlvdXNUYXNrRGF0ZSA9IHByb2plY3RTZWxlY3RlZC5zZWxlY3RUYXNrKHByZXZpb3VzVGFza05hbWUpLmRhdGU7XG4gICAgbGV0IHBhcmFncmFwaHMgPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKTtcbiAgICBwYXJhZ3JhcGhzLmZvckVhY2goKHBhcmEpID0+IHBhcmEuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSk7XG4gICAgbGV0IGlucHV0cyA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBpZiAoaW5wdXQudHlwZSA9PT0gXCJ0ZXh0XCIpIGlucHV0LnZhbHVlID0gcHJldmlvdXNUYXNrTmFtZTtcbiAgICAgIGVsc2UgaW5wdXQudmFsdWUgPSBwcmV2aW91c1Rhc2tEYXRlO1xuICAgIH0pO1xuICAgIGxldCBlZGl0SWNvbiA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtc3F1YXJlLXBlblwiKTtcbiAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVGFza0VkaXRzSGFuZGxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlVGFza0VkaXRzSGFuZGxlcihlKSB7XG4gICAgbGV0IGxvY2FsUGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKTtcbiAgICBsZXQgdGFza1RleHRJbnB1dCA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay1uYW1lXCIpO1xuICAgIGxldCB0YXNrRGF0ZUlucHV0ID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1kdWUtZGF0ZVwiKTtcbiAgICBsZXQgcHJldmlvdXNUYXNrTmFtZSA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlXCIpXG4gICAgICA/IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlXCIpLmlkXG4gICAgICA6IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlLWNoZWNrXCIpLmlkO1xuICAgIGxldCB0YXNrVG9Nb2RpZnkgPSBwcm9qZWN0U2VsZWN0ZWQuc2VsZWN0VGFzayhwcmV2aW91c1Rhc2tOYW1lKTtcbiAgICB0YXNrVG9Nb2RpZnkuc2V0TmFtZSh0YXNrVGV4dElucHV0LnZhbHVlKTtcbiAgICB0YXNrVG9Nb2RpZnkuc2V0RGF0ZSh0YXNrRGF0ZUlucHV0LnZhbHVlKTtcbiAgICBwb3B1bGF0ZVRhc2tzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUYXNrSGFuZGxlcihlKSB7XG4gICAgY2xvc2VBZGRUYXNrRm9ybSgpO1xuICAgIGxldCBsb2NhbFBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIik7XG5cbiAgICBsZXQgcHJldmlvdXNUYXNrTmFtZSA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlXCIpXG4gICAgICA/IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlXCIpLmlkXG4gICAgICA6IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlLWNoZWNrXCIpLmlkO1xuICAgIGxldCB0YXNrVG9EZWxldGUgPSBwcm9qZWN0U2VsZWN0ZWQuc2VsZWN0VGFzayhwcmV2aW91c1Rhc2tOYW1lKTtcbiAgICBwcm9qZWN0U2VsZWN0ZWQucmVtb3ZlVGFzayh0YXNrVG9EZWxldGUpO1xuICAgIHBvcHVsYXRlVGFza3MoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3RIYW5kbGVyKGUpIHtcbiAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lSW5wdXQudmFsdWUpKTtcbiAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGkpID0+IChpLnZhbHVlID0gXCJcIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXIoZSkge1xuICAgIHByb2plY3RTZWxlY3RlZC5hZGRUYXNrKFxuICAgICAgbmV3IFRhc2sobmV3VGFza05hbWVJbnB1dC52YWx1ZSwgbmV3VGFza0RhdGVJbnB1dC52YWx1ZSlcbiAgICApO1xuICAgIHBvcHVsYXRlVGFza3MocHJvamVjdFNlbGVjdGVkKTtcbiAgICBjbG9zZUFkZFRhc2tGb3JtKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGkpID0+IChpLnZhbHVlID0gXCJcIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWRkUHJvamVjdEZvcm1IYW5kbGVyKGUpIHtcbiAgICBhZGROZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGFkZE5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaSkgPT4gKGkudmFsdWUgPSBcIlwiKSk7XG4gICAgY2xvc2VBZGRUYXNrRm9ybSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWRkVGFza0Zvcm1IYW5kbGVyKGUpIHtcbiAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGFkZE5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBwb3B1bGF0ZVRhc2tzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGkpID0+IChpLnZhbHVlID0gXCJcIikpO1xuICAgIGNsb3NlQWRkUHJvamVjdEZvcm0oKTtcbiAgfVxuXG4gIC8vRXZlbnQgYmluZGluZ1xuICBhZGROZXdUYXNrRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0hhbmRsZXIpO1xuICBhZGROZXdQcm9qZWN0Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdEhhbmRsZXIpO1xuICBhZGROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVBZGRQcm9qZWN0Rm9ybUhhbmRsZXIpO1xuICBwcm9qZWN0Rm9ybUJ1dHRvbnNEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFkZFByb2plY3RGb3JtSGFuZGxlcik7XG4gIGluYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gIHRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gIHRoaXNXZWVrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gIGFkZE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFkZFRhc2tGb3JtSGFuZGxlcik7XG4gIGNhbmNlbE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFkZFRhc2tGb3JtSGFuZGxlcik7XG5cbiAgLy8gICBXb3JrZXIgZnVuY3Rpb25zXG4gIGZ1bmN0aW9uIHBvcHVsYXRlVGFza3MoKSB7XG4gICAgdGFza3NEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbXBsZXRlZFRhc2tzRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwcm9qZWN0U2VsZWN0ZWQudGFza3MuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgbGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXRhc2tcIik7XG5cbiAgICAgIGxldCB0YXNrQnV0dG9uTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrQnV0dG9uTGVmdERpdi5jbGFzc0xpc3QuYWRkKFwibGVmdC10YXNrLXBhbmVsXCIpO1xuXG4gICAgICBsZXQgY29tcGxldGVUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgY29tcGxldGVUYXNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0Lm5hbWUpO1xuICAgICAgY29tcGxldGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiKTtcbiAgICAgIGNvbXBsZXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLWNpcmNsZVwiKTtcbiAgICAgIGxldCB0YXNrQ29udGVudFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRhc2tDb250ZW50UGFyYS5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuICAgICAgdGFza0NvbnRlbnRQYXJhLnRleHRDb250ZW50ID1cbiAgICAgICAgcHJvamVjdFNlbGVjdGVkLm5hbWUgPT09IFwiVG9kYXlcIiB8fCBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gXCJUaGlzIHdlZWtcIlxuICAgICAgICAgID8gYCR7dC5uYW1lfSAtLS0tLS0tLS0tLS0tLS0tLS0tLSAoJHt0LnByb2plY3ROYW1lfSlgXG4gICAgICAgICAgOiB0Lm5hbWU7XG4gICAgICBsZXQgdGFza0NvbnRlbnRNb2RpZmljYXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgdGFza0NvbnRlbnRNb2RpZmljYXRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGFzay1uYW1lXCIpO1xuICAgICAgdGFza0J1dHRvbkxlZnREaXYuYXBwZW5kKFxuICAgICAgICBjb21wbGV0ZVRhc2tJY29uLFxuICAgICAgICB0YXNrQ29udGVudFBhcmEsXG4gICAgICAgIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXRcbiAgICAgICk7XG5cbiAgICAgIGxldCB0YXNrQnV0dG9uUmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0J1dHRvblJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoXCJyaWdodC10YXNrLXBhbmVsXCIpO1xuICAgICAgbGV0IGR1ZURhdGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBkdWVEYXRlUGFyYS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IHQuZGF0ZTtcbiAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LWR1ZS1kYXRlXCIpO1xuICAgICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICAgIGxldCB0cmFzaFRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICB0cmFzaFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgIHRyYXNoVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXRyYXNoXCIpO1xuXG4gICAgICBsZXQgdXBkYXRlVGFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIHVwZGF0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgIHVwZGF0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zcXVhcmUtcGVuXCIpO1xuICAgICAgdGFza0J1dHRvblJpZ2h0RGl2LmFwcGVuZChcbiAgICAgICAgZHVlRGF0ZVBhcmEsXG4gICAgICAgIGRhdGVJbnB1dCxcbiAgICAgICAgdXBkYXRlVGFza0ljb24sXG4gICAgICAgIHRyYXNoVGFza0ljb25cbiAgICAgICk7XG5cbiAgICAgIHRhc2tCdXR0b24uYXBwZW5kKHRhc2tCdXR0b25MZWZ0RGl2LCB0YXNrQnV0dG9uUmlnaHREaXYpO1xuICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG5cbiAgICAgIGNvbXBsZXRlVGFza0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDb21wbGV0ZVRvZ2dsZUhhbmRsZXIpO1xuICAgICAgdGFza0NvbnRlbnRQYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrRGV0YWlsc1VwZGF0ZUhhbmRsZXIpO1xuICAgICAgZHVlRGF0ZVBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tEZXRhaWxzVXBkYXRlSGFuZGxlcik7XG4gICAgICB0cmFzaFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrSGFuZGxlcik7XG4gICAgfSk7XG4gICAgcHJvamVjdFNlbGVjdGVkLmNvbXBsZXRlZFRhc2tzLmZvckVhY2goKHQpID0+IHtcbiAgICAgIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi10YXNrXCIpO1xuXG4gICAgICBsZXQgdGFza0J1dHRvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0J1dHRvbkxlZnREaXYuY2xhc3NMaXN0LmFkZChcImxlZnQtdGFzay1wYW5lbFwiKTtcblxuICAgICAgbGV0IGNvbXBsZXRlVGFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIGNvbXBsZXRlVGFza0ljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgdC5uYW1lKTtcbiAgICAgIGNvbXBsZXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgY29tcGxldGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtY2lyY2xlLWNoZWNrXCIpO1xuICAgICAgbGV0IHRhc2tDb250ZW50UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdGFza0NvbnRlbnRQYXJhLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRlbnRcIik7XG4gICAgICB0YXNrQ29udGVudFBhcmEudGV4dENvbnRlbnQgPVxuICAgICAgICBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gXCJUb2RheVwiIHx8IHByb2plY3RTZWxlY3RlZC5uYW1lID09PSBcIlRoaXMgd2Vla1wiXG4gICAgICAgICAgPyBgJHt0Lm5hbWV9IC0tLS0tLS0tLS0tLS0tLS0tLS0tICgke3QucHJvamVjdE5hbWV9KWBcbiAgICAgICAgICA6IHQubmFtZTtcbiAgICAgIGxldCB0YXNrQ29udGVudE1vZGlmaWNhdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGFza0NvbnRlbnRNb2RpZmljYXRpb25JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICB0YXNrQ29udGVudE1vZGlmaWNhdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10YXNrLW5hbWVcIik7XG4gICAgICB0YXNrQnV0dG9uTGVmdERpdi5hcHBlbmQoXG4gICAgICAgIGNvbXBsZXRlVGFza0ljb24sXG4gICAgICAgIHRhc2tDb250ZW50UGFyYSxcbiAgICAgICAgdGFza0NvbnRlbnRNb2RpZmljYXRpb25JbnB1dFxuICAgICAgKTtcblxuICAgICAgbGV0IHRhc2tCdXR0b25SaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrQnV0dG9uUmlnaHREaXYuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXRhc2stcGFuZWxcIik7XG4gICAgICBsZXQgZHVlRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGR1ZURhdGVQYXJhLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgICAgIGR1ZURhdGVQYXJhLnRleHRDb250ZW50ID0gdC5kYXRlO1xuICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZHVlLWRhdGVcIik7XG4gICAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgbGV0IHRyYXNoVGFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIHRyYXNoVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgdHJhc2hUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtdHJhc2hcIik7XG4gICAgICBsZXQgdXBkYXRlVGFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIHVwZGF0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgIHVwZGF0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zcXVhcmUtcGVuXCIpO1xuICAgICAgdGFza0J1dHRvblJpZ2h0RGl2LmFwcGVuZChcbiAgICAgICAgZHVlRGF0ZVBhcmEsXG4gICAgICAgIGRhdGVJbnB1dCxcbiAgICAgICAgdXBkYXRlVGFza0ljb24sXG4gICAgICAgIHRyYXNoVGFza0ljb25cbiAgICAgICk7XG5cbiAgICAgIHRhc2tCdXR0b24uYXBwZW5kKHRhc2tCdXR0b25MZWZ0RGl2LCB0YXNrQnV0dG9uUmlnaHREaXYpO1xuICAgICAgY29tcGxldGVkVGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG5cbiAgICAgIGNvbXBsZXRlVGFza0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDb21wbGV0ZVRvZ2dsZUhhbmRsZXIpO1xuICAgICAgdGFza0NvbnRlbnRQYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrRGV0YWlsc1VwZGF0ZUhhbmRsZXIpO1xuICAgICAgZHVlRGF0ZVBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tEZXRhaWxzVXBkYXRlSGFuZGxlcik7XG4gICAgICB0cmFzaFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrSGFuZGxlcik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzKGFjdGl2ZVByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdHNEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHRvZG9MaXN0LnByb2plY3RzLmZvckVhY2goKHApID0+IHtcbiAgICAgIGlmIChwLm5hbWUgIT09IFwiSW5ib3hcIiAmJiAhcC5jb21wb3NpdGUpIHtcbiAgICAgICAgbGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tcHJvamVjdFwiKTtcbiAgICAgICAgbGV0IHByb2plY3RCdXR0b25MZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbkxlZnREaXYuY2xhc3NMaXN0LmFkZChcImxlZnQtcHJvamVjdC1wYW5lbFwiKTtcbiAgICAgICAgbGV0IHByb2plY3RCdXR0b25SaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RCdXR0b25SaWdodERpdi5jbGFzc0xpc3QuYWRkKFwicmlnaHQtcHJvamVjdC1wYW5lbFwiKTtcbiAgICAgICAgbGV0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImZhLXRhc2tzXCIpO1xuICAgICAgICBsZXQgdHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtdHJhc2hcIik7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgcHJvamVjdE5hbWVTcGFuLnRleHRDb250ZW50ID0gcC5uYW1lO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gICAgICAgIHByb2plY3RCdXR0b25MZWZ0RGl2LmFwcGVuZChwcm9qZWN0SWNvbiwgcHJvamVjdE5hbWVTcGFuKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvblJpZ2h0RGl2LmFwcGVuZCh0cmFzaEljb24pO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmFwcGVuZChwcm9qZWN0QnV0dG9uTGVmdERpdiwgcHJvamVjdEJ1dHRvblJpZ2h0RGl2KTtcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGlmIChwLm5hbWUgPT09IGFjdGl2ZVByb2plY3ROYW1lKSBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUFkZFByb2plY3RGb3JtKCkge1xuICAgIGFkZE5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgYWRkTmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGNsb3NlQWRkVGFza0Zvcm0oKSB7XG4gICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBhZGROZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RBbGxQcm9qZWN0QnV0dG9ucygpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tcHJvamVjdFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbEVsZW1lbnRzRm9jdXNSZXNldCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKChlKSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKChpKSA9PiAoaS52YWx1ZSA9IFwiXCIpKTtcbiAgfVxuXG4gIC8vICAgaW5pdGlhbGl6ZXJzXG4gIHNlbGVjdGVkUHJvamVjdE5hbWVIMS50ZXh0Q29udGVudCA9IHByb2plY3RTZWxlY3RlZC5uYW1lO1xuICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gIHBvcHVsYXRlVGFza3MocHJvamVjdFNlbGVjdGVkKTtcbn1cblxud2luZG93LnRvZG8gPSB7XG4gIHRvZG9MaXN0LFxuICBQcm9qZWN0LFxuICBUYXNrLFxufTtcbiIsImltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoXCJqc29uLXN0cmluZ2lmeS1zYWZlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgY29tcG9zaXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29tcG9zaXRlID0gY29tcG9zaXRlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmNvbXBsZXRlZFRhc2tzID0gW107XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGFzay5wcm9qZWN0ID0gdGhpcztcbiAgICB0YXNrLnByb2plY3ROYW1lID0gdGhpcy5uYW1lO1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIHN0cmluZ2lmeSh0b2RvTGlzdCwgbnVsbCwgMikpO1xuICB9XG4gIHJlbW92ZVRhc2socmVtb3ZlVGFzaykge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzayAhPT0gcmVtb3ZlVGFzayk7XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcyA9IHRoaXMuY29tcGxldGVkVGFza3MuZmlsdGVyKFxuICAgICAgKHRhc2spID0+IHRhc2sgIT09IHJlbW92ZVRhc2tcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgc3RyaW5naWZ5KHRvZG9MaXN0LCBudWxsLCAyKSk7XG4gIH1cbiAgYWRkQ29tcGxldGVkVGFzayh0YXNrKSB7XG4gICAgdGFzay5wcm9qZWN0ID0gdGhpcztcbiAgICB0YXNrLnByb2plY3ROYW1lID0gdGhpcy5uYW1lO1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MucHVzaCh0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIHN0cmluZ2lmeSh0b2RvTGlzdCwgbnVsbCwgMikpO1xuICB9XG4gIHJlbW92ZUNvbXBsZXRlZFRhc2socmVtb3ZlVGFzaykge1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrICE9PSByZW1vdmVUYXNrKTtcbiAgfVxuICBhbGxUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5jb25jYXQodGhpcy5jb21wbGV0ZWRUYXNrcyk7XG4gIH1cbiAgc2VsZWN0VGFzayh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmFsbFRhc2tzKCkuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICByZXR1cm4gdGFzay5uYW1lID09PSB0YXNrTmFtZTtcbiAgICB9KVswXTtcbiAgfVxuICBjb21wbGV0ZVRhc2tUb2dnbGUodGFza1RvVG9nZ2xlTmFtZSkge1xuICAgIGxldCB0YXNrU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdFRhc2sodGFza1RvVG9nZ2xlTmFtZSk7XG4gICAgdGFza1NlbGVjdGVkLnRvZ2dsZVRhc2tDb21wbGV0ZSgpO1xuICAgIGxldCBwcm9qZWN0ID0gdGFza1NlbGVjdGVkLnByb2plY3Q7XG4gICAgbGV0IGFsbFRhc2tzID0gcHJvamVjdC5hbGxUYXNrcygpO1xuICAgIHByb2plY3QudGFza3MgPSBbXTtcbiAgICBwcm9qZWN0LmNvbXBsZXRlZFRhc2tzID0gW107XG4gICAgYWxsVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suY29tcGxldGUpIHRhc2sucHJvamVjdC5hZGRDb21wbGV0ZWRUYXNrKHRhc2spO1xuICAgICAgZWxzZSB0YXNrLnByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0LnRvZG8uYXNzZW1ibGVDb21wb3NpdGVzKCk7XG4gIH1cbn1cbiIsImNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoXCJqc29uLXN0cmluZ2lmeS1zYWZlXCIpO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSA9IFwiTm8gbmFtZVwiLCBkYXRlLCBjb21wbGV0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlIHx8IFwiTm8gZGF0ZVwiO1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgXCJObyBuYW1lXCI7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKTtcbiAgfVxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGU7XG4gIH1cbiAgc2V0RGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZSB8fCBcIk5vIGRhdGVcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIHN0cmluZ2lmeSh0b2RvTGlzdCwgbnVsbCwgMikpO1xuICB9XG4gIHRvZ2dsZVRhc2tDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzLCBpc1RvZGF5LCBpc1RoaXNXZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKFwianNvbi1zdHJpbmdpZnktc2FmZVwiKTtcblxuZXhwb3J0IGNvbnN0IHRvZG9MaXN0ID0ge1xuICBpbmJveDogbmV3IFByb2plY3QoXCJJbmJveFwiKSxcbiAgdG9kYXk6IG5ldyBQcm9qZWN0KFwiVG9kYXlcIiwgdHJ1ZSksXG4gIHRoaXNXZWVrOiBuZXcgUHJvamVjdChcIlRoaXMgd2Vla1wiLCB0cnVlKSxcbiAgcHJvamVjdHM6IFtdLFxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnRvZG8gPSB0aGlzO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIHN0cmluZ2lmeSh0aGlzLCBudWxsLCAyKSk7XG4gIH0sXG4gIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lICE9PSBwcm9qZWN0TmFtZVxuICAgICk7XG4gIH0sXG4gIGFzc2VtYmxlQ29tcG9zaXRlcygpIHtcbiAgICBsZXQgY29tcG9zaXRlcyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmNvbXBvc2l0ZSk7XG4gICAgY29tcG9zaXRlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjLnRhc2tzLmxlbmd0aCA9IDA7XG4gICAgICBjLmNvbXBsZXRlZFRhc2tzLmxlbmd0aCA9IDA7XG4gICAgICBpZiAoYy5uYW1lID09PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgaWYgKHAuY29tcG9zaXRlKSByZXR1cm47XG4gICAgICAgICAgbGV0IGFsbFRhc2tzID0gcC5hbGxUYXNrcygpO1xuICAgICAgICAgIGFsbFRhc2tzLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHQuZGF0ZSkpKSB7XG4gICAgICAgICAgICAgIGlmICh0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RheS5jb21wbGV0ZWRUYXNrcy5wdXNoKHQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9kYXkudGFza3MucHVzaCh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoYy5uYW1lID09PSBcIlRoaXMgd2Vla1wiKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgIGlmIChwLmNvbXBvc2l0ZSkgcmV0dXJuO1xuICAgICAgICAgIGxldCBhbGxUYXNrcyA9IHAuYWxsVGFza3MoKTtcbiAgICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUaGlzV2VlayhuZXcgRGF0ZSh0LmRhdGUpLCB7IHdlZWtTdGFydHNPbjogMSB9KSkge1xuICAgICAgICAgICAgICBpZiAodC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGhpc1dlZWsuY29tcGxldGVkVGFza3MucHVzaCh0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoaXNXZWVrLnRhc2tzLnB1c2godCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodGhpcywgbnVsbCwgMikpO1xuICB9LFxuICBzZWxlY3RQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5hc3NlbWJsZUNvbXBvc2l0ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lO1xuICAgIH0pWzBdO1xuICB9LFxuICAvLyBjb25zb2xlIG1ldGhvZFxuICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBwcm9qZWN0ID0gdGhpcy5zZWxlY3RQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdCkge1xuICAgICAgaWYgKGtleSA9PT0gXCJuYW1lXCIpIGNvbnNvbGUubG9nKGBuYW1lOiAke3Byb2plY3Rba2V5XX1gKTtcbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJ0YXNrc1wiKSB7XG4gICAgICAgIHByb2plY3Rba2V5XS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBUYXNrJHtpbmRleCArIDF9OiBOYW1lIC0gJHt0YXNrLm5hbWV9IERhdGUgLSAke3Rhc2suZGF0ZX0gJHtcbiAgICAgICAgICAgICAgcHJvamVjdC5uYW1lICE9PSBcIlRvZGF5XCIgJiYgcHJvamVjdC5uYW1lICE9PSBcIlRoaXMgd2Vla1wiXG4gICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgOiBgKCR7cHJvamVjdC5uYW1lfSlgXG4gICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3Rba2V5XS5mb3JFYWNoKChjb21wbGV0ZVRhc2ssIGluZGV4KSA9PlxuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYENvbXBsZXRlZCBUYXNrJHtpbmRleCArIDF9OiBOYW1lIC0gJHtjb21wbGV0ZVRhc2submFtZX0gRGF0ZSAtICR7XG4gICAgICAgICAgICAgIGNvbXBsZXRlVGFzay5kYXRlXG4gICAgICAgICAgICB9ICR7XG4gICAgICAgICAgICAgIHByb2plY3QubmFtZSAhPT0gXCJUb2RheVwiICYmIHByb2plY3QubmFtZSAhPT0gXCJUaGlzIHdlZWtcIlxuICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgIDogYCgke3Byb2plY3QubmFtZX0pYFxuICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpIHtcbiAgLy8gR3JhYiBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXG4gIGxldCB0b2RvTGlzdFN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgbGV0IGFsbFN0b3JlZFRhc2tzID0gW107XG4gIHRvZG9MaXN0U3RvcmUucHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgIGlmICghcC5jb21wb3NpdGUpIHtcbiAgICAgIC8vICYmIHAubmFtZSAhPT0gJ0luYm94J1xuICAgICAgaWYgKHAudGFza3MubGVuZ3RoICE9PSAwIHx8IHAuY29tcGxldGVkVGFza3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHAudGFza3MuZm9yRWFjaCgodCkgPT4gYWxsU3RvcmVkVGFza3MucHVzaCh0KSk7XG4gICAgICAgIHAuY29tcGxldGVkVGFza3MuZm9yRWFjaCgodCkgPT4gYWxsU3RvcmVkVGFza3MucHVzaCh0KSk7XG4gICAgICB9IGVsc2UgYWxsU3RvcmVkVGFza3MucHVzaChwKTtcbiAgICB9XG4gIH0pO1xuICBsZXQgcHJvamVjdHMgPSB7fTtcbiAgYWxsU3RvcmVkVGFza3MuZm9yRWFjaCgodCkgPT4ge1xuICAgIGlmICh0LnR5cGUgPT09IFwiVGFza1wiKSB7XG4gICAgICBwcm9qZWN0c1t0LnByb2plY3ROYW1lXSA9IHByb2plY3RzW3QucHJvamVjdE5hbWVdIHx8IFtdO1xuICAgICAgcHJvamVjdHNbdC5wcm9qZWN0TmFtZV0ucHVzaChuZXcgVGFzayh0Lm5hbWUsIHQuZGF0ZSwgdC5jb21wbGV0ZSkpO1xuICAgIH0gZWxzZSBpZiAodC50eXBlID09PSBcIlByb2plY3RcIikge1xuICAgICAgcHJvamVjdHNbdC5uYW1lXSA9IHByb2plY3RzW3QubmFtZV0gfHwgW107XG4gICAgfVxuICB9KTtcbiAgZm9yIChsZXQgcHJvamVjdCBpbiBwcm9qZWN0cykge1xuICAgIGxldCBwcm9qT2JqID0gcHJvamVjdCA9PT0gXCJJbmJveFwiID8gdG9kb0xpc3QuaW5ib3ggOiBuZXcgUHJvamVjdChwcm9qZWN0KTtcbiAgICBwcm9qZWN0c1twcm9qZWN0XS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICBpZiAodC5jb21wbGV0ZSkgcHJvak9iai5hZGRDb21wbGV0ZWRUYXNrKHQpO1xuICAgICAgZWxzZSBwcm9qT2JqLmFkZFRhc2sodCk7XG4gICAgfSk7XG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qT2JqKTtcbiAgfVxufSBlbHNlIHtcbiAgLy8gQ3JlYXRlIHN0YXJ0ZXIgcHJvamVjdHMgYW5kIHRhc2tzOlxuICBjb25zdCBzdGFydGVyUHJvamVjdDEgPSBuZXcgUHJvamVjdChcIkxlYXJuIEphdmFzY3JpcHRcIik7XG4gIGNvbnN0IHN0YXJ0ZXJQcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiTGVhcm4gbW9yZSBKYXZhc2NyaXB0XCIpO1xuICBjb25zdCBzdGFydGVyVGFza3MxID0gW1xuICAgIG5ldyBUYXNrKFwiV3JpdGUgY29kZTFcIiwgXCIyMDIzLTA0LTEwXCIpLFxuICAgIG5ldyBUYXNrKFwiUmVmYWN0b3Igb2xkIGNvZGUxXCIsIFwiMjAyMy0wNC0xMlwiKSxcbiAgICBuZXcgVGFzayhcImZvbzFcIiwgXCIyMDIzLTA0LTE0XCIpLFxuICAgIG5ldyBUYXNrKFwiYmFyMVwiLCBcIjIwMjMtMDQtMjBcIiksXG4gICAgbmV3IFRhc2soXCJiYXoxXCIsIFwiMjAyMy0wNC0yNVwiKSxcbiAgXTtcbiAgY29uc3Qgc3RhcnRlclRhc2tzMiA9IFtcbiAgICBuZXcgVGFzayhcIldyaXRlIGNvZGUyXCIsIFwiMjAyMy0wNC0xMVwiKSxcbiAgICBuZXcgVGFzayhcIlJlZmFjdG9yIG9sZCBjb2RlMlwiLCBcIjIwMjMtMDQtMTNcIiksXG4gICAgbmV3IFRhc2soXCJmb28yXCIsIFwiMjAyMy0wNC0xNlwiKSxcbiAgICBuZXcgVGFzayhcImJhcjJcIiwgXCIyMDIzLTA0LTIwXCIpLFxuICAgIG5ldyBUYXNrKFwiYmF6MlwiLCBcIjIwMjMtMDQtMjVcIiksXG4gIF07XG5cbiAgdG9kb0xpc3QuYWRkUHJvamVjdChzdGFydGVyUHJvamVjdDEpO1xuICBzdGFydGVyVGFza3MxLmZvckVhY2goKHRhc2spID0+IHN0YXJ0ZXJQcm9qZWN0MS5hZGRUYXNrKHRhc2spKTtcblxuICB0b2RvTGlzdC5hZGRQcm9qZWN0KHN0YXJ0ZXJQcm9qZWN0Mik7XG4gIHN0YXJ0ZXJUYXNrczIuZm9yRWFjaCgodGFzaykgPT4gc3RhcnRlclByb2plY3QyLmFkZFRhc2sodGFzaykpO1xufVxuaWYgKCF0b2RvTGlzdC5wcm9qZWN0cy5pbmNsdWRlcyh0b2RvTGlzdC5pbmJveCkpXG4gIHRvZG9MaXN0LmFkZFByb2plY3QodG9kb0xpc3QuaW5ib3gpO1xudG9kb0xpc3QuYWRkUHJvamVjdCh0b2RvTGlzdC50b2RheSk7XG50b2RvTGlzdC5hZGRQcm9qZWN0KHRvZG9MaXN0LnRoaXNXZWVrKTtcbnRvZG9MaXN0LmFzc2VtYmxlQ29tcG9zaXRlcyhcIlRvZGF5XCIpO1xudG9kb0xpc3QuYXNzZW1ibGVDb21wb3NpdGVzKFwiVGhpcyB3ZWVrXCIpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSV8yXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==