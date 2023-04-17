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
    const starterProject1 = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Learn Javascript");
    const starterProject2 = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Learn more Javascript");
    const starterTasks1 = [
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("Write code1", "2023-04-10"),
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("Refactor old code1", "2023-04-12"),
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("foo1", "2023-04-14"),
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("bar1", "2023-04-20"),
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("baz1", "2023-04-25"),
    ];
    const starterTasks2 = [
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("Write code2", "2023-04-11"),
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("Refactor old code2", "2023-04-13"),
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("foo2", "2023-04-16"),
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("bar2", "2023-04-20"),
      new _task__WEBPACK_IMPORTED_MODULE_2__["default"]("baz2", "2023-04-25"),
    ];

    _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(starterProject1);
    starterTasks1.forEach((task) => starterProject1.addTask(task));

    _todoList__WEBPACK_IMPORTED_MODULE_0__.todoList.addProject(starterProject2);
    starterTasks2.forEach((task) => starterProject2.addTask(task));
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


document.addEventListener("DOMContentLoaded", _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFtQixLQUFLLGdEQUFPO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSw2Q0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVEsd0JBQXdCLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUSx3QkFBd0IsY0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEI7O0FBRTlCLDhDQUE4QyxtREFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9qc29uLXN0cmluZ2lmeS1zYWZlL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FmdGVyKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPiBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5leHBvcnRzLmdldFNlcmlhbGl6ZSA9IHNlcmlhbGl6ZXJcblxuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaiwgcmVwbGFjZXIsIHNwYWNlcywgY3ljbGVSZXBsYWNlcikge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBzZXJpYWxpemVyKHJlcGxhY2VyLCBjeWNsZVJlcGxhY2VyKSwgc3BhY2VzKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVyKHJlcGxhY2VyLCBjeWNsZVJlcGxhY2VyKSB7XG4gIHZhciBzdGFjayA9IFtdLCBrZXlzID0gW11cblxuICBpZiAoY3ljbGVSZXBsYWNlciA9PSBudWxsKSBjeWNsZVJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGlmIChzdGFja1swXSA9PT0gdmFsdWUpIHJldHVybiBcIltDaXJjdWxhciB+XVwiXG4gICAgcmV0dXJuIFwiW0NpcmN1bGFyIH4uXCIgKyBrZXlzLnNsaWNlKDAsIHN0YWNrLmluZGV4T2YodmFsdWUpKS5qb2luKFwiLlwiKSArIFwiXVwiXG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgdGhpc1BvcyA9IHN0YWNrLmluZGV4T2YodGhpcylcbiAgICAgIH50aGlzUG9zID8gc3RhY2suc3BsaWNlKHRoaXNQb3MgKyAxKSA6IHN0YWNrLnB1c2godGhpcylcbiAgICAgIH50aGlzUG9zID8ga2V5cy5zcGxpY2UodGhpc1BvcywgSW5maW5pdHksIGtleSkgOiBrZXlzLnB1c2goa2V5KVxuICAgICAgaWYgKH5zdGFjay5pbmRleE9mKHZhbHVlKSkgdmFsdWUgPSBjeWNsZVJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgZWxzZSBzdGFjay5wdXNoKHZhbHVlKVxuXG4gICAgcmV0dXJuIHJlcGxhY2VyID09IG51bGwgPyB2YWx1ZSA6IHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVSSgpIHtcbiAgLy9ET00gY2FjaGVcbiAgY29uc3QgaW5ib3hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xuICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XG4gIGNvbnN0IHRoaXNXZWVrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGlzLXdlZWtcIik7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICBjb25zdCBuZXdQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIik7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3RGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5hZGQtcHJvamVjdC1mb3JtIC5hZGRcIlxuICApO1xuICBjb25zdCBhZGROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgY29uc3QgbmV3VGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpO1xuICBjb25zdCBuZXdUYXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIik7XG4gIGNvbnN0IGFkZE5ld1Rhc2tGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtIC5hZGRcIik7XG4gIGNvbnN0IGNhbmNlbE5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZvcm0gLmNhbmNlbFwiKTtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0TmFtZUgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIik7XG4gIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtXCIpO1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gIGNvbnN0IGNvbXBsZXRlZFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtdGFza3NcIik7XG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgY29uc3QgYWRkTmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LWZvcm1cIik7XG4gIGNvbnN0IHByb2plY3RGb3JtQnV0dG9uc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtLWJ1dHRvbnNcIik7XG4gIGNvbnN0IG9wZW5TaWRlQmFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tb3Blbi1uYXZcIik7XG4gIGNvbnN0IHNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtYmFyXCIpO1xuXG4gIC8vQWN0aXZlIHByb2plY3RcbiAgbGV0IHByb2plY3RTZWxlY3RlZCA9IHRvZG9MaXN0LnNlbGVjdFByb2plY3QoXCJJbmJveFwiKTtcblxuICAvL0V2ZW50IGhhbmRsZXJzXG4gIGZ1bmN0aW9uIHByb2plY3RTZWxlY3RIYW5kbGVyKGUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoaSkgPT4gKGkudmFsdWUgPSBcIlwiKSk7XG4gICAgY2xvc2VBZGRQcm9qZWN0Rm9ybSgpO1xuICAgIGNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICBzZWxlY3RBbGxQcm9qZWN0QnV0dG9ucygpLmZvckVhY2goKHByb2pCdXQpID0+IHtcbiAgICAgIHByb2pCdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICBsZXQgc2VsZWN0ZWRCdXR0b24gPVxuICAgICAgZS50YXJnZXQudGFnTmFtZSA9PT0gXCJCVVRUT05cIiA/IGUudGFyZ2V0IDogZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKTtcbiAgICBzZWxlY3RlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHByb2plY3RTZWxlY3RlZCA9IHRvZG9MaXN0LnNlbGVjdFByb2plY3Qoc2VsZWN0ZWRCdXR0b24udGV4dENvbnRlbnQudHJpbSgpKTtcbiAgICAvLyByZW1vdmUgcHJvamVjdCAqKioqKioqXG4gICAgaWYgKEFycmF5LmZyb20oZS50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcyhcImZhLXRyYXNoXCIpKSB7XG4gICAgICB0b2RvTGlzdC5yZW1vdmVQcm9qZWN0KHByb2plY3RTZWxlY3RlZC5uYW1lKTtcbiAgICAgIHByb2plY3RTZWxlY3RlZCA9IHRvZG9MaXN0LnNlbGVjdFByb2plY3QoXCJJbmJveFwiKTtcbiAgICAgIGluYm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIC8vIHJlbW92ZSBwcm9qZWN0ICoqKioqKipcbiAgICBpZiAoXG4gICAgICBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gXCJUb2RheVwiIHx8XG4gICAgICBwcm9qZWN0U2VsZWN0ZWQubmFtZSA9PT0gXCJUaGlzIHdlZWtcIlxuICAgICkge1xuICAgICAgYWRkTmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29tcG9zaXRlXCIpO1xuICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImNvbXBvc2l0ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkTmV3VGFza0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcG9zaXRlXCIpO1xuICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImNvbXBvc2l0ZVwiKTtcbiAgICB9XG4gICAgc2VsZWN0ZWRQcm9qZWN0TmFtZUgxLnRleHRDb250ZW50ID0gcHJvamVjdFNlbGVjdGVkLm5hbWU7XG4gICAgcG9wdWxhdGVUYXNrcygpO1xuICAgIHBvcHVsYXRlUHJvamVjdHMocHJvamVjdFNlbGVjdGVkLm5hbWUpO1xuICB9XG4gIGZ1bmN0aW9uIHRhc2tDb21wbGV0ZVRvZ2dsZUhhbmRsZXIoZSkge1xuICAgIGNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICBwcm9qZWN0U2VsZWN0ZWQuY29tcGxldGVUYXNrVG9nZ2xlKGUudGFyZ2V0LmlkKTtcbiAgICBwb3B1bGF0ZVRhc2tzKHByb2plY3RTZWxlY3RlZCk7XG4gIH1cblxuICBmdW5jdGlvbiB0YXNrRGV0YWlsc1VwZGF0ZUhhbmRsZXIoZSkge1xuICAgIGFsbEVsZW1lbnRzRm9jdXNSZXNldCgpO1xuICAgIGNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICBsZXQgbG9jYWxQYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xuICAgIGxldCBwcmV2aW91c1Rhc2tOYW1lID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGVcIilcbiAgICAgID8gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGVcIikuaWRcbiAgICAgIDogbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvcihcIi5mYS1jaXJjbGUtY2hlY2tcIikuaWQ7XG4gICAgbGV0IHByZXZpb3VzVGFza0RhdGUgPSBwcm9qZWN0U2VsZWN0ZWQuc2VsZWN0VGFzayhwcmV2aW91c1Rhc2tOYW1lKS5kYXRlO1xuICAgIGxldCBwYXJhZ3JhcGhzID0gbG9jYWxQYXJlbnQucXVlcnlTZWxlY3RvckFsbChcInBcIik7XG4gICAgcGFyYWdyYXBocy5mb3JFYWNoKChwYXJhKSA9PiBwYXJhLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIikpO1xuICAgIGxldCBpbnB1dHMgPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgaWYgKGlucHV0LnR5cGUgPT09IFwidGV4dFwiKSBpbnB1dC52YWx1ZSA9IHByZXZpb3VzVGFza05hbWU7XG4gICAgICBlbHNlIGlucHV0LnZhbHVlID0gcHJldmlvdXNUYXNrRGF0ZTtcbiAgICB9KTtcbiAgICBsZXQgZWRpdEljb24gPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLXNxdWFyZS1wZW5cIik7XG4gICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2F2ZVRhc2tFZGl0c0hhbmRsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVRhc2tFZGl0c0hhbmRsZXIoZSkge1xuICAgIGxldCBsb2NhbFBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIik7XG4gICAgbGV0IHRhc2tUZXh0SW5wdXQgPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stbmFtZVwiKTtcbiAgICBsZXQgdGFza0RhdGVJbnB1dCA9IGxvY2FsUGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZHVlLWRhdGVcIik7XG4gICAgbGV0IHByZXZpb3VzVGFza05hbWUgPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZVwiKVxuICAgICAgPyBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZVwiKS5pZFxuICAgICAgOiBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZS1jaGVja1wiKS5pZDtcbiAgICBsZXQgdGFza1RvTW9kaWZ5ID0gcHJvamVjdFNlbGVjdGVkLnNlbGVjdFRhc2socHJldmlvdXNUYXNrTmFtZSk7XG4gICAgdGFza1RvTW9kaWZ5LnNldE5hbWUodGFza1RleHRJbnB1dC52YWx1ZSk7XG4gICAgdGFza1RvTW9kaWZ5LnNldERhdGUodGFza0RhdGVJbnB1dC52YWx1ZSk7XG4gICAgcG9wdWxhdGVUYXNrcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVGFza0hhbmRsZXIoZSkge1xuICAgIGNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICBsZXQgbG9jYWxQYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xuXG4gICAgbGV0IHByZXZpb3VzVGFza05hbWUgPSBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZVwiKVxuICAgICAgPyBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZVwiKS5pZFxuICAgICAgOiBsb2NhbFBhcmVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWNpcmNsZS1jaGVja1wiKS5pZDtcbiAgICBsZXQgdGFza1RvRGVsZXRlID0gcHJvamVjdFNlbGVjdGVkLnNlbGVjdFRhc2socHJldmlvdXNUYXNrTmFtZSk7XG4gICAgcHJvamVjdFNlbGVjdGVkLnJlbW92ZVRhc2sodGFza1RvRGVsZXRlKTtcbiAgICBwb3B1bGF0ZVRhc2tzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0SGFuZGxlcihlKSB7XG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZUlucHV0LnZhbHVlKSk7XG4gICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKChpKSA9PiAoaS52YWx1ZSA9IFwiXCIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2tIYW5kbGVyKGUpIHtcbiAgICBwcm9qZWN0U2VsZWN0ZWQuYWRkVGFzayhcbiAgICAgIG5ldyBUYXNrKG5ld1Rhc2tOYW1lSW5wdXQudmFsdWUsIG5ld1Rhc2tEYXRlSW5wdXQudmFsdWUpXG4gICAgKTtcbiAgICBwb3B1bGF0ZVRhc2tzKHByb2plY3RTZWxlY3RlZCk7XG4gICAgY2xvc2VBZGRUYXNrRm9ybSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKChpKSA9PiAoaS52YWx1ZSA9IFwiXCIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFkZFByb2plY3RGb3JtSGFuZGxlcihlKSB7XG4gICAgYWRkTmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGkpID0+IChpLnZhbHVlID0gXCJcIikpO1xuICAgIGNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFkZFRhc2tGb3JtSGFuZGxlcihlKSB7XG4gICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBhZGROZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgcG9wdWxhdGVUYXNrcygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKChpKSA9PiAoaS52YWx1ZSA9IFwiXCIpKTtcbiAgICBjbG9zZUFkZFByb2plY3RGb3JtKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTaWRlQmFySGFuZGxlcigpIHtcbiAgICBzaWRlQmFyRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH1cblxuICAvL0V2ZW50IGJpbmRpbmdcbiAgYWRkTmV3VGFza0Zvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2tIYW5kbGVyKTtcbiAgYWRkTmV3UHJvamVjdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RIYW5kbGVyKTtcbiAgYWRkTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQWRkUHJvamVjdEZvcm1IYW5kbGVyKTtcbiAgcHJvamVjdEZvcm1CdXR0b25zRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVBZGRQcm9qZWN0Rm9ybUhhbmRsZXIpO1xuICBpbmJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdFNlbGVjdEhhbmRsZXIpO1xuICB0b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdFNlbGVjdEhhbmRsZXIpO1xuICB0aGlzV2Vla0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdFNlbGVjdEhhbmRsZXIpO1xuICBhZGROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVBZGRUYXNrRm9ybUhhbmRsZXIpO1xuICBjYW5jZWxOZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVBZGRUYXNrRm9ybUhhbmRsZXIpO1xuICBvcGVuU2lkZUJhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2lkZUJhckhhbmRsZXIpO1xuXG4gIC8vICAgV29ya2VyIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBwb3B1bGF0ZVRhc2tzKCkge1xuICAgIHRhc2tzRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb21wbGV0ZWRUYXNrc0Rpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcHJvamVjdFNlbGVjdGVkLnRhc2tzLmZvckVhY2goKHQpID0+IHtcbiAgICAgIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGlmICghdC5pbkRhdGUpIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcIm91dC1vZi1kYXRlXCIpO1xuICAgICAgZWxzZSB0YXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXQtb2YtZGF0ZVwiKTtcbiAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi10YXNrXCIpO1xuXG4gICAgICBsZXQgdGFza0J1dHRvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza0J1dHRvbkxlZnREaXYuY2xhc3NMaXN0LmFkZChcImxlZnQtdGFzay1wYW5lbFwiKTtcblxuICAgICAgbGV0IGNvbXBsZXRlVGFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIGNvbXBsZXRlVGFza0ljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgdC5uYW1lKTtcbiAgICAgIGNvbXBsZXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIik7XG4gICAgICBjb21wbGV0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1jaXJjbGVcIik7XG4gICAgICBsZXQgdGFza0NvbnRlbnRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0YXNrQ29udGVudFBhcmEuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGVudFwiKTtcbiAgICAgIHRhc2tDb250ZW50UGFyYS50ZXh0Q29udGVudCA9XG4gICAgICAgIHByb2plY3RTZWxlY3RlZC5uYW1lID09PSBcIlRvZGF5XCIgfHwgcHJvamVjdFNlbGVjdGVkLm5hbWUgPT09IFwiVGhpcyB3ZWVrXCJcbiAgICAgICAgICA/IGAke3QubmFtZX0gLS0tLS0tLS0tLS0tLS0tLS0tLS0gKCR7dC5wcm9qZWN0TmFtZX0pYFxuICAgICAgICAgIDogdC5uYW1lO1xuICAgICAgbGV0IHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0YXNrQ29udGVudE1vZGlmaWNhdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRhc2stbmFtZVwiKTtcbiAgICAgIHRhc2tCdXR0b25MZWZ0RGl2LmFwcGVuZChcbiAgICAgICAgY29tcGxldGVUYXNrSWNvbixcbiAgICAgICAgdGFza0NvbnRlbnRQYXJhLFxuICAgICAgICB0YXNrQ29udGVudE1vZGlmaWNhdGlvbklucHV0XG4gICAgICApO1xuXG4gICAgICBsZXQgdGFza0J1dHRvblJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tCdXR0b25SaWdodERpdi5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdGFzay1wYW5lbFwiKTtcbiAgICAgIGxldCBkdWVEYXRlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZHVlRGF0ZVBhcmEuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICAgICAgZHVlRGF0ZVBhcmEudGV4dENvbnRlbnQgPSB0LmRhdGU7XG4gICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1kdWUtZGF0ZVwiKTtcbiAgICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICBsZXQgdHJhc2hUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgdHJhc2hUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICB0cmFzaFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS10cmFzaFwiKTtcblxuICAgICAgbGV0IHVwZGF0ZVRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICB1cGRhdGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICB1cGRhdGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc3F1YXJlLXBlblwiKTtcbiAgICAgIHRhc2tCdXR0b25SaWdodERpdi5hcHBlbmQoXG4gICAgICAgIGR1ZURhdGVQYXJhLFxuICAgICAgICBkYXRlSW5wdXQsXG4gICAgICAgIHVwZGF0ZVRhc2tJY29uLFxuICAgICAgICB0cmFzaFRhc2tJY29uXG4gICAgICApO1xuXG4gICAgICB0YXNrQnV0dG9uLmFwcGVuZCh0YXNrQnV0dG9uTGVmdERpdiwgdGFza0J1dHRvblJpZ2h0RGl2KTtcbiAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuXG4gICAgICBjb21wbGV0ZVRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrQ29tcGxldGVUb2dnbGVIYW5kbGVyKTtcbiAgICAgIHRhc2tDb250ZW50UGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0RldGFpbHNVcGRhdGVIYW5kbGVyKTtcbiAgICAgIGR1ZURhdGVQYXJhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrRGV0YWlsc1VwZGF0ZUhhbmRsZXIpO1xuICAgICAgdHJhc2hUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFza0hhbmRsZXIpO1xuICAgIH0pO1xuICAgIHByb2plY3RTZWxlY3RlZC5jb21wbGV0ZWRUYXNrcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICBsZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdGFza1wiKTtcbiAgICAgIGlmICghdC5pbkRhdGUpIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcIm91dC1vZi1kYXRlXCIpO1xuICAgICAgZWxzZSB0YXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXQtb2YtZGF0ZVwiKTtcbiAgICAgIGxldCB0YXNrQnV0dG9uTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrQnV0dG9uTGVmdERpdi5jbGFzc0xpc3QuYWRkKFwibGVmdC10YXNrLXBhbmVsXCIpO1xuXG4gICAgICBsZXQgY29tcGxldGVUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgY29tcGxldGVUYXNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0Lm5hbWUpO1xuICAgICAgY29tcGxldGVUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICBjb21wbGV0ZVRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1jaXJjbGUtY2hlY2tcIik7XG4gICAgICBsZXQgdGFza0NvbnRlbnRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0YXNrQ29udGVudFBhcmEuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGVudFwiKTtcbiAgICAgIHRhc2tDb250ZW50UGFyYS50ZXh0Q29udGVudCA9XG4gICAgICAgIHByb2plY3RTZWxlY3RlZC5uYW1lID09PSBcIlRvZGF5XCIgfHwgcHJvamVjdFNlbGVjdGVkLm5hbWUgPT09IFwiVGhpcyB3ZWVrXCJcbiAgICAgICAgICA/IGAke3QubmFtZX0gLS0tLS0tLS0tLS0tLS0tLS0tLS0gKCR7dC5wcm9qZWN0TmFtZX0pYFxuICAgICAgICAgIDogdC5uYW1lO1xuICAgICAgbGV0IHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0YXNrQ29udGVudE1vZGlmaWNhdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgIHRhc2tDb250ZW50TW9kaWZpY2F0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0LXRhc2stbmFtZVwiKTtcbiAgICAgIHRhc2tCdXR0b25MZWZ0RGl2LmFwcGVuZChcbiAgICAgICAgY29tcGxldGVUYXNrSWNvbixcbiAgICAgICAgdGFza0NvbnRlbnRQYXJhLFxuICAgICAgICB0YXNrQ29udGVudE1vZGlmaWNhdGlvbklucHV0XG4gICAgICApO1xuXG4gICAgICBsZXQgdGFza0J1dHRvblJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tCdXR0b25SaWdodERpdi5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdGFzay1wYW5lbFwiKTtcbiAgICAgIGxldCBkdWVEYXRlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZHVlRGF0ZVBhcmEuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuICAgICAgZHVlRGF0ZVBhcmEudGV4dENvbnRlbnQgPSB0LmRhdGU7XG4gICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1kdWUtZGF0ZVwiKTtcbiAgICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgICBsZXQgdHJhc2hUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgdHJhc2hUYXNrSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICB0cmFzaFRhc2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS10cmFzaFwiKTtcbiAgICAgIGxldCB1cGRhdGVUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgdXBkYXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgdXBkYXRlVGFza0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXNxdWFyZS1wZW5cIik7XG4gICAgICB0YXNrQnV0dG9uUmlnaHREaXYuYXBwZW5kKFxuICAgICAgICBkdWVEYXRlUGFyYSxcbiAgICAgICAgZGF0ZUlucHV0LFxuICAgICAgICB1cGRhdGVUYXNrSWNvbixcbiAgICAgICAgdHJhc2hUYXNrSWNvblxuICAgICAgKTtcblxuICAgICAgdGFza0J1dHRvbi5hcHBlbmQodGFza0J1dHRvbkxlZnREaXYsIHRhc2tCdXR0b25SaWdodERpdik7XG4gICAgICBjb21wbGV0ZWRUYXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcblxuICAgICAgY29tcGxldGVUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0NvbXBsZXRlVG9nZ2xlSGFuZGxlcik7XG4gICAgICB0YXNrQ29udGVudFBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tEZXRhaWxzVXBkYXRlSGFuZGxlcik7XG4gICAgICBkdWVEYXRlUGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0RldGFpbHNVcGRhdGVIYW5kbGVyKTtcbiAgICAgIHRyYXNoVGFza0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2tIYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMoYWN0aXZlUHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0c0Rpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdG9kb0xpc3QucHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgaWYgKHAubmFtZSAhPT0gXCJJbmJveFwiICYmICFwLmNvbXBvc2l0ZSkge1xuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1wcm9qZWN0XCIpO1xuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbkxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uTGVmdERpdi5jbGFzc0xpc3QuYWRkKFwibGVmdC1wcm9qZWN0LXBhbmVsXCIpO1xuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvblJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvblJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoXCJyaWdodC1wcm9qZWN0LXBhbmVsXCIpO1xuICAgICAgICBsZXQgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtdGFza3NcIik7XG4gICAgICAgIGxldCB0cmFzaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS10cmFzaFwiKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBwcm9qZWN0TmFtZVNwYW4udGV4dENvbnRlbnQgPSBwLm5hbWU7XG4gICAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RTZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbkxlZnREaXYuYXBwZW5kKHByb2plY3RJY29uLCBwcm9qZWN0TmFtZVNwYW4pO1xuICAgICAgICBwcm9qZWN0QnV0dG9uUmlnaHREaXYuYXBwZW5kKHRyYXNoSWNvbik7XG4gICAgICAgIHByb2plY3RCdXR0b24uYXBwZW5kKHByb2plY3RCdXR0b25MZWZ0RGl2LCBwcm9qZWN0QnV0dG9uUmlnaHREaXYpO1xuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgaWYgKHAubmFtZSA9PT0gYWN0aXZlUHJvamVjdE5hbWUpIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlQWRkUHJvamVjdEZvcm0oKSB7XG4gICAgYWRkTmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBhZGROZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbiAgZnVuY3Rpb24gY2xvc2VBZGRUYXNrRm9ybSgpIHtcbiAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGFkZE5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdEFsbFByb2plY3RCdXR0b25zKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi1wcm9qZWN0XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsRWxlbWVudHNGb2N1c1Jlc2V0KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goKGUpID0+IGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGkpID0+IChpLnZhbHVlID0gXCJcIikpO1xuICB9XG5cbiAgLy8gICBpbml0aWFsaXplcnNcbiAgc2VsZWN0ZWRQcm9qZWN0TmFtZUgxLnRleHRDb250ZW50ID0gcHJvamVjdFNlbGVjdGVkLm5hbWU7XG4gIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgcG9wdWxhdGVUYXNrcyhwcm9qZWN0U2VsZWN0ZWQpO1xufVxuXG53aW5kb3cudG9kbyA9IHtcbiAgdG9kb0xpc3QsXG4gIFByb2plY3QsXG4gIFRhc2ssXG59O1xuIiwiaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvTGlzdFwiO1xuY29uc3Qgc3RyaW5naWZ5ID0gcmVxdWlyZShcImpzb24tc3RyaW5naWZ5LXNhZmVcIik7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBpc0FmdGVyIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBjb21wb3NpdGUgPSBmYWxzZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb21wb3NpdGUgPSBjb21wb3NpdGU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuY29tcGxldGVkVGFza3MgPSBbXTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0YXNrLnByb2plY3QgPSB0aGlzO1xuICAgIHRhc2sucHJvamVjdE5hbWUgPSB0aGlzLm5hbWU7XG4gICAgdGFzay5pbkRhdGUgPSBpc0FmdGVyKG5ldyBEYXRlKHRhc2suZGF0ZSksIG5ldyBEYXRlKCkpO1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB0aGlzLnRhc2tPcmRlcmluZygpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgc3RyaW5naWZ5KHRvZG9MaXN0LCBudWxsLCAyKSk7XG4gIH1cbiAgcmVtb3ZlVGFzayhyZW1vdmVUYXNrKSB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrICE9PSByZW1vdmVUYXNrKTtcbiAgICB0aGlzLmNvbXBsZXRlZFRhc2tzID0gdGhpcy5jb21wbGV0ZWRUYXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzayAhPT0gcmVtb3ZlVGFza1xuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKTtcbiAgfVxuICBhZGRDb21wbGV0ZWRUYXNrKHRhc2spIHtcbiAgICB0YXNrLnByb2plY3QgPSB0aGlzO1xuICAgIHRhc2sucHJvamVjdE5hbWUgPSB0aGlzLm5hbWU7XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5wdXNoKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgc3RyaW5naWZ5KHRvZG9MaXN0LCBudWxsLCAyKSk7XG4gIH1cbiAgcmVtb3ZlQ29tcGxldGVkVGFzayhyZW1vdmVUYXNrKSB7XG4gICAgdGhpcy5jb21wbGV0ZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sgIT09IHJlbW92ZVRhc2spO1xuICB9XG4gIGFsbFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmNvbmNhdCh0aGlzLmNvbXBsZXRlZFRhc2tzKTtcbiAgfVxuICBzZWxlY3RUYXNrKHRhc2tOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsVGFza3MoKS5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIHJldHVybiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lO1xuICAgIH0pWzBdO1xuICB9XG4gIGNvbXBsZXRlVGFza1RvZ2dsZSh0YXNrVG9Ub2dnbGVOYW1lKSB7XG4gICAgbGV0IHRhc2tTZWxlY3RlZCA9IHRoaXMuc2VsZWN0VGFzayh0YXNrVG9Ub2dnbGVOYW1lKTtcbiAgICB0YXNrU2VsZWN0ZWQudG9nZ2xlVGFza0NvbXBsZXRlKCk7XG4gICAgbGV0IHByb2plY3QgPSB0YXNrU2VsZWN0ZWQucHJvamVjdDtcbiAgICBsZXQgYWxsVGFza3MgPSBwcm9qZWN0LmFsbFRhc2tzKCk7XG4gICAgcHJvamVjdC50YXNrcyA9IFtdO1xuICAgIHByb2plY3QuY29tcGxldGVkVGFza3MgPSBbXTtcbiAgICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZSkgdGFzay5wcm9qZWN0LmFkZENvbXBsZXRlZFRhc2sodGFzayk7XG4gICAgICBlbHNlIHRhc2sucHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgIH0pO1xuICAgIHByb2plY3QudG9kby5hc3NlbWJsZUNvbXBvc2l0ZXMoKTtcbiAgfVxuICB0YXNrT3JkZXJpbmcoKSB7XG4gICAgbGV0IG5vRGF0ZVRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHQpID0+IHQuZGF0ZSA9PT0gXCJObyBkYXRlXCIpO1xuICAgIGxldCBkYXRlZFRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHQpID0+IHQuZGF0ZSAhPT0gXCJObyBkYXRlXCIpO1xuICAgIGRhdGVkVGFza3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgbGV0IGFEYXRlID0gbmV3IERhdGUoYS5kYXRlKTtcbiAgICAgIGxldCBiRGF0ZSA9IG5ldyBEYXRlKGIuZGF0ZSk7XG4gICAgICByZXR1cm4gY29tcGFyZUFzYyhhRGF0ZSwgYkRhdGUpO1xuICAgIH0pO1xuICAgIHRoaXMudGFza3MgPSBkYXRlZFRhc2tzLmNvbmNhdChub0RhdGVUYXNrcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmFnZSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpIHtcbiAgICAvLyBHcmFiIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBsZXQgdG9kb0xpc3RTdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgbGV0IGFsbFN0b3JlZFRhc2tzID0gW107XG4gICAgdG9kb0xpc3RTdG9yZS5wcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICBpZiAoIXAuY29tcG9zaXRlKSB7XG4gICAgICAgIC8vICYmIHAubmFtZSAhPT0gJ0luYm94J1xuICAgICAgICBpZiAocC50YXNrcy5sZW5ndGggIT09IDAgfHwgcC5jb21wbGV0ZWRUYXNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBwLnRhc2tzLmZvckVhY2goKHQpID0+IGFsbFN0b3JlZFRhc2tzLnB1c2godCkpO1xuICAgICAgICAgIHAuY29tcGxldGVkVGFza3MuZm9yRWFjaCgodCkgPT4gYWxsU3RvcmVkVGFza3MucHVzaCh0KSk7XG4gICAgICAgIH0gZWxzZSBhbGxTdG9yZWRUYXNrcy5wdXNoKHApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBwcm9qZWN0cyA9IHt9O1xuICAgIGFsbFN0b3JlZFRhc2tzLmZvckVhY2goKHQpID0+IHtcbiAgICAgIGlmICh0LnR5cGUgPT09IFwiVGFza1wiKSB7XG4gICAgICAgIHByb2plY3RzW3QucHJvamVjdE5hbWVdID0gcHJvamVjdHNbdC5wcm9qZWN0TmFtZV0gfHwgW107XG4gICAgICAgIHByb2plY3RzW3QucHJvamVjdE5hbWVdLnB1c2gobmV3IFRhc2sodC5uYW1lLCB0LmRhdGUsIHQuY29tcGxldGUpKTtcbiAgICAgIH0gZWxzZSBpZiAodC50eXBlID09PSBcIlByb2plY3RcIikge1xuICAgICAgICBwcm9qZWN0c1t0Lm5hbWVdID0gcHJvamVjdHNbdC5uYW1lXSB8fCBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IGluIHByb2plY3RzKSB7XG4gICAgICBsZXQgcHJvak9iaiA9IHByb2plY3QgPT09IFwiSW5ib3hcIiA/IHRvZG9MaXN0LmluYm94IDogbmV3IFByb2plY3QocHJvamVjdCk7XG4gICAgICBwcm9qZWN0c1twcm9qZWN0XS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LmNvbXBsZXRlKSBwcm9qT2JqLmFkZENvbXBsZXRlZFRhc2sodCk7XG4gICAgICAgIGVsc2UgcHJvak9iai5hZGRUYXNrKHQpO1xuICAgICAgfSk7XG4gICAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2pPYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBDcmVhdGUgc3RhcnRlciBwcm9qZWN0cyBhbmQgdGFza3M6XG4gICAgY29uc3Qgc3RhcnRlclByb2plY3QxID0gbmV3IFByb2plY3QoXCJMZWFybiBKYXZhc2NyaXB0XCIpO1xuICAgIGNvbnN0IHN0YXJ0ZXJQcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiTGVhcm4gbW9yZSBKYXZhc2NyaXB0XCIpO1xuICAgIGNvbnN0IHN0YXJ0ZXJUYXNrczEgPSBbXG4gICAgICBuZXcgVGFzayhcIldyaXRlIGNvZGUxXCIsIFwiMjAyMy0wNC0xMFwiKSxcbiAgICAgIG5ldyBUYXNrKFwiUmVmYWN0b3Igb2xkIGNvZGUxXCIsIFwiMjAyMy0wNC0xMlwiKSxcbiAgICAgIG5ldyBUYXNrKFwiZm9vMVwiLCBcIjIwMjMtMDQtMTRcIiksXG4gICAgICBuZXcgVGFzayhcImJhcjFcIiwgXCIyMDIzLTA0LTIwXCIpLFxuICAgICAgbmV3IFRhc2soXCJiYXoxXCIsIFwiMjAyMy0wNC0yNVwiKSxcbiAgICBdO1xuICAgIGNvbnN0IHN0YXJ0ZXJUYXNrczIgPSBbXG4gICAgICBuZXcgVGFzayhcIldyaXRlIGNvZGUyXCIsIFwiMjAyMy0wNC0xMVwiKSxcbiAgICAgIG5ldyBUYXNrKFwiUmVmYWN0b3Igb2xkIGNvZGUyXCIsIFwiMjAyMy0wNC0xM1wiKSxcbiAgICAgIG5ldyBUYXNrKFwiZm9vMlwiLCBcIjIwMjMtMDQtMTZcIiksXG4gICAgICBuZXcgVGFzayhcImJhcjJcIiwgXCIyMDIzLTA0LTIwXCIpLFxuICAgICAgbmV3IFRhc2soXCJiYXoyXCIsIFwiMjAyMy0wNC0yNVwiKSxcbiAgICBdO1xuXG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChzdGFydGVyUHJvamVjdDEpO1xuICAgIHN0YXJ0ZXJUYXNrczEuZm9yRWFjaCgodGFzaykgPT4gc3RhcnRlclByb2plY3QxLmFkZFRhc2sodGFzaykpO1xuXG4gICAgdG9kb0xpc3QuYWRkUHJvamVjdChzdGFydGVyUHJvamVjdDIpO1xuICAgIHN0YXJ0ZXJUYXNrczIuZm9yRWFjaCgodGFzaykgPT4gc3RhcnRlclByb2plY3QyLmFkZFRhc2sodGFzaykpO1xuICB9XG4gIGlmICghdG9kb0xpc3QucHJvamVjdHMuaW5jbHVkZXModG9kb0xpc3QuaW5ib3gpKVxuICAgIHRvZG9MaXN0LmFkZFByb2plY3QodG9kb0xpc3QuaW5ib3gpO1xuICB0b2RvTGlzdC5hZGRQcm9qZWN0KHRvZG9MaXN0LnRvZGF5KTtcbiAgdG9kb0xpc3QuYWRkUHJvamVjdCh0b2RvTGlzdC50aGlzV2Vlayk7XG4gIHRvZG9MaXN0LmFzc2VtYmxlQ29tcG9zaXRlcyhcIlRvZGF5XCIpO1xuICB0b2RvTGlzdC5hc3NlbWJsZUNvbXBvc2l0ZXMoXCJUaGlzIHdlZWtcIik7XG59XG4iLCJjb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKFwianNvbi1zdHJpbmdpZnktc2FmZVwiKTtcbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb0xpc3RcIjtcbmltcG9ydCB7IGlzQWZ0ZXIgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGluRGF0ZTtcbiAgY29uc3RydWN0b3IobmFtZSA9IFwiTm8gbmFtZVwiLCBkYXRlLCBjb21wbGV0ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlIHx8IFwiTm8gZGF0ZVwiO1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgXCJObyBuYW1lXCI7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodG9kb0xpc3QsIG51bGwsIDIpKTtcbiAgfVxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGU7XG4gIH1cbiAgc2V0RGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZSB8fCBcIk5vIGRhdGVcIjtcbiAgICB0aGlzLmluRGF0ZSA9IGlzQWZ0ZXIobmV3IERhdGUodGhpcy5kYXRlKSwgbmV3IERhdGUoKSk7XG4gICAgdGhpcy5wcm9qZWN0LnRhc2tPcmRlcmluZygpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgc3RyaW5naWZ5KHRvZG9MaXN0LCBudWxsLCAyKSk7XG4gIH1cbiAgdG9nZ2xlVGFza0NvbXBsZXRlKCkge1xuICAgIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNUb2RheSwgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuY29uc3Qgc3RyaW5naWZ5ID0gcmVxdWlyZShcImpzb24tc3RyaW5naWZ5LXNhZmVcIik7XG5cbmV4cG9ydCBjb25zdCB0b2RvTGlzdCA9IHtcbiAgaW5ib3g6IG5ldyBQcm9qZWN0KFwiSW5ib3hcIiksXG4gIHRvZGF5OiBuZXcgUHJvamVjdChcIlRvZGF5XCIsIHRydWUpLFxuICB0aGlzV2VlazogbmV3IFByb2plY3QoXCJUaGlzIHdlZWtcIiwgdHJ1ZSksXG4gIHByb2plY3RzOiBbXSxcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdC50b2RvID0gdGhpcztcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBzdHJpbmdpZnkodGhpcywgbnVsbCwgMikpO1xuICB9LFxuICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QubmFtZSAhPT0gcHJvamVjdE5hbWVcbiAgICApO1xuICB9LFxuICBhc3NlbWJsZUNvbXBvc2l0ZXMoKSB7XG4gICAgbGV0IGNvbXBvc2l0ZXMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5jb21wb3NpdGUpO1xuICAgIGNvbXBvc2l0ZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgYy50YXNrcy5sZW5ndGggPSAwO1xuICAgICAgYy5jb21wbGV0ZWRUYXNrcy5sZW5ndGggPSAwO1xuICAgICAgaWYgKGMubmFtZSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgIGlmIChwLmNvbXBvc2l0ZSkgcmV0dXJuO1xuICAgICAgICAgIGxldCBhbGxUYXNrcyA9IHAuYWxsVGFza3MoKTtcbiAgICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0LmRhdGUpKSkge1xuICAgICAgICAgICAgICBpZiAodC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9kYXkuY29tcGxldGVkVGFza3MucHVzaCh0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5LnRhc2tzLnB1c2godCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGMubmFtZSA9PT0gXCJUaGlzIHdlZWtcIikge1xuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICBpZiAocC5jb21wb3NpdGUpIHJldHVybjtcbiAgICAgICAgICBsZXQgYWxsVGFza3MgPSBwLmFsbFRhc2tzKCk7XG4gICAgICAgICAgYWxsVGFza3MuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVGhpc1dlZWsobmV3IERhdGUodC5kYXRlKSwgeyB3ZWVrU3RhcnRzT246IDEgfSkpIHtcbiAgICAgICAgICAgICAgaWYgKHQuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRoaXNXZWVrLmNvbXBsZXRlZFRhc2tzLnB1c2godCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGlzV2Vlay50YXNrcy5wdXNoKHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgc3RyaW5naWZ5KHRoaXMsIG51bGwsIDIpKTtcbiAgfSxcbiAgc2VsZWN0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMuYXNzZW1ibGVDb21wb3NpdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZTtcbiAgICB9KVswXTtcbiAgfSxcbiAgLy8gY29uc29sZSBtZXRob2RcbiAgZGlzcGxheVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IHRoaXMuc2VsZWN0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgZm9yIChsZXQga2V5IGluIHByb2plY3QpIHtcbiAgICAgIGlmIChrZXkgPT09IFwibmFtZVwiKSBjb25zb2xlLmxvZyhgbmFtZTogJHtwcm9qZWN0W2tleV19YCk7XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwidGFza3NcIikge1xuICAgICAgICBwcm9qZWN0W2tleV0uZm9yRWFjaCgodGFzaywgaW5kZXgpID0+XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgVGFzayR7aW5kZXggKyAxfTogTmFtZSAtICR7dGFzay5uYW1lfSBEYXRlIC0gJHt0YXNrLmRhdGV9ICR7XG4gICAgICAgICAgICAgIHByb2plY3QubmFtZSAhPT0gXCJUb2RheVwiICYmIHByb2plY3QubmFtZSAhPT0gXCJUaGlzIHdlZWtcIlxuICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgIDogYCgke3Byb2plY3QubmFtZX0pYFxuICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0W2tleV0uZm9yRWFjaCgoY29tcGxldGVUYXNrLCBpbmRleCkgPT5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBDb21wbGV0ZWQgVGFzayR7aW5kZXggKyAxfTogTmFtZSAtICR7Y29tcGxldGVUYXNrLm5hbWV9IERhdGUgLSAke1xuICAgICAgICAgICAgICBjb21wbGV0ZVRhc2suZGF0ZVxuICAgICAgICAgICAgfSAke1xuICAgICAgICAgICAgICBwcm9qZWN0Lm5hbWUgIT09IFwiVG9kYXlcIiAmJiBwcm9qZWN0Lm5hbWUgIT09IFwiVGhpcyB3ZWVrXCJcbiAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICA6IGAoJHtwcm9qZWN0Lm5hbWV9KWBcbiAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cbnN0b3JhZ2UoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgVUkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9