import { __commonJS } from "./chunk-DL887vQu.js";
import { require_react } from "./react-D8Ah1131.js";

//#region node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = /* @__PURE__ */ __commonJS({ "node_modules/react-is/cjs/react-is.development.js": ((exports) => {
	(function() {
		var hasSymbol = typeof Symbol === "function" && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
		function isValidElementType(type) {
			return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		}
		function typeOf(object) {
			if (typeof object === "object" && object !== null) {
				var $$typeof = object.$$typeof;
				switch ($$typeof) {
					case REACT_ELEMENT_TYPE:
						var type = object.type;
						switch (type) {
							case REACT_ASYNC_MODE_TYPE:
							case REACT_CONCURRENT_MODE_TYPE:
							case REACT_FRAGMENT_TYPE:
							case REACT_PROFILER_TYPE:
							case REACT_STRICT_MODE_TYPE:
							case REACT_SUSPENSE_TYPE: return type;
							default:
								var $$typeofType = type && type.$$typeof;
								switch ($$typeofType) {
									case REACT_CONTEXT_TYPE:
									case REACT_FORWARD_REF_TYPE:
									case REACT_LAZY_TYPE:
									case REACT_MEMO_TYPE:
									case REACT_PROVIDER_TYPE: return $$typeofType;
									default: return $$typeof;
								}
						}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
		var AsyncMode = REACT_ASYNC_MODE_TYPE;
		var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
		var ContextConsumer = REACT_CONTEXT_TYPE;
		var ContextProvider = REACT_PROVIDER_TYPE;
		var Element = REACT_ELEMENT_TYPE;
		var ForwardRef = REACT_FORWARD_REF_TYPE;
		var Fragment = REACT_FRAGMENT_TYPE;
		var Lazy = REACT_LAZY_TYPE;
		var Memo = REACT_MEMO_TYPE;
		var Portal = REACT_PORTAL_TYPE;
		var Profiler = REACT_PROFILER_TYPE;
		var StrictMode = REACT_STRICT_MODE_TYPE;
		var Suspense = REACT_SUSPENSE_TYPE;
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		function isAsyncMode(object) {
			if (!hasWarnedAboutDeprecatedIsAsyncMode) {
				hasWarnedAboutDeprecatedIsAsyncMode = true;
				console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
			}
			return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
		}
		function isConcurrentMode(object) {
			return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
		}
		function isContextConsumer(object) {
			return typeOf(object) === REACT_CONTEXT_TYPE;
		}
		function isContextProvider(object) {
			return typeOf(object) === REACT_PROVIDER_TYPE;
		}
		function isElement(object) {
			return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function isForwardRef(object) {
			return typeOf(object) === REACT_FORWARD_REF_TYPE;
		}
		function isFragment(object) {
			return typeOf(object) === REACT_FRAGMENT_TYPE;
		}
		function isLazy(object) {
			return typeOf(object) === REACT_LAZY_TYPE;
		}
		function isMemo(object) {
			return typeOf(object) === REACT_MEMO_TYPE;
		}
		function isPortal(object) {
			return typeOf(object) === REACT_PORTAL_TYPE;
		}
		function isProfiler(object) {
			return typeOf(object) === REACT_PROFILER_TYPE;
		}
		function isStrictMode(object) {
			return typeOf(object) === REACT_STRICT_MODE_TYPE;
		}
		function isSuspense(object) {
			return typeOf(object) === REACT_SUSPENSE_TYPE;
		}
		exports.AsyncMode = AsyncMode;
		exports.ConcurrentMode = ConcurrentMode;
		exports.ContextConsumer = ContextConsumer;
		exports.ContextProvider = ContextProvider;
		exports.Element = Element;
		exports.ForwardRef = ForwardRef;
		exports.Fragment = Fragment;
		exports.Lazy = Lazy;
		exports.Memo = Memo;
		exports.Portal = Portal;
		exports.Profiler = Profiler;
		exports.StrictMode = StrictMode;
		exports.Suspense = Suspense;
		exports.isAsyncMode = isAsyncMode;
		exports.isConcurrentMode = isConcurrentMode;
		exports.isContextConsumer = isContextConsumer;
		exports.isContextProvider = isContextProvider;
		exports.isElement = isElement;
		exports.isForwardRef = isForwardRef;
		exports.isFragment = isFragment;
		exports.isLazy = isLazy;
		exports.isMemo = isMemo;
		exports.isPortal = isPortal;
		exports.isProfiler = isProfiler;
		exports.isStrictMode = isStrictMode;
		exports.isSuspense = isSuspense;
		exports.isValidElementType = isValidElementType;
		exports.typeOf = typeOf;
	})();
}) });

//#endregion
//#region node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJS({ "node_modules/react-is/index.js": ((exports, module) => {
	module.exports = require_react_is_development();
}) });

//#endregion
//#region node_modules/object-assign/index.js
var require_object_assign = /* @__PURE__ */ __commonJS({ "node_modules/object-assign/index.js": ((exports, module) => {
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
		if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(val);
	}
	function shouldUseNative() {
		try {
			if (!Object.assign) return false;
			var test1 = /* @__PURE__ */ new String("abc");
			test1[5] = "de";
			if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
			var test2 = {};
			for (var i$1 = 0; i$1 < 10; i$1++) test2["_" + String.fromCharCode(i$1)] = i$1;
			if (Object.getOwnPropertyNames(test2).map(function(n) {
				return test2[n];
			}).join("") !== "0123456789") return false;
			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function(letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
			return true;
		} catch (err) {
			return false;
		}
	}
	module.exports = shouldUseNative() ? Object.assign : function(target, source) {
		var from;
		var to = toObject(target);
		var symbols;
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
			for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i$1 = 0; i$1 < symbols.length; i$1++) if (propIsEnumerable.call(from, symbols[i$1])) to[symbols[i$1]] = from[symbols[i$1]];
			}
		}
		return to;
	};
}) });

//#endregion
//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJS({ "node_modules/prop-types/lib/ReactPropTypesSecret.js": ((exports, module) => {
	var ReactPropTypesSecret$2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	module.exports = ReactPropTypesSecret$2;
}) });

//#endregion
//#region node_modules/prop-types/lib/has.js
var require_has = /* @__PURE__ */ __commonJS({ "node_modules/prop-types/lib/has.js": ((exports, module) => {
	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}) });

//#endregion
//#region node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = /* @__PURE__ */ __commonJS({ "node_modules/prop-types/checkPropTypes.js": ((exports, module) => {
	var printWarning$1 = function() {};
	var ReactPropTypesSecret$1 = require_ReactPropTypesSecret();
	var loggedTypeFailures = {};
	var has$1 = require_has();
	printWarning$1 = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
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
	function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
		for (var typeSpecName in typeSpecs) if (has$1(typeSpecs, typeSpecName)) {
			var error;
			try {
				if (typeof typeSpecs[typeSpecName] !== "function") {
					var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
					err.name = "Invariant Violation";
					throw err;
				}
				error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
			} catch (ex) {
				error = ex;
			}
			if (error && !(error instanceof Error)) printWarning$1((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
			if (error instanceof Error && !(error.message in loggedTypeFailures)) {
				loggedTypeFailures[error.message] = true;
				var stack = getStack ? getStack() : "";
				printWarning$1("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
			}
		}
	}
	/**
	* Resets warning cache when testing.
	*
	* @private
	*/
	checkPropTypes$1.resetWarningCache = function() {
		loggedTypeFailures = {};
	};
	module.exports = checkPropTypes$1;
}) });

