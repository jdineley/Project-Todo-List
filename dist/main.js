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

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
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
/* harmony import */ var _imgs_todo_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/todo-icon.svg */ "./src/imgs/todo-icon.svg");





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
  const openSideBarButton = document.querySelector(".button-open-nav");
  const sideBarDiv = document.querySelector(".side-bar");
  const logoDiv = document.querySelector(".logo");
  const todoListTitleH1 = document.querySelector("#todo-list-title");

  //Webpack assets
  const icon = new Image();
  icon.src = _imgs_todo_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
  logoDiv.insertBefore(icon, todoListTitleH1);

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
    if(!_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.selectProject(newProjectNameInput.value.trim())) _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectNameInput.value.trim()));
    else alert('This name is already taken')
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

  function toggleSideBarHandler() {
    sideBarDiv.classList.toggle("active");
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
  openSideBarButton.addEventListener("click", toggleSideBarHandler);

  //   Worker functions
  function populateTasks() {
    tasksDiv.textContent = "";
    completedTasksDiv.textContent = "";
    projectSelected.tasks.forEach((t) => {
      let taskButton = document.createElement("button");
      if (!t.inDate) taskButton.classList.add("out-of-date");
      else taskButton.classList.remove("out-of-date");
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
      if (!t.inDate) taskButton.classList.add("out-of-date");
      else taskButton.classList.remove("out-of-date");
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");

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
    task.inDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(task.date), new Date());
    this.tasks.push(task);
    this.taskOrdering();
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
    task.inDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(task.date), new Date());
    this.completedTasks.push(task);
    this.completedTaskOrdering();
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
  taskOrdering() {
    let noDateTasks = this.tasks.filter((t) => t.date === "No date");
    let datedTasks = this.tasks.filter((t) => t.date !== "No date");
    datedTasks.sort((a, b) => {
      let aDate = new Date(a.date);
      let bDate = new Date(b.date);
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(aDate, bDate);
    });
    this.tasks = datedTasks.concat(noDateTasks);
  }
  completedTaskOrdering() {
    let noDateTasks = this.completedTasks.filter((t) => t.date === "No date");
    let datedTasks = this.completedTasks.filter((t) => t.date !== "No date");
    datedTasks.sort((a, b) => {
      let aDate = new Date(a.date);
      let bDate = new Date(b.date);
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(aDate, bDate);
    });
    this.completedTasks = datedTasks.concat(noDateTasks);
  }
}


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ "./src/modules/todoList.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




function storage() {
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
        projects[t.projectName].push(new _task__WEBPACK_IMPORTED_MODULE_2__["default"](t.name, t.date, t.complete));
      } else if (t.type === "Project") {
        projects[t.name] = projects[t.name] || [];
      }
    });
    for (let project in projects) {
      let projObj = project === "Inbox" ? _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.inbox : new _project__WEBPACK_IMPORTED_MODULE_1__["default"](project);
      projects[project].forEach((t) => {
        if (t.complete) projObj.addCompletedTask(t);
        else projObj.addTask(t);
      });
      _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(projObj);
    }
  } else {
    // Create starter projects and tasks:
    // const starterProject1 = new Project("Learn Javascript");
    // const starterProject2 = new Project("Learn more Javascript");
    // const starterTasks1 = [
    //   new Task("Write code1", "2023-04-10"),
    //   new Task("Refactor old code1", "2023-04-12"),
    //   new Task("foo1", "2023-04-14"),
    //   new Task("bar1", "2023-04-20"),
    //   new Task("baz1", "2023-04-25"),
    // ];
    // const starterTasks2 = [
    //   new Task("Write code2", "2023-04-11"),
    //   new Task("Refactor old code2", "2023-04-13"),
    //   new Task("foo2", "2023-04-16"),
    //   new Task("bar2", "2023-04-20"),
    //   new Task("baz2", "2023-04-25"),
    // ];
    // todoList.addProject(starterProject1);
    // starterTasks1.forEach((task) => starterProject1.addTask(task));
    // todoList.addProject(starterProject2);
    // starterTasks2.forEach((task) => starterProject2.addTask(task));
  }
  if (!_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.projects.includes(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.inbox))
    _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.inbox);
  _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.today);
  _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(_todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.thisWeek);
  _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.assembleComposites("Today");
  _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.assembleComposites("This week");
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
const stringify = __webpack_require__(/*! json-stringify-safe */ "./node_modules/json-stringify-safe/stringify.js");



class Task {
  inDate;
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
    this.inDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(this.date), new Date());
    this.project.taskOrdering();
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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");



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

