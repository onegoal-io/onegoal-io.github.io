(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Box = __webpack_require__(6);

var _Box2 = _interopRequireDefault(_Box);

var _Anchor = __webpack_require__(7);

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Hero = __webpack_require__(26);

var _Hero2 = _interopRequireDefault(_Hero);

var _Headline = __webpack_require__(27);

var _Headline2 = _interopRequireDefault(_Headline);

var _Card = __webpack_require__(28);

var _Card2 = _interopRequireDefault(_Card);

var _Image = __webpack_require__(29);

var _Image2 = _interopRequireDefault(_Image);

var _Label = __webpack_require__(30);

var _Label2 = _interopRequireDefault(_Label);

var _Heading = __webpack_require__(8);

var _Heading2 = _interopRequireDefault(_Heading);

var _Status = __webpack_require__(31);

var _Status2 = _interopRequireDefault(_Status);

var _Form = __webpack_require__(32);

var _Form2 = _interopRequireDefault(_Form);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _Header = __webpack_require__(34);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(9);

var _Footer2 = _interopRequireDefault(_Footer);

var _Columns = __webpack_require__(35);

var _Columns2 = _interopRequireDefault(_Columns);

var _Paragraph = __webpack_require__(10);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _FormFields = __webpack_require__(36);

var _FormFields2 = _interopRequireDefault(_FormFields);

var _FormField = __webpack_require__(37);

var _FormField2 = _interopRequireDefault(_FormField);

var _TextInput = __webpack_require__(38);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Toast = __webpack_require__(39);

var _Toast2 = _interopRequireDefault(_Toast);

var _Responsive = __webpack_require__(40);

var _Responsive2 = _interopRequireDefault(_Responsive);

var _Carousel = __webpack_require__(41);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Tabs = __webpack_require__(42);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = __webpack_require__(43);

var _Tab2 = _interopRequireDefault(_Tab);

var _Menu = __webpack_require__(44);

var _Menu2 = _interopRequireDefault(_Menu);

var _Markdown = __webpack_require__(45);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Checkmark = __webpack_require__(46);

var _Checkmark2 = _interopRequireDefault(_Checkmark);

var _PlatformChrome = __webpack_require__(47);

var _PlatformChrome2 = _interopRequireDefault(_PlatformChrome);

var _PlatformSafari = __webpack_require__(48);

var _PlatformSafari2 = _interopRequireDefault(_PlatformSafari);

var _PlatformFirefox = __webpack_require__(49);

var _PlatformFirefox2 = _interopRequireDefault(_PlatformFirefox);

var _PlatformEdge = __webpack_require__(50);

var _PlatformEdge2 = _interopRequireDefault(_PlatformEdge);

var _PlatformInternetExplorer = __webpack_require__(51);

var _PlatformInternetExplorer2 = _interopRequireDefault(_PlatformInternetExplorer);

var _Like = __webpack_require__(52);

var _Like2 = _interopRequireDefault(_Like);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//jscs:disable maximumLineLength
// eslint-disable-next-line no-useless-escape
var reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//jscs:enable maximumLineLength
//

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.handleDemo = _this.handleDemo.bind(_this);
    _this.handleMoreInfo = _this.handleMoreInfo.bind(_this);
    _this.handleGotoProduct = _this.handleGotoProduct.bind(_this);
    _this.handleGotoServices = _this.handleGotoServices.bind(_this);
    _this.onResponsive = _this.onResponsive.bind(_this);

    _this.state = {
      sent: false,
      sent2: false
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.responsive = _Responsive2.default.start(this.onResponsive);
      this.jumpToHash();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.jumpToHash();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.responsive.stop();
    }
  }, {
    key: 'onResponsive',
    value: function onResponsive(small) {
      this.setState({ small: small });
    }
  }, {
    key: 'jumpToHash',
    value: function jumpToHash() {
      var scrollToElement = __webpack_require__(53);
      var hash = window.location.hash;
      if (hash) {
        scrollToElement(hash, { offset: -120 });
      }
    }
  }, {
    key: 'handleGotoProduct',
    value: function handleGotoProduct() {}
  }, {
    key: 'handleGotoServices',
    value: function handleGotoServices() {}
  }, {
    key: 'requestDemo',
    value: function requestDemo(email, error2) {
      var xmlhttp = new XMLHttpRequest();
      var self = this;
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          // XMLHttpRequest.DONE == 4
          if (xmlhttp.status == 200) {
            if (error2) {
              this.setState({ error: null, sent: true });
            } else {
              this.setState({ error2: null, sent2: true });
            }
          } else {
            var error = 'An error occurred sending. Please try again later.';
            if (error2) {
              self.setState({ error2: error });
            } else {
              self.setState({ error: error });
            }
          }
        }
      };

      xmlhttp.open('POST', 'https://api.1-goal.com/methods//api/demo/request', true);
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify([email]));
    }
  }, {
    key: 'handleDemo',
    value: function handleDemo(e) {
      var email = document.getElementById('email').value;
      if (reEmail.test(email)) {
        this.requestDemo(email, false);
      } else {
        this.setState({ error: 'Please enter valid email' });
        e.preventDefault();
      }
      return false;
    }
  }, {
    key: 'handleMoreInfo',
    value: function handleMoreInfo(e) {
      var email = document.getElementById('email2').value;
      if (reEmail.test(email)) {
        this.requestDemo(email, true);
      } else {
        this.setState({ error2: 'Please enter valid email' });
        e.preventDefault();
      }
      return false;
    }
  }, {
    key: 'renderListItem',
    value: function renderListItem(text, index) {
      return _react2.default.createElement(
        _Box2.default,
        { alignSelf: 'start', key: index, direction: 'row', align: 'start', responsive: false, pad: 'small', margin: 'small' },
        _react2.default.createElement(
          _Box2.default,
          { pad: { horizontal: 'small' }, style: { marginTop: '4px' } },
          _react2.default.createElement(_Checkmark2.default, { size: 'small' })
        ),
        _react2.default.createElement(
          _Heading2.default,
          { margin: 'none', tag: 'h3' },
          text
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          allBenefits = _props.allBenefits,
          allProductFeatures = _props.allProductFeatures;

      return _react2.default.createElement(
        _Box2.default,
        null,
        this.state.small && _react2.default.createElement(
          _Header2.default,
          { colorIndex: 'brand', justify: 'center' },
          _react2.default.createElement(
            _Box2.default,
            { size: { width: { max: 'xxlarge' } }, direction: 'row', responsive: false, justify: 'start', align: 'center',
              pad: { horizontal: 'medium' }, flex: 'grow' },
            _react2.default.createElement(
              'a',
              { href: 'http://www.radioactive.io' },
              _react2.default.createElement(_Image2.default, { src: '/onegoal-logo-white-2.svg', size: 'small' })
            ),
            _react2.default.createElement(_Box2.default, { pad: 'small' })
          )
        ),
        _react2.default.createElement(
          _Hero2.default,
          { id: 'home-page', style: { alignItems: 'flex-start', maxWidth: '100%' }, size: 'medium',
            backgroundColorIndex: 'dark', background: _react2.default.createElement(_Image2.default, { src: '/onegoal-splash.jpg', fit: 'cover', full: true }) },
          !this.state.small && _react2.default.createElement(
            _Header2.default,
            { justify: 'center' },
            _react2.default.createElement(
              _Box2.default,
              { direction: 'row', style: { width: '700px', maxWidth: '100%' }, responsive: false, justify: 'start',
                align: 'center' },
              _react2.default.createElement(
                _Box2.default,
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.1-goal.com' },
                  _react2.default.createElement(_Image2.default, { src: '/onegoal-logo-white-2.svg', size: 'small' })
                )
              ),
              _react2.default.createElement(_Box2.default, { pad: 'small' }),
              _react2.default.createElement(
                _Menu2.default,
                { inline: true, direction: 'row', flex: 'grow', justify: 'end', align: 'end' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '#product' },
                  'Product'
                ),
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '#services' },
                  'Services'
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.radioactive.io' },
                  'About'
                )
              )
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { direction: 'column', size: { width: { max: 'xxlarge' } }, alignSelf: 'center', justify: 'center', align: 'center',
              pad: 'large' },
            _react2.default.createElement(
              _Headline2.default,
              { align: 'center', strong: true, size: 'medium' },
              'Turn Strategy into Action.'
            ),
            _react2.default.createElement(
              _Heading2.default,
              { align: 'center', tag: 'h2' },
              'OneGoal is a strategy execution methodology and software solution.'
            ),
            _react2.default.createElement(
              _Box2.default,
              null,
              this.state.sent ? _react2.default.createElement(
                _Box2.default,
                { align: 'center', justify: 'center', direction: 'row' },
                _react2.default.createElement(_Status2.default, { size: 'large', value: 'ok' }),
                '\xA0\xA0',
                _react2.default.createElement(
                  _Heading2.default,
                  { margin: 'none', tag: 'h3' },
                  'Request Sent'
                )
              ) : _react2.default.createElement(
                _Form2.default,
                { pad: 'medium', plain: true },
                _react2.default.createElement(
                  _Header2.default,
                  { justify: 'center', align: 'center' },
                  _react2.default.createElement(
                    _Heading2.default,
                    { align: 'center', tag: 'h3' },
                    'Contact Sales for more information.'
                  )
                ),
                _react2.default.createElement(
                  _FormFields2.default,
                  null,
                  _react2.default.createElement(
                    'fieldset',
                    null,
                    _react2.default.createElement(
                      _FormField2.default,
                      { error: this.state.error, label: 'Email', htmlFor: 'email' },
                      _react2.default.createElement(_TextInput2.default, { id: 'email', placeHolder: 'your_name@your_company.com' })
                    )
                  )
                ),
                _react2.default.createElement(
                  _Footer2.default,
                  { pad: { 'vertical': 'medium' } },
                  _react2.default.createElement(_Button2.default, { fill: true, label: 'Request Demo', onClick: this.handleDemo })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          { id: 'benefits', colorIndex: 'light-2', align: 'start', direction: 'row' },
          _react2.default.createElement(
            _Box2.default,
            { margin: 'large', size: 'full', align: 'center' },
            _react2.default.createElement(
              _Box2.default,
              { align: 'center', size: { 'width': 'xxlarge' }, pad: { horizontal: 'large' } },
              _react2.default.createElement(
                _Heading2.default,
                { tag: 'h1', align: 'center', strong: true },
                'Not getting the results you want?'
              )
            ),
            _react2.default.createElement(
              _Box2.default,
              { pad: 'small' },
              _react2.default.createElement(
                _Paragraph2.default,
                { align: 'center', margin: 'none', size: 'large', style: { maxWidth: '100%' } },
                'You have a great strategy, but like most organizations, execution is a challenge. Too many distractions, changing priorities, ineffective communication, not aligned for success.',
                _react2.default.createElement(
                  'strong',
                  null,
                  ' The good news? OneGoal can help you.'
                )
              )
            ),
            _react2.default.createElement(
              _Box2.default,
              { direction: 'row' },
              _react2.default.createElement(
                _Box2.default,
                { colorIndex: 'light-1', style: this.state.small ? {} : { width: '66%' }, justify: 'center', margin: 'large' },
                _react2.default.createElement(
                  _Columns2.default,
                  { responsive: true, justify: 'center', maxCount: 2, masonry: true },
                  allBenefits.map(function (benefit, index) {
                    return _react2.default.createElement(
                      _Box2.default,
                      { key: index, direction: 'row', align: 'start', responsive: false, colorIndex: 'light-1', pad: 'small',
                        size: _this2.state.small ? 'auto' : 'medium', margin: 'small' },
                      _react2.default.createElement(
                        _Box2.default,
                        { pad: { horizontal: 'small' }, style: { marginTop: '4px' } },
                        _react2.default.createElement(_Status2.default, { value: 'ok' })
                      ),
                      _react2.default.createElement(
                        _Heading2.default,
                        { margin: 'none', tag: 'h3' },
                        benefit.description
                      )
                    );
                  })
                )
              ),
              _react2.default.createElement(
                _Box2.default,
                { margin: 'large', align: 'center' },
                _react2.default.createElement('img', { src: '61.png', alt: '61 %' }),
                _react2.default.createElement(
                  _Box2.default,
                  { pad: 'medium' },
                  _react2.default.createElement(
                    _Paragraph2.default,
                    { margin: 'none', align: 'center', size: 'medium' },
                    '61% of strategies dramatically underperform \u2014 not because of faulty ideas or poor planning, but as a result of fundamentally poor execution.'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          { id: 'product', colorIndex: 'light-1', margin: 'large', align: 'center' },
          _react2.default.createElement(
            _Box2.default,
            { size: { 'width': 'xxlarge' }, pad: { horizontal: 'large' } },
            _react2.default.createElement(
              _Heading2.default,
              { tag: 'h1', align: 'center', strong: true },
              'The Solution'
            )
          ),
          _react2.default.createElement(
            _Tabs2.default,
            { responsive: false },
            allProductFeatures.map(function (productFeature, index) {
              return _react2.default.createElement(
                _Tab2.default,
                { key: index, title: productFeature.title },
                _react2.default.createElement(
                  _Box2.default,
                  { direction: 'row' },
                  _react2.default.createElement(
                    _Box2.default,
                    { basis: '1/2', margin: 'large' },
                    _react2.default.createElement(
                      _Heading2.default,
                      { tag: 'h3', strong: true },
                      productFeature.shortDescription
                    ),
                    _react2.default.createElement(_Markdown2.default, { components: { "p": { "props": { "size": "large" } } }, content: productFeature.description })
                  ),
                  _react2.default.createElement(
                    _Box2.default,
                    { basis: '1/2' },
                    _react2.default.createElement('img', { alt: productFeature.title, src: 'https://media.graphcms.com/' + productFeature.image.handle })
                  )
                )
              );
            })
          ),
          _react2.default.createElement(
            _Box2.default,
            { pad: { between: 'large' }, justify: 'center', responsive: true, direction: 'row' },
            _react2.default.createElement(
              _Box2.default,
              { style: this.state.small ? {} : { width: '25%' }, pad: 'medium', separator: 'all' },
              _react2.default.createElement(
                _Paragraph2.default,
                { size: 'large', margin: 'none' },
                _react2.default.createElement(
                  'strong',
                  null,
                  '"',
                  _react2.default.createElement(_Like2.default, { size: 'small' }),
                  ' Love this app."'
                )
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _Paragraph2.default,
                null,
                '- Will Brennan'
              )
            ),
            _react2.default.createElement(
              _Box2.default,
              { style: this.state.small ? {} : { width: '25%' }, pad: 'medium', separator: 'all' },
              _react2.default.createElement(
                _Paragraph2.default,
                { size: 'large', margin: 'none' },
                _react2.default.createElement(
                  'strong',
                  null,
                  '"I like the simplicity of the product..."'
                )
              ),
              _react2.default.createElement(
                _Paragraph2.default,
                null,
                '- Nada Nazari'
              )
            ),
            _react2.default.createElement(
              _Box2.default,
              { style: this.state.small ? {} : { width: '25%' }, pad: 'medium', separator: 'all' },
              _react2.default.createElement(
                _Paragraph2.default,
                { size: 'large', margin: 'none' },
                _react2.default.createElement(
                  'strong',
                  null,
                  '"...very convenient and I am a big fan..."'
                )
              ),
              _react2.default.createElement(
                _Paragraph2.default,
                null,
                '- Ben Stanley'
              )
            )
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          { id: 'services', align: 'center', pad: 'large', colorIndex: 'neutral-1' },
          _react2.default.createElement(
            _Box2.default,
            { size: { 'width': 'xxlarge' }, pad: { horizontal: 'large' } },
            _react2.default.createElement(
              _Heading2.default,
              { tag: 'h1', align: 'center', strong: true },
              'Let us help you'
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row' },
            _react2.default.createElement(
              _Box2.default,
              { basis: '1/2', align: 'center', margin: { top: 'medium' } },
              _react2.default.createElement(
                _Heading2.default,
                { tag: 'h2', align: 'center', strong: true },
                'Strategy Facilitation'
              ),
              _react2.default.createElement(
                _Box2.default,
                { pad: 'small' },
                _react2.default.createElement(
                  _Paragraph2.default,
                  { style: { maxWidth: '100%' }, size: 'large' },
                  'The OneGoal team helps organizations develop sound plans by implementing the OneGoal methodology:'
                )
              ),
              ['An executive leadership 2-day strategy session to develop annual goals that support company\n              breakthrough objectives.', 'A manager 1-day training session to establish aligning goals and activities.', '"Train the trainer" remote sessions designed to equip 1 or more internal coaches to achieve\n              sustaining success over time.', 'A launch day review to ensure team compliance with the OneGoal methodology.'].map(function (text, index) {
                return _this2.renderListItem(text, index);
              })
            ),
            _react2.default.createElement(
              _Box2.default,
              { basis: '1/2', align: 'center', margin: { top: 'medium' } },
              _react2.default.createElement(
                _Heading2.default,
                { tag: 'h2', align: 'center', strong: true },
                'Customer Success'
              ),
              _react2.default.createElement(
                _Box2.default,
                { pad: 'small' },
                _react2.default.createElement(
                  _Paragraph2.default,
                  { style: { maxWidth: '100%' }, size: 'large' },
                  'The OneGoal team is your partner in implementation of the product by providing:'
                )
              ),
              ['Established best practices based on your goals, organization structure, and budget.', 'Data review for your team data, rewards, and branding.', 'Two 30-minute live training sessions customized for your deployment.', 'Promotional material to build excitement during your launch.', 'Ongoing monitoring and data validation as you progress towards goal achievement'].map(function (text, index) {
                return _this2.renderListItem(text, index);
              })
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            null,
            this.state.sent2 ? _react2.default.createElement(
              _Box2.default,
              { align: 'center', justify: 'center', direction: 'row' },
              _react2.default.createElement(_Status2.default, { size: 'large', value: 'ok' }),
              '\xA0\xA0',
              _react2.default.createElement(
                _Heading2.default,
                { margin: 'none', tag: 'h3' },
                'Request Sent'
              )
            ) : _react2.default.createElement(
              _Form2.default,
              { pad: 'medium', plain: this.state.small },
              _react2.default.createElement(
                _Header2.default,
                { justify: 'center', align: 'center' },
                _react2.default.createElement(
                  _Heading2.default,
                  { align: 'center', tag: 'h3' },
                  'Contact Sales for more information.'
                )
              ),
              _react2.default.createElement(
                _FormFields2.default,
                null,
                _react2.default.createElement(
                  'fieldset',
                  null,
                  _react2.default.createElement(
                    _FormField2.default,
                    { error: this.state.error2, label: 'Email', htmlFor: 'email2' },
                    _react2.default.createElement(_TextInput2.default, { id: 'email2', placeHolder: 'your_name@your_company.com' })
                  )
                )
              ),
              _react2.default.createElement(
                _Footer2.default,
                { pad: { 'vertical': 'medium' } },
                _react2.default.createElement(_Button2.default, { fill: true, label: 'Get Started', onClick: this.handleMoreInfo })
              )
            )
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          { id: 'more', align: 'center', pad: 'large', colorIndex: 'light-1' },
          _react2.default.createElement(
            _Box2.default,
            { pad: { horizontal: 'large' } },
            _react2.default.createElement(
              _Heading2.default,
              { align: 'center', tag: 'h2', strong: true, margin: 'none' },
              'OneGoal is available on the web, iOS, and Android.'
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row', pad: { between: 'medium' }, margin: { top: 'medium' } },
            _react2.default.createElement(
              _Box2.default,
              { basis: '1/2', pad: { horizontal: 'medium' }, align: 'center' },
              _react2.default.createElement(
                _Heading2.default,
                { tag: 'h3', align: 'center', strong: true },
                'OneGoal for iOS and Android Devices'
              ),
              _react2.default.createElement(
                _Box2.default,
                null,
                _react2.default.createElement(
                  _Box2.default,
                  { align: 'center', justify: 'center', direction: 'row' },
                  _react2.default.createElement(
                    'a',
                    { href: 'https://itunes.apple.com/us/app/1-goal/id1249692380?mt=8' },
                    _react2.default.createElement('img', { src: '/app-store-badge.svg', style: { padding: '10px' }, width: '148px' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: 'https://play.google.com/store/apps/details?id=io.onegoal.app' },
                    _react2.default.createElement('img', { src: '/google-play-badge.png', width: '148px' })
                  )
                ),
                _react2.default.createElement(
                  _Box2.default,
                  { pad: 'medium', align: 'center', justify: 'center' },
                  _react2.default.createElement('img', { src: '/apple-touch-icon.png', width: '72px', className: 'appIcon' }),
                  _react2.default.createElement(
                    _Label2.default,
                    { size: 'small' },
                    'OneGoal'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _Box2.default,
              { basis: '1/2', pad: { horizontal: 'medium' }, align: 'center' },
              _react2.default.createElement(
                _Heading2.default,
                { tag: 'h3', align: 'center', strong: true },
                'OneGoal in your web browser'
              ),
              _react2.default.createElement(
                _Paragraph2.default,
                { align: 'center' },
                'OneGoal supports the latest version of the following browsers:'
              ),
              _react2.default.createElement(
                _Box2.default,
                { direction: 'row', responsive: false, justify: 'center', pad: { between: 'small' } },
                _react2.default.createElement(
                  _Box2.default,
                  { align: 'center', size: 'xsmall' },
                  _react2.default.createElement(_PlatformChrome2.default, { size: 'medium' }),
                  _react2.default.createElement(
                    _Label2.default,
                    { align: 'center' },
                    'Chrome'
                  )
                ),
                _react2.default.createElement(
                  _Box2.default,
                  { align: 'center', size: 'xsmall' },
                  _react2.default.createElement(_PlatformSafari2.default, { size: 'medium' }),
                  _react2.default.createElement(
                    _Label2.default,
                    { align: 'center' },
                    'Safari'
                  )
                ),
                _react2.default.createElement(
                  _Box2.default,
                  { align: 'center', size: 'xsmall' },
                  _react2.default.createElement(_PlatformFirefox2.default, { size: 'medium' }),
                  _react2.default.createElement(
                    _Label2.default,
                    { align: 'center' },
                    'Firefox'
                  )
                ),
                _react2.default.createElement(
                  _Box2.default,
                  { align: 'center', size: 'xsmall' },
                  _react2.default.createElement(_PlatformEdge2.default, { size: 'medium' }),
                  _react2.default.createElement(
                    _Label2.default,
                    { align: 'center' },
                    'Microsoft Edge'
                  )
                ),
                _react2.default.createElement(
                  _Box2.default,
                  { align: 'center', size: 'xsmall' },
                  _react2.default.createElement(_PlatformInternetExplorer2.default, { size: 'medium' }),
                  _react2.default.createElement(
                    _Label2.default,
                    { align: 'center' },
                    'Internet Explorer'
                  )
                )
              )
            )
          )
        ),
        this.state.sent && _react2.default.createElement(
          _Toast2.default,
          { status: 'ok' },
          'Your Request has been sent. A sales representative will follow up with you soon.'
        ),
        this.state.sent2 && _react2.default.createElement(
          _Toast2.default,
          { status: 'ok' },
          'Your Request has been sent. A sales representative will follow up with you soon.'
        ),
        this.state.errorSending && _react2.default.createElement(
          _Toast2.default,
          { status: 'ok' },
          'An error occurred sending your request. Please try again later.'
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var allPosts = _ref.allPosts,
      allBenefits = _ref.allBenefits,
      allProductFeatures = _ref.allProductFeatures;
  return _react2.default.createElement(HomePage, { allPosts: allPosts, allBenefits: allBenefits, allProductFeatures: allProductFeatures });
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Box");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Anchor");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Heading");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Footer");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Paragraph");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var allAuthors = _ref.allAuthors;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    allAuthors.map(function (author) {
      return _react2.default.createElement(
        'div',
        { className: 'about-author', key: author.id },
        _react2.default.createElement(
          'div',
          { className: 'about-header' },
          _react2.default.createElement('img', {
            className: 'about-avatar',
            alt: author.name,
            src: 'https://media.graphcms.com/resize=w:100,h:100,fit:crop/' + author.avatar.handle
          }),
          _react2.default.createElement(
            'h1',
            null,
            'Hello! My name is ',
            author.name
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          author.bibliography
        )
      );
    })
  );
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { textAlign: 'center', margin: '100px' } },
    _react2.default.createElement(
      'h1',
      null,
      '404 - Sorry, we could not find that page :('
    )
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(15);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(17);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _App = __webpack_require__(54);

var _App2 = _interopRequireDefault(_App);

var _Footer = __webpack_require__(9);

var _Footer2 = _interopRequireDefault(_Footer);

var _Box = __webpack_require__(6);

var _Box2 = _interopRequireDefault(_Box);

var _Heading = __webpack_require__(8);

var _Heading2 = _interopRequireDefault(_Heading);

var _Anchor = __webpack_require__(7);

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Paragraph = __webpack_require__(10);

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _SocialTwitter = __webpack_require__(55);

var _SocialTwitter2 = _interopRequireDefault(_SocialTwitter);

var _SocialFacebook = __webpack_require__(56);

var _SocialFacebook2 = _interopRequireDefault(_SocialFacebook);

var _SocialMail = __webpack_require__(57);

var _SocialMail2 = _interopRequireDefault(_SocialMail);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderEmailAnchor() {
  var coded = 'V5QQM@wBPJMBS2JT5.JM';
  var key = 'LuQ6N5MBbckH9TfXm02zrCidOFhy3SUWKD1qj4GEw7JPlRVeoaxsAgIvn8YZtp';
  var shift = coded.length;
  var link = '';
  for (var i = 0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) == -1) {
      var ltr = coded.charAt(i);
      link += ltr;
    } else {
      var _ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
      link += key.charAt(_ltr);
    }
  }
  return _react2.default.createElement(_Anchor2.default, { href: 'mailto:' + link, label: 'email', icon: _react2.default.createElement(_SocialMail2.default, null), target: '_self' });
}

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        'main',
        null,
        _react2.default.createElement(
          _App2.default,
          { centered: false },
          _react2.default.createElement(_reactStaticRoutes2.default, null),
          _react2.default.createElement(
            _Footer2.default,
            { full: 'horizontal' },
            _react2.default.createElement(
              _Box2.default,
              { id: 'contact', colorIndex: 'brand', pad: 'medium', align: 'center', full: 'horizontal' },
              _react2.default.createElement(
                _Box2.default,
                { className: 'footer-cards-container', pad: { vertical: 'medium' }, size: { width: 'xxlarge' },
                  direction: 'row', flex: 'grow' },
                _react2.default.createElement(
                  _Box2.default,
                  { pad: 'large', basis: '1/2', separator: 'right' },
                  _react2.default.createElement(
                    _Heading2.default,
                    { tag: 'h3' },
                    'Contact Us'
                  ),
                  _react2.default.createElement(
                    _Box2.default,
                    { pad: { vertical: 'small' } },
                    renderEmailAnchor()
                  ),
                  _react2.default.createElement(
                    _Box2.default,
                    { pad: { vertical: 'small' } },
                    _react2.default.createElement(_Anchor2.default, { href: 'https://twitter.com/radioactive_io', target: '_blank', label: 'twitter',
                      icon: _react2.default.createElement(_SocialTwitter2.default, null) })
                  ),
                  _react2.default.createElement(
                    _Box2.default,
                    { pad: { vertical: 'small' } },
                    _react2.default.createElement(_Anchor2.default, { href: 'http://facebook.com/radioactive.io', target: '_blank', label: 'facebook',
                      icon: _react2.default.createElement(_SocialFacebook2.default, null) })
                  )
                ),
                _react2.default.createElement(
                  _Box2.default,
                  { pad: 'large', basis: '1/2' },
                  _react2.default.createElement(
                    _Heading2.default,
                    { tag: 'h3' },
                    'Links'
                  ),
                  _react2.default.createElement(
                    _Anchor2.default,
                    { href: 'https://radioactive.zendesk.com/hc' },
                    'Help Center'
                  ),
                  _react2.default.createElement(
                    _Anchor2.default,
                    { href: 'http://www.radioactive.io/privacy' },
                    'Privacy Policy'
                  ),
                  _react2.default.createElement(
                    _Anchor2.default,
                    { href: 'http://www.radioactive.io/terms' },
                    'Terms of Use'
                  ),
                  _react2.default.createElement(
                    _Paragraph2.default,
                    null,
                    'Copyright \xA9 2017 Radioactive.io, Inc. All Rights Reserved.'
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(18);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(19);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(20);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(21);

var _reactUniversalComponent = __webpack_require__(22);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error() {
    return null;
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/ken/Projects/www_onegoal/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(5);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Blog',
  file: '/Users/ken/Projects/www_onegoal/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/pages/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/pages/Blog';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/404',
  file: '/Users/ken/Projects/www_onegoal/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/pages/404';
  }
}), universalOptions);

// Template Map
var templateMap = {
  t_0: t_0,
  t_1: t_1,
  t_2: t_2

  // Template Tree
};var templateTree = { c: { "404": { t: "t_2" }, "/": { t: "t_0" }, "blog": { t: "t_1" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

if (typeof document !== 'undefined') {
  window.reactStaticGetComponentForPath = getComponentForPath;
}

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(23);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(24);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(25);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;
        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(3);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Hero");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Headline");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Card");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Image");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Label");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/Status");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Form");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Button");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Header");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Columns");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/FormFields");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/FormField");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/TextInput");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Toast");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("grommet/utils/Responsive");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Carousel");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Tabs");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Tab");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Menu");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Markdown");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Checkmark");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/PlatformChrome");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/PlatformSafari");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/PlatformFirefox");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/PlatformEdge");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/PlatformInternetExplorer");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Like");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("scroll-to-element");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/App");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/SocialTwitter");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/SocialFacebook");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/SocialMail");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.838d7748.js.map