webpackJsonp([0],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(1057);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(1109);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractWidget = function (_React$Component) {
  _inherits(AbstractWidget, _React$Component);

  function AbstractWidget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AbstractWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AbstractWidget.__proto__ || Object.getPrototypeOf(AbstractWidget)).call.apply(_ref, [this].concat(args))), _this), _this.loadWidget = function () {
      var $script = __webpack_require__(1045); // eslint-disable-line global-require

      $script.ready('twitter-widgets', function () {
        if (!window.twttr) {
          // If the script tag fails to load, scriptjs.ready() will still trigger.
          // Let's avoid the JS exceptions when that happens.
          console.error('Failure to load window.twttr, aborting load.'); // eslint-disable-line no-console
          return;
        }

        // Delete existing
        AbstractWidget.removeChildren(_this.widgetWrapper);

        // Create widget
        _this.props.ready(window.twttr, _this.widgetWrapper, _this.done);
      });
    }, _this.done = function () {
      if (_this.willUnmount) {
        AbstractWidget.removeChildrenExceptLast(_this.widgetWrapper);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AbstractWidget, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.willUnmount = false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadWidget();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.loadWidget();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.willUnmount = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        ref: function ref(c) {
          _this2.widgetWrapper = c;
        }
      });
    }
  }], [{
    key: 'removeChildren',
    value: function removeChildren(node) {
      if (node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }
  }, {
    key: 'removeChildrenExceptLast',
    value: function removeChildrenExceptLast(node) {
      if (node) {
        while (node.childNodes.length > 1) {
          node.removeChild(node.firstChild);
        }
      }
    }
  }]);

  return AbstractWidget;
}(_react2.default.Component);

AbstractWidget.propTypes = {
  ready: _propTypes2.default.func.isRequired
};
exports.default = AbstractWidget;

/***/ }),

/***/ 1003:
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(1059),
    listCacheDelete = __webpack_require__(1060),
    listCacheGet = __webpack_require__(1061),
    listCacheHas = __webpack_require__(1062),
    listCacheSet = __webpack_require__(1063);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(1013);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1007),
    getRawTag = __webpack_require__(1070),
    objectToString = __webpack_require__(1071);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(998);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(999);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(1083);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 1010:
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 1011:
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(1039),
    baseAssignValue = __webpack_require__(1040);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 1013:
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(999),
    root = __webpack_require__(998);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(1094),
    stubArray = __webpack_require__(1032);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(1033),
    baseKeys = __webpack_require__(1103),
    isArrayLike = __webpack_require__(1037);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(998),
    stubFalse = __webpack_require__(1098);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(143)(module)))

/***/ }),

/***/ 1018:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(1026);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(1004),
    stackClear = __webpack_require__(1064),
    stackDelete = __webpack_require__(1065),
    stackGet = __webpack_require__(1066),
    stackHas = __webpack_require__(1067),
    stackSet = __webpack_require__(1068);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1006),
    isObject = __webpack_require__(1003);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),

/***/ 1023:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(1075),
    mapCacheDelete = __webpack_require__(1082),
    mapCacheGet = __webpack_require__(1084),
    mapCacheHas = __webpack_require__(1085),
    mapCacheSet = __webpack_require__(1086);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(1087),
    arraySome = __webpack_require__(1090),
    cacheHas = __webpack_require__(1091);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(998);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 1027:
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 1028:
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(1030),
    getSymbols = __webpack_require__(1015),
    keys = __webpack_require__(1016);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1031),
    isArray = __webpack_require__(1010);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 1031:
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 1032:
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(1095),
    isArguments = __webpack_require__(1096),
    isArray = __webpack_require__(1010),
    isBuffer = __webpack_require__(1017),
    isIndex = __webpack_require__(1099),
    isTypedArray = __webpack_require__(1034);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(1100),
    baseUnary = __webpack_require__(1101),
    nodeUtil = __webpack_require__(1102);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 1035:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 1036:
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(1021),
    isLength = __webpack_require__(1035);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(1105),
    Map = __webpack_require__(1014),
    Promise = __webpack_require__(1106),
    Set = __webpack_require__(1107),
    WeakMap = __webpack_require__(1108),
    baseGetTag = __webpack_require__(1006),
    toSource = __webpack_require__(1023);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(1040),
    eq = __webpack_require__(1013);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(1111);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(1033),
    baseKeysIn = __webpack_require__(1114),
    isArrayLike = __webpack_require__(1037);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1031),
    getPrototype = __webpack_require__(1043),
    getSymbols = __webpack_require__(1015),
    stubArray = __webpack_require__(1032);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(1036);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 1044:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else this[name] = definition()
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      return !fn(el)
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(40);

var _FlatButton = __webpack_require__(1047);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _FontIcon = __webpack_require__(363);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _android = __webpack_require__(1050);

var _android2 = _interopRequireDefault(_android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero = function (_PureComponent) {
    _inherits(Hero, _PureComponent);

    function Hero(props) {
        _classCallCheck(this, Hero);

        return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));
    }

    _createClass(Hero, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            $('#hero-container').width(this.props.windowWidth - 50);
            $('#hero-part').width(this.props.windowWidth - 50);

            setTimeout(function () {
                $('#hero-container').width(_this2.props.windowWidth - 50);
                $('#hero-part').width(_this2.props.windowWidth - 50);
            }, 300);

            return _react2.default.createElement(
                'div',
                { className: 'hero-container', id: 'hero-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'part', id: 'hero-part' },
                    _react2.default.createElement(
                        'div',
                        { className: 'octo' },
                        _react2.default.createElement(
                            'div',
                            { className: 'octo1' },
                            _react2.default.createElement('img', { src: '/images/hooded_profile_image.jpg', width: '320', height: '316' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'hero-details-left' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Full Stack Web Developer'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Mountain View, CA'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'hero-details-right' },
                        _react2.default.createElement(_FlatButton2.default, { href: 'https://github.com/AkyunaAkish',
                            target: '_blank',
                            className: 'block',
                            label: 'GitHub',
                            secondary: true,
                            icon: _react2.default.createElement('i', { className: 'fa fa-github-square' }) }),
                        _react2.default.createElement(_FlatButton2.default, { href: 'https://www.linkedin.com/in/akyunaakish',
                            target: '_blank',
                            className: 'block',
                            label: 'Linked In',
                            secondary: true,
                            icon: _react2.default.createElement('i', { className: 'fa fa-linkedin-square' }) }),
                        _react2.default.createElement(_FlatButton2.default, { href: 'tel:7605856334',
                            className: 'block',
                            label: '760-585-6334',
                            secondary: true,
                            icon: _react2.default.createElement('i', { className: 'fa fa-mobile' }) }),
                        _react2.default.createElement(_FlatButton2.default, { href: 'mailto:akyunaakish@gmail.com',
                            className: 'block',
                            label: 'akyunaakish@gmail.com',
                            secondary: true,
                            icon: _react2.default.createElement('i', { className: 'fa fa-envelope' }) })
                    )
                ),
                _react2.default.createElement('div', { className: 'fade_line' })
            );
        }
    }]);

    return Hero;
}(_react.PureComponent);

function mapStateToProps(state) {
    return {
        windowWidth: state.dimensions.width,
        sideNavOpen: state.sideNav.sideNavOpen
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Hero);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FlatButton = __webpack_require__(1048);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FlatButton2.default;

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(22);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(20);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(14);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(28);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(144);

var _EnhancedButton = __webpack_require__(145);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FlatButtonLabel = __webpack_require__(1049);

var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (process.env.NODE_ENV !== 'production') {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

var FlatButton = function (_Component) {
  (0, _inherits3.default)(FlatButton, _Component);

  function FlatButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FlatButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FlatButton.__proto__ || (0, _getPrototypeOf2.default)(FlatButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      touch: false
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      _this.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleMouseEnter = function (event) {
      // Cancel hover styles for touch devices
      if (!_this.state.touch) _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchStart(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FlatButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({
          hovered: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          children = _props.children,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          hoverColor = _props.hoverColor,
          icon = _props.icon,
          label = _props.label,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          primary = _props.primary,
          rippleColor = _props.rippleColor,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'children', 'disabled', 'fullWidth', 'hoverColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
      var _context$muiTheme = this.context.muiTheme,
          borderRadius = _context$muiTheme.borderRadius,
          _context$muiTheme$but = _context$muiTheme.button,
          buttonHeight = _context$muiTheme$but.height,
          buttonMinWidth = _context$muiTheme$but.minWidth,
          buttonTextTransform = _context$muiTheme$but.textTransform,
          _context$muiTheme$fla = _context$muiTheme.flatButton,
          buttonFilterColor = _context$muiTheme$fla.buttonFilterColor,
          buttonColor = _context$muiTheme$fla.color,
          disabledTextColor = _context$muiTheme$fla.disabledTextColor,
          fontSize = _context$muiTheme$fla.fontSize,
          fontWeight = _context$muiTheme$fla.fontWeight,
          primaryTextColor = _context$muiTheme$fla.primaryTextColor,
          secondaryTextColor = _context$muiTheme$fla.secondaryTextColor,
          textColor = _context$muiTheme$fla.textColor,
          _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform,
          textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;

      var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;

      var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
      var defaultRippleColor = buttonFilterColor;
      var buttonHoverColor = hoverColor || defaultHoverColor;
      var buttonRippleColor = rippleColor || defaultRippleColor;
      var buttonBackgroundColor = backgroundColor || buttonColor;
      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        height: buttonHeight,
        lineHeight: buttonHeight + 'px',
        minWidth: fullWidth ? '100%' : buttonMinWidth,
        color: defaultTextColor,
        transition: _transitions2.default.easeOut(),
        borderRadius: borderRadius,
        userSelect: 'none',
        overflow: 'hidden',
        backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
        padding: 0,
        margin: 0,
        textAlign: 'center'
      }, style);

      var iconCloned = void 0;
      var labelStyleIcon = {};

      if (icon) {
        var iconStyles = (0, _simpleAssign2.default)({
          verticalAlign: 'middle',
          marginLeft: label && labelPosition !== 'before' ? 12 : 0,
          marginRight: label && labelPosition === 'before' ? 12 : 0
        }, icon.props.style);
        iconCloned = _react2.default.cloneElement(icon, {
          color: icon.props.color || mergedRootStyles.color,
          style: iconStyles,
          key: 'iconCloned'
        });

        if (labelPosition === 'before') {
          labelStyleIcon.paddingRight = 8;
        } else {
          labelStyleIcon.paddingLeft = 8;
        }
      }

      var mergedLabelStyles = (0, _simpleAssign2.default)({
        letterSpacing: 0,
        textTransform: textTransform,
        fontWeight: fontWeight,
        fontSize: fontSize
      }, labelStyleIcon, labelStyle);

      var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { key: 'labelElement', label: label, style: mergedLabelStyles }) : undefined;

      // Place label before or after children.
      var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          disabled: disabled,
          focusRippleColor: buttonRippleColor,
          focusRippleOpacity: 0.3,
          onKeyboardFocus: this.handleKeyboardFocus,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onTouchStart: this.handleTouchStart,
          style: mergedRootStyles,
          touchRippleColor: buttonRippleColor,
          touchRippleOpacity: 0.3
        }),
        enhancedButtonChildren
      );
    }
  }]);
  return FlatButton;
}(_react.Component);

FlatButton.muiName = 'FlatButton';
FlatButton.defaultProps = {
  disabled: false,
  fullWidth: false,
  labelStyle: {},
  labelPosition: 'after',
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onTouchStart: function onTouchStart() {},
  primary: false,
  secondary: false
};
FlatButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
FlatButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Color of button when mouse is not hovering over it.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * This is what will be displayed inside the button.
   * If a label is specified, the text within the label prop will
   * be displayed. Otherwise, the component will expect children
   * which will then be displayed. (In our example,
   * we are nesting an `<input type="file" />` and a `span`
   * that acts as our label to be displayed.) This only
   * applies to flat and raised buttons.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The element to use as the container for the FlatButton. Either a string to
   * use a DOM element or a ReactElement. This is useful for wrapping the
   * FlatButton in a custom Link component. If a ReactElement is given, ensure
   * that it passes all of its given props through to the underlying DOM
   * element and renders its children prop for proper integration.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * Disables the button if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Color of button when mouse hovers over.
   */
  hoverColor: _propTypes2.default.string,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * Use this property to display an icon.
   */
  icon: _propTypes2.default.node,
  /**
   * Label for the button.
   */
  label: validateLabel,
  /**
   * Place label before or after the passed children.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * If true, colors button according to
   * primaryTextColor from the Theme.
   */
  primary: _propTypes2.default.bool,
  /**
   * Color for the ripple after button is clicked.
   */
  rippleColor: _propTypes2.default.string,
  /**
   * If true, colors button according to secondaryTextColor from the theme.
   * The primary prop has precendent if set to true.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = FlatButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(14);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      position: 'relative',
      paddingLeft: baseTheme.spacing.desktopGutterLess,
      paddingRight: baseTheme.spacing.desktopGutterLess,
      verticalAlign: 'middle'
    }
  };
}

var FlatButtonLabel = function (_Component) {
  (0, _inherits3.default)(FlatButtonLabel, _Component);

  function FlatButtonLabel() {
    (0, _classCallCheck3.default)(this, FlatButtonLabel);
    return (0, _possibleConstructorReturn3.default)(this, (FlatButtonLabel.__proto__ || (0, _getPrototypeOf2.default)(FlatButtonLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(FlatButtonLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          style = _props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        label
      );
    }
  }]);
  return FlatButtonLabel;
}(_react.Component);

FlatButtonLabel.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
FlatButtonLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes2.default.node,
  style: _propTypes2.default.object
} : {};
exports.default = FlatButtonLabel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(55);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(56);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionAndroid = function ActionAndroid(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z' })
  );
};
ActionAndroid = (0, _pure2.default)(ActionAndroid);
ActionAndroid.displayName = 'ActionAndroid';
ActionAndroid.muiName = 'SvgIcon';

exports.default = ActionAndroid;

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHighcharts = __webpack_require__(1052);

var _reactHighcharts2 = _interopRequireDefault(_reactHighcharts);

var _reactTwitterWidgets = __webpack_require__(1054);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Skills = function (_PureComponent) {
    _inherits(Skills, _PureComponent);

    function Skills(props) {
        _classCallCheck(this, Skills);

        var _this = _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).call(this, props));

        _this.state = {
            tweets: [],
            currentHT: '',
            showCurrentHT: false,
            highChartsConfig: {
                chart: {
                    type: 'bar',
                    backgroundColor: 'transparent',
                    height: 380
                },
                title: {
                    text: 'Real-Time Twitter Mentions of my Skills',
                    style: { color: 'white' }
                },
                plotOptions: {
                    column: {
                        depth: 25
                    }
                },
                xAxis: {
                    categories: [],
                    labels: {
                        style: {
                            fontSize: '11px',
                            color: 'white'
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    labels: {
                        style: {
                            fontSize: '11px',
                            color: 'white'
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: 'Mentions',
                    itemStyle: {
                        color: 'white'
                    },
                    data: [],
                    color: 'rgb(97, 218, 251)'
                }]
            }
        };
        return _this;
    }

    _createClass(Skills, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // workaround for socket event callback unmounted component setState issue
            this.mounted = true;

            // if a tweet comes through add it to state
            window.___SOCKET___.on('skill-tweet', function (data) {
                console.log('Data 1', data);

                var highchartConfigClone = _extends({}, _this2.state.highChartsConfig);
                highchartConfigClone.xAxis.categories = data.htCounts.categories;
                highchartConfigClone.series[0].data = data.htCounts.data;

                var indOfDateBeginning = highchartConfigClone.title.text.indexOf('(');
                var mainTitleText = indOfDateBeginning > 0 ? highchartConfigClone.title.text.slice(0, indOfDateBeginning) : highchartConfigClone.title.text;

                highchartConfigClone.title.text = mainTitleText + ('(' + data.startDate + ' - ' + data.endDate + ')');

                if (_this2.mounted) {
                    _this2.setState({
                        highchartConfig: highchartConfigClone,
                        tweets: data.tweets || [],
                        currentHT: data.currentHT,
                        showCurrentHT: true
                    });

                    var chart = _this2.refs.chart.getChart();
                    chart.redraw();

                    $('.chart-container').css({
                        'background': 'rgba(97, 218, 251, .3)'
                    });

                    setTimeout(function () {
                        $('.chart-container').css({
                            'background': 'transparent'
                        });

                        _this2.setState({
                            showCurrentHT: false
                        });
                    }, 1500);
                }
            });

            // ask server to send populate twitter data event to get latest
            // twitter data
            window.___SOCKET___.emit('send-twitter-data');

            window.___SOCKET___.on('populate-twitter-data', function (data) {
                console.log('Data2', data);

                var highchartConfigClone = _extends({}, _this2.state.highChartsConfig);
                highchartConfigClone.xAxis.categories = data.htCounts.categories;
                highchartConfigClone.series[0].data = data.htCounts.data;

                var indOfDateBeginning = highchartConfigClone.title.text.indexOf('(') + 1;
                var mainTitleText = indOfDateBeginning > 0 ? highchartConfigClone.title.text.slice(0, indOfDateBeginning) : highchartConfigClone.title.text;

                highchartConfigClone.title.text = mainTitleText + ('\n(' + data.startDate + ' - ' + data.endDate + ')');

                var newState = {
                    highchartConfig: highchartConfigClone,
                    tweet: data.tweets || []
                };

                if (_this2.mounted) {
                    _this2.setState(newState);

                    var chart = _this2.refs.chart.getChart();
                    chart.redraw();

                    $('.chart-container').css({
                        'background': 'rgba(97, 218, 251, .3)'
                    });

                    setTimeout(function () {
                        $('.chart-container').css({
                            'background': 'transparent'
                        });
                    }, 750);
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // workaround for socket event callback unmounted component setState issue
            this.mounted = false;
        }
    }, {
        key: 'renderTweets',
        value: function renderTweets() {
            // if (this.state.tweets.length && this.state.tweets.length < 6) {
            //     return this.state.tweets.map((t, i) => {
            //         return <Tweet tweetId={ t.tweet_id } key={ i } />;
            //     });
            // } else {
            return _react2.default.createElement('span', null);
            // } 
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'skills-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'chart-container' },
                    _react2.default.createElement(
                        'div',
                        { style: {
                                opacity: this.state.showCurrentHT ? 1 : 0
                            },
                            className: 'current-ht' },
                        this.state.currentHT
                    ),
                    _react2.default.createElement(_reactHighcharts2.default, { config: this.state.highChartsConfig,
                        ref: 'chart' })
                ),
                _react2.default.createElement(
                    'div',
                    { style: { width: '20%' }, className: 'pull-right' },
                    this.renderTweets()
                )
            );
        }
    }]);

    return Skills;
}(_react.PureComponent);

exports.default = Skills;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(1), __webpack_require__(1053));
	else if(typeof define === 'function' && define.amd)
		define(["react", "highcharts"], factory);
	else if(typeof exports === 'object')
		exports["ReactHighcharts"] = factory(require("react"), require("highcharts"));
	else
		root["ReactHighcharts"] = factory(root["React"], root["Highcharts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_17__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(2);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(6);

var emptyObject = __webpack_require__(9);
var _invariant = __webpack_require__(1);

if (process.env.NODE_ENV !== 'production') {
  var warning = __webpack_require__(3);
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (process.env.NODE_ENV !== 'production') {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (process.env.NODE_ENV !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isInherited = name in Constructor;
      _invariant(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (process.env.NODE_ENV !== 'production') {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(5);
var factory = __webpack_require__(7);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(5);
var createReactClass = __webpack_require__(8);
var PropTypes = __webpack_require__(14);
var win = typeof global === 'undefined' ? window : global;

module.exports = function (chartType, Highcharts) {
  var displayName = 'Highcharts' + chartType;
  var result = createReactClass({
    displayName: displayName,

    propTypes: {
      config: PropTypes.object,
      isPureConfig: PropTypes.bool,
      neverReflow: PropTypes.bool,
      callback: PropTypes.func,
      domProps: PropTypes.object
    },
    getDefaultProps: function getDefaultProps() {
      return {
        callback: function callback() {},
        domProps: {}
      };
    },
    setChartRef: function setChartRef(chartRef) {
      this.chartRef = chartRef;
    },
    renderChart: function renderChart(config) {
      var _this = this;

      if (!config) {
        throw new Error('Config must be specified for the ' + displayName + ' component');
      }
      var chartConfig = config.chart;
      this.chart = new Highcharts[chartType](_extends({}, config, {
        chart: _extends({}, chartConfig, {
          renderTo: this.chartRef
        })
      }), this.props.callback);

      if (!this.props.neverReflow) {
        win && win.requestAnimationFrame && requestAnimationFrame(function () {
          _this.chart && _this.chart.options && _this.chart.reflow();
        });
      }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
      if (nextProps.neverReflow || nextProps.isPureConfig && this.props.config === nextProps.config) {
        return true;
      }
      this.renderChart(nextProps.config);
      return false;
    },


    getChart: function getChart() {
      if (!this.chart) {
        throw new Error('getChart() should not be called before the component is mounted');
      }
      return this.chart;
    },

    componentDidMount: function componentDidMount() {
      this.renderChart(this.props.config);
    },

    componentWillUnmount: function componentWillUnmount() {
      this.chart.destroy();
    },


    render: function render() {
      return React.createElement('div', _extends({ ref: this.setChartRef }, this.props.domProps));
    }
  });

  result.Highcharts = Highcharts;
  result.withHighcharts = function (Highcharts) {
    return module.exports(chartType, Highcharts);
  };
  return result;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(1);
  var warning = __webpack_require__(3);
  var ReactPropTypesSecret = __webpack_require__(4);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(3);
var assign = __webpack_require__(6);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(11);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(13)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(12)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(10)('Chart', __webpack_require__(17));

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })
/******/ ]);
});

/***/ }),

