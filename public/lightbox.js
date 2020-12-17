(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lightbox"] = factory();
	else
		root["lightbox"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return uuid; });
/* unused harmony export isFunction */
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isString; });
/* unused harmony export getVendorName */
/* unused harmony export setVendorPrefix */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Faster alternative to [].forEach method
 *
 * @param {Node|NodeList|Array} collection
 * @param {Function} callback
 * @return {Node|NodeList|Array}
 * @private
 */

var each = function each(collection, callback, thisArg) {
  var length = collection.length;
  if (length !== undefined && collection.nodeType === undefined) {
    for (var indx = 0; indx < length; indx++) {
      callback.call(thisArg, collection[indx], indx, collection);
    }
  } else {
    callback.call(thisArg, collection, 0, collection);
  }
  return collection;
};
var uuid = function uuid() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return prefix + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
};

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};
var isObject = function isObject(unknown) {
  return Object.prototype.toString.call(unknown) === '[object Object]';
};
var isString = function isString(unknown) {
  return typeof unknown === 'string' || !!unknown && (typeof unknown === 'undefined' ? 'undefined' : _typeof(unknown)) === 'object' && Object.prototype.toString.call(unknown) === '[object String]';
};

var getVendorName = function getVendorName() {
  var ua = window.navigator.userAgent;
  var vendors = {
    '-webkit-': /Chrome|Safari/,
    '-moz-': /Firefox/,
    '-ms-': /MSIE|Trident|IEMobile/,
    '-o-': /Opera/
  };

  var vendor = '';
  for (var name in vendors) {
    if (vendors[name].test(ua)) {
      vendor = name;
      break;
    }
  }
  return vendor;
};

var setVendorPrefix = function setVendorPrefix(names) {
  var style = document.createElement('div').style;
  var vendor = getVendorName();
  var props = {};
  var callback = function callback(prop) {
    return props[prop] = function (s, p) {
      if (!(p in s)) {
        return vendor + p;
      }
      return p;
    }(style, prop);
  };

  names.forEach(callback);
  style = null;
  return props;
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_events__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_animate__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultOptions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// Define events
var onKeyUp = Symbol('onKeyUp');
var onMouseMove = Symbol('onMouseMove');
var onMouseOver = Symbol('onMouseOver');
var onItemClick = Symbol('onItemClick');
var onCloseClick = Symbol('onCloseClick');
var onPreviousClick = Symbol('onPreviousClick');
var onNextClick = Symbol('onNextClick');
var onZoomClick = Symbol('onZoomClick');
var onDownloadClick = Symbol('onDownloadClick');
var onFullscreenClick = Symbol('onFullscreenClick');

var onSwipeStart = Symbol('onSwipeStart');
var onSwipeMove = Symbol('onSwipeMove');
var onSwipeEnd = Symbol('onSwipeEnd');

var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
            supportsPassive = true;
        }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
} catch (e) {}