//#endregion
//#region node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = /* @__PURE__ */ __commonJS({ "node_modules/prop-types/factoryWithTypeCheckers.js": ((exports, module) => {
	var ReactIs$1 = require_react_is();
	var assign = require_object_assign();
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var has = require_has();
	var checkPropTypes = require_checkPropTypes();
	var printWarning = function() {};
	printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	function emptyFunctionThatReturnsNull() {
		return null;
	}
	module.exports = function(isValidElement, throwOnDirectAccess$1) {
		var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
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
			if (typeof iteratorFn === "function") return iteratorFn;
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
		var ANONYMOUS = "<<anonymous>>";
		var ReactPropTypes = {
			array: createPrimitiveTypeChecker("array"),
			bigint: createPrimitiveTypeChecker("bigint"),
			bool: createPrimitiveTypeChecker("boolean"),
			func: createPrimitiveTypeChecker("function"),
			number: createPrimitiveTypeChecker("number"),
			object: createPrimitiveTypeChecker("object"),
			string: createPrimitiveTypeChecker("string"),
			symbol: createPrimitiveTypeChecker("symbol"),
			any: createAnyTypeChecker(),
			arrayOf: createArrayOfTypeChecker,
			element: createElementTypeChecker(),
			elementType: createElementTypeTypeChecker(),
			instanceOf: createInstanceTypeChecker,
			node: createNodeChecker(),
			objectOf: createObjectOfTypeChecker,
			oneOf: createEnumTypeChecker,
			oneOfType: createUnionTypeChecker,
			shape: createShapeTypeChecker,
			exact: createStrictShapeTypeChecker
		};
		/**
		* inlined Object.is polyfill to avoid requiring consumers ship their own
		* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		*/
		function is(x, y) {
			if (x === y) return x !== 0 || 1 / x === 1 / y;
			else return x !== x && y !== y;
		}
		/**
		* We use an Error-like object for backward compatibility as people may call
		* PropTypes directly and inspect their output. However, we don't use real
		* Errors anymore. We don't inspect their stack anyway, and creating them
		* is prohibitively expensive if they are created too often, such as what
		* happens in oneOfType() for any type before the one that matched.
		*/
		function PropTypeError(message, data) {
			this.message = message;
			this.data = data && typeof data === "object" ? data : {};
			this.stack = "";
		}
		PropTypeError.prototype = Error.prototype;
		function createChainableTypeChecker(validate) {
			var manualPropTypeCallCache = {};
			var manualPropTypeWarningCount = 0;
			function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
				componentName = componentName || ANONYMOUS;
				propFullName = propFullName || propName;
				if (secret !== ReactPropTypesSecret) {
					if (throwOnDirectAccess$1) {
						var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						err.name = "Invariant Violation";
						throw err;
					} else if (typeof console !== "undefined") {
						var cacheKey = componentName + ":" + propName;
						if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
							printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
							manualPropTypeCallCache[cacheKey] = true;
							manualPropTypeWarningCount++;
						}
					}
				}
				if (props[propName] == null) {
					if (isRequired) {
						if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
						return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
					}
					return null;
				} else return validate(props, propName, componentName, location, propFullName);
			}
			var chainedCheckType = checkType.bind(null, false);
			chainedCheckType.isRequired = checkType.bind(null, true);
			return chainedCheckType;
		}
		function createPrimitiveTypeChecker(expectedType) {
			function validate(props, propName, componentName, location, propFullName, secret) {
				var propValue = props[propName];
				if (getPropType(propValue) !== expectedType) {
					var preciseType = getPreciseType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createAnyTypeChecker() {
			return createChainableTypeChecker(emptyFunctionThatReturnsNull);
		}
		function createArrayOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
				var propValue = props[propName];
				if (!Array.isArray(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
				}
				for (var i$1 = 0; i$1 < propValue.length; i$1++) {
					var error = typeChecker(propValue, i$1, componentName, location, propFullName + "[" + i$1 + "]", ReactPropTypesSecret);
					if (error instanceof Error) return error;
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
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!ReactIs$1.isValidElementType(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
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
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createEnumTypeChecker(expectedValues) {
			if (!Array.isArray(expectedValues)) {
				if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
				else printWarning("Invalid argument supplied to oneOf, expected an array.");
				return emptyFunctionThatReturnsNull;
			}
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				for (var i$1 = 0; i$1 < expectedValues.length; i$1++) if (is(propValue, expectedValues[i$1])) return null;
				var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
					if (getPreciseType(value) === "symbol") return String(value);
					return value;
				});
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createObjectOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
				for (var key in propValue) if (has(propValue, key)) {
					var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createUnionTypeChecker(arrayOfTypeCheckers) {
			if (!Array.isArray(arrayOfTypeCheckers)) {
				printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
				return emptyFunctionThatReturnsNull;
			}
			for (var i$1 = 0; i$1 < arrayOfTypeCheckers.length; i$1++) {
				var checker = arrayOfTypeCheckers[i$1];
				if (typeof checker !== "function") {
					printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i$1 + ".");
					return emptyFunctionThatReturnsNull;
				}
			}
			function validate(props, propName, componentName, location, propFullName) {
				var expectedTypes = [];
				for (var i$2 = 0; i$2 < arrayOfTypeCheckers.length; i$2++) {
					var checker$1 = arrayOfTypeCheckers[i$2];
					var checkerResult = checker$1(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
					if (checkerResult == null) return null;
					if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
				}
				var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createNodeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function invalidValidatorError(componentName, location, propFullName, key, type) {
			return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
		}
		function createShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in shapeTypes) {
					var checker = shapeTypes[key];
					if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createStrictShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in assign({}, props[propName], shapeTypes)) {
					var checker = shapeTypes[key];
					if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function isNode(propValue) {
			switch (typeof propValue) {
				case "number":
				case "string":
				case "undefined": return true;
				case "boolean": return !propValue;
				case "object":
					if (Array.isArray(propValue)) return propValue.every(isNode);
					if (propValue === null || isValidElement(propValue)) return true;
					var iteratorFn = getIteratorFn(propValue);
					if (iteratorFn) {
						var iterator = iteratorFn.call(propValue);
						var step;
						if (iteratorFn !== propValue.entries) {
							while (!(step = iterator.next()).done) if (!isNode(step.value)) return false;
						} else while (!(step = iterator.next()).done) {
							var entry = step.value;
							if (entry) {
								if (!isNode(entry[1])) return false;
							}
						}
					} else return false;
					return true;
				default: return false;
			}
		}
		function isSymbol(propType, propValue) {
			if (propType === "symbol") return true;
			if (!propValue) return false;
			if (propValue["@@toStringTag"] === "Symbol") return true;
			if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
			return false;
		}
		function getPropType(propValue) {
			var propType = typeof propValue;
			if (Array.isArray(propValue)) return "array";
			if (propValue instanceof RegExp) return "object";
			if (isSymbol(propType, propValue)) return "symbol";
			return propType;
		}
		function getPreciseType(propValue) {
			if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
			var propType = getPropType(propValue);
			if (propType === "object") {
				if (propValue instanceof Date) return "date";
				else if (propValue instanceof RegExp) return "regexp";
			}
			return propType;
		}
		function getPostfixForTypeWarning(value) {
			var type = getPreciseType(value);
			switch (type) {
				case "array":
				case "object": return "an " + type;
				case "boolean":
				case "date":
				case "regexp": return "a " + type;
				default: return type;
			}
		}
		function getClassName(propValue) {
			if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
			return propValue.constructor.name;
		}
		ReactPropTypes.checkPropTypes = checkPropTypes;
		ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}) });

//#endregion
//#region node_modules/prop-types/index.js
var require_prop_types = /* @__PURE__ */ __commonJS({ "node_modules/prop-types/index.js": ((exports, module) => {
	var ReactIs = require_react_is();
	var throwOnDirectAccess = true;
	module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
}) });

//#endregion
//#region node_modules/qr.js/lib/ErrorCorrectLevel.js
var require_ErrorCorrectLevel = /* @__PURE__ */ __commonJS({ "node_modules/qr.js/lib/ErrorCorrectLevel.js": ((exports, module) => {
	module.exports = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	};
}) });

//#endregion
//#region node_modules/qr.js/lib/mode.js
var require_mode = /* @__PURE__ */ __commonJS({ "node_modules/qr.js/lib/mode.js": ((exports, module) => {
	module.exports = {
		MODE_NUMBER: 1,
		MODE_ALPHA_NUM: 2,
		MODE_8BIT_BYTE: 4,
		MODE_KANJI: 8
	};
}) });

//#endregion
//#region node_modules/qr.js/lib/8BitByte.js
var require__8BitByte = /* @__PURE__ */ __commonJS({ "node_modules/qr.js/lib/8BitByte.js": ((exports, module) => {
	var mode = require_mode();
	function QR8bitByte(data) {
		this.mode = mode.MODE_8BIT_BYTE;
		this.data = data;
	}
	QR8bitByte.prototype = {
		getLength: function(buffer) {
			return this.data.length;
		},
		write: function(buffer) {
			for (var i$1 = 0; i$1 < this.data.length; i$1++) buffer.put(this.data.charCodeAt(i$1), 8);
		}
	};
	module.exports = QR8bitByte;
}) });

//#endregion
//#region node_modules/qr.js/lib/RSBlock.js
var require_RSBlock = /* @__PURE__ */ __commonJS({ "node_modules/qr.js/lib/RSBlock.js": ((exports, module) => {
	var ECL = require_ErrorCorrectLevel();
	function QRRSBlock(totalCount, dataCount) {
		this.totalCount = totalCount;
		this.dataCount = dataCount;
	}
	QRRSBlock.RS_BLOCK_TABLE = [
		[
			1,
			26,
			19
		],
		[
			1,
			26,
			16
		],
		[
			1,
			26,
			13
		],
		[
			1,
			26,
			9
		],
		[
			1,
			44,
			34
		],
		[
			1,
			44,
			28
		],
		[
			1,
			44,
			22
		],
		[
			1,
			44,
			16
		],
		[
			1,
			70,
			55
		],
		[
			1,
			70,
			44
		],
		[
			2,
			35,
			17
		],
		[
			2,
			35,
			13
		],
		[
			1,
			100,
			80
		],
		[
			2,
			50,
			32
		],
		[
			2,
			50,
			24
		],
		[
			4,
			25,
			9
		],
		[
			1,
			134,
			108
		],
		[
			2,
			67,
			43
		],
		[
			2,
			33,
			15,
			2,
			34,
			16
		],
		[
			2,
			33,
			11,
			2,
			34,
			12
		],
		[
			2,
			86,
			68
		],
		[
			4,
			43,
			27
		],
		[
			4,
			43,
			19
		],
		[
			4,
			43,
			15
		],
		[
			2,
			98,
			78
		],
		[
			4,
			49,
			31
		],
		[
			2,
			32,
			14,
			4,
			33,
			15
		],
		[
			4,
			39,
			13,
			1,
			40,
			14
		],
		[
			2,
			121,
			97
		],
		[
			2,
			60,
			38,
			2,
			61,
			39
		],
		[
			4,
			40,
			18,
			2,
			41,
			19
		],
		[
			4,
			40,
			14,
			2,
			41,
			15
		],
		[
			2,
			146,
			116
		],
		[
			3,
			58,
			36,
			2,
			59,
			37
		],
		[
			4,
			36,
			16,
			4,
			37,
			17
		],
		[
			4,
			36,
			12,
			4,
			37,
			13
		],
		[
			2,
			86,
			68,
			2,
			87,
			69
		],
		[
			4,
			69,
			43,
			1,
			70,
			44
		],
		[
			6,
			43,
			19,
			2,
			44,
			20
		],
		[
			6,
			43,
			15,
			2,
			44,
			16
		],
		[
			4,
			101,
			81
		],
		[
			1,
			80,
			50,
			4,
			81,
			51
		],
		[
			4,
			50,
			22,
			4,
			51,
			23
		],
		[
			3,
			36,
			12,
			8,
			37,
			13
		],
		[
			2,
			116,
			92,
			2,
			117,
			93
		],
		[
			6,
			58,
			36,
			2,
			59,
			37
		],
		[
			4,
			46,
			20,
			6,
			47,
			21
		],
		[
			7,
			42,
			14,
			4,
			43,
			15
		],
		[
			4,
			133,
			107
		],
		[
			8,
			59,
			37,
			1,
			60,
			38
		],
		[
			8,
			44,
			20,
			4,
			45,
			21
		],
		[
			12,
			33,
			11,
			4,
			34,
			12
		],
		[
			3,
			145,
			115,
			1,
			146,
			116
		],
		[
			4,
			64,
			40,
			5,
			65,
			41
		],
		[
			11,
			36,
			16,
			5,
			37,
			17
		],
		[
			11,
			36,
			12,
			5,
			37,
			13
		],
		[
			5,
			109,
			87,
			1,
			110,
			88
		],
		[
			5,
			65,
			41,
			5,
			66,
			42
		],
		[
			5,
			54,
			24,
			7,
			55,
			25
		],
		[
			11,
			36,
			12
		],
		[
			5,
			122,
			98,
			1,
			123,
			99
		],
		[
			7,
			73,
			45,
			3,
			74,
			46
		],
		[
			15,
			43,
			19,
			2,
			44,
			20
		],
		[
			3,
			45,
			15,
			13,
			46,
			16
		],
		[
			1,
			135,
			107,
			5,
			136,
			108
		],
		[
			10,
			74,
			46,
			1,
			75,
			47
		],
		[
			1,
			50,
			22,
			15,
			51,
			23
		],
		[
			2,
			42,
			14,
			17,
			43,
			15
		],
		[
			5,
			150,
			120,
			1,
			151,
			121
		],
		[
			9,
			69,
			43,
			4,
			70,
			44
		],
		[
			17,
			50,
			22,
			1,
			51,
			23
		],
		[
			2,
			42,
			14,
			19,
			43,
			15
		],
		[
			3,
			141,
			113,
			4,
			142,
			114
		],
		[
			3,
			70,
			44,
			11,
			71,
			45
		],
		[
			17,
			47,
			21,
			4,
			48,
			22
		],
		[
			9,
			39,
			13,
			16,
			40,
			14
		],
		[
			3,
			135,
			107,
			5,
			136,
			108
		],
		[
			3,
			67,
			41,
			13,
			68,
			42
		],
		[
			15,
			54,
			24,
			5,
			55,
			25
		],
		[
			15,
			43,
			15,
			10,
			44,
			16
		],
		[
			4,
			144,
			116,
			4,
			145,
			117
		],
		[
			17,
			68,
			42
		],
		[
			17,
			50,
			22,
			6,
			51,
			23
		],
		[
			19,
			46,
			16,
			6,
			47,
			17
		],
		[
			2,
			139,
			111,
			7,
			140,
			112
		],
		[
			17,
			74,
			46
		],
		[
			7,
			54,
			24,
			16,
			55,
			25
		],
		[
			34,
			37,
			13
		],
		[
			4,
			151,
			121,
			5,
			152,
			122
		],
		[
			4,
			75,
			47,
			14,
			76,
			48
		],
		[
			11,
			54,
			24,
			14,
			55,
			25
		],
		[
			16,
			45,
			15,
			14,
			46,
			16
		],
		[
			6,
			147,
			117,
			4,
			148,
			118
		],
		[
			6,
			73,
			45,
			14,
			74,
			46
		],
		[
			11,
			54,
			24,
			16,
			55,
			25
		],
		[
			30,
			46,
			16,
			2,
			47,
			17
		],
		[
			8,
			132,
			106,
			4,
			133,
			107
		],
		[
			8,
			75,
			47,
			13,
			76,
			48
		],
		[
			7,
			54,
			24,
			22,
			55,
			25
		],
		[
			22,
			45,
			15,
			13,
			46,
			16
		],
		[
			10,
			142,
			114,
			2,
			143,
			115
		],
		[
			19,
			74,
			46,
			4,
			75,
			47
		],
		[
			28,
			50,
			22,
			6,
			51,
			23
		],
		[
			33,
			46,
			16,
			4,
			47,
			17
		],
		[
			8,
			152,
			122,
			4,
			153,
			123
		],
		[
			22,
			73,
			45,
			3,
			74,
			46
		],
		[
			8,
			53,
			23,
			26,
			54,
			24
		],
		[
			12,
			45,
			15,
			28,
			46,
			16
		],
		[
			3,
			147,
			117,
			10,
			148,
			118
		],
		[
			3,
			73,
			45,
			23,
			74,
			46
		],
		[
			4,
			54,
			24,
			31,
			55,
			25
		],
		[
			11,
			45,
			15,
			31,
			46,
			16
		],
		[
			7,
			146,
			116,
			7,
			147,
			117
		],
		[
			21,
			73,
			45,
			7,
			74,
			46
		],
		[
			1,
			53,
			23,
			37,
			54,
			24
		],
		[
			19,
			45,
			15,
			26,
			46,
			16
		],
		[
			5,
			145,
			115,
			10,
			146,
			116
		],
		[
			19,
			75,
			47,
			10,
			76,
			48
		],
		[
			15,
			54,
			24,
			25,
			55,
			25
		],
		[
			23,
			45,
			15,
			25,
			46,
			16
		],
		[
			13,
			145,
			115,
			3,
			146,
			116
		],
		[
			2,
			74,
			46,
			29,
			75,
			47
		],
		[
			42,
			54,
			24,
			1,
			55,
			25
		],
		[
			23,
			45,
			15,
			28,
			46,
			16
		],
		[
			17,
			145,
			115
		],
		[
			10,
			74,
			46,
			23,
			75,
			47
		],
		[
			10,
			54,
			24,
			35,
			55,
			25
		],
		[
			19,
			45,
			15,
			35,
			46,
			16
		],
		[
			17,
			145,
			115,
			1,
			146,
			116
		],
		[
			14,
			74,
			46,
			21,
			75,
			47
		],
		[
			29,
			54,
			24,
			19,
			55,
			25
		],
		[
			11,
			45,
			15,
			46,
			46,
			16
		],
		[
			13,
			145,
			115,
			6,
			146,
			116
		],
		[
			14,
			74,
			46,
			23,
			75,
			47
		],
		[
			44,
			54,
			24,
			7,
			55,
			25
		],
		[
			59,
			46,
			16,
			1,
			47,
			17
		],
		[
			12,
			151,
			121,
			7,
			152,
			122
		],
		[
			12,
			75,
			47,
			26,
			76,
			48
		],
		[
			39,
			54,
			24,
			14,
			55,
			25
		],
		[
			22,
			45,
			15,
			41,
			46,
			16
		],
		[
			6,
			151,
			121,
			14,
			152,
			122
		],
		[
			6,
			75,
			47,
			34,
			76,
			48
		],
		[
			46,
			54,
			24,
			10,
			55,
			25
		],
		[
			2,
			45,
			15,
			64,
			46,
			16
		],
		[
			17,
			152,
			122,
			4,
			153,
			123
		],
		[
			29,
			74,
			46,
			14,
			75,
			47
		],
		[
			49,
			54,
			24,
			10,
			55,
			25
		],
		[
			24,
			45,
			15,
			46,
			46,
			16
		],
		[
			4,
			152,
			122,
			18,
			153,
			123
		],
		[
			13,
			74,
			46,
			32,
			75,
			47
		],
		[
			48,
			54,
			24,
			14,
			55,
			25
		],
		[
			42,
			45,
			15,
			32,
			46,
			16
		],
		[
			20,
			147,
			117,
			4,
			148,
			118
		],
		[
			40,
			75,
			47,
			7,
			76,
			48
		],
		[
			43,
			54,
			24,
			22,
			55,
			25
		],
		[
			10,
			45,
			15,
			67,
			46,
			16
		],
		[
			19,
			148,
			118,
			6,
			149,
			119
		],
		[
			18,
			75,
			47,
			31,
			76,
			48
		],
		[
			34,
			54,
			24,
			34,
			55,
			25
		],
		[
			20,
			45,
			15,
			61,
			46,
			16
		]
	];
	QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
		var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
		if (rsBlock == void 0) throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
		var length = rsBlock.length / 3;
		var list = new Array();
		for (var i$1 = 0; i$1 < length; i$1++) {
			var count = rsBlock[i$1 * 3 + 0];
			var totalCount = rsBlock[i$1 * 3 + 1];
			var dataCount = rsBlock[i$1 * 3 + 2];
			for (var j = 0; j < count; j++) list.push(new QRRSBlock(totalCount, dataCount));
		}
		return list;
	};
	QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
		switch (errorCorrectLevel) {
			case ECL.L: return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
			case ECL.M: return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
			case ECL.Q: return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
			case ECL.H: return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
			default: return;
		}
	};
	module.exports = QRRSBlock;
}) });

//#endregion
//#region node_modules/qr.js/lib/BitBuffer.js
var require_BitBuffer = /* @__PURE__ */ __commonJS({ "node_modules/qr.js/lib/BitBuffer.js": ((exports, module) => {
	function QRBitBuffer() {
		this.buffer = new Array();
		this.length = 0;
	}
	QRBitBuffer.prototype = {
		get: function(index) {
			var bufIndex = Math.floor(index / 8);
			return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
		},
		put: function(num, length) {
			for (var i$1 = 0; i$1 < length; i$1++) this.putBit((num >>> length - i$1 - 1 & 1) == 1);
		},
		getLengthInBits: function() {
			return this.length;
		},
		putBit: function(bit) {
			var bufIndex = Math.floor(this.length / 8);
			if (this.buffer.length <= bufIndex) this.buffer.push(0);
			if (bit) this.buffer[bufIndex] |= 128 >>> this.length % 8;
			this.length++;
		}
	};
	module.exports = QRBitBuffer;
}) });

//#endregion
//#region node_modules/qr.js/lib/math.js
var require_math = /* @__PURE__ */ __commonJS({ "node_modules/qr.js/lib/math.js": ((exports, module) => {
	var QRMath = {
		glog: function(n) {
			if (n < 1) throw new Error("glog(" + n + ")");
			return QRMath.LOG_TABLE[n];
		},
		gexp: function(n) {
			while (n < 0) n += 255;
			while (n >= 256) n -= 255;
			return QRMath.EXP_TABLE[n];
		},
		EXP_TABLE: new Array(256),
		LOG_TABLE: new Array(256)
	};
	for (var i = 0; i < 8; i++) QRMath.EXP_TABLE[i] = 1 << i;
	for (var i = 8; i < 256; i++) QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
	for (var i = 0; i < 255; i++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
	module.exports = QRMath;
}) });

//#endregion
//#region node_modules/qr.js/lib/Polynomial.js
var require_Polynomial = /* @__PURE__ */ __commonJS({ "node_modules/qr.js/lib/Polynomial.js": ((exports, module) => {
	var math$1 = require_math();
	function QRPolynomial(num, shift) {
		if (num.length == void 0) throw new Error(num.length + "/" + shift);
		var offset = 0;
		while (offset < num.length && num[offset] == 0) offset++;
		this.num = new Array(num.length - offset + shift);
		for (var i$1 = 0; i$1 < num.length - offset; i$1++) this.num[i$1] = num[i$1 + offset];
	}
	QRPolynomial.prototype = {
		get: function(index) {
			return this.num[index];
		},
		getLength: function() {
			return this.num.length;
		},
		multiply: function(e) {
			var num = new Array(this.getLength() + e.getLength() - 1);
			for (var i$1 = 0; i$1 < this.getLength(); i$1++) for (var j = 0; j < e.getLength(); j++) num[i$1 + j] ^= math$1.gexp(math$1.glog(this.get(i$1)) + math$1.glog(e.get(j)));
			return new QRPolynomial(num, 0);
		},
		mod: function(e) {
			if (this.getLength() - e.getLength() < 0) return this;
			var ratio = math$1.glog(this.get(0)) - math$1.glog(e.get(0));
			var num = new Array(this.getLength());
			for (var i$1 = 0; i$1 < this.getLength(); i$1++) num[i$1] = this.get(i$1);
			for (var i$1 = 0; i$1 < e.getLength(); i$1++) num[i$1] ^= math$1.gexp(math$1.glog(e.get(i$1)) + ratio);
			return new QRPolynomial(num, 0).mod(e);
		}
	};
	module.exports = QRPolynomial;
}) });

//#endregion
//#region node_modules/qr.js/lib/util.js
var require_util = /* @__PURE__ */ __commonJS({ "node_modules/qr.js/lib/util.js": ((exports, module) => {
	var Mode = require_mode();
	var Polynomial$1 = require_Polynomial();
	var math = require_math();
	var QRMaskPattern = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};
	var QRUtil = {
		PATTERN_POSITION_TABLE: [
			[],
			[6, 18],
			[6, 22],
			[6, 26],
			[6, 30],
			[6, 34],
			[
				6,
				22,
				38
			],
			[
				6,
				24,
				42
			],
			[
				6,
				26,
				46
			],
			[
				6,
				28,
				50
			],
			[
				6,
				30,
				54
			],
			[
				6,
				32,
				58
			],
			[
				6,
				34,
				62
			],
			[
				6,
				26,
				46,
				66
			],
			[
				6,
				26,
				48,
				70
			],
			[
				6,
				26,
				50,
				74
			],
			[
				6,
				30,
				54,
				78
			],
			[
				6,
				30,
				56,
				82
			],
			[
				6,
				30,
				58,
				86
			],
			[
				6,
				34,
				62,
				90
			],
			[
				6,
				28,
				50,
				72,
				94
			],
			[
				6,
				26,
				50,
				74,
				98
			],
			[
				6,
				30,
				54,
				78,
				102
			],
			[
				6,
				28,
				54,
				80,
				106
			],
			[
				6,
				32,
				58,
				84,
				110
			],
			[
				6,
				30,
				58,
				86,
				114
			],
			[
				6,
				34,
				62,
				90,
				118
			],
			[
				6,
				26,
				50,
				74,
				98,
				122
			],
			[
				6,
				30,
				54,
				78,
				102,
				126
			],
			[
				6,
				26,
				52,
				78,
				104,
				130
			],
			[
				6,
				30,
				56,
				82,
				108,
				134
			],
			[
				6,
				34,
				60,
				86,
				112,
				138
			],
			[
				6,
				30,
				58,
				86,
				114,
				142
			],
			[
				6,
				34,
				62,
				90,
				118,
				146
			],
			[
				6,
				30,
				54,
				78,
				102,
				126,
				150
			],
			[
				6,
				24,
				50,
				76,
				102,
				128,
				154
			],
			[
				6,
				28,
				54,
				80,
				106,
				132,
				158
			],
			[
				6,
				32,
				58,
				84,
				110,
				136,
				162
			],
			[
				6,
				26,
				54,
				82,
				110,
				138,
				166
			],
			[
				6,
				30,
				58,
				86,
				114,
				142,
				170
			]
		],
		G15: 1335,
		G18: 7973,
		G15_MASK: 21522,
		getBCHTypeInfo: function(data) {
			var d = data << 10;
			while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
			return (data << 10 | d) ^ QRUtil.G15_MASK;
		},
		getBCHTypeNumber: function(data) {
			var d = data << 12;
			while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
			return data << 12 | d;
		},
		getBCHDigit: function(data) {
			var digit = 0;
			while (data != 0) {
				digit++;
				data >>>= 1;
			}
			return digit;
		},
		getPatternPosition: function(typeNumber) {
			return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
		},
		getMask: function(maskPattern, i$1, j) {
			switch (maskPattern) {
				case QRMaskPattern.PATTERN000: return (i$1 + j) % 2 == 0;
				case QRMaskPattern.PATTERN001: return i$1 % 2 == 0;
				case QRMaskPattern.PATTERN010: return j % 3 == 0;
				case QRMaskPattern.PATTERN011: return (i$1 + j) % 3 == 0;
				case QRMaskPattern.PATTERN100: return (Math.floor(i$1 / 2) + Math.floor(j / 3)) % 2 == 0;
				case QRMaskPattern.PATTERN101: return i$1 * j % 2 + i$1 * j % 3 == 0;
				case QRMaskPattern.PATTERN110: return (i$1 * j % 2 + i$1 * j % 3) % 2 == 0;
				case QRMaskPattern.PATTERN111: return (i$1 * j % 3 + (i$1 + j) % 2) % 2 == 0;
				default: throw new Error("bad maskPattern:" + maskPattern);
			}
		},
		getErrorCorrectPolynomial: function(errorCorrectLength) {
			var a = new Polynomial$1([1], 0);
			for (var i$1 = 0; i$1 < errorCorrectLength; i$1++) a = a.multiply(new Polynomial$1([1, math.gexp(i$1)], 0));
			return a;
		},
		getLengthInBits: function(mode$1, type) {
			if (1 <= type && type < 10) switch (mode$1) {
				case Mode.MODE_NUMBER: return 10;
				case Mode.MODE_ALPHA_NUM: return 9;
				case Mode.MODE_8BIT_BYTE: return 8;
				case Mode.MODE_KANJI: return 8;
				default: throw new Error("mode:" + mode$1);
			}
			else if (type < 27) switch (mode$1) {
				case Mode.MODE_NUMBER: return 12;
				case Mode.MODE_ALPHA_NUM: return 11;
				case Mode.MODE_8BIT_BYTE: return 16;
				case Mode.MODE_KANJI: return 10;
				default: throw new Error("mode:" + mode$1);
			}
			else if (type < 41) switch (mode$1) {
				case Mode.MODE_NUMBER: return 14;
				case Mode.MODE_ALPHA_NUM: return 13;
				case Mode.MODE_8BIT_BYTE: return 16;
				case Mode.MODE_KANJI: return 12;
				default: throw new Error("mode:" + mode$1);
			}
			else throw new Error("type:" + type);
		},
		getLostPoint: function(qrCode) {
			var moduleCount = qrCode.getModuleCount();
			var lostPoint = 0;
			for (var row = 0; row < moduleCount; row++) for (var col = 0; col < moduleCount; col++) {
				var sameCount = 0;
				var dark = qrCode.isDark(row, col);
				for (var r = -1; r <= 1; r++) {
					if (row + r < 0 || moduleCount <= row + r) continue;
					for (var c = -1; c <= 1; c++) {
						if (col + c < 0 || moduleCount <= col + c) continue;
						if (r == 0 && c == 0) continue;
						if (dark == qrCode.isDark(row + r, col + c)) sameCount++;
					}
				}
				if (sameCount > 5) lostPoint += 3 + sameCount - 5;
			}
			for (var row = 0; row < moduleCount - 1; row++) for (var col = 0; col < moduleCount - 1; col++) {
				var count = 0;
				if (qrCode.isDark(row, col)) count++;
				if (qrCode.isDark(row + 1, col)) count++;
				if (qrCode.isDark(row, col + 1)) count++;
				if (qrCode.isDark(row + 1, col + 1)) count++;
				if (count == 0 || count == 4) lostPoint += 3;
			}
			for (var row = 0; row < moduleCount; row++) for (var col = 0; col < moduleCount - 6; col++) if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) lostPoint += 40;
			for (var col = 0; col < moduleCount; col++) for (var row = 0; row < moduleCount - 6; row++) if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) lostPoint += 40;
			var darkCount = 0;
			for (var col = 0; col < moduleCount; col++) for (var row = 0; row < moduleCount; row++) if (qrCode.isDark(row, col)) darkCount++;
			var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
			lostPoint += ratio * 10;
			return lostPoint;
		}
	};
	module.exports = QRUtil;
}) });