/***/ 1053:
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.4 (2017-12-15)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(S,M){"object"===typeof module&&module.exports?module.exports=S.document?M(S):M:S.Highcharts=M(S)})("undefined"!==typeof window?window:this,function(S){var M=function(){var a="undefined"===typeof S?window:S,E=a.document,D=a.navigator&&a.navigator.userAgent||"",H=E&&E.createElementNS&&!!E.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,p=/(edge|msie|trident)/i.test(D)&&!a.opera,f=/Firefox/.test(D),l=f&&4>parseInt(D.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,
!0):{product:"Highcharts",version:"6.0.4",deg2rad:2*Math.PI/360,doc:E,hasBidiBug:l,hasTouch:E&&void 0!==E.documentElement.ontouchstart,isMS:p,isWebKit:/AppleWebKit/.test(D),isFirefox:f,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(D),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:H,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var E=a.charts,D=a.doc,H=a.win;a.error=function(p,
f){p=a.isNumber(p)?"Highcharts error #"+p+": www.highcharts.com/errors/"+p:p;if(f)throw Error(p);H.console&&console.log(p)};a.Fx=function(a,f,l){this.options=f;this.elem=a;this.prop=l};a.Fx.prototype={dSetter:function(){var a=this.paths[0],f=this.paths[1],l=[],r=this.now,n=a.length,w;if(1===r)l=this.toD;else if(n===f.length&&1>r)for(;n--;)w=parseFloat(a[n]),l[n]=isNaN(w)?f[n]:r*parseFloat(f[n]-w)+w;else l=f;this.elem.attr("d",l,null,!0)},update:function(){var a=this.elem,f=this.prop,l=this.now,r=
this.options.step;if(this[f+"Setter"])this[f+"Setter"]();else a.attr?a.element&&a.attr(f,l,null,!0):a.style[f]=l+this.unit;r&&r.call(a,l,this)},run:function(p,f,l){var r=this,n=r.options,w=function(a){return w.stopped?!1:r.step(a)},u=H.requestAnimationFrame||function(a){setTimeout(a,13)},e=function(){for(var h=0;h<a.timers.length;h++)a.timers[h]()||a.timers.splice(h--,1);a.timers.length&&u(e)};p===f?(delete n.curAnim[this.prop],n.complete&&0===a.keys(n.curAnim).length&&n.complete.call(this.elem)):
(this.startTime=+new Date,this.start=p,this.end=f,this.unit=l,this.now=this.start,this.pos=0,w.elem=this.elem,w.prop=this.prop,w()&&1===a.timers.push(w)&&u(e))},step:function(p){var f=+new Date,l,r=this.options,n=this.elem,w=r.complete,u=r.duration,e=r.curAnim;n.attr&&!n.element?p=!1:p||f>=u+this.startTime?(this.now=this.end,this.pos=1,this.update(),l=e[this.prop]=!0,a.objectEach(e,function(a){!0!==a&&(l=!1)}),l&&w&&w.call(n),p=!1):(this.pos=r.easing((f-this.startTime)/u),this.now=this.start+(this.end-
this.start)*this.pos,this.update(),p=!0);return p},initPath:function(p,f,l){function r(a){var b,c;for(k=a.length;k--;)b="M"===a[k]||"L"===a[k],c=/[a-zA-Z]/.test(a[k+3]),b&&c&&a.splice(k+1,0,a[k+1],a[k+2],a[k+1],a[k+2])}function n(a,b){for(;a.length<c;){a[0]=b[c-a.length];var e=a.slice(0,d);[].splice.apply(a,[0,0].concat(e));z&&(e=a.slice(a.length-d),[].splice.apply(a,[a.length,0].concat(e)),k--)}a[0]="M"}function w(a,k){for(var e=(c-a.length)/d;0<e&&e--;)b=a.slice().splice(a.length/B-d,d*B),b[0]=
k[c-d-e*d],m&&(b[d-6]=b[d-2],b[d-5]=b[d-1]),[].splice.apply(a,[a.length/B,0].concat(b)),z&&e--}f=f||"";var u,e=p.startX,h=p.endX,m=-1<f.indexOf("C"),d=m?7:3,c,b,k;f=f.split(" ");l=l.slice();var z=p.isArea,B=z?2:1,I;m&&(r(f),r(l));if(e&&h){for(k=0;k<e.length;k++)if(e[k]===h[0]){u=k;break}else if(e[0]===h[h.length-e.length+k]){u=k;I=!0;break}void 0===u&&(f=[])}f.length&&a.isNumber(u)&&(c=l.length+u*B*d,I?(n(f,l),w(l,f)):(n(l,f),w(f,l)));return[f,l]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=
function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.extend=function(a,f){var l;a||(a={});for(l in f)a[l]=f[l];return a};a.merge=function(){var p,f=arguments,l,r={},n=function(l,p){"object"!==typeof l&&(l={});a.objectEach(p,function(e,h){!a.isObject(e,!0)||a.isClass(e)||a.isDOMElement(e)?l[h]=p[h]:l[h]=n(l[h]||{},e)});return l};!0===f[0]&&(r=f[1],f=Array.prototype.slice.call(f,2));l=f.length;for(p=0;p<l;p++)r=n(r,f[p]);return r};a.pInt=function(a,
f){return parseInt(a,f||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(p,f){return!!p&&"object"===typeof p&&(!f||!a.isArray(p))};a.isDOMElement=function(p){return a.isObject(p)&&"number"===typeof p.nodeType};a.isClass=function(p){var f=p&&p.constructor;return!(!a.isObject(p,!0)||a.isDOMElement(p)||!f||!f.name||"Object"===f.name)};a.isNumber=function(a){return"number"===
typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,f){for(var l=a.length;l--;)if(a[l]===f){a.splice(l,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(p,f,l){var r;a.isString(f)?a.defined(l)?p.setAttribute(f,l):p&&p.getAttribute&&(r=p.getAttribute(f)):a.defined(f)&&a.isObject(f)&&a.objectEach(f,function(a,l){p.setAttribute(l,a)});return r};a.splat=function(p){return a.isArray(p)?p:[p]};a.syncTimeout=function(a,f,l){if(f)return setTimeout(a,f,l);a.call(0,
l)};a.pick=function(){var a=arguments,f,l,r=a.length;for(f=0;f<r;f++)if(l=a[f],void 0!==l&&null!==l)return l};a.css=function(p,f){a.isMS&&!a.svg&&f&&void 0!==f.opacity&&(f.filter="alpha(opacity\x3d"+100*f.opacity+")");a.extend(p.style,f)};a.createElement=function(p,f,l,r,n){p=D.createElement(p);var w=a.css;f&&a.extend(p,f);n&&w(p,{padding:0,border:"none",margin:0});l&&w(p,l);r&&r.appendChild(p);return p};a.extendClass=function(p,f){var l=function(){};l.prototype=new p;a.extend(l.prototype,f);return l};
a.pad=function(a,f,l){return Array((f||2)+1-String(a).length).join(l||0)+a};a.relativeLength=function(a,f,l){return/%$/.test(a)?f*parseFloat(a)/100+(l||0):parseFloat(a)};a.wrap=function(a,f,l){var p=a[f];a[f]=function(){var a=Array.prototype.slice.call(arguments),f=arguments,u=this;u.proceed=function(){p.apply(u,arguments.length?arguments:f)};a.unshift(p);a=l.apply(this,a);u.proceed=null;return a}};a.getTZOffset=function(p){var f=a.Date;return 6E4*(f.hcGetTimezoneOffset&&f.hcGetTimezoneOffset(p)||
f.hcTimezoneOffset||0)};a.dateFormat=function(p,f,l){if(!a.defined(f)||isNaN(f))return a.defaultOptions.lang.invalidDate||"";p=a.pick(p,"%Y-%m-%d %H:%M:%S");var r=a.Date,n=new r(f-a.getTZOffset(f)),w=n[r.hcGetHours](),u=n[r.hcGetDay](),e=n[r.hcGetDate](),h=n[r.hcGetMonth](),m=n[r.hcGetFullYear](),d=a.defaultOptions.lang,c=d.weekdays,b=d.shortWeekdays,k=a.pad,r=a.extend({a:b?b[u]:c[u].substr(0,3),A:c[u],d:k(e),e:k(e,2," "),w:u,b:d.shortMonths[h],B:d.months[h],m:k(h+1),y:m.toString().substr(2,2),Y:m,
H:k(w),k:w,I:k(w%12||12),l:w%12||12,M:k(n[r.hcGetMinutes]()),p:12>w?"AM":"PM",P:12>w?"am":"pm",S:k(n.getSeconds()),L:k(Math.round(f%1E3),3)},a.dateFormats);a.objectEach(r,function(a,b){for(;-1!==p.indexOf("%"+b);)p=p.replace("%"+b,"function"===typeof a?a(f):a)});return l?p.substr(0,1).toUpperCase()+p.substr(1):p};a.formatSingle=function(p,f){var l=/\.([0-9])/,r=a.defaultOptions.lang;/f$/.test(p)?(l=(l=p.match(l))?l[1]:-1,null!==f&&(f=a.numberFormat(f,l,r.decimalPoint,-1<p.indexOf(",")?r.thousandsSep:
""))):f=a.dateFormat(p,f);return f};a.format=function(p,f){for(var l="{",r=!1,n,w,u,e,h=[],m;p;){l=p.indexOf(l);if(-1===l)break;n=p.slice(0,l);if(r){n=n.split(":");w=n.shift().split(".");e=w.length;m=f;for(u=0;u<e;u++)m&&(m=m[w[u]]);n.length&&(m=a.formatSingle(n.join(":"),m));h.push(m)}else h.push(n);p=p.slice(l+1);l=(r=!r)?"}":"{"}h.push(p);return h.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(p,f,l,r,n){var w,u=p;l=
a.pick(l,1);w=p/l;f||(f=n?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===r&&(1===l?f=a.grep(f,function(a){return 0===a%1}):.1>=l&&(f=[1/l])));for(r=0;r<f.length&&!(u=f[r],n&&u*l>=p||!n&&w<=(f[r]+(f[r+1]||f[r]))/2);r++);return u=a.correctFloat(u*l,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,f){var l=a.length,p,n;for(n=0;n<l;n++)a[n].safeI=n;a.sort(function(a,n){p=f(a,n);return 0===p?a.safeI-n.safeI:p});for(n=0;n<l;n++)delete a[n].safeI};a.arrayMin=function(a){for(var f=a.length,
l=a[0];f--;)a[f]<l&&(l=a[f]);return l};a.arrayMax=function(a){for(var f=a.length,l=a[0];f--;)a[f]>l&&(l=a[f]);return l};a.destroyObjectProperties=function(p,f){a.objectEach(p,function(a,r){a&&a!==f&&a.destroy&&a.destroy();delete p[r]})};a.discardElement=function(p){var f=a.garbageBin;f||(f=a.createElement("div"));p&&f.appendChild(p);f.innerHTML=""};a.correctFloat=function(a,f){return parseFloat(a.toPrecision(f||14))};a.setAnimation=function(p,f){f.renderer.globalAnimation=a.pick(p,f.options.chart.animation,
!0)};a.animObject=function(p){return a.isObject(p)?a.merge(p):{duration:p?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(p,f,l,r){p=+p||0;f=+f;var n=a.defaultOptions.lang,w=(p.toString().split(".")[1]||"").split("e")[0].length,u,e,h=p.toString().split("e");-1===f?f=Math.min(w,20):a.isNumber(f)?f&&h[1]&&0>h[1]&&(u=f+ +h[1],0<=u?(h[0]=(+h[0]).toExponential(u).split("e")[0],f=u):(h[0]=h[0].split(".")[0]||0,
p=20>f?(h[0]*Math.pow(10,h[1])).toFixed(f):0,h[1]=0)):f=2;e=(Math.abs(h[1]?h[0]:p)+Math.pow(10,-Math.max(f,w)-1)).toFixed(f);w=String(a.pInt(e));u=3<w.length?w.length%3:0;l=a.pick(l,n.decimalPoint);r=a.pick(r,n.thousandsSep);p=(0>p?"-":"")+(u?w.substr(0,u)+r:"");p+=w.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+r);f&&(p+=l+e.slice(-f));h[1]&&0!==+p&&(p+="e"+h[1]);return p};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(p,f,l){if("width"===f)return Math.min(p.offsetWidth,
p.scrollWidth)-a.getStyle(p,"padding-left")-a.getStyle(p,"padding-right");if("height"===f)return Math.min(p.offsetHeight,p.scrollHeight)-a.getStyle(p,"padding-top")-a.getStyle(p,"padding-bottom");H.getComputedStyle||a.error(27,!0);if(p=H.getComputedStyle(p,void 0))p=p.getPropertyValue(f),a.pick(l,"opacity"!==f)&&(p=a.pInt(p));return p};a.inArray=function(p,f){return(a.indexOfPolyfill||Array.prototype.indexOf).call(f,p)};a.grep=function(p,f){return(a.filterPolyfill||Array.prototype.filter).call(p,
f)};a.find=Array.prototype.find?function(a,f){return a.find(f)}:function(a,f){var l,r=a.length;for(l=0;l<r;l++)if(f(a[l],l))return a[l]};a.map=function(a,f){for(var l=[],r=0,n=a.length;r<n;r++)l[r]=f.call(a[r],a[r],r,a);return l};a.keys=function(p){return(a.keysPolyfill||Object.keys).call(void 0,p)};a.reduce=function(p,f,l){return(a.reducePolyfill||Array.prototype.reduce).call(p,f,l)};a.offset=function(a){var f=D.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+
(H.pageYOffset||f.scrollTop)-(f.clientTop||0),left:a.left+(H.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};a.stop=function(p,f){for(var l=a.timers.length;l--;)a.timers[l].elem!==p||f&&f!==a.timers[l].prop||(a.timers[l].stopped=!0)};a.each=function(p,f,l){return(a.forEachPolyfill||Array.prototype.forEach).call(p,f,l)};a.objectEach=function(a,f,l){for(var r in a)a.hasOwnProperty(r)&&f.call(l,a[r],r,a)};a.addEvent=function(p,f,l){var r,n,w=p.addEventListener||a.addEventListenerPolyfill;p.hcEvents&&
!Object.prototype.hasOwnProperty.call(p,"hcEvents")&&(n={},a.objectEach(p.hcEvents,function(a,e){n[e]=a.slice(0)}),p.hcEvents=n);r=p.hcEvents=p.hcEvents||{};w&&w.call(p,f,l,!1);r[f]||(r[f]=[]);r[f].push(l);return function(){a.removeEvent(p,f,l)}};a.removeEvent=function(p,f,l){function r(e,m){var d=p.removeEventListener||a.removeEventListenerPolyfill;d&&d.call(p,e,m,!1)}function n(){var e,m;p.nodeName&&(f?(e={},e[f]=!0):e=u,a.objectEach(e,function(a,c){if(u[c])for(m=u[c].length;m--;)r(c,u[c][m])}))}
var w,u=p.hcEvents,e;u&&(f?(w=u[f]||[],l?(e=a.inArray(l,w),-1<e&&(w.splice(e,1),u[f]=w),r(f,l)):(n(),u[f]=[])):(n(),p.hcEvents={}))};a.fireEvent=function(p,f,l,r){var n;n=p.hcEvents;var w,u;l=l||{};if(D.createEvent&&(p.dispatchEvent||p.fireEvent))n=D.createEvent("Events"),n.initEvent(f,!0,!0),a.extend(n,l),p.dispatchEvent?p.dispatchEvent(n):p.fireEvent(f,n);else if(n)for(n=n[f]||[],w=n.length,l.target||a.extend(l,{preventDefault:function(){l.defaultPrevented=!0},target:p,type:f}),f=0;f<w;f++)(u=n[f])&&
!1===u.call(p,l)&&l.preventDefault();r&&!l.defaultPrevented&&r(l)};a.animate=function(p,f,l){var r,n="",w,u,e;a.isObject(l)||(e=arguments,l={duration:e[2],easing:e[3],complete:e[4]});a.isNumber(l.duration)||(l.duration=400);l.easing="function"===typeof l.easing?l.easing:Math[l.easing]||Math.easeInOutSine;l.curAnim=a.merge(f);a.objectEach(f,function(e,m){a.stop(p,m);u=new a.Fx(p,l,m);w=null;"d"===m?(u.paths=u.initPath(p,p.d,f.d),u.toD=f.d,r=0,w=1):p.attr?r=p.attr(m):(r=parseFloat(a.getStyle(p,m))||
0,"opacity"!==m&&(n="px"));w||(w=e);w&&w.match&&w.match("px")&&(w=w.replace(/px/g,""));u.run(r,w,n)})};a.seriesType=function(p,f,l,r,n){var w=a.getOptions(),u=a.seriesTypes;w.plotOptions[p]=a.merge(w.plotOptions[f],l);u[p]=a.extendClass(u[f]||function(){},r);u[p].prototype.type=p;n&&(u[p].prototype.pointClass=a.extendClass(a.Point,n));return u[p]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),f=0;return function(){return"highcharts-"+a+"-"+f++}}();H.jQuery&&(H.jQuery.fn.highcharts=
function(){var p=[].slice.call(arguments);if(this[0])return p[0]?(new (a[a.isString(p[0])?p.shift():"Chart"])(this[0],p[0],p[1]),this):E[a.attr(this[0],"data-highcharts-chart")]})})(M);(function(a){var E=a.each,D=a.isNumber,H=a.map,p=a.merge,f=a.pInt;a.Color=function(l){if(!(this instanceof a.Color))return new a.Color(l);this.init(l)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[f(a[1]),f(a[2]),
f(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(l){var f,n,w,u;if((this.input=l=this.names[l&&l.toLowerCase?l.toLowerCase():""]||l)&&l.stops)this.stops=H(l.stops,function(e){return new a.Color(e[1])});else if(l&&l.charAt&&"#"===l.charAt()&&(f=l.length,l=parseInt(l.substr(1),16),7===f?n=[(l&16711680)>>16,(l&65280)>>
8,l&255,1]:4===f&&(n=[(l&3840)>>4|(l&3840)>>8,(l&240)>>4|l&240,(l&15)<<4|l&15,1])),!n)for(w=this.parsers.length;w--&&!n;)u=this.parsers[w],(f=u.regex.exec(l))&&(n=u.parse(f));this.rgba=n||[]},get:function(a){var f=this.input,n=this.rgba,l;this.stops?(l=p(f),l.stops=[].concat(l.stops),E(this.stops,function(n,e){l.stops[e]=[l.stops[e][0],n.get(a)]})):l=n&&D(n[0])?"rgb"===a||!a&&1===n[3]?"rgb("+n[0]+","+n[1]+","+n[2]+")":"a"===a?n[3]:"rgba("+n.join(",")+")":f;return l},brighten:function(a){var l,n=this.rgba;
if(this.stops)E(this.stops,function(n){n.brighten(a)});else if(D(a)&&0!==a)for(l=0;3>l;l++)n[l]+=f(255*a),0>n[l]&&(n[l]=0),255<n[l]&&(n[l]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,f){var n=this.rgba,l=a.rgba;l.length&&n&&n.length?(a=1!==l[3]||1!==n[3],f=(a?"rgba(":"rgb(")+Math.round(l[0]+(n[0]-l[0])*(1-f))+","+Math.round(l[1]+(n[1]-l[1])*(1-f))+","+Math.round(l[2]+(n[2]-l[2])*(1-f))+(a?","+(l[3]+(n[3]-l[3])*(1-f)):"")+")"):f=a.input||"none";return f}};
a.color=function(l){return new a.Color(l)}})(M);(function(a){var E,D,H=a.addEvent,p=a.animate,f=a.attr,l=a.charts,r=a.color,n=a.css,w=a.createElement,u=a.defined,e=a.deg2rad,h=a.destroyObjectProperties,m=a.doc,d=a.each,c=a.extend,b=a.erase,k=a.grep,z=a.hasTouch,B=a.inArray,I=a.isArray,x=a.isFirefox,K=a.isMS,t=a.isObject,C=a.isString,N=a.isWebKit,q=a.merge,A=a.noop,F=a.objectEach,G=a.pick,g=a.pInt,v=a.removeEvent,Q=a.stop,L=a.svg,P=a.SVG_NS,J=a.symbolSizes,R=a.win;E=a.SVGElement=function(){return this};
c(E.prototype,{opacity:1,SVG_NS:P,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,g){this.element="span"===g?w(g):m.createElementNS(this.SVG_NS,g);this.renderer=a},animate:function(y,g,b){g=a.animObject(G(g,this.renderer.globalAnimation,!0));0!==g.duration?(b&&(g.complete=b),p(this,y,g)):(this.attr(y,null,b),g.step&&g.step.call(this));return this},colorGradient:function(y,g,b){var v=
this.renderer,c,O,k,e,z,h,m,L,A,J,t=[],x;y.radialGradient?O="radialGradient":y.linearGradient&&(O="linearGradient");O&&(k=y[O],z=v.gradients,m=y.stops,J=b.radialReference,I(k)&&(y[O]=k={x1:k[0],y1:k[1],x2:k[2],y2:k[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===O&&J&&!u(k.gradientUnits)&&(e=k,k=q(k,v.getRadialAttr(J,e),{gradientUnits:"userSpaceOnUse"})),F(k,function(a,y){"id"!==y&&t.push(y,a)}),F(m,function(a){t.push(a)}),t=t.join(","),z[t]?J=z[t].attr("id"):(k.id=J=a.uniqueKey(),z[t]=h=v.createElement(O).attr(k).add(v.defs),
h.radAttr=e,h.stops=[],d(m,function(y){0===y[1].indexOf("rgba")?(c=a.color(y[1]),L=c.get("rgb"),A=c.get("a")):(L=y[1],A=1);y=v.createElement("stop").attr({offset:y[0],"stop-color":L,"stop-opacity":A}).add(h);h.stops.push(y)})),x="url("+v.url+"#"+J+")",b.setAttribute(g,x),b.gradient=t,y.toString=function(){return x})},applyTextOutline:function(y){var g=this.element,v,c,k,q,e;-1!==y.indexOf("contrast")&&(y=y.replace(/contrast/g,this.renderer.getContrast(g.style.fill)));y=y.split(" ");c=y[y.length-1];
if((k=y[0])&&"none"!==k&&a.svg){this.fakeTS=!0;y=[].slice.call(g.getElementsByTagName("tspan"));this.ySetter=this.xSetter;k=k.replace(/(^[\d\.]+)(.*?)$/g,function(a,y,g){return 2*y+g});for(e=y.length;e--;)v=y[e],"highcharts-text-outline"===v.getAttribute("class")&&b(y,g.removeChild(v));q=g.firstChild;d(y,function(a,y){0===y&&(a.setAttribute("x",g.getAttribute("x")),y=g.getAttribute("y"),a.setAttribute("y",y||0),null===y&&g.setAttribute("y",0));a=a.cloneNode(1);f(a,{"class":"highcharts-text-outline",
fill:c,stroke:c,"stroke-width":k,"stroke-linejoin":"round"});g.insertBefore(a,q)})}},attr:function(a,g,b,v){var y,c=this.element,k,d=this,O,q;"string"===typeof a&&void 0!==g&&(y=a,a={},a[y]=g);"string"===typeof a?d=(this[a+"Getter"]||this._defaultGetter).call(this,a,c):(F(a,function(y,g){O=!1;v||Q(this,g);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(g)&&(k||(this.symbolAttr(a),k=!0),O=!0);!this.rotation||"x"!==g&&"y"!==g||(this.doTransform=!0);O||(q=this[g+"Setter"]||
this._defaultSetter,q.call(this,y,g,c),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g)&&this.updateShadows(g,y,q))},this),this.afterSetters());b&&b();return d},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,g,b){for(var y=this.shadows,v=y.length;v--;)b.call(y[v],"height"===a?Math.max(g-(y[v].cutHeight||0),0):"d"===a?this.d:g,a,y[v])},addClass:function(a,g){var y=this.attr("class")||"";-1===y.indexOf(a)&&
(g||(a=(y+(y?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==B(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var y=this;d("x y r start end width height innerR anchorX anchorY".split(" "),function(g){y[g]=G(a[g],y[g])});y.attr({d:y.renderer.symbols[y.symbolName](y.x,y.y,y.width,y.height,y)})},clip:function(a){return this.attr("clip-path",a?"url("+
this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var y;g=g||a.strokeWidth||0;y=Math.round(g)%2/2;a.x=Math.floor(a.x||this.x||0)+y;a.y=Math.floor(a.y||this.y||0)+y;a.width=Math.floor((a.width||this.width||0)-2*y);a.height=Math.floor((a.height||this.height||0)-2*y);u(a.strokeWidth)&&(a.strokeWidth=g);return a},css:function(a){var y=this.styles,b={},v=this.element,k,d="",q,e=!y,z=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);y&&F(a,function(a,g){a!==y[g]&&(b[g]=a,e=!0)});
e&&(y&&(a=c(y,b)),k=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===v.nodeName.toLowerCase()&&g(a.width),this.styles=a,k&&!L&&this.renderer.forExport&&delete a.width,K&&!L?n(this.element,a):(q=function(a,y){return"-"+y.toLowerCase()},F(a,function(a,y){-1===B(y,z)&&(d+=y.replace(/([A-Z])/g,q)+":"+a+";")}),d&&f(v,"style",d)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||
0},on:function(a,g){var y=this,b=y.element;z&&"click"===a?(b.ontouchstart=function(a){y.touchEventFired=Date.now();a.preventDefault();g.call(b,a)},b.onclick=function(a){(-1===R.navigator.userAgent.indexOf("Android")||1100<Date.now()-(y.touchEventFired||0))&&g.call(b,a)}):b["on"+a]=g;return this},setRadialReference:function(a){var y=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;y&&y.radAttr&&y.animate(this.renderer.getRadialAttr(a,y.radAttr));return this},translate:function(a,
g){return this.attr({translateX:a,translateY:g})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,g=this.translateY||0,b=this.scaleX,v=this.scaleY,c=this.inverted,k=this.rotation,d=this.matrix,q=this.element;c&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];u(d)&&a.push("matrix("+d.join(",")+")");c?a.push("rotate(90) scale(-1,1)"):k&&a.push("rotate("+k+" "+G(this.rotationOriginX,q.getAttribute("x"),0)+" "+G(this.rotationOriginY,
q.getAttribute("y")||0)+")");(u(b)||u(v))&&a.push("scale("+G(b,1)+" "+G(v,1)+")");a.length&&q.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,g,v){var y,c,k,d,q={};c=this.renderer;k=c.alignedObjects;var e,O;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!v||C(v))this.alignTo=y=v||"renderer",b(k,this),k.push(this),v=null}else a=this.alignOptions,g=this.alignByTranslate,y=this.alignTo;v=G(v,c[y],c);y=a.align;
c=a.verticalAlign;k=(v.x||0)+(a.x||0);d=(v.y||0)+(a.y||0);"right"===y?e=1:"center"===y&&(e=2);e&&(k+=(v.width-(a.width||0))/e);q[g?"translateX":"x"]=Math.round(k);"bottom"===c?O=1:"middle"===c&&(O=2);O&&(d+=(v.height-(a.height||0))/O);q[g?"translateY":"y"]=Math.round(d);this[this.placed?"animate":"attr"](q);this.placed=!0;this.alignAttr=q;return this},getBBox:function(a,g){var y,b=this.renderer,v,k=this.element,q=this.styles,O,z=this.textStr,h,m=b.cache,L=b.cacheKeys,A;g=G(g,this.rotation);v=g*e;
O=q&&q.fontSize;u(z)&&(A=z.toString(),-1===A.indexOf("\x3c")&&(A=A.replace(/[0-9]/g,"0")),A+=["",g||0,O,q&&q.width,q&&q.textOverflow].join());A&&!a&&(y=m[A]);if(!y){if(k.namespaceURI===this.SVG_NS||b.forExport){try{(h=this.fakeTS&&function(a){d(k.querySelectorAll(".highcharts-text-outline"),function(y){y.style.display=a})})&&h("none"),y=k.getBBox?c({},k.getBBox()):{width:k.offsetWidth,height:k.offsetHeight},h&&h("")}catch(W){}if(!y||0>y.width)y={width:0,height:0}}else y=this.htmlGetBBox();b.isSVG&&
(a=y.width,b=y.height,q&&"11px"===q.fontSize&&17===Math.round(b)&&(y.height=b=14),g&&(y.width=Math.abs(b*Math.sin(v))+Math.abs(a*Math.cos(v)),y.height=Math.abs(b*Math.cos(v))+Math.abs(a*Math.sin(v))));if(A&&0<y.height){for(;250<L.length;)delete m[L.shift()];m[A]||L.push(A);m[A]=y}}return y},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var y=this;y.animate({opacity:0},{duration:a||150,complete:function(){y.attr({y:-9999})}})},
add:function(a){var y=this.renderer,g=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&y.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:y.box).appendChild(g);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var y=a.parentNode;y&&y.removeChild(a)},destroy:function(){var a=this,g=a.element||{},v=a.renderer.isSVG&&"SPAN"===g.nodeName&&a.parentGroup,c=g.ownerSVGElement;g.onclick=g.onmouseout=
g.onmouseover=g.onmousemove=g.point=null;Q(a);a.clipPath&&c&&(d(c.querySelectorAll("[clip-path],[CLIP-PATH]"),function(g){g.getAttribute("clip-path").match(RegExp('[("]#'+a.clipPath.element.id+'[)"]'))&&g.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(c=0;c<a.stops.length;c++)a.stops[c]=a.stops[c].destroy();a.stops=null}a.safeRemoveChild(g);for(a.destroyShadows();v&&v.div&&0===v.div.childNodes.length;)g=v.parentGroup,a.safeRemoveChild(v.div),delete v.div,v=g;a.alignTo&&
b(a.renderer.alignedObjects,a);F(a,function(g,y){delete a[y]});return null},shadow:function(a,g,b){var y=[],v,c,k=this.element,d,q,e,z;if(!a)this.destroyShadows();else if(!this.shadows){q=G(a.width,3);e=(a.opacity||.15)/q;z=this.parentInverted?"(-1,-1)":"("+G(a.offsetX,1)+", "+G(a.offsetY,1)+")";for(v=1;v<=q;v++)c=k.cloneNode(0),d=2*q+1-2*v,f(c,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":e*v,"stroke-width":d,transform:"translate"+z,fill:"none"}),b&&(f(c,"height",Math.max(f(c,"height")-
d,0)),c.cutHeight=d),g?g.element.appendChild(c):k.parentNode&&k.parentNode.insertBefore(c,k),y.push(c);this.shadows=y}return this},destroyShadows:function(){d(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=G(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));
return a},dSetter:function(a,g,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[g]!==a&&(b.setAttribute(g,a),this[g]=a)},dashstyleSetter:function(a){var b,v=this["stroke-width"];"inherit"===v&&(v=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=
g(a[b])*v;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,g,b){this[g]=a;b.setAttribute(g,a)},titleSetter:function(a){var g=this.element.getElementsByTagName("title")[0];g||(g=m.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);g.appendChild(m.createTextNode(String(G(a),
"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,g,b){"string"===typeof a?b.setAttribute(g,a):a&&this.colorGradient(a,g,b)},visibilitySetter:function(a,g,b){"inherit"===a?b.removeAttribute(g):this[g]!==a&&b.setAttribute(g,a);this[g]=a},zIndexSetter:function(a,b){var v=this.renderer,y=this.parentGroup,c=(y||v).element||v.box,k,d=this.element,q,e,v=c===v.box;k=this.added;var z;u(a)&&
(d.zIndex=a,a=+a,this[b]===a&&(k=!1),this[b]=a);if(k){(a=this.zIndex)&&y&&(y.handleZ=!0);b=c.childNodes;for(z=b.length-1;0<=z&&!q;z--)if(y=b[z],k=y.zIndex,e=!u(k),y!==d)if(0>a&&e&&!v&&!z)c.insertBefore(d,b[z]),q=!0;else if(g(k)<=a||e&&(!u(a)||0<=a))c.insertBefore(d,b[z+1]||null),q=!0;q||(c.insertBefore(d,b[v?3:0]||null),q=!0)}return q},_defaultSetter:function(a,g,b){b.setAttribute(g,a)}});E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=E.prototype.translateYSetter=E.prototype.rotationSetter=
E.prototype.verticalAlignSetter=E.prototype.rotationOriginXSetter=E.prototype.rotationOriginYSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=E.prototype.matrixSetter=function(a,g){this[g]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,g,b){this[g]=a;this.stroke&&this["stroke-width"]?(E.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&
(b.removeAttribute("stroke"),this.hasStroke=!1)};D=a.SVGRenderer=function(){this.init.apply(this,arguments)};c(D.prototype,{Element:E,SVG_NS:P,init:function(a,g,b,v,c,k){var y;v=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(v));y=v.element;a.appendChild(y);f(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&f(y,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=y;this.boxWrapper=v;this.alignedObjects=[];this.url=(x||N)&&m.getElementsByTagName("base").length?
R.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(m.createTextNode("Created with Highcharts 6.0.4"));this.defs=this.createElement("defs").add();this.allowHTML=k;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,b,!1);var d;x&&a.getBoundingClientRect&&(g=function(){n(a,{left:0,top:0});d=a.getBoundingClientRect();n(a,{left:Math.ceil(d.left)-
d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},g(),this.unSubPixelFix=H(R,"resize",g))},getStyle:function(a){return this.style=c({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();h(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());
this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;g.init(this,a);return g},draw:A,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-a[2]/2+g.cy*a[2],r:g.r*a[2]}},getSpanWidth:function(a,g){var b=a.getBBox(!0).width;!L&&this.forExport&&(b=this.measureSpanWidth(g.firstChild.data,a.styles));return b},applyEllipsis:function(a,g,b,v){var c=a.rotation,y=b,k,d=0,q=b.length,e=function(a){g.removeChild(g.firstChild);
a&&g.appendChild(m.createTextNode(a))},z;a.rotation=0;y=this.getSpanWidth(a,g);if(z=y>v){for(;d<=q;)k=Math.ceil((d+q)/2),y=b.substring(0,k)+"\u2026",e(y),y=this.getSpanWidth(a,g),d===q?d=q+1:y>v?q=k-1:d=k;0===q&&e("")}a.rotation=c;return z},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var b=a.element,v=this,c=v.forExport,y=G(a.textStr,"").toString(),q=-1!==y.indexOf("\x3c"),e=b.childNodes,z,h,A,J,t=f(b,"x"),x=a.styles,B=a.textWidth,
l=x&&x.lineHeight,C=x&&x.textOutline,u=x&&"ellipsis"===x.textOverflow,Q=x&&"nowrap"===x.whiteSpace,w=x&&x.fontSize,R,I,r=e.length,x=B&&!a.added&&this.box,p=function(a){var c;c=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:w||v.style.fontSize||12;return l?g(l):v.fontMetrics(c,a.getAttribute("style")?a:b).h},K=function(a){F(v.escapes,function(g,b){a=a.replace(new RegExp(g,"g"),b)});return a};R=[y,u,Q,l,C,w,B].join();if(R!==a.textCache){for(a.textCache=R;r--;)b.removeChild(e[r]);q||C||u||B||
-1!==y.indexOf(" ")?(z=/<.*class="([^"]+)".*>/,h=/<.*style="([^"]+)".*>/,A=/<.*href="([^"]+)".*>/,x&&x.appendChild(b),y=q?y.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[y],y=k(y,function(a){return""!==a}),d(y,function(g,y){var k,q=0;g=g.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");
k=g.split("|||");d(k,function(g){if(""!==g||1===k.length){var d={},e=m.createElementNS(v.SVG_NS,"tspan"),x,F;z.test(g)&&(x=g.match(z)[1],f(e,"class",x));h.test(g)&&(F=g.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),f(e,"style",F));A.test(g)&&!c&&(f(e,"onclick",'location.href\x3d"'+g.match(A)[1]+'"'),f(e,"class","highcharts-anchor"),n(e,{cursor:"pointer"}));g=K(g.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==g){e.appendChild(m.createTextNode(g));q?d.dx=0:y&&null!==t&&(d.x=t);f(e,d);b.appendChild(e);
!q&&I&&(!L&&c&&n(e,{display:"block"}),f(e,"dy",p(e)));if(B){d=g.replace(/([^\^])-/g,"$1- ").split(" ");x=1<k.length||y||1<d.length&&!Q;var O=[],l,C=p(e),G=a.rotation;for(u&&(J=v.applyEllipsis(a,e,g,B));!u&&x&&(d.length||O.length);)a.rotation=0,l=v.getSpanWidth(a,e),g=l>B,void 0===J&&(J=g),g&&1!==d.length?(e.removeChild(e.firstChild),O.unshift(d.pop())):(d=O,O=[],d.length&&!Q&&(e=m.createElementNS(P,"tspan"),f(e,{dy:C,x:t}),F&&f(e,"style",F),b.appendChild(e)),l>B&&(B=l)),d.length&&e.appendChild(m.createTextNode(d.join(" ").replace(/- /g,
"-")));a.rotation=G}q++}}});I=I||b.childNodes.length}),J&&a.attr("title",a.textStr),x&&x.removeChild(b),C&&a.applyTextOutline&&a.applyTextOutline(C)):b.appendChild(m.createTextNode(K(y)))}},getContrast:function(a){a=r(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,b,v,d,k,e,z,h){var y=this.label(a,g,b,h,null,null,null,null,"button"),m=0;y.attr(q({padding:8,r:2},d));var A,L,J,t;d=q({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",
fontWeight:"normal"}},d);A=d.style;delete d.style;k=q(d,{fill:"#e6e6e6"},k);L=k.style;delete k.style;e=q(d,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},e);J=e.style;delete e.style;z=q(d,{style:{color:"#cccccc"}},z);t=z.style;delete z.style;H(y.element,K?"mouseover":"mouseenter",function(){3!==m&&y.setState(1)});H(y.element,K?"mouseout":"mouseleave",function(){3!==m&&y.setState(m)});y.setState=function(a){1!==a&&(y.state=m=a);y.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+
["normal","hover","pressed","disabled"][a||0]);y.attr([d,k,e,z][a||0]).css([A,L,J,t][a||0])};y.attr(d).css(c({cursor:"default"},A));return y.on("click",function(a){3!==m&&v.call(y,a)})},crispLine:function(a,g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};I(a)?g.d=a:t(a)&&c(g,a);return this.createElement("path").attr(g)},circle:function(a,g,b){a=t(a)?a:{x:a,y:g,r:b};g=this.createElement("circle");g.xSetter=
g.ySetter=function(a,g,b){b.setAttribute("c"+g,a)};return g.attr(a)},arc:function(a,g,b,v,c,d){t(a)?(v=a,g=v.y,b=v.r,a=v.x):v={innerR:v,start:c,end:d};a=this.symbol("arc",a,g,b,b,v);a.r=b;return a},rect:function(a,g,b,v,c,d){c=t(a)?a.r:c;var k=this.createElement("rect");a=t(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(b,0),height:Math.max(v,0)};void 0!==d&&(a.strokeWidth=d,a=k.crisp(a));a.fill="none";c&&(a.r=c);k.rSetter=function(a,g,b){f(b,{rx:a,ry:a})};return k.attr(a)},setSize:function(a,g,b){var v=
this.alignedObjects,c=v.length;this.width=a;this.height=g;for(this.boxWrapper.animate({width:a,height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:G(b,!0)?void 0:0});c--;)v[c].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,b,v,d){var k={preserveAspectRatio:"none"};1<arguments.length&&c(k,{x:g,y:b,width:v,height:d});k=this.createElement("image").attr(k);k.element.setAttributeNS?
k.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):k.element.setAttribute("hc-svg-href",a);return k},symbol:function(a,g,b,v,k,q){var e=this,y,z=/^url\((.*?)\)$/,h=z.test(a),A=!h&&(this.symbols[a]?a:"circle"),L=A&&this.symbols[A],t=u(g)&&L&&L.call(this.symbols,Math.round(g),Math.round(b),v,k,q),x,F;L?(y=this.path(t),y.attr("fill","none"),c(y,{symbolName:A,x:g,y:b,width:v,height:k}),q&&c(y,q)):h&&(x=a.match(z)[1],y=this.image(x),y.imgwidth=G(J[x]&&J[x].width,q&&q.width),y.imgheight=
G(J[x]&&J[x].height,q&&q.height),F=function(){y.attr({width:y.width,height:y.height})},d(["width","height"],function(a){y[a+"Setter"]=function(a,g){var b={},v=this["img"+g],c="width"===g?"translateX":"translateY";this[g]=a;u(v)&&(this.element&&this.element.setAttribute(g,v),this.alignByTranslate||(b[c]=((this[g]||0)-v)/2,this.attr(b)))}}),u(g)&&y.attr({x:g,y:b}),y.isImg=!0,u(y.imgwidth)&&u(y.imgheight)?F():(y.attr({width:0,height:0}),w("img",{onload:function(){var a=l[e.chartIndex];0===this.width&&
(n(this,{position:"absolute",top:"-999em"}),m.body.appendChild(this));J[x]={width:this.width,height:this.height};y.imgwidth=this.width;y.imgheight=this.height;y.element&&F();this.parentNode&&this.parentNode.removeChild(this);e.imgCount--;if(!e.imgCount&&a&&a.onload)a.onload()},src:x}),this.imgCount++));return y},symbols:{circle:function(a,g,b,v){return this.arc(a+b/2,g+v/2,b/2,v/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,g,b,v){return["M",a,g,"L",a+b,g,a+b,g+v,a,g+v,"Z"]},triangle:function(a,
g,b,v){return["M",a+b/2,g,"L",a+b,g+v,a,g+v,"Z"]},"triangle-down":function(a,g,b,v){return["M",a,g,"L",a+b,g,a+b/2,g+v,"Z"]},diamond:function(a,g,b,v){return["M",a+b/2,g,"L",a+b,g+v/2,a+b/2,g+v,a,g+v/2,"Z"]},arc:function(a,g,b,v,c){var k=c.start,d=c.r||b,q=c.r||v||b,e=c.end-.001;b=c.innerR;v=G(c.open,.001>Math.abs(c.end-c.start-2*Math.PI));var y=Math.cos(k),z=Math.sin(k),h=Math.cos(e),e=Math.sin(e);c=.001>c.end-k-Math.PI?0:1;d=["M",a+d*y,g+q*z,"A",d,q,0,c,1,a+d*h,g+q*e];u(b)&&d.push(v?"M":"L",a+b*
h,g+b*e,"A",b,b,0,c,0,a+b*y,g+b*z);d.push(v?"":"Z");return d},callout:function(a,g,b,v,c){var d=Math.min(c&&c.r||0,b,v),k=d+6,q=c&&c.anchorX;c=c&&c.anchorY;var e;e=["M",a+d,g,"L",a+b-d,g,"C",a+b,g,a+b,g,a+b,g+d,"L",a+b,g+v-d,"C",a+b,g+v,a+b,g+v,a+b-d,g+v,"L",a+d,g+v,"C",a,g+v,a,g+v,a,g+v-d,"L",a,g+d,"C",a,g,a,g,a+d,g];q&&q>b?c>g+k&&c<g+v-k?e.splice(13,3,"L",a+b,c-6,a+b+6,c,a+b,c+6,a+b,g+v-d):e.splice(13,3,"L",a+b,v/2,q,c,a+b,v/2,a+b,g+v-d):q&&0>q?c>g+k&&c<g+v-k?e.splice(33,3,"L",a,c+6,a-6,c,a,c-6,
a,g+d):e.splice(33,3,"L",a,v/2,q,c,a,v/2,a,g+d):c&&c>v&&q>a+k&&q<a+b-k?e.splice(23,3,"L",q+6,g+v,q,g+v+6,q-6,g+v,a+d,g+v):c&&0>c&&q>a+k&&q<a+b-k&&e.splice(3,3,"L",q-6,g,q,g-6,q+6,g,b-d,g);return e}},clipRect:function(g,b,v,c){var d=a.uniqueKey(),k=this.createElement("clipPath").attr({id:d}).add(this.defs);g=this.rect(g,b,v,c,0).add(k);g.id=d;g.clipPath=k;g.count=0;return g},text:function(a,g,b,v){var c={};if(v&&(this.allowHTML||!this.forExport))return this.html(a,g,b);c.x=Math.round(g||0);b&&(c.y=
Math.round(b));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);v||(a.xSetter=function(a,g,b){var v=b.getElementsByTagName("tspan"),c,d=b.getAttribute(g),k;for(k=0;k<v.length;k++)c=v[k],c.getAttribute(g)===d&&c.setAttribute(g,a);b.setAttribute(g,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?g(a):/em/.test(a)?parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*
b),f:a}},rotCorr:function(a,g,b){var v=a;g&&b&&(v=Math.max(v*Math.cos(g*e),4));return{x:-a/3*Math.sin(g*e),y:v}},label:function(g,b,k,e,z,h,m,A,L){var y=this,J=y.g("button"!==L&&"label"),t=J.text=y.text("",0,0,m).attr({zIndex:1}),x,F,n=0,B=3,l=0,C,f,Q,G,w,R={},I,P,r=/^url\((.*?)\)$/.test(e),p=r,K,O,N,T;L&&J.addClass("highcharts-"+L);p=r;K=function(){return(I||0)%2/2};O=function(){var a=t.element.style,g={};F=(void 0===C||void 0===f||w)&&u(t.textStr)&&t.getBBox();J.width=(C||F.width||0)+2*B+l;J.height=
(f||F.height||0)+2*B;P=B+y.fontMetrics(a&&a.fontSize,t).b;p&&(x||(J.box=x=y.symbols[e]||r?y.symbol(e):y.rect(),x.addClass(("button"===L?"":"highcharts-label-box")+(L?" highcharts-"+L+"-box":"")),x.add(J),a=K(),g.x=a,g.y=(A?-P:0)+a),g.width=Math.round(J.width),g.height=Math.round(J.height),x.attr(c(g,R)),R={})};N=function(){var a=l+B,g;g=A?0:P;u(C)&&F&&("center"===w||"right"===w)&&(a+={center:.5,right:1}[w]*(C-F.width));if(a!==t.x||g!==t.y)t.attr("x",a),void 0!==g&&t.attr("y",g);t.x=a;t.y=g};T=function(a,
g){x?x.attr(a,g):R[a]=g};J.onAdd=function(){t.add(J);J.attr({text:g||0===g?g:"",x:b,y:k});x&&u(z)&&J.attr({anchorX:z,anchorY:h})};J.widthSetter=function(g){C=a.isNumber(g)?g:null};J.heightSetter=function(a){f=a};J["text-alignSetter"]=function(a){w=a};J.paddingSetter=function(a){u(a)&&a!==B&&(B=J.padding=a,N())};J.paddingLeftSetter=function(a){u(a)&&a!==l&&(l=a,N())};J.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==n&&(n=a,F&&J.attr({x:Q}))};J.textSetter=function(a){void 0!==a&&t.textSetter(a);
O();N()};J["stroke-widthSetter"]=function(a,g){a&&(p=!0);I=this["stroke-width"]=a;T(g,a)};J.strokeSetter=J.fillSetter=J.rSetter=function(a,g){"r"!==g&&("fill"===g&&a&&(p=!0),J[g]=a);T(g,a)};J.anchorXSetter=function(a,g){z=J.anchorX=a;T(g,Math.round(a)-K()-Q)};J.anchorYSetter=function(a,g){h=J.anchorY=a;T(g,a-G)};J.xSetter=function(a){J.x=a;n&&(a-=n*((C||F.width)+2*B));Q=Math.round(a);J.attr("translateX",Q)};J.ySetter=function(a){G=J.y=Math.round(a);J.attr("translateY",G)};var U=J.css;return c(J,{css:function(a){if(a){var g=
{};a=q(a);d(J.textProps,function(b){void 0!==a[b]&&(g[b]=a[b],delete a[b])});t.css(g)}return U.call(J,a)},getBBox:function(){return{width:F.width+2*B,height:F.height+2*B,x:F.x-B,y:F.y-B}},shadow:function(a){a&&(O(),x&&x.shadow(a));return J},destroy:function(){v(J.element,"mouseenter");v(J.element,"mouseleave");t&&(t=t.destroy());x&&(x=x.destroy());E.prototype.destroy.call(J);J=y=O=N=T=null}})}});a.Renderer=D})(M);(function(a){var E=a.attr,D=a.createElement,H=a.css,p=a.defined,f=a.each,l=a.extend,
r=a.isFirefox,n=a.isMS,w=a.isWebKit,u=a.pick,e=a.pInt,h=a.SVGRenderer,m=a.win,d=a.wrap;l(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=l(this.styles,a);H(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},
htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,d=this.translateX||0,z=this.translateY||0,h=this.x||0,m=this.y||0,x=this.textAlign||"left",n={left:0,center:.5,right:1}[x],t=this.styles;H(b,{marginLeft:d,marginTop:z});this.shadows&&f(this.shadows,function(a){H(a,{marginLeft:d+1,marginTop:z+1})});this.inverted&&f(b.childNodes,function(c){a.invertChild(c,b)});if("SPAN"===b.tagName){var l=this.rotation,u=e(this.textWidth),q=t&&t.whiteSpace,A=[l,x,b.innerHTML,this.textWidth,
this.textAlign].join();A!==this.cTT&&(t=a.fontMetrics(b.style.fontSize).b,p(l)&&this.setSpanRotation(l,n,t),H(b,{width:"",whiteSpace:q||"nowrap"}),b.offsetWidth>u&&/[ \-]/.test(b.textContent||b.innerText)&&H(b,{width:u+"px",display:"block",whiteSpace:q||"normal"}),this.getSpanCorrection(b.offsetWidth,t,n,l,x));H(b,{left:h+(this.xCorr||0)+"px",top:m+(this.yCorr||0)+"px"});w&&(t=b.offsetHeight);this.cTT=A}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,d){var c={},k=this.renderer.getTransformKey();
c[k]=c.transform="rotate("+a+"deg)";c[k+(r?"Origin":"-origin")]=c.transformOrigin=100*b+"% "+d+"px";H(this.element,c)},getSpanCorrection:function(a,b,d){this.xCorr=-a*d;this.yCorr=-b}});l(h.prototype,{getTransformKey:function(){return n&&!/Edge/.test(m.navigator.userAgent)?"-ms-transform":w?"-webkit-transform":r?"MozTransform":m.opera?"-o-transform":""},html:function(a,b,k){var c=this.createElement("span"),e=c.element,h=c.renderer,m=h.isSVG,w=function(a,b){f(["opacity","visibility"],function(c){d(a,
c+"Setter",function(a,c,d,k){a.call(this,c,d,k);b[d]=c})})};c.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;this.textStr=a;e.innerHTML=u(a,"");c.htmlUpdateTransform()};m&&w(c,c.element.style);c.xSetter=c.ySetter=c.alignSetter=c.rotationSetter=function(a,b){"align"===b&&(b="textAlign");c[b]=a;c.htmlUpdateTransform()};c.attr({text:a,x:Math.round(b),y:Math.round(k)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});e.style.whiteSpace="nowrap";c.css=
c.htmlCss;m&&(c.add=function(a){var b,d=h.box.parentNode,k=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)k.push(a),a=a.parentGroup;f(k.reverse(),function(a){function e(g,b){a[b]=g;n?q[h.getTransformKey()]="translate("+(a.x||a.translateX)+"px,"+(a.y||a.translateY)+"px)":"translateX"===b?q.left=g+"px":q.top=g+"px";a.doTransform=!0}var q,g=E(a.element,"class");g&&(g={className:g});b=a.div=a.div||D("div",g,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,
opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||d);q=b.style;l(a,{classSetter:function(a){return function(g){this.element.setAttribute("class",g);a.className=g}}(b),on:function(){k[0].div&&c.on.apply({element:k[0].div},arguments);return a},translateXSetter:e,translateYSetter:e});w(a,q)})}}else b=d;b.appendChild(e);c.added=!0;c.alignOnAdd&&c.htmlUpdateTransform();return c});return c}})})(M);(function(a){function E(){var n=a.defaultOptions.global,l=r.moment;if(n.timezone){if(l)return function(a){return-l.tz(a,
n.timezone).utcOffset()};a.error(25)}return n.useUTC&&n.getTimezoneOffset}function D(){var n=a.defaultOptions.global,f,u=n.useUTC,e=u?"getUTC":"get",h=u?"setUTC":"set",m="Minutes Hours Day Date Month FullYear".split(" "),d=m.concat(["Milliseconds","Seconds"]);a.Date=f=n.Date||r.Date;f.hcTimezoneOffset=u&&n.timezoneOffset;f.hcGetTimezoneOffset=E();f.hcHasTimeZone=!(!f.hcTimezoneOffset&&!f.hcGetTimezoneOffset);f.hcMakeTime=function(a,b,d,e,h,m){var c;u?(c=f.UTC.apply(0,arguments),c+=p(c)):c=(new f(a,
b,l(d,1),l(e,0),l(h,0),l(m,0))).getTime();return c};for(n=0;n<m.length;n++)f["hcGet"+m[n]]=e+m[n];for(n=0;n<d.length;n++)f["hcSet"+d[n]]=h+d[n]}var H=a.color,p=a.getTZOffset,f=a.merge,l=a.pick,r=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",
backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},
itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",
second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:H("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,
style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(n){a.defaultOptions=f(!0,a.defaultOptions,n);D();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;D()})(M);(function(a){var E=
a.correctFloat,D=a.defined,H=a.destroyObjectProperties,p=a.isNumber,f=a.merge,l=a.pick,r=a.deg2rad;a.Tick=function(a,l,f,e){this.axis=a;this.pos=l;this.type=f||"";this.isNewLabel=this.isNew=!0;f||e||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,w=a.options,u=a.chart,e=a.categories,h=a.names,m=this.pos,d=w.labels,c=a.tickPositions,b=m===c[0],k=m===c[c.length-1],h=e?l(e[m],h[m],m):m,e=this.label,c=c.info,z;a.isDatetimeAxis&&c&&(z=w.dateTimeLabelFormats[c.higherRanks[m]||c.unitName]);
this.isFirst=b;this.isLast=k;w=a.labelFormatter.call({axis:a,chart:u,isFirst:b,isLast:k,dateTimeLabelFormat:z,value:a.isLog?E(a.lin2log(h)):h,pos:m});D(e)?e&&e.attr({text:w}):(this.labelLength=(this.label=e=D(w)&&d.enabled?u.renderer.text(w,0,0,d.useHTML).css(f(d.style)).add(a.labelGroup):null)&&e.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var f=this.axis,n=f.options.labels,e=a.x,
h=f.chart.chartWidth,m=f.chart.spacing,d=l(f.labelLeft,Math.min(f.pos,m[3])),m=l(f.labelRight,Math.max(f.isRadial?0:f.pos+f.len,h-m[1])),c=this.label,b=this.rotation,k={left:0,center:.5,right:1}[f.labelAlign||c.attr("align")],z=c.getBBox().width,B=f.getSlotWidth(),I=B,x=1,p,t={};if(b||!1===n.overflow)0>b&&e-k*z<d?p=Math.round(e/Math.cos(b*r)-d):0<b&&e+k*z>m&&(p=Math.round((h-e)/Math.cos(b*r)));else if(h=e+(1-k)*z,e-k*z<d?I=a.x+I*(1-k)-d:h>m&&(I=m-a.x+I*k,x=-1),I=Math.min(B,I),I<B&&"center"===f.labelAlign&&
(a.x+=x*(B-I-k*(B-Math.min(z,I)))),z>I||f.autoRotation&&(c.styles||{}).width)p=I;p&&(t.width=p,(n.style||{}).textOverflow||(t.textOverflow="ellipsis"),c.css(t))},getPosition:function(a,f,l,e){var h=this.axis,m=h.chart,d=e&&m.oldChartHeight||m.chartHeight;return{x:a?h.translate(f+l,null,null,e)+h.transB:h.left+h.offset+(h.opposite?(e&&m.oldChartWidth||m.chartWidth)-h.right-h.left:0),y:a?d-h.bottom+h.offset-(h.opposite?h.height:0):d-h.translate(f+l,null,null,e)-h.transB}},getLabelPosition:function(a,
f,l,e,h,m,d,c){var b=this.axis,k=b.transA,z=b.reversed,B=b.staggerLines,n=b.tickRotCorr||{x:0,y:0},x=h.y,u=e||b.reserveSpaceDefault?0:-b.labelOffset*("center"===b.labelAlign?.5:1);D(x)||(x=0===b.side?l.rotation?-8:-l.getBBox().height:2===b.side?n.y+8:Math.cos(l.rotation*r)*(n.y-l.getBBox(!1,0).height/2));a=a+h.x+u+n.x-(m&&e?m*k*(z?-1:1):0);f=f+x-(m&&!e?m*k*(z?1:-1):0);B&&(l=d/(c||1)%B,b.opposite&&(l=B-l-1),f+=b.labelOffset/B*l);return{x:a,y:Math.round(f)}},getMarkPath:function(a,f,l,e,h,m){return m.crispLine(["M",
a,f,"L",a+(h?0:-l),f+(h?l:0)],e)},renderGridLine:function(a,f,l){var e=this.axis,h=e.options,m=this.gridLine,d={},c=this.pos,b=this.type,k=e.tickmarkOffset,z=e.chart.renderer,B=b?b+"Grid":"grid",n=h[B+"LineWidth"],x=h[B+"LineColor"],h=h[B+"LineDashStyle"];m||(d.stroke=x,d["stroke-width"]=n,h&&(d.dashstyle=h),b||(d.zIndex=1),a&&(d.opacity=0),this.gridLine=m=z.path().attr(d).addClass("highcharts-"+(b?b+"-":"")+"grid-line").add(e.gridGroup));if(!a&&m&&(a=e.getPlotLinePath(c+k,m.strokeWidth()*l,a,!0)))m[this.isNew?
"attr":"animate"]({d:a,opacity:f})},renderMark:function(a,f,u){var e=this.axis,h=e.options,m=e.chart.renderer,d=this.type,c=d?d+"Tick":"tick",b=e.tickSize(c),k=this.mark,z=!k,B=a.x;a=a.y;var n=l(h[c+"Width"],!d&&e.isXAxis?1:0),h=h[c+"Color"];b&&(e.opposite&&(b[0]=-b[0]),z&&(this.mark=k=m.path().addClass("highcharts-"+(d?d+"-":"")+"tick").add(e.axisGroup),k.attr({stroke:h,"stroke-width":n})),k[z?"attr":"animate"]({d:this.getMarkPath(B,a,b[0],k.strokeWidth()*u,e.horiz,m),opacity:f}))},renderLabel:function(a,
f,u,e){var h=this.axis,m=h.horiz,d=h.options,c=this.label,b=d.labels,k=b.step,h=h.tickmarkOffset,z=!0,B=a.x;a=a.y;c&&p(B)&&(c.xy=a=this.getLabelPosition(B,a,c,m,b,h,e,k),this.isFirst&&!this.isLast&&!l(d.showFirstLabel,1)||this.isLast&&!this.isFirst&&!l(d.showLastLabel,1)?z=!1:!m||b.step||b.rotation||f||0===u||this.handleOverflow(a),k&&e%k&&(z=!1),z&&p(a.y)?(a.opacity=u,c[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(c.attr("y",-9999),this.isNewLabel=!0))},render:function(a,f,u){var e=
this.axis,h=e.horiz,m=this.getPosition(h,this.pos,e.tickmarkOffset,f),d=m.x,c=m.y,e=h&&d===e.pos+e.len||!h&&c===e.pos?-1:1;u=l(u,1);this.isActive=!0;this.renderGridLine(f,u,e);this.renderMark(m,u,e);this.renderLabel(m,f,u,a);this.isNew=!1},destroy:function(){H(this,this.axis)}}})(M);var V=function(a){var E=a.addEvent,D=a.animObject,H=a.arrayMax,p=a.arrayMin,f=a.color,l=a.correctFloat,r=a.defaultOptions,n=a.defined,w=a.deg2rad,u=a.destroyObjectProperties,e=a.each,h=a.extend,m=a.fireEvent,d=a.format,
c=a.getMagnitude,b=a.grep,k=a.inArray,z=a.isArray,B=a.isNumber,I=a.isString,x=a.merge,K=a.normalizeTickInterval,t=a.objectEach,C=a.pick,N=a.removeEvent,q=a.splat,A=a.syncTimeout,F=a.Tick,G=function(){this.init.apply(this,arguments)};a.extend(G.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},
x:0},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,
minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],
x:0},title:{rotation:0}},init:function(a,b){var g=b.isX,v=this;v.chart=a;v.horiz=a.inverted&&!v.isZAxis?!g:g;v.isXAxis=g;v.coll=v.coll||(g?"xAxis":"yAxis");v.opposite=b.opposite;v.side=b.side||(v.horiz?v.opposite?0:2:v.opposite?1:3);v.setOptions(b);var c=this.options,d=c.type;v.labelFormatter=c.labels.formatter||v.defaultLabelFormatter;v.userOptions=b;v.minPixelPadding=0;v.reversed=c.reversed;v.visible=!1!==c.visible;v.zoomEnabled=!1!==c.zoomEnabled;v.hasNames="category"===d||!0===c.categories;v.categories=
c.categories||v.hasNames;v.names=v.names||[];v.plotLinesAndBandsGroups={};v.isLog="logarithmic"===d;v.isDatetimeAxis="datetime"===d;v.positiveValuesOnly=v.isLog&&!v.allowNegativeLog;v.isLinked=n(c.linkedTo);v.ticks={};v.labelEdge=[];v.minorTicks={};v.plotLinesAndBands=[];v.alternateBands={};v.len=0;v.minRange=v.userMinRange=c.minRange||c.maxZoom;v.range=c.range;v.offset=c.offset||0;v.stacks={};v.oldStacks={};v.stacksTouched=0;v.max=null;v.min=null;v.crosshair=C(c.crosshair,q(a.options.tooltip.crosshairs)[g?
0:1],!1);b=v.options.events;-1===k(v,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,v):a.axes.push(v),a[v.coll].push(v));v.series=v.series||[];a.inverted&&!v.isZAxis&&g&&void 0===v.reversed&&(v.reversed=!0);t(b,function(a,g){E(v,g,a)});v.lin2log=c.linearToLogConverter||v.lin2log;v.isLog&&(v.val2lin=v.log2lin,v.lin2val=v.lin2log)},setOptions:function(a){this.options=x(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,
this.defaultLeftAxisOptions][this.side],x(r[this.coll],a))},defaultLabelFormatter:function(){var g=this.axis,b=this.value,c=g.categories,k=this.dateTimeLabelFormat,e=r.lang,q=e.numericSymbols,e=e.numericSymbolMagnitude||1E3,h=q&&q.length,m,z=g.options.labels.format,g=g.isLog?Math.abs(b):g.tickInterval;if(z)m=d(z,this);else if(c)m=b;else if(k)m=a.dateFormat(k,b);else if(h&&1E3<=g)for(;h--&&void 0===m;)c=Math.pow(e,h+1),g>=c&&0===10*b%c&&null!==q[h]&&0!==b&&(m=a.numberFormat(b/c,-1)+q[h]);void 0===
m&&(m=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return m},getSeriesExtremes:function(){var a=this,v=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();e(a.series,function(g){if(g.visible||!v.options.chart.ignoreHiddenSeries){var c=g.options,d=c.threshold,k;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=d&&(d=null);if(a.isXAxis)c=g.xData,c.length&&(g=p(c),k=H(c),B(g)||g instanceof Date||(c=b(c,B),
g=p(c)),a.dataMin=Math.min(C(a.dataMin,c[0],g),g),a.dataMax=Math.max(C(a.dataMax,c[0],k),k));else if(g.getExtremes(),k=g.dataMax,g=g.dataMin,n(g)&&n(k)&&(a.dataMin=Math.min(C(a.dataMin,g),g),a.dataMax=Math.max(C(a.dataMax,k),k)),n(d)&&(a.threshold=d),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,c,d,k,e){var g=this.linkedParent||this,v=1,q=0,h=d?g.oldTransA:g.transA;d=d?g.oldMin:g.min;var m=g.minPixelPadding;k=(g.isOrdinal||g.isBroken||g.isLog&&k)&&g.lin2val;
h||(h=g.transA);c&&(v*=-1,q=g.len);g.reversed&&(v*=-1,q-=v*(g.sector||g.len));b?(a=(a*v+q-m)/h+d,k&&(a=g.lin2val(a))):(k&&(a=g.val2lin(a)),a=B(d)?v*(a-d)*h+q+v*m+(B(e)?h*e:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,k){var g=this.chart,v=this.left,q=this.top,e,h,m=c&&g.oldChartHeight||g.chartHeight,z=c&&g.oldChartWidth||
g.chartWidth,A;e=this.transB;var t=function(a,g,b){if(a<g||a>b)d?a=Math.min(Math.max(g,a),b):A=!0;return a};k=C(k,this.translate(a,null,null,c));a=c=Math.round(k+e);e=h=Math.round(m-k-e);B(k)?this.horiz?(e=q,h=m-this.bottom,a=c=t(a,v,v+this.width)):(a=v,c=z-this.right,e=h=t(e,q,q+this.height)):(A=!0,d=!1);return A&&!d?null:g.renderer.crispLine(["M",a,e,"L",c,h],b||1)},getLinearTickPositions:function(a,b,c){var g,v=l(Math.floor(b/a)*a);c=l(Math.ceil(c/a)*a);var d=[],k;l(v+a)===v&&(k=20);if(this.single)return[b];
for(b=v;b<=c;){d.push(b);b=l(b+a,k);if(b===g)break;g=b}return d},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?C(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,c=a.tickPositions,d=a.minorTickInterval,k=[],q=a.pointRangePadding||0,h=a.min-q,q=a.max+q,m=q-h;if(m&&m/d<a.len/3)if(a.isLog)e(this.paddedTicks,function(g,b,v){b&&k.push.apply(k,a.getLogTickPositions(d,v[b-1],v[b],!0))});else if(a.isDatetimeAxis&&
"auto"===this.getMinorTickInterval())k=k.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),h,q,b.startOfWeek));else for(b=h+(c[0]-h)%d;b<=q&&b!==k[0];b+=d)k.push(b);0!==k.length&&a.trimTicks(k);return k},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,k,q,h,m,z,A,t;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(n(a.min)||n(a.max)?this.minRange=null:(e(this.series,function(a){z=a.xData;for(h=A=a.xIncrement?1:z.length-1;0<h;h--)if(m=z[h]-z[h-1],void 0===q||m<q)q=m}),
this.minRange=Math.min(5*q,this.dataMax-this.dataMin)));c-b<this.minRange&&(k=this.dataMax-this.dataMin>=this.minRange,t=this.minRange,d=(t-c+b)/2,d=[b-d,C(a.min,b-d)],k&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=H(d),c=[b+t,C(a.max,b+t)],k&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=p(c),c-b<t&&(d[0]=c-t,d[1]=C(a.min,c-t),b=H(d)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:e(this.series,function(g){var b=g.closestPointRange,v=g.visible||
!g.chart.options.chart.ignoreHiddenSeries;!g.noSharedTooltip&&n(b)&&v&&(a=n(a)?Math.min(a,b):b)});return a},nameToX:function(a){var g=z(this.categories),b=g?this.categories:this.names,c=a.options.x,d;a.series.requireSorting=!1;n(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():k(a.name,b));-1===c?g||(d=b.length):d=c;void 0!==d&&(this.names[d]=a.name);return d},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,e(this.series||[],
function(g){g.xIncrement=null;if(!g.points||g.isDirtyData)g.processData(),g.generatePoints();e(g.points,function(b,v){var c;b.options&&(c=a.nameToX(b),void 0!==c&&c!==b.x&&(b.x=c,g.xData[v]=c))})}))},setAxisTranslation:function(a){var g=this,b=g.max-g.min,c=g.axisPointRange||0,d,k=0,q=0,h=g.linkedParent,m=!!g.categories,z=g.transA,A=g.isXAxis;if(A||m||c)d=g.getClosest(),h?(k=h.minPointOffset,q=h.pointRangePadding):e(g.series,function(a){var b=m?1:A?C(a.options.pointRange,d,0):g.axisPointRange||0;
a=a.options.pointPlacement;c=Math.max(c,b);g.single||(k=Math.max(k,I(a)?0:b/2),q=Math.max(q,"on"===a?0:b))}),h=g.ordinalSlope&&d?g.ordinalSlope/d:1,g.minPointOffset=k*=h,g.pointRangePadding=q*=h,g.pointRange=Math.min(c,b),A&&(g.closestPointRange=d);a&&(g.oldTransA=z);g.translationSlope=g.transA=z=g.options.staticScale||g.len/(b+q||1);g.transB=g.horiz?g.left:g.bottom;g.minPixelPadding=z*k},minFromRange:function(){return this.max-this.range},setTickInterval:function(g){var b=this,d=b.chart,k=b.options,
q=b.isLog,h=b.log2lin,z=b.isDatetimeAxis,A=b.isXAxis,t=b.isLinked,x=k.maxPadding,f=k.minPadding,F=k.tickInterval,u=k.tickPixelInterval,G=b.categories,p=b.threshold,I=b.softThreshold,r,w,N,D;z||G||t||this.getTickAmount();N=C(b.userMin,k.min);D=C(b.userMax,k.max);t?(b.linkedParent=d[b.coll][k.linkedTo],d=b.linkedParent.getExtremes(),b.min=C(d.min,d.dataMin),b.max=C(d.max,d.dataMax),k.type!==b.linkedParent.options.type&&a.error(11,1)):(!I&&n(p)&&(b.dataMin>=p?(r=p,f=0):b.dataMax<=p&&(w=p,x=0)),b.min=
C(N,r,b.dataMin),b.max=C(D,w,b.dataMax));q&&(b.positiveValuesOnly&&!g&&0>=Math.min(b.min,C(b.dataMin,b.min))&&a.error(10,1),b.min=l(h(b.min),15),b.max=l(h(b.max),15));b.range&&n(b.max)&&(b.userMin=b.min=N=Math.max(b.dataMin,b.minFromRange()),b.userMax=D=b.max,b.range=null);m(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(G||b.axisPointRange||b.usePercentage||t)&&n(b.min)&&n(b.max)&&(h=b.max-b.min)&&(!n(N)&&f&&(b.min-=h*f),!n(D)&&x&&(b.max+=h*x));B(k.softMin)&&!B(b.userMin)&&
(b.min=Math.min(b.min,k.softMin));B(k.softMax)&&!B(b.userMax)&&(b.max=Math.max(b.max,k.softMax));B(k.floor)&&(b.min=Math.max(b.min,k.floor));B(k.ceiling)&&(b.max=Math.min(b.max,k.ceiling));I&&n(b.dataMin)&&(p=p||0,!n(N)&&b.min<p&&b.dataMin>=p?b.min=p:!n(D)&&b.max>p&&b.dataMax<=p&&(b.max=p));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:t&&!F&&u===b.linkedParent.options.tickPixelInterval?F=b.linkedParent.tickInterval:C(F,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):
void 0,G?1:(b.max-b.min)*u/Math.max(b.len,u));A&&!g&&e(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!F&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));g=C(k.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!F&&b.tickInterval<g&&(b.tickInterval=g);z||q||F||(b.tickInterval=K(b.tickInterval,
null,c(b.tickInterval),C(k.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions;b=this.getMinorTickInterval();var d=a.tickPositioner,k=a.startOnTick,q=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/
5:b;this.single=this.min===this.max&&n(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=
[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max])))&&(this.tickPositions=b=d);this.paddedTicks=b.slice(0);this.trimTicks(b,k,q);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),c||d||this.adjustTickAmount())},trimTicks:function(a,b,c){var g=a[0],d=a[a.length-1],k=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==g)this.min=g;else for(;this.min-k>a[0];)a.shift();if(c)this.max=d;else for(;this.max+k<a[a.length-1];)a.pop();
0===a.length&&n(g)&&!this.options.tickPositions&&a.push((d+g)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||!1===c.alignTicks||this.isLog||e(this.chart[this.coll],function(g){var c=g.options,c=[g.horiz?c.left:c.top,c.width,c.height,c.pane].join();g.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!n(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&
a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,k=b&&b.length,q=C(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(k<c){for(;b.length<c;)b.length%2||this.min===q?b.push(l(b[b.length-1]+a)):b.unshift(l(b[0]-a));this.transA*=(k-1)/(c-1);this.min=b[0];this.max=b[b.length-1]}else k>c&&(this.tickInterval*=
2,this.setTickPositions());if(n(d)){for(a=c=b.length;a--;)(3===d&&1===a%2||2>=d&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;e(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&
this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,k){var g=this,q=g.chart;c=C(c,!0);e(g.series,function(a){delete a.kdTree});k=h(k,{min:a,max:b});m(g,"setExtremes",k,function(){g.userMin=a;g.userMax=b;g.eventArgs=k;c&&q.redraw(d)})},zoom:function(a,b){var g=this.dataMin,
c=this.dataMax,d=this.options,k=Math.min(g,C(d.min,g)),d=Math.max(c,C(d.max,c));if(a!==this.min||b!==this.max)this.allowZoomOutside||(n(g)&&(a<k&&(a=k),a>d&&(a=d)),n(c)&&(b<k&&(b=k),b>d&&(b=d))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,c=this.options,d=c.offsets||[0,0,0,0],k=this.horiz,q=this.width=Math.round(a.relativeLength(C(c.width,b.plotWidth-d[3]+d[1]),b.plotWidth)),e=this.height=Math.round(a.relativeLength(C(c.height,
b.plotHeight-d[0]+d[2]),b.plotHeight)),h=this.top=Math.round(a.relativeLength(C(c.top,b.plotTop+d[0]),b.plotHeight,b.plotTop)),c=this.left=Math.round(a.relativeLength(C(c.left,b.plotLeft+d[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-e-h;this.right=b.chartWidth-q-c;this.len=Math.max(k?q:e,0);this.pos=k?c:h},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?l(b(this.min)):this.min,max:a?l(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,
userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,g=this.lin2log,c=b?g(this.min):this.min,b=b?g(this.max):this.max;null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(C(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,g=b[a+"Length"],c=C(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&g)return"inside"===b[a+"Position"]&&(g=-g),[g,c]},labelMetrics:function(){var a=
this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,d=c,k=this.len/(((this.categories?1:0)+this.max-this.min)/c),q,h=a.rotation,m=this.labelMetrics(),z,A=Number.MAX_VALUE,t,x=function(a){a/=k||1;a=1<a?Math.ceil(a):1;return a*c};b?(t=!a.staggerLines&&!a.step&&(n(h)?[h]:k<C(a.autoRotationLimit,
80)&&a.autoRotation))&&e(t,function(a){var b;if(a===h||a&&-90<=a&&90>=a)z=x(Math.abs(m.h/Math.sin(w*a))),b=z+Math.abs(a/360),b<A&&(A=b,q=a,d=z)}):a.step||(d=x(m.h));this.autoRotation=t;this.labelRotation=C(q,h);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),k=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/d||!b&&(c.style&&parseInt(c.style.width,10)||k&&k-a.spacing[3]||
.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,k=this.options.labels,q=this.horiz,h=this.getSlotWidth(),m=Math.max(1,Math.round(h-2*(k.padding||5))),z={},A=this.labelMetrics(),t=k.style&&k.style.textOverflow,f,F=0,l,B;I(k.rotation)||(z.rotation=k.rotation||0);e(c,function(a){(a=d[a])&&a.labelLength>F&&(F=a.labelLength)});this.maxLabelLength=F;if(this.autoRotation)F>m&&F>A.h?z.rotation=this.labelRotation:this.labelRotation=0;else if(h&&
(f={width:m+"px"},!t))for(f.textOverflow="clip",l=c.length;!q&&l--;)if(B=c[l],m=d[B].label)m.styles&&"ellipsis"===m.styles.textOverflow?m.css({textOverflow:"clip"}):d[B].labelLength>h&&m.css({width:h+"px"}),m.getBBox().height>this.len/c.length-(A.h-A.f)&&(m.specCss={textOverflow:"ellipsis"});z.rotation&&(f={width:(F>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},t||(f.textOverflow="ellipsis"));if(this.labelAlign=k.align||this.autoLabelAlign(this.labelRotation))z.align=this.labelAlign;e(c,
function(a){var b=(a=d[a])&&a.label;b&&(b.attr(z),f&&b.css(x(f,b.specCss)),delete b.specCss,a.rotation=z.rotation)});this.tickRotCorr=b.rotCorr(A.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||n(this.min)&&n(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,g=this.horiz,c=this.opposite,d=this.options.title,k;this.axisTitle||((k=d.textAlign)||(k=(g?{low:"left",middle:"center",high:"right"}:{low:c?"right":
"left",middle:"center",high:c?"left":"right"})[d.align]),this.axisTitle=b.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:k}).addClass("highcharts-axis-title").css(d.style).add(this.axisGroup),this.axisTitle.isNew=!0);d.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new F(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,k=a.tickPositions,
q=a.ticks,h=a.horiz,m=a.side,z=b.inverted&&!a.isZAxis?[1,0,3,2][m]:m,A,x,f=0,F,l=0,B=d.title,u=d.labels,G=0,p=b.axisOffset,b=b.clipOffset,I=[-1,1,1,-1][m],r=d.className,w=a.axisParent,K=this.tickSize("tick");A=a.hasData();a.showAxis=x=A||C(d.showEmpty,!0);a.staggerLines=a.horiz&&u.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(r||"")).add(w),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+
this.coll.toLowerCase()+" "+(r||"")).add(w),a.labelGroup=c.g("axis-labels").attr({zIndex:u.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(r||"")).add(w));A||a.isLinked?(e(k,function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),a.reserveSpaceDefault=0===m||2===m||{1:"left",3:"right"}[m]===a.labelAlign,C(u.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&e(k,function(a){G=Math.max(q[a].getLabelSize(),G)}),a.staggerLines&&(G*=a.staggerLines),a.labelOffset=G*
(a.opposite?-1:1)):t(q,function(a,b){a.destroy();delete q[b]});B&&B.text&&!1!==B.enabled&&(a.addTitle(x),x&&!1!==B.reserveSpace&&(a.titleOffset=f=a.axisTitle.getBBox()[h?"height":"width"],F=B.offset,l=n(F)?0:C(B.margin,h?5:10)));a.renderLine();a.offset=I*C(d.offset,p[m]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===m?-a.labelMetrics().h:2===m?a.tickRotCorr.y:0;l=Math.abs(G)+l;G&&(l=l-c+I*(h?C(u.y,a.tickRotCorr.y+8*I):u.x));a.axisTitleMargin=C(F,l);p[m]=Math.max(p[m],a.axisTitleMargin+f+I*a.offset,
l,A&&k.length&&K?K[0]+I*a.offset:0);d=d.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[z]=Math.max(b[z],d)},getLinePath:function(a){var b=this.chart,c=this.opposite,g=this.offset,d=this.horiz,k=this.left+(c?this.width:0)+g,g=b.chartHeight-this.bottom-(c?this.height:0)+g;c&&(a*=-1);return b.renderer.crispLine(["M",d?this.left:k,d?g:this.top,"L",d?b.chartWidth-this.right:k,d?g:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,k=this.options.title,q=a?b:c,e=this.opposite,h=this.offset,m=k.x||0,z=k.y||0,A=this.axisTitle,t=this.chart.renderer.fontMetrics(k.style&&k.style.fontSize,A),A=Math.max(A.getBBox(null,0).height-t.h-1,0),d={low:q+(a?0:d),middle:q+d/2,high:q+(a?d:0)}[k.align],b=(a?c+this.height:b)+(a?1:-1)*(e?-1:1)*this.axisTitleMargin+[-A,
A,t.f,-A][this.side];return{x:a?d+m:b+(e?this.width:0)+h+m,y:a?b+z-(e?this.height:0)+h:d+z}},renderMinorTick:function(a){var b=this.chart.hasRendered&&B(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new F(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,g=this.ticks,d=this.chart.hasRendered&&B(this.oldMin);if(!c||a>=this.min&&a<=this.max)g[a]||(g[a]=new F(this,a)),d&&g[a].isNew&&g[a].render(b,!0,.1),g[a].render(b)},render:function(){var b=
this,c=b.chart,d=b.options,k=b.isLog,q=b.lin2log,h=b.isLinked,m=b.tickPositions,z=b.axisTitle,x=b.ticks,f=b.minorTicks,l=b.alternateBands,C=d.stackLabels,n=d.alternateGridColor,u=b.tickmarkOffset,G=b.axisLine,p=b.showAxis,I=D(c.renderer.globalAnimation),r,w;b.labelEdge.length=0;b.overlap=!1;e([x,f,l],function(a){t(a,function(a){a.isActive=!1})});if(b.hasData()||h)b.minorTickInterval&&!b.categories&&e(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),m.length&&(e(m,function(a,c){b.renderTick(a,
c)}),u&&(0===b.min||b.single)&&(x[-1]||(x[-1]=new F(b,-1,null,!0)),x[-1].render(-1))),n&&e(m,function(d,g){w=void 0!==m[g+1]?m[g+1]+u:b.max-u;0===g%2&&d<b.max&&w<=b.max+(c.polar?-u:u)&&(l[d]||(l[d]=new a.PlotLineOrBand(b)),r=d+u,l[d].options={from:k?q(r):r,to:k?q(w):w,color:n},l[d].render(),l[d].isActive=!0)}),b._addedPlotLB||(e((d.plotLines||[]).concat(d.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);e([x,f,l],function(a){var b,d=[],g=I.duration;t(a,function(a,b){a.isActive||
(a.render(b,!1,0),a.isActive=!1,d.push(b))});A(function(){for(b=d.length;b--;)a[d[b]]&&!a[d[b]].isActive&&(a[d[b]].destroy(),delete a[d[b]])},a!==l&&c.hasRendered&&g?g:0)});G&&(G[G.isPlaced?"animate":"attr"]({d:this.getLinePath(G.strokeWidth())}),G.isPlaced=!0,G[p?"show":"hide"](!0));z&&p&&(d=b.getTitlePosition(),B(d.y)?(z[z.isNew?"attr":"animate"](d),z.isNew=!1):(z.attr("y",-9999),z.isNew=!0));C&&C.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),e(this.plotLinesAndBands,
function(a){a.render()}));e(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,c=b.stacks,d=b.plotLinesAndBands,g;a||N(b);t(c,function(a,b){u(a);c[b]=null});e([b.ticks,b.minorTicks,b.alternateBands],function(a){u(a)});if(d)for(a=d.length;a--;)d[a].destroy();e("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(g in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[g]=
b.plotLinesAndBandsGroups[g].destroy();t(b,function(a,c){-1===k(c,b.keepProps)&&delete b[c]})},drawCrosshair:function(a,b){var c,d=this.crosshair,g=C(d.snap,!0),k,q=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(n(b)||!g)?(g?n(b)&&(k=this.isXAxis?b.plotX:this.len-b.plotY):k=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),n(k)&&(c=this.getPlotLinePath(b&&(this.isXAxis?b.x:C(b.stackY,b.y)),null,null,null,k)||null),n(c)?(b=this.categories&&!this.isRadial,q||(this.cross=
q=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+d.className).attr({zIndex:C(d.zIndex,2)}).add(),q.attr({stroke:d.color||(b?f("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":C(d.width,1)}).css({"pointer-events":"none"}),d.dashStyle&&q.attr({dashstyle:d.dashStyle})),q.show().attr({d:c}),b&&!d.width&&q.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&
this.cross.hide()}});return a.Axis=G}(M);(function(a){var E=a.Axis,D=a.Date,H=a.dateFormat,p=a.defaultOptions,f=a.defined,l=a.each,r=a.extend,n=a.getMagnitude,w=a.getTZOffset,u=a.normalizeTickInterval,e=a.pick,h=a.timeUnits;E.prototype.getTimeTicks=function(a,d,c,b){var k=[],m={},B=p.global.useUTC,n,x=new D(d-Math.max(w(d),w(c))),u=D.hcMakeTime,t=a.unitRange,C=a.count,N,q;if(f(d)){x[D.hcSetMilliseconds](t>=h.second?0:C*Math.floor(x.getMilliseconds()/C));if(t>=h.second)x[D.hcSetSeconds](t>=h.minute?
0:C*Math.floor(x.getSeconds()/C));if(t>=h.minute)x[D.hcSetMinutes](t>=h.hour?0:C*Math.floor(x[D.hcGetMinutes]()/C));if(t>=h.hour)x[D.hcSetHours](t>=h.day?0:C*Math.floor(x[D.hcGetHours]()/C));if(t>=h.day)x[D.hcSetDate](t>=h.month?1:C*Math.floor(x[D.hcGetDate]()/C));t>=h.month&&(x[D.hcSetMonth](t>=h.year?0:C*Math.floor(x[D.hcGetMonth]()/C)),n=x[D.hcGetFullYear]());if(t>=h.year)x[D.hcSetFullYear](n-n%C);if(t===h.week)x[D.hcSetDate](x[D.hcGetDate]()-x[D.hcGetDay]()+e(b,1));n=x[D.hcGetFullYear]();b=x[D.hcGetMonth]();
var A=x[D.hcGetDate](),F=x[D.hcGetHours]();d=x.getTime();D.hcHasTimeZone&&(q=(!B||!!D.hcGetTimezoneOffset)&&(c-d>4*h.month||w(d)!==w(c)),N=w(x),x=new D(d+N));B=x.getTime();for(d=1;B<c;)k.push(B),B=t===h.year?u(n+d*C,0):t===h.month?u(n,b+d*C):!q||t!==h.day&&t!==h.week?q&&t===h.hour?u(n,b,A,F+d*C,0,0,N)-N:B+t*C:u(n,b,A+d*C*(t===h.day?1:7)),d++;k.push(B);t<=h.hour&&1E4>k.length&&l(k,function(a){0===a%18E5&&"000000000"===H("%H%M%S%L",a)&&(m[a]="day")})}k.info=r(a,{higherRanks:m,totalRange:t*C});return k};
E.prototype.normalizeTimeTickInterval=function(a,d){var c=d||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];d=c[c.length-1];var b=h[d[0]],k=d[1],e;for(e=0;e<c.length&&!(d=c[e],b=h[d[0]],k=d[1],c[e+1]&&a<=(b*k[k.length-1]+h[c[e+1][0]])/2);e++);b===h.year&&a<5*b&&(k=[1,2,5]);a=u(a/b,k,"year"===d[0]?Math.max(n(a/b),1):1);return{unitRange:b,count:a,unitName:d[0]}}})(M);
(function(a){var E=a.Axis,D=a.getMagnitude,H=a.map,p=a.normalizeTickInterval,f=a.pick;E.prototype.getLogTickPositions=function(a,r,n,w){var l=this.options,e=this.len,h=this.lin2log,m=this.log2lin,d=[];w||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),d=this.getLinearTickPositions(a,r,n);else if(.08<=a)for(var e=Math.floor(r),c,b,k,z,B,l=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];e<n+1&&!B;e++)for(b=l.length,c=0;c<b&&!B;c++)k=m(h(e)*l[c]),k>r&&(!w||z<=n)&&void 0!==z&&d.push(z),z>n&&
(B=!0),z=k;else r=h(r),n=h(n),a=w?this.getMinorTickInterval():l.tickInterval,a=f("auto"===a?null:a,this._minorAutoInterval,l.tickPixelInterval/(w?5:1)*(n-r)/((w?e/this.tickPositions.length:e)||1)),a=p(a,null,D(a)),d=H(this.getLinearTickPositions(a,r,n),m),w||(this._minorAutoInterval=a/5);w||(this.tickInterval=a);return d};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,a)}})(M);(function(a,E){var D=a.arrayMax,H=a.arrayMin,p=a.defined,
f=a.destroyObjectProperties,l=a.each,r=a.erase,n=a.merge,w=a.pick;a.PlotLineOrBand=function(a,e){this.axis=a;e&&(this.options=e,this.id=e.id)};a.PlotLineOrBand.prototype={render:function(){var f=this,e=f.axis,h=e.horiz,m=f.options,d=m.label,c=f.label,b=m.to,k=m.from,z=m.value,l=p(k)&&p(b),r=p(z),x=f.svgElem,K=!x,t=[],C=m.color,N=w(m.zIndex,0),q=m.events,t={"class":"highcharts-plot-"+(l?"band ":"line ")+(m.className||"")},A={},F=e.chart.renderer,G=l?"bands":"lines",g=e.log2lin;e.isLog&&(k=g(k),b=g(b),
z=g(z));r?(t={stroke:C,"stroke-width":m.width},m.dashStyle&&(t.dashstyle=m.dashStyle)):l&&(C&&(t.fill=C),m.borderWidth&&(t.stroke=m.borderColor,t["stroke-width"]=m.borderWidth));A.zIndex=N;G+="-"+N;(C=e.plotLinesAndBandsGroups[G])||(e.plotLinesAndBandsGroups[G]=C=F.g("plot-"+G).attr(A).add());K&&(f.svgElem=x=F.path().attr(t).add(C));if(r)t=e.getPlotLinePath(z,x.strokeWidth());else if(l)t=e.getPlotBandPath(k,b,m);else return;K&&t&&t.length?(x.attr({d:t}),q&&a.objectEach(q,function(a,b){x.on(b,function(a){q[b].apply(f,
[a])})})):x&&(t?(x.show(),x.animate({d:t})):(x.hide(),c&&(f.label=c=c.destroy())));d&&p(d.text)&&t&&t.length&&0<e.width&&0<e.height&&!t.flat?(d=n({align:h&&l&&"center",x:h?!l&&4:10,verticalAlign:!h&&l&&"middle",y:h?l?16:10:l?6:-4,rotation:h&&!l&&90},d),this.renderLabel(d,t,l,N)):c&&c.hide();return f},renderLabel:function(a,e,h,m){var d=this.label,c=this.axis.chart.renderer;d||(d={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(h?"band":"line")+"-label "+(a.className||"")},
d.zIndex=m,this.label=d=c.text(a.text,0,0,a.useHTML).attr(d).add(),d.css(a.style));m=e.xBounds||[e[1],e[4],h?e[6]:e[1]];e=e.yBounds||[e[2],e[5],h?e[7]:e[2]];h=H(m);c=H(e);d.align(a,!1,{x:h,y:c,width:D(m)-h,height:D(e)-c});d.show()},destroy:function(){r(this.axis.plotLinesAndBands,this);delete this.axis;f(this)}};a.extend(E.prototype,{getPlotBandPath:function(a,e){var h=this.getPlotLinePath(e,null,null,!0),m=this.getPlotLinePath(a,null,null,!0),d=[],c=this.horiz,b=1,k;a=a<this.min&&e<this.min||a>this.max&&
e>this.max;if(m&&h)for(a&&(k=m.toString()===h.toString(),b=0),a=0;a<m.length;a+=6)c&&h[a+1]===m[a+1]?(h[a+1]+=b,h[a+4]+=b):c||h[a+2]!==m[a+2]||(h[a+2]+=b,h[a+5]+=b),d.push("M",m[a+1],m[a+2],"L",m[a+4],m[a+5],h[a+4],h[a+5],h[a+1],h[a+2],"z"),d.flat=k;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(f,e){var h=(new a.PlotLineOrBand(this,f)).render(),m=this.userOptions;h&&(e&&
(m[e]=m[e]||[],m[e].push(f)),this.plotLinesAndBands.push(h));return h},removePlotBandOrLine:function(a){for(var e=this.plotLinesAndBands,h=this.options,m=this.userOptions,d=e.length;d--;)e[d].id===a&&e[d].destroy();l([h.plotLines||[],m.plotLines||[],h.plotBands||[],m.plotBands||[]],function(c){for(d=c.length;d--;)c[d].id===a&&r(c,c[d])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(M,V);(function(a){var E=a.dateFormat,D=a.each,
H=a.extend,p=a.format,f=a.isNumber,l=a.map,r=a.merge,n=a.pick,w=a.splat,u=a.syncTimeout,e=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,e){this.chart=a;this.options=e;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=e.split&&!a.inverted;this.shared=e.shared||this.split},cleanSplit:function(a){D(this.chart.series,function(e){var d=e&&e.tt;d&&(!d.isActive||a?e.tt=d.destroy():d.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,
e=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,e.shape||"callout",null,null,e.useHTML,null,"tooltip").attr({padding:e.padding,r:e.borderRadius}),this.label.attr({fill:e.backgroundColor,"stroke-width":e.borderWidth}).css(e.style).shadow(e.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();r(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,r(!0,this.options,a))},destroy:function(){this.label&&
(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,e,d,c){var b=this,k=b.now,h=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(a-k.x)||1<Math.abs(e-k.y)),m=b.followPointer||1<b.len;H(k,{x:h?(2*k.x+a)/3:a,y:h?(k.y+e)/2:e,anchorX:m?void 0:h?(2*k.anchorX+d)/3:d,anchorY:m?void 0:h?(k.anchorY+c)/2:c});b.getLabel().attr(k);h&&(clearTimeout(this.tooltipTimeout),
this.tooltipTimeout=setTimeout(function(){b&&b.move(a,e,d,c)},32))},hide:function(a){var e=this;clearTimeout(this.hideTimer);a=n(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){e.getLabel()[a?"fadeOut":"hide"]();e.isHidden=!0},a))},getAnchor:function(a,e){var d,c=this.chart,b=c.inverted,k=c.plotTop,h=c.plotLeft,m=0,f=0,x,n;a=w(a);d=a[0].tooltipPos;this.followPointer&&e&&(void 0===e.chartX&&(e=c.pointer.normalize(e)),d=[e.chartX-c.plotLeft,e.chartY-k]);d||(D(a,function(a){x=
a.series.yAxis;n=a.series.xAxis;m+=a.plotX+(!b&&n?n.left-h:0);f+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!b&&x?x.top-k:0)}),m/=a.length,f/=a.length,d=[b?c.plotWidth-f:m,this.shared&&!b&&1<a.length&&e?e.chartY-k:b?c.plotHeight-m:f]);return l(d,Math.round)},getPosition:function(a,e,d){var c=this.chart,b=this.distance,k={},h=c.inverted&&d.h||0,m,f=["y",c.chartHeight,e,d.plotY+c.plotTop,c.plotTop,c.plotTop+c.plotHeight],x=["x",c.chartWidth,a,d.plotX+c.plotLeft,c.plotLeft,c.plotLeft+c.plotWidth],
l=!this.followPointer&&n(d.ttBelow,!c.inverted===!!d.negative),t=function(a,c,d,g,e,q){var m=d<g-b,z=g+b+d<c,A=g-b-d;g+=b;if(l&&z)k[a]=g;else if(!l&&m)k[a]=A;else if(m)k[a]=Math.min(q-d,0>A-h?A:A-h);else if(z)k[a]=Math.max(e,g+h+d>c?g:g+h);else return!1},C=function(a,c,d,g){var e;g<b||g>c-b?e=!1:k[a]=g<d/2?1:g>c-d/2?c-d-2:g-d/2;return e},p=function(a){var b=f;f=x;x=b;m=a},q=function(){!1!==t.apply(0,f)?!1!==C.apply(0,x)||m||(p(!0),q()):m?k.x=k.y=0:(p(!0),q())};(c.inverted||1<this.len)&&p();q();return k},
defaultFormatter:function(a){var e=this.points||w(this),d;d=[a.tooltipFooterHeaderFormatter(e[0])];d=d.concat(a.bodyFormatter(e));d.push(a.tooltipFooterHeaderFormatter(e[0],!0));return d},refresh:function(a,e){var d,c=this.options,b,k=a,h,m={},f=[];d=c.formatter||this.defaultFormatter;var m=this.shared,x;c.enabled&&(clearTimeout(this.hideTimer),this.followPointer=w(k)[0].series.tooltipOptions.followPointer,h=this.getAnchor(k,e),e=h[0],b=h[1],!m||k.series&&k.series.noSharedTooltip?m=k.getLabelConfig():
(D(k,function(a){a.setState("hover");f.push(a.getLabelConfig())}),m={x:k[0].category,y:k[0].y},m.points=f,k=k[0]),this.len=f.length,m=d.call(m,this),x=k.series,this.distance=n(x.tooltipOptions.distance,16),!1===m?this.hide():(d=this.getLabel(),this.isHidden&&d.attr({opacity:1}).show(),this.split?this.renderSplit(m,w(a)):(c.style.width||d.css({width:this.chart.spacingBox.width}),d.attr({text:m&&m.join?m.join(""):m}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+n(k.colorIndex,
x.colorIndex)),d.attr({stroke:c.borderColor||k.color||x.color||"#666666"}),this.updatePosition({plotX:e,plotY:b,negative:k.negative,ttBelow:k.ttBelow,h:h[2]||0})),this.isHidden=!1))},renderSplit:function(e,m){var d=this,c=[],b=this.chart,k=b.renderer,h=!0,f=this.options,l=0,x=this.getLabel();a.isString(e)&&(e=[!1,e]);D(e.slice(0,m.length+1),function(a,e){if(!1!==a){e=m[e-1]||{isHeader:!0,plotX:m[0].plotX};var z=e.series||d,t=z.tt,q=e.series||{},A="highcharts-color-"+n(e.colorIndex,q.colorIndex,"none");
t||(z.tt=t=k.label(null,null,null,"callout",null,null,f.useHTML).addClass("highcharts-tooltip-box "+A).attr({padding:f.padding,r:f.borderRadius,fill:f.backgroundColor,stroke:f.borderColor||e.color||q.color||"#333333","stroke-width":f.borderWidth}).add(x));t.isActive=!0;t.attr({text:a});t.css(f.style).shadow(f.shadow);a=t.getBBox();q=a.width+t.strokeWidth();e.isHeader?(l=a.height,q=Math.max(0,Math.min(e.plotX+b.plotLeft-q/2,b.chartWidth-q))):q=e.plotX+b.plotLeft-n(f.distance,16)-q;0>q&&(h=!1);a=(e.series&&
e.series.yAxis&&e.series.yAxis.pos)+(e.plotY||0);a-=b.plotTop;c.push({target:e.isHeader?b.plotHeight+l:a,rank:e.isHeader?1:0,size:z.tt.getBBox().height+1,point:e,x:q,tt:t})}});this.cleanSplit();a.distribute(c,b.plotHeight+l);D(c,function(a){var c=a.point,d=c.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:h||c.isHeader?a.x:c.plotX+b.plotLeft+n(f.distance,16),y:a.pos+b.plotTop,anchorX:c.isHeader?c.plotX+b.plotLeft:c.plotX+d.xAxis.pos,anchorY:c.isHeader?a.pos+b.plotTop-15:c.plotY+d.yAxis.pos})})},
updatePosition:function(a){var e=this.chart,d=this.getLabel(),d=(this.options.positioner||this.getPosition).call(this,d.width,d.height,a);this.move(Math.round(d.x),Math.round(d.y||0),a.plotX+e.plotLeft,a.plotY+e.plotTop)},getDateFormat:function(a,m,d,c){var b=E("%m-%d %H:%M:%S.%L",m),k,h,f={millisecond:15,second:12,minute:9,hour:6,day:3},l="millisecond";for(h in e){if(a===e.week&&+E("%w",m)===d&&"00:00:00.000"===b.substr(6)){h="week";break}if(e[h]>a){h=l;break}if(f[h]&&b.substr(f[h])!=="01-01 00:00:00.000".substr(f[h]))break;
"week"!==h&&(l=h)}h&&(k=c[h]);return k},getXDateFormat:function(a,e,d){e=e.dateTimeLabelFormats;var c=d&&d.closestPointRange;return(c?this.getDateFormat(c,a.x,d.options.startOfWeek,e):e.day)||e.year},tooltipFooterHeaderFormatter:function(a,e){e=e?"footer":"header";var d=a.series,c=d.tooltipOptions,b=c.xDateFormat,k=d.xAxis,h=k&&"datetime"===k.options.type&&f(a.key),m=c[e+"Format"];h&&!b&&(b=this.getXDateFormat(a,c,k));h&&b&&D(a.point&&a.point.tooltipDateKeys||["key"],function(a){m=m.replace("{point."+
a+"}","{point."+a+":"+b+"}")});return p(m,{point:a,series:d})},bodyFormatter:function(a){return l(a,function(a){var d=a.series.tooltipOptions;return(d[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,d[(a.point.formatPrefix||"point")+"Format"])})}}})(M);(function(a){var E=a.addEvent,D=a.attr,H=a.charts,p=a.color,f=a.css,l=a.defined,r=a.each,n=a.extend,w=a.find,u=a.fireEvent,e=a.isObject,h=a.offset,m=a.pick,d=a.splat,c=a.Tooltip;a.Pointer=function(a,c){this.init(a,
c)};a.Pointer.prototype={init:function(a,d){this.options=d;this.chart=a;this.runChartClick=d.chart.events&&!!d.chart.events.click;this.pinchDown=[];this.lastValidTouch={};c&&(a.tooltip=new c(a,d.tooltip),this.followTouchMove=m(d.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,d=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(d=m(c.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!b||d&&b;this.zoomVert=d&&
!b||a&&b;this.hasZoom=a||d},normalize:function(a,c){var b;b=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;c||(this.chartPosition=c=h(this.chart.container));return n(a,{chartX:Math.round(b.pageX-c.left),chartY:Math.round(b.pageY-c.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};r(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,c,d){var b;r(a,function(a){var k=
!(a.noSharedTooltip&&c)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(d,k);if((k=e(a,!0))&&!(k=!e(b,!0)))var k=b.distX-a.distX,h=b.dist-a.dist,m=(a.series.group&&a.series.group.zIndex)-(b.series.group&&b.series.group.zIndex),k=0<(0!==k&&c?k:0!==h?h:0!==m?m:b.series.index>a.series.index?-1:1);k&&(b=a)});return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,c){var b=a.series,d=b.xAxis,b=b.yAxis,k=
m(a.clientX,a.plotX);if(d&&b)return c?{chartX:d.len+d.pos-k,chartY:b.len+b.pos-a.plotY}:{chartX:k+d.pos,chartY:a.plotY+b.pos}},getHoverData:function(b,c,d,h,f,l,n){var k,z=[],x=n&&n.isBoosting;h=!(!h||!b);n=c&&!c.stickyTracking?[c]:a.grep(d,function(a){return a.visible&&!(!f&&a.directTouch)&&m(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(k=h?b:this.findNearestKDPoint(n,f,l))&&k.series;k&&(f&&!c.noSharedTooltip?(n=a.grep(d,function(a){return a.visible&&!(!f&&a.directTouch)&&m(a.options.enableMouseTracking,
!0)&&!a.noSharedTooltip}),r(n,function(a){var b=w(a.points,function(a){return a.x===k.x&&!a.isNull});e(b)&&(x&&(b=a.getPoint(b)),z.push(b))})):z.push(k));return{hoverPoint:k,hoverSeries:c,hoverPoints:z}},runPointActions:function(b,c){var d=this.chart,k=d.tooltip&&d.tooltip.options.enabled?d.tooltip:void 0,e=k?k.shared:!1,h=c||d.hoverPoint,f=h&&h.series||d.hoverSeries,f=this.getHoverData(h,f,d.series,!!c||f&&f.directTouch&&this.isDirectTouch,e,b,{isBoosting:d.isBoosting}),l,h=f.hoverPoint;l=f.hoverPoints;
c=(f=f.hoverSeries)&&f.tooltipOptions.followPointer;e=e&&f&&!f.noSharedTooltip;if(h&&(h!==d.hoverPoint||k&&k.isHidden)){r(d.hoverPoints||[],function(b){-1===a.inArray(b,l)&&b.setState()});r(l||[],function(a){a.setState("hover")});if(d.hoverSeries!==f)f.onMouseOver();d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");if(!h.series)return;h.firePointEvent("mouseOver");d.hoverPoints=l;d.hoverPoint=h;k&&k.refresh(e?l:h,b)}else c&&k&&!k.isHidden&&(h=k.getAnchor([{}],b),k.updatePosition({plotX:h[0],plotY:h[1]}));
this.unDocMouseMove||(this.unDocMouseMove=E(d.container.ownerDocument,"mousemove",function(b){var c=H[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));r(d.axes,function(c){var d=m(c.crosshair.snap,!0),k=d?a.find(l,function(a){return a.series[c.coll]===c}):void 0;k||!d?c.drawCrosshair(b,k):c.hideCrosshair()})},reset:function(a,c){var b=this.chart,k=b.hoverSeries,e=b.hoverPoint,h=b.hoverPoints,m=b.tooltip,f=m&&m.shared?h:e;a&&f&&r(d(f),function(b){b.series.isCartesian&&void 0===b.plotX&&
(a=!1)});if(a)m&&f&&(m.refresh(f),e&&(e.setState(e.state,!0),r(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,e)})));else{if(e)e.onMouseOut();h&&r(h,function(a){a.setState()});if(k)k.onMouseOut();m&&m.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());r(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,d;r(b.series,function(k){d=a||k.getPlotBox();k.xAxis&&k.xAxis.zoomEnabled&&k.group&&(k.group.attr(d),
k.markerGroup&&(k.markerGroup.attr(d),k.markerGroup.clip(c?b.clipRect:null)),k.dataLabelsGroup&&k.dataLabelsGroup.attr(d))});b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,h=this.zoomHor,m=this.zoomVert,f=b.plotLeft,l=b.plotTop,n=b.plotWidth,q=b.plotHeight,A,F=this.selectionMarker,G=this.mouseDownX,
g=this.mouseDownY,v=c.panKey&&a[c.panKey+"Key"];F&&F.touch||(d<f?d=f:d>f+n&&(d=f+n),e<l?e=l:e>l+q&&(e=l+q),this.hasDragged=Math.sqrt(Math.pow(G-d,2)+Math.pow(g-e,2)),10<this.hasDragged&&(A=b.isInsidePlot(G-f,g-l),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&A&&!v&&!F&&(this.selectionMarker=F=b.renderer.rect(f,l,h?1:n,m?1:q,0).attr({fill:c.selectionMarkerFill||p("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),F&&h&&(d-=G,F.attr({width:Math.abs(d),x:(0<d?
0:d)+G})),F&&m&&(d=e-g,F.attr({height:Math.abs(d),y:(0<d?0:d)+g})),A&&!F&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},h=this.selectionMarker,m=h.attr?h.attr("x"):h.x,t=h.attr?h.attr("y"):h.y,p=h.attr?h.attr("width"):h.width,w=h.attr?h.attr("height"):h.height,q;if(this.hasDragged||d)r(c.axes,function(c){if(c.zoomEnabled&&l(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var k=c.horiz,
h="touchend"===a.type?c.minPixelPadding:0,g=c.toValue((k?m:t)+h),k=c.toValue((k?m+p:t+w)-h);e[c.coll].push({axis:c,min:Math.min(g,k),max:Math.max(g,k)});q=!0}}),q&&u(c,"selection",e,function(a){c.zoom(n(a,d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}c&&(f(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){2!==a.button&&(a=this.normalize(a),
this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(b){H[a.hoverChartIndex]&&H[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=H[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=
null)},onContainerMouseMove:function(b){var c=this.chart;l(a.hoverChartIndex)&&H[a.hoverChartIndex]&&H[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,c){for(var b;a;){if(b=D(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=
a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",n(a,{point:c})),
b.hoverPoint&&c.firePointEvent("click",a)):(n(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&u(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container,d=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=E(c,"mouseleave",b.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=E(d,"mouseup",b.onDocumentMouseUp));
a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=E(d,"touchend",b.onDocumentTouchEnd)))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);
a.objectEach(b,function(a,c){b[c]=null})}}})(M);(function(a){var E=a.charts,D=a.each,H=a.extend,p=a.map,f=a.noop,l=a.pick;H(a.Pointer.prototype,{pinchTranslate:function(a,f,l,p,e,h){this.zoomHor&&this.pinchTranslateDirection(!0,a,f,l,p,e,h);this.zoomVert&&this.pinchTranslateDirection(!1,a,f,l,p,e,h)},pinchTranslateDirection:function(a,f,l,p,e,h,m,d){var c=this.chart,b=a?"x":"y",k=a?"X":"Y",z="chart"+k,n=a?"width":"height",r=c["plot"+(a?"Left":"Top")],x,w,t=d||1,C=c.inverted,u=c.bounds[a?"h":"v"],
q=1===f.length,A=f[0][z],F=l[0][z],G=!q&&f[1][z],g=!q&&l[1][z],v;l=function(){!q&&20<Math.abs(A-G)&&(t=d||Math.abs(F-g)/Math.abs(A-G));w=(r-F)/t+A;x=c["plot"+(a?"Width":"Height")]/t};l();f=w;f<u.min?(f=u.min,v=!0):f+x>u.max&&(f=u.max-x,v=!0);v?(F-=.8*(F-m[b][0]),q||(g-=.8*(g-m[b][1])),l()):m[b]=[F,g];C||(h[b]=w-r,h[n]=x);h=C?1/t:t;e[n]=x;e[b]=f;p[C?a?"scaleY":"scaleX":"scale"+k]=t;p["translate"+k]=h*r+(F-h*A)},pinch:function(a){var n=this,r=n.chart,u=n.pinchDown,e=a.touches,h=e.length,m=n.lastValidTouch,
d=n.hasZoom,c=n.selectionMarker,b={},k=1===h&&(n.inClass(a.target,"highcharts-tracker")&&r.runTrackerClick||n.runChartClick),z={};1<h&&(n.initiated=!0);d&&n.initiated&&!k&&a.preventDefault();p(e,function(a){return n.normalize(a)});"touchstart"===a.type?(D(e,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY}}),m.x=[u[0].chartX,u[1]&&u[1].chartX],m.y=[u[0].chartY,u[1]&&u[1].chartY],D(r.axes,function(a){if(a.zoomEnabled){var b=r.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(l(a.options.min,
a.dataMin)),e=a.toPixels(l(a.options.max,a.dataMax)),k=Math.max(d,e);b.min=Math.min(a.pos,Math.min(d,e)-c);b.max=Math.max(a.pos+a.len,k+c)}}),n.res=!0):n.followTouchMove&&1===h?this.runPointActions(n.normalize(a)):u.length&&(c||(n.selectionMarker=c=H({destroy:f,touch:!0},r.plotBox)),n.pinchTranslate(u,e,b,c,z,m),n.hasPinched=d,n.scaleGroups(b,z),n.res&&(n.res=!1,this.reset(!1,0)))},touch:function(f,n){var p=this.chart,r,e;if(p.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});
a.hoverChartIndex=p.index;1===f.touches.length?(f=this.normalize(f),(e=p.isInsidePlot(f.chartX-p.plotLeft,f.chartY-p.plotTop))&&!p.openMenu?(n&&this.runPointActions(f),"touchmove"===f.type&&(n=this.pinchDown,r=n[0]?4<=Math.sqrt(Math.pow(n[0].chartX-f.chartX,2)+Math.pow(n[0].chartY-f.chartY,2)):!1),l(r,!0)&&this.pinch(f)):n&&this.reset()):2===f.touches.length&&this.pinch(f)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(f){E[a.hoverChartIndex]&&
E[a.hoverChartIndex].pointer.drop(f)}})})(M);(function(a){var E=a.addEvent,D=a.charts,H=a.css,p=a.doc,f=a.extend,l=a.noop,r=a.Pointer,n=a.removeEvent,w=a.win,u=a.wrap;if(!a.hasTouch&&(w.PointerEvent||w.MSPointerEvent)){var e={},h=!!w.PointerEvent,m=function(){var c=[];c.item=function(a){return this[a]};a.objectEach(e,function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},d=function(c,b,d,e){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!D[a.hoverChartIndex]||
(e(c),e=D[a.hoverChartIndex].pointer,e[b]({type:d,target:c.currentTarget,preventDefault:l,touches:m()}))};f(r.prototype,{onContainerPointerDown:function(a){d(a,"onContainerTouchStart","touchstart",function(a){e[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){d(a,"onContainerTouchMove","touchmove",function(a){e[a.pointerId]={pageX:a.pageX,pageY:a.pageY};e[a.pointerId].target||(e[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){d(a,
"onDocumentTouchEnd","touchend",function(a){delete e[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,h?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,h?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(p,h?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});u(r.prototype,"init",function(a,b,d){a.call(this,b,d);this.hasZoom&&H(b.container,{"-ms-touch-action":"none","touch-action":"none"})});u(r.prototype,"setDOMEvents",function(a){a.apply(this);
(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});u(r.prototype,"destroy",function(a){this.batchMSEvents(n);a.call(this)})}})(M);(function(a){var E=a.addEvent,D=a.css,H=a.discardElement,p=a.defined,f=a.each,l=a.isFirefox,r=a.marginNames,n=a.merge,w=a.pick,u=a.setAnimation,e=a.stableSort,h=a.win,m=a.wrap;a.Legend=function(a,c){this.init(a,c)};a.Legend.prototype={init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),E(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},
setOptions:function(a){var c=w(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=n(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=w(a.symbolWidth,16);this.pages=[]},update:function(a,c){var b=this.chart;this.setOptions(n(!0,this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;w(c,!0)&&b.redraw()},colorizeItem:function(a,c){a.legendGroup[c?"removeClass":
"addClass"]("highcharts-legend-item-hidden");var b=this.options,d=a.legendItem,e=a.legendLine,h=a.legendSymbol,f=this.itemHiddenStyle.color,b=c?b.itemStyle.color:f,m=c?a.color||f:f,l=a.options&&a.options.marker,t={fill:m};d&&d.css({fill:b,color:b});e&&e.attr({stroke:m});h&&(l&&h.isMarker&&(t=a.pointAttribs(),c||(t.stroke=t.fill=f)),h.attr(t))},positionItem:function(a){var c=this.options,b=c.symbolPadding,c=!c.rtl,d=a._legendItemPos,e=d[0],d=d[1],h=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?
e:this.legendWidth-e-2*b-4,d);h&&(h.x=e,h.y=d)},destroyItem:function(a){var c=a.checkbox;f(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});c&&H(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}f(this.getAllItems(),function(c){f(["legendItem","legendGroup"],a,c)});f("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,
c,b=this.clipHeight||this.legendHeight,e=this.titleHeight;a&&(c=a.translateY,f(this.allItems,function(d){var k=d.checkbox,h;k&&(h=c+e+k.y+(this.scrollOffset||0)+3,D(k,{left:a.translateX+d.checkboxOffset+k.x-20+"px",top:h+"px",display:h>c-6&&h<c+b-6?"":"none"}))},this))},renderTitle:function(){var a=this.options,c=this.padding,b=a.title,e=0;b.text&&(this.title||(this.title=this.chart.renderer.label(b.text,c-3,c-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)),
a=this.title.getBBox(),e=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:e}));this.titleHeight=e},setText:function(d){var c=this.options;d.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,d):c.labelFormatter.call(d)})},renderItem:function(a){var c=this.chart,b=c.renderer,d=this.options,e="horizontal"===d.layout,h=this.symbolWidth,f=d.symbolPadding,m=this.itemStyle,l=this.itemHiddenStyle,t=this.padding,p=e?w(d.itemDistance,20):0,r=!d.rtl,q=d.width,A=d.itemMarginBottom||
0,F=this.itemMarginTop,G=a.legendItem,g=!a.series,v=!g&&a.series.drawLegendSymbol?a.series:a,u=v.options,L=this.createCheckboxForItem&&u&&u.showCheckbox,u=h+f+p+(L?20:0),P=d.useHTML,J=a.options.className;G||(a.legendGroup=b.g("legend-item").addClass("highcharts-"+v.type+"-series highcharts-color-"+a.colorIndex+(J?" "+J:"")+(g?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=G=b.text("",r?h+f:-f,this.baseline||0,P).css(n(a.visible?m:l)).attr({align:r?"left":"right",
zIndex:2}).add(a.legendGroup),this.baseline||(h=m.fontSize,this.fontMetrics=b.fontMetrics(h,G),this.baseline=this.fontMetrics.f+3+F,G.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,v.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,G,P),L&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);m.width||G.css({width:(d.itemWidth||d.width||c.spacingBox.width)-u});this.setText(a);b=G.getBBox();m=a.checkboxOffset=d.itemWidth||a.legendItemWidth||b.width+
u;this.itemHeight=b=Math.round(a.legendItemHeight||b.height||this.symbolHeight);e&&this.itemX-t+m>(q||c.spacingBox.width-2*t-d.x)&&(this.itemX=t,this.itemY+=F+this.lastLineHeight+A,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,m);this.lastItemY=F+this.itemY+A;this.lastLineHeight=Math.max(b,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=m:(this.itemY+=F+b+A,this.lastLineHeight=b);this.offsetWidth=q||Math.max((e?this.itemX-t-(a.checkbox?0:p):m)+t,this.offsetWidth)},
getAllItems:function(){var a=[];f(this.chart.series,function(c){var b=c&&c.options;c&&w(b.showInLegend,p(b.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===b.legendType?c.data:c)))});return a},getAlignment:function(){var a=this.options;return a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,c){var b=this.chart,d=this.options,e=this.getAlignment();e&&f([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(k,h){k.test(e)&&
!p(a[h])&&(b[r[h]]=Math.max(b[r[h]],b.legend[(h+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][h]*d[h%2?"x":"y"]+w(d.margin,12)+c[h]+(0===h?b.titleOffset+b.options.title.margin:0)))})},render:function(){var a=this,c=a.chart,b=c.renderer,k=a.group,h,m,l,x,p=a.box,t=a.options,C=a.padding;a.itemX=C;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;k||(a.group=k=b.g("legend").attr({zIndex:7}).add(),a.contentGroup=b.g().attr({zIndex:1}).add(k),a.scrollGroup=b.g().add(a.contentGroup));a.renderTitle();
h=a.getAllItems();e(h,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});t.reversed&&h.reverse();a.allItems=h;a.display=m=!!h.length;a.lastLineHeight=0;f(h,function(b){a.renderItem(b)});l=(t.width||a.offsetWidth)+C;x=a.lastItemY+a.lastLineHeight+a.titleHeight;x=a.handleOverflow(x);x+=C;p||(a.box=p=b.rect().addClass("highcharts-legend-box").attr({r:t.borderRadius}).add(k),p.isNew=!0);p.attr({stroke:t.borderColor,"stroke-width":t.borderWidth||0,fill:t.backgroundColor||
"none"}).shadow(t.shadow);0<l&&0<x&&(p[p.isNew?"attr":"animate"](p.crisp.call({},{x:0,y:0,width:l,height:x},p.strokeWidth())),p.isNew=!1);p[m?"show":"hide"]();a.legendWidth=l;a.legendHeight=x;f(h,function(b){a.positionItem(b)});m&&(b=c.spacingBox,/(lth|ct|rth)/.test(a.getAlignment())&&(b=n(b,{y:b.y+c.titleOffset+c.options.title.margin})),k.align(n(t,{width:l,height:x}),!0,b));c.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var c=this,b=this.chart,d=b.renderer,e=this.options,h=
e.y,m=this.padding,b=b.spacingBox.height+("top"===e.verticalAlign?-h:h)-m,h=e.maxHeight,l,n=this.clipRect,t=e.navigation,p=w(t.animation,!0),r=t.arrowSize||12,q=this.nav,A=this.pages,F,G=this.allItems,g=function(a){"number"===typeof a?n.attr({height:a}):n&&(c.clipRect=n.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+m+"px,9999px,"+(m+a)+"px,0)":"auto")};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(b/=2);h&&(b=Math.min(b,h));A.length=
0;a>b&&!1!==t.enabled?(this.clipHeight=l=Math.max(b-20-this.titleHeight-m,0),this.currentPage=w(this.currentPage,1),this.fullHeight=a,f(G,function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),g=A.length;if(!g||c-A[g-1]>l&&(F||c)!==A[g-1])A.push(F||c),g++;a.pageIx=g-1;F&&(G[b-1].pageIx=g-1);b===G.length-1&&c+d-A[g-1]>l&&(A.push(c),a.pageIx=g);c!==F&&(F=c)}),n||(n=c.clipRect=d.clipRect(0,m,9999,0),c.contentGroup.clip(n)),g(l),q||(this.nav=q=d.g().attr({zIndex:1}).add(this.group),
this.up=d.symbol("triangle",0,0,r,r).on("click",function(){c.scroll(-1,p)}).add(q),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation").css(t.style).add(q),this.down=d.symbol("triangle-down",0,0,r,r).on("click",function(){c.scroll(1,p)}).add(q)),c.scroll(0),a=b):q&&(g(),this.nav=q.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var b=this.pages,d=b.length;a=this.currentPage+a;var e=this.clipHeight,h=this.options.navigation,f=this.pager,
m=this.padding;a>d&&(a=d);0<a&&(void 0!==c&&u(c,this.chart),this.nav.attr({translateX:m,translateY:e+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),f.attr({text:a+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===d?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?h.inactiveColor:h.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===
d?h.inactiveColor:h.activeColor}).css({cursor:a===d?"default":"pointer"}),this.scrollOffset=-b[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin={drawRectangle:function(a,c){var b=a.symbolHeight,d=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-b)/2:0,a.baseline-b+1,d?b:a.symbolWidth,b,w(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},
drawLineMarker:function(a){var c=this.options,b=c.marker,d=a.symbolWidth,e=a.symbolHeight,h=e/2,f=this.chart.renderer,m=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var l;l={"stroke-width":c.lineWidth||0};c.dashStyle&&(l.dashstyle=c.dashStyle);this.legendLine=f.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(l).add(m);b&&!1!==b.enabled&&(c=Math.min(w(b.radius,h),h),0===this.symbol.indexOf("url")&&(b=n(b,{width:e,height:e}),c=0),this.legendSymbol=b=f.symbol(this.symbol,d/
2-c,a-c,2*c,2*c,b).addClass("highcharts-point").add(m),b.isMarker=!0)}};(/Trident\/7\.0/.test(h.navigator.userAgent)||l)&&m(a.Legend.prototype,"positionItem",function(a,c){var b=this,d=function(){c._legendItemPos&&a.call(b,c)};d();setTimeout(d)})})(M);(function(a){var E=a.addEvent,D=a.animate,H=a.animObject,p=a.attr,f=a.doc,l=a.Axis,r=a.createElement,n=a.defaultOptions,w=a.discardElement,u=a.charts,e=a.css,h=a.defined,m=a.each,d=a.extend,c=a.find,b=a.fireEvent,k=a.grep,z=a.isNumber,B=a.isObject,I=
a.isString,x=a.Legend,K=a.marginNames,t=a.merge,C=a.objectEach,N=a.Pointer,q=a.pick,A=a.pInt,F=a.removeEvent,G=a.seriesTypes,g=a.splat,v=a.svg,Q=a.syncTimeout,L=a.win,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,b,c)};d(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(I(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,g,e=b.series,k=b.plotOptions||{};b.series=null;d=t(n,b);for(g in d.plotOptions)d.plotOptions[g].tooltip=
k[g]&&t(k[g].tooltip)||void 0;d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=e;this.userOptions=b;b=d.chart;g=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var q=this;q.index=u.length;u.push(q);a.chartCount++;g&&C(g,function(a,b){E(q,b,a)});q.xAxis=[];q.yAxis=[];q.pointCount=q.colorCounter=q.symbolCounter=
0;q.firstRender()},initSeries:function(b){var c=this.options.chart;(c=G[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(c){var g=this.axes,e=this.series,k=this.pointer,q=this.legend,h=this.isDirtyLegend,
f,l,v=this.hasCartesianSeries,A=this.isDirtyBox,F,t=this.renderer,x=t.isHidden(),n=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(c,this);x&&this.temporaryDisplay();this.layOutTitles();for(c=e.length;c--;)if(F=e[c],F.options.stacking&&(f=!0,F.isDirty)){l=!0;break}if(l)for(c=e.length;c--;)F=e[c],F.options.stacking&&(F.isDirty=!0);m(e,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),h=!0);a.isDirtyData&&b(a,"updatedData")});h&&q.options.enabled&&
(q.render(),this.isDirtyLegend=!1);f&&this.getStacks();v&&m(g,function(a){a.updateNames();a.setScale()});this.getMargins();v&&(m(g,function(a){a.isDirty&&(A=!0)}),m(g,function(a){var c=a.min+","+a.max;a.extKey!==c&&(a.extKey=c,n.push(function(){b(a,"afterSetExtremes",d(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(A||f)&&a.redraw()}));A&&this.drawChartBox();b(this,"predraw");m(e,function(a){(A||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});k&&k.reset(!0);t.draw();b(this,"redraw");b(this,
"render");x&&this.temporaryDisplay(!0);m(n,function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var d,g=this.series,e;d=c(this.axes,b)||c(this.series,b);for(e=0;!d&&e<g.length;e++)d=c(g[e].points||[],b);return d},getAxes:function(){var a=this,b=this.options,c=b.xAxis=g(b.xAxis||{}),b=b.yAxis=g(b.yAxis||{});m(c,function(a,b){a.index=b;a.isX=!0});m(b,function(a,b){a.index=b});c=c.concat(b);m(c,function(b){new l(a,b)})},getSelectedPoints:function(){var a=
[];m(this.series,function(b){a=a.concat(k(b.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return k(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,g=d.options,e;e=g.title=t({style:{color:"#333333",fontSize:g.isStock?"16px":"18px"}},g.title,a);g=g.subtitle=t({style:{color:"#666666"}},g.subtitle,b);m([["title",a,e],["subtitle",b,g]],function(a,b){var c=a[0],g=d[c],e=a[1];a=a[2];g&&e&&(d[c]=g=g.destroy());a&&!g&&(d[c]=d.renderer.text(a.text,
0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c,g=this.renderer,e=this.spacingBox;m(["title","subtitle"],function(a){var c=this[a],k=this.options[a];a="title"===a?-3:k.verticalAlign?0:b+2;var q;c&&(q=k.style.fontSize,q=g.fontMetrics(q,c).b,c.css({width:(k.width||e.width+k.widthAdjust)+"px"}).align(d({y:a+q},k),!1,"spacingBox"),k.floating||
k.verticalAlign||(b=Math.ceil(b+c.getBBox(k.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&q(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,c=b.width,b=b.height,d=this.renderTo;h(c)||(this.containerWidth=a.getStyle(d,"width"));h(b)||(this.containerHeight=a.getStyle(d,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,
this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(f.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){f.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,f.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},
b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;if(c===f.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,g=c.chart,e,k;b=this.renderTo;var q=a.uniqueKey(),h;b||(this.renderTo=b=g.renderTo);I(b)&&(this.renderTo=b=f.getElementById(b));b||a.error(13,!0);e=A(p(b,"data-highcharts-chart"));z(e)&&u[e]&&
u[e].hasRendered&&u[e].destroy();p(b,"data-highcharts-chart",this.index);b.innerHTML="";g.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();e=this.chartWidth;k=this.chartHeight;h=d({position:"relative",overflow:"hidden",width:e+"px",height:k+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},g.style);this.container=b=r("div",{id:q},h,b);this._cursor=b.style.cursor;this.renderer=new (a[g.renderer]||a.Renderer)(b,e,k,null,g.forExport,
c.exporting&&c.exporting.allowHTML);this.setClassName(g.className);this.renderer.setStyle(g.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();d&&!h(c[0])&&(this.plotTop=Math.max(this.plotTop,d+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&
this.adjustPlotArea();a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&m(a.axes,function(a){a.visible&&a.getOffset()});m(K,function(d,g){h(c[g])||(a[d]+=b[g])});a.setChartSize()},reflow:function(b){var c=this,d=c.options.chart,g=c.renderTo,e=h(d.width)&&h(d.height),k=d.width||a.getStyle(g,"width"),d=d.height||a.getStyle(g,"height"),g=b?b.target:L;if(!e&&!c.isPrinting&&k&&d&&(g===L||g===f)){if(k!==c.containerWidth||d!==c.containerHeight)clearTimeout(c.reflowTimeout),
c.reflowTimeout=Q(function(){c.container&&c.setSize(void 0,void 0,!1)},b?100:0);c.containerWidth=k;c.containerHeight=d}},initReflow:function(){var a=this,b;b=E(L,"resize",function(b){a.reflow(b)});E(a,"destroy",b)},setSize:function(c,d,g){var k=this,q=k.renderer;k.isResizing+=1;a.setAnimation(g,k);k.oldChartHeight=k.chartHeight;k.oldChartWidth=k.chartWidth;void 0!==c&&(k.options.chart.width=c);void 0!==d&&(k.options.chart.height=d);k.getChartSize();c=q.globalAnimation;(c?D:e)(k.container,{width:k.chartWidth+
"px",height:k.chartHeight+"px"},c);k.setChartSize(!0);q.setSize(k.chartWidth,k.chartHeight,g);m(k.axes,function(a){a.isDirty=!0;a.setScale()});k.isDirtyLegend=!0;k.isDirtyBox=!0;k.layOutTitles();k.getMargins();k.redraw(g);k.oldChartHeight=null;b(k,"resize");Q(function(){k&&b(k,"endResize",null,function(){--k.isResizing})},H(c).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,g=this.chartHeight,e=this.options.chart,k=this.spacing,q=this.clipOffset,h,f,l,v;this.plotLeft=
h=Math.round(this.plotLeft);this.plotTop=f=Math.round(this.plotTop);this.plotWidth=l=Math.max(0,Math.round(d-h-this.marginRight));this.plotHeight=v=Math.max(0,Math.round(g-f-this.marginBottom));this.plotSizeX=b?v:l;this.plotSizeY=b?l:v;this.plotBorderWidth=e.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:k[3],y:k[0],width:d-k[3]-k[1],height:g-k[0]-k[2]};this.plotBox=c.plotBox={x:h,y:f,width:l,height:v};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,q[3])/2);c=Math.ceil(Math.max(d,
q[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,q[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(d,q[2])/2-c))};a||m(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;m(["margin","spacing"],function(c){var d=b[c],g=B(d)?d:[d,d,d,d];m(["Top","Right","Bottom","Left"],function(d,e){a[c][e]=q(b[c+d],g[e])})});m(K,function(b,c){a[b]=q(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=
[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,g=this.chartBackground,e=this.plotBackground,k=this.plotBorder,q,h=this.plotBGImage,f=a.backgroundColor,m=a.plotBackgroundColor,l=a.plotBackgroundImage,v,A=this.plotLeft,F=this.plotTop,t=this.plotWidth,x=this.plotHeight,n=this.plotBox,p=this.clipRect,z=this.clipBox,G="animate";g||(this.chartBackground=g=b.rect().addClass("highcharts-background").add(),G="attr");q=a.borderWidth||0;v=q+(a.shadow?
8:0);f={fill:f||"none"};if(q||g["stroke-width"])f.stroke=a.borderColor,f["stroke-width"]=q;g.attr(f).shadow(a.shadow);g[G]({x:v/2,y:v/2,width:c-v-q%2,height:d-v-q%2,r:a.borderRadius});G="animate";e||(G="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[G](n);e.attr({fill:m||"none"}).shadow(a.plotShadow);l&&(h?h.animate(n):this.plotBGImage=b.image(l,A,F,t,x).add());p?p.animate({width:z.width,height:z.height}):this.clipRect=b.clipRect(z);G="animate";k||(G="attr",this.plotBorder=
k=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());k.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});k[G](k.crisp({x:A,y:F,width:t,height:x},-k.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,g,e;m(["inverted","angular","polar"],function(k){c=G[b.type||b.defaultSeriesType];e=b[k]||c&&c.prototype[k];for(g=d&&d.length;!e&&g--;)(c=G[d[g].type])&&c.prototype[k]&&(e=!0);a[k]=e})},linkSeries:function(){var a=
this,b=a.series;m(b,function(a){a.linkedSeries.length=0});m(b,function(b){var c=b.options.linkedTo;I(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=q(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){m(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&m(b.items,function(c){var g=d(b.style,c.style),e=A(g.left)+a.plotLeft,k=A(g.top)+
a.plotTop+12;delete g.left;delete g.top;a.renderer.text(c.html,e,k).attr({zIndex:2}).css(g).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,g,e;this.setTitle();this.legend=new x(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight=Math.max(this.plotHeight-21,0);m(a,function(a){a.setScale()});this.getAxisMargins();g=1.1<c/this.plotWidth;e=1.05<d/this.plotHeight;if(g||e)m(a,function(a){(a.horiz&&g||!a.horiz&&
e)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&m(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=t(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",
function(){a.href&&(L.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var c=this,d=c.axes,g=c.series,e=c.container,k,q=e&&e.parentNode;b(c,"destroy");c.renderer.forExport?a.erase(u,c):u[c.index]=void 0;a.chartCount--;c.renderTo.removeAttribute("data-highcharts-chart");F(c);for(k=d.length;k--;)d[k]=d[k].destroy();this.scroller&&this.scroller.destroy&&
this.scroller.destroy();for(k=g.length;k--;)g[k]=g[k].destroy();m("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var b=c[a];b&&b.destroy&&(c[a]=b.destroy())});e&&(e.innerHTML="",F(e),q&&w(e));C(c,function(a,b){delete c[b]})},isReadyToRender:function(){var a=this;return v||L!=L.top||"complete"===f.readyState?!0:(f.attachEvent("onreadystatechange",function(){f.detachEvent("onreadystatechange",
a.firstRender);"complete"===f.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,c=a.options;if(a.isReadyToRender()){a.getContainer();b(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();m(c.series||[],function(b){a.initSeries(b)});a.linkSeries();b(a,"beforeRender");N&&(a.pointer=new N(a,c));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){m([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&
a.apply(this,[this])},this);b(this,"load");b(this,"render");h(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(M);(function(a){var E,D=a.each,H=a.extend,p=a.erase,f=a.fireEvent,l=a.format,r=a.isArray,n=a.isNumber,w=a.pick,u=a.removeEvent;a.Point=E=function(){};a.Point.prototype={init:function(a,h,f){this.series=a;this.color=a.color;this.applyOptions(h,f);a.options.colorByPoint?(h=a.options.colors||a.chart.options.colors,this.color=this.color||h[a.colorCounter],
h=h.length,f=a.colorCounter,a.colorCounter++,a.colorCounter===h&&(a.colorCounter=0)):f=a.colorIndex;this.colorIndex=w(this.colorIndex,f);a.chart.pointCount++;return this},applyOptions:function(a,h){var e=this.series,d=e.options.pointValKey||e.pointValKey;a=E.prototype.optionsToObject.call(this,a);H(this,a);this.options=this.options?H(this.options,a):a;a.group&&delete this.group;d&&(this.y=this[d]);this.isNull=w(this.isValid&&!this.isValid(),null===this.x||!n(this.y,!0));this.selected&&(this.state=
"select");"name"in this&&void 0===h&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===h?e.autoIncrement(this):h);return this},optionsToObject:function(a){var e={},f=this.series,d=f.options.keys,c=d||f.pointArrayMap||["y"],b=c.length,k=0,l=0;if(n(a)||null===a)e[c[0]]=a;else if(r(a))for(!d&&a.length>b&&(f=typeof a[0],"string"===f?e.name=a[0]:"number"===f&&(e.x=a[0]),k++);l<b;)d&&void 0===a[k]||(e[c[l]]=a[k]),k++,l++;else"object"===typeof a&&(e=a,a.dataLabels&&
(f._hasPointLabels=!0),a.marker&&(f._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,
h=a.zones,a=a.zoneAxis||"y",f=0,d;for(d=h[f];this[a]>=d.value;)d=h[++f];d&&d.color&&!this.options.color&&(this.color=d.color);return d},destroy:function(){var a=this.series.chart,h=a.hoverPoints,f;a.pointCount--;h&&(this.setState(),p(h,this),h.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(f in this)this[f]=null},destroyElements:function(){for(var a=["graphic","dataLabel",
"dataLabelUpper","connector","shadowGroup"],h,f=6;f--;)h=a[f],this[h]&&(this[h]=this[h].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var e=this.series,f=e.tooltipOptions,d=w(f.valueDecimals,""),c=f.valuePrefix||"",b=f.valueSuffix||"";D(e.pointArrayMap||["y"],function(e){e="{point."+
e;if(c||b)a=a.replace(e+"}",c+e+"}"+b);a=a.replace(e+"}",e+":,."+d+"f}")});return l(a,{point:this,series:this.series})},firePointEvent:function(a,h,m){var d=this,c=this.series.options;(c.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();"click"===a&&c.allowPointSelect&&(m=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});f(this,a,h,m)},visible:!0}})(M);(function(a){var E=a.addEvent,D=a.animObject,H=a.arrayMax,p=a.arrayMin,f=a.correctFloat,
l=a.Date,r=a.defaultOptions,n=a.defaultPlotOptions,w=a.defined,u=a.each,e=a.erase,h=a.extend,m=a.fireEvent,d=a.grep,c=a.isArray,b=a.isNumber,k=a.isString,z=a.merge,B=a.objectEach,I=a.pick,x=a.removeEvent,K=a.splat,t=a.SVGElement,C=a.syncTimeout,N=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",
lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},
{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,d,g=a.series,e;c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();h(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});d=b.events;B(d,function(a,b){E(c,b,a)});if(d&&d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();
c.getSymbol();u(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);g.length&&(e=g[g.length-1]);c._i=I(e&&e._i,-1)+1;a.orderSeries(this.insert(g))},insert:function(a){var c=this.options.index,d;if(b(c)){for(d=a.length;d--;)if(c>=I(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1}else a.push(this);return I(d,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,e;u(b.axisTypes||[],function(g){u(d[g],
function(a){e=a.options;if(c[g]===e.index||void 0!==c[g]&&c[g]===e.id||void 0===c[g]&&0===e.index)b.insert(a.series),b[g]=a,a.isDirty=!0});b[g]||b.optionalAxis===g||a.error(18,!0)})},updateParallelArrays:function(a,c){var d=a.series,e=arguments,g=b(c)?function(b){var g="y"===b&&d.toYData?d.toYData(a):a[b];d[b+"Data"][c]=g}:function(a){Array.prototype[c].apply(d[a+"Data"],Array.prototype.slice.call(e,2))};u(d.parallelArrays,g)},autoIncrement:function(){var b=this.options,c=this.xIncrement,d,e=b.pointIntervalUnit,
g=0,c=I(c,b.pointStart,0);this.pointInterval=d=I(this.pointInterval,b.pointInterval,1);e&&(b=new l(c),"day"===e?b=+b[l.hcSetDate](b[l.hcGetDate]()+d):"month"===e?b=+b[l.hcSetMonth](b[l.hcGetMonth]()+d):"year"===e&&(b=+b[l.hcSetFullYear](b[l.hcGetFullYear]()+d)),l.hcHasTimeZone&&(g=a.getTZOffset(b)-a.getTZOffset(c)),d=b-c+g);this.xIncrement=c+d;return c},setOptions:function(a){var b=this.chart,c=b.options,d=c.plotOptions,g=(b.userOptions||{}).plotOptions||{},e=d[this.type];this.userOptions=a;b=z(e,
d.series,a);this.tooltipOptions=z(r.tooltip,r.plotOptions.series&&r.plotOptions.series.tooltip,r.plotOptions[this.type].tooltip,c.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=I(a.stickyTracking,g[this.type]&&g[this.type].stickyTracking,g.series&&g.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===e.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&
!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&w(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getCyclic:function(a,b,c){var d,g=this.chart,e=this.userOptions,k=a+"Index",h=a+"Counter",q=c?c.length:I(g.options.chart[a+"Count"],g[a+"Count"]);b||(d=I(e[k],e["_"+k]),w(d)||(g.series.length||(g[h]=0),e["_"+k]=d=g[h]%q,g[h]+=1),
c&&(b=c[d]));void 0!==d&&(this[k]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||n[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(d,e,h,f){var g=this,q=g.points,m=q&&q.length||0,l,A=g.options,t=g.chart,x=null,n=g.xAxis,p=A.turboThreshold,z=this.xData,F=
this.yData,C=(l=g.pointArrayMap)&&l.length;d=d||[];l=d.length;e=I(e,!0);if(!1!==f&&l&&m===l&&!g.cropped&&!g.hasGroupedData&&g.visible)u(d,function(a,b){q[b].update&&a!==A.data[b]&&q[b].update(a,!1,null,!1)});else{g.xIncrement=null;g.colorCounter=0;u(this.parallelArrays,function(a){g[a+"Data"].length=0});if(p&&l>p){for(h=0;null===x&&h<l;)x=d[h],h++;if(b(x))for(h=0;h<l;h++)z[h]=this.autoIncrement(),F[h]=d[h];else if(c(x))if(C)for(h=0;h<l;h++)x=d[h],z[h]=x[0],F[h]=x.slice(1,C+1);else for(h=0;h<l;h++)x=
d[h],z[h]=x[0],F[h]=x[1];else a.error(12)}else for(h=0;h<l;h++)void 0!==d[h]&&(x={series:g},g.pointClass.prototype.applyOptions.apply(x,[d[h]]),g.updateParallelArrays(x,h));F&&k(F[0])&&a.error(14,!0);g.data=[];g.options.data=g.userOptions.data=d;for(h=m;h--;)q[h]&&q[h].destroy&&q[h].destroy();n&&(n.minRange=n.userMinRange);g.isDirty=t.isDirtyBox=!0;g.isDirtyData=!!q;h=!1}"point"===A.legendType&&(this.processData(),this.generatePoints());e&&t.redraw(h)},processData:function(b){var c=this.xData,d=this.yData,
e=c.length,g;g=0;var k,h,q=this.xAxis,f,m=this.options;f=m.cropThreshold;var l=this.getExtremesFromAll||m.getExtremesFromAll,t=this.isCartesian,m=q&&q.val2lin,x=q&&q.isLog,n=this.requireSorting,p,z;if(t&&!this.isDirty&&!q.isDirty&&!this.yAxis.isDirty&&!b)return!1;q&&(b=q.getExtremes(),p=b.min,z=b.max);if(t&&this.sorted&&!l&&(!f||e>f||this.forceCrop))if(c[e-1]<p||c[0]>z)c=[],d=[];else if(c[0]<p||c[e-1]>z)g=this.cropData(this.xData,this.yData,p,z),c=g.xData,d=g.yData,g=g.start,k=!0;for(f=c.length||
1;--f;)e=x?m(c[f])-m(c[f-1]):c[f]-c[f-1],0<e&&(void 0===h||e<h)?h=e:0>e&&n&&(a.error(15),n=!1);this.cropped=k;this.cropStart=g;this.processedXData=c;this.processedYData=d;this.closestPointRange=h},cropData:function(a,b,c,d){var g=a.length,e=0,k=g,h=I(this.cropShoulder,1),f;for(f=0;f<g;f++)if(a[f]>=c){e=Math.max(0,f-h);break}for(c=f;c<g;c++)if(a[c]>d){k=c+h;break}return{xData:a.slice(e,k),yData:b.slice(e,k),start:e,end:k}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,g=this.processedXData,
e=this.processedYData,k=this.pointClass,h=g.length,f=this.cropStart||0,m,l=this.hasGroupedData,a=a.keys,t,x=[],n;c||l||(c=[],c.length=b.length,c=this.data=c);a&&l&&(this.options.keys=!1);for(n=0;n<h;n++)m=f+n,l?(t=(new k).init(this,[g[n]].concat(K(e[n]))),t.dataGroup=this.groupMap[n]):(t=c[m])||void 0===b[m]||(c[m]=t=(new k).init(this,b[m],g[n])),t&&(t.index=m,x[n]=t);this.options.keys=a;if(c&&(h!==(d=c.length)||l))for(n=0;n<d;n++)n!==f||l||(n+=h),c[n]&&(c[n].destroyElements(),c[n].plotX=void 0);
this.data=c;this.points=x},getExtremes:function(a){var d=this.yAxis,e=this.processedXData,k,g=[],h=0;k=this.xAxis.getExtremes();var f=k.min,q=k.max,m,l,t,n;a=a||this.stackedYData||this.processedYData||[];k=a.length;for(n=0;n<k;n++)if(l=e[n],t=a[n],m=(b(t,!0)||c(t))&&(!d.positiveValuesOnly||t.length||0<t),l=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(e[n+1]||l)>=f&&(e[n-1]||l)<=q,m&&l)if(m=t.length)for(;m--;)"number"===typeof t[m]&&(g[h++]=t[m]);else g[h++]=t;this.dataMin=
p(g);this.dataMax=H(g)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,c=a.stacking,d=this.xAxis,e=d.categories,g=this.yAxis,k=this.points,h=k.length,m=!!this.modifyValue,l=a.pointPlacement,t="between"===l||b(l),n=a.threshold,x=a.startFromThreshold?n:0,p,z,C,r,u=Number.MAX_VALUE;"between"===l&&(l=.5);b(l)&&(l*=I(a.pointRange||d.pointRange));for(a=0;a<h;a++){var B=k[a],N=B.x,K=B.y;z=B.low;var D=c&&g.stacks[(this.negStacks&&K<(x?0:n)?"-":"")+this.stackKey],
E;g.positiveValuesOnly&&null!==K&&0>=K&&(B.isNull=!0);B.plotX=p=f(Math.min(Math.max(-1E5,d.translate(N,0,0,0,1,l,"flags"===this.type)),1E5));c&&this.visible&&!B.isNull&&D&&D[N]&&(r=this.getStackIndicator(r,N,this.index),E=D[N],K=E.points[r.key],z=K[0],K=K[1],z===x&&r.key===D[N].base&&(z=I(n,g.min)),g.positiveValuesOnly&&0>=z&&(z=null),B.total=B.stackTotal=E.total,B.percentage=E.total&&B.y/E.total*100,B.stackY=K,E.setOffset(this.pointXOffset||0,this.barW||0));B.yBottom=w(z)?g.translate(z,0,1,0,1):
null;m&&(K=this.modifyValue(K,B));B.plotY=z="number"===typeof K&&Infinity!==K?Math.min(Math.max(-1E5,g.translate(K,0,1,0,1)),1E5):void 0;B.isInside=void 0!==z&&0<=z&&z<=g.len&&0<=p&&p<=d.len;B.clientX=t?f(d.translate(N,0,0,0,1,l)):p;B.negative=B.y<(n||0);B.category=e&&void 0!==e[B.x]?e[B.x]:B.x;B.isNull||(void 0!==C&&(u=Math.min(u,Math.abs(p-C))),C=p);B.zone=this.zones.length&&B.getZone()}this.closestPointRangePx=u},getValidPoints:function(a,b){var c=this.chart;return d(a||this.points||[],function(a){return b&&
!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,g=b.inverted,e=this.clipBox,k=e||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,k.height,c.xAxis,c.yAxis].join(),f=b[h],q=b[h+"m"];f||(a&&(k.width=0,g&&(k.x=b.plotSizeX),b[h+"m"]=q=d.clipRect(g?b.plotSizeX+99:-99,g?-b.plotLeft:-b.plotTop,99,g?b.chartWidth:b.chartHeight)),b[h]=f=d.clipRect(k),f.count={length:0});a&&!f.count[this.index]&&(f.count[this.index]=
!0,f.count.length+=1);!1!==c.clip&&(this.group.clip(a||e?f:b.clipRect),this.markerGroup.clip(q),this.sharedClipKey=h);a||(f.count[this.index]&&(delete f.count[this.index],--f.count.length),0===f.count.length&&h&&b[h]&&(e||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,c=D(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=
null)},afterAnimate:function(){this.setClip();m(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,d,g,e,k=this.options.marker,h,f,l,m=this[this.specialGroup]||this.markerGroup,t,n=I(k.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*k.radius);if(!1!==k.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=a[c],e=d.graphic,h=d.marker||{},f=!!d.marker,g=n&&void 0===h.enabled||h.enabled,l=d.isInside,g&&!d.isNull?(g=I(h.symbol,this.symbol),
d.hasImage=0===g.indexOf("url"),t=this.markerAttribs(d,d.selected&&"select"),e?e[l?"show":"hide"](!0).animate(t):l&&(0<t.width||d.hasImage)&&(d.graphic=e=b.renderer.symbol(g,t.x,t.y,t.width,t.height,f?h:k).add(m)),e&&e.attr(this.pointAttribs(d,d.selected&&"select")),e&&e.addClass(d.getClassName(),!0)):e&&(d.graphic=e.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},g=I(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],g=I(b&&b.radius,c&&c.radius,g+(c&&c.radiusPlus||
0)));a.hasImage&&(g=0);a={x:Math.floor(a.plotX)-g,y:a.plotY-g};g&&(a.width=a.height=2*g);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,g=d&&d.marker||{},e=this.color,k=d&&d.color,h=a&&a.color,d=I(g.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;e=k||a||h||e;a=g.fillColor||c.fillColor||e;e=g.lineColor||c.lineColor||e;b&&(c=c.states[b],b=g.states&&g.states[b]||{},d=I(b.lineWidth,c.lineWidth,d+I(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,e=b.lineColor||
c.lineColor||e);return{stroke:e,"stroke-width":d,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(N.navigator.userAgent),d,g,k=a.data||[],h,f;m(a,"destroy");x(a);u(a.axisTypes||[],function(b){(f=a[b])&&f.series&&(e(f.series,a),f.isDirty=f.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(g=k.length;g--;)(h=k[g])&&h.destroy&&h.destroy();a.points=null;clearTimeout(a.animationTimeout);B(a,function(a,b){a instanceof t&&!a.survive&&(d=c&&"group"===b?"hide":"destroy",
a[d]())});b.hoverSeries===a&&(b.hoverSeries=null);e(b.series,a);b.orderSeries();B(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var d=this,g=d.options,e=g.step,k,h=[],f=[],l;a=a||d.points;(k=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&k&&(e=4-e);!g.connectNulls||b||c||(a=this.getValidPoints(a));u(a,function(k,m){var q=k.plotX,t=k.plotY,n=a[m-1];(k.leftCliff||n&&n.rightCliff)&&!c&&(l=!0);k.isNull&&!w(b)&&0<m?l=!g.connectNulls:k.isNull&&!b?l=!0:(0===m||l?m=["M",k.plotX,k.plotY]:
d.getPointSpline?m=d.getPointSpline(a,k,m):e?(m=1===e?["L",n.plotX,t]:2===e?["L",(n.plotX+q)/2,n.plotY,"L",(n.plotX+q)/2,t]:["L",q,n.plotY],m.push("L",q,t)):m=["L",q,t],f.push(k.x),e&&f.push(k.x),h.push.apply(h,m),l=!1)});h.xMap=f;return d.graphPath=h},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];u(this.zones,function(c,e){d.push(["zone-graph-"+e,"highcharts-graph highcharts-zone-graph-"+
e+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});u(d,function(d,e){var g=d[0],k=a[g];k?(k.endX=a.preventGraphAnimation?null:c.xMap,k.animate({d:c})):c.length&&(a[g]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),k={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?k.dashstyle=d[3]:"square"!==b.linecap&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),k=a[g].attr(k).shadow(2>e&&b.shadow));k&&(k.startX=c.xMap,k.isArea=c.isArea)})},
applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,k,h=this.clips||[],f,m=this.graph,l=this.area,t=Math.max(b.chartWidth,b.chartHeight),n=this[(this.zoneAxis||"y")+"Axis"],x,p,z=b.inverted,C,r,w,B,K=!1;d.length&&(m||l)&&n&&void 0!==n.min&&(p=n.reversed,C=n.horiz,m&&m.hide(),l&&l.hide(),x=n.getExtremes(),u(d,function(d,g){e=p?C?b.plotWidth:0:C?0:n.toPixels(x.min);e=Math.min(Math.max(I(k,e),0),t);k=Math.min(Math.max(Math.round(n.toPixels(I(d.value,x.max),!0)),0),t);K&&(e=k=n.toPixels(x.max));
r=Math.abs(e-k);w=Math.min(e,k);B=Math.max(e,k);n.isXAxis?(f={x:z?B:w,y:0,width:r,height:t},C||(f.x=b.plotHeight-f.x)):(f={x:0,y:z?B:w,width:t,height:r},C&&(f.y=b.plotWidth-f.y));z&&c.isVML&&(f=n.isXAxis?{x:0,y:p?w:B,height:f.width,width:b.chartWidth}:{x:f.y-b.plotLeft-b.spacingBox.x,y:0,width:f.height,height:b.chartHeight});h[g]?h[g].animate(f):(h[g]=c.clipRect(f),m&&a["zone-graph-"+g].clip(h[g]),l&&a["zone-area-"+g].clip(h[g]));K=d.value>x.max}),this.clips=h)},invertGroups:function(a){function b(){u(["group",
"markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,e;c.xAxis&&(e=E(d,"resize",b),E(c,"destroy",e),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,e){var g=this[a],k=!g;k&&(this[a]=g=this.chart.renderer.g().attr({zIndex:d||.1}).add(e));g.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(w(this.colorIndex)?"highcharts-color-"+
this.colorIndex+" ":"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr({visibility:c})[k?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&D(d.animation).duration,k=a.visible?"inherit":
"hidden",h=d.zIndex,f=a.hasRendered,m=b.seriesGroup,l=b.inverted;c=a.plotGroup("group","series",k,h,m);a.markerGroup=a.plotGroup("markerGroup","markers",k,h,m);e&&a.animate(!0);c.inverted=a.isCartesian?l:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(l);!1===d.clip||a.sharedClipKey||f||c.clip(b.clipRect);e&&a.animate();f||(a.animationTimeout=C(function(){a.afterAnimate()},
e));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:I(d&&d.left,a.plotLeft),translateY:I(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+
c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,e){var g,k;if(k=c&&c.length)return g=b.kdAxisArray[d%e],c.sort(function(a,b){return a[g]-b[g]}),k=Math.floor(k/2),{point:c[k],left:a(c.slice(0,k),d+1,e),right:a(c.slice(k+1),d+1,e)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;C(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},
searchKDTree:function(a,b){function c(a,b,g,f){var m=b.point,l=d.kdAxisArray[g%f],q,t,n=m;t=w(a[e])&&w(m[e])?Math.pow(a[e]-m[e],2):null;q=w(a[k])&&w(m[k])?Math.pow(a[k]-m[k],2):null;q=(t||0)+(q||0);m.dist=w(q)?Math.sqrt(q):Number.MAX_VALUE;m.distX=w(t)?Math.sqrt(t):Number.MAX_VALUE;l=a[l]-m[l];q=0>l?"left":"right";t=0>l?"right":"left";b[q]&&(q=c(a,b[q],g+1,f),n=q[h]<n[h]?q:m);b[t]&&Math.sqrt(l*l)<n[h]&&(a=c(a,b[t],g+1,f),n=a[h]<n[h]?a:n);return n}var d=this,e=this.kdAxisArray[0],k=this.kdAxisArray[1],
h=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(M);(function(a){var E=a.Axis,D=a.Chart,H=a.correctFloat,p=a.defined,f=a.destroyObjectProperties,l=a.each,r=a.format,n=a.objectEach,w=a.pick,u=a.Series;a.StackItem=function(a,h,f,d,c){var b=a.chart.inverted;this.axis=a;this.isNegative=f;this.options=h;this.x=d;this.total=null;this.points={};this.stack=c;this.rightCliff=this.leftCliff=
0;this.alignOptions={align:h.align||(b?f?"left":"right":"center"),verticalAlign:h.verticalAlign||(b?"middle":f?"bottom":"top"),y:w(h.y,b?4:f?14:-6),x:w(h.x,b?f?-6:6:0)};this.textAlign=h.textAlign||(b?f?"right":"left":"center")};a.StackItem.prototype={destroy:function(){f(this,this.axis)},render:function(a){var e=this.options,f=e.format,f=f?r(f,this):e.formatter.call(this);this.label?this.label.attr({text:f,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(f,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,
rotation:e.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,h){var e=this.axis,d=e.chart,c=e.translate(e.usePercentage?100:this.total,0,0,0,1),e=e.translate(0),e=Math.abs(c-e);a=d.xAxis[0].translate(this.x)+a;c=this.getStackBox(d,this,a,c,h,e);if(h=this.label)h.align(this.alignOptions,null,c),c=h.alignAttr,h[!1===this.options.crop||d.isInsidePlot(c.x,c.y)?"show":"hide"](!0)},getStackBox:function(a,h,f,d,c,b){var e=h.axis.reversed,l=a.inverted;a=a.plotHeight;h=h.isNegative&&!e||!h.isNegative&&
e;return{x:l?h?d:d-b:f,y:l?a-f-c:h?a-d-b:a-d,width:l?b:c,height:l?c:b}}};D.prototype.getStacks=function(){var a=this;l(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});l(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+w(e.options.stack,""))})};E.prototype.buildStacks=function(){var a=this.series,h=w(this.options.reversedStacks,!0),f=a.length,d;if(!this.isXAxis){this.usePercentage=!1;for(d=f;d--;)a[h?d:
f-d-1].setStackedPoints();for(d=0;d<f;d++)a[d].modifyStacks()}};E.prototype.renderStackTotals=function(){var a=this.chart,h=a.renderer,f=this.stacks,d=this.stackTotalGroup;d||(this.stackTotalGroup=d=h.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());d.translate(a.plotLeft,a.plotTop);n(f,function(a){n(a,function(a){a.render(d)})})};E.prototype.resetStacks=function(){var a=this,h=a.stacks;a.isXAxis||n(h,function(e){n(e,function(d,c){d.touched<a.stacksTouched?(d.destroy(),delete e[c]):
(d.total=null,d.cumulative=null)})})};E.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),n(a,function(a){n(a,function(a){a.cumulative=a.total})}))};u.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var e=this.processedXData,h=this.processedYData,f=[],d=h.length,c=this.options,b=c.threshold,k=w(c.startFromThreshold&&b,0),l=c.stack,c=c.stacking,n=this.stackKey,r=
"-"+n,x=this.negStacks,u=this.yAxis,t=u.stacks,C=u.oldStacks,N,q,A,F,G,g,v;u.stacksTouched+=1;for(G=0;G<d;G++)g=e[G],v=h[G],N=this.getStackIndicator(N,g,this.index),F=N.key,A=(q=x&&v<(k?0:b))?r:n,t[A]||(t[A]={}),t[A][g]||(C[A]&&C[A][g]?(t[A][g]=C[A][g],t[A][g].total=null):t[A][g]=new a.StackItem(u,u.options.stackLabels,q,g,l)),A=t[A][g],null!==v?(A.points[F]=A.points[this.index]=[w(A.cumulative,k)],p(A.cumulative)||(A.base=F),A.touched=u.stacksTouched,0<N.index&&!1===this.singleStacks&&(A.points[F][0]=
A.points[this.index+","+g+",0"][0])):A.points[F]=A.points[this.index]=null,"percent"===c?(q=q?n:r,x&&t[q]&&t[q][g]?(q=t[q][g],A.total=q.total=Math.max(q.total,A.total)+Math.abs(v)||0):A.total=H(A.total+(Math.abs(v)||0))):A.total=H(A.total+(v||0)),A.cumulative=w(A.cumulative,k)+(v||0),null!==v&&(A.points[F].push(A.cumulative),f[G]=A.cumulative);"percent"===c&&(u.usePercentage=!0);this.stackedYData=f;u.oldStacks={}}};u.prototype.modifyStacks=function(){var a=this,h=a.stackKey,f=a.yAxis.stacks,d=a.processedXData,
c,b=a.options.stacking;a[b+"Stacker"]&&l([h,"-"+h],function(e){for(var k=d.length,h,l;k--;)if(h=d[k],c=a.getStackIndicator(c,h,a.index,e),l=(h=f[e]&&f[e][h])&&h.points[c.key])a[b+"Stacker"](l,h,k)})};u.prototype.percentStacker=function(a,h,f){h=h.total?100/h.total:0;a[0]=H(a[0]*h);a[1]=H(a[1]*h);this.stackedYData[f]=a[1]};u.prototype.getStackIndicator=function(a,h,f,d){!p(a)||a.x!==h||d&&a.key!==d?a={x:h,index:0,key:d}:a.index++;a.key=[f,h,a.index].join();return a}})(M);(function(a){var E=a.addEvent,
D=a.animate,H=a.Axis,p=a.createElement,f=a.css,l=a.defined,r=a.each,n=a.erase,w=a.extend,u=a.fireEvent,e=a.inArray,h=a.isNumber,m=a.isObject,d=a.isArray,c=a.merge,b=a.objectEach,k=a.pick,z=a.Point,B=a.Series,I=a.seriesTypes,x=a.setAnimation,K=a.splat;w(a.Chart.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=k(b,!0),u(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,d,e){var h=b?"xAxis":"yAxis",f=this.options;
a=c(a,{index:this[h].length,isX:b});b=new H(this,a);f[h]=K(f[h]||{});f[h].push(a);k(d,!0)&&this.redraw(e);return b},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,k=function(){d&&f(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=p("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=p("span",{className:"highcharts-loading-inner"},null,d),E(b,"redraw",k));d.className=
"highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;f(d,w(e.style,{zIndex:10}));f(b.loadingSpan,e.labelStyle);b.loadingShown||(f(d,{opacity:0,display:""}),D(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));b.loadingShown=!0;k()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",D(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){f(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),update:function(a,d,f){var m=this,n={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},t=a.chart,x,g,p=[];if(t){c(!0,m.options.chart,t);"className"in t&&m.setClassName(t.className);if("inverted"in t||"polar"in t)m.propFromSeries(),x=!0;"alignTicks"in t&&(x=!0);b(t,function(a,b){-1!==e("chart."+b,m.propsRequireUpdateSeries)&&(g=!0);-1!==e(b,m.propsRequireDirtyBox)&&
(m.isDirtyBox=!0)});"style"in t&&m.renderer.setStyle(t.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&c(!0,this.options.plotOptions,a.plotOptions);b(a,function(a,b){if(m[b]&&"function"===typeof m[b].update)m[b].update(a,!1);else if("function"===typeof m[n[b]])m[n[b]](a);"chart"!==b&&-1!==e(b,m.propsRequireUpdateSeries)&&(g=!0)});r("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(r(K(a[b]),function(a,c){(c=l(a.id)&&m.get(a.id)||m[b][c])&&c.coll===b&&(c.update(a,
!1),f&&(c.touched=!0));if(!c&&f)if("series"===b)m.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)m.addAxis(a,"xAxis"===b,!1).touched=!0}),f&&r(m[b],function(a){a.touched?delete a.touched:p.push(a)}))});r(p,function(a){a.remove(!1)});x&&r(m.axes,function(a){a.update({},!1)});g&&r(m.series,function(a){a.update({},!1)});a.loading&&c(!0,m.options.loading,a.loading);x=t&&t.width;t=t&&t.height;h(x)&&x!==m.chartWidth||h(t)&&t!==m.chartHeight?m.setSize(x,t):k(d,!0)&&m.redraw()},setSubtitle:function(a){this.setTitle(void 0,
a)}});w(z.prototype,{update:function(a,b,c,d){function e(){h.applyOptions(a);null===h.y&&g&&(h.graphic=g.destroy());m(a,!0)&&(g&&g.element&&a&&a.marker&&void 0!==a.marker.symbol&&(h.graphic=g.destroy()),a&&a.dataLabels&&h.dataLabel&&(h.dataLabel=h.dataLabel.destroy()),h.connector&&(h.connector=h.connector.destroy()));l=h.index;f.updateParallelArrays(h,l);t.data[l]=m(t.data[l],!0)||m(a,!0)?h.options:a;f.isDirty=f.isDirtyData=!0;!f.fixedBox&&f.hasCartesianSeries&&(n.isDirtyBox=!0);"point"===t.legendType&&
(n.isDirtyLegend=!0);b&&n.redraw(c)}var h=this,f=h.series,g=h.graphic,l,n=f.chart,t=f.options;b=k(b,!0);!1===d?e():h.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(e(this,this.series.data),a,b)}});w(B.prototype,{addPoint:function(a,b,c,d){var e=this.options,h=this.data,f=this.chart,g=this.xAxis,g=g&&g.hasNames&&g.names,l=e.data,m,n,t=this.xData,q,x;b=k(b,!0);m={series:this};this.pointClass.prototype.applyOptions.apply(m,[a]);x=m.x;q=t.length;if(this.requireSorting&&
x<t[q-1])for(n=!0;q&&t[q-1]>x;)q--;this.updateParallelArrays(m,"splice",q,0,0);this.updateParallelArrays(m,q);g&&m.name&&(g[x]=m.name);l.splice(q,0,a);n&&(this.data.splice(q,0,null),this.processData());"point"===e.legendType&&this.generatePoints();c&&(h[0]&&h[0].remove?h[0].remove(!1):(h.shift(),this.updateParallelArrays(m,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;b&&f.redraw(d)},removePoint:function(a,b,c){var d=this,e=d.data,h=e[a],f=d.points,g=d.chart,l=function(){f&&f.length===e.length&&
f.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(h||{series:d},"splice",a,1);h&&h.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&g.redraw()};x(c,g);b=k(b,!0);h?h.firePointEvent("remove",null,l):l()},remove:function(a,b,c){function d(){e.destroy();h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();k(a,!0)&&h.redraw(b)}var e=this,h=e.chart;!1!==c?u(e,"remove",null,d):d()},update:function(a,b){var d=this,e=d.chart,h=d.userOptions,f=d.oldType||d.type,l=a.type||h.type||e.options.chart.type,
g=I[f].prototype,m,n=["group","markerGroup","dataLabelsGroup"],t=["navigatorSeries","baseSeries"],x=d.finishedAnimating&&{animation:!1};if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,b);t=n.concat(t);r(t,function(a){t[a]=d[a];delete d[a]});a=c(h,x,{index:d.index,pointStart:d.xData[0]},{data:d.options.data},a);d.remove(!1,null,!1);for(m in g)d[m]=void 0;w(d,I[l||f].prototype);r(t,function(a){d[a]=t[a]});d.init(e,a);a.zIndex!==h.zIndex&&r(n,function(b){d[b]&&d[b].attr({zIndex:a.zIndex})});
d.oldType=f;e.linkSeries();k(b,!0)&&e.redraw(!1)}});w(H.prototype,{update:function(a,b){var d=this.chart;a=d.options[this.coll][this.options.index]=c(this.userOptions,a);this.destroy(!0);this.init(d,w(a,{events:void 0}));d.isDirtyBox=!0;k(b,!0)&&d.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,e=this.series,h=e.length;h--;)e[h]&&e[h].remove(!1);n(b.axes,this);n(b[c],this);d(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];r(b[c],function(a,b){a.options.index=
b});this.destroy();b.isDirtyBox=!0;k(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(M);(function(a){var E=a.color,D=a.each,H=a.map,p=a.pick,f=a.Series,l=a.seriesType;l("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(f){var l=[],r=[],u=this.xAxis,e=this.yAxis,h=e.stacks[this.stackKey],m={},d=this.index,c=e.series,b=c.length,k,z=p(e.options.reversedStacks,!0)?1:-1,B;f=f||this.points;
if(this.options.stacking){for(B=0;B<f.length;B++)f[B].leftNull=f[B].rightNull=null,m[f[B].x]=f[B];a.objectEach(h,function(a,b){null!==a.total&&r.push(b)});r.sort(function(a,b){return a-b});k=H(c,function(){return this.visible});D(r,function(a,c){var f=0,n,x;if(m[a]&&!m[a].isNull)l.push(m[a]),D([-1,1],function(e){var f=1===e?"rightNull":"leftNull",l=0,t=h[r[c+e]];if(t)for(B=d;0<=B&&B<b;)n=t.points[B],n||(B===d?m[a][f]=!0:k[B]&&(x=h[a].points[B])&&(l-=x[1]-x[0])),B+=z;m[a][1===e?"rightCliff":"leftCliff"]=
l});else{for(B=d;0<=B&&B<b;){if(n=h[a].points[B]){f=n[1];break}B+=z}f=e.translate(f,0,1,0,1);l.push({isNull:!0,plotX:u.translate(a,0,0,0,1),x:a,plotY:f,yBottom:f})}})}return l},getGraphPath:function(a){var l=f.prototype.getGraphPath,r=this.options,u=r.stacking,e=this.yAxis,h,m,d=[],c=[],b=this.index,k,z=e.stacks[this.stackKey],B=r.threshold,I=e.getThreshold(r.threshold),x,r=r.connectNulls||"percent"===u,K=function(h,f,l){var m=a[h];h=u&&z[m.x].points[b];var n=m[l+"Null"]||0;l=m[l+"Cliff"]||0;var x,
t,m=!0;l||n?(x=(n?h[0]:h[1])+l,t=h[0]+l,m=!!n):!u&&a[f]&&a[f].isNull&&(x=t=B);void 0!==x&&(c.push({plotX:k,plotY:null===x?I:e.getThreshold(x),isNull:m,isCliff:!0}),d.push({plotX:k,plotY:null===t?I:e.getThreshold(t),doCurve:!1}))};a=a||this.points;u&&(a=this.getStackPoints(a));for(h=0;h<a.length;h++)if(m=a[h].isNull,k=p(a[h].rectPlotX,a[h].plotX),x=p(a[h].yBottom,I),!m||r)r||K(h,h-1,"left"),m&&!u&&r||(c.push(a[h]),d.push({x:h,plotX:k,plotY:x})),r||K(h,h+1,"right");h=l.call(this,c,!0,!0);d.reversed=
!0;m=l.call(this,d,!0,!0);m.length&&(m[0]="L");m=h.concat(m);l=l.call(this,c,!1,r);m.xMap=h.xMap;this.areaPath=m;return l},drawGraph:function(){this.areaPath=[];f.prototype.drawGraph.apply(this);var a=this,l=this.areaPath,w=this.options,u=[["area","highcharts-area",this.color,w.fillColor]];D(this.zones,function(e,h){u.push(["zone-area-"+h,"highcharts-area highcharts-zone-area-"+h+" "+e.className,e.color||a.color,e.fillColor||w.fillColor])});D(u,function(e){var h=e[0],f=a[h];f?(f.endX=a.preventGraphAnimation?
null:l.xMap,f.animate({d:l})):(f=a[h]=a.chart.renderer.path(l).addClass(e[1]).attr({fill:p(e[3],E(e[2]).setOpacity(p(w.fillOpacity,.75)).get()),zIndex:0}).add(a.group),f.isArea=!0);f.startX=l.xMap;f.shiftUnit=w.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(M);(function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,H,p){var f=H.plotX,l=H.plotY,r=a[p-1];p=a[p+1];var n,w,u,e;if(r&&!r.isNull&&!1!==r.doCurve&&!H.isCliff&&p&&!p.isNull&&!1!==p.doCurve&&
!H.isCliff){a=r.plotY;u=p.plotX;p=p.plotY;var h=0;n=(1.5*f+r.plotX)/2.5;w=(1.5*l+a)/2.5;u=(1.5*f+u)/2.5;e=(1.5*l+p)/2.5;u!==n&&(h=(e-w)*(u-f)/(u-n)+l-e);w+=h;e+=h;w>a&&w>l?(w=Math.max(a,l),e=2*l-w):w<a&&w<l&&(w=Math.min(a,l),e=2*l-w);e>p&&e>l?(e=Math.max(p,l),w=2*l-e):e<p&&e<l&&(e=Math.min(p,l),w=2*l-e);H.rightContX=u;H.rightContY=e}H=["C",E(r.rightContX,r.plotX),E(r.rightContY,r.plotY),E(n,f),E(w,l),f,l];r.rightContX=r.rightContY=null;return H}})})(M);(function(a){var E=a.seriesTypes.area.prototype,
D=a.seriesType;D("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,getGraphPath:E.getGraphPath,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(M);(function(a){var E=a.animObject,D=a.color,H=a.each,p=a.extend,f=a.isNumber,l=a.merge,r=a.pick,n=a.Series,w=a.seriesType,u=a.svg;w("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},
select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){n.prototype.init.apply(this,arguments);var a=this,h=a.chart;h.hasRendered&&H(h.series,function(e){e.type===a.type&&(e.isDirty=!0)})},getColumnMetrics:function(){var a=this,h=a.options,f=a.xAxis,
d=a.yAxis,c=f.reversed,b,k={},l=0;!1===h.grouping?l=1:H(a.chart.series,function(c){var e=c.options,h=c.yAxis,f;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||d.len!==h.len||d.pos!==h.pos||(e.stacking?(b=c.stackKey,void 0===k[b]&&(k[b]=l++),f=k[b]):!1!==e.grouping&&(f=l++),c.columnIndex=f)});var n=Math.min(Math.abs(f.transA)*(f.ordinalSlope||h.pointRange||f.closestPointRange||f.tickInterval||1),f.len),p=n*h.groupPadding,x=(n-2*p)/(l||1),h=Math.min(h.maxPointWidth||f.len,r(h.pointWidth,
x*(1-2*h.pointPadding)));a.columnMetrics={width:h,offset:(x-h)/2+(p+((a.columnIndex||0)+(c?1:0))*x-n/2)*(c?-1:1)};return a.columnMetrics},crispCol:function(a,h,f,d){var c=this.chart,b=this.borderWidth,e=-(b%2?.5:0),b=b%2?.5:1;c.inverted&&c.renderer.isVML&&(b+=1);this.options.crisp&&(f=Math.round(a+f)+e,a=Math.round(a)+e,f-=a);d=Math.round(h+d)+b;e=.5>=Math.abs(h)&&.5<d;h=Math.round(h)+b;d-=h;e&&d&&(--h,d+=1);return{x:a,y:h,width:f,height:d}},translate:function(){var a=this,h=a.chart,f=a.options,d=
a.dense=2>a.closestPointRange*a.xAxis.transA,d=a.borderWidth=r(f.borderWidth,d?0:1),c=a.yAxis,b=f.threshold,k=a.translatedThreshold=c.getThreshold(b),l=r(f.minPointLength,5),p=a.getColumnMetrics(),u=p.width,x=a.barW=Math.max(u,1+2*d),w=a.pointXOffset=p.offset;h.inverted&&(k-=.5);f.pointPadding&&(x=Math.ceil(x));n.prototype.translate.apply(a);H(a.points,function(d){var e=r(d.yBottom,k),f=999+Math.abs(e),f=Math.min(Math.max(-f,d.plotY),c.len+f),m=d.plotX+w,n=x,t=Math.min(f,e),p,g=Math.max(f,e)-t;l&&
Math.abs(g)<l&&(g=l,p=!c.reversed&&!d.negative||c.reversed&&d.negative,d.y===b&&a.dataMax<=b&&c.min<b&&(p=!p),t=Math.abs(t-k)>l?e-l:k-(p?l:0));d.barX=m;d.pointWidth=u;d.tooltipPos=h.inverted?[c.len+c.pos-h.plotLeft-f,a.xAxis.len-m-n/2,g]:[m+n/2,f+c.pos-h.plotTop,g];d.shapeType="rect";d.shapeArgs=a.crispCol.apply(a,d.isNull?[m,k,n,0]:[m,t,n,g])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},
pointAttribs:function(a,f){var e=this.options,d,c=this.pointAttrToOptions||{};d=c.stroke||"borderColor";var b=c["stroke-width"]||"borderWidth",k=a&&a.color||this.color,h=a&&a[d]||e[d]||this.color||k,n=a&&a[b]||e[b]||this[b]||0,c=e.dashStyle;a&&this.zones.length&&(k=a.getZone(),k=a.options.color||k&&k.color||this.color);f&&(a=l(e.states[f],a.options.states&&a.options.states[f]||{}),f=a.brightness,k=a.color||void 0!==f&&D(k).brighten(a.brightness).get()||k,h=a[d]||h,n=a[b]||n,c=a.dashStyle||c);d={fill:k,
stroke:h,"stroke-width":n};c&&(d.dashstyle=c);return d},drawPoints:function(){var a=this,h=this.chart,m=a.options,d=h.renderer,c=m.animationLimit||250,b;H(a.points,function(e){var k=e.graphic;if(f(e.plotY)&&null!==e.y){b=e.shapeArgs;if(k)k[h.pointCount<c?"animate":"attr"](l(b));else e.graphic=k=d[e.shapeType](b).add(e.group||a.group);m.borderRadius&&k.attr({r:m.borderRadius});k.attr(a.pointAttribs(e,e.selected&&"select")).shadow(m.shadow,null,m.stacking&&!m.borderRadius);k.addClass(e.getClassName(),
!0)}else k&&(e.graphic=k.destroy())})},animate:function(a){var e=this,f=this.yAxis,d=e.options,c=this.chart.inverted,b={},k=c?"translateX":"translateY",l;u&&(a?(b.scaleY=.001,a=Math.min(f.pos+f.len,Math.max(f.pos,f.toPixels(d.threshold))),c?b.translateX=a-f.len:b.translateY=a,e.group.attr(b)):(l=e.group.attr(k),e.group.animate({scaleY:1},p(E(e.options.animation),{step:function(a,c){b[k]=l+c.pos*(f.pos-l);e.group.attr(b)}})),e.animate=null))},remove:function(){var a=this,f=a.chart;f.hasRendered&&H(f.series,
function(e){e.type===a.type&&(e.isDirty=!0)});n.prototype.remove.apply(a,arguments)}})})(M);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(M);(function(a){var E=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&E.prototype.drawGraph.call(this)}})})(M);(function(a){var E=a.deg2rad,D=a.isNumber,H=a.pick,p=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,l=this.chart,r=2*(a.slicedOffset||0),n=l.plotWidth-2*r,l=l.plotHeight-2*r,w=a.center,w=[H(w[0],"50%"),H(w[1],"50%"),a.size||"100%",a.innerSize||0],u=Math.min(n,
l),e,h;for(e=0;4>e;++e)h=w[e],a=2>e||2===e&&/%$/.test(h),w[e]=p(h,[n,l,u,w[2]][e])+(a?r:0);w[3]>w[2]&&(w[3]=w[2]);return w},getStartAndEndRadians:function(a,l){a=D(a)?a:0;l=D(l)&&l>a&&360>l-a?l:a+360;return{start:E*(a+-90),end:E*(l+-90)}}}})(M);(function(a){var E=a.addEvent,D=a.CenteredSeriesMixin,H=a.defined,p=a.each,f=a.extend,l=D.getStartAndEndRadians,r=a.inArray,n=a.noop,w=a.pick,u=a.Point,e=a.Series,h=a.seriesType,m=a.setAnimation;h("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,
enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=
this,b=c.points,d=c.startAngleRad;a||(p(b,function(a){var b=a.graphic,e=a.shapeArgs;b&&(b.attr({r:a.startR||c.center[3]/2,start:d,end:d}),b.animate({r:e.r,start:e.start,end:e.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,c=0,b=this.points,e=b.length,f,h=this.options.ignoreHiddenPoint;for(a=0;a<e;a++)f=b[a],c+=h&&!f.visible?0:f.isNull?0:f.y;this.total=c;for(a=0;a<e;a++)f=b[a],f.percentage=0<c&&(f.visible||!h)?f.y/c*100:0,f.total=c},generatePoints:function(){e.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var c=0,b=this.options,d=b.slicedOffset,e=d+(b.borderWidth||0),f,h,m,n=l(b.startAngle,b.endAngle),t=this.startAngleRad=n.start,n=(this.endAngleRad=n.end)-t,p=this.points,u,q=b.dataLabels.distance,b=b.ignoreHiddenPoint,r,F=p.length,G;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){m=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(m)*(a[2]/2+d.labelDistance)};for(r=0;r<F;r++){G=p[r];
G.labelDistance=w(G.options.dataLabels&&G.options.dataLabels.distance,q);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,G.labelDistance);f=t+c*n;if(!b||G.visible)c+=G.percentage/100;h=t+c*n;G.shapeType="arc";G.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*f)/1E3,end:Math.round(1E3*h)/1E3};m=(h+f)/2;m>1.5*Math.PI?m-=2*Math.PI:m<-Math.PI/2&&(m+=2*Math.PI);G.slicedTranslation={translateX:Math.round(Math.cos(m)*d),translateY:Math.round(Math.sin(m)*d)};h=Math.cos(m)*a[2]/
2;u=Math.sin(m)*a[2]/2;G.tooltipPos=[a[0]+.7*h,a[1]+.7*u];G.half=m<-Math.PI/2||m>Math.PI/2?1:0;G.angle=m;f=Math.min(e,G.labelDistance/5);G.labelPos=[a[0]+h+Math.cos(m)*G.labelDistance,a[1]+u+Math.sin(m)*G.labelDistance,a[0]+h+Math.cos(m)*f,a[1]+u+Math.sin(m)*f,a[0]+h,a[1]+u,0>G.labelDistance?"center":G.half?"right":"left",m]}},drawGraph:null,drawPoints:function(){var a=this,c=a.chart.renderer,b,e,h,l,m=a.options.shadow;m&&!a.shadowGroup&&(a.shadowGroup=c.g("shadow").add(a.group));p(a.points,function(d){e=
d.graphic;if(d.isNull)e&&(d.graphic=e.destroy());else{l=d.shapeArgs;b=d.getTranslate();var k=d.shadowGroup;m&&!k&&(k=d.shadowGroup=c.g("shadow").add(a.shadowGroup));k&&k.attr(b);h=a.pointAttribs(d,d.selected&&"select");e?e.setRadialReference(a.center).attr(h).animate(f(l,b)):(d.graphic=e=c[d.shapeType](l).setRadialReference(a.center).attr(b).add(a.group),d.visible||e.attr({visibility:"hidden"}),e.attr(h).attr({"stroke-linejoin":"round"}).shadow(m,k));e.addClass(d.getClassName())}})},searchPoint:n,
sortByAngle:function(a,c){a.sort(function(a,d){return void 0!==a.angle&&(d.angle-a.angle)*c})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:D.getCenter,getSymbol:n},{init:function(){u.prototype.init.apply(this,arguments);var a=this,c;a.name=w(a.name,"Slice");c=function(b){a.slice("select"===b.type)};E(a,"select",c);E(a,"unselect",c);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,c){var b=this,d=b.series,e=d.chart,f=d.options.ignoreHiddenPoint;
c=w(c,f);a!==b.visible&&(b.visible=b.options.visible=a=void 0===a?!b.visible:a,d.options.data[r(b,d.data)]=b.options,p(["graphic","dataLabel","connector","shadowGroup"],function(c){if(b[c])b[c][a?"show":"hide"](!0)}),b.legendItem&&e.legend.colorizeItem(b,a),a||"hover"!==b.state||b.setState(""),f&&(d.isDirty=!0),c&&e.redraw())},slice:function(a,c,b){var d=this.series;m(b,d.chart);w(c,!0);this.sliced=this.options.sliced=H(a)?a:!this.sliced;d.options.data[r(this,d.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r-1,start:c.start,end:c.end})}})})(M);(function(a){var E=a.addEvent,D=a.arrayMax,H=a.defined,p=a.each,f=a.extend,l=a.format,r=a.map,n=a.merge,w=a.noop,u=a.pick,e=a.relativeLength,h=
a.Series,m=a.seriesTypes,d=a.stableSort;a.distribute=function(a,b){function c(a,b){return a.target-b.target}var e,f=!0,h=a,l=[],m;m=0;for(e=a.length;e--;)m+=a[e].size;if(m>b){d(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(m=e=0;m<=b;)m+=a[e].size,e++;l=a.splice(e-1,a.length)}d(a,c);for(a=r(a,function(a){return{size:a.size,targets:[a.target],align:u(a.align,.5)}});f;){for(e=a.length;e--;)f=a[e],m=(Math.min.apply(0,f.targets)+Math.max.apply(0,f.targets))/2,f.pos=Math.min(Math.max(0,m-f.size*
f.align),b-f.size);e=a.length;for(f=!1;e--;)0<e&&a[e-1].pos+a[e-1].size>a[e].pos&&(a[e-1].size+=a[e].size,a[e-1].targets=a[e-1].targets.concat(a[e].targets),a[e-1].align=.5,a[e-1].pos+a[e-1].size>b&&(a[e-1].pos=b-a[e-1].size),a.splice(e,1),f=!0)}e=0;p(a,function(a){var b=0;p(a.targets,function(){h[e].pos=a.pos+b;b+=h[e].size;e++})});h.push.apply(h,l);d(h,c)};h.prototype.drawDataLabels=function(){function c(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===
b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}var b=this,d=b.options,e=d.dataLabels,f=b.points,h,m,r=b.hasRendered||0,t,w,D=u(e.defer,!!d.animation),q=b.chart.renderer;if(e.enabled||b._hasPointLabels)b.dlProcessOptions&&b.dlProcessOptions(e),w=b.plotGroup("dataLabelsGroup","data-labels",D&&!r?"hidden":"visible",e.zIndex||6),D&&(w.attr({opacity:+r}),r||E(b,"afterAnimate",function(){b.visible&&w.show(!0);w[d.animation?"animate":"attr"]({opacity:1},
{duration:200})})),m=e,p(f,function(f){var k,p=f.dataLabel,g,x,r=f.connector,z=!p,C;h=f.dlOptions||f.options&&f.options.dataLabels;(k=u(h&&h.enabled,m.enabled)&&!f.isNull)&&(k=!0===c(f,h||e));k&&(e=n(m,h),g=f.getLabelConfig(),C=e[f.formatPrefix+"Format"]||e.format,t=H(C)?l(C,g):(e[f.formatPrefix+"Formatter"]||e.formatter).call(g,e),C=e.style,g=e.rotation,C.color=u(e.color,C.color,b.color,"#000000"),"contrast"===C.color&&(f.contrastColor=q.getContrast(f.color||b.color),C.color=e.inside||0>u(f.labelDistance,
e.distance)||d.stacking?f.contrastColor:"#000000"),d.cursor&&(C.cursor=d.cursor),x={fill:e.backgroundColor,stroke:e.borderColor,"stroke-width":e.borderWidth,r:e.borderRadius||0,rotation:g,padding:e.padding,zIndex:1},a.objectEach(x,function(a,b){void 0===a&&delete x[b]}));!p||k&&H(t)?k&&H(t)&&(p?x.text=t:(p=f.dataLabel=g?q.text(t,0,-9999).addClass("highcharts-data-label"):q.label(t,0,-9999,e.shape,null,null,e.useHTML,null,"data-label"),p.addClass(" highcharts-data-label-color-"+f.colorIndex+" "+(e.className||
"")+(e.useHTML?"highcharts-tracker":""))),p.attr(x),p.css(C).shadow(e.shadow),p.added||p.add(w),b.alignDataLabel(f,p,e,null,z)):(f.dataLabel=p=p.destroy(),r&&(f.connector=r.destroy()))})};h.prototype.alignDataLabel=function(a,b,d,e,h){var c=this.chart,k=c.inverted,l=u(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=u(a.plotY,-9999),n=b.getBBox(),p,q=d.rotation,r=d.align,w=this.visible&&(a.series.forceDL||c.isInsidePlot(l,Math.round(m),k)||e&&c.isInsidePlot(l,k?e.x+1:e.y+e.height-1,k)),z="justify"===u(d.overflow,
"justify");if(w&&(p=d.style.fontSize,p=c.renderer.fontMetrics(p,b).b,e=f({x:k?this.yAxis.len-m:l,y:Math.round(k?this.xAxis.len-l:m),width:0,height:0},e),f(d,{width:n.width,height:n.height}),q?(z=!1,l=c.renderer.rotCorr(p,q),l={x:e.x+d.x+e.width/2+l.x,y:e.y+d.y+{top:0,middle:.5,bottom:1}[d.verticalAlign]*e.height},b[h?"attr":"animate"](l).attr({align:r}),m=(q+720)%360,m=180<m&&360>m,"left"===r?l.y-=m?n.height:0:"center"===r?(l.x-=n.width/2,l.y-=n.height/2):"right"===r&&(l.x-=n.width,l.y-=m?0:n.height)):
(b.align(d,null,e),l=b.alignAttr),z?a.isLabelJustified=this.justifyDataLabel(b,d,l,n,e,h):u(d.crop,!0)&&(w=c.isInsidePlot(l.x,l.y)&&c.isInsidePlot(l.x+n.width,l.y+n.height)),d.shape&&!q))b[h?"attr":"animate"]({anchorX:k?c.plotWidth-a.plotY:a.plotX,anchorY:k?c.plotHeight-a.plotX:a.plotY});w||(b.attr({y:-9999}),b.placed=!1)};h.prototype.justifyDataLabel=function(a,b,d,e,f,h){var c=this.chart,k=b.align,l=b.verticalAlign,m,n,p=a.box?0:a.padding||0;m=d.x+p;0>m&&("right"===k?b.align="left":b.x=-m,n=!0);
m=d.x+e.width-p;m>c.plotWidth&&("left"===k?b.align="right":b.x=c.plotWidth-m,n=!0);m=d.y+p;0>m&&("bottom"===l?b.verticalAlign="top":b.y=-m,n=!0);m=d.y+e.height-p;m>c.plotHeight&&("top"===l?b.verticalAlign="bottom":b.y=c.plotHeight-m,n=!0);n&&(a.placed=!h,a.align(b,null,f));return n};m.pie&&(m.pie.prototype.drawDataLabels=function(){var c=this,b=c.data,d,e=c.chart,f=c.options.dataLabels,l=u(f.connectorPadding,10),m=u(f.connectorWidth,1),n=e.plotWidth,t=e.plotHeight,r,w=c.center,q=w[2]/2,A=w[1],F,G,
g,v,E=[[],[]],L,P,J,M,y=[0,0,0,0];c.visible&&(f.enabled||c._hasPointLabels)&&(p(b,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),h.prototype.drawDataLabels.apply(c),p(b,function(a){a.dataLabel&&a.visible&&(E[a.half].push(a),a.dataLabel._pos=null)}),p(E,function(b,h){var k,m,x=b.length,r=[],z;if(x)for(c.sortByAngle(b,h-.5),0<c.maxLabelDistance&&(k=Math.max(0,A-q-c.maxLabelDistance),m=Math.min(A+
q+c.maxLabelDistance,e.plotHeight),p(b,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,A-q-a.labelDistance),a.bottom=Math.min(A+q+a.labelDistance,e.plotHeight),z=a.dataLabel.getBBox().height||21,a.positionsIndex=r.push({target:a.labelPos[1]-a.top+z/2,size:z,rank:a.y})-1)}),a.distribute(r,m+z-k)),M=0;M<x;M++)d=b[M],m=d.positionsIndex,g=d.labelPos,F=d.dataLabel,J=!1===d.visible?"hidden":"inherit",P=k=g[1],r&&H(r[m])&&(void 0===r[m].pos?J="hidden":(v=r[m].size,P=d.top+r[m].pos)),delete d.positionIndex,
L=f.justify?w[0]+(h?-1:1)*(q+d.labelDistance):c.getX(P<d.top+2||P>d.bottom-2?k:P,h,d),F._attr={visibility:J,align:g[6]},F._pos={x:L+f.x+({left:l,right:-l}[g[6]]||0),y:P+f.y-10},g.x=L,g.y=P,u(f.crop,!0)&&(G=F.getBBox().width,k=null,L-G<l?(k=Math.round(G-L+l),y[3]=Math.max(k,y[3])):L+G>n-l&&(k=Math.round(L+G-n+l),y[1]=Math.max(k,y[1])),0>P-v/2?y[0]=Math.max(Math.round(-P+v/2),y[0]):P+v/2>t&&(y[2]=Math.max(Math.round(P+v/2-t),y[2])),F.sideOverflow=k)}),0===D(y)||this.verifyDataLabelOverflow(y))&&(this.placeDataLabels(),
m&&p(this.points,function(a){var b;r=a.connector;if((F=a.dataLabel)&&F._pos&&a.visible&&0<a.labelDistance){J=F._attr.visibility;if(b=!r)a.connector=r=e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex).add(c.dataLabelsGroup),r.attr({"stroke-width":m,stroke:f.connectorColor||a.color||"#666666"});r[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});r.attr("visibility",J)}else r&&(a.connector=r.destroy())}))},m.pie.prototype.connectorPath=function(a){var b=
a.x,c=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},m.pie.prototype.placeDataLabels=function(){p(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),
b.moved=!0):b&&b.attr({y:-9999}))},this)},m.pie.prototype.alignDataLabel=w,m.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,f=c.minSize||80,h,l=null!==c.size;l||(null!==d[0]?h=Math.max(b[2]-Math.max(a[1],a[3]),f):(h=Math.max(b[2]-a[1]-a[3],f),b[0]+=(a[3]-a[1])/2),null!==d[1]?h=Math.max(Math.min(h,b[2]-Math.max(a[0],a[2])),f):(h=Math.max(Math.min(h,b[2]-a[0]-a[2]),f),b[1]+=(a[0]-a[2])/2),h<b[2]?(b[2]=h,b[3]=Math.min(e(c.innerSize||0,h),h),this.translate(b),
this.drawDataLabels&&this.drawDataLabels()):l=!0);return l});m.column&&(m.column.prototype.alignDataLabel=function(a,b,d,e,f){var c=this.chart.inverted,k=a.series,l=a.dlBox||a.shapeArgs,m=u(a.below,a.plotY>u(this.translatedThreshold,k.yAxis.len)),p=u(d.inside,!!this.options.stacking);l&&(e=n(l),0>e.y&&(e.height+=e.y,e.y=0),l=e.y+e.height-k.yAxis.len,0<l&&(e.height-=l),c&&(e={x:k.yAxis.len-e.y-e.height,y:k.xAxis.len-e.x-e.width,width:e.height,height:e.width}),p||(c?(e.x+=m?0:e.width,e.width=0):(e.y+=
m?e.height:0,e.height=0)));d.align=u(d.align,!c||p?"center":m?"right":"left");d.verticalAlign=u(d.verticalAlign,c||p?"middle":m?"top":"bottom");h.prototype.alignDataLabel.call(this,a,b,d,e,f);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(M);(function(a){var E=a.Chart,D=a.each,H=a.objectEach,p=a.pick;a=a.addEvent;a(E.prototype,"render",function(){var a=[];D(this.labelCollectors||[],function(f){a=a.concat(f())});D(this.yAxis||[],function(f){f.options.stackLabels&&
!f.options.stackLabels.allowOverlap&&H(f.stacks,function(f){H(f,function(f){a.push(f.label)})})});D(this.series||[],function(f){var l=f.options.dataLabels,n=f.dataLabelCollections||["dataLabel"];(l.enabled||f._hasPointLabels)&&!l.allowOverlap&&f.visible&&D(n,function(l){D(f.points,function(f){f[l]&&(f[l].labelrank=p(f.labelrank,f.shapeArgs&&f.shapeArgs.height),a.push(f[l]))})})});this.hideOverlappingLabels(a)});E.prototype.hideOverlappingLabels=function(a){var f=a.length,p,n,w,u,e,h,m,d,c,b=function(a,
b,c,d,e,f,h,l){return!(e>a+c||e+h<a||f>b+d||f+l<b)};for(n=0;n<f;n++)if(p=a[n])p.oldOpacity=p.opacity,p.newOpacity=1,p.width||(w=p.getBBox(),p.width=w.width,p.height=w.height);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(n=0;n<f;n++)for(w=a[n],p=n+1;p<f;++p)if(u=a[p],w&&u&&w!==u&&w.placed&&u.placed&&0!==w.newOpacity&&0!==u.newOpacity&&(e=w.alignAttr,h=u.alignAttr,m=w.parentGroup,d=u.parentGroup,c=2*(w.box?0:w.padding||0),e=b(e.x+m.translateX,e.y+m.translateY,w.width-c,w.height-
c,h.x+d.translateX,h.y+d.translateY,u.width-c,u.height-c)))(w.labelrank<u.labelrank?w:u).newOpacity=0;D(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(M);(function(a){var E=a.addEvent,D=a.Chart,H=a.createElement,p=a.css,f=a.defaultOptions,l=a.defaultPlotOptions,r=a.each,n=a.extend,w=a.fireEvent,u=a.hasTouch,e=a.inArray,h=a.isObject,m=a.Legend,d=a.merge,
c=a.pick,b=a.Point,k=a.Series,z=a.seriesTypes,B=a.svg,I;I=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};r(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(r(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});
if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(p).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,h=f.pointer,k=f.renderer,l=f.options.tooltip.snap,g=a.tracker,m,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},p="rgba(192,192,192,"+(B?.0001:.002)+")";if(e&&!c)for(m=e+1;m--;)"M"===d[m]&&d.splice(m+1,0,d[m+1]-l,d[m+2],"L"),(m&&"M"===d[m]||m===e)&&d.splice(m,
0,"L",d[m-2]+l,d[m-1]);g?g.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:p,fill:c?p:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),zIndex:2}).add(a.group),r([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){h.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",n)}))}};z.column&&(z.column.prototype.drawTracker=I.drawTrackerPoint);
z.pie&&(z.pie.prototype.drawTracker=I.drawTrackerPoint);z.scatter&&(z.scatter.prototype.drawTracker=I.drawTrackerPoint);n(m.prototype,{setItemEvents:function(a,c,e){var f=this,h=f.chart.renderer.boxWrapper,k="highcharts-legend-"+(a instanceof b?"point":"series")+"-active";(e?c:a.legendGroup).on("mouseover",function(){a.setState("hover");h.addClass(k);c.css(f.options.itemHoverStyle)}).on("mouseout",function(){c.css(d(a.visible?f.itemStyle:f.itemHiddenStyle));h.removeClass(k);a.setState()}).on("click",
function(b){var c=function(){a.setVisible&&a.setVisible()};h.removeClass(k);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):w(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=H("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){w(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});f.legend.itemStyle.cursor=
"pointer";n(D.prototype,{showResetZoom:function(){var a=this,b=f.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,h="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,h)},zoomOut:function(){var a=this;w(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,d=this.pointer,
e=!1,f;!a||a.resetSelection?(r(this.axes,function(a){b=a.zoom()}),d.initiated=!1):r(a.xAxis.concat(a.yAxis),function(a){var c=a.axis;d[c.isXAxis?"zoomX":"zoomY"]&&(b=c.zoom(a.min,a.max),c.displayBtn&&(e=!0))});f=this.resetZoomButton;e&&!f?this.showResetZoom():!e&&h(f)&&(this.resetZoomButton=f.destroy());b&&this.redraw(c(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&r(d,function(a){a.setState()});r("xy"===b?[1,0]:[1],function(b){b=
c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],g=(b.pointRange||0)/2,k=b.getExtremes(),l=b.toValue(h-f,!0)+g,m=b.toValue(h+b.len-f,!0)-g,n=m<l,h=n?m:l,l=n?l:m,m=Math.min(k.dataMin,g?k.min:b.toValue(b.toPixels(k.min)-b.minPixelPadding)),g=Math.max(k.dataMax,g?k.max:b.toValue(b.toPixels(k.max)+b.minPixelPadding)),n=m-h;0<n&&(l+=n,h=m);n=l-g;0<n&&(l=g,h-=n);b.series.length&&h!==k.min&&l!==k.max&&(b.setExtremes(h,l,!1,!1,{trigger:"pan"}),e=!0);c[d]=
f});e&&c.redraw(!1);p(c.container,{cursor:"move"})}});n(b.prototype,{select:function(a,b){var d=this,f=d.series,h=f.chart;a=c(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:b},function(){d.selected=d.options.selected=a;f.options.data[e(d,f.data)]=d.options;d.setState(a&&"select");b||r(h.getSelectedPoints(),function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,f.options.data[e(a,f.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=
this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");r(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=d(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){E(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var d=Math.floor(this.plotX),
e=this.plotY,f=this.series,h=f.options.states[a]||{},k=l[f.type].marker&&f.options.marker,m=k&&!1===k.enabled,p=k&&k.states&&k.states[a]||{},g=!1===p.enabled,r=f.stateMarkerGraphic,u=this.marker||{},w=f.chart,x=f.halo,z,B=k&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===h.enabled||a&&(g||m&&!1===p.enabled)||a&&u.states&&u.states[a]&&!1===u.states[a].enabled)){B&&(z=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(f.pointAttribs(this,a),c(w.options.chart.animation,h.animation)),z&&this.graphic.animate(z,c(w.options.chart.animation,p.animation,k.animation)),r&&r.hide();else{if(a&&p){k=u.symbol||f.symbol;r&&r.currentSymbol!==k&&(r=r.destroy());if(r)r[b?"animate":"attr"]({x:z.x,y:z.y});else k&&(f.stateMarkerGraphic=r=w.renderer.symbol(k,z.x,z.y,z.width,z.height).add(f.markerGroup),r.currentSymbol=k);r&&r.attr(f.pointAttribs(this,
a))}r&&(r[a&&w.isInsidePlot(d,e,w.inverted)?"show":"hide"](),r.element.point=this)}(d=h.halo)&&d.size?(x||(f.halo=x=w.renderer.path().add((this.graphic||r).parentGroup)),x[b?"animate":"attr"]({d:this.haloPath(d.size)}),x.attr({"class":"highcharts-halo highcharts-color-"+c(this.colorIndex,f.colorIndex)}),x.point=this,x.attr(n({fill:this.color||f.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):x&&x.point&&x.point.haloPath&&x.animate({d:x.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});n(k.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&w(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&w(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,
d=b.options,e=b.graph,f=d.states,h=d.lineWidth,d=0;a=a||"";if(b.state!==a&&(r([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(h=f[a].lineWidth||h+(f[a].lineWidthPlus||0)),e&&!e.dashstyle))for(h={"stroke-width":h},e.animate(h,c(b.chart.options.chart.animation,f[a]&&f[a].animation));b["zone-graph-"+d];)b["zone-graph-"+d].attr(h),d+=1},setVisible:function(a,
b){var c=this,d=c.chart,e=c.legendItem,f,h=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";r(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&r(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});r(c.linkedSeries,function(b){b.setVisible(a,
!1)});h&&(d.isDirtyBox=!0);!1!==b&&d.redraw();w(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);w(this,a?"select":"unselect")},drawTracker:I.drawTrackerGraph})})(M);(function(a){var E=a.Chart,D=a.each,H=a.inArray,p=a.isArray,f=a.isObject,l=a.pick,r=a.splat;E.prototype.setResponsive=function(f){var l=this.options.responsive,n=[],e=this.currentResponsive;l&&l.rules&&
D(l.rules,function(e){void 0===e._id&&(e._id=a.uniqueKey());this.matchResponsiveRule(e,n,f)},this);var h=a.merge.apply(0,a.map(n,function(e){return a.find(l.rules,function(a){return a._id===e}).chartOptions})),n=n.toString()||void 0;n!==(e&&e.ruleIds)&&(e&&this.update(e.undoOptions,f),n?(this.currentResponsive={ruleIds:n,mergedOptions:h,undoOptions:this.currentOptions(h)},this.update(h,f)):this.currentResponsive=void 0)};E.prototype.matchResponsiveRule=function(a,f){var n=a.condition;(n.callback||
function(){return this.chartWidth<=l(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=l(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=l(n.minWidth,0)&&this.chartHeight>=l(n.minHeight,0)}).call(this)&&f.push(a._id)};E.prototype.currentOptions=function(l){function n(e,h,l,d){var c;a.objectEach(e,function(a,e){if(!d&&-1<H(e,["series","xAxis","yAxis"]))for(a=r(a),l[e]=[],c=0;c<a.length;c++)h[e][c]&&(l[e][c]={},n(a[c],h[e][c],l[e][c],d+1));else f(a)?(l[e]=p(a)?[]:{},n(a,h[e]||{},l[e],d+1)):l[e]=h[e]||
null})}var u={};n(l,this.options,u,0);return u}})(M);return M});


/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tweet = exports.Timeline = exports.Share = exports.Mention = exports.Hashtag = exports.Follow = undefined;

var _exenv = __webpack_require__(1055);

var _Follow2 = __webpack_require__(1056);

var _Follow3 = _interopRequireDefault(_Follow2);

var _Hashtag2 = __webpack_require__(1133);

var _Hashtag3 = _interopRequireDefault(_Hashtag2);

var _Mention2 = __webpack_require__(1134);

var _Mention3 = _interopRequireDefault(_Mention2);

var _Share2 = __webpack_require__(1135);

var _Share3 = _interopRequireDefault(_Share2);

var _Timeline2 = __webpack_require__(1136);

var _Timeline3 = _interopRequireDefault(_Timeline2);

var _Tweet2 = __webpack_require__(1137);

var _Tweet3 = _interopRequireDefault(_Tweet2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_exenv.canUseDOM) {
  var $script = __webpack_require__(1045); // eslint-disable-line global-require
  $script('https://platform.twitter.com/widgets.js', 'twitter-widgets');
}

exports.Follow = _Follow3.default;
exports.Hashtag = _Hashtag3.default;
exports.Mention = _Mention3.default;
exports.Share = _Share3.default;
exports.Timeline = _Timeline3.default;
exports.Tweet = _Tweet3.default;

/***/ }),

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(1000);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(1001);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(1002);

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Follow = function (_React$Component) {
  _inherits(Follow, _React$Component);

  function Follow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Follow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Follow.__proto__ || Object.getPrototypeOf(Follow)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          username = _this$props.username,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createFollowButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Follow, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('username') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Follow;
}(_react2.default.Component);

Follow.propTypes = {
  username: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Follow.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Follow;

/***/ }),

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(1058),
    isObjectLike = __webpack_require__(1011);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(1020),
    equalArrays = __webpack_require__(1025),
    equalByTag = __webpack_require__(1092),
    equalObjects = __webpack_require__(1093),
    getTag = __webpack_require__(1038),
    isArray = __webpack_require__(1010),
    isBuffer = __webpack_require__(1017),
    isTypedArray = __webpack_require__(1034);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 1059:
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1005);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1005);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1005);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1005);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(1004);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 1065:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 1066:
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 1067:
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(1004),
    Map = __webpack_require__(1014),
    MapCache = __webpack_require__(1024);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(1021),
    isMasked = __webpack_require__(1072),
    isObject = __webpack_require__(1003),
    toSource = __webpack_require__(1023);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1007);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 1071:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(1073);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(998);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 1074:
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(1076),
    ListCache = __webpack_require__(1004),
    Map = __webpack_require__(1014);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(1077),
    hashDelete = __webpack_require__(1078),
    hashGet = __webpack_require__(1079),
    hashHas = __webpack_require__(1080),
    hashSet = __webpack_require__(1081);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1008);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 1078:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1008);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1008);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1008);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1009);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 1083:
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1009);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1009);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1009);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(1024),
    setCacheAdd = __webpack_require__(1088),
    setCacheHas = __webpack_require__(1089);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 1088:
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 1089:
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 1090:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 1091:
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1007),
    Uint8Array = __webpack_require__(1026),
    eq = __webpack_require__(1013),
    equalArrays = __webpack_require__(1025),
    mapToArray = __webpack_require__(1027),
    setToArray = __webpack_require__(1028);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(1029);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 1094:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 1095:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(1097),
    isObjectLike = __webpack_require__(1011);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1006),
    isObjectLike = __webpack_require__(1011);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 1098:
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 1099:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1006),
    isLength = __webpack_require__(1035),
    isObjectLike = __webpack_require__(1011);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 1101:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(1022);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(143)(module)))

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(1018),
    nativeKeys = __webpack_require__(1104);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(1036);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(999),
    root = __webpack_require__(998);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(999),
    root = __webpack_require__(998);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(999),
    root = __webpack_require__(998);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(999),
    root = __webpack_require__(998);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(1020),
    arrayEach = __webpack_require__(1110),
    assignValue = __webpack_require__(1039),
    baseAssign = __webpack_require__(1112),
    baseAssignIn = __webpack_require__(1113),
    cloneBuffer = __webpack_require__(1116),
    copyArray = __webpack_require__(1117),
    copySymbols = __webpack_require__(1118),
    copySymbolsIn = __webpack_require__(1119),
    getAllKeys = __webpack_require__(1029),
    getAllKeysIn = __webpack_require__(1120),
    getTag = __webpack_require__(1038),
    initCloneArray = __webpack_require__(1121),
    initCloneByTag = __webpack_require__(1122),
    initCloneObject = __webpack_require__(1131),
    isArray = __webpack_require__(1010),
    isBuffer = __webpack_require__(1017),
    isObject = __webpack_require__(1003),
    keys = __webpack_require__(1016);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 1110:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(999);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1012),
    keys = __webpack_require__(1016);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1012),
    keysIn = __webpack_require__(1041);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1003),
    isPrototype = __webpack_require__(1018),
    nativeKeysIn = __webpack_require__(1115);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 1115:
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(998);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(143)(module)))

/***/ }),

/***/ 1117:
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1012),
    getSymbols = __webpack_require__(1015);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1012),
    getSymbolsIn = __webpack_require__(1042);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(1030),
    getSymbolsIn = __webpack_require__(1042),
    keysIn = __webpack_require__(1041);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 1121:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1019),
    cloneDataView = __webpack_require__(1123),
    cloneMap = __webpack_require__(1124),
    cloneRegExp = __webpack_require__(1126),
    cloneSet = __webpack_require__(1127),
    cloneSymbol = __webpack_require__(1129),
    cloneTypedArray = __webpack_require__(1130);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1019);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(1125),
    arrayReduce = __webpack_require__(1044),
    mapToArray = __webpack_require__(1027);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),

/***/ 1125:
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),

/***/ 1126:
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(1128),
    arrayReduce = __webpack_require__(1044),
    setToArray = __webpack_require__(1028);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),

/***/ 1128:
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1007);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1019);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(1132),
    getPrototype = __webpack_require__(1043),
    isPrototype = __webpack_require__(1018);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1003);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(1000);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(1001);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(1002);

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hashtag = function (_React$Component) {
  _inherits(Hashtag, _React$Component);

  function Hashtag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hashtag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hashtag.__proto__ || Object.getPrototypeOf(Hashtag)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          hashtag = _this$props.hashtag,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createHashtagButton(hashtag, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hashtag, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('hashtag') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Hashtag;
}(_react2.default.Component);

Hashtag.propTypes = {
  hashtag: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Hashtag.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Hashtag;

/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(1000);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(1001);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(1002);

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mention = function (_React$Component) {
  _inherits(Mention, _React$Component);

  function Mention() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mention);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mention.__proto__ || Object.getPrototypeOf(Mention)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          username = _this$props.username,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createMentionButton(username, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mention, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('username') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Mention;
}(_react2.default.Component);

Mention.propTypes = {
  username: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Mention.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Mention;

/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(1000);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(1001);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(1002);

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          url = _this$props.url,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createShareButton(url, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Share, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('url') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Share;
}(_react2.default.Component);

Share.propTypes = {
  url: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Share.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Share;

/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(1000);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(1001);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(1002);

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Timeline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          dataSource = _this$props.dataSource,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options and dataSource must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createTimeline((0, _cloneDeep2.default)(dataSource), element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Timeline, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('dataSource') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Timeline;
}(_react2.default.Component);

Timeline.propTypes = {
  dataSource: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Timeline.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Timeline;

/***/ }),

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = __webpack_require__(1000);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _cloneDeep = __webpack_require__(1001);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _AbstractWidget = __webpack_require__(1002);

var _AbstractWidget2 = _interopRequireDefault(_AbstractWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tweet = function (_React$Component) {
  _inherits(Tweet, _React$Component);

  function Tweet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tweet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tweet.__proto__ || Object.getPrototypeOf(Tweet)).call.apply(_ref, [this].concat(args))), _this), _this.ready = function (tw, element, done) {
      var _this$props = _this.props,
          tweetId = _this$props.tweetId,
          options = _this$props.options,
          onLoad = _this$props.onLoad;

      // Options must be cloned since Twitter Widgets modifies it directly

      tw.widgets.createTweet(tweetId, element, (0, _cloneDeep2.default)(options)).then(function () {
        // Widget is loaded
        done();
        onLoad();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tweet, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var changed = function changed(name) {
        return !(0, _isEqual2.default)(_this2.props[name], nextProps[name]);
      };
      return changed('tweetId') || changed('options');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_AbstractWidget2.default, { ready: this.ready });
    }
  }]);

  return Tweet;
}(_react2.default.Component);

Tweet.propTypes = {
  tweetId: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.object,
  onLoad: _propTypes2.default.func
};
Tweet.defaultProps = {
  options: {},
  onLoad: function onLoad() {}
};
exports.default = Tweet;

/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Hero = __webpack_require__(1046);

var _Hero2 = _interopRequireDefault(_Hero);

var _Skills = __webpack_require__(1051);

var _Skills2 = _interopRequireDefault(_Skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_PureComponent) {
    _inherits(Portfolio, _PureComponent);

    function Portfolio(props) {
        _classCallCheck(this, Portfolio);

        return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));
    }

    _createClass(Portfolio, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'portfolio-container' },
                _react2.default.createElement(_Hero2.default, null),
                _react2.default.createElement(_Skills2.default, null)
            );
        }
    }]);

    return Portfolio;
}(_react.PureComponent);

exports.default = Portfolio;

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(1022);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(1069),
    getValue = __webpack_require__(1074);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ })

});