var Lightbox = function (_EventEmitter) {
    _inherits(Lightbox, _EventEmitter);

    function Lightbox(selector) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Lightbox);

        var _this = _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this));

        _this._element = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isString */](selector) ? document.querySelector(selector) : selector;
        // An invalid selector or non-DOM node has been provided.
        if (!_this._element) {
            throw new Error('An invalid selector or non-DOM node has been provided.');
        }
        _this._clickEvents = ['click'];

        _this._options = _extends({}, __WEBPACK_IMPORTED_MODULE_3__defaultOptions__["a" /* default */], options);

        _this._id = __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* uuid */](_this.constructor.name + '-');

        //Bind events to current class
        _this[onKeyUp] = _this[onKeyUp].bind(_this);
        _this[onMouseMove] = _this[onMouseMove].bind(_this);
        _this[onMouseOver] = _this[onMouseOver].bind(_this);
        _this[onItemClick] = _this[onItemClick].bind(_this);
        _this[onCloseClick] = _this[onCloseClick].bind(_this);
        _this[onPreviousClick] = _this[onPreviousClick].bind(_this);
        _this[onNextClick] = _this[onNextClick].bind(_this);
        _this[onZoomClick] = _this[onZoomClick].bind(_this);
        _this[onDownloadClick] = _this[onDownloadClick].bind(_this);
        _this[onFullscreenClick] = _this[onFullscreenClick].bind(_this);

        // Bind Swipe events to current class
        _this[onSwipeStart] = _this[onSwipeStart].bind(_this);
        _this[onSwipeMove] = _this[onSwipeMove].bind(_this);
        _this[onSwipeEnd] = _this[onSwipeEnd].bind(_this);

        // Initiate plugin
        _this._init();
        return _this;
    }

    /**
     * Initiate all DOM element containing datePicker class
     * @method
     * @return {Array} Array of all datePicker instances
     */


    _createClass(Lightbox, [{
        key: '_init',


        /**
         * Initiate plugin instance
         * @method _init
         * @return {datePicker} Current plugin instance
         */
        value: function _init() {
            this._open = false;
            this._items = Array.from(this._element.querySelectorAll(this.options.selector) || []);
            this._currentIndex = this.options.index || 0;
            // Fix current item index if wrong
            if (isNaN(this._currentIndex) || this._currentIndex < 0 || this._currentIndex >= this.length) {
                this._currentIndex = 0;
            }

            // Append lightbox component HTML to the DOM
            document.body.insertAdjacentHTML('beforeend', Object(__WEBPACK_IMPORTED_MODULE_4__template__["a" /* default */])(_extends({}, this.options, {
                id: this.id,
                items: this.items
            })));

            this.lightbox = document.getElementById(this.id);
            this.lightboxBackground = this.lightbox.querySelector('.lightbox-background');
            this.lightboxToolbar = this.lightbox.querySelector('.lightbox-toolbar');
            this.lightboxContent = this.lightbox.querySelector('.lightbox-content');
            this.lightboxItems = this.lightboxContent.querySelectorAll('.lightbox-item');
            if (this.options.title) {
                this.lightboxTitle = this.lightbox.querySelector('.lightbox-caption');
            }
            if (this.options.counter) {
                this.lightboxCounter = this.lightboxToolbar.querySelector('.lightbox-counter');
            }
            if (this.options.zoom) {
                this.lightboxZoom = this.lightboxToolbar.querySelector('.lightbox-zoom');
            }
            if (this.options.download) {
                this.lightboxDownload = this.lightboxToolbar.querySelector('.lightbox-download');
            }
            if (this.options.share) {
                this.lightboxShare = this.lightboxToolbar.querySelector('.lightbox-share');
            }
            if (this.options.fullscreen && __WEBPACK_IMPORTED_MODULE_2__utils_animate__["e" /* requestFullscreenEnabled */]) {
                this.lightboxFullscreen = this.lightboxToolbar.querySelector('.lightbox-fullscreen');
            }
            this.lightboxClose = this.lightboxToolbar.querySelector('.lightbox-close');

            this.lightboxNav = this.lightbox.querySelector('.lightbox-nav');
            this.lightboxNavPrevious = this.lightboxNav.querySelector('.lightbox-nav-previous');
            this.lightboxNavNext = this.lightboxNav.querySelector('.lightbox-nav-next');

            if (this.length <= 1) {
                this.lightboxNav.classList.add('is-hidden');
            }
            this._positions = {
                mouse: {
                    x: 0,
                    y: 0
                },
                current: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                x: 0,
                y: 0
            };

            this._bindEvents();

            this.emit(this.className + ':ready');
        }

        /**
         * Destroy datePicker
         * @method destroy
         * @return {[type]} [description]
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            var _this2 = this;

            this.emit(this.className + ':destroy');
            document.removeEventListener('keyup', this[onKeyUp]);
            __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* each */](this.items, function (item, index) {
                item.removeEventListener('mouseover', _this2[onMouseOver]);
                item.removeEventListener('click', _this2[onItemClick]);
            });
            __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* each */](this.lightboxItems, function (item) {
                item.removeEventListener('touchstart', _this2[onSwipeStart], supportsPassive ? {
                    passive: true
                } : false);
                item.removeEventListener('mousedown', _this2[onSwipeStart], supportsPassive ? {
                    passive: true
                } : false);
                item.removeEventListener('touchmove', _this2[onSwipeMove], supportsPassive ? {
                    passive: true
                } : false);
                item.removeEventListener('mousemove', _this2[onSwipeMove], supportsPassive ? {
                    passive: true
                } : false);
                item.removeEventListener('touchend', _this2[onSwipeEnd], supportsPassive ? {
                    passive: true
                } : false);
                item.removeEventListener('mouseup', _this2[onSwipeEnd], supportsPassive ? {
                    passive: true
                } : false);
            });
            this.lightbox.remove();
        }

        /**
         * Bind all events
         * @method _bindEvents
         * @return {void}
         */

    }, {
        key: '_bindEvents',
        value: function _bindEvents() {
            var _this3 = this;

            // Bind keys events
            document.addEventListener('keyup', this[onKeyUp]);

            __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* each */](this.items, function (item, index) {
                item.addEventListener('mouseover', _this3[onMouseOver]);
                item.addEventListener('click', _this3[onItemClick].bind(_this3, index), false);
            });
            __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* each */](this.lightboxItems, function (item) {
                item.setAttribute('draggable', false);
                item.addEventListener('touchstart', _this3[onSwipeStart], supportsPassive ? {
                    passive: true
                } : false);
                item.addEventListener('mousedown', _this3[onSwipeStart], supportsPassive ? {
                    passive: true
                } : false);
                item.addEventListener('touchmove', _this3[onSwipeMove], supportsPassive ? {
                    passive: true
                } : false);
                item.addEventListener('mousemove', _this3[onSwipeMove], supportsPassive ? {
                    passive: true
                } : false);
                item.addEventListener('touchend', _this3[onSwipeEnd], supportsPassive ? {
                    passive: true
                } : false);
                item.addEventListener('mouseup', _this3[onSwipeEnd], supportsPassive ? {
                    passive: true
                } : false);
            });

            // Bind close button event
            this.lightboxClose.addEventListener('click', this[onCloseClick]);

            if (this.length > 1) {
                // Bind previous button event
                this.lightboxNavPrevious.addEventListener('click', this[onPreviousClick]);

                // Bind next button event
                this.lightboxNavNext.addEventListener('click', this[onNextClick]);
            }

            // Bind download current item button event
            if (this.options.zoom && this.lightboxZoom) {
                this.lightboxZoom.addEventListener('click', this[onZoomClick]);
            }

            // Bind download current item button event
            if (this.options.download && this.lightboxDownload) {
                this.lightboxDownload.addEventListener('click', this[onDownloadClick]);
            }

            // Bind & manage fullscreen mode events
            if (this.options.fullscreen && this.lightboxFullscreen && __WEBPACK_IMPORTED_MODULE_2__utils_animate__["e" /* requestFullscreenEnabled */]) {
                this.lightboxFullscreen.addEventListener('click', this[onFullscreenClick]);
            }
        }

        /**
         * Get id of current datePicker
         */

    }, {
        key: 'show',


        /**
         * Show lightbox
         * @method show
         * @return {void}
         */
        value: function show() {
            this._updateCurrItem();
            this._open = true;
            this.lightbox.classList.add('is-active');
            this.emit(this.className + ':show');
        }

        /**
         * Hide ligthbox
         * @method hide
         * @return {void}
         */

    }, {
        key: 'hide',
        value: function hide() {
            this._open = false;
            this.lightbox.classList.remove('is-active');
            this.emit(this.className + ':hide');
        }

        /**
         * Get lightbox open status
         * @method isOpen
         * @return {Boolean}
         */

    }, {
        key: 'isOpen',
        value: function isOpen() {
            return this._open;
        }

        /**
         * Go To next item
         * @method next
         * @return {void}
         */

    }, {
        key: 'next',
        value: function next() {
            if (this._currentIndex + 1 >= this.length && !this.options.loop) {
                return;
            }
            this._zoomOut();
            this.goTo(this._currentIndex + 1);
            this.emit(this.className + ':next', this._currentIndex + 1);
        }

        /**
         * Go To previous item
         * @method prev
         * @return {void}
         */

    }, {
        key: 'prev',
        value: function prev() {
            if (this._currentIndex - 1 < 0 && !this.options.loop) {
                return;
            }
            this._zoomOut();
            this.goTo(this._currentIndex - 1);
            this.emit(this.className + ':previous', this._currentIndex - 1);
        }

        /**
         * Go To a specific item index
         * @method goTo
         * @param  {Integer} index Item index to go to
         * @return {void}
         */

    }, {
        key: 'goTo',
        value: function goTo(index) {
            if (index >= this.length) {
                index = 0;
            }
            if (index < 0) {
                index = this.length - 1;
            }
            if (!this.options.loop && index === 0) {
                this.lightboxNavPrevious.querySelector('i, svg').classList.add('is-hidden');
            } else {
                this.lightboxNavPrevious.querySelector('i, svg').classList.remove('is-hidden');
            }
            if (!this.options.loop && index === this.length - 1) {
                this.lightboxNavNext.querySelector('i, svg').classList.add('is-hidden');
            } else {
                this.lightboxNavNext.querySelector('i, svg').classList.remove('is-hidden');
            }
            this._currentIndex = index;
            this._updateCurrItem();
            this.emit(this.className + ':goto', index);
        }

        /**
         * Handle Key Up event
         * @method onKeyUp
         * @param  {Event} e Event
         * @return {void}
         */

    }, {
        key: onKeyUp,
        value: function value(e) {
            // Esc key
            if (this.options.escKey && e.keyCode === 27) {
                if (this.options.zoom && this._zoomed) {
                    this._zoomOut();
                } else {
                    this.hide();
                }
            }
            // Arrow keys
            if (this.options.arrowKeys) {
                if (e.keyCode === 39 || e.keyCode === 68) {
                    this.next();
                } else if (e.keyCode === 37 || e.keyCode === 65) {
                    this.prev();
                }
            }
        }

        /**
         * Handle Mouse Over event
         * @method onMouseOver
         * @param  {Event} e Event
         * @return {void}
         */

    }, {
        key: onMouseOver,
        value: function value(e) {
            e.currentTarget.style.cursor = 'pointer';
        }

        /**
         * Handle Item Click Event
         * @method onItemClick
         * @param  {Event} e Event
         * @return {void}
         */

    }, {
        key: onItemClick,
        value: function value(index, e) {
            e.preventDefault();

            this._currentIndex = index;
            this.show();
        }

        /**
         * Handle Close Button event
         * @method onCloseClick
         * @param  {Event} e Event
         * @return {void}
         */

    }, {
        key: onCloseClick,
        value: function value(e) {
            e.preventDefault();

            this.hide();
        }

        /**
         * Handle Previous Button Click event
         * @method onPreviousClick
         * @param  {Event} e Event
         * @return {void}
         */

    }, {
        key: onPreviousClick,
        value: function value(e) {
            e.preventDefault();

            this.prev();
        }

        /**
         * Handle Next Button Click event
         * @method onNextClick
         * @param  {Event} e Event
         * @return {void}
         */

    }, {
        key: onNextClick,
        value: function value(e) {
            e.preventDefault();

            this.next();
        }

        /**
         * Handle Zoom Button Click event
         * @method onZoomClick
         * @param  {Event} e Event
         * @return {void}
         */

    }, {
        key: onZoomClick,
        value: function value(e) {
            e.preventDefault();

            if (!this._zoomed) {
                this._zoomIn();
            } else {
                this._zoomOut();
            }
        }

        /**
         * Handle Download Button Click event
         * @method onDownloadClick
         * @param  {Event} e Event
         * @return {void}
         */

    }, {
        key: onDownloadClick,
        value: function value(e) {
            e.preventDefault();

            this._downloadCurrItem();
        }

        /**
         * Handle Fullscreen Button click event
         * @method onFullscreenClick
         * @param  {Event} e Event
         * @return {void}
         */

    }, {
        key: onFullscreenClick,
        value: function value(e) {
            e.preventDefault();

            if (!__WEBPACK_IMPORTED_MODULE_2__utils_animate__["d" /* requestFullscreenElement */]()) {
                __WEBPACK_IMPORTED_MODULE_2__utils_animate__["f" /* requestFullscreenMethod */].bind(document.body)();
            } else {
                if (__WEBPACK_IMPORTED_MODULE_2__utils_animate__["b" /* cancelFullscreenMethod */]) {
                    __WEBPACK_IMPORTED_MODULE_2__utils_animate__["b" /* cancelFullscreenMethod */].bind(document)();
                }
            }
        }

        /**
         * Get new Mouse position
         * @method onMouseMove
         * @param  {Event} e mouse event
         * @return {void}
         */

    }, {
        key: onMouseMove,
        value: function value(e) {
            this._positions.mouse.x += (e.clientX - this._positions.mouse.x) * 0.05;
            this._positions.mouse.y += (e.clientY - this._positions.mouse.y) * 0.05;
        }

        /**
         * Save current position on start swiping
         * @method onSwipeStart
         * @param  {Event}    e Swipe event
         * @return {void}
         */

    }, {
        key: onSwipeStart,
        value: function value(e) {
            if (!supportsPassive) {
                e.preventDefault();
            }

            e = e ? e : window.event;
            e = 'changedTouches' in e ? e.changedTouches[0] : e;
            this._touch = {
                start: {
                    time: new Date().getTime(), // record time when finger first makes contact with surface
                    x: e.pageX,
                    y: e.pageY
                },
                dist: {
                    x: 0,
                    y: 0
                }
            };
        }

        /**
         * Save current position on end swiping
         * @method onSwipeMove
         * @param  {Event}  e swipe event
         * @return {void}
         */

    }, {
        key: onSwipeMove,
        value: function value(e) {
            if (!supportsPassive) {
                e.preventDefault();
            }
        }

        /**
         * Save current position on end swiping
         * @method onSwipeEnd
         * @param  {Event}  e swipe event
         * @return {void}
         */

    }, {
        key: onSwipeEnd,
        value: function value(e) {
            if (!supportsPassive) {
                e.preventDefault();
            }

            e = e ? e : window.event;
            e = 'changedTouches' in e ? e.changedTouches[0] : e;
            this._touch.dist = {
                x: e.pageX - this._touch.start.x, // get horizontal dist traveled by finger while in contact with surface
                y: e.pageY - this._touch.start.y // get vertical dist traveled by finger while in contact with surface
            };

            this._handleGesture();
        }

        /**
         * Identify the gestureand slide if necessary
         * @method _handleGesture
         * @return {void}
         */

    }, {
        key: '_handleGesture',
        value: function _handleGesture() {
            var elapsedTime = new Date().getTime() - this._touch.start.time; // get time elapsed
            if (elapsedTime <= this.options.allowedTime) {
                // first condition for awipe met
                if (Math.abs(this._touch.dist.x) >= this.options.threshold && Math.abs(this._touch.dist.y) <= this.options.restraint) {
                    // 2nd condition for horizontal swipe met
                    this._touch.dist.x < 0 ? this.next() : this.prev(); // if dist traveled is negative, it indicates left swipe
                }
            }
        }

        /**
         * Get item at specific index
         * @method _getItemAt
         * @param  {Integer}   index index of the item we want to retreive
         * @return {Object|Boolean}  Item if found then False
         */

    }, {
        key: '_getItemAt',
        value: function _getItemAt(index) {
            if (index >= 0) {
                return this.items[index] !== undefined ? this.items[index] : false;
            }
            return false;
        }

        /**
         * Update current item position and refresh displau
         * @method _updateCurrItem
         * @return {void}
         */

    }, {
        key: '_updateCurrItem',
        value: function _updateCurrItem() {
            var _this4 = this;

            this._currentItem = this._getItemAt(this._currentIndex);
            __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* each */](this.items, function (item, index) {
                var lightboxItem = _this4.lightboxContent.querySelector('[data-item-index="' + index + '"]');
                if (lightboxItem) {
                    if (index === _this4._currentIndex) {
                        lightboxItem.style.order = 0;
                        _this4._currentItem = lightboxItem;
                    } else {
                        lightboxItem.style.order = 1;
                    }
                }
            });

            if (this.options.title && this.lightboxTitle) {
                this.lightboxTitle.innerHTML = this._getItemAt(this._currentIndex).dataset.title || '';
            }

            if (this.options.share) {
                this.options.shareButtons.forEach(function (shareButtonData) {
                    var button = _this4.lightboxShare.querySelector('#share-' + shareButtonData.id);
                    if (button) {
                        var image_url = _this4._getImageUrlToShare(shareButtonData);
                        var page_url = _this4._getPageUrlToShare(shareButtonData);
                        var share_text = _this4._getTextToShare(shareButtonData);
                        var shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url)).replace('{{image_url}}', encodeURIComponent(image_url)).replace('{{raw_image_url}}', image_url).replace('{{text}}', encodeURIComponent(share_text));
                        button.setAttribute('href', shareURL);
                    }
                });
            }

            if (this.options.counter) {
                this.lightboxCounter.innerHTML = this._currentIndex + 1 + ' / ' + this.length;
            }
        }

        /**
         * Get Item image source
         * @method _getImageUrlToShare
         * @return {String}
         */

    }, {
        key: '_getImageUrlToShare',
        value: function _getImageUrlToShare() {
            return this._getItemAt(this._currentIndex).getAttribute('src') || '';
        }

        /**
         * Get Current page path
         * @method _getPageUrlToShare
         * @return {String}
         */

    }, {
        key: '_getPageUrlToShare',
        value: function _getPageUrlToShare() {
            return window.location.href;
        }

        /**
         * Get Item title (data-title="") or ''
         * @method _getTextToShare
         * @return {String}
         */

    }, {
        key: '_getTextToShare',
        value: function _getTextToShare() {
            return this._getItemAt(this._currentIndex).dataset.title || '';
        }

        /**
         * Apply zoom in on item
         * @method _zoomIn
         * @return {void}
         */

    }, {
        key: '_zoomIn',
        value: function _zoomIn() {
            var _this5 = this;

            if (this.options.zoom && this.lightboxZoom) {
                var icon = this.lightboxZoom.querySelector('.icon');
                if (icon) {
                    icon.classList.remove('fa-search-plus');
                    icon.classList.add('fa-search-minus');
                }
            }
            if (this._currentItem) {
                this._contentStyle = window.getComputedStyle(this._currentItem);
                this._currentItem.classList.add('is-zoomed');
                var currentImage = this._currentItem.querySelector('img');
                if (currentImage) {
                    currentImage.style['webkitTransform'] = 'translate3d(-' + currentImage.width / 2 + 'px, -' + currentImage.height / 2 + 'px, 0px)';
                    currentImage.style['MozTransform'] = 'translate3d(-' + currentImage.width / 2 + 'px, -' + currentImage.height / 2 + 'px, 0px)';
                    currentImage.style['msTransform'] = 'translate3d(-' + currentImage.width / 2 + 'px, -' + currentImage.height / 2 + 'px, 0px)';
                    this._positions.x = 0;
                    this._positions.y = 0;
                    currentImage.addEventListener('mousemove', this[onMouseMove]);

                    var animation = __WEBPACK_IMPORTED_MODULE_2__utils_animate__["c" /* requestAnimationFrame */].bind(window)(function () {
                        _this5._followMouse();
                    });
                    this._animation = animation;
                }
            }
            this._zoomed = true;
        }

        /**
         * Apply zoom out on item
         * @method _zoomOut
         * @return {void}
         */

    }, {
        key: '_zoomOut',
        value: function _zoomOut() {
            if (this.options.zoom && this.lightboxZoom) {
                var icon = this.lightboxZoom.querySelector('.icon');
                if (icon) {
                    icon.classList.add('fa-search-plus');
                    icon.classList.remove('fa-search-minus');
                }
            }
            if (this._currentItem) {
                this._currentItem.classList.remove('is-zoomed');
                var currentImage = this._currentItem.querySelector('img');
                if (currentImage) {
                    currentImage.style['webkitTransform'] = 'translate3d(0px, 0px, 0px)';
                    currentImage.style['MozTransform'] = 'translate3d(0px, 0px, 0px)';
                    currentImage.style['msTransform'] = 'translate3d(0px, 0px, 0px)';
                    if (this._animation) {
                        __WEBPACK_IMPORTED_MODULE_2__utils_animate__["a" /* cancelAnimationFrame */].bind(window)(this._animation);
                    }
                    currentImage.removeEventListener('mousemove', this[onMouseMove]);
                }
            }
            this._contentStyle = null;
            this._zoomed = false;
        }

        /**
         * Make item follows mouse movements
         * @method _followMouse
         * @return {void}
         */

    }, {
        key: '_followMouse',
        value: function _followMouse() {
            var _this6 = this;

            var currentImage = this._currentItem.querySelector('img');

            // HORIZONTAL SCANNING
            if (currentImage.width > parseInt(this._contentStyle.width)) {
                this._positions.current.x += this._positions.mouse.x - this._positions.current.x;
                if (this._positions.mouse.x !== this._positions.last.x) {
                    this._positions.x = (parseInt(this._contentStyle.width) - currentImage.width) * parseFloat(this._positions.current.x / parseInt(this._contentStyle.width));
                    this._positions.last.x = this._positions.mouse.x;
                }
            }

            // VERTICAL SCANNING
            if (currentImage.height > parseInt(this._contentStyle.height)) {
                this._positions.current.y += this._positions.mouse.y - this._positions.current.y;
                if (this._positions.mouse.y !== this._positions.last.y) {
                    this._positions.y = (parseInt(this._contentStyle.height) - currentImage.height) * parseFloat(this._positions.current.y / parseInt(this._contentStyle.height));
                    this._positions.last.y = this._positions.mouse.y;
                }
            }

            currentImage.style['webkitTransform'] = 'translate3d(' + this._positions.x + 'px, ' + this._positions.y + 'px, 0px)';
            currentImage.style['MozTransform'] = 'translate3d(' + this._positions.x + 'px, ' + this._positions.y + 'px, 0px)';
            currentImage.style['msTransform'] = 'translate3d(' + this._positions.x + 'px, ' + this._positions.y + 'px, 0px)';
            var animation = __WEBPACK_IMPORTED_MODULE_2__utils_animate__["c" /* requestAnimationFrame */].bind(window)(function () {
                _this6._followMouse();
            });
            this._animation = animation;
        }

        /**
         * Force download of currentItem if image
         * @method _downloadCurrItem
         * @return {void}
         */

    }, {
        key: '_downloadCurrItem',
        value: function _downloadCurrItem() {
            var downloadLink = document.createElement('a');
            downloadLink.href = this._getImageUrlToShare();
            downloadLink.target = '_blank';
            downloadLink.download = downloadLink.href.substring(downloadLink.href.lastIndexOf('/') + 1);
            document.body.appendChild(downloadLink);
            downloadLink.click();
            downloadLink.remove();
        }
    }, {
        key: 'id',
        get: function get() {
            return this._id;
        }

        /**
         * Get id of current datePicker
         */

    }, {
        key: 'className',
        get: function get() {
            return this.constructor.name.toLowerCase();
        }

        /**
         * Get id of current datePicker
         */

    }, {
        key: 'options',
        get: function get() {
            return this._options;
        }

        /**
         * Get number of items
         */

    }, {
        key: 'length',
        get: function get() {
            return this._items.length || 0;
        }

        /**
         * Get array of items
         */

    }, {
        key: 'items',
        get: function get() {
            return this._items || [];
        }
    }], [{
        key: 'attach',
        value: function attach() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.lightbox';
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var instances = new Array();

            var elements = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isString */](selector) ? document.querySelectorAll(selector) : Array.isArray(selector) ? selector : [selector];
            __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* each */](elements, function (element) {
                setTimeout(function () {
                    instances.push(new Lightbox(element, options));
                }, 100);
            });
            return instances;
        }
    }]);

    return Lightbox;
}(__WEBPACK_IMPORTED_MODULE_0__utils_events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (Lightbox);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancelAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return requestFullscreenEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return requestFullscreenElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return requestFullscreenMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cancelFullscreenMethod; });
/* unused harmony export animate */
/* unused harmony export fade */
/* unused harmony export fadeIn */
/* unused harmony export toggle */
/* unused harmony export fadeOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__(4);



var requestAnimationFrame = function (container, t) {
    return container['webkitR' + t] || container['mozR' + t] || container['oR' + t] || container['msR' + t] || container['r' + t] || function (fn) {
        setTimeout(fn, 60);
    };
}(window, 'equestAnimationFrame');

var cancelAnimationFrame = function (container, t) {
    return container['webkitC' + t] || container['mozC' + t] || container['oC' + t] || container['msC' + t] || container['cancelAnimationFrame'] || clearTimeout;
}(window, 'ancelRequestAnimationFrame');

var requestFullscreenEnabled = function (container) {
    return container['webkitFullscreenEnabled'] || container['mozFullScreenEnabled'] || container['oFullscreenEnabled'] || container['msFullscreenEnabled'] || container['fullscreenEnabled'] || null;
}(document);

var requestFullscreenElement = function requestFullscreenElement() {
    return document['webkitFullscreenElement'] || document['mozFullScreenElement'] || document['oFullscreenElement'] || document['msFullscreenElement'] || document['fullscreenElement'] || null;
};

var requestFullscreenMethod = function (container) {
    return container['webkitRequestFullscreen'] || container['mozRequestFullScreen'] || container['oRequestFullscreen'] || container['msRequestFullscreen'] || container['requestFullscreen'] || null;
}(document.body);

var cancelFullscreenMethod = function (container) {
    return container['webkitExitFullscreen'] || container['mozCancelFullScreen'] || container['oExitFullscreen'] || container['msExitFullscreen'] || container['exitFullscreen'] || null;
}(document);

var animate = function animate() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        delay: 10,
        duration: 3000,
        method: __WEBPACK_IMPORTED_MODULE_1__animation__["a" /* linear */],
        step: function step() {}
    };

    var start = new Date();

    var step = function step() {
        var timePassed = new Date() - start;
        var progress = timePassed / opts.duration;

        if (progress > 1) progress = 1;

        var delta = opts.method(progress);
        opts.step(delta);

        if (progress == 1) return;

        requestAnimationFrame(step);
    };
    step();
};