(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/imgs/todo-icon.svg":
/*!********************************!*\
  !*** ./src/imgs/todo-icon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e4e7950aa6019fd34d9f.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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


document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsNkRBQXNCLG9DQUFvQywwREFBbUIsS0FBSyxnREFBTztBQUNqRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSw2Q0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVEsd0JBQXdCLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUSx3QkFB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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2Y4Qjs7QUFFOUIsOENBQThDLG1EQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNBZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2pzb24tc3RyaW5naWZ5LXNhZmUvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuZXhwb3J0cy5nZXRTZXJpYWxpemUgPSBzZXJpYWxpemVyXG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShvYmosIHJlcGxhY2VyLCBzcGFjZXMsIGN5Y2xlUmVwbGFjZXIpIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgc2VyaWFsaXplcihyZXBsYWNlciwgY3ljbGVSZXBsYWNlciksIHNwYWNlcylcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplcihyZXBsYWNlciwgY3ljbGVSZXBsYWNlcikge1xuICB2YXIgc3RhY2sgPSBbXSwga2V5cyA9IFtdXG5cbiAgaWYgKGN5Y2xlUmVwbGFjZXIgPT0gbnVsbCkgY3ljbGVSZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoc3RhY2tbMF0gPT09IHZhbHVlKSByZXR1cm4gXCJbQ2lyY3VsYXIgfl1cIlxuICAgIHJldHVybiBcIltDaXJjdWxhciB+LlwiICsga2V5cy5zbGljZSgwLCBzdGFjay5pbmRleE9mKHZhbHVlKSkuam9pbihcIi5cIikgKyBcIl1cIlxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHRoaXNQb3MgPSBzdGFjay5pbmRleE9mKHRoaXMpXG4gICAgICB+dGhpc1BvcyA/IHN0YWNrLnNwbGljZSh0aGlzUG9zICsgMSkgOiBzdGFjay5wdXNoKHRoaXMpXG4gICAgICB+dGhpc1BvcyA/IGtleXMuc3BsaWNlKHRoaXNQb3MsIEluZmluaXR5LCBrZXkpIDoga2V5cy5wdXNoKGtleSlcbiAgICAgIGlmICh+c3RhY2suaW5kZXhPZih2YWx1ZSkpIHZhbHVlID0gY3ljbGVSZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpXG4gICAgfVxuICAgIGVsc2Ugc3RhY2sucHVzaCh2YWx1ZSlcblxuICAgIHJldHVybiByZXBsYWNlciA9PSBudWxsID8gdmFsdWUgOiByZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpXG4gIH1cbn1cbiIsImltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pbWdzL3RvZG8taWNvbi5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVUkoKSB7XG4gIC8vRE9NIGNhY2hlXG4gIGNvbnN0IGluYm94QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveFwiKTtcbiAgY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xuICBjb25zdCB0aGlzV2Vla0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhpcy13ZWVrXCIpO1xuICBjb25zdCBhZGROZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbiAgY29uc3QgbmV3UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuICBjb25zdCBhZGROZXdQcm9qZWN0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuYWRkLXByb2plY3QtZm9ybSAuYWRkXCJcbiAgKTtcbiAgY29uc3QgYWRkTmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gIGNvbnN0IG5ld1Rhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKTtcbiAgY29uc3QgbmV3VGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpO1xuICBjb25zdCBhZGROZXdUYXNrRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybSAuYWRkXCIpO1xuICBjb25zdCBjYW5jZWxOZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtIC5jYW5jZWxcIik7XG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdE5hbWVIMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpO1xuICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybVwiKTtcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICBjb25zdCBjb21wbGV0ZWRUYXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGVkLXRhc2tzXCIpO1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdC1mb3JtXCIpO1xuICBjb25zdCBwcm9qZWN0Rm9ybUJ1dHRvbnNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1idXR0b25zXCIpO1xuICBjb25zdCBvcGVuU2lkZUJhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW9wZW4tbmF2XCIpO1xuICBjb25zdCBzaWRlQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLWJhclwiKTtcbiAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKTtcbiAgY29uc3QgdG9kb0xpc3RUaXRsZUgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWxpc3QtdGl0bGVcIik7XG5cbiAgLy9XZWJwYWNrIGFzc2V0c1xuICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gIGljb24uc3JjID0gSWNvbjtcbiAgbG9nb0Rpdi5pbnNlcnRCZWZvcmUoaWNvbiwgdG9kb0xpc3RUaXRsZUgxKTtcblxuICAvL0FjdGl2ZSBwcm9qZWN0XG4gIGxldCBwcm9qZWN0U2VsZWN0ZWQgPSB0b2RvTGlzdC5zZWxlY3RQcm9qZWN0KFwiSW5ib3hcIik7XG5cbiAgLy9FdmVudCBoYW5kbGVyc1xuICBmdW5jdGlvbiBwcm9qZWN0U2VsZWN0SGFuZGxlcihlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGkpID0+IChpLnZhbHVlID0gXCJcIikpO1xuICAgIGNsb3NlQWRkUHJvamVjdEZvcm0oKTtcbiAgICBjbG9zZUFkZFRhc2tGb3JtKCk7XG4gICAgc2VsZWN0QWxsUHJvamVjdEJ1dHRvbnMoKS5mb3JFYWNoKChwcm9qQnV0KSA9PiB7XG4gICAgICBwcm9qQnV0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgbGV0IHNlbGVjdGVkQnV0dG9uID1cbiAgICAgIGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgPyBlLnRhcmdldCA6IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIik7XG4gICAgc2VsZWN0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBwcm9qZWN0U2VsZWN0ZWQgPSB0b2RvTGlzdC5zZWxlY3RQcm9qZWN0KHNlbGVjdGVkQnV0dG9uLnRleHRDb250ZW50LnRyaW0oKSk7XG4gICAgLy8gcmVtb3ZlIHByb2plY3QgKioqKioqKlxuICAgIGlmIChBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoXCJmYS10cmFzaFwiKSkge1xuICAgICAgdG9kb0xpc3QucmVtb3ZlUHJvamVjdChwcm9qZWN0U2VsZWN0ZWQubmFtZSk7XG4gICAgICBwcm9qZWN0U2VsZWN0ZWQgPSB0b2RvTGlzdC5zZWxlY3RQcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgICBpbmJveEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcHJvamVjdCAqKioqKioqXG4gICAgaWYgKFxuICAgICAgcHJvamVjdFNlbGVjdGVkLm5hbWUgPT09IFwiVG9kYXlcIiB8fFxuICAgICAgcHJvamVjdFNlbGVjdGVkLm5hbWUgPT09IFwiVGhpcyB3ZWVrXCJcbiAgICApIHtcbiAgICAgIGFkZE5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbXBvc2l0ZVwiKTtcbiAgICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJjb21wb3NpdGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZE5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNvbXBvc2l0ZVwiKTtcbiAgICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wb3NpdGVcIik7XG4gICAgfVxuICAgIHNlbGVjdGVkUHJvamVjdE5hbWVIMS50ZXh0Q29udGVudCA9IHByb2plY3RTZWxlY3RlZC5uYW1lO1xuICAgIHBvcHVsYXRlVGFza3MoKTtcbiAgICBwb3B1bGF0ZVByb2plY3RzKHByb2plY3RTZWxlY3RlZC5uYW1lKTtcbiAgfVxuICBmdW5jdGlvbiB0YXNrQ29tcGxldGVUb2dnbGVIYW5kbGVyKGUpIHtcbiAgICBjbG9zZUFkZFRhc2tGb3JtKCk7XG4gICAgcHJvamVjdFNlbGVjdGVkLmNvbXBsZXRlVGFza1RvZ2dsZShlLnRhcmdldC5pZCk7XG4gICAgcG9wdWxhdGVUYXNrcyhwcm9qZWN0U2VsZWN0ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGFza0RldGFpbHNVcGRhdGVIYW5kbGVyKGUpIHtcbiAgICBhbGxFbGVtZW50c0ZvY3VzUmVzZXQoKTtcbiAgICBjbG9zZUFkZFRhc2tGb3JtKCk7XG4gICAgbGV0IGxvY2FsUGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKTtcbiAgICBsZXQgcHJldmlvdXNUYXNrTmFtZSA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlXCIpXG4gICAgICA/IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlXCIpLmlkXG4gICAgICA6IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtY2lyY2xlLWNoZWNrXCIpLmlkO1xuICAgIGxldCBwcmV2aW91c1Rhc2tEYXRlID0gcHJvamVjdFNlbGVjdGVkLnNlbGVjdFRhc2socHJldmlvdXNUYXNrTmFtZSkuZGF0ZTtcbiAgICBsZXQgcGFyYWdyYXBocyA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwXCIpO1xuICAgIHBhcmFncmFwaHMuZm9yRWFjaCgocGFyYSkgPT4gcGFyYS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpKTtcbiAgICBsZXQgaW5wdXRzID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGlmIChpbnB1dC50eXBlID09PSBcInRleHRcIikgaW5wdXQudmFsdWUgPSBwcmV2aW91c1Rhc2tOYW1lO1xuICAgICAgZWxzZSBpbnB1dC52YWx1ZSA9IHByZXZpb3VzVGFza0RhdGU7XG4gICAgfSk7XG4gICAgbGV0IGVkaXRJY29uID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1zcXVhcmUtcGVuXCIpO1xuICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNhdmVUYXNrRWRpdHNIYW5kbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVUYXNrRWRpdHNIYW5kbGVyKGUpIHtcbiAgICBsZXQgbG9jYWxQYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xuICAgIGxldCB0YXNrVGV4dElucHV0ID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC10YXNrLW5hbWVcIik7XG4gICAgbGV0IHRhc2tEYXRlSW5wdXQgPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWR1ZS1kYXRlXCIpO1xuICAgIGxldCBwcmV2aW91c1Rhc2tOYW1lID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGVcIilcbiAgICAgID8gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGVcIikuaWRcbiAgICAgIDogbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGUtY2hlY2tcIikuaWQ7XG4gICAgbGV0IHRhc2tUb01vZGlmeSA9IHByb2plY3RTZWxlY3RlZC5zZWxlY3RUYXNrKHByZXZpb3VzVGFza05hbWUpO1xuICAgIHRhc2tUb01vZGlmeS5zZXROYW1lKHRhc2tUZXh0SW5wdXQudmFsdWUpO1xuICAgIHRhc2tUb01vZGlmeS5zZXREYXRlKHRhc2tEYXRlSW5wdXQudmFsdWUpO1xuICAgIHBvcHVsYXRlVGFza3MoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2tIYW5kbGVyKGUpIHtcbiAgICBjbG9zZUFkZFRhc2tGb3JtKCk7XG4gICAgbGV0IGxvY2FsUGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKTtcblxuICAgIGxldCBwcmV2aW91c1Rhc2tOYW1lID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGVcIilcbiAgICAgID8gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGVcIikuaWRcbiAgICAgIDogbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGUtY2hlY2tcIikuaWQ7XG4gICAgbGV0IHRhc2tUb0RlbGV0ZSA9IHByb2plY3RTZWxlY3RlZC5zZWxlY3RUYXNrKHByZXZpb3VzVGFza05hbWUpO1xuICAgIHByb2plY3RTZWxlY3RlZC5yZW1vdmVUYXNrKHRhc2tUb0RlbGV0ZSk7XG4gICAgcG9wdWxhdGVUYXNrcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdEhhbmRsZXIoZSkge1xuICAgIGlmKCF0b2RvTGlzdC5zZWxlY3RQcm9qZWN0KG5ld1Byb2plY3ROYW1lSW5wdXQudmFsdWUudHJpbSgpKSkgdG9kb0xpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKSkpO1xuICAgIGVsc2UgYWxlcnQoJ1RoaXMgbmFtZSBpcyBhbHJlYWR5IHRha2VuJylcbiAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGkpID0+IChpLnZhbHVlID0gXCJcIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGFza0hhbmRsZXIoZSkge1xuICAgIHByb2plY3RTZWxlY3RlZC5hZGRUYXNrKFxuICAgICAgbmV3IFRhc2sobmV3VGFza05hbWVJbnB1dC52YWx1ZSwgbmV3VGFza0RhdGVJbnB1dC52YWx1ZSlcbiAgICApO1xuICAgIHBvcHVsYXRlVGFza3MocHJvamVjdFNlbGVjdGVkKTtcbiAgICBjbG9zZUFkZFRhc2tGb3JtKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGkpID0+IChpLnZhbHVlID0gXCJcIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWRkUHJvamVjdEZvcm1IYW5kbGVyKGUpIHtcbiAgICBhZGROZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGFkZE5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaSkgPT4gKGkudmFsdWUgPSBcIlwiKSk7XG4gICAgY2xvc2VBZGRUYXNrRm9ybSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWRkVGFza0Zvcm1IYW5kbGVyKGUpIHtcbiAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGFkZE5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBwb3B1bGF0ZVRhc2tzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGkpID0+IChpLnZhbHVlID0gXCJcIikpO1xuICAgIGNsb3NlQWRkUHJvamVjdEZvcm0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNpZGVCYXJIYW5kbGVyKCkge1xuICAgIHNpZGVCYXJEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIC8vRXZlbnQgYmluZGluZ1xuICBhZGROZXdUYXNrRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFza0hhbmRsZXIpO1xuICBhZGROZXdQcm9qZWN0Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdEhhbmRsZXIpO1xuICBhZGROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVBZGRQcm9qZWN0Rm9ybUhhbmRsZXIpO1xuICBwcm9qZWN0Rm9ybUJ1dHRvbnNEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFkZFByb2plY3RGb3JtSGFuZGxlcik7XG4gIGluYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gIHRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gIHRoaXNXZWVrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0U2VsZWN0SGFuZGxlcik7XG4gIGFkZE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFkZFRhc2tGb3JtSGFuZGxlcik7XG4gIGNhbmNlbE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFkZFRhc2tGb3JtSGFuZGxlcik7XG4gIG9wZW5TaWRlQmFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTaWRlQmFySGFuZGxlcik7XG5cbiAgLy8gICBXb3JrZXIgZnVuY3Rpb25zXG4gIGZ1bmN0aW9uIHBvcHVsYXRlVGFza3MoKSB7XG4gICAgdGFza3NEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbXBsZXRlZFRhc2tzRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwcm9qZWN0U2VsZWN0ZWQudGFza3MuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgbGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgaWYgKCF0LmluRGF0ZSkgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3V0LW9mLWRhdGVcIik7XG4gICAgICBlbHNlIHRhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm91dC1vZi1kYXRlXCIpO1xuICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXRhc2tcIik7XG5cbiAgICAgIGxldCB0YXNrQnV0dG9uTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrQnV0dG9uTGVmdERpdi5jbGFzc0xpc3QuYWRkKFwibGVmdC10YXNrLXBhbmVsXCIpO1xuXG4gICAgICBsZXQgY29tcGxldGVUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgY29tcGxldGVUYXNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0Lm5hbWUpO1xuICAgICAgY29tcGxldGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiKTtcbiAgICAgIGNvbXBsZXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLWNpcmNsZVwiKTtcbiAgICAgIGxldCB0YXNrQ29udGVudFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRhc2tDb250ZW50UGFyYS5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuICAgICAgdGFza0NvbnRlbnRQYXJhLnRleHRDb250ZW50ID1cbiAgICAgICAgcHJvamVjdFNlbGVjdGVkLm5hbWUgPT09IFwiVG9kYXlcIiB8fCBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gXCJUaGlzIHdlZWtcIlxuICAgICAgICAgID8gYCR7dC5uYW1lfSAtLS0tLS0tLS0tLS0tLS0tLS0tLSAoJHt0LnByb2plY3ROYW1lfSlgXG4gICAgICAgICAgOiB0Lm5hbWU7XG4gICAgICBsZXQgdGFza0NvbnRlbnRNb2RpZmljYXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgdGFza0NvbnRlbnRNb2RpZmljYXRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGFzay1uYW1lXCIpO1xuICAgICAgdGFza0J1dHRvbkxlZnREaXYuYXBwZW5kKFxuICAgICAgICBjb21wbGV0ZVRhc2tJY29uLFxuICAgICAgICB0YXNrQ29udGVudFBhcmEsXG4gICAgICAgIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXRcbiAgICAgICk7XG5cbiAgICAgIGxldCB0YXNrQnV0dG9uUmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0J1dHRvblJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoXCJyaWdodC10YXNrLXBhbmVsXCIpO1xuICAgICAgbGV0IGR1ZURhdGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBkdWVEYXRlUGFyYS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IHQuZGF0ZTtcbiAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LWR1ZS1kYXRlXCIpO1xuICAgICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICAgIGxldCB0cmFzaFRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICB0cmFzaFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgIHRyYXNoVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXRyYXNoXCIpO1xuXG4gICAgICBsZXQgdXBkYXRlVGFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIHVwZGF0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgIHVwZGF0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zcXVhcmUtcGVuXCIpO1xuICAgICAgdGFza0J1dHRvblJpZ2h0RGl2LmFwcGVuZChcbiAgICAgICAgZHVlRGF0ZVBhcmEsXG4gICAgICAgIGRhdGVJbnB1dCxcbiAgICAgICAgdXBkYXRlVGFza0ljb24sXG4gICAgICAgIHRyYXNoVGFza0ljb25cbiAgICAgICk7XG5cbiAgICAgIHRhc2tCdXR0b24uYXBwZW5kKHRhc2tCdXR0b25MZWZ0RGl2LCB0YXNrQnV0dG9uUmlnaHREaXYpO1xuICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG5cbiAgICAgIGNvbXBsZXRlVGFza0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDb21wbGV0ZVRvZ2dsZUhhbmRsZXIpO1xuICAgICAgdGFza0NvbnRlbnRQYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrRGV0YWlsc1VwZGF0ZUhhbmRsZXIpO1xuICAgICAgZHVlRGF0ZVBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tEZXRhaWxzVXBkYXRlSGFuZGxlcik7XG4gICAgICB0cmFzaFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrSGFuZGxlcik7XG4gICAgfSk7XG4gICAgcHJvamVjdFNlbGVjdGVkLmNvbXBsZXRlZFRhc2tzLmZvckVhY2goKHQpID0+IHtcbiAgICAgIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi10YXNrXCIpO1xuICAgICAgaWYgKCF0LmluRGF0ZSkgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3V0LW9mLWRhdGVcIik7XG4gICAgICBlbHNlIHRhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm91dC1vZi1kYXRlXCIpO1xuICAgICAgbGV0IHRhc2tCdXR0b25MZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tCdXR0b25MZWZ0RGl2LmNsYXNzTGlzdC5hZGQoXCJsZWZ0LXRhc2stcGFuZWxcIik7XG5cbiAgICAgIGxldCBjb21wbGV0ZVRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICBjb21wbGV0ZVRhc2tJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIHQubmFtZSk7XG4gICAgICBjb21wbGV0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgIGNvbXBsZXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLWNpcmNsZS1jaGVja1wiKTtcbiAgICAgIGxldCB0YXNrQ29udGVudFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRhc2tDb250ZW50UGFyYS5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuICAgICAgdGFza0NvbnRlbnRQYXJhLnRleHRDb250ZW50ID1cbiAgICAgICAgcHJvamVjdFNlbGVjdGVkLm5hbWUgPT09IFwiVG9kYXlcIiB8fCBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gXCJUaGlzIHdlZWtcIlxuICAgICAgICAgID8gYCR7dC5uYW1lfSAtLS0tLS0tLS0tLS0tLS0tLS0tLSAoJHt0LnByb2plY3ROYW1lfSlgXG4gICAgICAgICAgOiB0Lm5hbWU7XG4gICAgICBsZXQgdGFza0NvbnRlbnRNb2RpZmljYXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgdGFza0NvbnRlbnRNb2RpZmljYXRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdGFzay1uYW1lXCIpO1xuICAgICAgdGFza0J1dHRvbkxlZnREaXYuYXBwZW5kKFxuICAgICAgICBjb21wbGV0ZVRhc2tJY29uLFxuICAgICAgICB0YXNrQ29udGVudFBhcmEsXG4gICAgICAgIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXRcbiAgICAgICk7XG5cbiAgICAgIGxldCB0YXNrQnV0dG9uUmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0J1dHRvblJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoXCJyaWdodC10YXNrLXBhbmVsXCIpO1xuICAgICAgbGV0IGR1ZURhdGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBkdWVEYXRlUGFyYS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IHQuZGF0ZTtcbiAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LWR1ZS1kYXRlXCIpO1xuICAgICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICAgIGxldCB0cmFzaFRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICB0cmFzaFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgIHRyYXNoVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXRyYXNoXCIpO1xuICAgICAgbGV0IHVwZGF0ZVRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICB1cGRhdGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICB1cGRhdGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc3F1YXJlLXBlblwiKTtcbiAgICAgIHRhc2tCdXR0b25SaWdodERpdi5hcHBlbmQoXG4gICAgICAgIGR1ZURhdGVQYXJhLFxuICAgICAgICBkYXRlSW5wdXQsXG4gICAgICAgIHVwZGF0ZVRhc2tJY29uLFxuICAgICAgICB0cmFzaFRhc2tJY29uXG4gICAgICApO1xuXG4gICAgICB0YXNrQnV0dG9uLmFwcGVuZCh0YXNrQnV0dG9uTGVmdERpdiwgdGFza0J1dHRvblJpZ2h0RGl2KTtcbiAgICAgIGNvbXBsZXRlZFRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuXG4gICAgICBjb21wbGV0ZVRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrQ29tcGxldGVUb2dnbGVIYW5kbGVyKTtcbiAgICAgIHRhc2tDb250ZW50UGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0RldGFpbHNVcGRhdGVIYW5kbGVyKTtcbiAgICAgIGR1ZURhdGVQYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrRGV0YWlsc1VwZGF0ZUhhbmRsZXIpO1xuICAgICAgdHJhc2hUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFza0hhbmRsZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cyhhY3RpdmVQcm9qZWN0TmFtZSkge1xuICAgIHByb2plY3RzRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB0b2RvTGlzdC5wcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICBpZiAocC5uYW1lICE9PSBcIkluYm94XCIgJiYgIXAuY29tcG9zaXRlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXByb2plY3RcIik7XG4gICAgICAgIGxldCBwcm9qZWN0QnV0dG9uTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RCdXR0b25MZWZ0RGl2LmNsYXNzTGlzdC5hZGQoXCJsZWZ0LXByb2plY3QtcGFuZWxcIik7XG4gICAgICAgIGxldCBwcm9qZWN0QnV0dG9uUmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uUmlnaHREaXYuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXByb2plY3QtcGFuZWxcIik7XG4gICAgICAgIGxldCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS10YXNrc1wiKTtcbiAgICAgICAgbGV0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZChcImZhLXRyYXNoXCIpO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHByb2plY3ROYW1lU3Bhbi50ZXh0Q29udGVudCA9IHAubmFtZTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdFNlbGVjdEhhbmRsZXIpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uTGVmdERpdi5hcHBlbmQocHJvamVjdEljb24sIHByb2plY3ROYW1lU3Bhbik7XG4gICAgICAgIHByb2plY3RCdXR0b25SaWdodERpdi5hcHBlbmQodHJhc2hJY29uKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hcHBlbmQocHJvamVjdEJ1dHRvbkxlZnREaXYsIHByb2plY3RCdXR0b25SaWdodERpdik7XG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xuICAgICAgICBpZiAocC5uYW1lID09PSBhY3RpdmVQcm9qZWN0TmFtZSkgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VBZGRQcm9qZWN0Rm9ybSgpIHtcbiAgICBhZGROZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGFkZE5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxuICBmdW5jdGlvbiBjbG9zZUFkZFRhc2tGb3JtKCkge1xuICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgYWRkTmV3VGFza0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0QWxsUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLXByb2plY3RcIik7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxFbGVtZW50c0ZvY3VzUmVzZXQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaCgoZSkgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaSkgPT4gKGkudmFsdWUgPSBcIlwiKSk7XG4gIH1cblxuICAvLyAgIGluaXRpYWxpemVyc1xuICBzZWxlY3RlZFByb2plY3ROYW1lSDEudGV4dENvbnRlbnQgPSBwcm9qZWN0U2VsZWN0ZWQubmFtZTtcbiAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICBwb3B1bGF0ZVRhc2tzKHByb2plY3RTZWxlY3RlZCk7XG59XG5cbndpbmRvdy50b2RvID0ge1xuICB0b2RvTGlzdCxcbiAgUHJvamVjdCxcbiAgVGFzayxcbn07XG4iLCJpbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKFwianNvbi1zdHJpbmdpZnktc2FmZVwiKTtcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGlzQWZ0ZXIgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNvbXBvc2l0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbXBvc2l0ZSA9IGNvbXBvc2l0ZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcyA9IFtdO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRhc2sucHJvamVjdCA9IHRoaXM7XG4gICAgdGFzay5wcm9qZWN0TmFtZSA9IHRoaXMubmFtZTtcbiAgICB0YXNrLmluRGF0ZSA9IGlzQWZ0ZXIobmV3IERhdGUodGFzay5kYXRlKSwgbmV3IERhdGUoKSk7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIHRoaXMudGFza09yZGVyaW5nKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKTtcbiAgfVxuICByZW1vdmVUYXNrKHJlbW92ZVRhc2spIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sgIT09IHJlbW92ZVRhc2spO1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MgPSB0aGlzLmNvbXBsZXRlZFRhc2tzLmZpbHRlcihcbiAgICAgICh0YXNrKSA9PiB0YXNrICE9PSByZW1vdmVUYXNrXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIHN0cmluZ2lmeSh0b2RvTGlzdCwgbnVsbCwgMikpO1xuICB9XG4gIGFkZENvbXBsZXRlZFRhc2sodGFzaykge1xuICAgIHRhc2sucHJvamVjdCA9IHRoaXM7XG4gICAgdGFzay5wcm9qZWN0TmFtZSA9IHRoaXMubmFtZTtcbiAgICB0YXNrLmluRGF0ZSA9IGlzQWZ0ZXIobmV3IERhdGUodGFzay5kYXRlKSwgbmV3IERhdGUoKSk7XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5wdXNoKHRhc2spO1xuICAgIHRoaXMuY29tcGxldGVkVGFza09yZGVyaW5nKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKTtcbiAgfVxuICByZW1vdmVDb21wbGV0ZWRUYXNrKHJlbW92ZVRhc2spIHtcbiAgICB0aGlzLmNvbXBsZXRlZFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzayAhPT0gcmVtb3ZlVGFzayk7XG4gIH1cbiAgYWxsVGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuY29uY2F0KHRoaXMuY29tcGxldGVkVGFza3MpO1xuICB9XG4gIHNlbGVjdFRhc2sodGFza05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxUYXNrcygpLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgcmV0dXJuIHRhc2submFtZSA9PT0gdGFza05hbWU7XG4gICAgfSlbMF07XG4gIH1cbiAgY29tcGxldGVUYXNrVG9nZ2xlKHRhc2tUb1RvZ2dsZU5hbWUpIHtcbiAgICBsZXQgdGFza1NlbGVjdGVkID0gdGhpcy5zZWxlY3RUYXNrKHRhc2tUb1RvZ2dsZU5hbWUpO1xuICAgIHRhc2tTZWxlY3RlZC50b2dnbGVUYXNrQ29tcGxldGUoKTtcbiAgICBsZXQgcHJvamVjdCA9IHRhc2tTZWxlY3RlZC5wcm9qZWN0O1xuICAgIGxldCBhbGxUYXNrcyA9IHByb2plY3QuYWxsVGFza3MoKTtcbiAgICBwcm9qZWN0LnRhc2tzID0gW107XG4gICAgcHJvamVjdC5jb21wbGV0ZWRUYXNrcyA9IFtdO1xuICAgIGFsbFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmNvbXBsZXRlKSB0YXNrLnByb2plY3QuYWRkQ29tcGxldGVkVGFzayh0YXNrKTtcbiAgICAgIGVsc2UgdGFzay5wcm9qZWN0LmFkZFRhc2sodGFzayk7XG4gICAgfSk7XG4gICAgcHJvamVjdC50b2RvLmFzc2VtYmxlQ29tcG9zaXRlcygpO1xuICB9XG4gIHRhc2tPcmRlcmluZygpIHtcbiAgICBsZXQgbm9EYXRlVGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodCkgPT4gdC5kYXRlID09PSBcIk5vIGRhdGVcIik7XG4gICAgbGV0IGRhdGVkVGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodCkgPT4gdC5kYXRlICE9PSBcIk5vIGRhdGVcIik7XG4gICAgZGF0ZWRUYXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBsZXQgYURhdGUgPSBuZXcgRGF0ZShhLmRhdGUpO1xuICAgICAgbGV0IGJEYXRlID0gbmV3IERhdGUoYi5kYXRlKTtcbiAgICAgIHJldHVybiBjb21wYXJlQXNjKGFEYXRlLCBiRGF0ZSk7XG4gICAgfSk7XG4gICAgdGhpcy50YXNrcyA9IGRhdGVkVGFza3MuY29uY2F0KG5vRGF0ZVRhc2tzKTtcbiAgfVxuICBjb21wbGV0ZWRUYXNrT3JkZXJpbmcoKSB7XG4gICAgbGV0IG5vRGF0ZVRhc2tzID0gdGhpcy5jb21wbGV0ZWRUYXNrcy5maWx0ZXIoKHQpID0+IHQuZGF0ZSA9PT0gXCJObyBkYXRlXCIpO1xuICAgIGxldCBkYXRlZFRhc2tzID0gdGhpcy5jb21wbGV0ZWRUYXNrcy5maWx0ZXIoKHQpID0+IHQuZGF0ZSAhPT0gXCJObyBkYXRlXCIpO1xuICAgIGRhdGVkVGFza3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgbGV0IGFEYXRlID0gbmV3IERhdGUoYS5kYXRlKTtcbiAgICAgIGxldCBiRGF0ZSA9IG5ldyBEYXRlKGIuZGF0ZSk7XG4gICAgICByZXR1cm4gY29tcGFyZUFzYyhhRGF0ZSwgYkRhdGUpO1xuICAgIH0pO1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MgPSBkYXRlZFRhc2tzLmNvbmNhdChub0RhdGVUYXNrcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmFnZSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpIHtcbiAgICAvLyBHcmFiIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBsZXQgdG9kb0xpc3RTdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgbGV0IGFsbFN0b3JlZFRhc2tzID0gW107XG4gICAgdG9kb0xpc3RTdG9yZS5wcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICBpZiAoIXAuY29tcG9zaXRlKSB7XG4gICAgICAgIC8vICYmIHAubmFtZSAhPT0gJ0luYm94J1xuICAgICAgICBpZiAocC50YXNrcy5sZW5ndGggIT09IDAgfHwgcC5jb21wbGV0ZWRUYXNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBwLnRhc2tzLmZvckVhY2goKHQpID0+IGFsbFN0b3JlZFRhc2tzLnB1c2godCkpO1xuICAgICAgICAgIHAuY29tcGxldGVkVGFza3MuZm9yRWFjaCgodCkgPT4gYWxsU3RvcmVkVGFza3MucHVzaCh0KSk7XG4gICAgICAgIH0gZWxzZSBhbGxTdG9yZWRUYXNrcy5wdXNoKHApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBwcm9qZWN0cyA9IHt9O1xuICAgIGFsbFN0b3JlZFRhc2tzLmZvckVhY2goKHQpID0+IHtcbiAgICAgIGlmICh0LnR5cGUgPT09IFwiVGFza1wiKSB7XG4gICAgICAgIHByb2plY3RzW3QucHJvamVjdE5hbWVdID0gcHJvamVjdHNbdC5wcm9qZWN0TmFtZV0gfHwgW107XG4gICAgICAgIHByb2plY3RzW3QucHJvamVjdE5hbWVdLnB1c2gobmV3IFRhc2sodC5uYW1lLCB0LmRhdGUsIHQuY29tcGxldGUpKTtcbiAgICAgIH0gZWxzZSBpZiAodC50eXBlID09PSBcIlByb2plY3RcIikge1xuICAgICAgICBwcm9qZWN0c1t0Lm5hbWVdID0gcHJvamVjdHNbdC5uYW1lXSB8fCBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IGluIHByb2plY3RzKSB7XG4gICAgICBsZXQgcHJvak9iaiA9IHByb2plY3QgPT09IFwiSW5ib3hcIiA/IHRvZG9MaXN0LmluYm94IDogbmV3IFByb2plY3QocHJvamVjdCk7XG4gICAgICBwcm9qZWN0c1twcm9qZWN0XS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LmNvbXBsZXRlKSBwcm9qT2JqLmFkZENvbXBsZXRlZFRhc2sodCk7XG4gICAgICAgIGVsc2UgcHJvak9iai5hZGRUYXNrKHQpO1xuICAgICAgfSk7XG4gICAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2pPYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBDcmVhdGUgc3RhcnRlciBwcm9qZWN0cyBhbmQgdGFza3M6XG4gICAgLy8gY29uc3Qgc3RhcnRlclByb2plY3QxID0gbmV3IFByb2plY3QoXCJMZWFybiBKYXZhc2NyaXB0XCIpO1xuICAgIC8vIGNvbnN0IHN0YXJ0ZXJQcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiTGVhcm4gbW9yZSBKYXZhc2NyaXB0XCIpO1xuICAgIC8vIGNvbnN0IHN0YXJ0ZXJUYXNrczEgPSBbXG4gICAgLy8gICBuZXcgVGFzayhcIldyaXRlIGNvZGUxXCIsIFwiMjAyMy0wNC0xMFwiKSxcbiAgICAvLyAgIG5ldyBUYXNrKFwiUmVmYWN0b3Igb2xkIGNvZGUxXCIsIFwiMjAyMy0wNC0xMlwiKSxcbiAgICAvLyAgIG5ldyBUYXNrKFwiZm9vMVwiLCBcIjIwMjMtMDQtMTRcIiksXG4gICAgLy8gICBuZXcgVGFzayhcImJhcjFcIiwgXCIyMDIzLTA0LTIwXCIpLFxuICAgIC8vICAgbmV3IFRhc2soXCJiYXoxXCIsIFwiMjAyMy0wNC0yNVwiKSxcbiAgICAvLyBdO1xuICAgIC8vIGNvbnN0IHN0YXJ0ZXJUYXNrczIgPSBbXG4gICAgLy8gICBuZXcgVGFzayhcIldyaXRlIGNvZGUyXCIsIFwiMjAyMy0wNC0xMVwiKSxcbiAgICAvLyAgIG5ldyBUYXNrKFwiUmVmYWN0b3Igb2xkIGNvZGUyXCIsIFwiMjAyMy0wNC0xM1wiKSxcbiAgICAvLyAgIG5ldyBUYXNrKFwiZm9vMlwiLCBcIjIwMjMtMDQtMTZcIiksXG4gICAgLy8gICBuZXcgVGFzayhcImJhcjJcIiwgXCIyMDIzLTA0LTIwXCIpLFxuICAgIC8vICAgbmV3IFRhc2soXCJiYXoyXCIsIFwiMjAyMy0wNC0yNVwiKSxcbiAgICAvLyBdO1xuICAgIC8vIHRvZG9MaXN0LmFkZFByb2plY3Qoc3RhcnRlclByb2plY3QxKTtcbiAgICAvLyBzdGFydGVyVGFza3MxLmZvckVhY2goKHRhc2spID0+IHN0YXJ0ZXJQcm9qZWN0MS5hZGRUYXNrKHRhc2spKTtcbiAgICAvLyB0b2RvTGlzdC5hZGRQcm9qZWN0KHN0YXJ0ZXJQcm9qZWN0Mik7XG4gICAgLy8gc3RhcnRlclRhc2tzMi5mb3JFYWNoKCh0YXNrKSA9PiBzdGFydGVyUHJvamVjdDIuYWRkVGFzayh0YXNrKSk7XG4gIH1cbiAgaWYgKCF0b2RvTGlzdC5wcm9qZWN0cy5pbmNsdWRlcyh0b2RvTGlzdC5pbmJveCkpXG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdCh0b2RvTGlzdC5pbmJveCk7XG4gIHRvZG9MaXN0LmFkZFByb2plY3QodG9kb0xpc3QudG9kYXkpO1xuICB0b2RvTGlzdC5hZGRQcm9qZWN0KHRvZG9MaXN0LnRoaXNXZWVrKTtcbiAgdG9kb0xpc3QuYXNzZW1ibGVDb21wb3NpdGVzKFwiVG9kYXlcIik7XG4gIHRvZG9MaXN0LmFzc2VtYmxlQ29tcG9zaXRlcyhcIlRoaXMgd2Vla1wiKTtcbn1cbiIsImNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoXCJqc29uLXN0cmluZ2lmeS1zYWZlXCIpO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IHsgaXNBZnRlciB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgaW5EYXRlO1xuICBjb25zdHJ1Y3RvcihuYW1lID0gXCJObyBuYW1lXCIsIGRhdGUsIGNvbXBsZXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGUgfHwgXCJObyBkYXRlXCI7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZSB8fCBcIk5vIG5hbWVcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIHN0cmluZ2lmeSh0b2RvTGlzdCwgbnVsbCwgMikpO1xuICB9XG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgfVxuICBzZXREYXRlKGRhdGUpIHtcbiAgICB0aGlzLmRhdGUgPSBkYXRlIHx8IFwiTm8gZGF0ZVwiO1xuICAgIHRoaXMuaW5EYXRlID0gaXNBZnRlcihuZXcgRGF0ZSh0aGlzLmRhdGUpLCBuZXcgRGF0ZSgpKTtcbiAgICB0aGlzLnByb2plY3QudGFza09yZGVyaW5nKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKTtcbiAgfVxuICB0b2dnbGVUYXNrQ29tcGxldGUoKSB7XG4gICAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKFwianNvbi1zdHJpbmdpZnktc2FmZVwiKTtcblxuZXhwb3J0IGNvbnN0IHRvZG9MaXN0ID0ge1xuICBpbmJveDogbmV3IFByb2plY3QoXCJJbmJveFwiKSxcbiAgdG9kYXk6IG5ldyBQcm9qZWN0KFwiVG9kYXlcIiwgdHJ1ZSksXG4gIHRoaXNXZWVrOiBuZXcgUHJvamVjdChcIlRoaXMgd2Vla1wiLCB0cnVlKSxcbiAgcHJvamVjdHM6IFtdLFxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnRvZG8gPSB0aGlzO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIHN0cmluZ2lmeSh0aGlzLCBudWxsLCAyKSk7XG4gIH0sXG4gIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lICE9PSBwcm9qZWN0TmFtZVxuICAgICk7XG4gIH0sXG4gIGFzc2VtYmxlQ29tcG9zaXRlcygpIHtcbiAgICBsZXQgY29tcG9zaXRlcyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmNvbXBvc2l0ZSk7XG4gICAgY29tcG9zaXRlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjLnRhc2tzLmxlbmd0aCA9IDA7XG4gICAgICBjLmNvbXBsZXRlZFRhc2tzLmxlbmd0aCA9IDA7XG4gICAgICBpZiAoYy5uYW1lID09PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgaWYgKHAuY29tcG9zaXRlKSByZXR1cm47XG4gICAgICAgICAgbGV0IGFsbFRhc2tzID0gcC5hbGxUYXNrcygpO1xuICAgICAgICAgIGFsbFRhc2tzLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHQuZGF0ZSkpKSB7XG4gICAgICAgICAgICAgIGlmICh0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RheS5jb21wbGV0ZWRUYXNrcy5wdXNoKHQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9kYXkudGFza3MucHVzaCh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoYy5uYW1lID09PSBcIlRoaXMgd2Vla1wiKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgIGlmIChwLmNvbXBvc2l0ZSkgcmV0dXJuO1xuICAgICAgICAgIGxldCBhbGxUYXNrcyA9IHAuYWxsVGFza3MoKTtcbiAgICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUaGlzV2VlayhuZXcgRGF0ZSh0LmRhdGUpLCB7IHdlZWtTdGFydHNPbjogMSB9KSkge1xuICAgICAgICAgICAgICBpZiAodC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGhpc1dlZWsuY29tcGxldGVkVGFza3MucHVzaCh0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoaXNXZWVrLnRhc2tzLnB1c2godCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodGhpcywgbnVsbCwgMikpO1xuICB9LFxuICBzZWxlY3RQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5hc3NlbWJsZUNvbXBvc2l0ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHtcbiAgICAgIHJldHVybiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lO1xuICAgIH0pWzBdO1xuICB9LFxuICAvLyBjb25zb2xlIG1ldGhvZFxuICBkaXNwbGF5UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBwcm9qZWN0ID0gdGhpcy5zZWxlY3RQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdCkge1xuICAgICAgaWYgKGtleSA9PT0gXCJuYW1lXCIpIGNvbnNvbGUubG9nKGBuYW1lOiAke3Byb2plY3Rba2V5XX1gKTtcbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJ0YXNrc1wiKSB7XG4gICAgICAgIHByb2plY3Rba2V5XS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBUYXNrJHtpbmRleCArIDF9OiBOYW1lIC0gJHt0YXNrLm5hbWV9IERhdGUgLSAke3Rhc2suZGF0ZX0gJHtcbiAgICAgICAgICAgICAgcHJvamVjdC5uYW1lICE9PSBcIlRvZGF5XCIgJiYgcHJvamVjdC5uYW1lICE9PSBcIlRoaXMgd2Vla1wiXG4gICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgOiBgKCR7cHJvamVjdC5uYW1lfSlgXG4gICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3Rba2V5XS5mb3JFYWNoKChjb21wbGV0ZVRhc2ssIGluZGV4KSA9PlxuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYENvbXBsZXRlZCBUYXNrJHtpbmRleCArIDF9OiBOYW1lIC0gJHtjb21wbGV0ZVRhc2submFtZX0gRGF0ZSAtICR7XG4gICAgICAgICAgICAgIGNvbXBsZXRlVGFzay5kYXRlXG4gICAgICAgICAgICB9ICR7XG4gICAgICAgICAgICAgIHByb2plY3QubmFtZSAhPT0gXCJUb2RheVwiICYmIHByb2plY3QubmFtZSAhPT0gXCJUaGlzIHdlZWtcIlxuICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgIDogYCgke3Byb2plY3QubmFtZX0pYFxuICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcblxuc3RvcmFnZSgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==