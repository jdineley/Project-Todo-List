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

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");







function UI () {

const projectsUl = document.querySelector('#projects')
const projectH2 = document.querySelector('#project')
const tasksUl = document.querySelector('#tasks')
const completedTasksUl = document.querySelector('#completed-tasks')
const addProjectButton = document.querySelector('#add-project button')
const addTaskForm = document.querySelector('#add-task')
const addTaskButton = document.querySelector('#add-task button')
const newProjectNameInput = document.querySelector('#add-project input')
const newTaskNameInput = document.querySelector('#add-task #name');
const newTaskDateInput = document.querySelector('#add-task #date')


let projectSelected = _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.selectProject('Inbox');

function projectSelectHandler(e) {
    console.log(e.target.textContent);
    projectSelected = _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.selectProject(e.target.textContent);
    if(projectSelected.name === 'Today'  || projectSelected.name === 'This week') addTaskForm.style.display = 'none'
    else  addTaskForm.style.display = 'block'
    console.log(projectSelected);
    projectH2.textContent = projectSelected.name;
    populateTasks();
    // populateCompletedTasks(projectSelected)
    
}       

function taskSelectHandler(e) {
    console.log(e.target.id, projectSelected);
    projectSelected.completeTaskToggle(e.target.id);
    //Because 'Today' & 'This week' are composites they need to be assembled independently hence we have to reselect here:
    // if(projectSelected.name === 'Today' || projectSelected.name === 'This week') {
    //     projectSelected = todoList.selectProject(projectSelected.name)
    // }
    populateTasks(projectSelected);
    // populateCompletedTasks(projectSelected)
}   

function addProjectHandler(e) {
    e.preventDefault();
    console.log('here', newProjectNameInput.value, 'there')
    _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectNameInput.value))
    populateProjects();
}

function addTaskHandler(e) {
    e.preventDefault();
    projectSelected.addTask(new _task__WEBPACK_IMPORTED_MODULE_2__["default"](newTaskNameInput.value, newTaskDateInput.value));
    populateTasks(projectSelected);
    // populateCompletedTasks(projectSelected);
}

function populateTasks() {
    //Because 'Today' & 'This week' are composites they need to be assembled independently hence we have to reselect here:
    // if(project.name === 'Today' || project.name === 'This week') {
    //     project = todoList.selectProject(project.name)
    // }
    tasksUl.textContent = ''
    completedTasksUl.textContent = '';
    projectSelected.tasks.forEach(t => {
        let taskLi = document.createElement('li');
        taskLi.textContent = projectSelected.name === 'Today' || projectSelected.name === 'This week' ? `${t.name} -- ${t.date} -- ${t.project.name}` : `${t.name} -- ${t.date}`
        taskLi.setAttribute('id', t.name)
        taskLi.addEventListener('click', taskSelectHandler)
        tasksUl.appendChild(taskLi);
    })
    projectSelected.completedTasks.forEach(t => {
        let taskLi = document.createElement('li');
        taskLi.textContent = projectSelected.name === 'Today' || projectSelected.name === 'This week' ? `${t.name} -- ${t.date} -- ${t.project.name}` : `${t.name} -- ${t.date}`
        taskLi.setAttribute('id', t.name)
        taskLi.addEventListener('click', taskSelectHandler)
        completedTasksUl.appendChild(taskLi);
    })
}

// function populateCompletedTasks(project) {
//     completedTasksUl.textContent = '';
//     project.completedTasks.forEach(t => {
//         let taskLi = document.createElement('li');
//         taskLi.textContent = project.name === 'Today' || project.name === 'This week' ? `${t.name} -- ${t.date} -- ${t.project.name}` : `${t.name} -- ${t.date}`
//         taskLi.setAttribute('id', t.name)
//         taskLi.addEventListener('click', taskSelectHandler)
//         completedTasksUl.appendChild(taskLi);
//     })
// }

function populateProjects() {
    projectsUl.textContent = ''
    _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.forEach(p => {
        let projLi = document.createElement('li');
        projLi.textContent = p.name;
        projLi.addEventListener('click', projectSelectHandler)
        projectsUl.appendChild(projLi);
    })
}



addTaskButton.addEventListener('click', addTaskHandler)
addProjectButton.addEventListener('click', addProjectHandler)
projectH2.textContent = projectSelected.name;
populateProjects()
populateTasks(projectSelected);
// populateCompletedTasks(projectSelected);



}

window.todo = {
    todoList: _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList,
    Project: _project__WEBPACK_IMPORTED_MODULE_1__["default"],
    Task: _task__WEBPACK_IMPORTED_MODULE_2__["default"]
  }


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



class Project {
    constructor(name, composite = false){
      this.name = name;
      this.composite = composite;
      this.tasks = [];
      this.completedTasks = [];
      
    }