//#endregion
//#region node_modules/qr.js/lib/QRCode.js
var require_QRCode = /* @__PURE__ */ __commonJS({ "node_modules/qr.js/lib/QRCode.js": ((exports, module) => {
	var BitByte = require__8BitByte();
	var RSBlock = require_RSBlock();
	var BitBuffer = require_BitBuffer();
	var util = require_util();
	var Polynomial = require_Polynomial();
	function QRCode$1(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}
	var proto = QRCode$1.prototype;
	proto.addData = function(data) {
		var newData = new BitByte(data);
		this.dataList.push(newData);
		this.dataCache = null;
	};
	proto.isDark = function(row, col) {
		if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) throw new Error(row + "," + col);
		return this.modules[row][col];
	};
	proto.getModuleCount = function() {
		return this.moduleCount;
	};
	proto.make = function() {
		if (this.typeNumber < 1) {
			var typeNumber = 1;
			for (typeNumber = 1; typeNumber < 40; typeNumber++) {
				var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
				var buffer = new BitBuffer();
				var totalDataCount = 0;
				for (var i$1 = 0; i$1 < rsBlocks.length; i$1++) totalDataCount += rsBlocks[i$1].dataCount;
				for (var i$1 = 0; i$1 < this.dataList.length; i$1++) {
					var data = this.dataList[i$1];
					buffer.put(data.mode, 4);
					buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
					data.write(buffer);
				}
				if (buffer.getLengthInBits() <= totalDataCount * 8) break;
			}
			this.typeNumber = typeNumber;
		}
		this.makeImpl(false, this.getBestMaskPattern());
	};
	proto.makeImpl = function(test, maskPattern) {
		this.moduleCount = this.typeNumber * 4 + 17;
		this.modules = new Array(this.moduleCount);
		for (var row = 0; row < this.moduleCount; row++) {
			this.modules[row] = new Array(this.moduleCount);
			for (var col = 0; col < this.moduleCount; col++) this.modules[row][col] = null;
		}
		this.setupPositionProbePattern(0, 0);
		this.setupPositionProbePattern(this.moduleCount - 7, 0);
		this.setupPositionProbePattern(0, this.moduleCount - 7);
		this.setupPositionAdjustPattern();
		this.setupTimingPattern();
		this.setupTypeInfo(test, maskPattern);
		if (this.typeNumber >= 7) this.setupTypeNumber(test);
		if (this.dataCache == null) this.dataCache = QRCode$1.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
		this.mapData(this.dataCache, maskPattern);
	};
	proto.setupPositionProbePattern = function(row, col) {
		for (var r = -1; r <= 7; r++) {
			if (row + r <= -1 || this.moduleCount <= row + r) continue;
			for (var c = -1; c <= 7; c++) {
				if (col + c <= -1 || this.moduleCount <= col + c) continue;
				if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) this.modules[row + r][col + c] = true;
				else this.modules[row + r][col + c] = false;
			}
		}
	};
	proto.getBestMaskPattern = function() {
		var minLostPoint = 0;
		var pattern = 0;
		for (var i$1 = 0; i$1 < 8; i$1++) {
			this.makeImpl(true, i$1);
			var lostPoint = util.getLostPoint(this);
			if (i$1 == 0 || minLostPoint > lostPoint) {
				minLostPoint = lostPoint;
				pattern = i$1;
			}
		}
		return pattern;
	};
	proto.createMovieClip = function(target_mc, instance_name, depth) {
		var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
		var cs = 1;
		this.make();
		for (var row = 0; row < this.modules.length; row++) {
			var y = row * cs;
			for (var col = 0; col < this.modules[row].length; col++) {
				var x = col * cs;
				if (this.modules[row][col]) {
					qr_mc.beginFill(0, 100);
					qr_mc.moveTo(x, y);
					qr_mc.lineTo(x + cs, y);
					qr_mc.lineTo(x + cs, y + cs);
					qr_mc.lineTo(x, y + cs);
					qr_mc.endFill();
				}
			}
		}
		return qr_mc;
	};
	proto.setupTimingPattern = function() {
		for (var r = 8; r < this.moduleCount - 8; r++) {
			if (this.modules[r][6] != null) continue;
			this.modules[r][6] = r % 2 == 0;
		}
		for (var c = 8; c < this.moduleCount - 8; c++) {
			if (this.modules[6][c] != null) continue;
			this.modules[6][c] = c % 2 == 0;
		}
	};
	proto.setupPositionAdjustPattern = function() {
		var pos = util.getPatternPosition(this.typeNumber);
		for (var i$1 = 0; i$1 < pos.length; i$1++) for (var j = 0; j < pos.length; j++) {
			var row = pos[i$1];
			var col = pos[j];
			if (this.modules[row][col] != null) continue;
			for (var r = -2; r <= 2; r++) for (var c = -2; c <= 2; c++) if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) this.modules[row + r][col + c] = true;
			else this.modules[row + r][col + c] = false;
		}
	};
	proto.setupTypeNumber = function(test) {
		var bits = util.getBCHTypeNumber(this.typeNumber);
		for (var i$1 = 0; i$1 < 18; i$1++) {
			var mod = !test && (bits >> i$1 & 1) == 1;
			this.modules[Math.floor(i$1 / 3)][i$1 % 3 + this.moduleCount - 8 - 3] = mod;
		}
		for (var i$1 = 0; i$1 < 18; i$1++) {
			var mod = !test && (bits >> i$1 & 1) == 1;
			this.modules[i$1 % 3 + this.moduleCount - 8 - 3][Math.floor(i$1 / 3)] = mod;
		}
	};
	proto.setupTypeInfo = function(test, maskPattern) {
		var data = this.errorCorrectLevel << 3 | maskPattern;
		var bits = util.getBCHTypeInfo(data);
		for (var i$1 = 0; i$1 < 15; i$1++) {
			var mod = !test && (bits >> i$1 & 1) == 1;
			if (i$1 < 6) this.modules[i$1][8] = mod;
			else if (i$1 < 8) this.modules[i$1 + 1][8] = mod;
			else this.modules[this.moduleCount - 15 + i$1][8] = mod;
		}
		for (var i$1 = 0; i$1 < 15; i$1++) {
			var mod = !test && (bits >> i$1 & 1) == 1;
			if (i$1 < 8) this.modules[8][this.moduleCount - i$1 - 1] = mod;
			else if (i$1 < 9) this.modules[8][15 - i$1 - 1 + 1] = mod;
			else this.modules[8][15 - i$1 - 1] = mod;
		}
		this.modules[this.moduleCount - 8][8] = !test;
	};
	proto.mapData = function(data, maskPattern) {
		var inc = -1;
		var row = this.moduleCount - 1;
		var bitIndex = 7;
		var byteIndex = 0;
		for (var col = this.moduleCount - 1; col > 0; col -= 2) {
			if (col == 6) col--;
			while (true) {
				for (var c = 0; c < 2; c++) if (this.modules[row][col - c] == null) {
					var dark = false;
					if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) == 1;
					if (util.getMask(maskPattern, row, col - c)) dark = !dark;
					this.modules[row][col - c] = dark;
					bitIndex--;
					if (bitIndex == -1) {
						byteIndex++;
						bitIndex = 7;
					}
				}
				row += inc;
				if (row < 0 || this.moduleCount <= row) {
					row -= inc;
					inc = -inc;
					break;
				}
			}
		}
	};
	QRCode$1.PAD0 = 236;
	QRCode$1.PAD1 = 17;
	QRCode$1.createData = function(typeNumber, errorCorrectLevel, dataList) {
		var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
		var buffer = new BitBuffer();
		for (var i$1 = 0; i$1 < dataList.length; i$1++) {
			var data = dataList[i$1];
			buffer.put(data.mode, 4);
			buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber));
			data.write(buffer);
		}
		var totalDataCount = 0;
		for (var i$1 = 0; i$1 < rsBlocks.length; i$1++) totalDataCount += rsBlocks[i$1].dataCount;
		if (buffer.getLengthInBits() > totalDataCount * 8) throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
		if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) buffer.put(0, 4);
		while (buffer.getLengthInBits() % 8 != 0) buffer.putBit(false);
		while (true) {
			if (buffer.getLengthInBits() >= totalDataCount * 8) break;
			buffer.put(QRCode$1.PAD0, 8);
			if (buffer.getLengthInBits() >= totalDataCount * 8) break;
			buffer.put(QRCode$1.PAD1, 8);
		}
		return QRCode$1.createBytes(buffer, rsBlocks);
	};
	QRCode$1.createBytes = function(buffer, rsBlocks) {
		var offset = 0;
		var maxDcCount = 0;
		var maxEcCount = 0;
		var dcdata = new Array(rsBlocks.length);
		var ecdata = new Array(rsBlocks.length);
		for (var r = 0; r < rsBlocks.length; r++) {
			var dcCount = rsBlocks[r].dataCount;
			var ecCount = rsBlocks[r].totalCount - dcCount;
			maxDcCount = Math.max(maxDcCount, dcCount);
			maxEcCount = Math.max(maxEcCount, ecCount);
			dcdata[r] = new Array(dcCount);
			for (var i$1 = 0; i$1 < dcdata[r].length; i$1++) dcdata[r][i$1] = 255 & buffer.buffer[i$1 + offset];
			offset += dcCount;
			var rsPoly = util.getErrorCorrectPolynomial(ecCount);
			var modPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1).mod(rsPoly);
			ecdata[r] = new Array(rsPoly.getLength() - 1);
			for (var i$1 = 0; i$1 < ecdata[r].length; i$1++) {
				var modIndex = i$1 + modPoly.getLength() - ecdata[r].length;
				ecdata[r][i$1] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
			}
		}
		var totalCodeCount = 0;
		for (var i$1 = 0; i$1 < rsBlocks.length; i$1++) totalCodeCount += rsBlocks[i$1].totalCount;
		var data = new Array(totalCodeCount);
		var index = 0;
		for (var i$1 = 0; i$1 < maxDcCount; i$1++) for (var r = 0; r < rsBlocks.length; r++) if (i$1 < dcdata[r].length) data[index++] = dcdata[r][i$1];
		for (var i$1 = 0; i$1 < maxEcCount; i$1++) for (var r = 0; r < rsBlocks.length; r++) if (i$1 < ecdata[r].length) data[index++] = ecdata[r][i$1];
		return data;
	};
	module.exports = QRCode$1;
}) });