var fade = function fade(element) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'in';
    var easing = arguments[3];

    var style = element.style;
    // const thisDisplay = window.getComputedStyle(element).getPropertyValue('display');
    // const thisOpacity = window.getComputedStyle(element).getPropertyValue('opacity');

    if (direction === 'in') {
        style.opacity = '0';
        style.display = 'initial';
        style.transition = 'opacity ' + speed + 'ms ' + (easing || '');
        setTimeout(function () {
            return style.opacity = '1';
        }, 10);
    }

    if (direction === 'out') {
        style.transition = 'opacity ' + speed + 'ms ' + (easing || '');
        style.opacity = '0';
    }

    var done = new Promise(function (resolve) {
        setTimeout(function () {
            if (direction === 'in') {
                style.display = 'initial';
            }
            if (direction === 'out') {
                style.display = 'none';
            }
            resolve(element);
        }, speed);
    });

    return done;
};

var fadeIn = function fadeIn() {
    var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
    var easing = arguments[1];
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    return Object(__WEBPACK_IMPORTED_MODULE_0____["a" /* each */])(this, function (element) {
        fade(element, speed, 'in', easing).then(callback);
    });
};

var toggle = function toggle() {
    var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
    var easing = arguments[1];
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    return Object(__WEBPACK_IMPORTED_MODULE_0____["a" /* each */])(this, function (element) {
        var direction = element.style.display === 'none' ? 'in' : 'out';
        fade(element, speed, direction, easing).then(callback);
    });
};