    addTask(task) {
      task.project = this
      this.tasks.push(task);
    }
    removeTask(removeTask) {
      this.tasks.filter(task => task !== removeTask)
    }
    addCompletedTask(task) {
        this.completedTasks.push(task);
    }
    removeCompletedTask(removeTask) {
        this.completedTasks.filter(task => task !== removeTask)
    }
    allTasks() {
        return this.tasks.concat(this.completedTasks)
    }
    selectTask(taskName) {
        return this.allTasks().filter(task => {
            return task.name === taskName;
        })[0];
    }
    completeTaskToggle(taskToToggleName) {
        let taskSelected = this.selectTask(taskToToggleName)
        taskSelected.toggleTaskComplete()
        let project = taskSelected.project
        let allTasks = project.allTasks()
        project.tasks = [];
        project.completedTasks = [];
        allTasks.forEach(task => {
            if(task.complete) task.project.completedTasks.push(task);
            else task.project.tasks.push(task)
        })
        project.todo.assembleComposites()
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
class Task {
    constructor(name, date) {
      this.name = name;
      this.date = date || 'No date';
      this.complete = false;
      this.project = null;
    }
    getName() {
      return this.name;
    }
    setName(name) {
      this.name = name;
    }
    getDate() {
      return this.date;
    }
    setDate(date) {
      this.date = date
    }
    toggleTaskComplete() {
        this.complete = !this.complete
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
    inbox: new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'),
    today: new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Today', true),
    thisWeek: new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('This week', true),
    projects: [],
    addProject(project) {
      project.todo = this
      this.projects.push(project);
      localStorage.setItem('todoList', stringify(this, null, 2))
    },
    removeProject(projectName) {
      this.projects = this.projects.filter(project => project.name !== projectName);
      localStorage.setItem('todoList', stringify(this, null, 2))
    },
    assembleComposites() {
        let composites = this.projects.filter(p => p.composite)
        console.log(composites)
        composites.forEach(c => {
            c.tasks.length = 0;
            c.completedTasks.length = 0;
            if(c.name === 'Today') {
                this.projects.forEach(p => {
                    if(p.composite) return
                    let allTasks = p.allTasks()
                    allTasks.forEach(t => {
                        if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(t.date))){
                            if(t.complete) {
                                this.today.completedTasks.push(t) 
                            }
                            else {
                                this.today.tasks.push(t)
                            }
                        }
                    })
                })
            } else if(c.name === 'This week') {
                this.projects.forEach(p => {
                    if(p.composite) return
                    let allTasks = p.allTasks()
                    allTasks.forEach(t => {
                        if((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(t.date), { weekStartsOn: 1 })){
                            if(t.complete) {
                                this.thisWeek.completedTasks.push(t)
                            }
                            else {
                                this.thisWeek.tasks.push(t)
                            }
                        }
                    })
                })
            }
        })
        localStorage.setItem('today', stringify(this.today, null, 2))
        localStorage.setItem('thisWeek', stringify(this.thisWeek, null, 2))

    },
    selectProject(projectName) {
        this.assembleComposites()
        // if(projectName === 'Today' || projectName === 'This week'){
        //     this.today.tasks.length = 0;
        //     this.today.completedTasks.length = 0;
        //     this.thisWeek.tasks.length = 0;
        //     this.thisWeek.completedTasks.length = 0;
            
        //     if(projectName ==='Today') {
        //         this.projects.forEach(p => {
        //             if(p.name === 'Today' || p.name === 'This week') return
        //             let allTasks = p.allTasks()
        //             allTasks.forEach(t => {
        //                 if(isToday(new Date(t.date))){
        //                     if(t.complete) {
        //                         this.today.completedTasks.push(t) 
        //                     }
        //                     else {
        //                         this.today.tasks.push(t)
        //                     }
        //                 }
        //             })
        //         })
        //         localStorage.setItem('today', stringify(this.today, null, 2))
        //         return this.today
        //     } else {
        //         this.projects.forEach(p => {
        //             if(p.name === 'Today' || p.name === 'This week') return
        //             let allTasks = p.allTasks()
        //             allTasks.forEach(t => {
        //                 if(isThisWeek(new Date(t.date), { weekStartsOn: 1 })){
        //                     if(t.complete) {
        //                         this.thisWeek.completedTasks.push(t)
        //                     }
        //                     else {
        //                         this.thisWeek.tasks.push(t)
        //                     }
        //                 }
        //             })
        //         })
        //         localStorage.setItem('thisWeek', stringify(this.thisWeek, null, 2))
        //         return this.thisWeek
        //     }
            
        // } 
        // else {
            return this.projects.filter(project => {
                return project.name === projectName;
            })[0]   
        // }
    },
    // console method
    displayProject(projectName) {
      let project = this.selectProject(projectName);
      for(let key in project) {
        if(key === 'name') console.log(`name: ${project[key]}`);
        else if(key === 'tasks') {
          project[key].forEach((task, index) => console.log(`Task${index+1}: Name - ${task.name} Date - ${task.date} ${project.name !== 'Today' && project.name !== 'This week' ? '' : `(${project.name})`}`))
        } else {
            project[key].forEach((completeTask, index) => console.log(`Completed Task${index+1}: Name - ${completeTask.name} Date - ${completeTask.date} ${project.name !== 'Today' && project.name !== 'This week' ? '' : `(${project.name})`}`))
        }
      }
    } 
  }