//#endregion
//#region node_modules/react-qr-code/lib/QRCodeSvg/index.js
var require_QRCodeSvg = /* @__PURE__ */ __commonJS({ "node_modules/react-qr-code/lib/QRCodeSvg/index.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var _extends$1 = Object.assign || function(target) {
		for (var i$1 = 1; i$1 < arguments.length; i$1++) {
			var source = arguments[i$1];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	var _propTypes$1 = require_prop_types();
	var _propTypes2$1 = _interopRequireDefault$1(_propTypes$1);
	var _react$1 = require_react();
	var _react2$1 = _interopRequireDefault$1(_react$1);
	function _interopRequireDefault$1(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function _objectWithoutProperties$1(obj, keys) {
		var target = {};
		for (var i$1 in obj) {
			if (keys.indexOf(i$1) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i$1)) continue;
			target[i$1] = obj[i$1];
		}
		return target;
	}
	var propTypes$1 = {
		bgColor: _propTypes2$1.default.oneOfType([_propTypes2$1.default.object, _propTypes2$1.default.string]).isRequired,
		bgD: _propTypes2$1.default.string.isRequired,
		fgColor: _propTypes2$1.default.oneOfType([_propTypes2$1.default.object, _propTypes2$1.default.string]).isRequired,
		fgD: _propTypes2$1.default.string.isRequired,
		size: _propTypes2$1.default.number.isRequired,
		title: _propTypes2$1.default.string,
		viewBoxSize: _propTypes2$1.default.number.isRequired,
		xmlns: _propTypes2$1.default.string
	};
	var QRCodeSvg = (0, _react$1.forwardRef)(function(_ref, ref) {
		var bgColor = _ref.bgColor, bgD = _ref.bgD, fgD = _ref.fgD, fgColor = _ref.fgColor, size = _ref.size, title = _ref.title, viewBoxSize = _ref.viewBoxSize, _ref$xmlns = _ref.xmlns, xmlns = _ref$xmlns === void 0 ? "http://www.w3.org/2000/svg" : _ref$xmlns, props = _objectWithoutProperties$1(_ref, [
			"bgColor",
			"bgD",
			"fgD",
			"fgColor",
			"size",
			"title",
			"viewBoxSize",
			"xmlns"
		]);
		return _react2$1.default.createElement("svg", _extends$1({}, props, {
			height: size,
			ref,
			viewBox: "0 0 " + viewBoxSize + " " + viewBoxSize,
			width: size,
			xmlns
		}), title ? _react2$1.default.createElement("title", null, title) : null, _react2$1.default.createElement("path", {
			d: bgD,
			fill: bgColor
		}), _react2$1.default.createElement("path", {
			d: fgD,
			fill: fgColor
		}));
	});
	QRCodeSvg.displayName = "QRCodeSvg";
	QRCodeSvg.propTypes = propTypes$1;
	exports.default = QRCodeSvg;
}) });