var fadeOut = function fadeOut() {
    var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
    var easing = arguments[1];
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    return Object(__WEBPACK_IMPORTED_MODULE_0____["a" /* each */])(this, function (element) {
        fade(element, speed, 'out', easing).then(callback);
    });
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export elastic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return linear; });
/* unused harmony export quad */
/* unused harmony export quint */
/* unused harmony export circ */
/* unused harmony export back */
/* unused harmony export bounce */
/* unused harmony export makeEaseInOut */
/* unused harmony export makeEaseOut */
var elastic = function elastic(progress) {
    return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * 1.5 / 3 * progress);
};

var linear = function linear(progress) {
    return progress;
};

var quad = function quad(progress) {
    return Math.pow(progress, 2);
};

var quint = function quint(progress) {
    return Math.pow(progress, 5);
};

var circ = function circ(progress) {
    return 1 - Math.sin(Math.acos(progress));
};

var back = function back(progress) {
    return Math.pow(progress, 2) * ((1.5 + 1) * progress - 1.5);
};

var bounce = function bounce(progress) {
    var a = 0,
        b = 1;
    for (;;) {
        if (progress >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
        }
        a += b;
        b /= 2;
    }
};

var makeEaseInOut = function makeEaseInOut(delta) {
    return function (progress) {
        if (progress < 0.5) return delta(2 * progress) / 2;else return (2 - delta(2 * (1 - progress))) / 2;
    };
};