  function populateDefaultProjects() {
    todoList.addProject(todoList.inbox);
    todoList.addProject(todoList.today);
    todoList.addProject(todoList.thisWeek);
 }
 populateDefaultProjects()


// Create starter projects and tasks:
  
const starterProject1 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Learn Javascript')
const starterProject2 = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Learn more Javascript')
const starterTasks1 = [new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Write code1', '2023-04-10'),
 new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Refactor old code1', '2023-04-12'), 
 new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('foo1', '2023-04-14'),
 new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('bar1', '2023-04-20'),
 new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('baz1', '2023-04-25')]
const starterTasks2 = [new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Write code2', '2023-04-11'),
 new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Refactor old code2', '2023-04-13'), 
 new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('foo2', '2023-04-16'),
 new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('bar2', '2023-04-20'),
 new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]('baz2', '2023-04-25')]   


  todoList.addProject(starterProject1);
  starterTasks1.forEach(task => starterProject1.addTask(task));

  todoList.addProject(starterProject2);
  starterTasks2.forEach(task => starterProject2.addTask(task));

  todoList.selectProject('Today')
  todoList.selectProject('This week')
  
  localStorage.setItem('todoList', stringify(todoList, null, 2))

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
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


    
    document.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"])
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxhQUFhO0FBQzdEO0FBQ0EsbUVBQW1FLFFBQVEsV0FBVyxXQUFXLFNBQVMsV0FBVyxFQUFFLG9FQUFvRSxhQUFhLEdBQUc7QUFDM00sVUFBVTtBQUNWLHVGQUF1RixRQUFRLFdBQVcsbUJBQW1CLFNBQVMsbUJBQW1CLEVBQUUsb0VBQW9FLGFBQWEsR0FBRztBQUMvTztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQU87QUFDbkMsNEJBQTRCLG1EQUFPO0FBQ25DLDJCQUEyQixnREFBSTtBQUMvQixLQUFLLGdEQUFJO0FBQ1QsS0FBSyxnREFBSTtBQUNULEtBQUssZ0RBQUk7QUFDVCxLQUFLLGdEQUFJO0FBQ1QsMkJBQTJCLGdEQUFJO0FBQy9CLEtBQUssZ0RBQUk7QUFDVCxLQUFLLGdEQUFJO0FBQ1QsS0FBSyxnREFBSTtBQUNULEtBQUssZ0RBQUk7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDaktBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZCOztBQUU3QjtBQUNBLGtEQUFrRCxtREFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2pzb24tc3RyaW5naWZ5LXNhZmUvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcbmV4cG9ydHMuZ2V0U2VyaWFsaXplID0gc2VyaWFsaXplclxuXG5mdW5jdGlvbiBzdHJpbmdpZnkob2JqLCByZXBsYWNlciwgc3BhY2VzLCBjeWNsZVJlcGxhY2VyKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIHNlcmlhbGl6ZXIocmVwbGFjZXIsIGN5Y2xlUmVwbGFjZXIpLCBzcGFjZXMpXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZXIocmVwbGFjZXIsIGN5Y2xlUmVwbGFjZXIpIHtcbiAgdmFyIHN0YWNrID0gW10sIGtleXMgPSBbXVxuXG4gIGlmIChjeWNsZVJlcGxhY2VyID09IG51bGwpIGN5Y2xlUmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgaWYgKHN0YWNrWzBdID09PSB2YWx1ZSkgcmV0dXJuIFwiW0NpcmN1bGFyIH5dXCJcbiAgICByZXR1cm4gXCJbQ2lyY3VsYXIgfi5cIiArIGtleXMuc2xpY2UoMCwgc3RhY2suaW5kZXhPZih2YWx1ZSkpLmpvaW4oXCIuXCIpICsgXCJdXCJcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciB0aGlzUG9zID0gc3RhY2suaW5kZXhPZih0aGlzKVxuICAgICAgfnRoaXNQb3MgPyBzdGFjay5zcGxpY2UodGhpc1BvcyArIDEpIDogc3RhY2sucHVzaCh0aGlzKVxuICAgICAgfnRoaXNQb3MgPyBrZXlzLnNwbGljZSh0aGlzUG9zLCBJbmZpbml0eSwga2V5KSA6IGtleXMucHVzaChrZXkpXG4gICAgICBpZiAofnN0YWNrLmluZGV4T2YodmFsdWUpKSB2YWx1ZSA9IGN5Y2xlUmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHN0YWNrLnB1c2godmFsdWUpXG5cbiAgICByZXR1cm4gcmVwbGFjZXIgPT0gbnVsbCA/IHZhbHVlIDogcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKVxuICB9XG59XG4iLCJpbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG9MaXN0XCJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIlxuaW1wb3J0IFRhc2sgZnJvbSAgXCIuL3Rhc2tcIlxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVSSAoKSB7XG5cbmNvbnN0IHByb2plY3RzVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKVxuY29uc3QgcHJvamVjdEgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKVxuY29uc3QgdGFza3NVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcycpXG5jb25zdCBjb21wbGV0ZWRUYXNrc1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZXRlZC10YXNrcycpXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0IGJ1dHRvbicpXG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrIGJ1dHRvbicpXG5jb25zdCBuZXdQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0IGlucHV0JylcbmNvbnN0IG5ld1Rhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2sgI25hbWUnKTtcbmNvbnN0IG5ld1Rhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2sgI2RhdGUnKVxuXG5cbmxldCBwcm9qZWN0U2VsZWN0ZWQgPSB0b2RvTGlzdC5zZWxlY3RQcm9qZWN0KCdJbmJveCcpO1xuXG5mdW5jdGlvbiBwcm9qZWN0U2VsZWN0SGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIHByb2plY3RTZWxlY3RlZCA9IHRvZG9MaXN0LnNlbGVjdFByb2plY3QoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIGlmKHByb2plY3RTZWxlY3RlZC5uYW1lID09PSAnVG9kYXknICB8fCBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gJ1RoaXMgd2VlaycpIGFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBlbHNlICBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RTZWxlY3RlZCk7XG4gICAgcHJvamVjdEgyLnRleHRDb250ZW50ID0gcHJvamVjdFNlbGVjdGVkLm5hbWU7XG4gICAgcG9wdWxhdGVUYXNrcygpO1xuICAgIC8vIHBvcHVsYXRlQ29tcGxldGVkVGFza3MocHJvamVjdFNlbGVjdGVkKVxuICAgIFxufSAgICAgICBcblxuZnVuY3Rpb24gdGFza1NlbGVjdEhhbmRsZXIoZSkge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkLCBwcm9qZWN0U2VsZWN0ZWQpO1xuICAgIHByb2plY3RTZWxlY3RlZC5jb21wbGV0ZVRhc2tUb2dnbGUoZS50YXJnZXQuaWQpO1xuICAgIC8vQmVjYXVzZSAnVG9kYXknICYgJ1RoaXMgd2VlaycgYXJlIGNvbXBvc2l0ZXMgdGhleSBuZWVkIHRvIGJlIGFzc2VtYmxlZCBpbmRlcGVuZGVudGx5IGhlbmNlIHdlIGhhdmUgdG8gcmVzZWxlY3QgaGVyZTpcbiAgICAvLyBpZihwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gJ1RvZGF5JyB8fCBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gJ1RoaXMgd2VlaycpIHtcbiAgICAvLyAgICAgcHJvamVjdFNlbGVjdGVkID0gdG9kb0xpc3Quc2VsZWN0UHJvamVjdChwcm9qZWN0U2VsZWN0ZWQubmFtZSlcbiAgICAvLyB9XG4gICAgcG9wdWxhdGVUYXNrcyhwcm9qZWN0U2VsZWN0ZWQpO1xuICAgIC8vIHBvcHVsYXRlQ29tcGxldGVkVGFza3MocHJvamVjdFNlbGVjdGVkKVxufSAgIFxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdoZXJlJywgbmV3UHJvamVjdE5hbWVJbnB1dC52YWx1ZSwgJ3RoZXJlJylcbiAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lSW5wdXQudmFsdWUpKVxuICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0U2VsZWN0ZWQuYWRkVGFzayhuZXcgVGFzayhuZXdUYXNrTmFtZUlucHV0LnZhbHVlLCBuZXdUYXNrRGF0ZUlucHV0LnZhbHVlKSk7XG4gICAgcG9wdWxhdGVUYXNrcyhwcm9qZWN0U2VsZWN0ZWQpO1xuICAgIC8vIHBvcHVsYXRlQ29tcGxldGVkVGFza3MocHJvamVjdFNlbGVjdGVkKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVUYXNrcygpIHtcbiAgICAvL0JlY2F1c2UgJ1RvZGF5JyAmICdUaGlzIHdlZWsnIGFyZSBjb21wb3NpdGVzIHRoZXkgbmVlZCB0byBiZSBhc3NlbWJsZWQgaW5kZXBlbmRlbnRseSBoZW5jZSB3ZSBoYXZlIHRvIHJlc2VsZWN0IGhlcmU6XG4gICAgLy8gaWYocHJvamVjdC5uYW1lID09PSAnVG9kYXknIHx8IHByb2plY3QubmFtZSA9PT0gJ1RoaXMgd2VlaycpIHtcbiAgICAvLyAgICAgcHJvamVjdCA9IHRvZG9MaXN0LnNlbGVjdFByb2plY3QocHJvamVjdC5uYW1lKVxuICAgIC8vIH1cbiAgICB0YXNrc1VsLnRleHRDb250ZW50ID0gJydcbiAgICBjb21wbGV0ZWRUYXNrc1VsLnRleHRDb250ZW50ID0gJyc7XG4gICAgcHJvamVjdFNlbGVjdGVkLnRhc2tzLmZvckVhY2godCA9PiB7XG4gICAgICAgIGxldCB0YXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrTGkudGV4dENvbnRlbnQgPSBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gJ1RvZGF5JyB8fCBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gJ1RoaXMgd2VlaycgPyBgJHt0Lm5hbWV9IC0tICR7dC5kYXRlfSAtLSAke3QucHJvamVjdC5uYW1lfWAgOiBgJHt0Lm5hbWV9IC0tICR7dC5kYXRlfWBcbiAgICAgICAgdGFza0xpLnNldEF0dHJpYnV0ZSgnaWQnLCB0Lm5hbWUpXG4gICAgICAgIHRhc2tMaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tTZWxlY3RIYW5kbGVyKVxuICAgICAgICB0YXNrc1VsLmFwcGVuZENoaWxkKHRhc2tMaSk7XG4gICAgfSlcbiAgICBwcm9qZWN0U2VsZWN0ZWQuY29tcGxldGVkVGFza3MuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgbGV0IHRhc2tMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRhc2tMaS50ZXh0Q29udGVudCA9IHByb2plY3RTZWxlY3RlZC5uYW1lID09PSAnVG9kYXknIHx8IHByb2plY3RTZWxlY3RlZC5uYW1lID09PSAnVGhpcyB3ZWVrJyA/IGAke3QubmFtZX0gLS0gJHt0LmRhdGV9IC0tICR7dC5wcm9qZWN0Lm5hbWV9YCA6IGAke3QubmFtZX0gLS0gJHt0LmRhdGV9YFxuICAgICAgICB0YXNrTGkuc2V0QXR0cmlidXRlKCdpZCcsIHQubmFtZSlcbiAgICAgICAgdGFza0xpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza1NlbGVjdEhhbmRsZXIpXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzVWwuYXBwZW5kQ2hpbGQodGFza0xpKTtcbiAgICB9KVxufVxuXG4vLyBmdW5jdGlvbiBwb3B1bGF0ZUNvbXBsZXRlZFRhc2tzKHByb2plY3QpIHtcbi8vICAgICBjb21wbGV0ZWRUYXNrc1VsLnRleHRDb250ZW50ID0gJyc7XG4vLyAgICAgcHJvamVjdC5jb21wbGV0ZWRUYXNrcy5mb3JFYWNoKHQgPT4ge1xuLy8gICAgICAgICBsZXQgdGFza0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbi8vICAgICAgICAgdGFza0xpLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lID09PSAnVG9kYXknIHx8IHByb2plY3QubmFtZSA9PT0gJ1RoaXMgd2VlaycgPyBgJHt0Lm5hbWV9IC0tICR7dC5kYXRlfSAtLSAke3QucHJvamVjdC5uYW1lfWAgOiBgJHt0Lm5hbWV9IC0tICR7dC5kYXRlfWBcbi8vICAgICAgICAgdGFza0xpLnNldEF0dHJpYnV0ZSgnaWQnLCB0Lm5hbWUpXG4vLyAgICAgICAgIHRhc2tMaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tTZWxlY3RIYW5kbGVyKVxuLy8gICAgICAgICBjb21wbGV0ZWRUYXNrc1VsLmFwcGVuZENoaWxkKHRhc2tMaSk7XG4vLyAgICAgfSlcbi8vIH1cblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cygpIHtcbiAgICBwcm9qZWN0c1VsLnRleHRDb250ZW50ID0gJydcbiAgICB0b2RvTGlzdC5wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICBsZXQgcHJvakxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvakxpLnRleHRDb250ZW50ID0gcC5uYW1lO1xuICAgICAgICBwcm9qTGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0U2VsZWN0SGFuZGxlcilcbiAgICAgICAgcHJvamVjdHNVbC5hcHBlbmRDaGlsZChwcm9qTGkpO1xuICAgIH0pXG59XG5cblxuXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza0hhbmRsZXIpXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdEhhbmRsZXIpXG5wcm9qZWN0SDIudGV4dENvbnRlbnQgPSBwcm9qZWN0U2VsZWN0ZWQubmFtZTtcbnBvcHVsYXRlUHJvamVjdHMoKVxucG9wdWxhdGVUYXNrcyhwcm9qZWN0U2VsZWN0ZWQpO1xuLy8gcG9wdWxhdGVDb21wbGV0ZWRUYXNrcyhwcm9qZWN0U2VsZWN0ZWQpO1xuXG5cblxufVxuXG53aW5kb3cudG9kbyA9IHtcbiAgICB0b2RvTGlzdCxcbiAgICBQcm9qZWN0LFxuICAgIFRhc2tcbiAgfVxuIiwiaW1wb3J0IHsgZm9ybWF0LCBjb21wYXJlQXNjLCBpc1RvZGF5LCBpc1RoaXNXZWVrIH0gZnJvbSAnZGF0ZS1mbnMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29tcG9zaXRlID0gZmFsc2Upe1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuY29tcG9zaXRlID0gY29tcG9zaXRlO1xuICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgdGhpcy5jb21wbGV0ZWRUYXNrcyA9IFtdO1xuICAgICAgXG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICB0YXNrLnByb2plY3QgPSB0aGlzXG4gICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIHJlbW92ZVRhc2socmVtb3ZlVGFzaykge1xuICAgICAgdGhpcy50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrICE9PSByZW1vdmVUYXNrKVxuICAgIH1cbiAgICBhZGRDb21wbGV0ZWRUYXNrKHRhc2spIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbiAgICByZW1vdmVDb21wbGV0ZWRUYXNrKHJlbW92ZVRhc2spIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5maWx0ZXIodGFzayA9PiB0YXNrICE9PSByZW1vdmVUYXNrKVxuICAgIH1cbiAgICBhbGxUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuY29uY2F0KHRoaXMuY29tcGxldGVkVGFza3MpXG4gICAgfVxuICAgIHNlbGVjdFRhc2sodGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsVGFza3MoKS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGFzay5uYW1lID09PSB0YXNrTmFtZTtcbiAgICAgICAgfSlbMF07XG4gICAgfVxuICAgIGNvbXBsZXRlVGFza1RvZ2dsZSh0YXNrVG9Ub2dnbGVOYW1lKSB7XG4gICAgICAgIGxldCB0YXNrU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdFRhc2sodGFza1RvVG9nZ2xlTmFtZSlcbiAgICAgICAgdGFza1NlbGVjdGVkLnRvZ2dsZVRhc2tDb21wbGV0ZSgpXG4gICAgICAgIGxldCBwcm9qZWN0ID0gdGFza1NlbGVjdGVkLnByb2plY3RcbiAgICAgICAgbGV0IGFsbFRhc2tzID0gcHJvamVjdC5hbGxUYXNrcygpXG4gICAgICAgIHByb2plY3QudGFza3MgPSBbXTtcbiAgICAgICAgcHJvamVjdC5jb21wbGV0ZWRUYXNrcyA9IFtdO1xuICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYodGFzay5jb21wbGV0ZSkgdGFzay5wcm9qZWN0LmNvbXBsZXRlZFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICBlbHNlIHRhc2sucHJvamVjdC50YXNrcy5wdXNoKHRhc2spXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3QudG9kby5hc3NlbWJsZUNvbXBvc2l0ZXMoKVxuICAgIH1cbiAgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLmRhdGUgPSBkYXRlIHx8ICdObyBkYXRlJztcbiAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJvamVjdCA9IG51bGw7XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGdldERhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlO1xuICAgIH1cbiAgICBzZXREYXRlKGRhdGUpIHtcbiAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB9XG4gICAgdG9nZ2xlVGFza0NvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGVcbiAgICB9XG4gIH0iLCJpbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MsIGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKCdqc29uLXN0cmluZ2lmeS1zYWZlJyk7XG5cblxuXG4gZXhwb3J0IGNvbnN0IHRvZG9MaXN0ID0ge1xuICAgIGluYm94OiBuZXcgUHJvamVjdCgnSW5ib3gnKSxcbiAgICB0b2RheTogbmV3IFByb2plY3QoJ1RvZGF5JywgdHJ1ZSksXG4gICAgdGhpc1dlZWs6IG5ldyBQcm9qZWN0KCdUaGlzIHdlZWsnLCB0cnVlKSxcbiAgICBwcm9qZWN0czogW10sXG4gICAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LnRvZG8gPSB0aGlzXG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBzdHJpbmdpZnkodGhpcywgbnVsbCwgMikpXG4gICAgfSxcbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgIT09IHByb2plY3ROYW1lKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIHN0cmluZ2lmeSh0aGlzLCBudWxsLCAyKSlcbiAgICB9LFxuICAgIGFzc2VtYmxlQ29tcG9zaXRlcygpIHtcbiAgICAgICAgbGV0IGNvbXBvc2l0ZXMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwID0+IHAuY29tcG9zaXRlKVxuICAgICAgICBjb25zb2xlLmxvZyhjb21wb3NpdGVzKVxuICAgICAgICBjb21wb3NpdGVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBjLnRhc2tzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBjLmNvbXBsZXRlZFRhc2tzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBpZihjLm5hbWUgPT09ICdUb2RheScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHAuY29tcG9zaXRlKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsbFRhc2tzID0gcC5hbGxUYXNrcygpXG4gICAgICAgICAgICAgICAgICAgIGFsbFRhc2tzLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1RvZGF5KG5ldyBEYXRlKHQuZGF0ZSkpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9kYXkuY29tcGxldGVkVGFza3MucHVzaCh0KSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9kYXkudGFza3MucHVzaCh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmKGMubmFtZSA9PT0gJ1RoaXMgd2VlaycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHAuY29tcG9zaXRlKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsbFRhc2tzID0gcC5hbGxUYXNrcygpXG4gICAgICAgICAgICAgICAgICAgIGFsbFRhc2tzLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1RoaXNXZWVrKG5ldyBEYXRlKHQuZGF0ZSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhpc1dlZWsuY29tcGxldGVkVGFza3MucHVzaCh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGlzV2Vlay50YXNrcy5wdXNoKHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RheScsIHN0cmluZ2lmeSh0aGlzLnRvZGF5LCBudWxsLCAyKSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoaXNXZWVrJywgc3RyaW5naWZ5KHRoaXMudGhpc1dlZWssIG51bGwsIDIpKVxuXG4gICAgfSxcbiAgICBzZWxlY3RQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMuYXNzZW1ibGVDb21wb3NpdGVzKClcbiAgICAgICAgLy8gaWYocHJvamVjdE5hbWUgPT09ICdUb2RheScgfHwgcHJvamVjdE5hbWUgPT09ICdUaGlzIHdlZWsnKXtcbiAgICAgICAgLy8gICAgIHRoaXMudG9kYXkudGFza3MubGVuZ3RoID0gMDtcbiAgICAgICAgLy8gICAgIHRoaXMudG9kYXkuY29tcGxldGVkVGFza3MubGVuZ3RoID0gMDtcbiAgICAgICAgLy8gICAgIHRoaXMudGhpc1dlZWsudGFza3MubGVuZ3RoID0gMDtcbiAgICAgICAgLy8gICAgIHRoaXMudGhpc1dlZWsuY29tcGxldGVkVGFza3MubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgaWYocHJvamVjdE5hbWUgPT09J1RvZGF5Jykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYocC5uYW1lID09PSAnVG9kYXknIHx8IHAubmFtZSA9PT0gJ1RoaXMgd2VlaycpIHJldHVyblxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgYWxsVGFza3MgPSBwLmFsbFRhc2tzKClcbiAgICAgICAgLy8gICAgICAgICAgICAgYWxsVGFza3MuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKGlzVG9kYXkobmV3IERhdGUodC5kYXRlKSkpe1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKHQuY29tcGxldGUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2RheS5jb21wbGV0ZWRUYXNrcy5wdXNoKHQpIFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2RheS50YXNrcy5wdXNoKHQpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZGF5Jywgc3RyaW5naWZ5KHRoaXMudG9kYXksIG51bGwsIDIpKVxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLnRvZGF5XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYocC5uYW1lID09PSAnVG9kYXknIHx8IHAubmFtZSA9PT0gJ1RoaXMgd2VlaycpIHJldHVyblxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgYWxsVGFza3MgPSBwLmFsbFRhc2tzKClcbiAgICAgICAgLy8gICAgICAgICAgICAgYWxsVGFza3MuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKGlzVGhpc1dlZWsobmV3IERhdGUodC5kYXRlKSwgeyB3ZWVrU3RhcnRzT246IDEgfSkpe1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKHQuY29tcGxldGUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGlzV2Vlay5jb21wbGV0ZWRUYXNrcy5wdXNoKHQpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoaXNXZWVrLnRhc2tzLnB1c2godClcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhpc1dlZWsnLCBzdHJpbmdpZnkodGhpcy50aGlzV2VlaywgbnVsbCwgMikpXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMudGhpc1dlZWtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAvLyB9IFxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIH0pWzBdICAgXG4gICAgICAgIC8vIH1cbiAgICB9LFxuICAgIC8vIGNvbnNvbGUgbWV0aG9kXG4gICAgZGlzcGxheVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgIGxldCBwcm9qZWN0ID0gdGhpcy5zZWxlY3RQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgIGZvcihsZXQga2V5IGluIHByb2plY3QpIHtcbiAgICAgICAgaWYoa2V5ID09PSAnbmFtZScpIGNvbnNvbGUubG9nKGBuYW1lOiAke3Byb2plY3Rba2V5XX1gKTtcbiAgICAgICAgZWxzZSBpZihrZXkgPT09ICd0YXNrcycpIHtcbiAgICAgICAgICBwcm9qZWN0W2tleV0uZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IGNvbnNvbGUubG9nKGBUYXNrJHtpbmRleCsxfTogTmFtZSAtICR7dGFzay5uYW1lfSBEYXRlIC0gJHt0YXNrLmRhdGV9ICR7cHJvamVjdC5uYW1lICE9PSAnVG9kYXknICYmIHByb2plY3QubmFtZSAhPT0gJ1RoaXMgd2VlaycgPyAnJyA6IGAoJHtwcm9qZWN0Lm5hbWV9KWB9YCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0W2tleV0uZm9yRWFjaCgoY29tcGxldGVUYXNrLCBpbmRleCkgPT4gY29uc29sZS5sb2coYENvbXBsZXRlZCBUYXNrJHtpbmRleCsxfTogTmFtZSAtICR7Y29tcGxldGVUYXNrLm5hbWV9IERhdGUgLSAke2NvbXBsZXRlVGFzay5kYXRlfSAke3Byb2plY3QubmFtZSAhPT0gJ1RvZGF5JyAmJiBwcm9qZWN0Lm5hbWUgIT09ICdUaGlzIHdlZWsnID8gJycgOiBgKCR7cHJvamVjdC5uYW1lfSlgfWApKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlRGVmYXVsdFByb2plY3RzKCkge1xuICAgIHRvZG9MaXN0LmFkZFByb2plY3QodG9kb0xpc3QuaW5ib3gpO1xuICAgIHRvZG9MaXN0LmFkZFByb2plY3QodG9kb0xpc3QudG9kYXkpO1xuICAgIHRvZG9MaXN0LmFkZFByb2plY3QodG9kb0xpc3QudGhpc1dlZWspO1xuIH1cbiBwb3B1bGF0ZURlZmF1bHRQcm9qZWN0cygpXG5cblxuLy8gQ3JlYXRlIHN0YXJ0ZXIgcHJvamVjdHMgYW5kIHRhc2tzOlxuICBcbmNvbnN0IHN0YXJ0ZXJQcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdMZWFybiBKYXZhc2NyaXB0JylcbmNvbnN0IHN0YXJ0ZXJQcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdMZWFybiBtb3JlIEphdmFzY3JpcHQnKVxuY29uc3Qgc3RhcnRlclRhc2tzMSA9IFtuZXcgVGFzaygnV3JpdGUgY29kZTEnLCAnMjAyMy0wNC0xMCcpLFxuIG5ldyBUYXNrKCdSZWZhY3RvciBvbGQgY29kZTEnLCAnMjAyMy0wNC0xMicpLCBcbiBuZXcgVGFzaygnZm9vMScsICcyMDIzLTA0LTE0JyksXG4gbmV3IFRhc2soJ2JhcjEnLCAnMjAyMy0wNC0yMCcpLFxuIG5ldyBUYXNrKCdiYXoxJywgJzIwMjMtMDQtMjUnKV1cbmNvbnN0IHN0YXJ0ZXJUYXNrczIgPSBbbmV3IFRhc2soJ1dyaXRlIGNvZGUyJywgJzIwMjMtMDQtMTEnKSxcbiBuZXcgVGFzaygnUmVmYWN0b3Igb2xkIGNvZGUyJywgJzIwMjMtMDQtMTMnKSwgXG4gbmV3IFRhc2soJ2ZvbzInLCAnMjAyMy0wNC0xNicpLFxuIG5ldyBUYXNrKCdiYXIyJywgJzIwMjMtMDQtMjAnKSxcbiBuZXcgVGFzaygnYmF6MicsICcyMDIzLTA0LTI1JyldICAgXG5cblxuICB0b2RvTGlzdC5hZGRQcm9qZWN0KHN0YXJ0ZXJQcm9qZWN0MSk7XG4gIHN0YXJ0ZXJUYXNrczEuZm9yRWFjaCh0YXNrID0+IHN0YXJ0ZXJQcm9qZWN0MS5hZGRUYXNrKHRhc2spKTtcblxuICB0b2RvTGlzdC5hZGRQcm9qZWN0KHN0YXJ0ZXJQcm9qZWN0Mik7XG4gIHN0YXJ0ZXJUYXNrczIuZm9yRWFjaCh0YXNrID0+IHN0YXJ0ZXJQcm9qZWN0Mi5hZGRUYXNrKHRhc2spKTtcblxuICB0b2RvTGlzdC5zZWxlY3RQcm9qZWN0KCdUb2RheScpXG4gIHRvZG9MaXN0LnNlbGVjdFByb2plY3QoJ1RoaXMgd2VlaycpXG4gIFxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gJy4vbW9kdWxlcy9VSSdcblxuICAgIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=