//#endregion
//#region node_modules/react-qr-code/lib/index.js
var require_lib = /* @__PURE__ */ __commonJS({ "node_modules/react-qr-code/lib/index.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var _extends = Object.assign || function(target) {
		for (var i$1 = 1; i$1 < arguments.length; i$1++) {
			var source = arguments[i$1];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	var _propTypes = require_prop_types();
	var _propTypes2 = _interopRequireDefault(_propTypes);
	var _ErrorCorrectLevel = require_ErrorCorrectLevel();
	var _ErrorCorrectLevel2 = _interopRequireDefault(_ErrorCorrectLevel);
	var _QRCode = require_QRCode();
	var _QRCode2 = _interopRequireDefault(_QRCode);
	var _react = require_react();
	var _react2 = _interopRequireDefault(_react);
	var _QRCodeSvg = require_QRCodeSvg();
	var _QRCodeSvg2 = _interopRequireDefault(_QRCodeSvg);
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function _objectWithoutProperties(obj, keys) {
		var target = {};
		for (var i$1 in obj) {
			if (keys.indexOf(i$1) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i$1)) continue;
			target[i$1] = obj[i$1];
		}
		return target;
	}
	var propTypes = {
		bgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
		fgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
		level: _propTypes2.default.string,
		size: _propTypes2.default.number,
		value: _propTypes2.default.string.isRequired
	};
	var QRCode = (0, _react.forwardRef)(function(_ref, ref) {
		var _ref$bgColor = _ref.bgColor, bgColor = _ref$bgColor === void 0 ? "#FFFFFF" : _ref$bgColor, _ref$fgColor = _ref.fgColor, fgColor = _ref$fgColor === void 0 ? "#000000" : _ref$fgColor, _ref$level = _ref.level, level = _ref$level === void 0 ? "L" : _ref$level, _ref$size = _ref.size, size = _ref$size === void 0 ? 256 : _ref$size, value = _ref.value, props = _objectWithoutProperties(_ref, [
			"bgColor",
			"fgColor",
			"level",
			"size",
			"value"
		]);
		var qrcode = new _QRCode2.default(-1, _ErrorCorrectLevel2.default[level]);
		qrcode.addData(value);
		qrcode.make();
		var cells = qrcode.modules;
		return _react2.default.createElement(_QRCodeSvg2.default, _extends({}, props, {
			bgColor,
			bgD: cells.map(function(row, rowIndex) {
				return row.map(function(cell, cellIndex) {
					return !cell ? "M " + cellIndex + " " + rowIndex + " l 1 0 0 1 -1 0 Z" : "";
				}).join(" ");
			}).join(" "),
			fgColor,
			fgD: cells.map(function(row, rowIndex) {
				return row.map(function(cell, cellIndex) {
					return cell ? "M " + cellIndex + " " + rowIndex + " l 1 0 0 1 -1 0 Z" : "";
				}).join(" ");
			}).join(" "),
			ref,
			size,
			viewBoxSize: cells.length
		}));
	});
	exports.QRCode = QRCode;
	QRCode.displayName = "QRCode";
	QRCode.propTypes = propTypes;
	exports.default = QRCode;
}) });

//#endregion
export default require_lib();

//# sourceMappingURL=react-qr-code.js.map