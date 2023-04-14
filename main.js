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
    // console.log(todoList, Project, Task)
    //DOM cache
    const inboxButton = document.querySelector('.inbox');
    const todayButton = document.querySelector('.today');
    const thisWeekButton = document.querySelector('.this-week');
    const addNewProjectButton = document.querySelector('.add-project')
    const newProjectNameInput = document.querySelector('#project-name');
    const addNewProjectFormButton = document.querySelector('.add-project-form .add')
    const cancelNewProjectButton = document.querySelector('.add-project-form .cancel')
    const addNewTaskButton = document.querySelector('.add-task');
    const newTaskNameInput = document.querySelector('#task-name');
    const newTaskDateInput = document.querySelector('#task-date');
    const addNewTaskFormButton = document.querySelector('.add-task-form .add');
    const cancelNewTaskButton = document.querySelector('.add-task-form .cancel');
    const selectedProjectNameH1 = document.querySelector('.project-name');
    const addTaskForm = document.querySelector('.add-task-form');
    const tasksDiv = document.querySelector('.tasks')
    const completedTasksDiv = document.querySelector('.completed-tasks');
    const projectsDiv = document.querySelector('.projects');
    const addNewProjectForm = document.querySelector('.add-project-form');
    const projectFormButtonsDiv = document.querySelector('.project-form-buttons');
    const trashIcon = document.querySelector('fa-trash');
    
    

    //Active project
    let projectSelected = _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.selectProject("Inbox");

    //Event handlers
    function projectSelectHandler(e) {
        selectAllProjectButtons().forEach(projBut => {
            projBut.classList.remove('active')
        })
        let selectedButton = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button')
        console.log(selectedButton);
        selectedButton.classList.add('active')
        projectSelected = _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.selectProject(selectedButton.textContent.trim());
        // remove project
        if(Array.from(e.target.classList).includes('fa-trash')) {
            _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.removeProject(projectSelected.name)
            projectSelected = _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.selectProject('Inbox');
            inboxButton.classList.add('active')
        }
        console.log(projectSelected.name);
        if (
          projectSelected.name === "Today" ||
          projectSelected.name === "This week"
        ) {
            // addTaskForm.style.display = "none";
            // addNewTaskButton.style.display = "none";
            addNewTaskButton.classList.add('composite')
            addTaskForm.classList.add('composite')
            addNewTaskButton.classList.remove('active')
            addTaskForm.classList.remove('active')
        }
        else {
            addNewTaskButton.classList.remove('composite')
            addTaskForm.classList.remove('composite')
        }
        console.log(projectSelected);
        selectedProjectNameH1.textContent = projectSelected.name;
        populateTasks();
        populateProjects(projectSelected.name);
    }
    function taskCompleteToggleHandler(e) {
        // console.log(e.target.id, projectSelected);
        projectSelected.completeTaskToggle(e.target.id);
        populateTasks(projectSelected);
      }

      function taskDetailsUpdateHandler(e) {
        console.log('handling')
        let localParent = e.target.closest('button')
        let previousTaskName = localParent.querySelector('.fa-circle').id
        let previousTaskDate = projectSelected.selectTask(previousTaskName).date
        let paragraphs = localParent.querySelectorAll('p')
        paragraphs.forEach(para => para.classList.toggle('active'))
        // para.classList.toggle('active')
        let inputs = localParent.querySelectorAll('input')
        inputs.forEach(input => {
            input.classList.toggle('active')
            if(input.type === 'text') input.value = previousTaskName
            else input.value = previousTaskDate
        })
        // input.classList.toggle('active')
        let editIcon = localParent.querySelector('.fa-square-pen')
        editIcon.classList.add('active')

        editIcon.addEventListener('click', saveTaskEditsHandler)
      }


      function saveTaskEditsHandler(e) {
        let localParent = e.target.closest('button');
        let taskTextInput = localParent.querySelector('.input-task-name')
        let taskDateInput = localParent.querySelector('.input-due-date')
        let previousTaskName = localParent.querySelector('.fa-circle').id

        let taskToModify = projectSelected.selectTask(previousTaskName)
        taskToModify.setName(taskTextInput.value)
        taskToModify.setDate(taskDateInput.value) 
        populateTasks()
      }

      function deleteTaskHandler(e) {
        console.log('yelp')
        let localParent = e.target.closest('button');
        
        let previousTaskName = localParent.querySelector('.fa-circle').id
        let taskToDelete = projectSelected.selectTask(previousTaskName)
        console.log(taskToDelete)
        projectSelected.removeTask(taskToDelete)
        populateTasks()
      }


    //   function taskDueDateUpdateHandler(e) {
    //     console.log('handling again')
    //     let para = e.target.closest('div').querySelector('p')
    //     para.classList.toggle('active')
    //     let input = e.target.closest('button').querySelector('input')
    //     input.classList.toggle('active')
    //   }
    
      function addProjectHandler(e) {
        e.preventDefault();
        console.log("here", newProjectNameInput.value, "there");
        _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectNameInput.value));
        populateProjects();
      }
    
      function addTaskHandler(e) {
        e.preventDefault();
        projectSelected.addTask(
          new _task__WEBPACK_IMPORTED_MODULE_2__["default"](newTaskNameInput.value, newTaskDateInput.value)
        );
        populateTasks(projectSelected);
      }

      function toggleAddProjectFormHandler(e) {
        addNewProjectForm.classList.toggle('active');
        addNewProjectButton.classList.toggle('active')
      }

      function toggleAddTaskFormHandler(e) {
        addTaskForm.classList.toggle('active');
        addNewTaskButton.classList.toggle('active');

      }

 
      //Event binding
      addNewTaskFormButton.addEventListener("click", addTaskHandler);
      addNewProjectFormButton.addEventListener("click", addProjectHandler);
      addNewProjectButton.addEventListener('click', toggleAddProjectFormHandler);
      projectFormButtonsDiv.addEventListener('click', toggleAddProjectFormHandler);
      inboxButton.addEventListener('click', projectSelectHandler);
      todayButton.addEventListener('click', projectSelectHandler);
      thisWeekButton.addEventListener('click', projectSelectHandler);
      addNewTaskButton.addEventListener('click', toggleAddTaskFormHandler);
    
      //   Worker functions
  function populateTasks() {
    tasksDiv.textContent = "";
    completedTasksDiv.textContent = "";
    projectSelected.tasks.forEach((t) => {
      let taskButton = document.createElement("button");
      taskButton.classList.add('button-task');
      
      
      let taskButtonLeftDiv = document.createElement('div');
      taskButtonLeftDiv.classList.add('left-task-panel');

        let completeTaskIcon = document.createElement('i');
        completeTaskIcon.setAttribute("id", t.name)
        completeTaskIcon.classList.add('fa-regular')
        completeTaskIcon.classList.add('fa-circle')
        let taskContentPara = document.createElement('p')
        taskContentPara.classList.add('task-content');
        taskContentPara.textContent = t.name
        let taskContentModificationInput = document.createElement('input')
        taskContentModificationInput.type = 'text'
        taskContentModificationInput.classList.add('input-task-name')
        taskButtonLeftDiv.append(completeTaskIcon, taskContentPara, taskContentModificationInput)

        let taskButtonRightDiv = document.createElement('div');
        taskButtonRightDiv.classList.add('right-task-panel');
        let dueDatePara = document.createElement('p');
        dueDatePara.classList.add('due-date');
        dueDatePara.textContent = t.date;
        let dateInput = document.createElement('input');
        dateInput.classList.add('input-due-date');
        dateInput.type = 'date'
        let trashTaskIcon = document.createElement('i');
        trashTaskIcon.classList.add('fa-solid');
        trashTaskIcon.classList.add('fa-trash');
        
        // <i class="fa-regular fa-calendar-lines-pen"></i>
        let updateTaskIcon = document.createElement('i');
        updateTaskIcon.classList.add('fa-solid')
        updateTaskIcon.classList.add('fa-square-pen')
        taskButtonRightDiv.append(dueDatePara, dateInput, updateTaskIcon, trashTaskIcon)

        taskButton.append(taskButtonLeftDiv, taskButtonRightDiv)
        tasksDiv.appendChild(taskButton)

        completeTaskIcon.addEventListener("click", taskCompleteToggleHandler);
        taskContentPara.addEventListener('click', taskDetailsUpdateHandler)
        dueDatePara.addEventListener('click', taskDetailsUpdateHandler)
        trashTaskIcon.addEventListener('click', deleteTaskHandler)
    //   taskButton.textContent =
    //     projectSelected.name === "Today" || projectSelected.name === "This week"
    //       ? `${t.name} -- ${t.date} -- ${t.project.name}`
    //       : `${t.name} -- ${t.date}`;
    //       taskButton.setAttribute("id", t.name);
    //       taskButton.addEventListener("click", taskSelectHandler);
    //       tasksDiv.appendChild(taskButton);
    });
    projectSelected.completedTasks.forEach((t) => {
        let taskButton = document.createElement("button");
        taskButton.textContent =
        projectSelected.name === "Today" || projectSelected.name === "This week"
          ? `${t.name} -- ${t.date} -- ${t.project.name}`
          : `${t.name} -- ${t.date}`;
          taskButton.setAttribute("id", t.name);
          taskButton.addEventListener("click", taskCompleteToggleHandler);
          completedTasksDiv.appendChild(taskButton);
    });
  }

  function populateProjects(activeProjectName) {
    projectsDiv.textContent = "";
    _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.forEach((p) => {
        
        if(p.name !== 'Inbox' && !p.composite) {
            console.log(p.name, p.composite)
      let projectButton = document.createElement("button");
      projectButton.classList.add('button-project');
      let projectButtonLeftDiv = document.createElement('div');
      projectButtonLeftDiv.classList.add('left-project-panel');
      let projectButtonRightDiv = document.createElement('div');
      projectButtonRightDiv.classList.add('right-project-panel');
      let projectIcon = document.createElement('i');
      projectIcon.classList.add('fa-solid')
      projectIcon.classList.add('fa-tasks')
      let trashIcon = document.createElement('i')
      trashIcon.classList.add('fa-solid');
      trashIcon.classList.add('fa-trash');
        let projectNameSpan = document.createElement('span');
        projectNameSpan.textContent = p.name;
    //   projectButton.textContent = p.name;
      projectButton.addEventListener("click", projectSelectHandler);
      projectButtonLeftDiv.append(projectIcon, projectNameSpan)
      projectButtonRightDiv.append(trashIcon)
        projectButton.append(projectButtonLeftDiv, projectButtonRightDiv)
      projectsDiv.appendChild(projectButton);
      if(p.name === activeProjectName) projectButton.classList.add('active')
    }
    });
  }

  function selectAllProjectButtons() {
    return document.querySelectorAll('.button-project');
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
  constructor(name = 'No name', date, complete = false) {
    this.name = name;
    this.date = date || "No date";
    this.complete = complete;
    this.type = this.constructor.name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name || 'No name';
    localStorage.setItem("todoList", stringify(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList, null, 2));
  }
  getDate() {
    return this.date;
  }
  setDate(date) {
    this.date = date || 'No date';
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
  console.log(todoListStore);
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
  console.log(allStoredTasks);
  let projects = {};
  allStoredTasks.forEach((t) => {
    if (t.type === "Task") {
      projects[t.projectName] = projects[t.projectName] || [];
      projects[t.projectName].push(new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](t.name, t.date, t.complete));
    } else if (t.type === "Project") {
      projects[t.name] = projects[t.name] || [];
    }
  });
  console.log(projects);
  for (let project in projects) {
    let projObj = project === "Inbox" ? todoList.inbox : new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](project);
    console.log(project, projObj);
    projects[project].forEach((t) => {
      if (t.complete) projObj.addCompletedTask(t);
      else projObj.addTask(t);
    });
    todoList.addProject(projObj);
  }
  console.log(todoList);
} else {
  // Create starter projects and tasks:
  console.log("Here!");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmdEO0FBQ1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCwyQkFBMkIsZ0VBQVU7QUFDckMsNEJBQTRCLGdFQUFVO0FBQ3RDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENrRDtBQUNPOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLDRCQUE0QixpRUFBVztBQUN2Qyw2QkFBNkIsaUVBQVc7QUFDeEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ2dEO0FBQ1M7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGlCQUFpQjtBQUN2RTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUyxnRUFBVTtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzhDO0FBQ1c7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLFNBQVMsK0RBQVM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0J3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQndDO0FBQ1c7QUFDTTtBQUNXO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxpQkFBaUI7QUFDbEY7QUFDQTs7QUFFZTtBQUNmOztBQUVBLEVBQUUsc0VBQVk7QUFDZCx1QkFBdUIsK0VBQWlCO0FBQ3hDLHFCQUFxQixtRUFBUywyMkJBQTIyQjs7QUFFejRCO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFM1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLHlEQUF5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwwT0FBME87O0FBRTFPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDckRBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCc0M7QUFDTjtBQUNOOztBQUVYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDZEQUFzQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZEQUFzQjtBQUNoRDtBQUNBO0FBQ0EsWUFBWSw2REFBc0I7QUFDbEMsOEJBQThCLDZEQUFzQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBbUIsS0FBSyxnREFBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFJO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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InNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9qc29uLXN0cmluZ2lmeS1zYWZlL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJXzIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcbmV4cG9ydHMuZ2V0U2VyaWFsaXplID0gc2VyaWFsaXplclxuXG5mdW5jdGlvbiBzdHJpbmdpZnkob2JqLCByZXBsYWNlciwgc3BhY2VzLCBjeWNsZVJlcGxhY2VyKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIHNlcmlhbGl6ZXIocmVwbGFjZXIsIGN5Y2xlUmVwbGFjZXIpLCBzcGFjZXMpXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZXIocmVwbGFjZXIsIGN5Y2xlUmVwbGFjZXIpIHtcbiAgdmFyIHN0YWNrID0gW10sIGtleXMgPSBbXVxuXG4gIGlmIChjeWNsZVJlcGxhY2VyID09IG51bGwpIGN5Y2xlUmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgaWYgKHN0YWNrWzBdID09PSB2YWx1ZSkgcmV0dXJuIFwiW0NpcmN1bGFyIH5dXCJcbiAgICByZXR1cm4gXCJbQ2lyY3VsYXIgfi5cIiArIGtleXMuc2xpY2UoMCwgc3RhY2suaW5kZXhPZih2YWx1ZSkpLmpvaW4oXCIuXCIpICsgXCJdXCJcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciB0aGlzUG9zID0gc3RhY2suaW5kZXhPZih0aGlzKVxuICAgICAgfnRoaXNQb3MgPyBzdGFjay5zcGxpY2UodGhpc1BvcyArIDEpIDogc3RhY2sucHVzaCh0aGlzKVxuICAgICAgfnRoaXNQb3MgPyBrZXlzLnNwbGljZSh0aGlzUG9zLCBJbmZpbml0eSwga2V5KSA6IGtleXMucHVzaChrZXkpXG4gICAgICBpZiAofnN0YWNrLmluZGV4T2YodmFsdWUpKSB2YWx1ZSA9IGN5Y2xlUmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHN0YWNrLnB1c2godmFsdWUpXG5cbiAgICByZXR1cm4gcmVwbGFjZXIgPT0gbnVsbCA/IHZhbHVlIDogcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKVxuICB9XG59XG4iLCJpbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVJKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRvZG9MaXN0LCBQcm9qZWN0LCBUYXNrKVxuICAgIC8vRE9NIGNhY2hlXG4gICAgY29uc3QgaW5ib3hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcbiAgICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuICAgIGNvbnN0IHRoaXNXZWVrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoaXMtd2VlaycpO1xuICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKVxuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgY29uc3QgYWRkTmV3UHJvamVjdEZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybSAuYWRkJylcbiAgICBjb25zdCBjYW5jZWxOZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0gLmNhbmNlbCcpXG4gICAgY29uc3QgYWRkTmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgIGNvbnN0IG5ld1Rhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJyk7XG4gICAgY29uc3QgbmV3VGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKTtcbiAgICBjb25zdCBhZGROZXdUYXNrRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtIC5hZGQnKTtcbiAgICBjb25zdCBjYW5jZWxOZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0gLmNhbmNlbCcpO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdE5hbWVIMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJyk7XG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZC10YXNrcycpO1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgY29uc3QgYWRkTmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtQnV0dG9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tYnV0dG9ucycpO1xuICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ZhLXRyYXNoJyk7XG4gICAgXG4gICAgXG5cbiAgICAvL0FjdGl2ZSBwcm9qZWN0XG4gICAgbGV0IHByb2plY3RTZWxlY3RlZCA9IHRvZG9MaXN0LnNlbGVjdFByb2plY3QoXCJJbmJveFwiKTtcblxuICAgIC8vRXZlbnQgaGFuZGxlcnNcbiAgICBmdW5jdGlvbiBwcm9qZWN0U2VsZWN0SGFuZGxlcihlKSB7XG4gICAgICAgIHNlbGVjdEFsbFByb2plY3RCdXR0b25zKCkuZm9yRWFjaChwcm9qQnV0ID0+IHtcbiAgICAgICAgICAgIHByb2pCdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHNlbGVjdGVkQnV0dG9uID0gZS50YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicgPyBlLnRhcmdldCA6IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQnV0dG9uKTtcbiAgICAgICAgc2VsZWN0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgcHJvamVjdFNlbGVjdGVkID0gdG9kb0xpc3Quc2VsZWN0UHJvamVjdChzZWxlY3RlZEJ1dHRvbi50ZXh0Q29udGVudC50cmltKCkpO1xuICAgICAgICAvLyByZW1vdmUgcHJvamVjdFxuICAgICAgICBpZihBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2ZhLXRyYXNoJykpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnJlbW92ZVByb2plY3QocHJvamVjdFNlbGVjdGVkLm5hbWUpXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0ZWQgPSB0b2RvTGlzdC5zZWxlY3RQcm9qZWN0KCdJbmJveCcpO1xuICAgICAgICAgICAgaW5ib3hCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U2VsZWN0ZWQubmFtZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gXCJUb2RheVwiIHx8XG4gICAgICAgICAgcHJvamVjdFNlbGVjdGVkLm5hbWUgPT09IFwiVGhpcyB3ZWVrXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBhZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAvLyBhZGROZXdUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGFkZE5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcG9zaXRlJylcbiAgICAgICAgICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbXBvc2l0ZScpXG4gICAgICAgICAgICBhZGROZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkTmV3VGFza0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wb3NpdGUnKVxuICAgICAgICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnY29tcG9zaXRlJylcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U2VsZWN0ZWQpO1xuICAgICAgICBzZWxlY3RlZFByb2plY3ROYW1lSDEudGV4dENvbnRlbnQgPSBwcm9qZWN0U2VsZWN0ZWQubmFtZTtcbiAgICAgICAgcG9wdWxhdGVUYXNrcygpO1xuICAgICAgICBwb3B1bGF0ZVByb2plY3RzKHByb2plY3RTZWxlY3RlZC5uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGFza0NvbXBsZXRlVG9nZ2xlSGFuZGxlcihlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkLCBwcm9qZWN0U2VsZWN0ZWQpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0ZWQuY29tcGxldGVUYXNrVG9nZ2xlKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgcG9wdWxhdGVUYXNrcyhwcm9qZWN0U2VsZWN0ZWQpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB0YXNrRGV0YWlsc1VwZGF0ZUhhbmRsZXIoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxpbmcnKVxuICAgICAgICBsZXQgbG9jYWxQYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKVxuICAgICAgICBsZXQgcHJldmlvdXNUYXNrTmFtZSA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaXJjbGUnKS5pZFxuICAgICAgICBsZXQgcHJldmlvdXNUYXNrRGF0ZSA9IHByb2plY3RTZWxlY3RlZC5zZWxlY3RUYXNrKHByZXZpb3VzVGFza05hbWUpLmRhdGVcbiAgICAgICAgbGV0IHBhcmFncmFwaHMgPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdwJylcbiAgICAgICAgcGFyYWdyYXBocy5mb3JFYWNoKHBhcmEgPT4gcGFyYS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSlcbiAgICAgICAgLy8gcGFyYS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgICAgICBsZXQgaW5wdXRzID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgICAgICAgICAgaWYoaW5wdXQudHlwZSA9PT0gJ3RleHQnKSBpbnB1dC52YWx1ZSA9IHByZXZpb3VzVGFza05hbWVcbiAgICAgICAgICAgIGVsc2UgaW5wdXQudmFsdWUgPSBwcmV2aW91c1Rhc2tEYXRlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgICAgIGxldCBlZGl0SWNvbiA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1zcXVhcmUtcGVuJylcbiAgICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVUYXNrRWRpdHNIYW5kbGVyKVxuICAgICAgfVxuXG5cbiAgICAgIGZ1bmN0aW9uIHNhdmVUYXNrRWRpdHNIYW5kbGVyKGUpIHtcbiAgICAgICAgbGV0IGxvY2FsUGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCB0YXNrVGV4dElucHV0ID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXRhc2stbmFtZScpXG4gICAgICAgIGxldCB0YXNrRGF0ZUlucHV0ID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWR1ZS1kYXRlJylcbiAgICAgICAgbGV0IHByZXZpb3VzVGFza05hbWUgPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKCcuZmEtY2lyY2xlJykuaWRcblxuICAgICAgICBsZXQgdGFza1RvTW9kaWZ5ID0gcHJvamVjdFNlbGVjdGVkLnNlbGVjdFRhc2socHJldmlvdXNUYXNrTmFtZSlcbiAgICAgICAgdGFza1RvTW9kaWZ5LnNldE5hbWUodGFza1RleHRJbnB1dC52YWx1ZSlcbiAgICAgICAgdGFza1RvTW9kaWZ5LnNldERhdGUodGFza0RhdGVJbnB1dC52YWx1ZSkgXG4gICAgICAgIHBvcHVsYXRlVGFza3MoKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBkZWxldGVUYXNrSGFuZGxlcihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5ZWxwJylcbiAgICAgICAgbGV0IGxvY2FsUGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcHJldmlvdXNUYXNrTmFtZSA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1jaXJjbGUnKS5pZFxuICAgICAgICBsZXQgdGFza1RvRGVsZXRlID0gcHJvamVjdFNlbGVjdGVkLnNlbGVjdFRhc2socHJldmlvdXNUYXNrTmFtZSlcbiAgICAgICAgY29uc29sZS5sb2codGFza1RvRGVsZXRlKVxuICAgICAgICBwcm9qZWN0U2VsZWN0ZWQucmVtb3ZlVGFzayh0YXNrVG9EZWxldGUpXG4gICAgICAgIHBvcHVsYXRlVGFza3MoKVxuICAgICAgfVxuXG5cbiAgICAvLyAgIGZ1bmN0aW9uIHRhc2tEdWVEYXRlVXBkYXRlSGFuZGxlcihlKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdoYW5kbGluZyBhZ2FpbicpXG4gICAgLy8gICAgIGxldCBwYXJhID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2JykucXVlcnlTZWxlY3RvcigncCcpXG4gICAgLy8gICAgIHBhcmEuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICAvLyAgICAgbGV0IGlucHV0ID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIC8vICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIC8vICAgfVxuICAgIFxuICAgICAgZnVuY3Rpb24gYWRkUHJvamVjdEhhbmRsZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiLCBuZXdQcm9qZWN0TmFtZUlucHV0LnZhbHVlLCBcInRoZXJlXCIpO1xuICAgICAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lSW5wdXQudmFsdWUpKTtcbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgfVxuICAgIFxuICAgICAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RTZWxlY3RlZC5hZGRUYXNrKFxuICAgICAgICAgIG5ldyBUYXNrKG5ld1Rhc2tOYW1lSW5wdXQudmFsdWUsIG5ld1Rhc2tEYXRlSW5wdXQudmFsdWUpXG4gICAgICAgICk7XG4gICAgICAgIHBvcHVsYXRlVGFza3MocHJvamVjdFNlbGVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdG9nZ2xlQWRkUHJvamVjdEZvcm1IYW5kbGVyKGUpIHtcbiAgICAgICAgYWRkTmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdG9nZ2xlQWRkVGFza0Zvcm1IYW5kbGVyKGUpIHtcbiAgICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGFkZE5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cbiAgICAgIH1cblxuIFxuICAgICAgLy9FdmVudCBiaW5kaW5nXG4gICAgICBhZGROZXdUYXNrRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0hhbmRsZXIpO1xuICAgICAgYWRkTmV3UHJvamVjdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RIYW5kbGVyKTtcbiAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBZGRQcm9qZWN0Rm9ybUhhbmRsZXIpO1xuICAgICAgcHJvamVjdEZvcm1CdXR0b25zRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWRkUHJvamVjdEZvcm1IYW5kbGVyKTtcbiAgICAgIGluYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdFNlbGVjdEhhbmRsZXIpO1xuICAgICAgdG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gICAgICB0aGlzV2Vla0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RTZWxlY3RIYW5kbGVyKTtcbiAgICAgIGFkZE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBZGRUYXNrRm9ybUhhbmRsZXIpO1xuICAgIFxuICAgICAgLy8gICBXb3JrZXIgZnVuY3Rpb25zXG4gIGZ1bmN0aW9uIHBvcHVsYXRlVGFza3MoKSB7XG4gICAgdGFza3NEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbXBsZXRlZFRhc2tzRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwcm9qZWN0U2VsZWN0ZWQudGFza3MuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgbGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tdGFzaycpO1xuICAgICAgXG4gICAgICBcbiAgICAgIGxldCB0YXNrQnV0dG9uTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0J1dHRvbkxlZnREaXYuY2xhc3NMaXN0LmFkZCgnbGVmdC10YXNrLXBhbmVsJyk7XG5cbiAgICAgICAgbGV0IGNvbXBsZXRlVGFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGNvbXBsZXRlVGFza0ljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgdC5uYW1lKVxuICAgICAgICBjb21wbGV0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInKVxuICAgICAgICBjb21wbGV0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNpcmNsZScpXG4gICAgICAgIGxldCB0YXNrQ29udGVudFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGFza0NvbnRlbnRQYXJhLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpO1xuICAgICAgICB0YXNrQ29udGVudFBhcmEudGV4dENvbnRlbnQgPSB0Lm5hbWVcbiAgICAgICAgbGV0IHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgICAgICB0YXNrQ29udGVudE1vZGlmaWNhdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXRhc2stbmFtZScpXG4gICAgICAgIHRhc2tCdXR0b25MZWZ0RGl2LmFwcGVuZChjb21wbGV0ZVRhc2tJY29uLCB0YXNrQ29udGVudFBhcmEsIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQpXG5cbiAgICAgICAgbGV0IHRhc2tCdXR0b25SaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQnV0dG9uUmlnaHREaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtdGFzay1wYW5lbCcpO1xuICAgICAgICBsZXQgZHVlRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGR1ZURhdGVQYXJhLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgICAgIGR1ZURhdGVQYXJhLnRleHRDb250ZW50ID0gdC5kYXRlO1xuICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWR1ZS1kYXRlJyk7XG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnXG4gICAgICAgIGxldCB0cmFzaFRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICB0cmFzaFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICAgIHRyYXNoVGFza0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtdHJhc2gnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jYWxlbmRhci1saW5lcy1wZW5cIj48L2k+XG4gICAgICAgIGxldCB1cGRhdGVUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgdXBkYXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxuICAgICAgICB1cGRhdGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zcXVhcmUtcGVuJylcbiAgICAgICAgdGFza0J1dHRvblJpZ2h0RGl2LmFwcGVuZChkdWVEYXRlUGFyYSwgZGF0ZUlucHV0LCB1cGRhdGVUYXNrSWNvbiwgdHJhc2hUYXNrSWNvbilcblxuICAgICAgICB0YXNrQnV0dG9uLmFwcGVuZCh0YXNrQnV0dG9uTGVmdERpdiwgdGFza0J1dHRvblJpZ2h0RGl2KVxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKVxuXG4gICAgICAgIGNvbXBsZXRlVGFza0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDb21wbGV0ZVRvZ2dsZUhhbmRsZXIpO1xuICAgICAgICB0YXNrQ29udGVudFBhcmEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrRGV0YWlsc1VwZGF0ZUhhbmRsZXIpXG4gICAgICAgIGR1ZURhdGVQYXJhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0RldGFpbHNVcGRhdGVIYW5kbGVyKVxuICAgICAgICB0cmFzaFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFza0hhbmRsZXIpXG4gICAgLy8gICB0YXNrQnV0dG9uLnRleHRDb250ZW50ID1cbiAgICAvLyAgICAgcHJvamVjdFNlbGVjdGVkLm5hbWUgPT09IFwiVG9kYXlcIiB8fCBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gXCJUaGlzIHdlZWtcIlxuICAgIC8vICAgICAgID8gYCR7dC5uYW1lfSAtLSAke3QuZGF0ZX0gLS0gJHt0LnByb2plY3QubmFtZX1gXG4gICAgLy8gICAgICAgOiBgJHt0Lm5hbWV9IC0tICR7dC5kYXRlfWA7XG4gICAgLy8gICAgICAgdGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0Lm5hbWUpO1xuICAgIC8vICAgICAgIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tTZWxlY3RIYW5kbGVyKTtcbiAgICAvLyAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0U2VsZWN0ZWQuY29tcGxldGVkVGFza3MuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBsZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRhc2tCdXR0b24udGV4dENvbnRlbnQgPVxuICAgICAgICBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gXCJUb2RheVwiIHx8IHByb2plY3RTZWxlY3RlZC5uYW1lID09PSBcIlRoaXMgd2Vla1wiXG4gICAgICAgICAgPyBgJHt0Lm5hbWV9IC0tICR7dC5kYXRlfSAtLSAke3QucHJvamVjdC5uYW1lfWBcbiAgICAgICAgICA6IGAke3QubmFtZX0gLS0gJHt0LmRhdGV9YDtcbiAgICAgICAgICB0YXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIHQubmFtZSk7XG4gICAgICAgICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0NvbXBsZXRlVG9nZ2xlSGFuZGxlcik7XG4gICAgICAgICAgY29tcGxldGVkVGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzKGFjdGl2ZVByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdHNEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHRvZG9MaXN0LnByb2plY3RzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmKHAubmFtZSAhPT0gJ0luYm94JyAmJiAhcC5jb21wb3NpdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHAubmFtZSwgcC5jb21wb3NpdGUpXG4gICAgICBsZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1wcm9qZWN0Jyk7XG4gICAgICBsZXQgcHJvamVjdEJ1dHRvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RCdXR0b25MZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQtcHJvamVjdC1wYW5lbCcpO1xuICAgICAgbGV0IHByb2plY3RCdXR0b25SaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcHJvamVjdEJ1dHRvblJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXByb2plY3QtcGFuZWwnKTtcbiAgICAgIGxldCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJylcbiAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRhc2tzJylcbiAgICAgIGxldCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoJyk7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb2plY3ROYW1lU3Bhbi50ZXh0Q29udGVudCA9IHAubmFtZTtcbiAgICAvLyAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBwLm5hbWU7XG4gICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gICAgICBwcm9qZWN0QnV0dG9uTGVmdERpdi5hcHBlbmQocHJvamVjdEljb24sIHByb2plY3ROYW1lU3BhbilcbiAgICAgIHByb2plY3RCdXR0b25SaWdodERpdi5hcHBlbmQodHJhc2hJY29uKVxuICAgICAgICBwcm9qZWN0QnV0dG9uLmFwcGVuZChwcm9qZWN0QnV0dG9uTGVmdERpdiwgcHJvamVjdEJ1dHRvblJpZ2h0RGl2KVxuICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgICBpZihwLm5hbWUgPT09IGFjdGl2ZVByb2plY3ROYW1lKSBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0QWxsUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tcHJvamVjdCcpO1xuICB9XG5cbiBcblxuIFxuXG4gICAgLy8gICBpbml0aWFsaXplcnNcbiAgICBzZWxlY3RlZFByb2plY3ROYW1lSDEudGV4dENvbnRlbnQgPSBwcm9qZWN0U2VsZWN0ZWQubmFtZTtcbiAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgcG9wdWxhdGVUYXNrcyhwcm9qZWN0U2VsZWN0ZWQpO1xufVxuXG5cblxud2luZG93LnRvZG8gPSB7XG4gICAgdG9kb0xpc3QsXG4gICAgUHJvamVjdCxcbiAgICBUYXNrLFxuICB9OyIsImltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoXCJqc29uLXN0cmluZ2lmeS1zYWZlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgY29tcG9zaXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29tcG9zaXRlID0gY29tcG9zaXRlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmNvbXBsZXRlZFRhc2tzID0gW107XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGFzay5wcm9qZWN0ID0gdGhpcztcbiAgICB0YXNrLnByb2plY3ROYW1lID0gdGhpcy5uYW1lO1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIHN0cmluZ2lmeSh0b2RvTGlzdCwgbnVsbCwgMikpO1xuICB9XG4gIHJlbW92ZVRhc2socmVtb3ZlVGFzaykge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzayAhPT0gcmVtb3ZlVGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKTtcbiAgfVxuICBhZGRDb21wbGV0ZWRUYXNrKHRhc2spIHtcbiAgICB0YXNrLnByb2plY3QgPSB0aGlzO1xuICAgIHRhc2sucHJvamVjdE5hbWUgPSB0aGlzLm5hbWU7XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5wdXNoKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgc3RyaW5naWZ5KHRvZG9MaXN0LCBudWxsLCAyKSk7XG4gIH1cbiAgcmVtb3ZlQ29tcGxldGVkVGFzayhyZW1vdmVUYXNrKSB7XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sgIT09IHJlbW92ZVRhc2spO1xuICB9XG4gIGFsbFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmNvbmNhdCh0aGlzLmNvbXBsZXRlZFRhc2tzKTtcbiAgfVxuICBzZWxlY3RUYXNrKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsVGFza3MoKS5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIHJldHVybiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lO1xuICAgIH0pWzBdO1xuICB9XG4gIGNvbXBsZXRlVGFza1RvZ2dsZSh0YXNrVG9Ub2dnbGVOYW1lKSB7XG4gICAgbGV0IHRhc2tTZWxlY3RlZCA9IHRoaXMuc2VsZWN0VGFzayh0YXNrVG9Ub2dnbGVOYW1lKTtcbiAgICB0YXNrU2VsZWN0ZWQudG9nZ2xlVGFza0NvbXBsZXRlKCk7XG4gICAgbGV0IHByb2plY3QgPSB0YXNrU2VsZWN0ZWQucHJvamVjdDtcbiAgICBsZXQgYWxsVGFza3MgPSBwcm9qZWN0LmFsbFRhc2tzKCk7XG4gICAgcHJvamVjdC50YXNrcyA9IFtdO1xuICAgIHByb2plY3QuY29tcGxldGVkVGFza3MgPSBbXTtcbiAgICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZSkgdGFzay5wcm9qZWN0LmFkZENvbXBsZXRlZFRhc2sodGFzayk7XG4gICAgICBlbHNlIHRhc2sucHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgIH0pO1xuICAgIHByb2plY3QudG9kby5hc3NlbWJsZUNvbXBvc2l0ZXMoKTtcbiAgfVxufVxuIiwiY29uc3Qgc3RyaW5naWZ5ID0gcmVxdWlyZShcImpzb24tc3RyaW5naWZ5LXNhZmVcIik7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnTm8gbmFtZScsIGRhdGUsIGNvbXBsZXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGUgfHwgXCJObyBkYXRlXCI7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZSB8fCAnTm8gbmFtZSc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKTtcbiAgfVxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGU7XG4gIH1cbiAgc2V0RGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZSB8fCAnTm8gZGF0ZSc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKTtcbiAgfVxuICB0b2dnbGVUYXNrQ29tcGxldGUoKSB7XG4gICAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBcywgaXNUb2RheSwgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuY29uc3Qgc3RyaW5naWZ5ID0gcmVxdWlyZShcImpzb24tc3RyaW5naWZ5LXNhZmVcIik7XG5cbmV4cG9ydCBjb25zdCB0b2RvTGlzdCA9IHtcbiAgaW5ib3g6IG5ldyBQcm9qZWN0KFwiSW5ib3hcIiksXG4gIHRvZGF5OiBuZXcgUHJvamVjdChcIlRvZGF5XCIsIHRydWUpLFxuICB0aGlzV2VlazogbmV3IFByb2plY3QoXCJUaGlzIHdlZWtcIiwgdHJ1ZSksXG4gIHByb2plY3RzOiBbXSxcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdC50b2RvID0gdGhpcztcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodGhpcywgbnVsbCwgMikpO1xuICB9LFxuICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QubmFtZSAhPT0gcHJvamVjdE5hbWVcbiAgICApO1xuICB9LFxuICBhc3NlbWJsZUNvbXBvc2l0ZXMoKSB7XG4gICAgbGV0IGNvbXBvc2l0ZXMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5jb21wb3NpdGUpO1xuICAgIGNvbXBvc2l0ZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgYy50YXNrcy5sZW5ndGggPSAwO1xuICAgICAgYy5jb21wbGV0ZWRUYXNrcy5sZW5ndGggPSAwO1xuICAgICAgaWYgKGMubmFtZSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgIGlmIChwLmNvbXBvc2l0ZSkgcmV0dXJuO1xuICAgICAgICAgIGxldCBhbGxUYXNrcyA9IHAuYWxsVGFza3MoKTtcbiAgICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0LmRhdGUpKSkge1xuICAgICAgICAgICAgICBpZiAodC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9kYXkuY29tcGxldGVkVGFza3MucHVzaCh0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5LnRhc2tzLnB1c2godCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGMubmFtZSA9PT0gXCJUaGlzIHdlZWtcIikge1xuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICBpZiAocC5jb21wb3NpdGUpIHJldHVybjtcbiAgICAgICAgICBsZXQgYWxsVGFza3MgPSBwLmFsbFRhc2tzKCk7XG4gICAgICAgICAgYWxsVGFza3MuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVGhpc1dlZWsobmV3IERhdGUodC5kYXRlKSwgeyB3ZWVrU3RhcnRzT246IDEgfSkpIHtcbiAgICAgICAgICAgICAgaWYgKHQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoaXNXZWVrLmNvbXBsZXRlZFRhc2tzLnB1c2godCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGlzV2Vlay50YXNrcy5wdXNoKHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgc3RyaW5naWZ5KHRoaXMsIG51bGwsIDIpKTtcbiAgfSxcbiAgc2VsZWN0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMuYXNzZW1ibGVDb21wb3NpdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZTtcbiAgICB9KVswXTtcbiAgfSxcbiAgLy8gY29uc29sZSBtZXRob2RcbiAgZGlzcGxheVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IHRoaXMuc2VsZWN0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgZm9yIChsZXQga2V5IGluIHByb2plY3QpIHtcbiAgICAgIGlmIChrZXkgPT09IFwibmFtZVwiKSBjb25zb2xlLmxvZyhgbmFtZTogJHtwcm9qZWN0W2tleV19YCk7XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwidGFza3NcIikge1xuICAgICAgICBwcm9qZWN0W2tleV0uZm9yRWFjaCgodGFzaywgaW5kZXgpID0+XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgVGFzayR7aW5kZXggKyAxfTogTmFtZSAtICR7dGFzay5uYW1lfSBEYXRlIC0gJHt0YXNrLmRhdGV9ICR7XG4gICAgICAgICAgICAgIHByb2plY3QubmFtZSAhPT0gXCJUb2RheVwiICYmIHByb2plY3QubmFtZSAhPT0gXCJUaGlzIHdlZWtcIlxuICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgIDogYCgke3Byb2plY3QubmFtZX0pYFxuICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0W2tleV0uZm9yRWFjaCgoY29tcGxldGVUYXNrLCBpbmRleCkgPT5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBDb21wbGV0ZWQgVGFzayR7aW5kZXggKyAxfTogTmFtZSAtICR7Y29tcGxldGVUYXNrLm5hbWV9IERhdGUgLSAke1xuICAgICAgICAgICAgICBjb21wbGV0ZVRhc2suZGF0ZVxuICAgICAgICAgICAgfSAke1xuICAgICAgICAgICAgICBwcm9qZWN0Lm5hbWUgIT09IFwiVG9kYXlcIiAmJiBwcm9qZWN0Lm5hbWUgIT09IFwiVGhpcyB3ZWVrXCJcbiAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICA6IGAoJHtwcm9qZWN0Lm5hbWV9KWBcbiAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKSB7XG4gIC8vIEdyYWIgZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxuICBsZXQgdG9kb0xpc3RTdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gIGNvbnNvbGUubG9nKHRvZG9MaXN0U3RvcmUpO1xuICBsZXQgYWxsU3RvcmVkVGFza3MgPSBbXTtcbiAgdG9kb0xpc3RTdG9yZS5wcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgaWYgKCFwLmNvbXBvc2l0ZSkge1xuICAgICAgLy8gJiYgcC5uYW1lICE9PSAnSW5ib3gnXG4gICAgICBpZiAocC50YXNrcy5sZW5ndGggIT09IDAgfHwgcC5jb21wbGV0ZWRUYXNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcC50YXNrcy5mb3JFYWNoKCh0KSA9PiBhbGxTdG9yZWRUYXNrcy5wdXNoKHQpKTtcbiAgICAgICAgcC5jb21wbGV0ZWRUYXNrcy5mb3JFYWNoKCh0KSA9PiBhbGxTdG9yZWRUYXNrcy5wdXNoKHQpKTtcbiAgICAgIH0gZWxzZSBhbGxTdG9yZWRUYXNrcy5wdXNoKHApO1xuICAgIH1cbiAgfSk7XG4gIGNvbnNvbGUubG9nKGFsbFN0b3JlZFRhc2tzKTtcbiAgbGV0IHByb2plY3RzID0ge307XG4gIGFsbFN0b3JlZFRhc2tzLmZvckVhY2goKHQpID0+IHtcbiAgICBpZiAodC50eXBlID09PSBcIlRhc2tcIikge1xuICAgICAgcHJvamVjdHNbdC5wcm9qZWN0TmFtZV0gPSBwcm9qZWN0c1t0LnByb2plY3ROYW1lXSB8fCBbXTtcbiAgICAgIHByb2plY3RzW3QucHJvamVjdE5hbWVdLnB1c2gobmV3IFRhc2sodC5uYW1lLCB0LmRhdGUsIHQuY29tcGxldGUpKTtcbiAgICB9IGVsc2UgaWYgKHQudHlwZSA9PT0gXCJQcm9qZWN0XCIpIHtcbiAgICAgIHByb2plY3RzW3QubmFtZV0gPSBwcm9qZWN0c1t0Lm5hbWVdIHx8IFtdO1xuICAgIH1cbiAgfSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgZm9yIChsZXQgcHJvamVjdCBpbiBwcm9qZWN0cykge1xuICAgIGxldCBwcm9qT2JqID0gcHJvamVjdCA9PT0gXCJJbmJveFwiID8gdG9kb0xpc3QuaW5ib3ggOiBuZXcgUHJvamVjdChwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LCBwcm9qT2JqKTtcbiAgICBwcm9qZWN0c1twcm9qZWN0XS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICBpZiAodC5jb21wbGV0ZSkgcHJvak9iai5hZGRDb21wbGV0ZWRUYXNrKHQpO1xuICAgICAgZWxzZSBwcm9qT2JqLmFkZFRhc2sodCk7XG4gICAgfSk7XG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qT2JqKTtcbiAgfVxuICBjb25zb2xlLmxvZyh0b2RvTGlzdCk7XG59IGVsc2Uge1xuICAvLyBDcmVhdGUgc3RhcnRlciBwcm9qZWN0cyBhbmQgdGFza3M6XG4gIGNvbnNvbGUubG9nKFwiSGVyZSFcIik7XG4gIGNvbnN0IHN0YXJ0ZXJQcm9qZWN0MSA9IG5ldyBQcm9qZWN0KFwiTGVhcm4gSmF2YXNjcmlwdFwiKTtcbiAgY29uc3Qgc3RhcnRlclByb2plY3QyID0gbmV3IFByb2plY3QoXCJMZWFybiBtb3JlIEphdmFzY3JpcHRcIik7XG4gIGNvbnN0IHN0YXJ0ZXJUYXNrczEgPSBbXG4gICAgbmV3IFRhc2soXCJXcml0ZSBjb2RlMVwiLCBcIjIwMjMtMDQtMTBcIiksXG4gICAgbmV3IFRhc2soXCJSZWZhY3RvciBvbGQgY29kZTFcIiwgXCIyMDIzLTA0LTEyXCIpLFxuICAgIG5ldyBUYXNrKFwiZm9vMVwiLCBcIjIwMjMtMDQtMTRcIiksXG4gICAgbmV3IFRhc2soXCJiYXIxXCIsIFwiMjAyMy0wNC0yMFwiKSxcbiAgICBuZXcgVGFzayhcImJhejFcIiwgXCIyMDIzLTA0LTI1XCIpLFxuICBdO1xuICBjb25zdCBzdGFydGVyVGFza3MyID0gW1xuICAgIG5ldyBUYXNrKFwiV3JpdGUgY29kZTJcIiwgXCIyMDIzLTA0LTExXCIpLFxuICAgIG5ldyBUYXNrKFwiUmVmYWN0b3Igb2xkIGNvZGUyXCIsIFwiMjAyMy0wNC0xM1wiKSxcbiAgICBuZXcgVGFzayhcImZvbzJcIiwgXCIyMDIzLTA0LTE2XCIpLFxuICAgIG5ldyBUYXNrKFwiYmFyMlwiLCBcIjIwMjMtMDQtMjBcIiksXG4gICAgbmV3IFRhc2soXCJiYXoyXCIsIFwiMjAyMy0wNC0yNVwiKSxcbiAgXTtcblxuICB0b2RvTGlzdC5hZGRQcm9qZWN0KHN0YXJ0ZXJQcm9qZWN0MSk7XG4gIHN0YXJ0ZXJUYXNrczEuZm9yRWFjaCgodGFzaykgPT4gc3RhcnRlclByb2plY3QxLmFkZFRhc2sodGFzaykpO1xuXG4gIHRvZG9MaXN0LmFkZFByb2plY3Qoc3RhcnRlclByb2plY3QyKTtcbiAgc3RhcnRlclRhc2tzMi5mb3JFYWNoKCh0YXNrKSA9PiBzdGFydGVyUHJvamVjdDIuYWRkVGFzayh0YXNrKSk7XG59XG5pZiAoIXRvZG9MaXN0LnByb2plY3RzLmluY2x1ZGVzKHRvZG9MaXN0LmluYm94KSlcbiAgdG9kb0xpc3QuYWRkUHJvamVjdCh0b2RvTGlzdC5pbmJveCk7XG50b2RvTGlzdC5hZGRQcm9qZWN0KHRvZG9MaXN0LnRvZGF5KTtcbnRvZG9MaXN0LmFkZFByb2plY3QodG9kb0xpc3QudGhpc1dlZWspO1xudG9kb0xpc3QuYXNzZW1ibGVDb21wb3NpdGVzKFwiVG9kYXlcIik7XG50b2RvTGlzdC5hc3NlbWJsZUNvbXBvc2l0ZXMoXCJUaGlzIHdlZWtcIik7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXzJcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgVUkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9