var makeEaseOut = function makeEaseOut(delta) {
    return function (progress) {
        return 1 - delta(1 - progress);
    };
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {
    selector: 'img',
    index: 0,
    loop: false,
    escKey: true,
    arrowKeys: true,
    title: true,
    toolbar: true,
    counter: true,
    zoom: true,
    fullscreen: true,
    download: true,
    share: true,
    shareButtons: [{
        id: 'facebook',
        label: 'Share on Facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
    }, {
        id: 'twitter',
        label: 'Tweet',
        url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'
    }, {
        id: 'pinterest',
        label: 'Pin it',
        url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'
    }],
    threshold: 50, //required min distance traveled to be considered swipe
    restraint: 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime: 500 // maximum time allowed to travel that distance
};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (data) {
    return '\n        <div id="' + data.id + '" class="lightbox">\n        <div class="lightbox-background"></div>\n        ' + (data.toolbar ? '\n            <div class="lightbox-toolbar">\n            <div class="toolbar-start">\n                ' + (data.counter ? '\n                <div class="toolbar-item">\n                    <span class="lightbox-counter"></span>\n                </div>\n                ' : '') + '\n            </div>\n            <div class="toolbar-end">\n                ' + (data.zoom ? '\n                <div class="toolbar-item">\n                    <span class="lightbox-zoom">\n                    <i class="icon fas fa-search-plus"></i>\n                    </span>\n                </div>\n                ' : '') + '\n                ' + (data.download ? '\n                <div class="toolbar-item">\n                    <span class="lightbox-download">\n                    <i class="icon fas fa-download"></i>\n                    </span>\n                </div>\n                ' : '') + '\n                ' + (data.fullscreen ? '\n                <div class="toolbar-item">\n                    <span class="lightbox-fullscreen">\n                    <i class="icon fas fa-expand"></i>\n                    </span>\n                </div>\n                ' : '') + '\n                ' + (data.share ? '\n                <div class="toolbar-item">\n                    <div class="dropdown is-right is-hoverable">\n                    <div class="dropdown-trigger">\n                        <div aria-haspopup="true" aria-controls="dropdown-share">\n                        <span><i class="icon fas fa-share"></i></span>\n                        </div>\n                    </div>\n                    <div class="dropdown-menu" id="dropdown-share" role="menu">\n                        <div class="dropdown-content lightbox-share">\n                        ' + data.shareButtons.map(function (shareButtonData, index) {
        return '\n                            <a id="share-' + shareButtonData.id + '" href="' + shareButtonData.url + '" target="_blank" class="dropdown-item">' + shareButtonData.label + '</a>\n                        ';
    }).join('') + '\n                        </div>\n                    </div>\n                    </div>\n                </div>\n                ' : '') + '\n                <div class="toolbar-item">\n                <span class="lightbox-close"></span>\n                </div>\n            </div>\n            </div>\n        ' : '') + '\n        <div class="lightbox-content">\n            ' + data.items.map(function (item, index) {
        return '\n            <div class="lightbox-item image is-contained" data-item-index="' + index + '">\n                ' + item.outerHTML + '\n            </div>\n            ';
    }).join('') + '\n        </div>\n        ' + (data.title ? '\n            <div class="lightbox-caption">\n            </div>\n        ' : '') + '\n        <div class="lightbox-nav">\n            <div class="lightbox-nav-previous">\n            <i class="fa fa-chevron-left" aria-hidden="false"></i>\n            </div>\n            <div class="lightbox-nav-next">\n            <i class="fa fa-chevron-right" aria-hidden="false"></i>\n            </div>\n        </div>\n        </div>\n    ';
});

/***/ })
/******/ ])["default"];
});



function ready(handler) {
  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
}

ready(function() {
  lightbox.attach('[data-action="lightbox"]', {
    title: true,
    loop: true,
    zoom: true,
    download: true,
    share: true
  });
});

