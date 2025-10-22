import { __commonJS, __toESM } from "./chunk-DL887vQu.js";
import { _typeof as _typeof$1 } from "./typeof-BZDReiG_.js";

//#region node_modules/core-js/internals/global-this.js
var require_global_this = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/global-this.js": ((exports, module) => {
	var check = function(it) {
		return it && it.Math === Math && it;
	};
	module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || (function() {
		return this;
	})() || Function("return this")();
}) });

//#endregion
//#region node_modules/core-js/internals/fails.js
var require_fails = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/fails.js": ((exports, module) => {
	module.exports = function(exec$2) {
		try {
			return !!exec$2();
		} catch (error) {
			return true;
		}
	};
}) });

//#endregion
//#region node_modules/core-js/internals/descriptors.js
var require_descriptors = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/descriptors.js": ((exports, module) => {
	var fails$21 = require_fails();
	module.exports = !fails$21(function() {
		return Object.defineProperty({}, 1, { get: function() {
			return 7;
		} })[1] !== 7;
	});
}) });

//#endregion
//#region node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/function-bind-native.js": ((exports, module) => {
	var fails$20 = require_fails();
	module.exports = !fails$20(function() {
		var test$2 = (function() {}).bind();
		return typeof test$2 != "function" || test$2.hasOwnProperty("prototype");
	});
}) });

//#endregion
//#region node_modules/core-js/internals/function-call.js
var require_function_call = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/function-call.js": ((exports, module) => {
	var NATIVE_BIND$3 = require_function_bind_native();
	var call$19 = Function.prototype.call;
	module.exports = NATIVE_BIND$3 ? call$19.bind(call$19) : function() {
		return call$19.apply(call$19, arguments);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-property-is-enumerable.js": ((exports) => {
	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;
	var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
	exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
		var descriptor = getOwnPropertyDescriptor$4(this, V);
		return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;
}) });

//#endregion
//#region node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/create-property-descriptor.js": ((exports, module) => {
	module.exports = function(bitmap, value) {
		return {
			enumerable: !(bitmap & 1),
			configurable: !(bitmap & 2),
			writable: !(bitmap & 4),
			value
		};
	};
}) });

//#endregion
//#region node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/function-uncurry-this.js": ((exports, module) => {
	var NATIVE_BIND$2 = require_function_bind_native();
	var FunctionPrototype$2 = Function.prototype;
	var call$18 = FunctionPrototype$2.call;
	var uncurryThisWithBind = NATIVE_BIND$2 && FunctionPrototype$2.bind.bind(call$18, call$18);
	module.exports = NATIVE_BIND$2 ? uncurryThisWithBind : function(fn) {
		return function() {
			return call$18.apply(fn, arguments);
		};
	};
}) });

//#endregion
//#region node_modules/core-js/internals/classof-raw.js
var require_classof_raw = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/classof-raw.js": ((exports, module) => {
	var uncurryThis$25 = require_function_uncurry_this();
	var toString$10 = uncurryThis$25({}.toString);
	var stringSlice$7 = uncurryThis$25("".slice);
	module.exports = function(it) {
		return stringSlice$7(toString$10(it), 8, -1);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/indexed-object.js
var require_indexed_object = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/indexed-object.js": ((exports, module) => {
	var uncurryThis$24 = require_function_uncurry_this();
	var fails$19 = require_fails();
	var classof$7 = require_classof_raw();
	var $Object$4 = Object;
	var split = uncurryThis$24("".split);
	module.exports = fails$19(function() {
		return !$Object$4("z").propertyIsEnumerable(0);
	}) ? function(it) {
		return classof$7(it) === "String" ? split(it, "") : $Object$4(it);
	} : $Object$4;
}) });

//#endregion
//#region node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-null-or-undefined.js": ((exports, module) => {
	module.exports = function(it) {
		return it === null || it === void 0;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/require-object-coercible.js": ((exports, module) => {
	var isNullOrUndefined$3 = require_is_null_or_undefined();
	var $TypeError$15 = TypeError;
	module.exports = function(it) {
		if (isNullOrUndefined$3(it)) throw new $TypeError$15("Can't call method on " + it);
		return it;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/to-indexed-object.js": ((exports, module) => {
	var IndexedObject$1 = require_indexed_object();
	var requireObjectCoercible$10 = require_require_object_coercible();
	module.exports = function(it) {
		return IndexedObject$1(requireObjectCoercible$10(it));
	};
}) });

//#endregion
//#region node_modules/core-js/internals/is-callable.js
var require_is_callable = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-callable.js": ((exports, module) => {
	var documentAll = typeof document == "object" && document.all;
	module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
		return typeof argument == "function" || argument === documentAll;
	} : function(argument) {
		return typeof argument == "function";
	};
}) });

//#endregion
//#region node_modules/core-js/internals/is-object.js
var require_is_object = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-object.js": ((exports, module) => {
	var isCallable$20 = require_is_callable();
	module.exports = function(it) {
		return typeof it == "object" ? it !== null : isCallable$20(it);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/get-built-in.js
var require_get_built_in = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/get-built-in.js": ((exports, module) => {
	var globalThis$19 = require_global_this();
	var isCallable$19 = require_is_callable();
	var aFunction = function(argument) {
		return isCallable$19(argument) ? argument : void 0;
	};
	module.exports = function(namespace, method$1) {
		return arguments.length < 2 ? aFunction(globalThis$19[namespace]) : globalThis$19[namespace] && globalThis$19[namespace][method$1];
	};
}) });

//#endregion
//#region node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-is-prototype-of.js": ((exports, module) => {
	var uncurryThis$23 = require_function_uncurry_this();
	module.exports = uncurryThis$23({}.isPrototypeOf);
}) });

//#endregion
//#region node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/environment-user-agent.js": ((exports, module) => {
	var navigator = require_global_this().navigator;
	var userAgent$5 = navigator && navigator.userAgent;
	module.exports = userAgent$5 ? String(userAgent$5) : "";
}) });

//#endregion
//#region node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/environment-v8-version.js": ((exports, module) => {
	var globalThis$18 = require_global_this();
	var userAgent$4 = require_environment_user_agent();
	var process$4 = globalThis$18.process;
	var Deno$1 = globalThis$18.Deno;
	var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
	var v8 = versions && versions.v8;
	var match, version;
	if (v8) {
		match = v8.split(".");
		version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}
	if (!version && userAgent$4) {
		match = userAgent$4.match(/Edge\/(\d+)/);
		if (!match || match[1] >= 74) {
			match = userAgent$4.match(/Chrome\/(\d+)/);
			if (match) version = +match[1];
		}
	}
	module.exports = version;
}) });

//#endregion
//#region node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/symbol-constructor-detection.js": ((exports, module) => {
	var V8_VERSION$1 = require_environment_v8_version();
	var fails$18 = require_fails();
	var $String$5 = require_global_this().String;
	module.exports = !!Object.getOwnPropertySymbols && !fails$18(function() {
		var symbol = Symbol("symbol detection");
		return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
	});
}) });

//#endregion
//#region node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/use-symbol-as-uid.js": ((exports, module) => {
	var NATIVE_SYMBOL$1 = require_symbol_constructor_detection();
	module.exports = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == "symbol";
}) });

//#endregion
//#region node_modules/core-js/internals/is-symbol.js
var require_is_symbol = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-symbol.js": ((exports, module) => {
	var getBuiltIn$6 = require_get_built_in();
	var isCallable$18 = require_is_callable();
	var isPrototypeOf$3 = require_object_is_prototype_of();
	var USE_SYMBOL_AS_UID$1 = require_use_symbol_as_uid();
	var $Object$3 = Object;
	module.exports = USE_SYMBOL_AS_UID$1 ? function(it) {
		return typeof it == "symbol";
	} : function(it) {
		var $Symbol = getBuiltIn$6("Symbol");
		return isCallable$18($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$3(it));
	};
}) });

//#endregion
//#region node_modules/core-js/internals/try-to-string.js
var require_try_to_string = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/try-to-string.js": ((exports, module) => {
	var $String$4 = String;
	module.exports = function(argument) {
		try {
			return $String$4(argument);
		} catch (error) {
			return "Object";
		}
	};
}) });

//#endregion
//#region node_modules/core-js/internals/a-callable.js
var require_a_callable = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/a-callable.js": ((exports, module) => {
	var isCallable$17 = require_is_callable();
	var tryToString$3 = require_try_to_string();
	var $TypeError$14 = TypeError;
	module.exports = function(argument) {
		if (isCallable$17(argument)) return argument;
		throw new $TypeError$14(tryToString$3(argument) + " is not a function");
	};
}) });

//#endregion
//#region node_modules/core-js/internals/get-method.js
var require_get_method = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/get-method.js": ((exports, module) => {
	var aCallable$8 = require_a_callable();
	var isNullOrUndefined$2 = require_is_null_or_undefined();
	module.exports = function(V, P) {
		var func = V[P];
		return isNullOrUndefined$2(func) ? void 0 : aCallable$8(func);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/ordinary-to-primitive.js": ((exports, module) => {
	var call$17 = require_function_call();
	var isCallable$16 = require_is_callable();
	var isObject$13 = require_is_object();
	var $TypeError$13 = TypeError;
	module.exports = function(input, pref) {
		var fn, val;
		if (pref === "string" && isCallable$16(fn = input.toString) && !isObject$13(val = call$17(fn, input))) return val;
		if (isCallable$16(fn = input.valueOf) && !isObject$13(val = call$17(fn, input))) return val;
		if (pref !== "string" && isCallable$16(fn = input.toString) && !isObject$13(val = call$17(fn, input))) return val;
		throw new $TypeError$13("Can't convert object to primitive value");
	};
}) });

//#endregion
//#region node_modules/core-js/internals/is-pure.js
var require_is_pure = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-pure.js": ((exports, module) => {
	module.exports = false;
}) });

//#endregion
//#region node_modules/core-js/internals/define-global-property.js
var require_define_global_property = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/define-global-property.js": ((exports, module) => {
	var globalThis$17 = require_global_this();
	var defineProperty$5 = Object.defineProperty;
	module.exports = function(key, value) {
		try {
			defineProperty$5(globalThis$17, key, {
				value,
				configurable: true,
				writable: true
			});
		} catch (error) {
			globalThis$17[key] = value;
		}
		return value;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/shared-store.js
var require_shared_store = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/shared-store.js": ((exports, module) => {
	var IS_PURE$9 = require_is_pure();
	var globalThis$16 = require_global_this();
	var defineGlobalProperty$2 = require_define_global_property();
	var SHARED = "__core-js_shared__";
	var store$3 = module.exports = globalThis$16[SHARED] || defineGlobalProperty$2(SHARED, {});
	(store$3.versions || (store$3.versions = [])).push({
		version: "3.46.0",
		mode: IS_PURE$9 ? "pure" : "global",
		copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
		license: "https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",
		source: "https://github.com/zloirock/core-js"
	});
}) });

//#endregion
//#region node_modules/core-js/internals/shared.js
var require_shared = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/shared.js": ((exports, module) => {
	var store$2 = require_shared_store();
	module.exports = function(key, value) {
		return store$2[key] || (store$2[key] = value || {});
	};
}) });

//#endregion
//#region node_modules/core-js/internals/to-object.js
var require_to_object = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/to-object.js": ((exports, module) => {
	var requireObjectCoercible$9 = require_require_object_coercible();
	var $Object$2 = Object;
	module.exports = function(argument) {
		return $Object$2(requireObjectCoercible$9(argument));
	};
}) });

//#endregion
//#region node_modules/core-js/internals/has-own-property.js
var require_has_own_property = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/has-own-property.js": ((exports, module) => {
	var uncurryThis$22 = require_function_uncurry_this();
	var toObject$3 = require_to_object();
	var hasOwnProperty = uncurryThis$22({}.hasOwnProperty);
	module.exports = Object.hasOwn || function hasOwn$11(it, key) {
		return hasOwnProperty(toObject$3(it), key);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/uid.js
var require_uid = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/uid.js": ((exports, module) => {
	var uncurryThis$21 = require_function_uncurry_this();
	var id$1 = 0;
	var postfix = Math.random();
	var toString$9 = uncurryThis$21(1.1.toString);
	module.exports = function(key) {
		return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$9(++id$1 + postfix, 36);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/well-known-symbol.js": ((exports, module) => {
	var globalThis$15 = require_global_this();
	var shared$3 = require_shared();
	var hasOwn$10 = require_has_own_property();
	var uid$1 = require_uid();
	var NATIVE_SYMBOL = require_symbol_constructor_detection();
	var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
	var Symbol$1 = globalThis$15.Symbol;
	var WellKnownSymbolsStore = shared$3("wks");
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1["for"] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
	module.exports = function(name) {
		if (!hasOwn$10(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$10(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol("Symbol." + name);
		return WellKnownSymbolsStore[name];
	};
}) });

//#endregion
//#region node_modules/core-js/internals/to-primitive.js
var require_to_primitive = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/to-primitive.js": ((exports, module) => {
	var call$16 = require_function_call();
	var isObject$12 = require_is_object();
	var isSymbol$1 = require_is_symbol();
	var getMethod$5 = require_get_method();
	var ordinaryToPrimitive = require_ordinary_to_primitive();
	var wellKnownSymbol$7 = require_well_known_symbol();
	var $TypeError$12 = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$7("toPrimitive");
	module.exports = function(input, pref) {
		if (!isObject$12(input) || isSymbol$1(input)) return input;
		var exoticToPrim = getMethod$5(input, TO_PRIMITIVE);
		var result;
		if (exoticToPrim) {
			if (pref === void 0) pref = "default";
			result = call$16(exoticToPrim, input, pref);
			if (!isObject$12(result) || isSymbol$1(result)) return result;
			throw new $TypeError$12("Can't convert object to primitive value");
		}
		if (pref === void 0) pref = "number";
		return ordinaryToPrimitive(input, pref);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/to-property-key.js
var require_to_property_key = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/to-property-key.js": ((exports, module) => {
	var toPrimitive$1 = require_to_primitive();
	var isSymbol = require_is_symbol();
	module.exports = function(argument) {
		var key = toPrimitive$1(argument, "string");
		return isSymbol(key) ? key : key + "";
	};
}) });

//#endregion
//#region node_modules/core-js/internals/document-create-element.js
var require_document_create_element = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/document-create-element.js": ((exports, module) => {
	var globalThis$14 = require_global_this();
	var isObject$11 = require_is_object();
	var document$3 = globalThis$14.document;
	var EXISTS$1 = isObject$11(document$3) && isObject$11(document$3.createElement);
	module.exports = function(it) {
		return EXISTS$1 ? document$3.createElement(it) : {};
	};
}) });

//#endregion
//#region node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/ie8-dom-define.js": ((exports, module) => {
	var DESCRIPTORS$10 = require_descriptors();
	var fails$17 = require_fails();
	var createElement$1 = require_document_create_element();
	module.exports = !DESCRIPTORS$10 && !fails$17(function() {
		return Object.defineProperty(createElement$1("div"), "a", { get: function() {
			return 7;
		} }).a !== 7;
	});
}) });

//#endregion
//#region node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-get-own-property-descriptor.js": ((exports) => {
	var DESCRIPTORS$9 = require_descriptors();
	var call$15 = require_function_call();
	var propertyIsEnumerableModule = require_object_property_is_enumerable();
	var createPropertyDescriptor$2 = require_create_property_descriptor();
	var toIndexedObject$4 = require_to_indexed_object();
	var toPropertyKey$2 = require_to_property_key();
	var hasOwn$9 = require_has_own_property();
	var IE8_DOM_DEFINE$1 = require_ie8_dom_define();
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	exports.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor$5(O$1, P) {
		O$1 = toIndexedObject$4(O$1);
		P = toPropertyKey$2(P);
		if (IE8_DOM_DEFINE$1) try {
			return $getOwnPropertyDescriptor$1(O$1, P);
		} catch (error) {}
		if (hasOwn$9(O$1, P)) return createPropertyDescriptor$2(!call$15(propertyIsEnumerableModule.f, O$1, P), O$1[P]);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/v8-prototype-define-bug.js": ((exports, module) => {
	var DESCRIPTORS$8 = require_descriptors();
	var fails$16 = require_fails();
	module.exports = DESCRIPTORS$8 && fails$16(function() {
		return Object.defineProperty(function() {}, "prototype", {
			value: 42,
			writable: false
		}).prototype !== 42;
	});
}) });

//#endregion
//#region node_modules/core-js/internals/an-object.js
var require_an_object = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/an-object.js": ((exports, module) => {
	var isObject$10 = require_is_object();
	var $String$3 = String;
	var $TypeError$11 = TypeError;
	module.exports = function(argument) {
		if (isObject$10(argument)) return argument;
		throw new $TypeError$11($String$3(argument) + " is not an object");
	};
}) });

//#endregion
//#region node_modules/core-js/internals/object-define-property.js
var require_object_define_property = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-define-property.js": ((exports) => {
	var DESCRIPTORS$7 = require_descriptors();
	var IE8_DOM_DEFINE = require_ie8_dom_define();
	var V8_PROTOTYPE_DEFINE_BUG$1 = require_v8_prototype_define_bug();
	var anObject$14 = require_an_object();
	var toPropertyKey$1 = require_to_property_key();
	var $TypeError$10 = TypeError;
	var $defineProperty = Object.defineProperty;
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = "enumerable";
	var CONFIGURABLE$1 = "configurable";
	var WRITABLE = "writable";
	exports.f = DESCRIPTORS$7 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty$6(O$1, P, Attributes) {
		anObject$14(O$1);
		P = toPropertyKey$1(P);
		anObject$14(Attributes);
		if (typeof O$1 === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
			var current = $getOwnPropertyDescriptor(O$1, P);
			if (current && current[WRITABLE]) {
				O$1[P] = Attributes.value;
				Attributes = {
					configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
					enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
					writable: false
				};
			}
		}
		return $defineProperty(O$1, P, Attributes);
	} : $defineProperty : function defineProperty$6(O$1, P, Attributes) {
		anObject$14(O$1);
		P = toPropertyKey$1(P);
		anObject$14(Attributes);
		if (IE8_DOM_DEFINE) try {
			return $defineProperty(O$1, P, Attributes);
		} catch (error) {}
		if ("get" in Attributes || "set" in Attributes) throw new $TypeError$10("Accessors not supported");
		if ("value" in Attributes) O$1[P] = Attributes.value;
		return O$1;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/create-non-enumerable-property.js": ((exports, module) => {
	var DESCRIPTORS$6 = require_descriptors();
	var definePropertyModule$3 = require_object_define_property();
	var createPropertyDescriptor$1 = require_create_property_descriptor();
	module.exports = DESCRIPTORS$6 ? function(object, key, value) {
		return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
	} : function(object, key, value) {
		object[key] = value;
		return object;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/function-name.js
var require_function_name = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/function-name.js": ((exports, module) => {
	var DESCRIPTORS$5 = require_descriptors();
	var hasOwn$8 = require_has_own_property();
	var FunctionPrototype$1 = Function.prototype;
	var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;
	var EXISTS = hasOwn$8(FunctionPrototype$1, "name");
	var PROPER = EXISTS && (function something() {}).name === "something";
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || DESCRIPTORS$5 && getDescriptor(FunctionPrototype$1, "name").configurable);
	module.exports = {
		EXISTS,
		PROPER,
		CONFIGURABLE
	};
}) });

//#endregion
//#region node_modules/core-js/internals/inspect-source.js
var require_inspect_source = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/inspect-source.js": ((exports, module) => {
	var uncurryThis$20 = require_function_uncurry_this();
	var isCallable$15 = require_is_callable();
	var store$1 = require_shared_store();
	var functionToString = uncurryThis$20(Function.toString);
	if (!isCallable$15(store$1.inspectSource)) store$1.inspectSource = function(it) {
		return functionToString(it);
	};
	module.exports = store$1.inspectSource;
}) });

//#endregion
//#region node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/weak-map-basic-detection.js": ((exports, module) => {
	var globalThis$13 = require_global_this();
	var isCallable$14 = require_is_callable();
	var WeakMap$1 = globalThis$13.WeakMap;
	module.exports = isCallable$14(WeakMap$1) && /native code/.test(String(WeakMap$1));
}) });

//#endregion
//#region node_modules/core-js/internals/shared-key.js
var require_shared_key = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/shared-key.js": ((exports, module) => {
	var shared$2 = require_shared();
	var uid = require_uid();
	var keys = shared$2("keys");
	module.exports = function(key) {
		return keys[key] || (keys[key] = uid(key));
	};
}) });

//#endregion
//#region node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/hidden-keys.js": ((exports, module) => {
	module.exports = {};
}) });

//#endregion
//#region node_modules/core-js/internals/internal-state.js
var require_internal_state = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/internal-state.js": ((exports, module) => {
	var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
	var globalThis$12 = require_global_this();
	var isObject$9 = require_is_object();
	var createNonEnumerableProperty$4 = require_create_non_enumerable_property();
	var hasOwn$7 = require_has_own_property();
	var shared$1 = require_shared_store();
	var sharedKey$2 = require_shared_key();
	var hiddenKeys$3 = require_hidden_keys();
	var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
	var TypeError$2 = globalThis$12.TypeError;
	var WeakMap = globalThis$12.WeakMap;
	var set$1, get, has;
	var enforce = function(it) {
		return has(it) ? get(it) : set$1(it, {});
	};
	var getterFor = function(TYPE) {
		return function(it) {
			var state;
			if (!isObject$9(it) || (state = get(it)).type !== TYPE) throw new TypeError$2("Incompatible receiver, " + TYPE + " required");
			return state;
		};
	};
	if (NATIVE_WEAK_MAP || shared$1.state) {
		var store = shared$1.state || (shared$1.state = new WeakMap());
		store.get = store.get;
		store.has = store.has;
		store.set = store.set;
		set$1 = function(it, metadata) {
			if (store.has(it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
			metadata.facade = it;
			store.set(it, metadata);
			return metadata;
		};
		get = function(it) {
			return store.get(it) || {};
		};
		has = function(it) {
			return store.has(it);
		};
	} else {
		var STATE = sharedKey$2("state");
		hiddenKeys$3[STATE] = true;
		set$1 = function(it, metadata) {
			if (hasOwn$7(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
			metadata.facade = it;
			createNonEnumerableProperty$4(it, STATE, metadata);
			return metadata;
		};
		get = function(it) {
			return hasOwn$7(it, STATE) ? it[STATE] : {};
		};
		has = function(it) {
			return hasOwn$7(it, STATE);
		};
	}
	module.exports = {
		set: set$1,
		get,
		has,
		enforce,
		getterFor
	};
}) });

//#endregion
//#region node_modules/core-js/internals/make-built-in.js
var require_make_built_in = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/make-built-in.js": ((exports, module) => {
	var uncurryThis$19 = require_function_uncurry_this();
	var fails$15 = require_fails();
	var isCallable$13 = require_is_callable();
	var hasOwn$6 = require_has_own_property();
	var DESCRIPTORS$4 = require_descriptors();
	var CONFIGURABLE_FUNCTION_NAME$1 = require_function_name().CONFIGURABLE;
	var inspectSource$2 = require_inspect_source();
	var InternalStateModule$2 = require_internal_state();
	var enforceInternalState = InternalStateModule$2.enforce;
	var getInternalState$2 = InternalStateModule$2.get;
	var $String$2 = String;
	var defineProperty$4 = Object.defineProperty;
	var stringSlice$6 = uncurryThis$19("".slice);
	var replace$3 = uncurryThis$19("".replace);
	var join = uncurryThis$19([].join);
	var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$15(function() {
		return defineProperty$4(function() {}, "length", { value: 8 }).length !== 8;
	});
	var TEMPLATE = String(String).split("String");
	var makeBuiltIn$2 = module.exports = function(value, name, options) {
		if (stringSlice$6($String$2(name), 0, 7) === "Symbol(") name = "[" + replace$3($String$2(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
		if (options && options.getter) name = "get " + name;
		if (options && options.setter) name = "set " + name;
		if (!hasOwn$6(value, "name") || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) if (DESCRIPTORS$4) defineProperty$4(value, "name", {
			value: name,
			configurable: true
		});
		else value.name = name;
		if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, "arity") && value.length !== options.arity) defineProperty$4(value, "length", { value: options.arity });
		try {
			if (options && hasOwn$6(options, "constructor") && options.constructor) {
				if (DESCRIPTORS$4) defineProperty$4(value, "prototype", { writable: false });
			} else if (value.prototype) value.prototype = void 0;
		} catch (error) {}
		var state = enforceInternalState(value);
		if (!hasOwn$6(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
		return value;
	};
	Function.prototype.toString = makeBuiltIn$2(function toString$11() {
		return isCallable$13(this) && getInternalState$2(this).source || inspectSource$2(this);
	}, "toString");
}) });

//#endregion
//#region node_modules/core-js/internals/define-built-in.js
var require_define_built_in = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/define-built-in.js": ((exports, module) => {
	var isCallable$12 = require_is_callable();
	var definePropertyModule$2 = require_object_define_property();
	var makeBuiltIn$1 = require_make_built_in();
	var defineGlobalProperty$1 = require_define_global_property();
	module.exports = function(O$1, key, value, options) {
		if (!options) options = {};
		var simple = options.enumerable;
		var name = options.name !== void 0 ? options.name : key;
		if (isCallable$12(value)) makeBuiltIn$1(value, name, options);
		if (options.global) if (simple) O$1[key] = value;
		else defineGlobalProperty$1(key, value);
		else {
			try {
				if (!options.unsafe) delete O$1[key];
				else if (O$1[key]) simple = true;
			} catch (error) {}
			if (simple) O$1[key] = value;
			else definePropertyModule$2.f(O$1, key, {
				value,
				enumerable: false,
				configurable: !options.nonConfigurable,
				writable: !options.nonWritable
			});
		}
		return O$1;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/math-trunc.js
var require_math_trunc = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/math-trunc.js": ((exports, module) => {
	var ceil = Math.ceil;
	var floor$1 = Math.floor;
	module.exports = Math.trunc || function trunc$1(x) {
		var n$1 = +x;
		return (n$1 > 0 ? floor$1 : ceil)(n$1);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/to-integer-or-infinity.js": ((exports, module) => {
	var trunc = require_math_trunc();
	module.exports = function(argument) {
		var number = +argument;
		return number !== number || number === 0 ? 0 : trunc(number);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/to-absolute-index.js": ((exports, module) => {
	var toIntegerOrInfinity$3 = require_to_integer_or_infinity();
	var max$1 = Math.max;
	var min$5 = Math.min;
	module.exports = function(index$1, length) {
		var integer = toIntegerOrInfinity$3(index$1);
		return integer < 0 ? max$1(integer + length, 0) : min$5(integer, length);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/to-length.js
var require_to_length = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/to-length.js": ((exports, module) => {
	var toIntegerOrInfinity$2 = require_to_integer_or_infinity();
	var min$4 = Math.min;
	module.exports = function(argument) {
		var len = toIntegerOrInfinity$2(argument);
		return len > 0 ? min$4(len, 9007199254740991) : 0;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/length-of-array-like.js": ((exports, module) => {
	var toLength$5 = require_to_length();
	module.exports = function(obj) {
		return toLength$5(obj.length);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/array-includes.js
var require_array_includes = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/array-includes.js": ((exports, module) => {
	var toIndexedObject$3 = require_to_indexed_object();
	var toAbsoluteIndex = require_to_absolute_index();
	var lengthOfArrayLike$2 = require_length_of_array_like();
	var createMethod$3 = function(IS_INCLUDES) {
		return function($this, el, fromIndex) {
			var O$1 = toIndexedObject$3($this);
			var length = lengthOfArrayLike$2(O$1);
			if (length === 0) return !IS_INCLUDES && -1;
			var index$1 = toAbsoluteIndex(fromIndex, length);
			var value;
			if (IS_INCLUDES && el !== el) while (length > index$1) {
				value = O$1[index$1++];
				if (value !== value) return true;
			}
			else for (; length > index$1; index$1++) if ((IS_INCLUDES || index$1 in O$1) && O$1[index$1] === el) return IS_INCLUDES || index$1 || 0;
			return !IS_INCLUDES && -1;
		};
	};
	module.exports = {
		includes: createMethod$3(true),
		indexOf: createMethod$3(false)
	};
}) });

//#endregion
//#region node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-keys-internal.js": ((exports, module) => {
	var uncurryThis$18 = require_function_uncurry_this();
	var hasOwn$5 = require_has_own_property();
	var toIndexedObject$2 = require_to_indexed_object();
	var indexOf$1 = require_array_includes().indexOf;
	var hiddenKeys$2 = require_hidden_keys();
	var push$2 = uncurryThis$18([].push);
	module.exports = function(object, names) {
		var O$1 = toIndexedObject$2(object);
		var i$2 = 0;
		var result = [];
		var key;
		for (key in O$1) !hasOwn$5(hiddenKeys$2, key) && hasOwn$5(O$1, key) && push$2(result, key);
		while (names.length > i$2) if (hasOwn$5(O$1, key = names[i$2++])) ~indexOf$1(result, key) || push$2(result, key);
		return result;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/enum-bug-keys.js": ((exports, module) => {
	module.exports = [
		"constructor",
		"hasOwnProperty",
		"isPrototypeOf",
		"propertyIsEnumerable",
		"toLocaleString",
		"toString",
		"valueOf"
	];
}) });

//#endregion
//#region node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-get-own-property-names.js": ((exports) => {
	var internalObjectKeys$1 = require_object_keys_internal();
	var hiddenKeys$1 = require_enum_bug_keys().concat("length", "prototype");
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O$1) {
		return internalObjectKeys$1(O$1, hiddenKeys$1);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-get-own-property-symbols.js": ((exports) => {
	exports.f = Object.getOwnPropertySymbols;
}) });

//#endregion
//#region node_modules/core-js/internals/own-keys.js
var require_own_keys = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/own-keys.js": ((exports, module) => {
	var getBuiltIn$5 = require_get_built_in();
	var uncurryThis$17 = require_function_uncurry_this();
	var getOwnPropertyNamesModule = require_object_get_own_property_names();
	var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
	var anObject$13 = require_an_object();
	var concat$1 = uncurryThis$17([].concat);
	module.exports = getBuiltIn$5("Reflect", "ownKeys") || function ownKeys$4(it) {
		var keys$1 = getOwnPropertyNamesModule.f(anObject$13(it));
		var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
		return getOwnPropertySymbols ? concat$1(keys$1, getOwnPropertySymbols(it)) : keys$1;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/copy-constructor-properties.js": ((exports, module) => {
	var hasOwn$4 = require_has_own_property();
	var ownKeys$3 = require_own_keys();
	var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
	var definePropertyModule$1 = require_object_define_property();
	module.exports = function(target, source, exceptions) {
		var keys$1 = ownKeys$3(source);
		var defineProperty$6 = definePropertyModule$1.f;
		var getOwnPropertyDescriptor$5 = getOwnPropertyDescriptorModule.f;
		for (var i$2 = 0; i$2 < keys$1.length; i$2++) {
			var key = keys$1[i$2];
			if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) defineProperty$6(target, key, getOwnPropertyDescriptor$5(source, key));
		}
	};
}) });

//#endregion
//#region node_modules/core-js/internals/is-forced.js
var require_is_forced = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-forced.js": ((exports, module) => {
	var fails$14 = require_fails();
	var isCallable$11 = require_is_callable();
	var replacement = /#|\.prototype\./;
	var isForced$2 = function(feature, detection) {
		var value = data[normalize(feature)];
		return value === POLYFILL ? true : value === NATIVE ? false : isCallable$11(detection) ? fails$14(detection) : !!detection;
	};
	var normalize = isForced$2.normalize = function(string) {
		return String(string).replace(replacement, ".").toLowerCase();
	};
	var data = isForced$2.data = {};
	var NATIVE = isForced$2.NATIVE = "N";
	var POLYFILL = isForced$2.POLYFILL = "P";
	module.exports = isForced$2;
}) });

//#endregion
//#region node_modules/core-js/internals/export.js
var require_export = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/export.js": ((exports, module) => {
	var globalThis$11 = require_global_this();
	var getOwnPropertyDescriptor$3 = require_object_get_own_property_descriptor().f;
	var createNonEnumerableProperty$3 = require_create_non_enumerable_property();
	var defineBuiltIn$6 = require_define_built_in();
	var defineGlobalProperty = require_define_global_property();
	var copyConstructorProperties = require_copy_constructor_properties();
	var isForced$1 = require_is_forced();
	module.exports = function(options, source) {
		var TARGET = options.target;
		var GLOBAL = options.global;
		var STATIC = options.stat;
		var FORCED$2, target, key, targetProperty, sourceProperty, descriptor;
		if (GLOBAL) target = globalThis$11;
		else if (STATIC) target = globalThis$11[TARGET] || defineGlobalProperty(TARGET, {});
		else target = globalThis$11[TARGET] && globalThis$11[TARGET].prototype;
		if (target) for (key in source) {
			sourceProperty = source[key];
			if (options.dontCallGetSet) {
				descriptor = getOwnPropertyDescriptor$3(target, key);
				targetProperty = descriptor && descriptor.value;
			} else targetProperty = target[key];
			FORCED$2 = isForced$1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
			if (!FORCED$2 && targetProperty !== void 0) {
				if (typeof sourceProperty == typeof targetProperty) continue;
				copyConstructorProperties(sourceProperty, targetProperty);
			}
			if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty$3(sourceProperty, "sham", true);
			defineBuiltIn$6(target, key, sourceProperty, options);
		}
	};
}) });

//#endregion
//#region node_modules/core-js/internals/environment.js
var require_environment = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/environment.js": ((exports, module) => {
	var globalThis$10 = require_global_this();
	var userAgent$3 = require_environment_user_agent();
	var classof$6 = require_classof_raw();
	var userAgentStartsWith = function(string) {
		return userAgent$3.slice(0, string.length) === string;
	};
	module.exports = (function() {
		if (userAgentStartsWith("Bun/")) return "BUN";
		if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
		if (userAgentStartsWith("Deno/")) return "DENO";
		if (userAgentStartsWith("Node.js/")) return "NODE";
		if (globalThis$10.Bun && typeof Bun.version == "string") return "BUN";
		if (globalThis$10.Deno && typeof Deno.version == "object") return "DENO";
		if (classof$6(globalThis$10.process) === "process") return "NODE";
		if (globalThis$10.window && globalThis$10.document) return "BROWSER";
		return "REST";
	})();
}) });

//#endregion
//#region node_modules/core-js/internals/environment-is-node.js
var require_environment_is_node = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/environment-is-node.js": ((exports, module) => {
	var ENVIRONMENT$1 = require_environment();
	module.exports = ENVIRONMENT$1 === "NODE";
}) });

//#endregion
//#region node_modules/core-js/internals/path.js
var require_path = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/path.js": ((exports, module) => {
	var globalThis$9 = require_global_this();
	module.exports = globalThis$9;
}) });

//#endregion
//#region node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/function-uncurry-this-accessor.js": ((exports, module) => {
	var uncurryThis$16 = require_function_uncurry_this();
	var aCallable$7 = require_a_callable();
	module.exports = function(object, key, method$1) {
		try {
			return uncurryThis$16(aCallable$7(Object.getOwnPropertyDescriptor(object, key)[method$1]));
		} catch (error) {}
	};
}) });

//#endregion
//#region node_modules/core-js/internals/is-possible-prototype.js
var require_is_possible_prototype = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-possible-prototype.js": ((exports, module) => {
	var isObject$8 = require_is_object();
	module.exports = function(argument) {
		return isObject$8(argument) || argument === null;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/a-possible-prototype.js": ((exports, module) => {
	var isPossiblePrototype = require_is_possible_prototype();
	var $String$1 = String;
	var $TypeError$9 = TypeError;
	module.exports = function(argument) {
		if (isPossiblePrototype(argument)) return argument;
		throw new $TypeError$9("Can't set " + $String$1(argument) + " as a prototype");
	};
}) });

//#endregion
//#region node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-set-prototype-of.js": ((exports, module) => {
	var uncurryThisAccessor = require_function_uncurry_this_accessor();
	var isObject$7 = require_is_object();
	var requireObjectCoercible$8 = require_require_object_coercible();
	var aPossiblePrototype = require_a_possible_prototype();
	module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
		var CORRECT_SETTER = false;
		var test$2 = {};
		var setter;
		try {
			setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
			setter(test$2, []);
			CORRECT_SETTER = test$2 instanceof Array;
		} catch (error) {}
		return function setPrototypeOf$2(O$1, proto) {
			requireObjectCoercible$8(O$1);
			aPossiblePrototype(proto);
			if (!isObject$7(O$1)) return O$1;
			if (CORRECT_SETTER) setter(O$1, proto);
			else O$1.__proto__ = proto;
			return O$1;
		};
	}() : void 0);
}) });

//#endregion
//#region node_modules/core-js/internals/set-to-string-tag.js
var require_set_to_string_tag = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/set-to-string-tag.js": ((exports, module) => {
	var defineProperty$3 = require_object_define_property().f;
	var hasOwn$3 = require_has_own_property();
	var TO_STRING_TAG$2 = require_well_known_symbol()("toStringTag");
	module.exports = function(target, TAG, STATIC) {
		if (target && !STATIC) target = target.prototype;
		if (target && !hasOwn$3(target, TO_STRING_TAG$2)) defineProperty$3(target, TO_STRING_TAG$2, {
			configurable: true,
			value: TAG
		});
	};
}) });

//#endregion
//#region node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/define-built-in-accessor.js": ((exports, module) => {
	var makeBuiltIn = require_make_built_in();
	var defineProperty$2 = require_object_define_property();
	module.exports = function(target, name, descriptor) {
		if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
		if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
		return defineProperty$2.f(target, name, descriptor);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/set-species.js
var require_set_species = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/set-species.js": ((exports, module) => {
	var getBuiltIn$4 = require_get_built_in();
	var defineBuiltInAccessor = require_define_built_in_accessor();
	var wellKnownSymbol$6 = require_well_known_symbol();
	var DESCRIPTORS$3 = require_descriptors();
	var SPECIES$3 = wellKnownSymbol$6("species");
	module.exports = function(CONSTRUCTOR_NAME) {
		var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);
		if (DESCRIPTORS$3 && Constructor && !Constructor[SPECIES$3]) defineBuiltInAccessor(Constructor, SPECIES$3, {
			configurable: true,
			get: function() {
				return this;
			}
		});
	};
}) });

//#endregion
//#region node_modules/core-js/internals/an-instance.js
var require_an_instance = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/an-instance.js": ((exports, module) => {
	var isPrototypeOf$2 = require_object_is_prototype_of();
	var $TypeError$8 = TypeError;
	module.exports = function(it, Prototype) {
		if (isPrototypeOf$2(Prototype, it)) return it;
		throw new $TypeError$8("Incorrect invocation");
	};
}) });

//#endregion
//#region node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/to-string-tag-support.js": ((exports, module) => {
	var TO_STRING_TAG$1 = require_well_known_symbol()("toStringTag");
	var test$1 = {};
	test$1[TO_STRING_TAG$1] = "z";
	module.exports = String(test$1) === "[object z]";
}) });

//#endregion
//#region node_modules/core-js/internals/classof.js
var require_classof = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/classof.js": ((exports, module) => {
	var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
	var isCallable$10 = require_is_callable();
	var classofRaw$1 = require_classof_raw();
	var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
	var $Object$1 = Object;
	var CORRECT_ARGUMENTS = classofRaw$1(function() {
		return arguments;
	}()) === "Arguments";
	var tryGet = function(it, key) {
		try {
			return it[key];
		} catch (error) {}
	};
	module.exports = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function(it) {
		var O$1, tag, result;
		return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O$1 = $Object$1(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw$1(O$1) : (result = classofRaw$1(O$1)) === "Object" && isCallable$10(O$1.callee) ? "Arguments" : result;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/is-constructor.js
var require_is_constructor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-constructor.js": ((exports, module) => {
	var uncurryThis$15 = require_function_uncurry_this();
	var fails$13 = require_fails();
	var isCallable$9 = require_is_callable();
	var classof$5 = require_classof();
	var getBuiltIn$3 = require_get_built_in();
	var inspectSource$1 = require_inspect_source();
	var noop$1 = function() {};
	var construct = getBuiltIn$3("Reflect", "construct");
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$1 = uncurryThis$15(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop$1);
	var isConstructorModern = function isConstructor$1(argument) {
		if (!isCallable$9(argument)) return false;
		try {
			construct(noop$1, [], argument);
			return true;
		} catch (error) {
			return false;
		}
	};
	var isConstructorLegacy = function isConstructor$1(argument) {
		if (!isCallable$9(argument)) return false;
		switch (classof$5(argument)) {
			case "AsyncFunction":
			case "GeneratorFunction":
			case "AsyncGeneratorFunction": return false;
		}
		try {
			return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
		} catch (error) {
			return true;
		}
	};
	isConstructorLegacy.sham = true;
	module.exports = !construct || fails$13(function() {
		var called$1;
		return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
			called$1 = true;
		}) || called$1;
	}) ? isConstructorLegacy : isConstructorModern;
}) });

//#endregion
//#region node_modules/core-js/internals/a-constructor.js
var require_a_constructor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/a-constructor.js": ((exports, module) => {
	var isConstructor = require_is_constructor();
	var tryToString$2 = require_try_to_string();
	var $TypeError$7 = TypeError;
	module.exports = function(argument) {
		if (isConstructor(argument)) return argument;
		throw new $TypeError$7(tryToString$2(argument) + " is not a constructor");
	};
}) });

//#endregion
//#region node_modules/core-js/internals/species-constructor.js
var require_species_constructor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/species-constructor.js": ((exports, module) => {
	var anObject$12 = require_an_object();
	var aConstructor = require_a_constructor();
	var isNullOrUndefined$1 = require_is_null_or_undefined();
	var SPECIES$2 = require_well_known_symbol()("species");
	module.exports = function(O$1, defaultConstructor) {
		var C = anObject$12(O$1).constructor;
		var S;
		return C === void 0 || isNullOrUndefined$1(S = anObject$12(C)[SPECIES$2]) ? defaultConstructor : aConstructor(S);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/function-apply.js
var require_function_apply = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/function-apply.js": ((exports, module) => {
	var NATIVE_BIND$1 = require_function_bind_native();
	var FunctionPrototype = Function.prototype;
	var apply$2 = FunctionPrototype.apply;
	var call$14 = FunctionPrototype.call;
	module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND$1 ? call$14.bind(apply$2) : function() {
		return call$14.apply(apply$2, arguments);
	});
}) });

//#endregion
//#region node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/function-uncurry-this-clause.js": ((exports, module) => {
	var classofRaw = require_classof_raw();
	var uncurryThis$14 = require_function_uncurry_this();
	module.exports = function(fn) {
		if (classofRaw(fn) === "Function") return uncurryThis$14(fn);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/function-bind-context.js": ((exports, module) => {
	var uncurryThis$13 = require_function_uncurry_this_clause();
	var aCallable$6 = require_a_callable();
	var NATIVE_BIND = require_function_bind_native();
	var bind$4 = uncurryThis$13(uncurryThis$13.bind);
	module.exports = function(fn, that) {
		aCallable$6(fn);
		return that === void 0 ? fn : NATIVE_BIND ? bind$4(fn, that) : function() {
			return fn.apply(that, arguments);
		};
	};
}) });

//#endregion
//#region node_modules/core-js/internals/html.js
var require_html = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/html.js": ((exports, module) => {
	var getBuiltIn$2 = require_get_built_in();
	module.exports = getBuiltIn$2("document", "documentElement");
}) });

//#endregion
//#region node_modules/core-js/internals/array-slice.js
var require_array_slice = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/array-slice.js": ((exports, module) => {
	var uncurryThis$12 = require_function_uncurry_this();
	module.exports = uncurryThis$12([].slice);
}) });

//#endregion
//#region node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/validate-arguments-length.js": ((exports, module) => {
	var $TypeError$6 = TypeError;
	module.exports = function(passed, required) {
		if (passed < required) throw new $TypeError$6("Not enough arguments");
		return passed;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/environment-is-ios.js
var require_environment_is_ios = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/environment-is-ios.js": ((exports, module) => {
	var userAgent$2 = require_environment_user_agent();
	module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);
}) });

//#endregion
//#region node_modules/core-js/internals/task.js
var require_task = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/task.js": ((exports, module) => {
	var globalThis$8 = require_global_this();
	var apply$1 = require_function_apply();
	var bind$3 = require_function_bind_context();
	var isCallable$8 = require_is_callable();
	var hasOwn$2 = require_has_own_property();
	var fails$12 = require_fails();
	var html$1 = require_html();
	var arraySlice = require_array_slice();
	var createElement = require_document_create_element();
	var validateArgumentsLength = require_validate_arguments_length();
	var IS_IOS$1 = require_environment_is_ios();
	var IS_NODE$2 = require_environment_is_node();
	var set = globalThis$8.setImmediate;
	var clear = globalThis$8.clearImmediate;
	var process$3 = globalThis$8.process;
	var Dispatch = globalThis$8.Dispatch;
	var Function$1 = globalThis$8.Function;
	var MessageChannel = globalThis$8.MessageChannel;
	var String$1 = globalThis$8.String;
	var counter = 0;
	var queue$2 = {};
	var ONREADYSTATECHANGE = "onreadystatechange";
	var $location, defer, channel, port;
	fails$12(function() {
		$location = globalThis$8.location;
	});
	var run = function(id$2) {
		if (hasOwn$2(queue$2, id$2)) {
			var fn = queue$2[id$2];
			delete queue$2[id$2];
			fn();
		}
	};
	var runner = function(id$2) {
		return function() {
			run(id$2);
		};
	};
	var eventListener = function(event) {
		run(event.data);
	};
	var globalPostMessageDefer = function(id$2) {
		globalThis$8.postMessage(String$1(id$2), $location.protocol + "//" + $location.host);
	};
	if (!set || !clear) {
		set = function setImmediate(handler) {
			validateArgumentsLength(arguments.length, 1);
			var fn = isCallable$8(handler) ? handler : Function$1(handler);
			var args = arraySlice(arguments, 1);
			queue$2[++counter] = function() {
				apply$1(fn, void 0, args);
			};
			defer(counter);
			return counter;
		};
		clear = function clearImmediate(id$2) {
			delete queue$2[id$2];
		};
		if (IS_NODE$2) defer = function(id$2) {
			process$3.nextTick(runner(id$2));
		};
		else if (Dispatch && Dispatch.now) defer = function(id$2) {
			Dispatch.now(runner(id$2));
		};
		else if (MessageChannel && !IS_IOS$1) {
			channel = new MessageChannel();
			port = channel.port2;
			channel.port1.onmessage = eventListener;
			defer = bind$3(port.postMessage, port);
		} else if (globalThis$8.addEventListener && isCallable$8(globalThis$8.postMessage) && !globalThis$8.importScripts && $location && $location.protocol !== "file:" && !fails$12(globalPostMessageDefer)) {
			defer = globalPostMessageDefer;
			globalThis$8.addEventListener("message", eventListener, false);
		} else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id$2) {
			html$1.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
				html$1.removeChild(this);
				run(id$2);
			};
		};
		else defer = function(id$2) {
			setTimeout(runner(id$2), 0);
		};
	}
	module.exports = {
		set,
		clear
	};
}) });

//#endregion
//#region node_modules/core-js/internals/safe-get-built-in.js
var require_safe_get_built_in = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/safe-get-built-in.js": ((exports, module) => {
	var globalThis$7 = require_global_this();
	var DESCRIPTORS$2 = require_descriptors();
	var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
	module.exports = function(name) {
		if (!DESCRIPTORS$2) return globalThis$7[name];
		var descriptor = getOwnPropertyDescriptor$2(globalThis$7, name);
		return descriptor && descriptor.value;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/queue.js
var require_queue = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/queue.js": ((exports, module) => {
	var Queue$2 = function() {
		this.head = null;
		this.tail = null;
	};
	Queue$2.prototype = {
		add: function(item) {
			var entry = {
				item,
				next: null
			};
			var tail = this.tail;
			if (tail) tail.next = entry;
			else this.head = entry;
			this.tail = entry;
		},
		get: function() {
			var entry = this.head;
			if (entry) {
				if ((this.head = entry.next) === null) this.tail = null;
				return entry.item;
			}
		}
	};
	module.exports = Queue$2;
}) });

//#endregion
//#region node_modules/core-js/internals/environment-is-ios-pebble.js
var require_environment_is_ios_pebble = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/environment-is-ios-pebble.js": ((exports, module) => {
	var userAgent$1 = require_environment_user_agent();
	module.exports = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != "undefined";
}) });

//#endregion
//#region node_modules/core-js/internals/environment-is-webos-webkit.js
var require_environment_is_webos_webkit = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/environment-is-webos-webkit.js": ((exports, module) => {
	var userAgent = require_environment_user_agent();
	module.exports = /web0s(?!.*chrome)/i.test(userAgent);
}) });

//#endregion
//#region node_modules/core-js/internals/microtask.js
var require_microtask = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/microtask.js": ((exports, module) => {
	var globalThis$6 = require_global_this();
	var safeGetBuiltIn = require_safe_get_built_in();
	var bind$2 = require_function_bind_context();
	var macrotask = require_task().set;
	var Queue$1 = require_queue();
	var IS_IOS = require_environment_is_ios();
	var IS_IOS_PEBBLE = require_environment_is_ios_pebble();
	var IS_WEBOS_WEBKIT = require_environment_is_webos_webkit();
	var IS_NODE$1 = require_environment_is_node();
	var MutationObserver = globalThis$6.MutationObserver || globalThis$6.WebKitMutationObserver;
	var document$2 = globalThis$6.document;
	var process$2 = globalThis$6.process;
	var Promise$1 = globalThis$6.Promise;
	var microtask$1 = safeGetBuiltIn("queueMicrotask");
	var notify$1, toggle, node$1, promise, then;
	if (!microtask$1) {
		var queue$1 = new Queue$1();
		var flush = function() {
			var parent, fn;
			if (IS_NODE$1 && (parent = process$2.domain)) parent.exit();
			while (fn = queue$1.get()) try {
				fn();
			} catch (error) {
				if (queue$1.head) notify$1();
				throw error;
			}
			if (parent) parent.enter();
		};
		if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
			toggle = true;
			node$1 = document$2.createTextNode("");
			new MutationObserver(flush).observe(node$1, { characterData: true });
			notify$1 = function() {
				node$1.data = toggle = !toggle;
			};
		} else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
			promise = Promise$1.resolve(void 0);
			promise.constructor = Promise$1;
			then = bind$2(promise.then, promise);
			notify$1 = function() {
				then(flush);
			};
		} else if (IS_NODE$1) notify$1 = function() {
			process$2.nextTick(flush);
		};
		else {
			macrotask = bind$2(macrotask, globalThis$6);
			notify$1 = function() {
				macrotask(flush);
			};
		}
		microtask$1 = function(fn) {
			if (!queue$1.head) notify$1();
			queue$1.add(fn);
		};
	}
	module.exports = microtask$1;
}) });

//#endregion
//#region node_modules/core-js/internals/host-report-errors.js
var require_host_report_errors = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/host-report-errors.js": ((exports, module) => {
	module.exports = function(a$1, b) {
		try {
			arguments.length === 1 ? console.error(a$1) : console.error(a$1, b);
		} catch (error) {}
	};
}) });

//#endregion
//#region node_modules/core-js/internals/perform.js
var require_perform = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/perform.js": ((exports, module) => {
	module.exports = function(exec$2) {
		try {
			return {
				error: false,
				value: exec$2()
			};
		} catch (error) {
			return {
				error: true,
				value: error
			};
		}
	};
}) });

//#endregion
//#region node_modules/core-js/internals/promise-native-constructor.js
var require_promise_native_constructor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/promise-native-constructor.js": ((exports, module) => {
	var globalThis$5 = require_global_this();
	module.exports = globalThis$5.Promise;
}) });

//#endregion
//#region node_modules/core-js/internals/promise-constructor-detection.js
var require_promise_constructor_detection = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/promise-constructor-detection.js": ((exports, module) => {
	var globalThis$4 = require_global_this();
	var NativePromiseConstructor$4 = require_promise_native_constructor();
	var isCallable$7 = require_is_callable();
	var isForced = require_is_forced();
	var inspectSource = require_inspect_source();
	var wellKnownSymbol$5 = require_well_known_symbol();
	var ENVIRONMENT = require_environment();
	var IS_PURE$8 = require_is_pure();
	var V8_VERSION = require_environment_v8_version();
	var NativePromisePrototype$2 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
	var SPECIES$1 = wellKnownSymbol$5("species");
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$7(globalThis$4.PromiseRejectionEvent);
	var FORCED_PROMISE_CONSTRUCTOR$5 = isForced("Promise", function() {
		var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$4);
		var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$4);
		if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
		if (IS_PURE$8 && !(NativePromisePrototype$2["catch"] && NativePromisePrototype$2["finally"])) return true;
		if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
			var promise$1 = new NativePromiseConstructor$4(function(resolve) {
				resolve(1);
			});
			var FakePromise = function(exec$2) {
				exec$2(function() {}, function() {});
			};
			var constructor = promise$1.constructor = {};
			constructor[SPECIES$1] = FakePromise;
			SUBCLASSING = promise$1.then(function() {}) instanceof FakePromise;
			if (!SUBCLASSING) return true;
		}
		return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === "BROWSER" || ENVIRONMENT === "DENO") && !NATIVE_PROMISE_REJECTION_EVENT$1;
	});
	module.exports = {
		CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
		REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
		SUBCLASSING
	};
}) });

//#endregion
//#region node_modules/core-js/internals/new-promise-capability.js
var require_new_promise_capability = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/new-promise-capability.js": ((exports, module) => {
	var aCallable$5 = require_a_callable();
	var $TypeError$5 = TypeError;
	var PromiseCapability = function(C) {
		var resolve, reject;
		this.promise = new C(function($$resolve, $$reject) {
			if (resolve !== void 0 || reject !== void 0) throw new $TypeError$5("Bad Promise constructor");
			resolve = $$resolve;
			reject = $$reject;
		});
		this.resolve = aCallable$5(resolve);
		this.reject = aCallable$5(reject);
	};
	module.exports.f = function(C) {
		return new PromiseCapability(C);
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.promise.constructor.js
var require_es_promise_constructor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/modules/es.promise.constructor.js": (() => {
	var $$14 = require_export();
	var IS_PURE$7 = require_is_pure();
	var IS_NODE = require_environment_is_node();
	var globalThis$3 = require_global_this();
	var path = require_path();
	var call$13 = require_function_call();
	var defineBuiltIn$5 = require_define_built_in();
	var setPrototypeOf$1 = require_object_set_prototype_of();
	var setToStringTag$3 = require_set_to_string_tag();
	var setSpecies = require_set_species();
	var aCallable$4 = require_a_callable();
	var isCallable$6 = require_is_callable();
	var isObject$6 = require_is_object();
	var anInstance = require_an_instance();
	var speciesConstructor$1 = require_species_constructor();
	var task = require_task().set;
	var microtask = require_microtask();
	var hostReportErrors = require_host_report_errors();
	var perform$2 = require_perform();
	var Queue = require_queue();
	var InternalStateModule$1 = require_internal_state();
	var NativePromiseConstructor$3 = require_promise_native_constructor();
	var PromiseConstructorDetection = require_promise_constructor_detection();
	var newPromiseCapabilityModule$3 = require_new_promise_capability();
	var PROMISE = "Promise";
	var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
	var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
	var getInternalPromiseState = InternalStateModule$1.getterFor(PROMISE);
	var setInternalState$1 = InternalStateModule$1.set;
	var NativePromisePrototype$1 = NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
	var PromiseConstructor = NativePromiseConstructor$3;
	var PromisePrototype = NativePromisePrototype$1;
	var TypeError$1 = globalThis$3.TypeError;
	var document$1 = globalThis$3.document;
	var process$1 = globalThis$3.process;
	var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
	var newGenericPromiseCapability = newPromiseCapability$1;
	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && globalThis$3.dispatchEvent);
	var UNHANDLED_REJECTION = "unhandledrejection";
	var REJECTION_HANDLED = "rejectionhandled";
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
	var isThenable = function(it) {
		var then$1;
		return isObject$6(it) && isCallable$6(then$1 = it.then) ? then$1 : false;
	};
	var callReaction = function(reaction, state) {
		var value = state.value;
		var ok = state.state === FULFILLED;
		var handler = ok ? reaction.ok : reaction.fail;
		var resolve = reaction.resolve;
		var reject = reaction.reject;
		var domain = reaction.domain;
		var result, then$1, exited;
		try {
			if (handler) {
				if (!ok) {
					if (state.rejection === UNHANDLED) onHandleUnhandled(state);
					state.rejection = HANDLED;
				}
				if (handler === true) result = value;
				else {
					if (domain) domain.enter();
					result = handler(value);
					if (domain) {
						domain.exit();
						exited = true;
					}
				}
				if (result === reaction.promise) reject(new TypeError$1("Promise-chain cycle"));
				else if (then$1 = isThenable(result)) call$13(then$1, result, resolve, reject);
				else resolve(result);
			} else reject(value);
		} catch (error) {
			if (domain && !exited) domain.exit();
			reject(error);
		}
	};
	var notify = function(state, isReject) {
		if (state.notified) return;
		state.notified = true;
		microtask(function() {
			var reactions = state.reactions;
			var reaction;
			while (reaction = reactions.get()) callReaction(reaction, state);
			state.notified = false;
			if (isReject && !state.rejection) onUnhandled(state);
		});
	};
	var dispatchEvent = function(name, promise$1, reason) {
		var event, handler;
		if (DISPATCH_EVENT) {
			event = document$1.createEvent("Event");
			event.promise = promise$1;
			event.reason = reason;
			event.initEvent(name, false, true);
			globalThis$3.dispatchEvent(event);
		} else event = {
			promise: promise$1,
			reason
		};
		if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis$3["on" + name])) handler(event);
		else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
	};
	var onUnhandled = function(state) {
		call$13(task, globalThis$3, function() {
			var promise$1 = state.facade;
			var value = state.value;
			var IS_UNHANDLED = isUnhandled(state);
			var result;
			if (IS_UNHANDLED) {
				result = perform$2(function() {
					if (IS_NODE) process$1.emit("unhandledRejection", value, promise$1);
					else dispatchEvent(UNHANDLED_REJECTION, promise$1, value);
				});
				state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
				if (result.error) throw result.value;
			}
		});
	};
	var isUnhandled = function(state) {
		return state.rejection !== HANDLED && !state.parent;
	};
	var onHandleUnhandled = function(state) {
		call$13(task, globalThis$3, function() {
			var promise$1 = state.facade;
			if (IS_NODE) process$1.emit("rejectionHandled", promise$1);
			else dispatchEvent(REJECTION_HANDLED, promise$1, state.value);
		});
	};
	var bind$1 = function(fn, state, unwrap) {
		return function(value) {
			fn(state, value, unwrap);
		};
	};
	var internalReject = function(state, value, unwrap) {
		if (state.done) return;
		state.done = true;
		if (unwrap) state = unwrap;
		state.value = value;
		state.state = REJECTED;
		notify(state, true);
	};
	var internalResolve = function(state, value, unwrap) {
		if (state.done) return;
		state.done = true;
		if (unwrap) state = unwrap;
		try {
			if (state.facade === value) throw new TypeError$1("Promise can't be resolved itself");
			var then$1 = isThenable(value);
			if (then$1) microtask(function() {
				var wrapper = { done: false };
				try {
					call$13(then$1, value, bind$1(internalResolve, wrapper, state), bind$1(internalReject, wrapper, state));
				} catch (error) {
					internalReject(wrapper, error, state);
				}
			});
			else {
				state.value = value;
				state.state = FULFILLED;
				notify(state, false);
			}
		} catch (error) {
			internalReject({ done: false }, error, state);
		}
	};
	if (FORCED_PROMISE_CONSTRUCTOR$4) {
		PromiseConstructor = function Promise$2(executor) {
			anInstance(this, PromisePrototype);
			aCallable$4(executor);
			call$13(Internal, this);
			var state = getInternalPromiseState(this);
			try {
				executor(bind$1(internalResolve, state), bind$1(internalReject, state));
			} catch (error) {
				internalReject(state, error);
			}
		};
		PromisePrototype = PromiseConstructor.prototype;
		Internal = function Promise$2(executor) {
			setInternalState$1(this, {
				type: PROMISE,
				done: false,
				notified: false,
				parent: false,
				reactions: new Queue(),
				rejection: false,
				state: PENDING,
				value: null
			});
		};
		Internal.prototype = defineBuiltIn$5(PromisePrototype, "then", function then$1(onFulfilled, onRejected) {
			var state = getInternalPromiseState(this);
			var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
			state.parent = true;
			reaction.ok = isCallable$6(onFulfilled) ? onFulfilled : true;
			reaction.fail = isCallable$6(onRejected) && onRejected;
			reaction.domain = IS_NODE ? process$1.domain : void 0;
			if (state.state === PENDING) state.reactions.add(reaction);
			else microtask(function() {
				callReaction(reaction, state);
			});
			return reaction.promise;
		});
		OwnPromiseCapability = function() {
			var promise$1 = new Internal();
			var state = getInternalPromiseState(promise$1);
			this.promise = promise$1;
			this.resolve = bind$1(internalResolve, state);
			this.reject = bind$1(internalReject, state);
		};
		newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function(C) {
			return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
		};
		if (!IS_PURE$7 && isCallable$6(NativePromiseConstructor$3) && NativePromisePrototype$1 !== Object.prototype) {
			nativeThen = NativePromisePrototype$1.then;
			if (!NATIVE_PROMISE_SUBCLASSING) defineBuiltIn$5(NativePromisePrototype$1, "then", function then$1(onFulfilled, onRejected) {
				var that = this;
				return new PromiseConstructor(function(resolve, reject) {
					call$13(nativeThen, that, resolve, reject);
				}).then(onFulfilled, onRejected);
			}, { unsafe: true });
			try {
				delete NativePromisePrototype$1.constructor;
			} catch (error) {}
			if (setPrototypeOf$1) setPrototypeOf$1(NativePromisePrototype$1, PromisePrototype);
		}
	}
	$$14({
		global: true,
		constructor: true,
		wrap: true,
		forced: FORCED_PROMISE_CONSTRUCTOR$4
	}, { Promise: PromiseConstructor });
	PromiseWrapper = path.Promise;
	setToStringTag$3(PromiseConstructor, PROMISE, false, true);
	setSpecies(PROMISE);
}) });

//#endregion
//#region node_modules/core-js/internals/iterators.js
var require_iterators = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/iterators.js": ((exports, module) => {
	module.exports = {};
}) });

//#endregion
//#region node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-array-iterator-method.js": ((exports, module) => {
	var wellKnownSymbol$4 = require_well_known_symbol();
	var Iterators$4 = require_iterators();
	var ITERATOR$5 = wellKnownSymbol$4("iterator");
	var ArrayPrototype$1 = Array.prototype;
	module.exports = function(it) {
		return it !== void 0 && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$5] === it);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/get-iterator-method.js": ((exports, module) => {
	var classof$4 = require_classof();
	var getMethod$4 = require_get_method();
	var isNullOrUndefined = require_is_null_or_undefined();
	var Iterators$3 = require_iterators();
	var ITERATOR$4 = require_well_known_symbol()("iterator");
	module.exports = function(it) {
		if (!isNullOrUndefined(it)) return getMethod$4(it, ITERATOR$4) || getMethod$4(it, "@@iterator") || Iterators$3[classof$4(it)];
	};
}) });

//#endregion
//#region node_modules/core-js/internals/get-iterator.js
var require_get_iterator = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/get-iterator.js": ((exports, module) => {
	var call$12 = require_function_call();
	var aCallable$3 = require_a_callable();
	var anObject$11 = require_an_object();
	var tryToString$1 = require_try_to_string();
	var getIteratorMethod$1 = require_get_iterator_method();
	var $TypeError$4 = TypeError;
	module.exports = function(argument, usingIterator) {
		var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
		if (aCallable$3(iteratorMethod)) return anObject$11(call$12(iteratorMethod, argument));
		throw new $TypeError$4(tryToString$1(argument) + " is not iterable");
	};
}) });

//#endregion
//#region node_modules/core-js/internals/iterator-close.js
var require_iterator_close = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/iterator-close.js": ((exports, module) => {
	var call$11 = require_function_call();
	var anObject$10 = require_an_object();
	var getMethod$3 = require_get_method();
	module.exports = function(iterator, kind, value) {
		var innerResult, innerError;
		anObject$10(iterator);
		try {
			innerResult = getMethod$3(iterator, "return");
			if (!innerResult) {
				if (kind === "throw") throw value;
				return value;
			}
			innerResult = call$11(innerResult, iterator);
		} catch (error) {
			innerError = true;
			innerResult = error;
		}
		if (kind === "throw") throw value;
		if (innerError) throw innerResult;
		anObject$10(innerResult);
		return value;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/iterate.js
var require_iterate = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/iterate.js": ((exports, module) => {
	var bind = require_function_bind_context();
	var call$10 = require_function_call();
	var anObject$9 = require_an_object();
	var tryToString = require_try_to_string();
	var isArrayIteratorMethod = require_is_array_iterator_method();
	var lengthOfArrayLike$1 = require_length_of_array_like();
	var isPrototypeOf$1 = require_object_is_prototype_of();
	var getIterator = require_get_iterator();
	var getIteratorMethod = require_get_iterator_method();
	var iteratorClose = require_iterator_close();
	var $TypeError$3 = TypeError;
	var Result = function(stopped, result) {
		this.stopped = stopped;
		this.result = result;
	};
	var ResultPrototype = Result.prototype;
	module.exports = function(iterable, unboundFunction, options) {
		var that = options && options.that;
		var AS_ENTRIES = !!(options && options.AS_ENTRIES);
		var IS_RECORD = !!(options && options.IS_RECORD);
		var IS_ITERATOR = !!(options && options.IS_ITERATOR);
		var INTERRUPTED = !!(options && options.INTERRUPTED);
		var fn = bind(unboundFunction, that);
		var iterator, iterFn, index$1, length, result, next, step;
		var stop = function(condition) {
			if (iterator) iteratorClose(iterator, "normal");
			return new Result(true, condition);
		};
		var callFn = function(value) {
			if (AS_ENTRIES) {
				anObject$9(value);
				return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
			}
			return INTERRUPTED ? fn(value, stop) : fn(value);
		};
		if (IS_RECORD) iterator = iterable.iterator;
		else if (IS_ITERATOR) iterator = iterable;
		else {
			iterFn = getIteratorMethod(iterable);
			if (!iterFn) throw new $TypeError$3(tryToString(iterable) + " is not iterable");
			if (isArrayIteratorMethod(iterFn)) {
				for (index$1 = 0, length = lengthOfArrayLike$1(iterable); length > index$1; index$1++) {
					result = callFn(iterable[index$1]);
					if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
				}
				return new Result(false);
			}
			iterator = getIterator(iterable, iterFn);
		}
		next = IS_RECORD ? iterable.next : iterator.next;
		while (!(step = call$10(next, iterator)).done) {
			try {
				result = callFn(step.value);
			} catch (error) {
				iteratorClose(iterator, "throw", error);
			}
			if (typeof result == "object" && result && isPrototypeOf$1(ResultPrototype, result)) return result;
		}
		return new Result(false);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/check-correctness-of-iteration.js
var require_check_correctness_of_iteration = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/check-correctness-of-iteration.js": ((exports, module) => {
	var ITERATOR$3 = require_well_known_symbol()("iterator");
	var SAFE_CLOSING = false;
	try {
		var called = 0;
		var iteratorWithReturn = {
			next: function() {
				return { done: !!called++ };
			},
			"return": function() {
				SAFE_CLOSING = true;
			}
		};
		iteratorWithReturn[ITERATOR$3] = function() {
			return this;
		};
		Array.from(iteratorWithReturn, function() {
			throw 2;
		});
	} catch (error) {}
	module.exports = function(exec$2, SKIP_CLOSING) {
		try {
			if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
		} catch (error) {
			return false;
		}
		var ITERATION_SUPPORT = false;
		try {
			var object = {};
			object[ITERATOR$3] = function() {
				return { next: function() {
					return { done: ITERATION_SUPPORT = true };
				} };
			};
			exec$2(object);
		} catch (error) {}
		return ITERATION_SUPPORT;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/promise-statics-incorrect-iteration.js
var require_promise_statics_incorrect_iteration = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/promise-statics-incorrect-iteration.js": ((exports, module) => {
	var NativePromiseConstructor$2 = require_promise_native_constructor();
	var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
	var FORCED_PROMISE_CONSTRUCTOR$3 = require_promise_constructor_detection().CONSTRUCTOR;
	module.exports = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function(iterable) {
		NativePromiseConstructor$2.all(iterable).then(void 0, function() {});
	});
}) });

//#endregion
//#region node_modules/core-js/modules/es.promise.all.js
var require_es_promise_all = /* @__PURE__ */ __commonJS({ "node_modules/core-js/modules/es.promise.all.js": (() => {
	var $$13 = require_export();
	var call$9 = require_function_call();
	var aCallable$2 = require_a_callable();
	var newPromiseCapabilityModule$2 = require_new_promise_capability();
	var perform$1 = require_perform();
	var iterate$1 = require_iterate();
	var PROMISE_STATICS_INCORRECT_ITERATION$1 = require_promise_statics_incorrect_iteration();
	$$13({
		target: "Promise",
		stat: true,
		forced: PROMISE_STATICS_INCORRECT_ITERATION$1
	}, { all: function all(iterable) {
		var C = this;
		var capability = newPromiseCapabilityModule$2.f(C);
		var resolve = capability.resolve;
		var reject = capability.reject;
		var result = perform$1(function() {
			var $promiseResolve = aCallable$2(C.resolve);
			var values$1 = [];
			var counter$1 = 0;
			var remaining = 1;
			iterate$1(iterable, function(promise$1) {
				var index$1 = counter$1++;
				var alreadyCalled = false;
				remaining++;
				call$9($promiseResolve, C, promise$1).then(function(value) {
					if (alreadyCalled) return;
					alreadyCalled = true;
					values$1[index$1] = value;
					--remaining || resolve(values$1);
				}, reject);
			});
			--remaining || resolve(values$1);
		});
		if (result.error) reject(result.value);
		return capability.promise;
	} });
}) });

//#endregion
//#region node_modules/core-js/modules/es.promise.catch.js
var require_es_promise_catch = /* @__PURE__ */ __commonJS({ "node_modules/core-js/modules/es.promise.catch.js": (() => {
	var $$12 = require_export();
	var IS_PURE$6 = require_is_pure();
	var FORCED_PROMISE_CONSTRUCTOR$2 = require_promise_constructor_detection().CONSTRUCTOR;
	var NativePromiseConstructor$1 = require_promise_native_constructor();
	var getBuiltIn$1 = require_get_built_in();
	var isCallable$5 = require_is_callable();
	var defineBuiltIn$4 = require_define_built_in();
	var NativePromisePrototype = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;
	$$12({
		target: "Promise",
		proto: true,
		forced: FORCED_PROMISE_CONSTRUCTOR$2,
		real: true
	}, { "catch": function(onRejected) {
		return this.then(void 0, onRejected);
	} });
	if (!IS_PURE$6 && isCallable$5(NativePromiseConstructor$1)) {
		var method = getBuiltIn$1("Promise").prototype["catch"];
		if (NativePromisePrototype["catch"] !== method) defineBuiltIn$4(NativePromisePrototype, "catch", method, { unsafe: true });
	}
}) });

//#endregion
//#region node_modules/core-js/modules/es.promise.race.js
var require_es_promise_race = /* @__PURE__ */ __commonJS({ "node_modules/core-js/modules/es.promise.race.js": (() => {
	var $$11 = require_export();
	var call$8 = require_function_call();
	var aCallable$1 = require_a_callable();
	var newPromiseCapabilityModule$1 = require_new_promise_capability();
	var perform = require_perform();
	var iterate = require_iterate();
	var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
	$$11({
		target: "Promise",
		stat: true,
		forced: PROMISE_STATICS_INCORRECT_ITERATION
	}, { race: function race(iterable) {
		var C = this;
		var capability = newPromiseCapabilityModule$1.f(C);
		var reject = capability.reject;
		var result = perform(function() {
			var $promiseResolve = aCallable$1(C.resolve);
			iterate(iterable, function(promise$1) {
				call$8($promiseResolve, C, promise$1).then(capability.resolve, reject);
			});
		});
		if (result.error) reject(result.value);
		return capability.promise;
	} });
}) });

//#endregion
//#region node_modules/core-js/modules/es.promise.reject.js
var require_es_promise_reject = /* @__PURE__ */ __commonJS({ "node_modules/core-js/modules/es.promise.reject.js": (() => {
	var $$10 = require_export();
	var newPromiseCapabilityModule = require_new_promise_capability();
	var FORCED_PROMISE_CONSTRUCTOR$1 = require_promise_constructor_detection().CONSTRUCTOR;
	$$10({
		target: "Promise",
		stat: true,
		forced: FORCED_PROMISE_CONSTRUCTOR$1
	}, { reject: function reject(r$1) {
		var capability = newPromiseCapabilityModule.f(this);
		var capabilityReject = capability.reject;
		capabilityReject(r$1);
		return capability.promise;
	} });
}) });

//#endregion
//#region node_modules/core-js/internals/promise-resolve.js
var require_promise_resolve = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/promise-resolve.js": ((exports, module) => {
	var anObject$8 = require_an_object();
	var isObject$5 = require_is_object();
	var newPromiseCapability = require_new_promise_capability();
	module.exports = function(C, x) {
		anObject$8(C);
		if (isObject$5(x) && x.constructor === C) return x;
		var promiseCapability = newPromiseCapability.f(C);
		var resolve = promiseCapability.resolve;
		resolve(x);
		return promiseCapability.promise;
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.promise.resolve.js
var require_es_promise_resolve = /* @__PURE__ */ __commonJS({ "node_modules/core-js/modules/es.promise.resolve.js": (() => {
	var $$9 = require_export();
	var getBuiltIn = require_get_built_in();
	var IS_PURE$5 = require_is_pure();
	var NativePromiseConstructor = require_promise_native_constructor();
	var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
	var promiseResolve = require_promise_resolve();
	var PromiseConstructorWrapper = getBuiltIn("Promise");
	var CHECK_WRAPPER = IS_PURE$5 && !FORCED_PROMISE_CONSTRUCTOR;
	$$9({
		target: "Promise",
		stat: true,
		forced: IS_PURE$5 || FORCED_PROMISE_CONSTRUCTOR
	}, { resolve: function resolve(x) {
		return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
	} });
}) });

//#endregion
//#region node_modules/core-js/modules/es.promise.js
require_es_promise_constructor();
require_es_promise_all();
require_es_promise_catch();
require_es_promise_race();
require_es_promise_reject();
require_es_promise_resolve();

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n$1, t$1, e$1, r$1, o$1, a$1, c$2) {
	try {
		var i$2 = n$1[a$1](c$2), u$1 = i$2.value;
	} catch (n$2) {
		e$1(n$2);
		return;
	}
	i$2.done ? t$1(u$1) : Promise.resolve(u$1).then(r$1, o$1);
}
function _asyncToGenerator(n$1) {
	return function() {
		var t$1 = this, e$1 = arguments;
		return new Promise(function(r$1, o$1) {
			var a$1 = n$1.apply(t$1, e$1);
			function _next(n$2) {
				asyncGeneratorStep(a$1, r$1, o$1, _next, _throw, "next", n$2);
			}
			function _throw(n$2) {
				asyncGeneratorStep(a$1, r$1, o$1, _next, _throw, "throw", n$2);
			}
			_next(void 0);
		});
	};
}

//#endregion
//#region node_modules/core-js/internals/to-string.js
var require_to_string = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/to-string.js": ((exports, module) => {
	var classof$3 = require_classof();
	var $String = String;
	module.exports = function(argument) {
		if (classof$3(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
		return $String(argument);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/regexp-flags.js
var require_regexp_flags = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/regexp-flags.js": ((exports, module) => {
	var anObject$7 = require_an_object();
	module.exports = function() {
		var that = anObject$7(this);
		var result = "";
		if (that.hasIndices) result += "d";
		if (that.global) result += "g";
		if (that.ignoreCase) result += "i";
		if (that.multiline) result += "m";
		if (that.dotAll) result += "s";
		if (that.unicode) result += "u";
		if (that.unicodeSets) result += "v";
		if (that.sticky) result += "y";
		return result;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/regexp-sticky-helpers.js
var require_regexp_sticky_helpers = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/regexp-sticky-helpers.js": ((exports, module) => {
	var fails$11 = require_fails();
	var $RegExp$2 = require_global_this().RegExp;
	var UNSUPPORTED_Y$2 = fails$11(function() {
		var re = $RegExp$2("a", "y");
		re.lastIndex = 2;
		return re.exec("abcd") !== null;
	});
	var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$11(function() {
		return !$RegExp$2("a", "y").sticky;
	});
	var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$11(function() {
		var re = $RegExp$2("^r", "gy");
		re.lastIndex = 2;
		return re.exec("str") !== null;
	});
	module.exports = {
		BROKEN_CARET,
		MISSED_STICKY,
		UNSUPPORTED_Y: UNSUPPORTED_Y$2
	};
}) });

//#endregion
//#region node_modules/core-js/internals/object-keys.js
var require_object_keys = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-keys.js": ((exports, module) => {
	var internalObjectKeys = require_object_keys_internal();
	var enumBugKeys$1 = require_enum_bug_keys();
	module.exports = Object.keys || function keys$1(O$1) {
		return internalObjectKeys(O$1, enumBugKeys$1);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-define-properties.js": ((exports) => {
	var DESCRIPTORS$1 = require_descriptors();
	var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
	var definePropertyModule = require_object_define_property();
	var anObject$6 = require_an_object();
	var toIndexedObject$1 = require_to_indexed_object();
	var objectKeys = require_object_keys();
	exports.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O$1, Properties) {
		anObject$6(O$1);
		var props = toIndexedObject$1(Properties);
		var keys$1 = objectKeys(Properties);
		var length = keys$1.length;
		var index$1 = 0;
		var key;
		while (length > index$1) definePropertyModule.f(O$1, key = keys$1[index$1++], props[key]);
		return O$1;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/object-create.js
var require_object_create = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-create.js": ((exports, module) => {
	var anObject$5 = require_an_object();
	var definePropertiesModule = require_object_define_properties();
	var enumBugKeys = require_enum_bug_keys();
	var hiddenKeys = require_hidden_keys();
	var html = require_html();
	var documentCreateElement = require_document_create_element();
	var sharedKey$1 = require_shared_key();
	var GT = ">";
	var LT = "<";
	var PROTOTYPE = "prototype";
	var SCRIPT = "script";
	var IE_PROTO$1 = sharedKey$1("IE_PROTO");
	var EmptyConstructor = function() {};
	var scriptTag = function(content) {
		return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
	};
	var NullProtoObjectViaActiveX = function(activeXDocument$1) {
		activeXDocument$1.write(scriptTag(""));
		activeXDocument$1.close();
		var temp = activeXDocument$1.parentWindow.Object;
		activeXDocument$1 = null;
		return temp;
	};
	var NullProtoObjectViaIFrame = function() {
		var iframe = documentCreateElement("iframe");
		var JS = "java" + SCRIPT + ":";
		var iframeDocument;
		iframe.style.display = "none";
		html.appendChild(iframe);
		iframe.src = String(JS);
		iframeDocument = iframe.contentWindow.document;
		iframeDocument.open();
		iframeDocument.write(scriptTag("document.F=Object"));
		iframeDocument.close();
		return iframeDocument.F;
	};
	var activeXDocument;
	var NullProtoObject = function() {
		try {
			activeXDocument = new ActiveXObject("htmlfile");
		} catch (error) {}
		NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
		var length = enumBugKeys.length;
		while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
		return NullProtoObject();
	};
	hiddenKeys[IE_PROTO$1] = true;
	module.exports = Object.create || function create$4(O$1, Properties) {
		var result;
		if (O$1 !== null) {
			EmptyConstructor[PROTOTYPE] = anObject$5(O$1);
			result = new EmptyConstructor();
			EmptyConstructor[PROTOTYPE] = null;
			result[IE_PROTO$1] = O$1;
		} else result = NullProtoObject();
		return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/regexp-unsupported-dot-all.js
var require_regexp_unsupported_dot_all = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/regexp-unsupported-dot-all.js": ((exports, module) => {
	var fails$10 = require_fails();
	var $RegExp$1 = require_global_this().RegExp;
	module.exports = fails$10(function() {
		var re = $RegExp$1(".", "s");
		return !(re.dotAll && re.test("\n") && re.flags === "s");
	});
}) });

//#endregion
//#region node_modules/core-js/internals/regexp-unsupported-ncg.js
var require_regexp_unsupported_ncg = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/regexp-unsupported-ncg.js": ((exports, module) => {
	var fails$9 = require_fails();
	var $RegExp = require_global_this().RegExp;
	module.exports = fails$9(function() {
		var re = $RegExp("(?<a>b)", "g");
		return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
	});
}) });

//#endregion
//#region node_modules/core-js/internals/regexp-exec.js
var require_regexp_exec = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/regexp-exec.js": ((exports, module) => {
	var call$7 = require_function_call();
	var uncurryThis$11 = require_function_uncurry_this();
	var toString$8 = require_to_string();
	var regexpFlags = require_regexp_flags();
	var stickyHelpers$1 = require_regexp_sticky_helpers();
	var shared = require_shared();
	var create$3 = require_object_create();
	var getInternalState$1 = require_internal_state().get;
	var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
	var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
	var nativeReplace = shared("native-string-replace", String.prototype.replace);
	var nativeExec = RegExp.prototype.exec;
	var patchedExec = nativeExec;
	var charAt$3 = uncurryThis$11("".charAt);
	var indexOf = uncurryThis$11("".indexOf);
	var replace$2 = uncurryThis$11("".replace);
	var stringSlice$5 = uncurryThis$11("".slice);
	var UPDATES_LAST_INDEX_WRONG = (function() {
		var re1 = /a/;
		var re2 = /b*/g;
		call$7(nativeExec, re1, "a");
		call$7(nativeExec, re2, "a");
		return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();
	var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;
	var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
	if (UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG) patchedExec = function exec$2(string) {
		var re = this;
		var state = getInternalState$1(re);
		var str = toString$8(string);
		var raw = state.raw;
		var result, reCopy, lastIndex, match$1, i$2, object, group;
		if (raw) {
			raw.lastIndex = re.lastIndex;
			result = call$7(patchedExec, raw, str);
			re.lastIndex = raw.lastIndex;
			return result;
		}
		var groups = state.groups;
		var sticky = UNSUPPORTED_Y$1 && re.sticky;
		var flags = call$7(regexpFlags, re);
		var source = re.source;
		var charsAdded = 0;
		var strCopy = str;
		if (sticky) {
			flags = replace$2(flags, "y", "");
			if (indexOf(flags, "g") === -1) flags += "g";
			strCopy = stringSlice$5(str, re.lastIndex);
			if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== "\n")) {
				source = "(?: " + source + ")";
				strCopy = " " + strCopy;
				charsAdded++;
			}
			reCopy = new RegExp("^(?:" + source + ")", flags);
		}
		if (NPCG_INCLUDED) reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
		if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
		match$1 = call$7(nativeExec, sticky ? reCopy : re, strCopy);
		if (sticky) if (match$1) {
			match$1.input = stringSlice$5(match$1.input, charsAdded);
			match$1[0] = stringSlice$5(match$1[0], charsAdded);
			match$1.index = re.lastIndex;
			re.lastIndex += match$1[0].length;
		} else re.lastIndex = 0;
		else if (UPDATES_LAST_INDEX_WRONG && match$1) re.lastIndex = re.global ? match$1.index + match$1[0].length : lastIndex;
		if (NPCG_INCLUDED && match$1 && match$1.length > 1) call$7(nativeReplace, match$1[0], reCopy, function() {
			for (i$2 = 1; i$2 < arguments.length - 2; i$2++) if (arguments[i$2] === void 0) match$1[i$2] = void 0;
		});
		if (match$1 && groups) {
			match$1.groups = object = create$3(null);
			for (i$2 = 0; i$2 < groups.length; i$2++) {
				group = groups[i$2];
				object[group[0]] = match$1[group[1]];
			}
		}
		return match$1;
	};
	module.exports = patchedExec;
}) });

//#endregion
//#region node_modules/core-js/modules/es.regexp.exec.js
var require_es_regexp_exec = /* @__PURE__ */ __commonJS({ "node_modules/core-js/modules/es.regexp.exec.js": (() => {
	var $$8 = require_export();
	var exec = require_regexp_exec();
	$$8({
		target: "RegExp",
		proto: true,
		forced: /./.exec !== exec
	}, { exec });
}) });

//#endregion
//#region node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js
var require_fix_regexp_well_known_symbol_logic = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js": ((exports, module) => {
	require_es_regexp_exec();
	var call$6 = require_function_call();
	var defineBuiltIn$3 = require_define_built_in();
	var regexpExec$1 = require_regexp_exec();
	var fails$8 = require_fails();
	var wellKnownSymbol$3 = require_well_known_symbol();
	var createNonEnumerableProperty$2 = require_create_non_enumerable_property();
	var SPECIES = wellKnownSymbol$3("species");
	var RegExpPrototype$2 = RegExp.prototype;
	module.exports = function(KEY, exec$2, FORCED$2, SHAM) {
		var SYMBOL = wellKnownSymbol$3(KEY);
		var DELEGATES_TO_SYMBOL = !fails$8(function() {
			var O$1 = {};
			O$1[SYMBOL] = function() {
				return 7;
			};
			return ""[KEY](O$1) !== 7;
		});
		var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$8(function() {
			var execCalled = false;
			var re = /a/;
			if (KEY === "split") {
				re = {};
				re.constructor = {};
				re.constructor[SPECIES] = function() {
					return re;
				};
				re.flags = "";
				re[SYMBOL] = /./[SYMBOL];
			}
			re.exec = function() {
				execCalled = true;
				return null;
			};
			re[SYMBOL]("");
			return !execCalled;
		});
		if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED$2) {
			var nativeRegExpMethod = /./[SYMBOL];
			var methods = exec$2(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
				var $exec = regexp.exec;
				if ($exec === regexpExec$1 || $exec === RegExpPrototype$2.exec) {
					if (DELEGATES_TO_SYMBOL && !forceStringMethod) return {
						done: true,
						value: call$6(nativeRegExpMethod, regexp, str, arg2)
					};
					return {
						done: true,
						value: call$6(nativeMethod, str, regexp, arg2)
					};
				}
				return { done: false };
			});
			defineBuiltIn$3(String.prototype, KEY, methods[0]);
			defineBuiltIn$3(RegExpPrototype$2, SYMBOL, methods[1]);
		}
		if (SHAM) createNonEnumerableProperty$2(RegExpPrototype$2[SYMBOL], "sham", true);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/string-multibyte.js
var require_string_multibyte = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/string-multibyte.js": ((exports, module) => {
	var uncurryThis$10 = require_function_uncurry_this();
	var toIntegerOrInfinity$1 = require_to_integer_or_infinity();
	var toString$7 = require_to_string();
	var requireObjectCoercible$7 = require_require_object_coercible();
	var charAt$2 = uncurryThis$10("".charAt);
	var charCodeAt = uncurryThis$10("".charCodeAt);
	var stringSlice$4 = uncurryThis$10("".slice);
	var createMethod$2 = function(CONVERT_TO_STRING) {
		return function($this, pos) {
			var S = toString$7(requireObjectCoercible$7($this));
			var position = toIntegerOrInfinity$1(pos);
			var size = S.length;
			var first, second;
			if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
			first = charCodeAt(S, position);
			return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$2(S, position) : first : CONVERT_TO_STRING ? stringSlice$4(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
		};
	};
	module.exports = {
		codeAt: createMethod$2(false),
		charAt: createMethod$2(true)
	};
}) });

//#endregion
//#region node_modules/core-js/internals/advance-string-index.js
var require_advance_string_index = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/advance-string-index.js": ((exports, module) => {
	var charAt$1 = require_string_multibyte().charAt;
	module.exports = function(S, index$1, unicode) {
		return index$1 + (unicode ? charAt$1(S, index$1).length : 1);
	};
}) });

//#endregion
//#region node_modules/core-js/internals/regexp-flags-detection.js
var require_regexp_flags_detection = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/regexp-flags-detection.js": ((exports, module) => {
	var globalThis$2 = require_global_this();
	var fails$7 = require_fails();
	var RegExp$1 = globalThis$2.RegExp;
	var FLAGS_GETTER_IS_CORRECT = !fails$7(function() {
		var INDICES_SUPPORT = true;
		try {
			RegExp$1(".", "d");
		} catch (error) {
			INDICES_SUPPORT = false;
		}
		var O$1 = {};
		var calls = "";
		var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
		var addGetter = function(key$1, chr) {
			Object.defineProperty(O$1, key$1, { get: function() {
				calls += chr;
				return true;
			} });
		};
		var pairs = {
			dotAll: "s",
			global: "g",
			ignoreCase: "i",
			multiline: "m",
			sticky: "y"
		};
		if (INDICES_SUPPORT) pairs.hasIndices = "d";
		for (var key in pairs) addGetter(key, pairs[key]);
		return Object.getOwnPropertyDescriptor(RegExp$1.prototype, "flags").get.call(O$1) !== expected || calls !== expected;
	});
	module.exports = { correct: FLAGS_GETTER_IS_CORRECT };
}) });

//#endregion
//#region node_modules/core-js/internals/regexp-get-flags.js
var require_regexp_get_flags = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/regexp-get-flags.js": ((exports, module) => {
	var call$5 = require_function_call();
	var hasOwn$1 = require_has_own_property();
	var isPrototypeOf = require_object_is_prototype_of();
	var regExpFlagsDetection = require_regexp_flags_detection();
	var regExpFlagsGetterImplementation = require_regexp_flags();
	var RegExpPrototype$1 = RegExp.prototype;
	module.exports = regExpFlagsDetection.correct ? function(it) {
		return it.flags;
	} : function(it) {
		return !regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype$1, it) && !hasOwn$1(it, "flags") ? call$5(regExpFlagsGetterImplementation, it) : it.flags;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/regexp-exec-abstract.js
var require_regexp_exec_abstract = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/regexp-exec-abstract.js": ((exports, module) => {
	var call$4 = require_function_call();
	var anObject$4 = require_an_object();
	var isCallable$4 = require_is_callable();
	var classof$2 = require_classof_raw();
	var regexpExec = require_regexp_exec();
	var $TypeError$2 = TypeError;
	module.exports = function(R, S) {
		var exec$2 = R.exec;
		if (isCallable$4(exec$2)) {
			var result = call$4(exec$2, R, S);
			if (result !== null) anObject$4(result);
			return result;
		}
		if (classof$2(R) === "RegExp") return call$4(regexpExec, R, S);
		throw new $TypeError$2("RegExp#exec called on incompatible receiver");
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.string.match.js
var call$3 = require_function_call();
var uncurryThis$9 = require_function_uncurry_this();
var fixRegExpWellKnownSymbolLogic$2 = require_fix_regexp_well_known_symbol_logic();
var anObject$3 = require_an_object();
var isObject$4 = require_is_object();
var toLength$4 = require_to_length();
var toString$6 = require_to_string();
var requireObjectCoercible$6 = require_require_object_coercible();
var getMethod$2 = require_get_method();
var advanceStringIndex$2 = require_advance_string_index();
var getRegExpFlags$2 = require_regexp_get_flags();
var regExpExec$2 = require_regexp_exec_abstract();
var stringIndexOf$2 = uncurryThis$9("".indexOf);
fixRegExpWellKnownSymbolLogic$2("match", function(MATCH$2, nativeMatch, maybeCallNative) {
	return [function match$1(regexp) {
		var O$1 = requireObjectCoercible$6(this);
		var matcher = isObject$4(regexp) ? getMethod$2(regexp, MATCH$2) : void 0;
		return matcher ? call$3(matcher, regexp, O$1) : new RegExp(regexp)[MATCH$2](toString$6(O$1));
	}, function(string) {
		var rx = anObject$3(this);
		var S = toString$6(string);
		var res = maybeCallNative(nativeMatch, rx, S);
		if (res.done) return res.value;
		var flags = toString$6(getRegExpFlags$2(rx));
		if (stringIndexOf$2(flags, "g") === -1) return regExpExec$2(rx, S);
		var fullUnicode = stringIndexOf$2(flags, "u") !== -1;
		rx.lastIndex = 0;
		var A = [];
		var n$1 = 0;
		var result;
		while ((result = regExpExec$2(rx, S)) !== null) {
			var matchStr = toString$6(result[0]);
			A[n$1] = matchStr;
			if (matchStr === "") rx.lastIndex = advanceStringIndex$2(S, toLength$4(rx.lastIndex), fullUnicode);
			n$1++;
		}
		return n$1 === 0 ? null : A;
	}];
});

//#endregion
//#region node_modules/core-js/internals/get-substitution.js
var require_get_substitution = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/get-substitution.js": ((exports, module) => {
	var uncurryThis$8 = require_function_uncurry_this();
	var toObject$2 = require_to_object();
	var floor = Math.floor;
	var charAt = uncurryThis$8("".charAt);
	var replace$1 = uncurryThis$8("".replace);
	var stringSlice$3 = uncurryThis$8("".slice);
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
	module.exports = function(matched, str, position, captures, namedCaptures, replacement$1) {
		var tailPos = position + matched.length;
		var m$2 = captures.length;
		var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
		if (namedCaptures !== void 0) {
			namedCaptures = toObject$2(namedCaptures);
			symbols = SUBSTITUTION_SYMBOLS;
		}
		return replace$1(replacement$1, symbols, function(match$1, ch) {
			var capture;
			switch (charAt(ch, 0)) {
				case "$": return "$";
				case "&": return matched;
				case "`": return stringSlice$3(str, 0, position);
				case "'": return stringSlice$3(str, tailPos);
				case "<":
					capture = namedCaptures[stringSlice$3(ch, 1, -1)];
					break;
				default:
					var n$1 = +ch;
					if (n$1 === 0) return match$1;
					if (n$1 > m$2) {
						var f$1 = floor(n$1 / 10);
						if (f$1 === 0) return match$1;
						if (f$1 <= m$2) return captures[f$1 - 1] === void 0 ? charAt(ch, 1) : captures[f$1 - 1] + charAt(ch, 1);
						return match$1;
					}
					capture = captures[n$1 - 1];
			}
			return capture === void 0 ? "" : capture;
		});
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.string.replace.js
var apply = require_function_apply();
var call$2 = require_function_call();
var uncurryThis$7 = require_function_uncurry_this();
var fixRegExpWellKnownSymbolLogic$1 = require_fix_regexp_well_known_symbol_logic();
var fails$6 = require_fails();
var anObject$2 = require_an_object();
var isCallable$3 = require_is_callable();
var isObject$3 = require_is_object();
var toIntegerOrInfinity = require_to_integer_or_infinity();
var toLength$3 = require_to_length();
var toString$5 = require_to_string();
var requireObjectCoercible$5 = require_require_object_coercible();
var advanceStringIndex$1 = require_advance_string_index();
var getMethod$1 = require_get_method();
var getSubstitution = require_get_substitution();
var getRegExpFlags$1 = require_regexp_get_flags();
var regExpExec$1 = require_regexp_exec_abstract();
var REPLACE = require_well_known_symbol()("replace");
var max = Math.max;
var min$3 = Math.min;
var concat = uncurryThis$7([].concat);
var push$1 = uncurryThis$7([].push);
var stringIndexOf$1 = uncurryThis$7("".indexOf);
var stringSlice$2 = uncurryThis$7("".slice);
var maybeToString = function(it) {
	return it === void 0 ? it : String(it);
};
var REPLACE_KEEPS_$0 = (function() {
	return "a".replace(/./, "$0") === "$0";
})();
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function() {
	if (/./[REPLACE]) return /./[REPLACE]("a", "$0") === "";
	return false;
})();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$6(function() {
	var re = /./;
	re.exec = function() {
		var result = [];
		result.groups = { a: "7" };
		return result;
	};
	return "".replace(re, "$<a>") !== "7";
});
fixRegExpWellKnownSymbolLogic$1("replace", function(_$1, nativeReplace$1, maybeCallNative) {
	var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
	return [function replace$4(searchValue, replaceValue) {
		var O$1 = requireObjectCoercible$5(this);
		var replacer = isObject$3(searchValue) ? getMethod$1(searchValue, REPLACE) : void 0;
		return replacer ? call$2(replacer, searchValue, O$1, replaceValue) : call$2(nativeReplace$1, toString$5(O$1), searchValue, replaceValue);
	}, function(string, replaceValue) {
		var rx = anObject$2(this);
		var S = toString$5(string);
		if (typeof replaceValue == "string" && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, "$<") === -1) {
			var res = maybeCallNative(nativeReplace$1, rx, S, replaceValue);
			if (res.done) return res.value;
		}
		var functionalReplace = isCallable$3(replaceValue);
		if (!functionalReplace) replaceValue = toString$5(replaceValue);
		var flags = toString$5(getRegExpFlags$1(rx));
		var global$1 = stringIndexOf$1(flags, "g") !== -1;
		var fullUnicode;
		if (global$1) {
			fullUnicode = stringIndexOf$1(flags, "u") !== -1;
			rx.lastIndex = 0;
		}
		var results = [];
		var result;
		while (true) {
			result = regExpExec$1(rx, S);
			if (result === null) break;
			push$1(results, result);
			if (!global$1) break;
			if (toString$5(result[0]) === "") rx.lastIndex = advanceStringIndex$1(S, toLength$3(rx.lastIndex), fullUnicode);
		}
		var accumulatedResult = "";
		var nextSourcePosition = 0;
		for (var i$2 = 0; i$2 < results.length; i$2++) {
			result = results[i$2];
			var matched = toString$5(result[0]);
			var position = max(min$3(toIntegerOrInfinity(result.index), S.length), 0);
			var captures = [];
			var replacement$1;
			for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
			var namedCaptures = result.groups;
			if (functionalReplace) {
				var replacerArgs = concat([matched], captures, position, S);
				if (namedCaptures !== void 0) push$1(replacerArgs, namedCaptures);
				replacement$1 = toString$5(apply(replaceValue, void 0, replacerArgs));
			} else replacement$1 = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
			if (position >= nextSourcePosition) {
				accumulatedResult += stringSlice$2(S, nextSourcePosition, position) + replacement$1;
				nextSourcePosition = position + matched.length;
			}
		}
		return accumulatedResult + stringSlice$2(S, nextSourcePosition);
	}];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

//#endregion
//#region node_modules/core-js/internals/is-regexp.js
var require_is_regexp = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-regexp.js": ((exports, module) => {
	var isObject$2 = require_is_object();
	var classof$1 = require_classof_raw();
	var MATCH$1 = require_well_known_symbol()("match");
	module.exports = function(it) {
		var isRegExp$1;
		return isObject$2(it) && ((isRegExp$1 = it[MATCH$1]) !== void 0 ? !!isRegExp$1 : classof$1(it) === "RegExp");
	};
}) });

//#endregion
//#region node_modules/core-js/internals/not-a-regexp.js
var require_not_a_regexp = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/not-a-regexp.js": ((exports, module) => {
	var isRegExp = require_is_regexp();
	var $TypeError$1 = TypeError;
	module.exports = function(it) {
		if (isRegExp(it)) throw new $TypeError$1("The method doesn't accept regular expressions");
		return it;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/correct-is-regexp-logic.js
var require_correct_is_regexp_logic = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/correct-is-regexp-logic.js": ((exports, module) => {
	var MATCH = require_well_known_symbol()("match");
	module.exports = function(METHOD_NAME) {
		var regexp = /./;
		try {
			"/./"[METHOD_NAME](regexp);
		} catch (error1) {
			try {
				regexp[MATCH] = false;
				return "/./"[METHOD_NAME](regexp);
			} catch (error2) {}
		}
		return false;
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.string.starts-with.js
var $$7 = require_export();
var uncurryThis$6 = require_function_uncurry_this_clause();
var getOwnPropertyDescriptor$1 = require_object_get_own_property_descriptor().f;
var toLength$2 = require_to_length();
var toString$4 = require_to_string();
var notARegExp$2 = require_not_a_regexp();
var requireObjectCoercible$4 = require_require_object_coercible();
var correctIsRegExpLogic$2 = require_correct_is_regexp_logic();
var IS_PURE$4 = require_is_pure();
var stringSlice$1 = uncurryThis$6("".slice);
var min$2 = Math.min;
var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$2("startsWith");
var MDN_POLYFILL_BUG$1 = !IS_PURE$4 && !CORRECT_IS_REGEXP_LOGIC$1 && !!function() {
	var descriptor = getOwnPropertyDescriptor$1(String.prototype, "startsWith");
	return descriptor && !descriptor.writable;
}();
$$7({
	target: "String",
	proto: true,
	forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1
}, { startsWith: function startsWith(searchString) {
	var that = toString$4(requireObjectCoercible$4(this));
	notARegExp$2(searchString);
	var index$1 = toLength$2(min$2(arguments.length > 1 ? arguments[1] : void 0, that.length));
	var search = toString$4(searchString);
	return stringSlice$1(that, index$1, index$1 + search.length) === search;
} });

//#endregion
//#region node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/add-to-unscopables.js": ((exports, module) => {
	var wellKnownSymbol$2 = require_well_known_symbol();
	var create$2 = require_object_create();
	var defineProperty$1 = require_object_define_property().f;
	var UNSCOPABLES = wellKnownSymbol$2("unscopables");
	var ArrayPrototype = Array.prototype;
	if (ArrayPrototype[UNSCOPABLES] === void 0) defineProperty$1(ArrayPrototype, UNSCOPABLES, {
		configurable: true,
		value: create$2(null)
	});
	module.exports = function(key) {
		ArrayPrototype[UNSCOPABLES][key] = true;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/correct-prototype-getter.js": ((exports, module) => {
	var fails$5 = require_fails();
	module.exports = !fails$5(function() {
		function F() {}
		F.prototype.constructor = null;
		return Object.getPrototypeOf(new F()) !== F.prototype;
	});
}) });

//#endregion
//#region node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/object-get-prototype-of.js": ((exports, module) => {
	var hasOwn = require_has_own_property();
	var isCallable$2 = require_is_callable();
	var toObject$1 = require_to_object();
	var sharedKey = require_shared_key();
	var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
	var IE_PROTO = sharedKey("IE_PROTO");
	var $Object = Object;
	var ObjectPrototype = $Object.prototype;
	module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O$1) {
		var object = toObject$1(O$1);
		if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
		var constructor = object.constructor;
		if (isCallable$2(constructor) && object instanceof constructor) return constructor.prototype;
		return object instanceof $Object ? ObjectPrototype : null;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/iterators-core.js
var require_iterators_core = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/iterators-core.js": ((exports, module) => {
	var fails$4 = require_fails();
	var isCallable$1 = require_is_callable();
	var isObject$1 = require_is_object();
	var create$1 = require_object_create();
	var getPrototypeOf$1 = require_object_get_prototype_of();
	var defineBuiltIn$2 = require_define_built_in();
	var wellKnownSymbol$1 = require_well_known_symbol();
	var IS_PURE$3 = require_is_pure();
	var ITERATOR$2 = wellKnownSymbol$1("iterator");
	var BUGGY_SAFARI_ITERATORS$1 = false;
	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
	if ([].keys) {
		arrayIterator = [].keys();
		if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
		else {
			PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
			if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
		}
	}
	if (!isObject$1(IteratorPrototype$2) || fails$4(function() {
		var test$2 = {};
		return IteratorPrototype$2[ITERATOR$2].call(test$2) !== test$2;
	})) IteratorPrototype$2 = {};
	else if (IS_PURE$3) IteratorPrototype$2 = create$1(IteratorPrototype$2);
	if (!isCallable$1(IteratorPrototype$2[ITERATOR$2])) defineBuiltIn$2(IteratorPrototype$2, ITERATOR$2, function() {
		return this;
	});
	module.exports = {
		IteratorPrototype: IteratorPrototype$2,
		BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};
}) });

//#endregion
//#region node_modules/core-js/internals/iterator-create-constructor.js
var require_iterator_create_constructor = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/iterator-create-constructor.js": ((exports, module) => {
	var IteratorPrototype$1 = require_iterators_core().IteratorPrototype;
	var create = require_object_create();
	var createPropertyDescriptor = require_create_property_descriptor();
	var setToStringTag$2 = require_set_to_string_tag();
	var Iterators$2 = require_iterators();
	var returnThis$1 = function() {
		return this;
	};
	module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
		var TO_STRING_TAG$3 = NAME + " Iterator";
		IteratorConstructor.prototype = create(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
		setToStringTag$2(IteratorConstructor, TO_STRING_TAG$3, false, true);
		Iterators$2[TO_STRING_TAG$3] = returnThis$1;
		return IteratorConstructor;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/iterator-define.js
var require_iterator_define = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/iterator-define.js": ((exports, module) => {
	var $$6 = require_export();
	var call$1 = require_function_call();
	var IS_PURE$2 = require_is_pure();
	var FunctionName = require_function_name();
	var isCallable = require_is_callable();
	var createIteratorConstructor = require_iterator_create_constructor();
	var getPrototypeOf = require_object_get_prototype_of();
	var setPrototypeOf = require_object_set_prototype_of();
	var setToStringTag$1 = require_set_to_string_tag();
	var createNonEnumerableProperty$1 = require_create_non_enumerable_property();
	var defineBuiltIn$1 = require_define_built_in();
	var wellKnownSymbol = require_well_known_symbol();
	var Iterators$1 = require_iterators();
	var IteratorsCore = require_iterators_core();
	var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol("iterator");
	var KEYS = "keys";
	var VALUES = "values";
	var ENTRIES = "entries";
	var returnThis = function() {
		return this;
	};
	module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED$2) {
		createIteratorConstructor(IteratorConstructor, NAME, next);
		var getIterationMethod = function(KIND) {
			if (KIND === DEFAULT && defaultIterator) return defaultIterator;
			if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
			switch (KIND) {
				case KEYS: return function keys$1() {
					return new IteratorConstructor(this, KIND);
				};
				case VALUES: return function values$1() {
					return new IteratorConstructor(this, KIND);
				};
				case ENTRIES: return function entries() {
					return new IteratorConstructor(this, KIND);
				};
			}
			return function() {
				return new IteratorConstructor(this);
			};
		};
		var TO_STRING_TAG$3 = NAME + " Iterator";
		var INCORRECT_VALUES_NAME = false;
		var IterablePrototype = Iterable.prototype;
		var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
		var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
		var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
		var CurrentIteratorPrototype, methods, KEY;
		if (anyNativeIterator) {
			CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
			if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
				if (!IS_PURE$2 && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
					if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
					else if (!isCallable(CurrentIteratorPrototype[ITERATOR$1])) defineBuiltIn$1(CurrentIteratorPrototype, ITERATOR$1, returnThis);
				}
				setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG$3, true, true);
				if (IS_PURE$2) Iterators$1[TO_STRING_TAG$3] = returnThis;
			}
		}
		if (PROPER_FUNCTION_NAME$2 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) if (!IS_PURE$2 && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty$1(IterablePrototype, "name", VALUES);
		else {
			INCORRECT_VALUES_NAME = true;
			defaultIterator = function values$1() {
				return call$1(nativeIterator, this);
			};
		}
		if (DEFAULT) {
			methods = {
				values: getIterationMethod(VALUES),
				keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
				entries: getIterationMethod(ENTRIES)
			};
			if (FORCED$2) {
				for (KEY in methods) if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) defineBuiltIn$1(IterablePrototype, KEY, methods[KEY]);
			} else $$6({
				target: NAME,
				proto: true,
				forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
			}, methods);
		}
		if ((!IS_PURE$2 || FORCED$2) && IterablePrototype[ITERATOR$1] !== defaultIterator) defineBuiltIn$1(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
		Iterators$1[NAME] = defaultIterator;
		return methods;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/create-iter-result-object.js": ((exports, module) => {
	module.exports = function(value, done) {
		return {
			value,
			done
		};
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.array.iterator.js
var require_es_array_iterator = /* @__PURE__ */ __commonJS({ "node_modules/core-js/modules/es.array.iterator.js": ((exports, module) => {
	var toIndexedObject = require_to_indexed_object();
	var addToUnscopables = require_add_to_unscopables();
	var Iterators = require_iterators();
	var InternalStateModule = require_internal_state();
	var defineProperty = require_object_define_property().f;
	var defineIterator = require_iterator_define();
	var createIterResultObject = require_create_iter_result_object();
	var IS_PURE$1 = require_is_pure();
	var DESCRIPTORS = require_descriptors();
	var ARRAY_ITERATOR = "Array Iterator";
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
	module.exports = defineIterator(Array, "Array", function(iterated, kind) {
		setInternalState(this, {
			type: ARRAY_ITERATOR,
			target: toIndexedObject(iterated),
			index: 0,
			kind
		});
	}, function() {
		var state = getInternalState(this);
		var target = state.target;
		var index$1 = state.index++;
		if (!target || index$1 >= target.length) {
			state.target = null;
			return createIterResultObject(void 0, true);
		}
		switch (state.kind) {
			case "keys": return createIterResultObject(index$1, false);
			case "values": return createIterResultObject(target[index$1], false);
		}
		return createIterResultObject([index$1, target[index$1]], false);
	}, "values");
	var values = Iterators.Arguments = Iterators.Array;
	addToUnscopables("keys");
	addToUnscopables("values");
	addToUnscopables("entries");
	if (!IS_PURE$1 && DESCRIPTORS && values.name !== "values") try {
		defineProperty(values, "name", { value: "values" });
	} catch (error) {}
}) });

//#endregion
//#region node_modules/core-js/internals/dom-iterables.js
var require_dom_iterables = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/dom-iterables.js": ((exports, module) => {
	module.exports = {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0
	};
}) });

//#endregion
//#region node_modules/core-js/internals/dom-token-list-prototype.js
var require_dom_token_list_prototype = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/dom-token-list-prototype.js": ((exports, module) => {
	var classList = require_document_create_element()("span").classList;
	var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;
	module.exports = DOMTokenListPrototype$1 === Object.prototype ? void 0 : DOMTokenListPrototype$1;
}) });

//#endregion
//#region node_modules/core-js/modules/web.dom-collections.iterator.js
var import_es_array_iterator = /* @__PURE__ */ __toESM(require_es_array_iterator());
var globalThis$1 = require_global_this();
var DOMIterables = require_dom_iterables();
var DOMTokenListPrototype = require_dom_token_list_prototype();
var ArrayIteratorMethods = require_es_array_iterator();
var createNonEnumerableProperty = require_create_non_enumerable_property();
var setToStringTag = require_set_to_string_tag();
var ITERATOR = require_well_known_symbol()("iterator");
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function(CollectionPrototype, COLLECTION_NAME$1) {
	if (CollectionPrototype) {
		if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
			createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
		} catch (error) {
			CollectionPrototype[ITERATOR] = ArrayValues;
		}
		setToStringTag(CollectionPrototype, COLLECTION_NAME$1, true);
		if (DOMIterables[COLLECTION_NAME$1]) {
			for (var METHOD_NAME in ArrayIteratorMethods) if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
				createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
			} catch (error) {
				CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
			}
		}
	}
};
for (var COLLECTION_NAME in DOMIterables) handlePrototype(globalThis$1[COLLECTION_NAME] && globalThis$1[COLLECTION_NAME].prototype, COLLECTION_NAME);
handlePrototype(DOMTokenListPrototype, "DOMTokenList");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t$1, r$1) {
	if ("object" != _typeof$1(t$1) || !t$1) return t$1;
	var e$1 = t$1[Symbol.toPrimitive];
	if (void 0 !== e$1) {
		var i$2 = e$1.call(t$1, r$1 || "default");
		if ("object" != _typeof$1(i$2)) return i$2;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r$1 ? String : Number)(t$1);
}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t$1) {
	var i$2 = toPrimitive(t$1, "string");
	return "symbol" == _typeof$1(i$2) ? i$2 : i$2 + "";
}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e$1, r$1, t$1) {
	return (r$1 = toPropertyKey(r$1)) in e$1 ? Object.defineProperty(e$1, r$1, {
		value: t$1,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e$1[r$1] = t$1, e$1;
}

//#endregion
//#region node_modules/core-js/internals/array-reduce.js
var require_array_reduce = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/array-reduce.js": ((exports, module) => {
	var aCallable = require_a_callable();
	var toObject = require_to_object();
	var IndexedObject = require_indexed_object();
	var lengthOfArrayLike = require_length_of_array_like();
	var $TypeError = TypeError;
	var REDUCE_EMPTY = "Reduce of empty array with no initial value";
	var createMethod$1 = function(IS_RIGHT) {
		return function(that, callbackfn, argumentsLength, memo) {
			var O$1 = toObject(that);
			var self$1 = IndexedObject(O$1);
			var length = lengthOfArrayLike(O$1);
			aCallable(callbackfn);
			if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
			var index$1 = IS_RIGHT ? length - 1 : 0;
			var i$2 = IS_RIGHT ? -1 : 1;
			if (argumentsLength < 2) while (true) {
				if (index$1 in self$1) {
					memo = self$1[index$1];
					index$1 += i$2;
					break;
				}
				index$1 += i$2;
				if (IS_RIGHT ? index$1 < 0 : length <= index$1) throw new $TypeError(REDUCE_EMPTY);
			}
			for (; IS_RIGHT ? index$1 >= 0 : length > index$1; index$1 += i$2) if (index$1 in self$1) memo = callbackfn(memo, self$1[index$1], index$1, O$1);
			return memo;
		};
	};
	module.exports = {
		left: createMethod$1(false),
		right: createMethod$1(true)
	};
}) });

//#endregion
//#region node_modules/core-js/internals/array-method-is-strict.js
var require_array_method_is_strict = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/array-method-is-strict.js": ((exports, module) => {
	var fails$3 = require_fails();
	module.exports = function(METHOD_NAME, argument) {
		var method$1 = [][METHOD_NAME];
		return !!method$1 && fails$3(function() {
			method$1.call(null, argument || function() {
				return 1;
			}, 1);
		});
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.array.reduce.js
var $$5 = require_export();
var $reduce = require_array_reduce().left;
var arrayMethodIsStrict$1 = require_array_method_is_strict();
var CHROME_VERSION = require_environment_v8_version();
var FORCED$1 = !require_environment_is_node() && CHROME_VERSION > 79 && CHROME_VERSION < 83 || !arrayMethodIsStrict$1("reduce");
$$5({
	target: "Array",
	proto: true,
	forced: FORCED$1
}, { reduce: function reduce(callbackfn) {
	var length = arguments.length;
	return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
} });

//#endregion
//#region node_modules/core-js/modules/es.string.ends-with.js
var $$4 = require_export();
var uncurryThis$5 = require_function_uncurry_this_clause();
var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
var toLength$1 = require_to_length();
var toString$3 = require_to_string();
var notARegExp$1 = require_not_a_regexp();
var requireObjectCoercible$3 = require_require_object_coercible();
var correctIsRegExpLogic$1 = require_correct_is_regexp_logic();
var IS_PURE = require_is_pure();
var slice = uncurryThis$5("".slice);
var min$1 = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic$1("endsWith");
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
	var descriptor = getOwnPropertyDescriptor(String.prototype, "endsWith");
	return descriptor && !descriptor.writable;
}();
$$4({
	target: "String",
	proto: true,
	forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, { endsWith: function endsWith(searchString) {
	var that = toString$3(requireObjectCoercible$3(this));
	notARegExp$1(searchString);
	var endPosition = arguments.length > 1 ? arguments[1] : void 0;
	var len = that.length;
	var end = endPosition === void 0 ? len : min$1(toLength$1(endPosition), len);
	var search = toString$3(searchString);
	return slice(that, end - search.length, end) === search;
} });

//#endregion
//#region node_modules/core-js/modules/es.string.split.js
var call = require_function_call();
var uncurryThis$4 = require_function_uncurry_this();
var fixRegExpWellKnownSymbolLogic = require_fix_regexp_well_known_symbol_logic();
var anObject$1 = require_an_object();
var isObject = require_is_object();
var requireObjectCoercible$2 = require_require_object_coercible();
var speciesConstructor = require_species_constructor();
var advanceStringIndex = require_advance_string_index();
var toLength = require_to_length();
var toString$2 = require_to_string();
var getMethod = require_get_method();
var regExpExec = require_regexp_exec_abstract();
var stickyHelpers = require_regexp_sticky_helpers();
var fails$2 = require_fails();
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 4294967295;
var min = Math.min;
var push = uncurryThis$4([].push);
var stringSlice = uncurryThis$4("".slice);
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$2(function() {
	var re = /(?:)/;
	var originalExec = re.exec;
	re.exec = function() {
		return originalExec.apply(this, arguments);
	};
	var result = "ab".split(re);
	return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
});
var BUGGY = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
fixRegExpWellKnownSymbolLogic("split", function(SPLIT, nativeSplit, maybeCallNative) {
	var internalSplit = "0".split(void 0, 0).length ? function(separator, limit) {
		return separator === void 0 && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
	} : nativeSplit;
	return [function split$1(separator, limit) {
		var O$1 = requireObjectCoercible$2(this);
		var splitter = isObject(separator) ? getMethod(separator, SPLIT) : void 0;
		return splitter ? call(splitter, separator, O$1, limit) : call(internalSplit, toString$2(O$1), separator, limit);
	}, function(string, limit) {
		var rx = anObject$1(this);
		var S = toString$2(string);
		if (!BUGGY) {
			var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
			if (res.done) return res.value;
		}
		var C = speciesConstructor(rx, RegExp);
		var unicodeMatching = rx.unicode;
		var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (UNSUPPORTED_Y ? "g" : "y");
		var splitter = new C(UNSUPPORTED_Y ? "^(?:" + rx.source + ")" : rx, flags);
		var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
		if (lim === 0) return [];
		if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
		var p$1 = 0;
		var q = 0;
		var A = [];
		while (q < S.length) {
			splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
			var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
			var e$1;
			if (z === null || (e$1 = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p$1) q = advanceStringIndex(S, q, unicodeMatching);
			else {
				push(A, stringSlice(S, p$1, q));
				if (A.length === lim) return A;
				for (var i$2 = 1; i$2 <= z.length - 1; i$2++) {
					push(A, z[i$2]);
					if (A.length === lim) return A;
				}
				q = p$1 = e$1;
			}
		}
		push(A, stringSlice(S, p$1));
		return A;
	}];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

//#endregion
//#region node_modules/performance-now/lib/performance-now.js
var require_performance_now = /* @__PURE__ */ __commonJS({ "node_modules/performance-now/lib/performance-now.js": ((exports, module) => {
	(function() {
		var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
		if (typeof performance !== "undefined" && performance !== null && performance.now) module.exports = function() {
			return performance.now();
		};
		else if (typeof process !== "undefined" && process !== null && process.hrtime) {
			module.exports = function() {
				return (getNanoSeconds() - nodeLoadTime) / 1e6;
			};
			hrtime = process.hrtime;
			getNanoSeconds = function() {
				var hr = hrtime();
				return hr[0] * 1e9 + hr[1];
			};
			moduleLoadTime = getNanoSeconds();
			upTime = process.uptime() * 1e9;
			nodeLoadTime = moduleLoadTime - upTime;
		} else if (Date.now) {
			module.exports = function() {
				return Date.now() - loadTime;
			};
			loadTime = Date.now();
		} else {
			module.exports = function() {
				return (/* @__PURE__ */ new Date()).getTime() - loadTime;
			};
			loadTime = (/* @__PURE__ */ new Date()).getTime();
		}
	}).call(exports);
}) });

//#endregion
//#region node_modules/raf/index.js
var require_raf = /* @__PURE__ */ __commonJS({ "node_modules/raf/index.js": ((exports, module) => {
	var now = require_performance_now(), root = typeof window === "undefined" ? global : window, vendors = ["moz", "webkit"], suffix = "AnimationFrame", raf = root["request" + suffix], caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
	for (var i$1 = 0; !raf && i$1 < vendors.length; i$1++) {
		raf = root[vendors[i$1] + "Request" + suffix];
		caf = root[vendors[i$1] + "Cancel" + suffix] || root[vendors[i$1] + "CancelRequest" + suffix];
	}
	if (!raf || !caf) {
		var last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
		raf = function(callback) {
			if (queue.length === 0) {
				var _now = now(), next = Math.max(0, frameDuration - (_now - last));
				last = next + _now;
				setTimeout(function() {
					var cp = queue.slice(0);
					queue.length = 0;
					for (var i$2 = 0; i$2 < cp.length; i$2++) if (!cp[i$2].cancelled) try {
						cp[i$2].callback(last);
					} catch (e$1) {
						setTimeout(function() {
							throw e$1;
						}, 0);
					}
				}, Math.round(next));
			}
			queue.push({
				handle: ++id,
				callback,
				cancelled: false
			});
			return id;
		};
		caf = function(handle) {
			for (var i$2 = 0; i$2 < queue.length; i$2++) if (queue[i$2].handle === handle) queue[i$2].cancelled = true;
		};
	}
	module.exports = function(fn) {
		return raf.call(root, fn);
	};
	module.exports.cancel = function() {
		caf.apply(root, arguments);
	};
	module.exports.polyfill = function(object) {
		if (!object) object = root;
		object.requestAnimationFrame = raf;
		object.cancelAnimationFrame = caf;
	};
}) });

//#endregion
//#region node_modules/core-js/internals/whitespaces.js
var require_whitespaces = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/whitespaces.js": ((exports, module) => {
	module.exports = "	\n\v\f\r \xA0              　\u2028\u2029﻿";
}) });

//#endregion
//#region node_modules/core-js/internals/string-trim.js
var require_string_trim = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/string-trim.js": ((exports, module) => {
	var uncurryThis$3 = require_function_uncurry_this();
	var requireObjectCoercible$1 = require_require_object_coercible();
	var toString$1 = require_to_string();
	var whitespaces$1 = require_whitespaces();
	var replace = uncurryThis$3("".replace);
	var ltrim = RegExp("^[" + whitespaces$1 + "]+");
	var rtrim = RegExp("(^|[^" + whitespaces$1 + "])[" + whitespaces$1 + "]+$");
	var createMethod = function(TYPE) {
		return function($this) {
			var string = toString$1(requireObjectCoercible$1($this));
			if (TYPE & 1) string = replace(string, ltrim, "");
			if (TYPE & 2) string = replace(string, rtrim, "$1");
			return string;
		};
	};
	module.exports = {
		start: createMethod(1),
		end: createMethod(2),
		trim: createMethod(3)
	};
}) });

//#endregion
//#region node_modules/core-js/internals/string-trim-forced.js
var require_string_trim_forced = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/string-trim-forced.js": ((exports, module) => {
	var PROPER_FUNCTION_NAME$1 = require_function_name().PROPER;
	var fails$1 = require_fails();
	var whitespaces = require_whitespaces();
	var non = "​᠎";
	module.exports = function(METHOD_NAME) {
		return fails$1(function() {
			return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME$1 && whitespaces[METHOD_NAME].name !== METHOD_NAME;
		});
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.string.trim.js
var import_raf = /* @__PURE__ */ __toESM(require_raf());
var $$3 = require_export();
var $trim = require_string_trim().trim;
var forcedStringTrimMethod = require_string_trim_forced();
$$3({
	target: "String",
	proto: true,
	forced: forcedStringTrimMethod("trim")
}, { trim: function trim() {
	return $trim(this);
} });

//#endregion
//#region node_modules/rgbcolor/index.js
var require_rgbcolor = /* @__PURE__ */ __commonJS({ "node_modules/rgbcolor/index.js": ((exports, module) => {
	module.exports = function(color_string) {
		this.ok = false;
		this.alpha = 1;
		if (color_string.charAt(0) == "#") color_string = color_string.substr(1, 6);
		color_string = color_string.replace(/ /g, "");
		color_string = color_string.toLowerCase();
		var simple_colors = {
			aliceblue: "f0f8ff",
			antiquewhite: "faebd7",
			aqua: "00ffff",
			aquamarine: "7fffd4",
			azure: "f0ffff",
			beige: "f5f5dc",
			bisque: "ffe4c4",
			black: "000000",
			blanchedalmond: "ffebcd",
			blue: "0000ff",
			blueviolet: "8a2be2",
			brown: "a52a2a",
			burlywood: "deb887",
			cadetblue: "5f9ea0",
			chartreuse: "7fff00",
			chocolate: "d2691e",
			coral: "ff7f50",
			cornflowerblue: "6495ed",
			cornsilk: "fff8dc",
			crimson: "dc143c",
			cyan: "00ffff",
			darkblue: "00008b",
			darkcyan: "008b8b",
			darkgoldenrod: "b8860b",
			darkgray: "a9a9a9",
			darkgreen: "006400",
			darkkhaki: "bdb76b",
			darkmagenta: "8b008b",
			darkolivegreen: "556b2f",
			darkorange: "ff8c00",
			darkorchid: "9932cc",
			darkred: "8b0000",
			darksalmon: "e9967a",
			darkseagreen: "8fbc8f",
			darkslateblue: "483d8b",
			darkslategray: "2f4f4f",
			darkturquoise: "00ced1",
			darkviolet: "9400d3",
			deeppink: "ff1493",
			deepskyblue: "00bfff",
			dimgray: "696969",
			dodgerblue: "1e90ff",
			feldspar: "d19275",
			firebrick: "b22222",
			floralwhite: "fffaf0",
			forestgreen: "228b22",
			fuchsia: "ff00ff",
			gainsboro: "dcdcdc",
			ghostwhite: "f8f8ff",
			gold: "ffd700",
			goldenrod: "daa520",
			gray: "808080",
			green: "008000",
			greenyellow: "adff2f",
			honeydew: "f0fff0",
			hotpink: "ff69b4",
			indianred: "cd5c5c",
			indigo: "4b0082",
			ivory: "fffff0",
			khaki: "f0e68c",
			lavender: "e6e6fa",
			lavenderblush: "fff0f5",
			lawngreen: "7cfc00",
			lemonchiffon: "fffacd",
			lightblue: "add8e6",
			lightcoral: "f08080",
			lightcyan: "e0ffff",
			lightgoldenrodyellow: "fafad2",
			lightgrey: "d3d3d3",
			lightgreen: "90ee90",
			lightpink: "ffb6c1",
			lightsalmon: "ffa07a",
			lightseagreen: "20b2aa",
			lightskyblue: "87cefa",
			lightslateblue: "8470ff",
			lightslategray: "778899",
			lightsteelblue: "b0c4de",
			lightyellow: "ffffe0",
			lime: "00ff00",
			limegreen: "32cd32",
			linen: "faf0e6",
			magenta: "ff00ff",
			maroon: "800000",
			mediumaquamarine: "66cdaa",
			mediumblue: "0000cd",
			mediumorchid: "ba55d3",
			mediumpurple: "9370d8",
			mediumseagreen: "3cb371",
			mediumslateblue: "7b68ee",
			mediumspringgreen: "00fa9a",
			mediumturquoise: "48d1cc",
			mediumvioletred: "c71585",
			midnightblue: "191970",
			mintcream: "f5fffa",
			mistyrose: "ffe4e1",
			moccasin: "ffe4b5",
			navajowhite: "ffdead",
			navy: "000080",
			oldlace: "fdf5e6",
			olive: "808000",
			olivedrab: "6b8e23",
			orange: "ffa500",
			orangered: "ff4500",
			orchid: "da70d6",
			palegoldenrod: "eee8aa",
			palegreen: "98fb98",
			paleturquoise: "afeeee",
			palevioletred: "d87093",
			papayawhip: "ffefd5",
			peachpuff: "ffdab9",
			peru: "cd853f",
			pink: "ffc0cb",
			plum: "dda0dd",
			powderblue: "b0e0e6",
			purple: "800080",
			rebeccapurple: "663399",
			red: "ff0000",
			rosybrown: "bc8f8f",
			royalblue: "4169e1",
			saddlebrown: "8b4513",
			salmon: "fa8072",
			sandybrown: "f4a460",
			seagreen: "2e8b57",
			seashell: "fff5ee",
			sienna: "a0522d",
			silver: "c0c0c0",
			skyblue: "87ceeb",
			slateblue: "6a5acd",
			slategray: "708090",
			snow: "fffafa",
			springgreen: "00ff7f",
			steelblue: "4682b4",
			tan: "d2b48c",
			teal: "008080",
			thistle: "d8bfd8",
			tomato: "ff6347",
			turquoise: "40e0d0",
			violet: "ee82ee",
			violetred: "d02090",
			wheat: "f5deb3",
			white: "ffffff",
			whitesmoke: "f5f5f5",
			yellow: "ffff00",
			yellowgreen: "9acd32"
		};
		color_string = simple_colors[color_string] || color_string;
		var color_defs = [
			{
				re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
				example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
				process: function(bits$1) {
					return [
						parseInt(bits$1[1]),
						parseInt(bits$1[2]),
						parseInt(bits$1[3]),
						parseFloat(bits$1[4])
					];
				}
			},
			{
				re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
				example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
				process: function(bits$1) {
					return [
						parseInt(bits$1[1]),
						parseInt(bits$1[2]),
						parseInt(bits$1[3])
					];
				}
			},
			{
				re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
				example: ["#00ff00", "336699"],
				process: function(bits$1) {
					return [
						parseInt(bits$1[1], 16),
						parseInt(bits$1[2], 16),
						parseInt(bits$1[3], 16)
					];
				}
			},
			{
				re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
				example: ["#fb0", "f0f"],
				process: function(bits$1) {
					return [
						parseInt(bits$1[1] + bits$1[1], 16),
						parseInt(bits$1[2] + bits$1[2], 16),
						parseInt(bits$1[3] + bits$1[3], 16)
					];
				}
			}
		];
		for (var i$2 = 0; i$2 < color_defs.length; i$2++) {
			var re = color_defs[i$2].re;
			var processor = color_defs[i$2].process;
			var bits = re.exec(color_string);
			if (bits) {
				var channels = processor(bits);
				this.r = channels[0];
				this.g = channels[1];
				this.b = channels[2];
				if (channels.length > 3) this.alpha = channels[3];
				this.ok = true;
			}
		}
		this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
		this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
		this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
		this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha;
		this.toRGB = function() {
			return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
		};
		this.toRGBA = function() {
			return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
		};
		this.toHex = function() {
			var r$1 = this.r.toString(16);
			var g = this.g.toString(16);
			var b = this.b.toString(16);
			if (r$1.length == 1) r$1 = "0" + r$1;
			if (g.length == 1) g = "0" + g;
			if (b.length == 1) b = "0" + b;
			return "#" + r$1 + g + b;
		};
		this.getHelpXML = function() {
			var examples = new Array();
			for (var i$3 = 0; i$3 < color_defs.length; i$3++) {
				var example = color_defs[i$3].example;
				for (var j = 0; j < example.length; j++) examples[examples.length] = example[j];
			}
			for (var sc in simple_colors) examples[examples.length] = sc;
			var xml = document.createElement("ul");
			xml.setAttribute("id", "rgbcolor-examples");
			for (var i$3 = 0; i$3 < examples.length; i$3++) try {
				var list_item = document.createElement("li");
				var list_color = new RGBColor(examples[i$3]);
				var example_div = document.createElement("div");
				example_div.style.cssText = "margin: 3px; border: 1px solid black; background:" + list_color.toHex() + "; color:" + list_color.toHex();
				example_div.appendChild(document.createTextNode("test"));
				var list_item_value = document.createTextNode(" " + examples[i$3] + " -> " + list_color.toRGB() + " -> " + list_color.toHex());
				list_item.appendChild(example_div);
				list_item.appendChild(list_item_value);
				xml.appendChild(list_item);
			} catch (e$1) {}
			return xml;
		};
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.array.index-of.js
var import_rgbcolor = /* @__PURE__ */ __toESM(require_rgbcolor());
var $$2 = require_export();
var uncurryThis$2 = require_function_uncurry_this_clause();
var $indexOf = require_array_includes().indexOf;
var arrayMethodIsStrict = require_array_method_is_strict();
var nativeIndexOf = uncurryThis$2([].indexOf);
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict("indexOf");
$$2({
	target: "Array",
	proto: true,
	forced: FORCED
}, { indexOf: function indexOf$2(searchElement) {
	var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
	return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
} });

//#endregion
//#region node_modules/core-js/modules/es.string.includes.js
var $$1 = require_export();
var uncurryThis$1 = require_function_uncurry_this();
var notARegExp = require_not_a_regexp();
var requireObjectCoercible = require_require_object_coercible();
var toString = require_to_string();
var correctIsRegExpLogic = require_correct_is_regexp_logic();
var stringIndexOf = uncurryThis$1("".indexOf);
$$1({
	target: "String",
	proto: true,
	forced: !correctIsRegExpLogic("includes")
}, { includes: function includes(searchString) {
	return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : void 0);
} });

//#endregion
//#region node_modules/core-js/internals/is-array.js
var require_is_array = /* @__PURE__ */ __commonJS({ "node_modules/core-js/internals/is-array.js": ((exports, module) => {
	var classof = require_classof_raw();
	module.exports = Array.isArray || function isArray$1(argument) {
		return classof(argument) === "Array";
	};
}) });

//#endregion
//#region node_modules/core-js/modules/es.array.reverse.js
var $ = require_export();
var uncurryThis = require_function_uncurry_this();
var isArray = require_is_array();
var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];
$({
	target: "Array",
	proto: true,
	forced: String(test) === String(test.reverse())
}, { reverse: function reverse() {
	if (isArray(this)) this.length = this.length;
	return nativeReverse(this);
} });

//#endregion
//#region node_modules/svg-pathdata/lib/SVGPathData.module.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t = function(r$1, e$1) {
	return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t$1, r$2) {
		t$1.__proto__ = r$2;
	} || function(t$1, r$2) {
		for (var e$2 in r$2) Object.prototype.hasOwnProperty.call(r$2, e$2) && (t$1[e$2] = r$2[e$2]);
	})(r$1, e$1);
};
function r(r$1, e$1) {
	if ("function" != typeof e$1 && null !== e$1) throw new TypeError("Class extends value " + String(e$1) + " is not a constructor or null");
	function i$2() {
		this.constructor = r$1;
	}
	t(r$1, e$1), r$1.prototype = null === e$1 ? Object.create(e$1) : (i$2.prototype = e$1.prototype, new i$2());
}
function e(t$1) {
	var r$1 = "";
	Array.isArray(t$1) || (t$1 = [t$1]);
	for (var e$1 = 0; e$1 < t$1.length; e$1++) {
		var i$2 = t$1[e$1];
		if (i$2.type === _.CLOSE_PATH) r$1 += "z";
		else if (i$2.type === _.HORIZ_LINE_TO) r$1 += (i$2.relative ? "h" : "H") + i$2.x;
		else if (i$2.type === _.VERT_LINE_TO) r$1 += (i$2.relative ? "v" : "V") + i$2.y;
		else if (i$2.type === _.MOVE_TO) r$1 += (i$2.relative ? "m" : "M") + i$2.x + " " + i$2.y;
		else if (i$2.type === _.LINE_TO) r$1 += (i$2.relative ? "l" : "L") + i$2.x + " " + i$2.y;
		else if (i$2.type === _.CURVE_TO) r$1 += (i$2.relative ? "c" : "C") + i$2.x1 + " " + i$2.y1 + " " + i$2.x2 + " " + i$2.y2 + " " + i$2.x + " " + i$2.y;
		else if (i$2.type === _.SMOOTH_CURVE_TO) r$1 += (i$2.relative ? "s" : "S") + i$2.x2 + " " + i$2.y2 + " " + i$2.x + " " + i$2.y;
		else if (i$2.type === _.QUAD_TO) r$1 += (i$2.relative ? "q" : "Q") + i$2.x1 + " " + i$2.y1 + " " + i$2.x + " " + i$2.y;
		else if (i$2.type === _.SMOOTH_QUAD_TO) r$1 += (i$2.relative ? "t" : "T") + i$2.x + " " + i$2.y;
		else {
			if (i$2.type !== _.ARC) throw new Error("Unexpected command type \"" + i$2.type + "\" at index " + e$1 + ".");
			r$1 += (i$2.relative ? "a" : "A") + i$2.rX + " " + i$2.rY + " " + i$2.xRot + " " + +i$2.lArcFlag + " " + +i$2.sweepFlag + " " + i$2.x + " " + i$2.y;
		}
	}
	return r$1;
}
function i(t$1, r$1) {
	var e$1 = t$1[0], i$2 = t$1[1];
	return [e$1 * Math.cos(r$1) - i$2 * Math.sin(r$1), e$1 * Math.sin(r$1) + i$2 * Math.cos(r$1)];
}
function a() {
	for (var t$1 = [], r$1 = 0; r$1 < arguments.length; r$1++) t$1[r$1] = arguments[r$1];
	for (var e$1 = 0; e$1 < t$1.length; e$1++) if ("number" != typeof t$1[e$1]) throw new Error("assertNumbers arguments[" + e$1 + "] is not a number. " + typeof t$1[e$1] + " == typeof " + t$1[e$1]);
	return !0;
}
var n = Math.PI;
function o(t$1, r$1, e$1) {
	t$1.lArcFlag = 0 === t$1.lArcFlag ? 0 : 1, t$1.sweepFlag = 0 === t$1.sweepFlag ? 0 : 1;
	var a$1 = t$1.rX, o$1 = t$1.rY, s$1 = t$1.x, u$1 = t$1.y;
	a$1 = Math.abs(t$1.rX), o$1 = Math.abs(t$1.rY);
	var h$1 = i([(r$1 - s$1) / 2, (e$1 - u$1) / 2], -t$1.xRot / 180 * n), c$2 = h$1[0], y$1 = h$1[1], p$1 = Math.pow(c$2, 2) / Math.pow(a$1, 2) + Math.pow(y$1, 2) / Math.pow(o$1, 2);
	1 < p$1 && (a$1 *= Math.sqrt(p$1), o$1 *= Math.sqrt(p$1)), t$1.rX = a$1, t$1.rY = o$1;
	var m$2 = Math.pow(a$1, 2) * Math.pow(y$1, 2) + Math.pow(o$1, 2) * Math.pow(c$2, 2), O$1 = (t$1.lArcFlag !== t$1.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a$1, 2) * Math.pow(o$1, 2) - m$2) / m$2)), l$1 = a$1 * y$1 / o$1 * O$1, T$1 = -o$1 * c$2 / a$1 * O$1, v$1 = i([l$1, T$1], t$1.xRot / 180 * n);
	t$1.cX = v$1[0] + (r$1 + s$1) / 2, t$1.cY = v$1[1] + (e$1 + u$1) / 2, t$1.phi1 = Math.atan2((y$1 - T$1) / o$1, (c$2 - l$1) / a$1), t$1.phi2 = Math.atan2((-y$1 - T$1) / o$1, (-c$2 - l$1) / a$1), 0 === t$1.sweepFlag && t$1.phi2 > t$1.phi1 && (t$1.phi2 -= 2 * n), 1 === t$1.sweepFlag && t$1.phi2 < t$1.phi1 && (t$1.phi2 += 2 * n), t$1.phi1 *= 180 / n, t$1.phi2 *= 180 / n;
}
function s(t$1, r$1, e$1) {
	a(t$1, r$1, e$1);
	var i$2 = t$1 * t$1 + r$1 * r$1 - e$1 * e$1;
	if (0 > i$2) return [];
	if (0 === i$2) return [[t$1 * e$1 / (t$1 * t$1 + r$1 * r$1), r$1 * e$1 / (t$1 * t$1 + r$1 * r$1)]];
	var n$1 = Math.sqrt(i$2);
	return [[(t$1 * e$1 + r$1 * n$1) / (t$1 * t$1 + r$1 * r$1), (r$1 * e$1 - t$1 * n$1) / (t$1 * t$1 + r$1 * r$1)], [(t$1 * e$1 - r$1 * n$1) / (t$1 * t$1 + r$1 * r$1), (r$1 * e$1 + t$1 * n$1) / (t$1 * t$1 + r$1 * r$1)]];
}
var u, h = Math.PI / 180;
function c$1(t$1, r$1, e$1) {
	return (1 - e$1) * t$1 + e$1 * r$1;
}
function y(t$1, r$1, e$1, i$2) {
	return t$1 + Math.cos(i$2 / 180 * n) * r$1 + Math.sin(i$2 / 180 * n) * e$1;
}
function p(t$1, r$1, e$1, i$2) {
	var a$1 = 1e-6, n$1 = r$1 - t$1, o$1 = e$1 - r$1, s$1 = 3 * n$1 + 3 * (i$2 - e$1) - 6 * o$1, u$1 = 6 * (o$1 - n$1), h$1 = 3 * n$1;
	return Math.abs(s$1) < a$1 ? [-h$1 / u$1] : function(t$2, r$2, e$2) {
		void 0 === e$2 && (e$2 = 1e-6);
		var i$3 = t$2 * t$2 / 4 - r$2;
		if (i$3 < -e$2) return [];
		if (i$3 <= e$2) return [-t$2 / 2];
		var a$2 = Math.sqrt(i$3);
		return [-t$2 / 2 - a$2, -t$2 / 2 + a$2];
	}(u$1 / s$1, h$1 / s$1, a$1);
}
function m$1(t$1, r$1, e$1, i$2, a$1) {
	var n$1 = 1 - a$1;
	return t$1 * (n$1 * n$1 * n$1) + r$1 * (3 * n$1 * n$1 * a$1) + e$1 * (3 * n$1 * a$1 * a$1) + i$2 * (a$1 * a$1 * a$1);
}
(function(t$1) {
	function r$1() {
		return u$1((function(t$2, r$2, e$2) {
			return t$2.relative && (void 0 !== t$2.x1 && (t$2.x1 += r$2), void 0 !== t$2.y1 && (t$2.y1 += e$2), void 0 !== t$2.x2 && (t$2.x2 += r$2), void 0 !== t$2.y2 && (t$2.y2 += e$2), void 0 !== t$2.x && (t$2.x += r$2), void 0 !== t$2.y && (t$2.y += e$2), t$2.relative = !1), t$2;
		}));
	}
	function e$1() {
		var t$2 = NaN, r$2 = NaN, e$2 = NaN, i$2 = NaN;
		return u$1((function(a$1, n$2, o$1) {
			return a$1.type & _.SMOOTH_CURVE_TO && (a$1.type = _.CURVE_TO, t$2 = isNaN(t$2) ? n$2 : t$2, r$2 = isNaN(r$2) ? o$1 : r$2, a$1.x1 = a$1.relative ? n$2 - t$2 : 2 * n$2 - t$2, a$1.y1 = a$1.relative ? o$1 - r$2 : 2 * o$1 - r$2), a$1.type & _.CURVE_TO ? (t$2 = a$1.relative ? n$2 + a$1.x2 : a$1.x2, r$2 = a$1.relative ? o$1 + a$1.y2 : a$1.y2) : (t$2 = NaN, r$2 = NaN), a$1.type & _.SMOOTH_QUAD_TO && (a$1.type = _.QUAD_TO, e$2 = isNaN(e$2) ? n$2 : e$2, i$2 = isNaN(i$2) ? o$1 : i$2, a$1.x1 = a$1.relative ? n$2 - e$2 : 2 * n$2 - e$2, a$1.y1 = a$1.relative ? o$1 - i$2 : 2 * o$1 - i$2), a$1.type & _.QUAD_TO ? (e$2 = a$1.relative ? n$2 + a$1.x1 : a$1.x1, i$2 = a$1.relative ? o$1 + a$1.y1 : a$1.y1) : (e$2 = NaN, i$2 = NaN), a$1;
		}));
	}
	function n$1() {
		var t$2 = NaN, r$2 = NaN;
		return u$1((function(e$2, i$2, a$1) {
			if (e$2.type & _.SMOOTH_QUAD_TO && (e$2.type = _.QUAD_TO, t$2 = isNaN(t$2) ? i$2 : t$2, r$2 = isNaN(r$2) ? a$1 : r$2, e$2.x1 = e$2.relative ? i$2 - t$2 : 2 * i$2 - t$2, e$2.y1 = e$2.relative ? a$1 - r$2 : 2 * a$1 - r$2), e$2.type & _.QUAD_TO) {
				t$2 = e$2.relative ? i$2 + e$2.x1 : e$2.x1, r$2 = e$2.relative ? a$1 + e$2.y1 : e$2.y1;
				var n$2 = e$2.x1, o$1 = e$2.y1;
				e$2.type = _.CURVE_TO, e$2.x1 = ((e$2.relative ? 0 : i$2) + 2 * n$2) / 3, e$2.y1 = ((e$2.relative ? 0 : a$1) + 2 * o$1) / 3, e$2.x2 = (e$2.x + 2 * n$2) / 3, e$2.y2 = (e$2.y + 2 * o$1) / 3;
			} else t$2 = NaN, r$2 = NaN;
			return e$2;
		}));
	}
	function u$1(t$2) {
		var r$2 = 0, e$2 = 0, i$2 = NaN, a$1 = NaN;
		return function(n$2) {
			if (isNaN(i$2) && !(n$2.type & _.MOVE_TO)) throw new Error("path must start with moveto");
			var o$1 = t$2(n$2, r$2, e$2, i$2, a$1);
			return n$2.type & _.CLOSE_PATH && (r$2 = i$2, e$2 = a$1), void 0 !== n$2.x && (r$2 = n$2.relative ? r$2 + n$2.x : n$2.x), void 0 !== n$2.y && (e$2 = n$2.relative ? e$2 + n$2.y : n$2.y), n$2.type & _.MOVE_TO && (i$2 = r$2, a$1 = e$2), o$1;
		};
	}
	function O$1(t$2, r$2, e$2, i$2, n$2, o$1) {
		return a(t$2, r$2, e$2, i$2, n$2, o$1), u$1((function(a$1, s$1, u$2, h$1) {
			var c$2 = a$1.x1, y$1 = a$1.x2, p$1 = a$1.relative && !isNaN(h$1), m$2 = void 0 !== a$1.x ? a$1.x : p$1 ? 0 : s$1, O$2 = void 0 !== a$1.y ? a$1.y : p$1 ? 0 : u$2;
			function l$2(t$3) {
				return t$3 * t$3;
			}
			a$1.type & _.HORIZ_LINE_TO && 0 !== r$2 && (a$1.type = _.LINE_TO, a$1.y = a$1.relative ? 0 : u$2), a$1.type & _.VERT_LINE_TO && 0 !== e$2 && (a$1.type = _.LINE_TO, a$1.x = a$1.relative ? 0 : s$1), void 0 !== a$1.x && (a$1.x = a$1.x * t$2 + O$2 * e$2 + (p$1 ? 0 : n$2)), void 0 !== a$1.y && (a$1.y = m$2 * r$2 + a$1.y * i$2 + (p$1 ? 0 : o$1)), void 0 !== a$1.x1 && (a$1.x1 = a$1.x1 * t$2 + a$1.y1 * e$2 + (p$1 ? 0 : n$2)), void 0 !== a$1.y1 && (a$1.y1 = c$2 * r$2 + a$1.y1 * i$2 + (p$1 ? 0 : o$1)), void 0 !== a$1.x2 && (a$1.x2 = a$1.x2 * t$2 + a$1.y2 * e$2 + (p$1 ? 0 : n$2)), void 0 !== a$1.y2 && (a$1.y2 = y$1 * r$2 + a$1.y2 * i$2 + (p$1 ? 0 : o$1));
			var T$1 = t$2 * i$2 - r$2 * e$2;
			if (void 0 !== a$1.xRot && (1 !== t$2 || 0 !== r$2 || 0 !== e$2 || 1 !== i$2)) if (0 === T$1) delete a$1.rX, delete a$1.rY, delete a$1.xRot, delete a$1.lArcFlag, delete a$1.sweepFlag, a$1.type = _.LINE_TO;
			else {
				var v$1 = a$1.xRot * Math.PI / 180, f$1 = Math.sin(v$1), N$1 = Math.cos(v$1), x = 1 / l$2(a$1.rX), d = 1 / l$2(a$1.rY), E = l$2(N$1) * x + l$2(f$1) * d, A = 2 * f$1 * N$1 * (x - d), C = l$2(f$1) * x + l$2(N$1) * d, M = E * i$2 * i$2 - A * r$2 * i$2 + C * r$2 * r$2, R = A * (t$2 * i$2 + r$2 * e$2) - 2 * (E * e$2 * i$2 + C * t$2 * r$2), g = E * e$2 * e$2 - A * t$2 * e$2 + C * t$2 * t$2, I = (Math.atan2(R, M - g) + Math.PI) % Math.PI / 2, S = Math.sin(I), L = Math.cos(I);
				a$1.rX = Math.abs(T$1) / Math.sqrt(M * l$2(L) + R * S * L + g * l$2(S)), a$1.rY = Math.abs(T$1) / Math.sqrt(M * l$2(S) - R * S * L + g * l$2(L)), a$1.xRot = 180 * I / Math.PI;
			}
			return void 0 !== a$1.sweepFlag && 0 > T$1 && (a$1.sweepFlag = +!a$1.sweepFlag), a$1;
		}));
	}
	function l$1() {
		return function(t$2) {
			var r$2 = {};
			for (var e$2 in t$2) r$2[e$2] = t$2[e$2];
			return r$2;
		};
	}
	t$1.ROUND = function(t$2) {
		function r$2(r$3) {
			return Math.round(r$3 * t$2) / t$2;
		}
		return void 0 === t$2 && (t$2 = 0x9184e72a000), a(t$2), function(t$3) {
			return void 0 !== t$3.x1 && (t$3.x1 = r$2(t$3.x1)), void 0 !== t$3.y1 && (t$3.y1 = r$2(t$3.y1)), void 0 !== t$3.x2 && (t$3.x2 = r$2(t$3.x2)), void 0 !== t$3.y2 && (t$3.y2 = r$2(t$3.y2)), void 0 !== t$3.x && (t$3.x = r$2(t$3.x)), void 0 !== t$3.y && (t$3.y = r$2(t$3.y)), void 0 !== t$3.rX && (t$3.rX = r$2(t$3.rX)), void 0 !== t$3.rY && (t$3.rY = r$2(t$3.rY)), t$3;
		};
	}, t$1.TO_ABS = r$1, t$1.TO_REL = function() {
		return u$1((function(t$2, r$2, e$2) {
			return t$2.relative || (void 0 !== t$2.x1 && (t$2.x1 -= r$2), void 0 !== t$2.y1 && (t$2.y1 -= e$2), void 0 !== t$2.x2 && (t$2.x2 -= r$2), void 0 !== t$2.y2 && (t$2.y2 -= e$2), void 0 !== t$2.x && (t$2.x -= r$2), void 0 !== t$2.y && (t$2.y -= e$2), t$2.relative = !0), t$2;
		}));
	}, t$1.NORMALIZE_HVZ = function(t$2, r$2, e$2) {
		return void 0 === t$2 && (t$2 = !0), void 0 === r$2 && (r$2 = !0), void 0 === e$2 && (e$2 = !0), u$1((function(i$2, a$1, n$2, o$1, s$1) {
			if (isNaN(o$1) && !(i$2.type & _.MOVE_TO)) throw new Error("path must start with moveto");
			return r$2 && i$2.type & _.HORIZ_LINE_TO && (i$2.type = _.LINE_TO, i$2.y = i$2.relative ? 0 : n$2), e$2 && i$2.type & _.VERT_LINE_TO && (i$2.type = _.LINE_TO, i$2.x = i$2.relative ? 0 : a$1), t$2 && i$2.type & _.CLOSE_PATH && (i$2.type = _.LINE_TO, i$2.x = i$2.relative ? o$1 - a$1 : o$1, i$2.y = i$2.relative ? s$1 - n$2 : s$1), i$2.type & _.ARC && (0 === i$2.rX || 0 === i$2.rY) && (i$2.type = _.LINE_TO, delete i$2.rX, delete i$2.rY, delete i$2.xRot, delete i$2.lArcFlag, delete i$2.sweepFlag), i$2;
		}));
	}, t$1.NORMALIZE_ST = e$1, t$1.QT_TO_C = n$1, t$1.INFO = u$1, t$1.SANITIZE = function(t$2) {
		void 0 === t$2 && (t$2 = 0), a(t$2);
		var r$2 = NaN, e$2 = NaN, i$2 = NaN, n$2 = NaN;
		return u$1((function(a$1, o$1, s$1, u$2, h$1) {
			var c$2 = Math.abs, y$1 = !1, p$1 = 0, m$2 = 0;
			if (a$1.type & _.SMOOTH_CURVE_TO && (p$1 = isNaN(r$2) ? 0 : o$1 - r$2, m$2 = isNaN(e$2) ? 0 : s$1 - e$2), a$1.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (r$2 = a$1.relative ? o$1 + a$1.x2 : a$1.x2, e$2 = a$1.relative ? s$1 + a$1.y2 : a$1.y2) : (r$2 = NaN, e$2 = NaN), a$1.type & _.SMOOTH_QUAD_TO ? (i$2 = isNaN(i$2) ? o$1 : 2 * o$1 - i$2, n$2 = isNaN(n$2) ? s$1 : 2 * s$1 - n$2) : a$1.type & _.QUAD_TO ? (i$2 = a$1.relative ? o$1 + a$1.x1 : a$1.x1, n$2 = a$1.relative ? s$1 + a$1.y1 : a$1.y2) : (i$2 = NaN, n$2 = NaN), a$1.type & _.LINE_COMMANDS || a$1.type & _.ARC && (0 === a$1.rX || 0 === a$1.rY || !a$1.lArcFlag) || a$1.type & _.CURVE_TO || a$1.type & _.SMOOTH_CURVE_TO || a$1.type & _.QUAD_TO || a$1.type & _.SMOOTH_QUAD_TO) {
				var O$2 = void 0 === a$1.x ? 0 : a$1.relative ? a$1.x : a$1.x - o$1, l$2 = void 0 === a$1.y ? 0 : a$1.relative ? a$1.y : a$1.y - s$1;
				p$1 = isNaN(i$2) ? void 0 === a$1.x1 ? p$1 : a$1.relative ? a$1.x : a$1.x1 - o$1 : i$2 - o$1, m$2 = isNaN(n$2) ? void 0 === a$1.y1 ? m$2 : a$1.relative ? a$1.y : a$1.y1 - s$1 : n$2 - s$1;
				var T$1 = void 0 === a$1.x2 ? 0 : a$1.relative ? a$1.x : a$1.x2 - o$1, v$1 = void 0 === a$1.y2 ? 0 : a$1.relative ? a$1.y : a$1.y2 - s$1;
				c$2(O$2) <= t$2 && c$2(l$2) <= t$2 && c$2(p$1) <= t$2 && c$2(m$2) <= t$2 && c$2(T$1) <= t$2 && c$2(v$1) <= t$2 && (y$1 = !0);
			}
			return a$1.type & _.CLOSE_PATH && c$2(o$1 - u$2) <= t$2 && c$2(s$1 - h$1) <= t$2 && (y$1 = !0), y$1 ? [] : a$1;
		}));
	}, t$1.MATRIX = O$1, t$1.ROTATE = function(t$2, r$2, e$2) {
		void 0 === r$2 && (r$2 = 0), void 0 === e$2 && (e$2 = 0), a(t$2, r$2, e$2);
		var i$2 = Math.sin(t$2), n$2 = Math.cos(t$2);
		return O$1(n$2, i$2, -i$2, n$2, r$2 - r$2 * n$2 + e$2 * i$2, e$2 - r$2 * i$2 - e$2 * n$2);
	}, t$1.TRANSLATE = function(t$2, r$2) {
		return void 0 === r$2 && (r$2 = 0), a(t$2, r$2), O$1(1, 0, 0, 1, t$2, r$2);
	}, t$1.SCALE = function(t$2, r$2) {
		return void 0 === r$2 && (r$2 = t$2), a(t$2, r$2), O$1(t$2, 0, 0, r$2, 0, 0);
	}, t$1.SKEW_X = function(t$2) {
		return a(t$2), O$1(1, 0, Math.atan(t$2), 1, 0, 0);
	}, t$1.SKEW_Y = function(t$2) {
		return a(t$2), O$1(1, Math.atan(t$2), 0, 1, 0, 0);
	}, t$1.X_AXIS_SYMMETRY = function(t$2) {
		return void 0 === t$2 && (t$2 = 0), a(t$2), O$1(-1, 0, 0, 1, t$2, 0);
	}, t$1.Y_AXIS_SYMMETRY = function(t$2) {
		return void 0 === t$2 && (t$2 = 0), a(t$2), O$1(1, 0, 0, -1, 0, t$2);
	}, t$1.A_TO_C = function() {
		return u$1((function(t$2, r$2, e$2) {
			return _.ARC === t$2.type ? function(t$3, r$3, e$3) {
				var a$1, n$2, s$1, u$2;
				t$3.cX || o(t$3, r$3, e$3);
				for (var y$1 = Math.min(t$3.phi1, t$3.phi2), p$1 = Math.max(t$3.phi1, t$3.phi2) - y$1, m$2 = Math.ceil(p$1 / 90), O$2 = new Array(m$2), l$2 = r$3, T$1 = e$3, v$1 = 0; v$1 < m$2; v$1++) {
					var f$1 = c$1(t$3.phi1, t$3.phi2, v$1 / m$2), N$1 = c$1(t$3.phi1, t$3.phi2, (v$1 + 1) / m$2), x = N$1 - f$1, d = 4 / 3 * Math.tan(x * h / 4), E = [Math.cos(f$1 * h) - d * Math.sin(f$1 * h), Math.sin(f$1 * h) + d * Math.cos(f$1 * h)], A = E[0], C = E[1], M = [Math.cos(N$1 * h), Math.sin(N$1 * h)], R = M[0], g = M[1], I = [R + d * Math.sin(N$1 * h), g - d * Math.cos(N$1 * h)], S = I[0], L = I[1];
					O$2[v$1] = {
						relative: t$3.relative,
						type: _.CURVE_TO
					};
					var H = function(r$4, e$4) {
						var a$2 = i([r$4 * t$3.rX, e$4 * t$3.rY], t$3.xRot), n$3 = a$2[0], o$1 = a$2[1];
						return [t$3.cX + n$3, t$3.cY + o$1];
					};
					a$1 = H(A, C), O$2[v$1].x1 = a$1[0], O$2[v$1].y1 = a$1[1], n$2 = H(S, L), O$2[v$1].x2 = n$2[0], O$2[v$1].y2 = n$2[1], s$1 = H(R, g), O$2[v$1].x = s$1[0], O$2[v$1].y = s$1[1], t$3.relative && (O$2[v$1].x1 -= l$2, O$2[v$1].y1 -= T$1, O$2[v$1].x2 -= l$2, O$2[v$1].y2 -= T$1, O$2[v$1].x -= l$2, O$2[v$1].y -= T$1), l$2 = (u$2 = [O$2[v$1].x, O$2[v$1].y])[0], T$1 = u$2[1];
				}
				return O$2;
			}(t$2, t$2.relative ? 0 : r$2, t$2.relative ? 0 : e$2) : t$2;
		}));
	}, t$1.ANNOTATE_ARCS = function() {
		return u$1((function(t$2, r$2, e$2) {
			return t$2.relative && (r$2 = 0, e$2 = 0), _.ARC === t$2.type && o(t$2, r$2, e$2), t$2;
		}));
	}, t$1.CLONE = l$1, t$1.CALCULATE_BOUNDS = function() {
		var t$2 = function(t$3) {
			var r$2 = {};
			for (var e$2 in t$3) r$2[e$2] = t$3[e$2];
			return r$2;
		}, i$2 = r$1(), a$1 = n$1(), h$1 = e$1(), c$2 = u$1((function(r$2, e$2, n$2) {
			var u$2 = h$1(a$1(i$2(t$2(r$2))));
			function O$2(t$3) {
				t$3 > c$2.maxX && (c$2.maxX = t$3), t$3 < c$2.minX && (c$2.minX = t$3);
			}
			function l$2(t$3) {
				t$3 > c$2.maxY && (c$2.maxY = t$3), t$3 < c$2.minY && (c$2.minY = t$3);
			}
			if (u$2.type & _.DRAWING_COMMANDS && (O$2(e$2), l$2(n$2)), u$2.type & _.HORIZ_LINE_TO && O$2(u$2.x), u$2.type & _.VERT_LINE_TO && l$2(u$2.y), u$2.type & _.LINE_TO && (O$2(u$2.x), l$2(u$2.y)), u$2.type & _.CURVE_TO) {
				O$2(u$2.x), l$2(u$2.y);
				for (var T$1 = 0, v$1 = p(e$2, u$2.x1, u$2.x2, u$2.x); T$1 < v$1.length; T$1++) 0 < (w = v$1[T$1]) && 1 > w && O$2(m$1(e$2, u$2.x1, u$2.x2, u$2.x, w));
				for (var f$1 = 0, N$1 = p(n$2, u$2.y1, u$2.y2, u$2.y); f$1 < N$1.length; f$1++) 0 < (w = N$1[f$1]) && 1 > w && l$2(m$1(n$2, u$2.y1, u$2.y2, u$2.y, w));
			}
			if (u$2.type & _.ARC) {
				O$2(u$2.x), l$2(u$2.y), o(u$2, e$2, n$2);
				for (var x = u$2.xRot / 180 * Math.PI, d = Math.cos(x) * u$2.rX, E = Math.sin(x) * u$2.rX, A = -Math.sin(x) * u$2.rY, C = Math.cos(x) * u$2.rY, M = u$2.phi1 < u$2.phi2 ? [u$2.phi1, u$2.phi2] : -180 > u$2.phi2 ? [u$2.phi2 + 360, u$2.phi1 + 360] : [u$2.phi2, u$2.phi1], R = M[0], g = M[1], I = function(t$3) {
					var r$3 = t$3[0], e$3 = t$3[1], i$3 = 180 * Math.atan2(e$3, r$3) / Math.PI;
					return i$3 < R ? i$3 + 360 : i$3;
				}, S = 0, L = s(A, -d, 0).map(I); S < L.length; S++) (w = L[S]) > R && w < g && O$2(y(u$2.cX, d, A, w));
				for (var H = 0, U = s(C, -E, 0).map(I); H < U.length; H++) {
					var w;
					(w = U[H]) > R && w < g && l$2(y(u$2.cY, E, C, w));
				}
			}
			return r$2;
		}));
		return c$2.minX = Infinity, c$2.maxX = -Infinity, c$2.minY = Infinity, c$2.maxY = -Infinity, c$2;
	};
})(u || (u = {}));
var O, l = function() {
	function t$1() {}
	return t$1.prototype.round = function(t$2) {
		return this.transform(u.ROUND(t$2));
	}, t$1.prototype.toAbs = function() {
		return this.transform(u.TO_ABS());
	}, t$1.prototype.toRel = function() {
		return this.transform(u.TO_REL());
	}, t$1.prototype.normalizeHVZ = function(t$2, r$1, e$1) {
		return this.transform(u.NORMALIZE_HVZ(t$2, r$1, e$1));
	}, t$1.prototype.normalizeST = function() {
		return this.transform(u.NORMALIZE_ST());
	}, t$1.prototype.qtToC = function() {
		return this.transform(u.QT_TO_C());
	}, t$1.prototype.aToC = function() {
		return this.transform(u.A_TO_C());
	}, t$1.prototype.sanitize = function(t$2) {
		return this.transform(u.SANITIZE(t$2));
	}, t$1.prototype.translate = function(t$2, r$1) {
		return this.transform(u.TRANSLATE(t$2, r$1));
	}, t$1.prototype.scale = function(t$2, r$1) {
		return this.transform(u.SCALE(t$2, r$1));
	}, t$1.prototype.rotate = function(t$2, r$1, e$1) {
		return this.transform(u.ROTATE(t$2, r$1, e$1));
	}, t$1.prototype.matrix = function(t$2, r$1, e$1, i$2, a$1, n$1) {
		return this.transform(u.MATRIX(t$2, r$1, e$1, i$2, a$1, n$1));
	}, t$1.prototype.skewX = function(t$2) {
		return this.transform(u.SKEW_X(t$2));
	}, t$1.prototype.skewY = function(t$2) {
		return this.transform(u.SKEW_Y(t$2));
	}, t$1.prototype.xSymmetry = function(t$2) {
		return this.transform(u.X_AXIS_SYMMETRY(t$2));
	}, t$1.prototype.ySymmetry = function(t$2) {
		return this.transform(u.Y_AXIS_SYMMETRY(t$2));
	}, t$1.prototype.annotateArcs = function() {
		return this.transform(u.ANNOTATE_ARCS());
	}, t$1;
}(), T = function(t$1) {
	return " " === t$1 || "	" === t$1 || "\r" === t$1 || "\n" === t$1;
}, v = function(t$1) {
	return "0".charCodeAt(0) <= t$1.charCodeAt(0) && t$1.charCodeAt(0) <= "9".charCodeAt(0);
}, f = function(t$1) {
	function e$1() {
		var r$1 = t$1.call(this) || this;
		return r$1.curNumber = "", r$1.curCommandType = -1, r$1.curCommandRelative = !1, r$1.canParseCommandOrComma = !0, r$1.curNumberHasExp = !1, r$1.curNumberHasExpDigits = !1, r$1.curNumberHasDecimal = !1, r$1.curArgs = [], r$1;
	}
	return r(e$1, t$1), e$1.prototype.finish = function(t$2) {
		if (void 0 === t$2 && (t$2 = []), this.parse(" ", t$2), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
		return t$2;
	}, e$1.prototype.parse = function(t$2, r$1) {
		var e$2 = this;
		void 0 === r$1 && (r$1 = []);
		for (var i$2 = function(t$3) {
			r$1.push(t$3), e$2.curArgs.length = 0, e$2.canParseCommandOrComma = !0;
		}, a$1 = 0; a$1 < t$2.length; a$1++) {
			var n$1 = t$2[a$1], o$1 = !(this.curCommandType !== _.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber), s$1 = v(n$1) && ("0" === this.curNumber && "0" === n$1 || o$1);
			if (!v(n$1) || s$1) if ("e" !== n$1 && "E" !== n$1) if ("-" !== n$1 && "+" !== n$1 || !this.curNumberHasExp || this.curNumberHasExpDigits) if ("." !== n$1 || this.curNumberHasExp || this.curNumberHasDecimal || o$1) {
				if (this.curNumber && -1 !== this.curCommandType) {
					var u$1 = Number(this.curNumber);
					if (isNaN(u$1)) throw new SyntaxError("Invalid number ending at " + a$1);
					if (this.curCommandType === _.ARC) {
						if (0 === this.curArgs.length || 1 === this.curArgs.length) {
							if (0 > u$1) throw new SyntaxError("Expected positive number, got \"" + u$1 + "\" at index \"" + a$1 + "\"");
						} else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError("Expected a flag, got \"" + this.curNumber + "\" at index \"" + a$1 + "\"");
					}
					this.curArgs.push(u$1), this.curArgs.length === N[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? i$2({
						type: _.HORIZ_LINE_TO,
						relative: this.curCommandRelative,
						x: u$1
					}) : _.VERT_LINE_TO === this.curCommandType ? i$2({
						type: _.VERT_LINE_TO,
						relative: this.curCommandRelative,
						y: u$1
					}) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (i$2({
						type: this.curCommandType,
						relative: this.curCommandRelative,
						x: this.curArgs[0],
						y: this.curArgs[1]
					}), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? i$2({
						type: _.CURVE_TO,
						relative: this.curCommandRelative,
						x1: this.curArgs[0],
						y1: this.curArgs[1],
						x2: this.curArgs[2],
						y2: this.curArgs[3],
						x: this.curArgs[4],
						y: this.curArgs[5]
					}) : this.curCommandType === _.SMOOTH_CURVE_TO ? i$2({
						type: _.SMOOTH_CURVE_TO,
						relative: this.curCommandRelative,
						x2: this.curArgs[0],
						y2: this.curArgs[1],
						x: this.curArgs[2],
						y: this.curArgs[3]
					}) : this.curCommandType === _.QUAD_TO ? i$2({
						type: _.QUAD_TO,
						relative: this.curCommandRelative,
						x1: this.curArgs[0],
						y1: this.curArgs[1],
						x: this.curArgs[2],
						y: this.curArgs[3]
					}) : this.curCommandType === _.ARC && i$2({
						type: _.ARC,
						relative: this.curCommandRelative,
						rX: this.curArgs[0],
						rY: this.curArgs[1],
						xRot: this.curArgs[2],
						lArcFlag: this.curArgs[3],
						sweepFlag: this.curArgs[4],
						x: this.curArgs[5],
						y: this.curArgs[6]
					})), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
				}
				if (!T(n$1)) if ("," === n$1 && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
				else if ("+" !== n$1 && "-" !== n$1 && "." !== n$1) if (s$1) this.curNumber = n$1, this.curNumberHasDecimal = !1;
				else {
					if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + a$1 + ".");
					if (!this.canParseCommandOrComma) throw new SyntaxError("Unexpected character \"" + n$1 + "\" at index " + a$1 + ". Command cannot follow comma");
					if (this.canParseCommandOrComma = !1, "z" !== n$1 && "Z" !== n$1) if ("h" === n$1 || "H" === n$1) this.curCommandType = _.HORIZ_LINE_TO, this.curCommandRelative = "h" === n$1;
					else if ("v" === n$1 || "V" === n$1) this.curCommandType = _.VERT_LINE_TO, this.curCommandRelative = "v" === n$1;
					else if ("m" === n$1 || "M" === n$1) this.curCommandType = _.MOVE_TO, this.curCommandRelative = "m" === n$1;
					else if ("l" === n$1 || "L" === n$1) this.curCommandType = _.LINE_TO, this.curCommandRelative = "l" === n$1;
					else if ("c" === n$1 || "C" === n$1) this.curCommandType = _.CURVE_TO, this.curCommandRelative = "c" === n$1;
					else if ("s" === n$1 || "S" === n$1) this.curCommandType = _.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n$1;
					else if ("q" === n$1 || "Q" === n$1) this.curCommandType = _.QUAD_TO, this.curCommandRelative = "q" === n$1;
					else if ("t" === n$1 || "T" === n$1) this.curCommandType = _.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n$1;
					else {
						if ("a" !== n$1 && "A" !== n$1) throw new SyntaxError("Unexpected character \"" + n$1 + "\" at index " + a$1 + ".");
						this.curCommandType = _.ARC, this.curCommandRelative = "a" === n$1;
					}
					else r$1.push({ type: _.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
				}
				else this.curNumber = n$1, this.curNumberHasDecimal = "." === n$1;
			} else this.curNumber += n$1, this.curNumberHasDecimal = !0;
			else this.curNumber += n$1;
			else this.curNumber += n$1, this.curNumberHasExp = !0;
			else this.curNumber += n$1, this.curNumberHasExpDigits = this.curNumberHasExp;
		}
		return r$1;
	}, e$1.prototype.transform = function(t$2) {
		return Object.create(this, { parse: { value: function(r$1, e$2) {
			void 0 === e$2 && (e$2 = []);
			for (var i$2 = 0, a$1 = Object.getPrototypeOf(this).parse.call(this, r$1); i$2 < a$1.length; i$2++) {
				var n$1 = a$1[i$2], o$1 = t$2(n$1);
				Array.isArray(o$1) ? e$2.push.apply(e$2, o$1) : e$2.push(o$1);
			}
			return e$2;
		} } });
	}, e$1;
}(l), _ = function(t$1) {
	function i$2(r$1) {
		var e$1 = t$1.call(this) || this;
		return e$1.commands = "string" == typeof r$1 ? i$2.parse(r$1) : r$1, e$1;
	}
	return r(i$2, t$1), i$2.prototype.encode = function() {
		return i$2.encode(this.commands);
	}, i$2.prototype.getBounds = function() {
		var t$2 = u.CALCULATE_BOUNDS();
		return this.transform(t$2), t$2;
	}, i$2.prototype.transform = function(t$2) {
		for (var r$1 = [], e$1 = 0, i$3 = this.commands; e$1 < i$3.length; e$1++) {
			var a$1 = t$2(i$3[e$1]);
			Array.isArray(a$1) ? r$1.push.apply(r$1, a$1) : r$1.push(a$1);
		}
		return this.commands = r$1, this;
	}, i$2.encode = function(t$2) {
		return e(t$2);
	}, i$2.parse = function(t$2) {
		var r$1 = new f(), e$1 = [];
		return r$1.parse(t$2, e$1), r$1.finish(e$1), e$1;
	}, i$2.CLOSE_PATH = 1, i$2.MOVE_TO = 2, i$2.HORIZ_LINE_TO = 4, i$2.VERT_LINE_TO = 8, i$2.LINE_TO = 16, i$2.CURVE_TO = 32, i$2.SMOOTH_CURVE_TO = 64, i$2.QUAD_TO = 128, i$2.SMOOTH_QUAD_TO = 256, i$2.ARC = 512, i$2.LINE_COMMANDS = i$2.LINE_TO | i$2.HORIZ_LINE_TO | i$2.VERT_LINE_TO, i$2.DRAWING_COMMANDS = i$2.HORIZ_LINE_TO | i$2.VERT_LINE_TO | i$2.LINE_TO | i$2.CURVE_TO | i$2.SMOOTH_CURVE_TO | i$2.QUAD_TO | i$2.SMOOTH_QUAD_TO | i$2.ARC, i$2;
}(l), N = ((O = {})[_.MOVE_TO] = 2, O[_.LINE_TO] = 2, O[_.HORIZ_LINE_TO] = 1, O[_.VERT_LINE_TO] = 1, O[_.CLOSE_PATH] = 0, O[_.QUAD_TO] = 4, O[_.SMOOTH_QUAD_TO] = 2, O[_.CURVE_TO] = 6, O[_.SMOOTH_CURVE_TO] = 4, O[_.ARC] = 7, O);

//#endregion
//#region node_modules/core-js/modules/es.regexp.to-string.js
var PROPER_FUNCTION_NAME = require_function_name().PROPER;
var defineBuiltIn = require_define_built_in();
var anObject = require_an_object();
var $toString = require_to_string();
var fails = require_fails();
var getRegExpFlags = require_regexp_get_flags();
var TO_STRING = "toString";
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function() {
	return nativeToString.call({
		source: "a",
		flags: "b"
	}) !== "/a/b";
});
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;
if (NOT_GENERIC || INCORRECT_NAME) defineBuiltIn(RegExpPrototype, TO_STRING, function toString$11() {
	var R = anObject(this);
	var pattern = $toString(R.source);
	var flags = $toString(getRegExpFlags(R));
	return "/" + pattern + "/" + flags;
}, { unsafe: true });

//#endregion
//#region node_modules/stackblur-canvas/dist/stackblur-es.js
function _typeof(obj) {
	"@babel/helpers - typeof";
	if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj$1) {
		return typeof obj$1;
	};
	else _typeof = function(obj$1) {
		return obj$1 && typeof Symbol === "function" && obj$1.constructor === Symbol && obj$1 !== Symbol.prototype ? "symbol" : typeof obj$1;
	};
	return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
/**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
*
* @module StackBlur
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
var mulTable = [
	512,
	512,
	456,
	512,
	328,
	456,
	335,
	512,
	405,
	328,
	271,
	456,
	388,
	335,
	292,
	512,
	454,
	405,
	364,
	328,
	298,
	271,
	496,
	456,
	420,
	388,
	360,
	335,
	312,
	292,
	273,
	512,
	482,
	454,
	428,
	405,
	383,
	364,
	345,
	328,
	312,
	298,
	284,
	271,
	259,
	496,
	475,
	456,
	437,
	420,
	404,
	388,
	374,
	360,
	347,
	335,
	323,
	312,
	302,
	292,
	282,
	273,
	265,
	512,
	497,
	482,
	468,
	454,
	441,
	428,
	417,
	405,
	394,
	383,
	373,
	364,
	354,
	345,
	337,
	328,
	320,
	312,
	305,
	298,
	291,
	284,
	278,
	271,
	265,
	259,
	507,
	496,
	485,
	475,
	465,
	456,
	446,
	437,
	428,
	420,
	412,
	404,
	396,
	388,
	381,
	374,
	367,
	360,
	354,
	347,
	341,
	335,
	329,
	323,
	318,
	312,
	307,
	302,
	297,
	292,
	287,
	282,
	278,
	273,
	269,
	265,
	261,
	512,
	505,
	497,
	489,
	482,
	475,
	468,
	461,
	454,
	447,
	441,
	435,
	428,
	422,
	417,
	411,
	405,
	399,
	394,
	389,
	383,
	378,
	373,
	368,
	364,
	359,
	354,
	350,
	345,
	341,
	337,
	332,
	328,
	324,
	320,
	316,
	312,
	309,
	305,
	301,
	298,
	294,
	291,
	287,
	284,
	281,
	278,
	274,
	271,
	268,
	265,
	262,
	259,
	257,
	507,
	501,
	496,
	491,
	485,
	480,
	475,
	470,
	465,
	460,
	456,
	451,
	446,
	442,
	437,
	433,
	428,
	424,
	420,
	416,
	412,
	408,
	404,
	400,
	396,
	392,
	388,
	385,
	381,
	377,
	374,
	370,
	367,
	363,
	360,
	357,
	354,
	350,
	347,
	344,
	341,
	338,
	335,
	332,
	329,
	326,
	323,
	320,
	318,
	315,
	312,
	310,
	307,
	304,
	302,
	299,
	297,
	294,
	292,
	289,
	287,
	285,
	282,
	280,
	278,
	275,
	273,
	271,
	269,
	267,
	265,
	263,
	261,
	259
];
var shgTable = [
	9,
	11,
	12,
	13,
	13,
	14,
	14,
	15,
	15,
	15,
	15,
	16,
	16,
	16,
	16,
	17,
	17,
	17,
	17,
	17,
	17,
	17,
	18,
	18,
	18,
	18,
	18,
	18,
	18,
	18,
	18,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	19,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	21,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	22,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	23,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24,
	24
];
/**
* @param {string|HTMLCanvasElement} canvas
* @param {Integer} topX
* @param {Integer} topY
* @param {Integer} width
* @param {Integer} height
* @throws {Error|TypeError}
* @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
*/
function getImageDataFromCanvas(canvas, topX, topY, width, height) {
	if (typeof canvas === "string") canvas = document.getElementById(canvas);
	if (!canvas || _typeof(canvas) !== "object" || !("getContext" in canvas)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
	var context = canvas.getContext("2d");
	try {
		return context.getImageData(topX, topY, width, height);
	} catch (e$1) {
		throw new Error("unable to access image data: " + e$1);
	}
}
/**
* @param {HTMLCanvasElement} canvas
* @param {Integer} topX
* @param {Integer} topY
* @param {Integer} width
* @param {Integer} height
* @param {Float} radius
* @returns {undefined}
*/
function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
	if (isNaN(radius) || radius < 1) return;
	radius |= 0;
	var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
	imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
	canvas.getContext("2d").putImageData(imageData, topX, topY);
}
/**
* @param {ImageData} imageData
* @param {Integer} topX
* @param {Integer} topY
* @param {Integer} width
* @param {Integer} height
* @param {Float} radius
* @returns {ImageData}
*/
function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
	var pixels = imageData.data;
	var div = 2 * radius + 1;
	var widthMinus1 = width - 1;
	var heightMinus1 = height - 1;
	var radiusPlus1 = radius + 1;
	var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
	var stackStart = new BlurStack();
	var stack = stackStart;
	var stackEnd;
	for (var i$2 = 1; i$2 < div; i$2++) {
		stack = stack.next = new BlurStack();
		if (i$2 === radiusPlus1) stackEnd = stack;
	}
	stack.next = stackStart;
	var stackIn = null, stackOut = null, yw = 0, yi = 0;
	var mulSum = mulTable[radius];
	var shgSum = shgTable[radius];
	for (var y$1 = 0; y$1 < height; y$1++) {
		stack = stackStart;
		var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], pa = pixels[yi + 3];
		for (var _i = 0; _i < radiusPlus1; _i++) {
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack.a = pa;
			stack = stack.next;
		}
		var rInSum = 0, gInSum = 0, bInSum = 0, aInSum = 0, rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, aOutSum = radiusPlus1 * pa, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb, aSum = sumFactor * pa;
		for (var _i2 = 1; _i2 < radiusPlus1; _i2++) {
			var p$1 = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
			var r$1 = pixels[p$1], g = pixels[p$1 + 1], b = pixels[p$1 + 2], a$1 = pixels[p$1 + 3];
			var rbs = radiusPlus1 - _i2;
			rSum += (stack.r = r$1) * rbs;
			gSum += (stack.g = g) * rbs;
			bSum += (stack.b = b) * rbs;
			aSum += (stack.a = a$1) * rbs;
			rInSum += r$1;
			gInSum += g;
			bInSum += b;
			aInSum += a$1;
			stack = stack.next;
		}
		stackIn = stackStart;
		stackOut = stackEnd;
		for (var x = 0; x < width; x++) {
			var paInitial = aSum * mulSum >>> shgSum;
			pixels[yi + 3] = paInitial;
			if (paInitial !== 0) {
				var _a2 = 255 / paInitial;
				pixels[yi] = (rSum * mulSum >>> shgSum) * _a2;
				pixels[yi + 1] = (gSum * mulSum >>> shgSum) * _a2;
				pixels[yi + 2] = (bSum * mulSum >>> shgSum) * _a2;
			} else pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
			rSum -= rOutSum;
			gSum -= gOutSum;
			bSum -= bOutSum;
			aSum -= aOutSum;
			rOutSum -= stackIn.r;
			gOutSum -= stackIn.g;
			bOutSum -= stackIn.b;
			aOutSum -= stackIn.a;
			var _p = x + radius + 1;
			_p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
			rInSum += stackIn.r = pixels[_p];
			gInSum += stackIn.g = pixels[_p + 1];
			bInSum += stackIn.b = pixels[_p + 2];
			aInSum += stackIn.a = pixels[_p + 3];
			rSum += rInSum;
			gSum += gInSum;
			bSum += bInSum;
			aSum += aInSum;
			stackIn = stackIn.next;
			var _stackOut = stackOut, _r = _stackOut.r, _g = _stackOut.g, _b = _stackOut.b, _a = _stackOut.a;
			rOutSum += _r;
			gOutSum += _g;
			bOutSum += _b;
			aOutSum += _a;
			rInSum -= _r;
			gInSum -= _g;
			bInSum -= _b;
			aInSum -= _a;
			stackOut = stackOut.next;
			yi += 4;
		}
		yw += width;
	}
	for (var _x = 0; _x < width; _x++) {
		yi = _x << 2;
		var _pr = pixels[yi], _pg = pixels[yi + 1], _pb = pixels[yi + 2], _pa = pixels[yi + 3], _rOutSum = radiusPlus1 * _pr, _gOutSum = radiusPlus1 * _pg, _bOutSum = radiusPlus1 * _pb, _aOutSum = radiusPlus1 * _pa, _rSum = sumFactor * _pr, _gSum = sumFactor * _pg, _bSum = sumFactor * _pb, _aSum = sumFactor * _pa;
		stack = stackStart;
		for (var _i3 = 0; _i3 < radiusPlus1; _i3++) {
			stack.r = _pr;
			stack.g = _pg;
			stack.b = _pb;
			stack.a = _pa;
			stack = stack.next;
		}
		var yp = width;
		var _gInSum = 0, _bInSum = 0, _aInSum = 0, _rInSum = 0;
		for (var _i4 = 1; _i4 <= radius; _i4++) {
			yi = yp + _x << 2;
			var _rbs = radiusPlus1 - _i4;
			_rSum += (stack.r = _pr = pixels[yi]) * _rbs;
			_gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
			_bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
			_aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
			_rInSum += _pr;
			_gInSum += _pg;
			_bInSum += _pb;
			_aInSum += _pa;
			stack = stack.next;
			if (_i4 < heightMinus1) yp += width;
		}
		yi = _x;
		stackIn = stackStart;
		stackOut = stackEnd;
		for (var _y = 0; _y < height; _y++) {
			var _p2 = yi << 2;
			pixels[_p2 + 3] = _pa = _aSum * mulSum >>> shgSum;
			if (_pa > 0) {
				_pa = 255 / _pa;
				pixels[_p2] = (_rSum * mulSum >>> shgSum) * _pa;
				pixels[_p2 + 1] = (_gSum * mulSum >>> shgSum) * _pa;
				pixels[_p2 + 2] = (_bSum * mulSum >>> shgSum) * _pa;
			} else pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
			_rSum -= _rOutSum;
			_gSum -= _gOutSum;
			_bSum -= _bOutSum;
			_aSum -= _aOutSum;
			_rOutSum -= stackIn.r;
			_gOutSum -= stackIn.g;
			_bOutSum -= stackIn.b;
			_aOutSum -= stackIn.a;
			_p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
			_rSum += _rInSum += stackIn.r = pixels[_p2];
			_gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
			_bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
			_aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
			stackIn = stackIn.next;
			_rOutSum += _pr = stackOut.r;
			_gOutSum += _pg = stackOut.g;
			_bOutSum += _pb = stackOut.b;
			_aOutSum += _pa = stackOut.a;
			_rInSum -= _pr;
			_gInSum -= _pg;
			_bInSum -= _pb;
			_aInSum -= _pa;
			stackOut = stackOut.next;
			yi += width;
		}
	}
	return imageData;
}
/**
*
*/
var BlurStack = function BlurStack$1() {
	_classCallCheck(this, BlurStack$1);
	this.r = 0;
	this.g = 0;
	this.b = 0;
	this.a = 0;
	this.next = null;
};

//#endregion
//#region node_modules/canvg/lib/index.es.js
/**
* Options preset for `OffscreenCanvas`.
* @param config - Preset requirements.
* @param config.DOMParser - XML/HTML parser from string into DOM Document.
* @returns Preset object.
*/
function offscreen() {
	var { DOMParser: DOMParserFallback } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	var preset = {
		window: null,
		ignoreAnimation: true,
		ignoreMouse: true,
		DOMParser: DOMParserFallback,
		createCanvas(width, height) {
			return new OffscreenCanvas(width, height);
		},
		createImage(url) {
			return _asyncToGenerator(function* () {
				var blob = yield (yield fetch(url)).blob();
				return yield createImageBitmap(blob);
			})();
		}
	};
	if (typeof DOMParser !== "undefined" || typeof DOMParserFallback === "undefined") Reflect.deleteProperty(preset, "DOMParser");
	return preset;
}
/**
* Options preset for `node-canvas`.
* @param config - Preset requirements.
* @param config.DOMParser - XML/HTML parser from string into DOM Document.
* @param config.canvas - `node-canvas` exports.
* @param config.fetch - WHATWG-compatible `fetch` function.
* @returns Preset object.
*/
function node(_ref) {
	var { DOMParser: DOMParser$1, canvas, fetch: fetch$1 } = _ref;
	return {
		window: null,
		ignoreAnimation: true,
		ignoreMouse: true,
		DOMParser: DOMParser$1,
		fetch: fetch$1,
		createCanvas: canvas.createCanvas,
		createImage: canvas.loadImage
	};
}
var index = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	offscreen,
	node
});
/**
* HTML-safe compress white-spaces.
* @param str - String to compress.
* @returns String.
*/
function compressSpaces(str) {
	return str.replace(/(?!\u3000)\s+/gm, " ");
}
/**
* HTML-safe left trim.
* @param str - String to trim.
* @returns String.
*/
function trimLeft(str) {
	return str.replace(/^[\n \t]+/, "");
}
/**
* HTML-safe right trim.
* @param str - String to trim.
* @returns String.
*/
function trimRight(str) {
	return str.replace(/[\n \t]+$/, "");
}
/**
* String to numbers array.
* @param str - Numbers string.
* @returns Numbers array.
*/
function toNumbers(str) {
	return ((str || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || []).map(parseFloat);
}
var allUppercase = /^[A-Z-]+$/;
/**
* Normalize attribute name.
* @param name - Attribute name.
* @returns Normalized attribute name.
*/
function normalizeAttributeName(name) {
	if (allUppercase.test(name)) return name.toLowerCase();
	return name;
}
/**
* Parse external URL.
* @param url - CSS url string.
* @returns Parsed URL.
*/
function parseExternalUrl(url) {
	var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
	return urlMatch[2] || urlMatch[3] || urlMatch[4];
}
/**
* Transform floats to integers in rgb colors.
* @param color - Color to normalize.
* @returns Normalized color.
*/
function normalizeColor(color) {
	if (!color.startsWith("rgb")) return color;
	var rgbParts = 3;
	return color.replace(/\d+(\.\d+)?/g, (num, isFloat) => rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num);
}
var attributeRegex = /(\[[^\]]+\])/g;
var idRegex = /(#[^\s+>~.[:]+)/g;
var classRegex = /(\.[^\s+>~.[:]+)/g;
var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
var elementRegex = /([^\s+>~.[:]+)/g;
function findSelectorMatch(selector, regex) {
	var matches = regex.exec(selector);
	if (!matches) return [selector, 0];
	return [selector.replace(regex, " "), matches.length];
}
/**
* Measure selector specificity.
* @param selector - Selector to measure.
* @returns Specificity.
*/
function getSelectorSpecificity(selector) {
	var specificity = [
		0,
		0,
		0
	];
	var currentSelector = selector.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " ");
	var delta = 0;
	[currentSelector, delta] = findSelectorMatch(currentSelector, attributeRegex);
	specificity[1] += delta;
	[currentSelector, delta] = findSelectorMatch(currentSelector, idRegex);
	specificity[0] += delta;
	[currentSelector, delta] = findSelectorMatch(currentSelector, classRegex);
	specificity[1] += delta;
	[currentSelector, delta] = findSelectorMatch(currentSelector, pseudoElementRegex);
	specificity[2] += delta;
	[currentSelector, delta] = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);
	specificity[1] += delta;
	[currentSelector, delta] = findSelectorMatch(currentSelector, pseudoClassRegex);
	specificity[1] += delta;
	currentSelector = currentSelector.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ");
	[currentSelector, delta] = findSelectorMatch(currentSelector, elementRegex);
	specificity[2] += delta;
	return specificity.join("");
}
var PSEUDO_ZERO = 1e-8;
/**
* Vector magnitude.
* @param v
* @returns Number result.
*/
function vectorMagnitude(v$1) {
	return Math.sqrt(Math.pow(v$1[0], 2) + Math.pow(v$1[1], 2));
}
/**
* Ratio between two vectors.
* @param u
* @param v
* @returns Number result.
*/
function vectorsRatio(u$1, v$1) {
	return (u$1[0] * v$1[0] + u$1[1] * v$1[1]) / (vectorMagnitude(u$1) * vectorMagnitude(v$1));
}
/**
* Angle between two vectors.
* @param u
* @param v
* @returns Number result.
*/
function vectorsAngle(u$1, v$1) {
	return (u$1[0] * v$1[1] < u$1[1] * v$1[0] ? -1 : 1) * Math.acos(vectorsRatio(u$1, v$1));
}
function CB1(t$1) {
	return t$1 * t$1 * t$1;
}
function CB2(t$1) {
	return 3 * t$1 * t$1 * (1 - t$1);
}
function CB3(t$1) {
	return 3 * t$1 * (1 - t$1) * (1 - t$1);
}
function CB4(t$1) {
	return (1 - t$1) * (1 - t$1) * (1 - t$1);
}
function QB1(t$1) {
	return t$1 * t$1;
}
function QB2(t$1) {
	return 2 * t$1 * (1 - t$1);
}
function QB3(t$1) {
	return (1 - t$1) * (1 - t$1);
}
var Property = class Property {
	constructor(document$4, name, value) {
		this.document = document$4;
		this.name = name;
		this.value = value;
		this.isNormalizedColor = false;
	}
	static empty(document$4) {
		return new Property(document$4, "EMPTY", "");
	}
	split() {
		var separator = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ";
		var { document: document$4, name } = this;
		return compressSpaces(this.getString()).trim().split(separator).map((value) => new Property(document$4, name, value));
	}
	hasValue(zeroIsValue) {
		var { value } = this;
		return value !== null && value !== "" && (zeroIsValue || value !== 0) && typeof value !== "undefined";
	}
	isString(regexp) {
		var { value } = this;
		var result = typeof value === "string";
		if (!result || !regexp) return result;
		return regexp.test(value);
	}
	isUrlDefinition() {
		return this.isString(/^url\(/);
	}
	isPixels() {
		if (!this.hasValue()) return false;
		var asString = this.getString();
		switch (true) {
			case asString.endsWith("px"):
			case /^[0-9]+$/.test(asString): return true;
			default: return false;
		}
	}
	setValue(value) {
		this.value = value;
		return this;
	}
	getValue(def) {
		if (typeof def === "undefined" || this.hasValue()) return this.value;
		return def;
	}
	getNumber(def) {
		if (!this.hasValue()) {
			if (typeof def === "undefined") return 0;
			return parseFloat(def);
		}
		var { value } = this;
		var n$1 = parseFloat(value);
		if (this.isString(/%$/)) n$1 /= 100;
		return n$1;
	}
	getString(def) {
		if (typeof def === "undefined" || this.hasValue()) return typeof this.value === "undefined" ? "" : String(this.value);
		return String(def);
	}
	getColor(def) {
		var color = this.getString(def);
		if (this.isNormalizedColor) return color;
		this.isNormalizedColor = true;
		color = normalizeColor(color);
		this.value = color;
		return color;
	}
	getDpi() {
		return 96;
	}
	getRem() {
		return this.document.rootEmSize;
	}
	getEm() {
		return this.document.emSize;
	}
	getUnits() {
		return this.getString().replace(/[0-9.-]/g, "");
	}
	getPixels(axisOrIsFontSize) {
		var processPercent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		if (!this.hasValue()) return 0;
		var [axis, isFontSize] = typeof axisOrIsFontSize === "boolean" ? [void 0, axisOrIsFontSize] : [axisOrIsFontSize];
		var { viewPort } = this.document.screen;
		switch (true) {
			case this.isString(/vmin$/): return this.getNumber() / 100 * Math.min(viewPort.computeSize("x"), viewPort.computeSize("y"));
			case this.isString(/vmax$/): return this.getNumber() / 100 * Math.max(viewPort.computeSize("x"), viewPort.computeSize("y"));
			case this.isString(/vw$/): return this.getNumber() / 100 * viewPort.computeSize("x");
			case this.isString(/vh$/): return this.getNumber() / 100 * viewPort.computeSize("y");
			case this.isString(/rem$/): return this.getNumber() * this.getRem();
			case this.isString(/em$/): return this.getNumber() * this.getEm();
			case this.isString(/ex$/): return this.getNumber() * this.getEm() / 2;
			case this.isString(/px$/): return this.getNumber();
			case this.isString(/pt$/): return this.getNumber() * this.getDpi() * (1 / 72);
			case this.isString(/pc$/): return this.getNumber() * 15;
			case this.isString(/cm$/): return this.getNumber() * this.getDpi() / 2.54;
			case this.isString(/mm$/): return this.getNumber() * this.getDpi() / 25.4;
			case this.isString(/in$/): return this.getNumber() * this.getDpi();
			case this.isString(/%$/) && isFontSize: return this.getNumber() * this.getEm();
			case this.isString(/%$/): return this.getNumber() * viewPort.computeSize(axis);
			default:
				var n$1 = this.getNumber();
				if (processPercent && n$1 < 1) return n$1 * viewPort.computeSize(axis);
				return n$1;
		}
	}
	getMilliseconds() {
		if (!this.hasValue()) return 0;
		if (this.isString(/ms$/)) return this.getNumber();
		return this.getNumber() * 1e3;
	}
	getRadians() {
		if (!this.hasValue()) return 0;
		switch (true) {
			case this.isString(/deg$/): return this.getNumber() * (Math.PI / 180);
			case this.isString(/grad$/): return this.getNumber() * (Math.PI / 200);
			case this.isString(/rad$/): return this.getNumber();
			default: return this.getNumber() * (Math.PI / 180);
		}
	}
	getDefinition() {
		var asString = this.getString();
		var name = /#([^)'"]+)/.exec(asString);
		if (name) name = name[1];
		if (!name) name = asString;
		return this.document.definitions[name];
	}
	getFillStyleDefinition(element, opacity) {
		var def = this.getDefinition();
		if (!def) return null;
		if (typeof def.createGradient === "function") return def.createGradient(this.document.ctx, element, opacity);
		if (typeof def.createPattern === "function") {
			if (def.getHrefAttribute().hasValue()) {
				var patternTransform = def.getAttribute("patternTransform");
				def = def.getHrefAttribute().getDefinition();
				if (patternTransform.hasValue()) def.getAttribute("patternTransform", true).setValue(patternTransform.value);
			}
			return def.createPattern(this.document.ctx, element, opacity);
		}
		return null;
	}
	getTextBaseline() {
		if (!this.hasValue()) return null;
		return Property.textBaselineMapping[this.getString()];
	}
	addOpacity(opacity) {
		var value = this.getColor();
		var len = value.length;
		var commas = 0;
		for (var i$2 = 0; i$2 < len; i$2++) {
			if (value[i$2] === ",") commas++;
			if (commas === 3) break;
		}
		if (opacity.hasValue() && this.isString() && commas !== 3) {
			var color = new import_rgbcolor.default(value);
			if (color.ok) {
				color.alpha = opacity.getNumber();
				value = color.toRGBA();
			}
		}
		return new Property(this.document, this.name, value);
	}
};
Property.textBaselineMapping = {
	"baseline": "alphabetic",
	"before-edge": "top",
	"text-before-edge": "top",
	"middle": "middle",
	"central": "middle",
	"after-edge": "bottom",
	"text-after-edge": "bottom",
	"ideographic": "ideographic",
	"alphabetic": "alphabetic",
	"hanging": "hanging",
	"mathematical": "alphabetic"
};
var ViewPort = class {
	constructor() {
		this.viewPorts = [];
	}
	clear() {
		this.viewPorts = [];
	}
	setCurrent(width, height) {
		this.viewPorts.push({
			width,
			height
		});
	}
	removeCurrent() {
		this.viewPorts.pop();
	}
	getCurrent() {
		var { viewPorts } = this;
		return viewPorts[viewPorts.length - 1];
	}
	get width() {
		return this.getCurrent().width;
	}
	get height() {
		return this.getCurrent().height;
	}
	computeSize(d) {
		if (typeof d === "number") return d;
		if (d === "x") return this.width;
		if (d === "y") return this.height;
		return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
	}
};
var Point = class Point {
	constructor(x, y$1) {
		this.x = x;
		this.y = y$1;
	}
	static parse(point) {
		var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		var [x = defaultValue, y$1 = defaultValue] = toNumbers(point);
		return new Point(x, y$1);
	}
	static parseScale(scale) {
		var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
		var [x = defaultValue, y$1 = x] = toNumbers(scale);
		return new Point(x, y$1);
	}
	static parsePath(path$1) {
		var points = toNumbers(path$1);
		var len = points.length;
		var pathPoints = [];
		for (var i$2 = 0; i$2 < len; i$2 += 2) pathPoints.push(new Point(points[i$2], points[i$2 + 1]));
		return pathPoints;
	}
	angleTo(point) {
		return Math.atan2(point.y - this.y, point.x - this.x);
	}
	applyTransform(transform) {
		var { x, y: y$1 } = this;
		var xp = x * transform[0] + y$1 * transform[2] + transform[4];
		var yp = x * transform[1] + y$1 * transform[3] + transform[5];
		this.x = xp;
		this.y = yp;
	}
};
var Mouse = class {
	constructor(screen) {
		this.screen = screen;
		this.working = false;
		this.events = [];
		this.eventElements = [];
		this.onClick = this.onClick.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
	}
	isWorking() {
		return this.working;
	}
	start() {
		if (this.working) return;
		var { screen, onClick, onMouseMove } = this;
		var canvas = screen.ctx.canvas;
		canvas.onclick = onClick;
		canvas.onmousemove = onMouseMove;
		this.working = true;
	}
	stop() {
		if (!this.working) return;
		var canvas = this.screen.ctx.canvas;
		this.working = false;
		canvas.onclick = null;
		canvas.onmousemove = null;
	}
	hasEvents() {
		return this.working && this.events.length > 0;
	}
	runEvents() {
		if (!this.working) return;
		var { screen: document$4, events, eventElements } = this;
		var { style } = document$4.ctx.canvas;
		if (style) style.cursor = "";
		events.forEach((_ref, i$2) => {
			var { run: run$1 } = _ref;
			var element = eventElements[i$2];
			while (element) {
				run$1(element);
				element = element.parent;
			}
		});
		this.events = [];
		this.eventElements = [];
	}
	checkPath(element, ctx) {
		if (!this.working || !ctx) return;
		var { events, eventElements } = this;
		events.forEach((_ref2, i$2) => {
			var { x, y: y$1 } = _ref2;
			if (!eventElements[i$2] && ctx.isPointInPath && ctx.isPointInPath(x, y$1)) eventElements[i$2] = element;
		});
	}
	checkBoundingBox(element, boundingBox) {
		if (!this.working || !boundingBox) return;
		var { events, eventElements } = this;
		events.forEach((_ref3, i$2) => {
			var { x, y: y$1 } = _ref3;
			if (!eventElements[i$2] && boundingBox.isPointInBox(x, y$1)) eventElements[i$2] = element;
		});
	}
	mapXY(x, y$1) {
		var { window: window$1, ctx } = this.screen;
		var point = new Point(x, y$1);
		var element = ctx.canvas;
		while (element) {
			point.x -= element.offsetLeft;
			point.y -= element.offsetTop;
			element = element.offsetParent;
		}
		if (window$1.scrollX) point.x += window$1.scrollX;
		if (window$1.scrollY) point.y += window$1.scrollY;
		return point;
	}
	onClick(event) {
		var { x, y: y$1 } = this.mapXY(event.clientX, event.clientY);
		this.events.push({
			type: "onclick",
			x,
			y: y$1,
			run(eventTarget) {
				if (eventTarget.onClick) eventTarget.onClick();
			}
		});
	}
	onMouseMove(event) {
		var { x, y: y$1 } = this.mapXY(event.clientX, event.clientY);
		this.events.push({
			type: "onmousemove",
			x,
			y: y$1,
			run(eventTarget) {
				if (eventTarget.onMouseMove) eventTarget.onMouseMove();
			}
		});
	}
};
var defaultWindow = typeof window !== "undefined" ? window : null;
var defaultFetch$1 = typeof fetch !== "undefined" ? fetch.bind(void 0) : null;
var Screen = class {
	constructor(ctx) {
		var { fetch: fetch$1 = defaultFetch$1, window: window$1 = defaultWindow } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.ctx = ctx;
		this.FRAMERATE = 30;
		this.MAX_VIRTUAL_PIXELS = 3e4;
		this.CLIENT_WIDTH = 800;
		this.CLIENT_HEIGHT = 600;
		this.viewPort = new ViewPort();
		this.mouse = new Mouse(this);
		this.animations = [];
		this.waits = [];
		this.frameDuration = 0;
		this.isReadyLock = false;
		this.isFirstRender = true;
		this.intervalId = null;
		this.window = window$1;
		this.fetch = fetch$1;
	}
	wait(checker) {
		this.waits.push(checker);
	}
	ready() {
		if (!this.readyPromise) return Promise.resolve();
		return this.readyPromise;
	}
	isReady() {
		if (this.isReadyLock) return true;
		var isReadyLock = this.waits.every((_$1) => _$1());
		if (isReadyLock) {
			this.waits = [];
			if (this.resolveReady) this.resolveReady();
		}
		this.isReadyLock = isReadyLock;
		return isReadyLock;
	}
	setDefaults(ctx) {
		ctx.strokeStyle = "rgba(0,0,0,0)";
		ctx.lineCap = "butt";
		ctx.lineJoin = "miter";
		ctx.miterLimit = 4;
	}
	setViewBox(_ref) {
		var { document: document$4, ctx, aspectRatio, width, desiredWidth, height, desiredHeight, minX = 0, minY = 0, refX, refY, clip = false, clipX = 0, clipY = 0 } = _ref;
		var [aspectRatioAlign, aspectRatioMeetOrSlice] = compressSpaces(aspectRatio).replace(/^defer\s/, "").split(" ");
		var align = aspectRatioAlign || "xMidYMid";
		var meetOrSlice = aspectRatioMeetOrSlice || "meet";
		var scaleX = width / desiredWidth;
		var scaleY = height / desiredHeight;
		var scaleMin = Math.min(scaleX, scaleY);
		var scaleMax = Math.max(scaleX, scaleY);
		var finalDesiredWidth = desiredWidth;
		var finalDesiredHeight = desiredHeight;
		if (meetOrSlice === "meet") {
			finalDesiredWidth *= scaleMin;
			finalDesiredHeight *= scaleMin;
		}
		if (meetOrSlice === "slice") {
			finalDesiredWidth *= scaleMax;
			finalDesiredHeight *= scaleMax;
		}
		var refXProp = new Property(document$4, "refX", refX);
		var refYProp = new Property(document$4, "refY", refY);
		var hasRefs = refXProp.hasValue() && refYProp.hasValue();
		if (hasRefs) ctx.translate(-scaleMin * refXProp.getPixels("x"), -scaleMin * refYProp.getPixels("y"));
		if (clip) {
			var scaledClipX = scaleMin * clipX;
			var scaledClipY = scaleMin * clipY;
			ctx.beginPath();
			ctx.moveTo(scaledClipX, scaledClipY);
			ctx.lineTo(width, scaledClipY);
			ctx.lineTo(width, height);
			ctx.lineTo(scaledClipX, height);
			ctx.closePath();
			ctx.clip();
		}
		if (!hasRefs) {
			var isMeetMinY = meetOrSlice === "meet" && scaleMin === scaleY;
			var isSliceMaxY = meetOrSlice === "slice" && scaleMax === scaleY;
			var isMeetMinX = meetOrSlice === "meet" && scaleMin === scaleX;
			var isSliceMaxX = meetOrSlice === "slice" && scaleMax === scaleX;
			if (align.startsWith("xMid") && (isMeetMinY || isSliceMaxY)) ctx.translate(width / 2 - finalDesiredWidth / 2, 0);
			if (align.endsWith("YMid") && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height / 2 - finalDesiredHeight / 2);
			if (align.startsWith("xMax") && (isMeetMinY || isSliceMaxY)) ctx.translate(width - finalDesiredWidth, 0);
			if (align.endsWith("YMax") && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height - finalDesiredHeight);
		}
		switch (true) {
			case align === "none":
				ctx.scale(scaleX, scaleY);
				break;
			case meetOrSlice === "meet":
				ctx.scale(scaleMin, scaleMin);
				break;
			case meetOrSlice === "slice":
				ctx.scale(scaleMax, scaleMax);
				break;
		}
		ctx.translate(-minX, -minY);
	}
	start(element) {
		var { enableRedraw = false, ignoreMouse = false, ignoreAnimation = false, ignoreDimensions = false, ignoreClear = false, forceRedraw, scaleWidth, scaleHeight, offsetX, offsetY } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		var { FRAMERATE, mouse } = this;
		var frameDuration$1 = 1e3 / FRAMERATE;
		this.frameDuration = frameDuration$1;
		this.readyPromise = new Promise((resolve) => {
			this.resolveReady = resolve;
		});
		if (this.isReady()) this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
		if (!enableRedraw) return;
		var now$1 = Date.now();
		var then$1 = now$1;
		var delta = 0;
		var tick = () => {
			now$1 = Date.now();
			delta = now$1 - then$1;
			if (delta >= frameDuration$1) {
				then$1 = now$1 - delta % frameDuration$1;
				if (this.shouldUpdate(ignoreAnimation, forceRedraw)) {
					this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
					mouse.runEvents();
				}
			}
			this.intervalId = (0, import_raf.default)(tick);
		};
		if (!ignoreMouse) mouse.start();
		this.intervalId = (0, import_raf.default)(tick);
	}
	stop() {
		if (this.intervalId) {
			import_raf.default.cancel(this.intervalId);
			this.intervalId = null;
		}
		this.mouse.stop();
	}
	shouldUpdate(ignoreAnimation, forceRedraw) {
		if (!ignoreAnimation) {
			var { frameDuration: frameDuration$1 } = this;
			if (this.animations.reduce((shouldUpdate, animation) => animation.update(frameDuration$1) || shouldUpdate, false)) return true;
		}
		if (typeof forceRedraw === "function" && forceRedraw()) return true;
		if (!this.isReadyLock && this.isReady()) return true;
		if (this.mouse.hasEvents()) return true;
		return false;
	}
	render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
		var { CLIENT_WIDTH, CLIENT_HEIGHT, viewPort, ctx, isFirstRender } = this;
		var canvas = ctx.canvas;
		viewPort.clear();
		if (canvas.width && canvas.height) viewPort.setCurrent(canvas.width, canvas.height);
		else viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
		var widthStyle = element.getStyle("width");
		var heightStyle = element.getStyle("height");
		if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== "number" && typeof scaleHeight !== "number")) {
			if (widthStyle.hasValue()) {
				canvas.width = widthStyle.getPixels("x");
				if (canvas.style) canvas.style.width = "".concat(canvas.width, "px");
			}
			if (heightStyle.hasValue()) {
				canvas.height = heightStyle.getPixels("y");
				if (canvas.style) canvas.style.height = "".concat(canvas.height, "px");
			}
		}
		var cWidth = canvas.clientWidth || canvas.width;
		var cHeight = canvas.clientHeight || canvas.height;
		if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
			cWidth = widthStyle.getPixels("x");
			cHeight = heightStyle.getPixels("y");
		}
		viewPort.setCurrent(cWidth, cHeight);
		if (typeof offsetX === "number") element.getAttribute("x", true).setValue(offsetX);
		if (typeof offsetY === "number") element.getAttribute("y", true).setValue(offsetY);
		if (typeof scaleWidth === "number" || typeof scaleHeight === "number") {
			var viewBox = toNumbers(element.getAttribute("viewBox").getString());
			var xRatio = 0;
			var yRatio = 0;
			if (typeof scaleWidth === "number") {
				var _widthStyle = element.getStyle("width");
				if (_widthStyle.hasValue()) xRatio = _widthStyle.getPixels("x") / scaleWidth;
				else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / scaleWidth;
			}
			if (typeof scaleHeight === "number") {
				var _heightStyle = element.getStyle("height");
				if (_heightStyle.hasValue()) yRatio = _heightStyle.getPixels("y") / scaleHeight;
				else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / scaleHeight;
			}
			if (!xRatio) xRatio = yRatio;
			if (!yRatio) yRatio = xRatio;
			element.getAttribute("width", true).setValue(scaleWidth);
			element.getAttribute("height", true).setValue(scaleHeight);
			var transformStyle = element.getStyle("transform", true, true);
			transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1 / xRatio, ", ").concat(1 / yRatio, ")"));
		}
		if (!ignoreClear) ctx.clearRect(0, 0, cWidth, cHeight);
		element.render(ctx);
		if (isFirstRender) this.isFirstRender = false;
	}
};
Screen.defaultWindow = defaultWindow;
Screen.defaultFetch = defaultFetch$1;
var { defaultFetch } = Screen;
var DefaultDOMParser = typeof DOMParser !== "undefined" ? DOMParser : null;
var Parser = class {
	constructor() {
		var { fetch: fetch$1 = defaultFetch, DOMParser: DOMParser$1 = DefaultDOMParser } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		this.fetch = fetch$1;
		this.DOMParser = DOMParser$1;
	}
	parse(resource) {
		var _this = this;
		return _asyncToGenerator(function* () {
			if (resource.startsWith("<")) return _this.parseFromString(resource);
			return _this.load(resource);
		})();
	}
	parseFromString(xml) {
		var parser = new this.DOMParser();
		try {
			return this.checkDocument(parser.parseFromString(xml, "image/svg+xml"));
		} catch (err) {
			return this.checkDocument(parser.parseFromString(xml, "text/xml"));
		}
	}
	checkDocument(document$4) {
		var parserError = document$4.getElementsByTagName("parsererror")[0];
		if (parserError) throw new Error(parserError.textContent);
		return document$4;
	}
	load(url) {
		var _this2 = this;
		return _asyncToGenerator(function* () {
			var xml = yield (yield _this2.fetch(url)).text();
			return _this2.parseFromString(xml);
		})();
	}
};
var Translate = class {
	constructor(_$1, point) {
		this.type = "translate";
		this.point = null;
		this.point = Point.parse(point);
	}
	apply(ctx) {
		var { x, y: y$1 } = this.point;
		ctx.translate(x || 0, y$1 || 0);
	}
	unapply(ctx) {
		var { x, y: y$1 } = this.point;
		ctx.translate(-1 * x || 0, -1 * y$1 || 0);
	}
	applyToPoint(point) {
		var { x, y: y$1 } = this.point;
		point.applyTransform([
			1,
			0,
			0,
			1,
			x || 0,
			y$1 || 0
		]);
	}
};
var Rotate = class {
	constructor(document$4, rotate, transformOrigin) {
		this.type = "rotate";
		this.angle = null;
		this.originX = null;
		this.originY = null;
		this.cx = 0;
		this.cy = 0;
		var numbers = toNumbers(rotate);
		this.angle = new Property(document$4, "angle", numbers[0]);
		this.originX = transformOrigin[0];
		this.originY = transformOrigin[1];
		this.cx = numbers[1] || 0;
		this.cy = numbers[2] || 0;
	}
	apply(ctx) {
		var { cx, cy, originX, originY, angle } = this;
		var tx = cx + originX.getPixels("x");
		var ty = cy + originY.getPixels("y");
		ctx.translate(tx, ty);
		ctx.rotate(angle.getRadians());
		ctx.translate(-tx, -ty);
	}
	unapply(ctx) {
		var { cx, cy, originX, originY, angle } = this;
		var tx = cx + originX.getPixels("x");
		var ty = cy + originY.getPixels("y");
		ctx.translate(tx, ty);
		ctx.rotate(-1 * angle.getRadians());
		ctx.translate(-tx, -ty);
	}
	applyToPoint(point) {
		var { cx, cy, angle } = this;
		var rad = angle.getRadians();
		point.applyTransform([
			1,
			0,
			0,
			1,
			cx || 0,
			cy || 0
		]);
		point.applyTransform([
			Math.cos(rad),
			Math.sin(rad),
			-Math.sin(rad),
			Math.cos(rad),
			0,
			0
		]);
		point.applyTransform([
			1,
			0,
			0,
			1,
			-cx || 0,
			-cy || 0
		]);
	}
};
var Scale = class {
	constructor(_$1, scale, transformOrigin) {
		this.type = "scale";
		this.scale = null;
		this.originX = null;
		this.originY = null;
		var scaleSize = Point.parseScale(scale);
		if (scaleSize.x === 0 || scaleSize.y === 0) {
			scaleSize.x = PSEUDO_ZERO;
			scaleSize.y = PSEUDO_ZERO;
		}
		this.scale = scaleSize;
		this.originX = transformOrigin[0];
		this.originY = transformOrigin[1];
	}
	apply(ctx) {
		var { scale: { x, y: y$1 }, originX, originY } = this;
		var tx = originX.getPixels("x");
		var ty = originY.getPixels("y");
		ctx.translate(tx, ty);
		ctx.scale(x, y$1 || x);
		ctx.translate(-tx, -ty);
	}
	unapply(ctx) {
		var { scale: { x, y: y$1 }, originX, originY } = this;
		var tx = originX.getPixels("x");
		var ty = originY.getPixels("y");
		ctx.translate(tx, ty);
		ctx.scale(1 / x, 1 / y$1 || x);
		ctx.translate(-tx, -ty);
	}
	applyToPoint(point) {
		var { x, y: y$1 } = this.scale;
		point.applyTransform([
			x || 0,
			0,
			0,
			y$1 || 0,
			0,
			0
		]);
	}
};
var Matrix = class {
	constructor(_$1, matrix, transformOrigin) {
		this.type = "matrix";
		this.matrix = [];
		this.originX = null;
		this.originY = null;
		this.matrix = toNumbers(matrix);
		this.originX = transformOrigin[0];
		this.originY = transformOrigin[1];
	}
	apply(ctx) {
		var { originX, originY, matrix } = this;
		var tx = originX.getPixels("x");
		var ty = originY.getPixels("y");
		ctx.translate(tx, ty);
		ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
		ctx.translate(-tx, -ty);
	}
	unapply(ctx) {
		var { originX, originY, matrix } = this;
		var a$1 = matrix[0];
		var b = matrix[2];
		var c$2 = matrix[4];
		var d = matrix[1];
		var e$1 = matrix[3];
		var f$1 = matrix[5];
		var g = 0;
		var h$1 = 0;
		var i$2 = 1;
		var det = 1 / (a$1 * (e$1 * i$2 - f$1 * h$1) - b * (d * i$2 - f$1 * g) + c$2 * (d * h$1 - e$1 * g));
		var tx = originX.getPixels("x");
		var ty = originY.getPixels("y");
		ctx.translate(tx, ty);
		ctx.transform(det * (e$1 * i$2 - f$1 * h$1), det * (f$1 * g - d * i$2), det * (c$2 * h$1 - b * i$2), det * (a$1 * i$2 - c$2 * g), det * (b * f$1 - c$2 * e$1), det * (c$2 * d - a$1 * f$1));
		ctx.translate(-tx, -ty);
	}
	applyToPoint(point) {
		point.applyTransform(this.matrix);
	}
};
var Skew = class extends Matrix {
	constructor(document$4, skew, transformOrigin) {
		super(document$4, skew, transformOrigin);
		this.type = "skew";
		this.angle = null;
		this.angle = new Property(document$4, "angle", skew);
	}
};
var SkewX = class extends Skew {
	constructor(document$4, skew, transformOrigin) {
		super(document$4, skew, transformOrigin);
		this.type = "skewX";
		this.matrix = [
			1,
			0,
			Math.tan(this.angle.getRadians()),
			1,
			0,
			0
		];
	}
};
var SkewY = class extends Skew {
	constructor(document$4, skew, transformOrigin) {
		super(document$4, skew, transformOrigin);
		this.type = "skewY";
		this.matrix = [
			1,
			Math.tan(this.angle.getRadians()),
			0,
			1,
			0,
			0
		];
	}
};
function parseTransforms(transform) {
	return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function parseTransform(transform) {
	var [type, value] = transform.split("(");
	return [type.trim(), value.trim().replace(")", "")];
}
var Transform = class Transform {
	constructor(document$4, transform, transformOrigin) {
		this.document = document$4;
		this.transforms = [];
		parseTransforms(transform).forEach((transform$1) => {
			if (transform$1 === "none") return;
			var [type, value] = parseTransform(transform$1);
			var TransformType = Transform.transformTypes[type];
			if (typeof TransformType !== "undefined") this.transforms.push(new TransformType(this.document, value, transformOrigin));
		});
	}
	static fromElement(document$4, element) {
		var transformStyle = element.getStyle("transform", false, true);
		var [transformOriginXProperty, transformOriginYProperty = transformOriginXProperty] = element.getStyle("transform-origin", false, true).split();
		var transformOrigin = [transformOriginXProperty, transformOriginYProperty];
		if (transformStyle.hasValue()) return new Transform(document$4, transformStyle.getString(), transformOrigin);
		return null;
	}
	apply(ctx) {
		var { transforms } = this;
		var len = transforms.length;
		for (var i$2 = 0; i$2 < len; i$2++) transforms[i$2].apply(ctx);
	}
	unapply(ctx) {
		var { transforms } = this;
		for (var i$2 = transforms.length - 1; i$2 >= 0; i$2--) transforms[i$2].unapply(ctx);
	}
	applyToPoint(point) {
		var { transforms } = this;
		var len = transforms.length;
		for (var i$2 = 0; i$2 < len; i$2++) transforms[i$2].applyToPoint(point);
	}
};
Transform.transformTypes = {
	translate: Translate,
	rotate: Rotate,
	scale: Scale,
	matrix: Matrix,
	skewX: SkewX,
	skewY: SkewY
};
var Element = class Element {
	constructor(document$4, node$2) {
		var captureTextNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
		this.document = document$4;
		this.node = node$2;
		this.captureTextNodes = captureTextNodes;
		this.attributes = Object.create(null);
		this.styles = Object.create(null);
		this.stylesSpecificity = Object.create(null);
		this.animationFrozen = false;
		this.animationFrozenValue = "";
		this.parent = null;
		this.children = [];
		if (!node$2 || node$2.nodeType !== 1) return;
		Array.from(node$2.attributes).forEach((attribute) => {
			var nodeName = normalizeAttributeName(attribute.nodeName);
			this.attributes[nodeName] = new Property(document$4, nodeName, attribute.value);
		});
		this.addStylesFromStyleDefinition();
		if (this.getAttribute("style").hasValue()) this.getAttribute("style").getString().split(";").map((_$1) => _$1.trim()).forEach((style) => {
			if (!style) return;
			var [name, value] = style.split(":").map((_$1) => _$1.trim());
			this.styles[name] = new Property(document$4, name, value);
		});
		var { definitions } = document$4;
		var id$2 = this.getAttribute("id");
		if (id$2.hasValue()) {
			if (!definitions[id$2.getString()]) definitions[id$2.getString()] = this;
		}
		Array.from(node$2.childNodes).forEach((childNode) => {
			if (childNode.nodeType === 1) this.addChild(childNode);
			else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
				var textNode = document$4.createTextNode(childNode);
				if (textNode.getText().length > 0) this.addChild(textNode);
			}
		});
	}
	getAttribute(name) {
		var createIfNotExists = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		var attr = this.attributes[name];
		if (!attr && createIfNotExists) {
			var _attr = new Property(this.document, name, "");
			this.attributes[name] = _attr;
			return _attr;
		}
		return attr || Property.empty(this.document);
	}
	getHrefAttribute() {
		for (var key in this.attributes) if (key === "href" || key.endsWith(":href")) return this.attributes[key];
		return Property.empty(this.document);
	}
	getStyle(name) {
		var createIfNotExists = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		var skipAncestors = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
		var style = this.styles[name];
		if (style) return style;
		var attr = this.getAttribute(name);
		if (attr !== null && attr !== void 0 && attr.hasValue()) {
			this.styles[name] = attr;
			return attr;
		}
		if (!skipAncestors) {
			var { parent } = this;
			if (parent) {
				var parentStyle = parent.getStyle(name);
				if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) return parentStyle;
			}
		}
		if (createIfNotExists) {
			var _style = new Property(this.document, name, "");
			this.styles[name] = _style;
			return _style;
		}
		return style || Property.empty(this.document);
	}
	render(ctx) {
		if (this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden") return;
		ctx.save();
		if (this.getStyle("mask").hasValue()) {
			var mask = this.getStyle("mask").getDefinition();
			if (mask) {
				this.applyEffects(ctx);
				mask.apply(ctx, this);
			}
		} else if (this.getStyle("filter").getValue("none") !== "none") {
			var filter = this.getStyle("filter").getDefinition();
			if (filter) {
				this.applyEffects(ctx);
				filter.apply(ctx, this);
			}
		} else {
			this.setContext(ctx);
			this.renderChildren(ctx);
			this.clearContext(ctx);
		}
		ctx.restore();
	}
	setContext(_$1) {}
	applyEffects(ctx) {
		var transform = Transform.fromElement(this.document, this);
		if (transform) transform.apply(ctx);
		var clipPathStyleProp = this.getStyle("clip-path", false, true);
		if (clipPathStyleProp.hasValue()) {
			var clip = clipPathStyleProp.getDefinition();
			if (clip) clip.apply(ctx);
		}
	}
	clearContext(_$1) {}
	renderChildren(ctx) {
		this.children.forEach((child) => {
			child.render(ctx);
		});
	}
	addChild(childNode) {
		var child = childNode instanceof Element ? childNode : this.document.createElement(childNode);
		child.parent = this;
		if (!Element.ignoreChildTypes.includes(child.type)) this.children.push(child);
	}
	matchesSelector(selector) {
		var _node$getAttribute;
		var { node: node$2 } = this;
		if (typeof node$2.matches === "function") return node$2.matches(selector);
		var styleClasses = (_node$getAttribute = node$2.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node$2, "class");
		if (!styleClasses || styleClasses === "") return false;
		return styleClasses.split(" ").some((styleClass) => ".".concat(styleClass) === selector);
	}
	addStylesFromStyleDefinition() {
		var { styles, stylesSpecificity } = this.document;
		for (var selector in styles) if (!selector.startsWith("@") && this.matchesSelector(selector)) {
			var style = styles[selector];
			var specificity = stylesSpecificity[selector];
			if (style) for (var name in style) {
				var existingSpecificity = this.stylesSpecificity[name];
				if (typeof existingSpecificity === "undefined") existingSpecificity = "000";
				if (specificity >= existingSpecificity) {
					this.styles[name] = style[name];
					this.stylesSpecificity[name] = specificity;
				}
			}
		}
	}
	removeStyles(element, ignoreStyles) {
		return ignoreStyles.reduce((toRestore, name) => {
			var styleProp = element.getStyle(name);
			if (!styleProp.hasValue()) return toRestore;
			var value = styleProp.getString();
			styleProp.setValue("");
			return [...toRestore, [name, value]];
		}, []);
	}
	restoreStyles(element, styles) {
		styles.forEach((_ref) => {
			var [name, value] = _ref;
			element.getStyle(name, true).setValue(value);
		});
	}
	isFirstChild() {
		var _this$parent;
		return ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.children.indexOf(this)) === 0;
	}
};
Element.ignoreChildTypes = ["title"];
var UnknownElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
	}
};
function wrapFontFamily(fontFamily) {
	var trimmed = fontFamily.trim();
	return /^('|")/.test(trimmed) ? trimmed : "\"".concat(trimmed, "\"");
}
function prepareFontFamily(fontFamily) {
	return typeof process === "undefined" ? fontFamily : fontFamily.trim().split(",").map(wrapFontFamily).join(",");
}
/**
* https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
* @param fontStyle
* @returns CSS font style.
*/
function prepareFontStyle(fontStyle) {
	if (!fontStyle) return "";
	var targetFontStyle = fontStyle.trim().toLowerCase();
	switch (targetFontStyle) {
		case "normal":
		case "italic":
		case "oblique":
		case "inherit":
		case "initial":
		case "unset": return targetFontStyle;
		default:
			if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) return targetFontStyle;
			return "";
	}
}
/**
* https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
* @param fontWeight
* @returns CSS font weight.
*/
function prepareFontWeight(fontWeight) {
	if (!fontWeight) return "";
	var targetFontWeight = fontWeight.trim().toLowerCase();
	switch (targetFontWeight) {
		case "normal":
		case "bold":
		case "lighter":
		case "bolder":
		case "inherit":
		case "initial":
		case "unset": return targetFontWeight;
		default:
			if (/^[\d.]+$/.test(targetFontWeight)) return targetFontWeight;
			return "";
	}
}
var Font = class Font {
	constructor(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
		var inheritFont = inherit ? typeof inherit === "string" ? Font.parse(inherit) : inherit : {};
		this.fontFamily = fontFamily || inheritFont.fontFamily;
		this.fontSize = fontSize || inheritFont.fontSize;
		this.fontStyle = fontStyle || inheritFont.fontStyle;
		this.fontWeight = fontWeight || inheritFont.fontWeight;
		this.fontVariant = fontVariant || inheritFont.fontVariant;
	}
	static parse() {
		var font = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
		var inherit = arguments.length > 1 ? arguments[1] : void 0;
		var fontStyle = "";
		var fontVariant = "";
		var fontWeight = "";
		var fontSize = "";
		var fontFamily = "";
		var parts = compressSpaces(font).trim().split(" ");
		var set$2 = {
			fontSize: false,
			fontStyle: false,
			fontWeight: false,
			fontVariant: false
		};
		parts.forEach((part) => {
			switch (true) {
				case !set$2.fontStyle && Font.styles.includes(part):
					if (part !== "inherit") fontStyle = part;
					set$2.fontStyle = true;
					break;
				case !set$2.fontVariant && Font.variants.includes(part):
					if (part !== "inherit") fontVariant = part;
					set$2.fontStyle = true;
					set$2.fontVariant = true;
					break;
				case !set$2.fontWeight && Font.weights.includes(part):
					if (part !== "inherit") fontWeight = part;
					set$2.fontStyle = true;
					set$2.fontVariant = true;
					set$2.fontWeight = true;
					break;
				case !set$2.fontSize:
					if (part !== "inherit") [fontSize] = part.split("/");
					set$2.fontStyle = true;
					set$2.fontVariant = true;
					set$2.fontWeight = true;
					set$2.fontSize = true;
					break;
				default: if (part !== "inherit") fontFamily += part;
			}
		});
		return new Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
	}
	toString() {
		return [
			prepareFontStyle(this.fontStyle),
			this.fontVariant,
			prepareFontWeight(this.fontWeight),
			this.fontSize,
			prepareFontFamily(this.fontFamily)
		].join(" ").trim();
	}
};
Font.styles = "normal|italic|oblique|inherit";
Font.variants = "normal|small-caps|inherit";
Font.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
var BoundingBox = class {
	constructor() {
		var x1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : NaN;
		var y1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : NaN;
		var x2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NaN;
		var y2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : NaN;
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.addPoint(x1, y1);
		this.addPoint(x2, y2);
	}
	get x() {
		return this.x1;
	}
	get y() {
		return this.y1;
	}
	get width() {
		return this.x2 - this.x1;
	}
	get height() {
		return this.y2 - this.y1;
	}
	addPoint(x, y$1) {
		if (typeof x !== "undefined") {
			if (isNaN(this.x1) || isNaN(this.x2)) {
				this.x1 = x;
				this.x2 = x;
			}
			if (x < this.x1) this.x1 = x;
			if (x > this.x2) this.x2 = x;
		}
		if (typeof y$1 !== "undefined") {
			if (isNaN(this.y1) || isNaN(this.y2)) {
				this.y1 = y$1;
				this.y2 = y$1;
			}
			if (y$1 < this.y1) this.y1 = y$1;
			if (y$1 > this.y2) this.y2 = y$1;
		}
	}
	addX(x) {
		this.addPoint(x, null);
	}
	addY(y$1) {
		this.addPoint(null, y$1);
	}
	addBoundingBox(boundingBox) {
		if (!boundingBox) return;
		var { x1, y1, x2, y2 } = boundingBox;
		this.addPoint(x1, y1);
		this.addPoint(x2, y2);
	}
	sumCubic(t$1, p0, p1, p2, p3) {
		return Math.pow(1 - t$1, 3) * p0 + 3 * Math.pow(1 - t$1, 2) * t$1 * p1 + 3 * (1 - t$1) * Math.pow(t$1, 2) * p2 + Math.pow(t$1, 3) * p3;
	}
	bezierCurveAdd(forX, p0, p1, p2, p3) {
		var b = 6 * p0 - 12 * p1 + 6 * p2;
		var a$1 = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
		var c$2 = 3 * p1 - 3 * p0;
		if (a$1 === 0) {
			if (b === 0) return;
			var t$1 = -c$2 / b;
			if (0 < t$1 && t$1 < 1) if (forX) this.addX(this.sumCubic(t$1, p0, p1, p2, p3));
			else this.addY(this.sumCubic(t$1, p0, p1, p2, p3));
			return;
		}
		var b2ac = Math.pow(b, 2) - 4 * c$2 * a$1;
		if (b2ac < 0) return;
		var t1 = (-b + Math.sqrt(b2ac)) / (2 * a$1);
		if (0 < t1 && t1 < 1) if (forX) this.addX(this.sumCubic(t1, p0, p1, p2, p3));
		else this.addY(this.sumCubic(t1, p0, p1, p2, p3));
		var t2 = (-b - Math.sqrt(b2ac)) / (2 * a$1);
		if (0 < t2 && t2 < 1) if (forX) this.addX(this.sumCubic(t2, p0, p1, p2, p3));
		else this.addY(this.sumCubic(t2, p0, p1, p2, p3));
	}
	addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
		this.addPoint(p0x, p0y);
		this.addPoint(p3x, p3y);
		this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
		this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
	}
	addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
		var cp1x = p0x + 2 / 3 * (p1x - p0x);
		var cp1y = p0y + 2 / 3 * (p1y - p0y);
		var cp2x = cp1x + 1 / 3 * (p2x - p0x);
		var cp2y = cp1y + 1 / 3 * (p2y - p0y);
		this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
	}
	isPointInBox(x, y$1) {
		var { x1, y1, x2, y2 } = this;
		return x1 <= x && x <= x2 && y1 <= y$1 && y$1 <= y2;
	}
};
var PathParser = class extends _ {
	constructor(path$1) {
		super(path$1.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""));
		this.control = null;
		this.start = null;
		this.current = null;
		this.command = null;
		this.commands = this.commands;
		this.i = -1;
		this.previousCommand = null;
		this.points = [];
		this.angles = [];
	}
	reset() {
		this.i = -1;
		this.command = null;
		this.previousCommand = null;
		this.start = new Point(0, 0);
		this.control = new Point(0, 0);
		this.current = new Point(0, 0);
		this.points = [];
		this.angles = [];
	}
	isEnd() {
		var { i: i$2, commands } = this;
		return i$2 >= commands.length - 1;
	}
	next() {
		var command = this.commands[++this.i];
		this.previousCommand = this.command;
		this.command = command;
		return command;
	}
	getPoint() {
		var xProp = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x";
		var yProp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
		var point = new Point(this.command[xProp], this.command[yProp]);
		return this.makeAbsolute(point);
	}
	getAsControlPoint(xProp, yProp) {
		var point = this.getPoint(xProp, yProp);
		this.control = point;
		return point;
	}
	getAsCurrentPoint(xProp, yProp) {
		var point = this.getPoint(xProp, yProp);
		this.current = point;
		return point;
	}
	getReflectedControlPoint() {
		var previousCommand = this.previousCommand.type;
		if (previousCommand !== _.CURVE_TO && previousCommand !== _.SMOOTH_CURVE_TO && previousCommand !== _.QUAD_TO && previousCommand !== _.SMOOTH_QUAD_TO) return this.current;
		var { current: { x: cx, y: cy }, control: { x: ox, y: oy } } = this;
		return new Point(2 * cx - ox, 2 * cy - oy);
	}
	makeAbsolute(point) {
		if (this.command.relative) {
			var { x, y: y$1 } = this.current;
			point.x += x;
			point.y += y$1;
		}
		return point;
	}
	addMarker(point, from, priorTo) {
		var { points, angles } = this;
		if (priorTo && angles.length > 0 && !angles[angles.length - 1]) angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
		this.addMarkerAngle(point, from ? from.angleTo(point) : null);
	}
	addMarkerAngle(point, angle) {
		this.points.push(point);
		this.angles.push(angle);
	}
	getMarkerPoints() {
		return this.points;
	}
	getMarkerAngles() {
		var { angles } = this;
		var len = angles.length;
		for (var i$2 = 0; i$2 < len; i$2++) if (!angles[i$2]) {
			for (var j = i$2 + 1; j < len; j++) if (angles[j]) {
				angles[i$2] = angles[j];
				break;
			}
		}
		return angles;
	}
};
var RenderedElement = class extends Element {
	constructor() {
		super(...arguments);
		this.modifiedEmSizeStack = false;
	}
	calculateOpacity() {
		var opacity = 1;
		var element = this;
		while (element) {
			var opacityStyle = element.getStyle("opacity", false, true);
			if (opacityStyle.hasValue(true)) opacity *= opacityStyle.getNumber();
			element = element.parent;
		}
		return opacity;
	}
	setContext(ctx) {
		var fromMeasure = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		if (!fromMeasure) {
			var fillStyleProp = this.getStyle("fill");
			var fillOpacityStyleProp = this.getStyle("fill-opacity");
			var strokeStyleProp = this.getStyle("stroke");
			var strokeOpacityProp = this.getStyle("stroke-opacity");
			if (fillStyleProp.isUrlDefinition()) {
				var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);
				if (fillStyle) ctx.fillStyle = fillStyle;
			} else if (fillStyleProp.hasValue()) {
				if (fillStyleProp.getString() === "currentColor") fillStyleProp.setValue(this.getStyle("color").getColor());
				var _fillStyle = fillStyleProp.getColor();
				if (_fillStyle !== "inherit") ctx.fillStyle = _fillStyle === "none" ? "rgba(0,0,0,0)" : _fillStyle;
			}
			if (fillOpacityStyleProp.hasValue()) ctx.fillStyle = new Property(this.document, "fill", ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();
			if (strokeStyleProp.isUrlDefinition()) {
				var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);
				if (strokeStyle) ctx.strokeStyle = strokeStyle;
			} else if (strokeStyleProp.hasValue()) {
				if (strokeStyleProp.getString() === "currentColor") strokeStyleProp.setValue(this.getStyle("color").getColor());
				var _strokeStyle = strokeStyleProp.getString();
				if (_strokeStyle !== "inherit") ctx.strokeStyle = _strokeStyle === "none" ? "rgba(0,0,0,0)" : _strokeStyle;
			}
			if (strokeOpacityProp.hasValue()) ctx.strokeStyle = new Property(this.document, "stroke", ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();
			var strokeWidthStyleProp = this.getStyle("stroke-width");
			if (strokeWidthStyleProp.hasValue()) {
				var newLineWidth = strokeWidthStyleProp.getPixels();
				ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO : newLineWidth;
			}
			var strokeLinecapStyleProp = this.getStyle("stroke-linecap");
			var strokeLinejoinStyleProp = this.getStyle("stroke-linejoin");
			var strokeMiterlimitProp = this.getStyle("stroke-miterlimit");
			var strokeDasharrayStyleProp = this.getStyle("stroke-dasharray");
			var strokeDashoffsetProp = this.getStyle("stroke-dashoffset");
			if (strokeLinecapStyleProp.hasValue()) ctx.lineCap = strokeLinecapStyleProp.getString();
			if (strokeLinejoinStyleProp.hasValue()) ctx.lineJoin = strokeLinejoinStyleProp.getString();
			if (strokeMiterlimitProp.hasValue()) ctx.miterLimit = strokeMiterlimitProp.getNumber();
			if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== "none") {
				var gaps = toNumbers(strokeDasharrayStyleProp.getString());
				if (typeof ctx.setLineDash !== "undefined") ctx.setLineDash(gaps);
				else if (typeof ctx.webkitLineDash !== "undefined") ctx.webkitLineDash = gaps;
				else if (typeof ctx.mozDash !== "undefined" && !(gaps.length === 1 && gaps[0] === 0)) ctx.mozDash = gaps;
				var offset = strokeDashoffsetProp.getPixels();
				if (typeof ctx.lineDashOffset !== "undefined") ctx.lineDashOffset = offset;
				else if (typeof ctx.webkitLineDashOffset !== "undefined") ctx.webkitLineDashOffset = offset;
				else if (typeof ctx.mozDashOffset !== "undefined") ctx.mozDashOffset = offset;
			}
		}
		this.modifiedEmSizeStack = false;
		if (typeof ctx.font !== "undefined") {
			var fontStyleProp = this.getStyle("font");
			var fontStyleStyleProp = this.getStyle("font-style");
			var fontVariantStyleProp = this.getStyle("font-variant");
			var fontWeightStyleProp = this.getStyle("font-weight");
			var fontSizeStyleProp = this.getStyle("font-size");
			var fontFamilyStyleProp = this.getStyle("font-family");
			var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : "", fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
			fontStyleStyleProp.setValue(font.fontStyle);
			fontVariantStyleProp.setValue(font.fontVariant);
			fontWeightStyleProp.setValue(font.fontWeight);
			fontSizeStyleProp.setValue(font.fontSize);
			fontFamilyStyleProp.setValue(font.fontFamily);
			ctx.font = font.toString();
			if (fontSizeStyleProp.isPixels()) {
				this.document.emSize = fontSizeStyleProp.getPixels();
				this.modifiedEmSizeStack = true;
			}
		}
		if (!fromMeasure) {
			this.applyEffects(ctx);
			ctx.globalAlpha = this.calculateOpacity();
		}
	}
	clearContext(ctx) {
		super.clearContext(ctx);
		if (this.modifiedEmSizeStack) this.document.popEmSize();
	}
};
var PathElement = class PathElement extends RenderedElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "path";
		this.pathParser = null;
		this.pathParser = new PathParser(this.getAttribute("d").getString());
	}
	path(ctx) {
		var { pathParser } = this;
		var boundingBox = new BoundingBox();
		pathParser.reset();
		if (ctx) ctx.beginPath();
		while (!pathParser.isEnd()) switch (pathParser.next().type) {
			case PathParser.MOVE_TO:
				this.pathM(ctx, boundingBox);
				break;
			case PathParser.LINE_TO:
				this.pathL(ctx, boundingBox);
				break;
			case PathParser.HORIZ_LINE_TO:
				this.pathH(ctx, boundingBox);
				break;
			case PathParser.VERT_LINE_TO:
				this.pathV(ctx, boundingBox);
				break;
			case PathParser.CURVE_TO:
				this.pathC(ctx, boundingBox);
				break;
			case PathParser.SMOOTH_CURVE_TO:
				this.pathS(ctx, boundingBox);
				break;
			case PathParser.QUAD_TO:
				this.pathQ(ctx, boundingBox);
				break;
			case PathParser.SMOOTH_QUAD_TO:
				this.pathT(ctx, boundingBox);
				break;
			case PathParser.ARC:
				this.pathA(ctx, boundingBox);
				break;
			case PathParser.CLOSE_PATH:
				this.pathZ(ctx, boundingBox);
				break;
		}
		return boundingBox;
	}
	getBoundingBox(_$1) {
		return this.path();
	}
	getMarkers() {
		var { pathParser } = this;
		var points = pathParser.getMarkerPoints();
		var angles = pathParser.getMarkerAngles();
		return points.map((point, i$2) => [point, angles[i$2]]);
	}
	renderChildren(ctx) {
		this.path(ctx);
		this.document.screen.mouse.checkPath(this, ctx);
		var fillRuleStyleProp = this.getStyle("fill-rule");
		if (ctx.fillStyle !== "") if (fillRuleStyleProp.getString("inherit") !== "inherit") ctx.fill(fillRuleStyleProp.getString());
		else ctx.fill();
		if (ctx.strokeStyle !== "") if (this.getAttribute("vector-effect").getString() === "non-scaling-stroke") {
			ctx.save();
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.stroke();
			ctx.restore();
		} else ctx.stroke();
		var markers = this.getMarkers();
		if (markers) {
			var markersLastIndex = markers.length - 1;
			var markerStartStyleProp = this.getStyle("marker-start");
			var markerMidStyleProp = this.getStyle("marker-mid");
			var markerEndStyleProp = this.getStyle("marker-end");
			if (markerStartStyleProp.isUrlDefinition()) {
				var marker = markerStartStyleProp.getDefinition();
				var [point, angle] = markers[0];
				marker.render(ctx, point, angle);
			}
			if (markerMidStyleProp.isUrlDefinition()) {
				var _marker = markerMidStyleProp.getDefinition();
				for (var i$2 = 1; i$2 < markersLastIndex; i$2++) {
					var [_point, _angle] = markers[i$2];
					_marker.render(ctx, _point, _angle);
				}
			}
			if (markerEndStyleProp.isUrlDefinition()) {
				var _marker2 = markerEndStyleProp.getDefinition();
				var [_point2, _angle2] = markers[markersLastIndex];
				_marker2.render(ctx, _point2, _angle2);
			}
		}
	}
	static pathM(pathParser) {
		var point = pathParser.getAsCurrentPoint();
		pathParser.start = pathParser.current;
		return { point };
	}
	pathM(ctx, boundingBox) {
		var { pathParser } = this;
		var { point } = PathElement.pathM(pathParser);
		var { x, y: y$1 } = point;
		pathParser.addMarker(point);
		boundingBox.addPoint(x, y$1);
		if (ctx) ctx.moveTo(x, y$1);
	}
	static pathL(pathParser) {
		var { current } = pathParser;
		var point = pathParser.getAsCurrentPoint();
		return {
			current,
			point
		};
	}
	pathL(ctx, boundingBox) {
		var { pathParser } = this;
		var { current, point } = PathElement.pathL(pathParser);
		var { x, y: y$1 } = point;
		pathParser.addMarker(point, current);
		boundingBox.addPoint(x, y$1);
		if (ctx) ctx.lineTo(x, y$1);
	}
	static pathH(pathParser) {
		var { current, command } = pathParser;
		var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
		pathParser.current = point;
		return {
			current,
			point
		};
	}
	pathH(ctx, boundingBox) {
		var { pathParser } = this;
		var { current, point } = PathElement.pathH(pathParser);
		var { x, y: y$1 } = point;
		pathParser.addMarker(point, current);
		boundingBox.addPoint(x, y$1);
		if (ctx) ctx.lineTo(x, y$1);
	}
	static pathV(pathParser) {
		var { current, command } = pathParser;
		var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
		pathParser.current = point;
		return {
			current,
			point
		};
	}
	pathV(ctx, boundingBox) {
		var { pathParser } = this;
		var { current, point } = PathElement.pathV(pathParser);
		var { x, y: y$1 } = point;
		pathParser.addMarker(point, current);
		boundingBox.addPoint(x, y$1);
		if (ctx) ctx.lineTo(x, y$1);
	}
	static pathC(pathParser) {
		var { current } = pathParser;
		var point = pathParser.getPoint("x1", "y1");
		var controlPoint = pathParser.getAsControlPoint("x2", "y2");
		var currentPoint = pathParser.getAsCurrentPoint();
		return {
			current,
			point,
			controlPoint,
			currentPoint
		};
	}
	pathC(ctx, boundingBox) {
		var { pathParser } = this;
		var { current, point, controlPoint, currentPoint } = PathElement.pathC(pathParser);
		pathParser.addMarker(currentPoint, controlPoint, point);
		boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
		if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
	}
	static pathS(pathParser) {
		var { current } = pathParser;
		var point = pathParser.getReflectedControlPoint();
		var controlPoint = pathParser.getAsControlPoint("x2", "y2");
		var currentPoint = pathParser.getAsCurrentPoint();
		return {
			current,
			point,
			controlPoint,
			currentPoint
		};
	}
	pathS(ctx, boundingBox) {
		var { pathParser } = this;
		var { current, point, controlPoint, currentPoint } = PathElement.pathS(pathParser);
		pathParser.addMarker(currentPoint, controlPoint, point);
		boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
		if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
	}
	static pathQ(pathParser) {
		var { current } = pathParser;
		var controlPoint = pathParser.getAsControlPoint("x1", "y1");
		var currentPoint = pathParser.getAsCurrentPoint();
		return {
			current,
			controlPoint,
			currentPoint
		};
	}
	pathQ(ctx, boundingBox) {
		var { pathParser } = this;
		var { current, controlPoint, currentPoint } = PathElement.pathQ(pathParser);
		pathParser.addMarker(currentPoint, controlPoint, controlPoint);
		boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
		if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
	}
	static pathT(pathParser) {
		var { current } = pathParser;
		var controlPoint = pathParser.getReflectedControlPoint();
		pathParser.control = controlPoint;
		var currentPoint = pathParser.getAsCurrentPoint();
		return {
			current,
			controlPoint,
			currentPoint
		};
	}
	pathT(ctx, boundingBox) {
		var { pathParser } = this;
		var { current, controlPoint, currentPoint } = PathElement.pathT(pathParser);
		pathParser.addMarker(currentPoint, controlPoint, controlPoint);
		boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
		if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
	}
	static pathA(pathParser) {
		var { current, command } = pathParser;
		var { rX, rY, xRot, lArcFlag, sweepFlag } = command;
		var xAxisRotation = xRot * (Math.PI / 180);
		var currentPoint = pathParser.getAsCurrentPoint();
		var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2);
		var l$1 = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);
		if (l$1 > 1) {
			rX *= Math.sqrt(l$1);
			rY *= Math.sqrt(l$1);
		}
		var s$1 = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));
		if (isNaN(s$1)) s$1 = 0;
		var cpp = new Point(s$1 * rX * currp.y / rY, s$1 * -rY * currp.x / rX);
		var centp = new Point((current.x + currentPoint.x) / 2 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
		var a1 = vectorsAngle([1, 0], [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY]);
		var u$1 = [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY];
		var v$1 = [(-currp.x - cpp.x) / rX, (-currp.y - cpp.y) / rY];
		var ad = vectorsAngle(u$1, v$1);
		if (vectorsRatio(u$1, v$1) <= -1) ad = Math.PI;
		if (vectorsRatio(u$1, v$1) >= 1) ad = 0;
		return {
			currentPoint,
			rX,
			rY,
			sweepFlag,
			xAxisRotation,
			centp,
			a1,
			ad
		};
	}
	pathA(ctx, boundingBox) {
		var { pathParser } = this;
		var { currentPoint, rX, rY, sweepFlag, xAxisRotation, centp, a1, ad } = PathElement.pathA(pathParser);
		var dir = 1 - sweepFlag ? 1 : -1;
		var ah = a1 + dir * (ad / 2);
		var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
		pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
		pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
		boundingBox.addPoint(currentPoint.x, currentPoint.y);
		if (ctx && !isNaN(a1) && !isNaN(ad)) {
			var r$1 = rX > rY ? rX : rY;
			var sx = rX > rY ? 1 : rX / rY;
			var sy = rX > rY ? rY / rX : 1;
			ctx.translate(centp.x, centp.y);
			ctx.rotate(xAxisRotation);
			ctx.scale(sx, sy);
			ctx.arc(0, 0, r$1, a1, a1 + ad, Boolean(1 - sweepFlag));
			ctx.scale(1 / sx, 1 / sy);
			ctx.rotate(-xAxisRotation);
			ctx.translate(-centp.x, -centp.y);
		}
	}
	static pathZ(pathParser) {
		pathParser.current = pathParser.start;
	}
	pathZ(ctx, boundingBox) {
		PathElement.pathZ(this.pathParser);
		if (ctx) {
			if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) ctx.closePath();
		}
	}
};
var GlyphElement = class extends PathElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "glyph";
		this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
		this.unicode = this.getAttribute("unicode").getString();
		this.arabicForm = this.getAttribute("arabic-form").getString();
	}
};
var TextElement = class TextElement extends RenderedElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, new.target === TextElement ? true : captureTextNodes);
		this.type = "text";
		this.x = 0;
		this.y = 0;
		this.measureCache = -1;
	}
	setContext(ctx) {
		var fromMeasure = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		super.setContext(ctx, fromMeasure);
		var textBaseline = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
		if (textBaseline) ctx.textBaseline = textBaseline;
	}
	initializeCoordinates() {
		this.x = 0;
		this.y = 0;
		this.leafTexts = [];
		this.textChunkStart = 0;
		this.minX = Number.POSITIVE_INFINITY;
		this.maxX = Number.NEGATIVE_INFINITY;
	}
	getBoundingBox(ctx) {
		if (this.type !== "text") return this.getTElementBoundingBox(ctx);
		this.initializeCoordinates();
		this.adjustChildCoordinatesRecursive(ctx);
		var boundingBox = null;
		this.children.forEach((_$1, i$2) => {
			var childBoundingBox = this.getChildBoundingBox(ctx, this, this, i$2);
			if (!boundingBox) boundingBox = childBoundingBox;
			else boundingBox.addBoundingBox(childBoundingBox);
		});
		return boundingBox;
	}
	getFontSize() {
		var { document: document$4, parent } = this;
		var inheritFontSize = Font.parse(document$4.ctx.font).fontSize;
		return parent.getStyle("font-size").getNumber(inheritFontSize);
	}
	getTElementBoundingBox(ctx) {
		var fontSize = this.getFontSize();
		return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
	}
	getGlyph(font, text, i$2) {
		var char = text[i$2];
		var glyph = null;
		if (font.isArabic) {
			var len = text.length;
			var prevChar = text[i$2 - 1];
			var nextChar = text[i$2 + 1];
			var arabicForm = "isolated";
			if ((i$2 === 0 || prevChar === " ") && i$2 < len - 1 && nextChar !== " ") arabicForm = "terminal";
			if (i$2 > 0 && prevChar !== " " && i$2 < len - 1 && nextChar !== " ") arabicForm = "medial";
			if (i$2 > 0 && prevChar !== " " && (i$2 === len - 1 || nextChar === " ")) arabicForm = "initial";
			if (typeof font.glyphs[char] !== "undefined") {
				var maybeGlyph = font.glyphs[char];
				glyph = maybeGlyph instanceof GlyphElement ? maybeGlyph : maybeGlyph[arabicForm];
			}
		} else glyph = font.glyphs[char];
		if (!glyph) glyph = font.missingGlyph;
		return glyph;
	}
	getText() {
		return "";
	}
	getTextFromNode(node$2) {
		var textNode = node$2 || this.node;
		var childNodes = Array.from(textNode.parentNode.childNodes);
		var index$1 = childNodes.indexOf(textNode);
		var lastIndex = childNodes.length - 1;
		var text = compressSpaces(textNode.textContent || "");
		if (index$1 === 0) text = trimLeft(text);
		if (index$1 === lastIndex) text = trimRight(text);
		return text;
	}
	renderChildren(ctx) {
		if (this.type !== "text") {
			this.renderTElementChildren(ctx);
			return;
		}
		this.initializeCoordinates();
		this.adjustChildCoordinatesRecursive(ctx);
		this.children.forEach((_$1, i$2) => {
			this.renderChild(ctx, this, this, i$2);
		});
		var { mouse } = this.document.screen;
		if (mouse.isWorking()) mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
	}
	renderTElementChildren(ctx) {
		var { document: document$4, parent } = this;
		var renderText = this.getText();
		var customFont = parent.getStyle("font-family").getDefinition();
		if (customFont) {
			var { unitsPerEm } = customFont.fontFace;
			var ctxFont = Font.parse(document$4.ctx.font);
			var fontSize = parent.getStyle("font-size").getNumber(ctxFont.fontSize);
			var fontStyle = parent.getStyle("font-style").getString(ctxFont.fontStyle);
			var scale = fontSize / unitsPerEm;
			var text = customFont.isRTL ? renderText.split("").reverse().join("") : renderText;
			var dx = toNumbers(parent.getAttribute("dx").getString());
			var len = text.length;
			for (var i$2 = 0; i$2 < len; i$2++) {
				var glyph = this.getGlyph(customFont, text, i$2);
				ctx.translate(this.x, this.y);
				ctx.scale(scale, -scale);
				var lw = ctx.lineWidth;
				ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;
				if (fontStyle === "italic") ctx.transform(1, 0, .4, 1, 0, 0);
				glyph.render(ctx);
				if (fontStyle === "italic") ctx.transform(1, 0, -.4, 1, 0, 0);
				ctx.lineWidth = lw;
				ctx.scale(1 / scale, -1 / scale);
				ctx.translate(-this.x, -this.y);
				this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;
				if (typeof dx[i$2] !== "undefined" && !isNaN(dx[i$2])) this.x += dx[i$2];
			}
			return;
		}
		var { x, y: y$1 } = this;
		if (ctx.fillStyle) ctx.fillText(renderText, x, y$1);
		if (ctx.strokeStyle) ctx.strokeText(renderText, x, y$1);
	}
	applyAnchoring() {
		if (this.textChunkStart >= this.leafTexts.length) return;
		var firstElement = this.leafTexts[this.textChunkStart];
		var textAnchor = firstElement.getStyle("text-anchor").getString("start");
		var isRTL = false;
		var shift = 0;
		if (textAnchor === "start" && !isRTL || textAnchor === "end" && isRTL) shift = firstElement.x - this.minX;
		else if (textAnchor === "end" && !isRTL || textAnchor === "start" && isRTL) shift = firstElement.x - this.maxX;
		else shift = firstElement.x - (this.minX + this.maxX) / 2;
		for (var i$2 = this.textChunkStart; i$2 < this.leafTexts.length; i$2++) this.leafTexts[i$2].x += shift;
		this.minX = Number.POSITIVE_INFINITY;
		this.maxX = Number.NEGATIVE_INFINITY;
		this.textChunkStart = this.leafTexts.length;
	}
	adjustChildCoordinatesRecursive(ctx) {
		this.children.forEach((_$1, i$2) => {
			this.adjustChildCoordinatesRecursiveCore(ctx, this, this, i$2);
		});
		this.applyAnchoring();
	}
	adjustChildCoordinatesRecursiveCore(ctx, textParent, parent, i$2) {
		var child = parent.children[i$2];
		if (child.children.length > 0) child.children.forEach((_$1, i$3) => {
			textParent.adjustChildCoordinatesRecursiveCore(ctx, textParent, child, i$3);
		});
		else this.adjustChildCoordinates(ctx, textParent, parent, i$2);
	}
	adjustChildCoordinates(ctx, textParent, parent, i$2) {
		var child = parent.children[i$2];
		if (typeof child.measureText !== "function") return child;
		ctx.save();
		child.setContext(ctx, true);
		var xAttr = child.getAttribute("x");
		var yAttr = child.getAttribute("y");
		var dxAttr = child.getAttribute("dx");
		var dyAttr = child.getAttribute("dy");
		var customFont = child.getStyle("font-family").getDefinition();
		var isRTL = Boolean(customFont) && customFont.isRTL;
		if (i$2 === 0) {
			if (!xAttr.hasValue()) xAttr.setValue(child.getInheritedAttribute("x"));
			if (!yAttr.hasValue()) yAttr.setValue(child.getInheritedAttribute("y"));
			if (!dxAttr.hasValue()) dxAttr.setValue(child.getInheritedAttribute("dx"));
			if (!dyAttr.hasValue()) dyAttr.setValue(child.getInheritedAttribute("dy"));
		}
		var width = child.measureText(ctx);
		if (isRTL) textParent.x -= width;
		if (xAttr.hasValue()) {
			textParent.applyAnchoring();
			child.x = xAttr.getPixels("x");
			if (dxAttr.hasValue()) child.x += dxAttr.getPixels("x");
		} else {
			if (dxAttr.hasValue()) textParent.x += dxAttr.getPixels("x");
			child.x = textParent.x;
		}
		textParent.x = child.x;
		if (!isRTL) textParent.x += width;
		if (yAttr.hasValue()) {
			child.y = yAttr.getPixels("y");
			if (dyAttr.hasValue()) child.y += dyAttr.getPixels("y");
		} else {
			if (dyAttr.hasValue()) textParent.y += dyAttr.getPixels("y");
			child.y = textParent.y;
		}
		textParent.y = child.y;
		textParent.leafTexts.push(child);
		textParent.minX = Math.min(textParent.minX, child.x, child.x + width);
		textParent.maxX = Math.max(textParent.maxX, child.x, child.x + width);
		child.clearContext(ctx);
		ctx.restore();
		return child;
	}
	getChildBoundingBox(ctx, textParent, parent, i$2) {
		var child = parent.children[i$2];
		if (typeof child.getBoundingBox !== "function") return null;
		var boundingBox = child.getBoundingBox(ctx);
		if (!boundingBox) return null;
		child.children.forEach((_$1, i$3) => {
			var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i$3);
			boundingBox.addBoundingBox(childBoundingBox);
		});
		return boundingBox;
	}
	renderChild(ctx, textParent, parent, i$2) {
		var child = parent.children[i$2];
		child.render(ctx);
		child.children.forEach((_$1, i$3) => {
			textParent.renderChild(ctx, textParent, child, i$3);
		});
	}
	measureText(ctx) {
		var { measureCache } = this;
		if (~measureCache) return measureCache;
		var renderText = this.getText();
		var measure = this.measureTargetText(ctx, renderText);
		this.measureCache = measure;
		return measure;
	}
	measureTargetText(ctx, targetText) {
		if (!targetText.length) return 0;
		var { parent } = this;
		var customFont = parent.getStyle("font-family").getDefinition();
		if (customFont) {
			var fontSize = this.getFontSize();
			var text = customFont.isRTL ? targetText.split("").reverse().join("") : targetText;
			var dx = toNumbers(parent.getAttribute("dx").getString());
			var len = text.length;
			var _measure = 0;
			for (var i$2 = 0; i$2 < len; i$2++) {
				var glyph = this.getGlyph(customFont, text, i$2);
				_measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
				if (typeof dx[i$2] !== "undefined" && !isNaN(dx[i$2])) _measure += dx[i$2];
			}
			return _measure;
		}
		if (!ctx.measureText) return targetText.length * 10;
		ctx.save();
		this.setContext(ctx, true);
		var { width: measure } = ctx.measureText(targetText);
		this.clearContext(ctx);
		ctx.restore();
		return measure;
	}
	/**
	* Inherits positional attributes from {@link TextElement} parent(s). Attributes
	* are only inherited from a parent to its first child.
	* @param name - The attribute name.
	* @returns The attribute value or null.
	*/
	getInheritedAttribute(name) {
		var current = this;
		while (current instanceof TextElement && current.isFirstChild()) {
			var parentAttr = current.parent.getAttribute(name);
			if (parentAttr.hasValue(true)) return parentAttr.getValue("0");
			current = current.parent;
		}
		return null;
	}
};
var TSpanElement = class TSpanElement extends TextElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, new.target === TSpanElement ? true : captureTextNodes);
		this.type = "tspan";
		this.text = this.children.length > 0 ? "" : this.getTextFromNode();
	}
	getText() {
		return this.text;
	}
};
var TextNode = class extends TSpanElement {
	constructor() {
		super(...arguments);
		this.type = "textNode";
	}
};
var SVGElement = class extends RenderedElement {
	constructor() {
		super(...arguments);
		this.type = "svg";
		this.root = false;
	}
	setContext(ctx) {
		var _this$node$parentNode;
		var { document: document$4 } = this;
		var { screen, window: window$1 } = document$4;
		var canvas = ctx.canvas;
		screen.setDefaults(ctx);
		if (canvas.style && typeof ctx.font !== "undefined" && window$1 && typeof window$1.getComputedStyle !== "undefined") {
			ctx.font = window$1.getComputedStyle(canvas).getPropertyValue("font");
			var fontSizeProp = new Property(document$4, "fontSize", Font.parse(ctx.font).fontSize);
			if (fontSizeProp.hasValue()) {
				document$4.rootEmSize = fontSizeProp.getPixels("y");
				document$4.emSize = document$4.rootEmSize;
			}
		}
		if (!this.getAttribute("x").hasValue()) this.getAttribute("x", true).setValue(0);
		if (!this.getAttribute("y").hasValue()) this.getAttribute("y", true).setValue(0);
		var { width, height } = screen.viewPort;
		if (!this.getStyle("width").hasValue()) this.getStyle("width", true).setValue("100%");
		if (!this.getStyle("height").hasValue()) this.getStyle("height", true).setValue("100%");
		if (!this.getStyle("color").hasValue()) this.getStyle("color", true).setValue("black");
		var refXAttr = this.getAttribute("refX");
		var refYAttr = this.getAttribute("refY");
		var viewBoxAttr = this.getAttribute("viewBox");
		var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
		var clip = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible";
		var minX = 0;
		var minY = 0;
		var clipX = 0;
		var clipY = 0;
		if (viewBox) {
			minX = viewBox[0];
			minY = viewBox[1];
		}
		if (!this.root) {
			width = this.getStyle("width").getPixels("x");
			height = this.getStyle("height").getPixels("y");
			if (this.type === "marker") {
				clipX = minX;
				clipY = minY;
				minX = 0;
				minY = 0;
			}
		}
		screen.viewPort.setCurrent(width, height);
		if (this.node && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === "foreignObject") && this.getStyle("transform", false, true).hasValue() && !this.getStyle("transform-origin", false, true).hasValue()) this.getStyle("transform-origin", true, true).setValue("50% 50%");
		super.setContext(ctx);
		ctx.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y"));
		if (viewBox) {
			width = viewBox[2];
			height = viewBox[3];
		}
		document$4.setViewBox({
			ctx,
			aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
			width: screen.viewPort.width,
			desiredWidth: width,
			height: screen.viewPort.height,
			desiredHeight: height,
			minX,
			minY,
			refX: refXAttr.getValue(),
			refY: refYAttr.getValue(),
			clip,
			clipX,
			clipY
		});
		if (viewBox) {
			screen.viewPort.removeCurrent();
			screen.viewPort.setCurrent(width, height);
		}
	}
	clearContext(ctx) {
		super.clearContext(ctx);
		this.document.screen.viewPort.removeCurrent();
	}
	/**
	* Resize SVG to fit in given size.
	* @param width
	* @param height
	* @param preserveAspectRatio
	*/
	resize(width) {
		var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : width;
		var preserveAspectRatio = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
		var widthAttr = this.getAttribute("width", true);
		var heightAttr = this.getAttribute("height", true);
		var viewBoxAttr = this.getAttribute("viewBox");
		var styleAttr = this.getAttribute("style");
		var originWidth = widthAttr.getNumber(0);
		var originHeight = heightAttr.getNumber(0);
		if (preserveAspectRatio) if (typeof preserveAspectRatio === "string") this.getAttribute("preserveAspectRatio", true).setValue(preserveAspectRatio);
		else {
			var preserveAspectRatioAttr = this.getAttribute("preserveAspectRatio");
			if (preserveAspectRatioAttr.hasValue()) preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
		}
		widthAttr.setValue(width);
		heightAttr.setValue(height);
		if (!viewBoxAttr.hasValue()) viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
		if (styleAttr.hasValue()) {
			var widthStyle = this.getStyle("width");
			var heightStyle = this.getStyle("height");
			if (widthStyle.hasValue()) widthStyle.setValue("".concat(width, "px"));
			if (heightStyle.hasValue()) heightStyle.setValue("".concat(height, "px"));
		}
	}
};
var RectElement = class extends PathElement {
	constructor() {
		super(...arguments);
		this.type = "rect";
	}
	path(ctx) {
		var x = this.getAttribute("x").getPixels("x");
		var y$1 = this.getAttribute("y").getPixels("y");
		var width = this.getStyle("width", false, true).getPixels("x");
		var height = this.getStyle("height", false, true).getPixels("y");
		var rxAttr = this.getAttribute("rx");
		var ryAttr = this.getAttribute("ry");
		var rx = rxAttr.getPixels("x");
		var ry = ryAttr.getPixels("y");
		if (rxAttr.hasValue() && !ryAttr.hasValue()) ry = rx;
		if (ryAttr.hasValue() && !rxAttr.hasValue()) rx = ry;
		rx = Math.min(rx, width / 2);
		ry = Math.min(ry, height / 2);
		if (ctx) {
			var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
			ctx.beginPath();
			if (height > 0 && width > 0) {
				ctx.moveTo(x + rx, y$1);
				ctx.lineTo(x + width - rx, y$1);
				ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y$1, x + width, y$1 + ry - KAPPA * ry, x + width, y$1 + ry);
				ctx.lineTo(x + width, y$1 + height - ry);
				ctx.bezierCurveTo(x + width, y$1 + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y$1 + height, x + width - rx, y$1 + height);
				ctx.lineTo(x + rx, y$1 + height);
				ctx.bezierCurveTo(x + rx - KAPPA * rx, y$1 + height, x, y$1 + height - ry + KAPPA * ry, x, y$1 + height - ry);
				ctx.lineTo(x, y$1 + ry);
				ctx.bezierCurveTo(x, y$1 + ry - KAPPA * ry, x + rx - KAPPA * rx, y$1, x + rx, y$1);
				ctx.closePath();
			}
		}
		return new BoundingBox(x, y$1, x + width, y$1 + height);
	}
	getMarkers() {
		return null;
	}
};
var CircleElement = class extends PathElement {
	constructor() {
		super(...arguments);
		this.type = "circle";
	}
	path(ctx) {
		var cx = this.getAttribute("cx").getPixels("x");
		var cy = this.getAttribute("cy").getPixels("y");
		var r$1 = this.getAttribute("r").getPixels();
		if (ctx && r$1 > 0) {
			ctx.beginPath();
			ctx.arc(cx, cy, r$1, 0, Math.PI * 2, false);
			ctx.closePath();
		}
		return new BoundingBox(cx - r$1, cy - r$1, cx + r$1, cy + r$1);
	}
	getMarkers() {
		return null;
	}
};
var EllipseElement = class extends PathElement {
	constructor() {
		super(...arguments);
		this.type = "ellipse";
	}
	path(ctx) {
		var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
		var rx = this.getAttribute("rx").getPixels("x");
		var ry = this.getAttribute("ry").getPixels("y");
		var cx = this.getAttribute("cx").getPixels("x");
		var cy = this.getAttribute("cy").getPixels("y");
		if (ctx && rx > 0 && ry > 0) {
			ctx.beginPath();
			ctx.moveTo(cx + rx, cy);
			ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
			ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
			ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
			ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
			ctx.closePath();
		}
		return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
	}
	getMarkers() {
		return null;
	}
};
var LineElement = class extends PathElement {
	constructor() {
		super(...arguments);
		this.type = "line";
	}
	getPoints() {
		return [new Point(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new Point(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
	}
	path(ctx) {
		var [{ x: x0, y: y0 }, { x: x1, y: y1 }] = this.getPoints();
		if (ctx) {
			ctx.beginPath();
			ctx.moveTo(x0, y0);
			ctx.lineTo(x1, y1);
		}
		return new BoundingBox(x0, y0, x1, y1);
	}
	getMarkers() {
		var [p0, p1] = this.getPoints();
		var a$1 = p0.angleTo(p1);
		return [[p0, a$1], [p1, a$1]];
	}
};
var PolylineElement = class extends PathElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "polyline";
		this.points = [];
		this.points = Point.parsePath(this.getAttribute("points").getString());
	}
	path(ctx) {
		var { points } = this;
		var [{ x: x0, y: y0 }] = points;
		var boundingBox = new BoundingBox(x0, y0);
		if (ctx) {
			ctx.beginPath();
			ctx.moveTo(x0, y0);
		}
		points.forEach((_ref) => {
			var { x, y: y$1 } = _ref;
			boundingBox.addPoint(x, y$1);
			if (ctx) ctx.lineTo(x, y$1);
		});
		return boundingBox;
	}
	getMarkers() {
		var { points } = this;
		var lastIndex = points.length - 1;
		var markers = [];
		points.forEach((point, i$2) => {
			if (i$2 === lastIndex) return;
			markers.push([point, point.angleTo(points[i$2 + 1])]);
		});
		if (markers.length > 0) markers.push([points[points.length - 1], markers[markers.length - 1][1]]);
		return markers;
	}
};
var PolygonElement = class extends PolylineElement {
	constructor() {
		super(...arguments);
		this.type = "polygon";
	}
	path(ctx) {
		var boundingBox = super.path(ctx);
		var [{ x, y: y$1 }] = this.points;
		if (ctx) {
			ctx.lineTo(x, y$1);
			ctx.closePath();
		}
		return boundingBox;
	}
};
var PatternElement = class extends Element {
	constructor() {
		super(...arguments);
		this.type = "pattern";
	}
	createPattern(ctx, _$1, parentOpacityProp) {
		var width = this.getStyle("width").getPixels("x", true);
		var height = this.getStyle("height").getPixels("y", true);
		var patternSvg = new SVGElement(this.document, null);
		patternSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
		patternSvg.attributes.width = new Property(this.document, "width", "".concat(width, "px"));
		patternSvg.attributes.height = new Property(this.document, "height", "".concat(height, "px"));
		patternSvg.attributes.transform = new Property(this.document, "transform", this.getAttribute("patternTransform").getValue());
		patternSvg.children = this.children;
		var patternCanvas = this.document.createCanvas(width, height);
		var patternCtx = patternCanvas.getContext("2d");
		var xAttr = this.getAttribute("x");
		var yAttr = this.getAttribute("y");
		if (xAttr.hasValue() && yAttr.hasValue()) patternCtx.translate(xAttr.getPixels("x", true), yAttr.getPixels("y", true));
		if (parentOpacityProp.hasValue()) this.styles["fill-opacity"] = parentOpacityProp;
		else Reflect.deleteProperty(this.styles, "fill-opacity");
		for (var x = -1; x <= 1; x++) for (var y$1 = -1; y$1 <= 1; y$1++) {
			patternCtx.save();
			patternSvg.attributes.x = new Property(this.document, "x", x * patternCanvas.width);
			patternSvg.attributes.y = new Property(this.document, "y", y$1 * patternCanvas.height);
			patternSvg.render(patternCtx);
			patternCtx.restore();
		}
		return ctx.createPattern(patternCanvas, "repeat");
	}
};
var MarkerElement = class extends Element {
	constructor() {
		super(...arguments);
		this.type = "marker";
	}
	render(ctx, point, angle) {
		if (!point) return;
		var { x, y: y$1 } = point;
		var orient = this.getAttribute("orient").getString("auto");
		var markerUnits = this.getAttribute("markerUnits").getString("strokeWidth");
		ctx.translate(x, y$1);
		if (orient === "auto") ctx.rotate(angle);
		if (markerUnits === "strokeWidth") ctx.scale(ctx.lineWidth, ctx.lineWidth);
		ctx.save();
		var markerSvg = new SVGElement(this.document, null);
		markerSvg.type = this.type;
		markerSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
		markerSvg.attributes.refX = new Property(this.document, "refX", this.getAttribute("refX").getValue());
		markerSvg.attributes.refY = new Property(this.document, "refY", this.getAttribute("refY").getValue());
		markerSvg.attributes.width = new Property(this.document, "width", this.getAttribute("markerWidth").getValue());
		markerSvg.attributes.height = new Property(this.document, "height", this.getAttribute("markerHeight").getValue());
		markerSvg.attributes.overflow = new Property(this.document, "overflow", this.getAttribute("overflow").getValue());
		markerSvg.attributes.fill = new Property(this.document, "fill", this.getAttribute("fill").getColor("black"));
		markerSvg.attributes.stroke = new Property(this.document, "stroke", this.getAttribute("stroke").getValue("none"));
		markerSvg.children = this.children;
		markerSvg.render(ctx);
		ctx.restore();
		if (markerUnits === "strokeWidth") ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
		if (orient === "auto") ctx.rotate(-angle);
		ctx.translate(-x, -y$1);
	}
};
var DefsElement = class extends Element {
	constructor() {
		super(...arguments);
		this.type = "defs";
	}
	render() {}
};
var GElement = class extends RenderedElement {
	constructor() {
		super(...arguments);
		this.type = "g";
	}
	getBoundingBox(ctx) {
		var boundingBox = new BoundingBox();
		this.children.forEach((child) => {
			boundingBox.addBoundingBox(child.getBoundingBox(ctx));
		});
		return boundingBox;
	}
};
var GradientElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.attributesToInherit = ["gradientUnits"];
		this.stops = [];
		var { stops, children } = this;
		children.forEach((child) => {
			if (child.type === "stop") stops.push(child);
		});
	}
	getGradientUnits() {
		return this.getAttribute("gradientUnits").getString("objectBoundingBox");
	}
	createGradient(ctx, element, parentOpacityProp) {
		var stopsContainer = this;
		if (this.getHrefAttribute().hasValue()) {
			stopsContainer = this.getHrefAttribute().getDefinition();
			this.inheritStopContainer(stopsContainer);
		}
		var { stops } = stopsContainer;
		var gradient = this.getGradient(ctx, element);
		if (!gradient) return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
		stops.forEach((stop) => {
			gradient.addColorStop(stop.offset, this.addParentOpacity(parentOpacityProp, stop.color));
		});
		if (this.getAttribute("gradientTransform").hasValue()) {
			var { document: document$4 } = this;
			var { MAX_VIRTUAL_PIXELS, viewPort } = document$4.screen;
			var [rootView] = viewPort.viewPorts;
			var rect = new RectElement(document$4, null);
			rect.attributes.x = new Property(document$4, "x", -MAX_VIRTUAL_PIXELS / 3);
			rect.attributes.y = new Property(document$4, "y", -MAX_VIRTUAL_PIXELS / 3);
			rect.attributes.width = new Property(document$4, "width", MAX_VIRTUAL_PIXELS);
			rect.attributes.height = new Property(document$4, "height", MAX_VIRTUAL_PIXELS);
			var group = new GElement(document$4, null);
			group.attributes.transform = new Property(document$4, "transform", this.getAttribute("gradientTransform").getValue());
			group.children = [rect];
			var patternSvg = new SVGElement(document$4, null);
			patternSvg.attributes.x = new Property(document$4, "x", 0);
			patternSvg.attributes.y = new Property(document$4, "y", 0);
			patternSvg.attributes.width = new Property(document$4, "width", rootView.width);
			patternSvg.attributes.height = new Property(document$4, "height", rootView.height);
			patternSvg.children = [group];
			var patternCanvas = document$4.createCanvas(rootView.width, rootView.height);
			var patternCtx = patternCanvas.getContext("2d");
			patternCtx.fillStyle = gradient;
			patternSvg.render(patternCtx);
			return patternCtx.createPattern(patternCanvas, "no-repeat");
		}
		return gradient;
	}
	inheritStopContainer(stopsContainer) {
		this.attributesToInherit.forEach((attributeToInherit) => {
			if (!this.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) this.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
		});
	}
	addParentOpacity(parentOpacityProp, color) {
		if (parentOpacityProp.hasValue()) return new Property(this.document, "color", color).addOpacity(parentOpacityProp).getColor();
		return color;
	}
};
var LinearGradientElement = class extends GradientElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "linearGradient";
		this.attributesToInherit.push("x1", "y1", "x2", "y2");
	}
	getGradient(ctx, element) {
		var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
		var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;
		if (isBoundingBoxUnits && !boundingBox) return null;
		if (!this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue()) {
			this.getAttribute("x1", true).setValue(0);
			this.getAttribute("y1", true).setValue(0);
			this.getAttribute("x2", true).setValue(1);
			this.getAttribute("y2", true).setValue(0);
		}
		var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x");
		var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y");
		var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x");
		var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
		if (x1 === x2 && y1 === y2) return null;
		return ctx.createLinearGradient(x1, y1, x2, y2);
	}
};
var RadialGradientElement = class extends GradientElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "radialGradient";
		this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
	}
	getGradient(ctx, element) {
		var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
		var boundingBox = element.getBoundingBox(ctx);
		if (isBoundingBoxUnits && !boundingBox) return null;
		if (!this.getAttribute("cx").hasValue()) this.getAttribute("cx", true).setValue("50%");
		if (!this.getAttribute("cy").hasValue()) this.getAttribute("cy", true).setValue("50%");
		if (!this.getAttribute("r").hasValue()) this.getAttribute("r", true).setValue("50%");
		var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x");
		var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y");
		var fx = cx;
		var fy = cy;
		if (this.getAttribute("fx").hasValue()) fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x");
		if (this.getAttribute("fy").hasValue()) fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y");
		var r$1 = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels();
		var fr = this.getAttribute("fr").getPixels();
		return ctx.createRadialGradient(fx, fy, fr, cx, cy, r$1);
	}
};
var StopElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "stop";
		var offset = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber()));
		var stopOpacity = this.getStyle("stop-opacity");
		var stopColor = this.getStyle("stop-color", true);
		if (stopColor.getString() === "") stopColor.setValue("#000");
		if (stopOpacity.hasValue()) stopColor = stopColor.addOpacity(stopOpacity);
		this.offset = offset;
		this.color = stopColor.getColor();
	}
};
var AnimateElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "animate";
		this.duration = 0;
		this.initialValue = null;
		this.initialUnits = "";
		this.removed = false;
		this.frozen = false;
		document$4.screen.animations.push(this);
		this.begin = this.getAttribute("begin").getMilliseconds();
		this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds();
		this.from = this.getAttribute("from");
		this.to = this.getAttribute("to");
		this.values = new Property(document$4, "values", null);
		var valuesAttr = this.getAttribute("values");
		if (valuesAttr.hasValue()) this.values.setValue(valuesAttr.getString().split(";"));
	}
	getProperty() {
		var attributeType = this.getAttribute("attributeType").getString();
		var attributeName = this.getAttribute("attributeName").getString();
		if (attributeType === "CSS") return this.parent.getStyle(attributeName, true);
		return this.parent.getAttribute(attributeName, true);
	}
	calcValue() {
		var { initialUnits } = this;
		var { progress, from, to } = this.getProgress();
		var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;
		if (initialUnits === "%") newValue *= 100;
		return "".concat(newValue).concat(initialUnits);
	}
	update(delta) {
		var { parent } = this;
		var prop = this.getProperty();
		if (!this.initialValue) {
			this.initialValue = prop.getString();
			this.initialUnits = prop.getUnits();
		}
		if (this.duration > this.maxDuration) {
			var fill = this.getAttribute("fill").getString("remove");
			if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite") this.duration = 0;
			else if (fill === "freeze" && !this.frozen) {
				this.frozen = true;
				parent.animationFrozen = true;
				parent.animationFrozenValue = prop.getString();
			} else if (fill === "remove" && !this.removed) {
				this.removed = true;
				prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
				return true;
			}
			return false;
		}
		this.duration += delta;
		var updated = false;
		if (this.begin < this.duration) {
			var newValue = this.calcValue();
			var typeAttr = this.getAttribute("type");
			if (typeAttr.hasValue()) {
				var type = typeAttr.getString();
				newValue = "".concat(type, "(").concat(newValue, ")");
			}
			prop.setValue(newValue);
			updated = true;
		}
		return updated;
	}
	getProgress() {
		var { document: document$4, values: values$1 } = this;
		var result = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) };
		if (values$1.hasValue()) {
			var p$1 = result.progress * (values$1.getValue().length - 1);
			var lb = Math.floor(p$1);
			var ub = Math.ceil(p$1);
			result.from = new Property(document$4, "from", parseFloat(values$1.getValue()[lb]));
			result.to = new Property(document$4, "to", parseFloat(values$1.getValue()[ub]));
			result.progress = (p$1 - lb) / (ub - lb);
		} else {
			result.from = this.from;
			result.to = this.to;
		}
		return result;
	}
};
var AnimateColorElement = class extends AnimateElement {
	constructor() {
		super(...arguments);
		this.type = "animateColor";
	}
	calcValue() {
		var { progress, from, to } = this.getProgress();
		var colorFrom = new import_rgbcolor.default(from.getColor());
		var colorTo = new import_rgbcolor.default(to.getColor());
		if (colorFrom.ok && colorTo.ok) {
			var r$1 = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
			var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
			var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress;
			return "rgb(".concat(Math.floor(r$1), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
		}
		return this.getAttribute("from").getColor();
	}
};
var AnimateTransformElement = class extends AnimateElement {
	constructor() {
		super(...arguments);
		this.type = "animateTransform";
	}
	calcValue() {
		var { progress, from, to } = this.getProgress();
		var transformFrom = toNumbers(from.getString());
		var transformTo = toNumbers(to.getString());
		return transformFrom.map((from$1, i$2) => {
			var to$1 = transformTo[i$2];
			return from$1 + (to$1 - from$1) * progress;
		}).join(" ");
	}
};
var FontElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "font";
		this.glyphs = Object.create(null);
		this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
		var { definitions } = document$4;
		var { children } = this;
		for (var child of children) switch (child.type) {
			case "font-face":
				this.fontFace = child;
				var fontFamilyStyle = child.getStyle("font-family");
				if (fontFamilyStyle.hasValue()) definitions[fontFamilyStyle.getString()] = this;
				break;
			case "missing-glyph":
				this.missingGlyph = child;
				break;
			case "glyph":
				var glyph = child;
				if (glyph.arabicForm) {
					this.isRTL = true;
					this.isArabic = true;
					if (typeof this.glyphs[glyph.unicode] === "undefined") this.glyphs[glyph.unicode] = Object.create(null);
					this.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
				} else this.glyphs[glyph.unicode] = glyph;
				break;
		}
	}
	render() {}
};
var FontFaceElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "font-face";
		this.ascent = this.getAttribute("ascent").getNumber();
		this.descent = this.getAttribute("descent").getNumber();
		this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
	}
};
var MissingGlyphElement = class extends PathElement {
	constructor() {
		super(...arguments);
		this.type = "missing-glyph";
		this.horizAdvX = 0;
	}
};
var TRefElement = class extends TextElement {
	constructor() {
		super(...arguments);
		this.type = "tref";
	}
	getText() {
		var element = this.getHrefAttribute().getDefinition();
		if (element) {
			var firstChild = element.children[0];
			if (firstChild) return firstChild.getText();
		}
		return "";
	}
};
var AElement = class extends TextElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "a";
		var { childNodes } = node$2;
		var firstChild = childNodes[0];
		var hasText = childNodes.length > 0 && Array.from(childNodes).every((node$3) => node$3.nodeType === 3);
		this.hasText = hasText;
		this.text = hasText ? this.getTextFromNode(firstChild) : "";
	}
	getText() {
		return this.text;
	}
	renderChildren(ctx) {
		if (this.hasText) {
			super.renderChildren(ctx);
			var { document: document$4, x, y: y$1 } = this;
			var { mouse } = document$4.screen;
			var fontSize = new Property(document$4, "fontSize", Font.parse(document$4.ctx.font).fontSize);
			if (mouse.isWorking()) mouse.checkBoundingBox(this, new BoundingBox(x, y$1 - fontSize.getPixels("y"), x + this.measureText(ctx), y$1));
		} else if (this.children.length > 0) {
			var g = new GElement(this.document, null);
			g.children = this.children;
			g.parent = this;
			g.render(ctx);
		}
	}
	onClick() {
		var { window: window$1 } = this.document;
		if (window$1) window$1.open(this.getHrefAttribute().getString());
	}
	onMouseMove() {
		var ctx = this.document.ctx;
		ctx.canvas.style.cursor = "pointer";
	}
};
function ownKeys$2(object, enumerableOnly) {
	var keys$1 = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly) symbols = symbols.filter(function(sym) {
			return Object.getOwnPropertyDescriptor(object, sym).enumerable;
		});
		keys$1.push.apply(keys$1, symbols);
	}
	return keys$1;
}
function _objectSpread$2(target) {
	for (var i$2 = 1; i$2 < arguments.length; i$2++) {
		var source = arguments[i$2] != null ? arguments[i$2] : {};
		if (i$2 % 2) ownKeys$2(Object(source), true).forEach(function(key) {
			_defineProperty(target, key, source[key]);
		});
		else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		else ownKeys$2(Object(source)).forEach(function(key) {
			Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
		});
	}
	return target;
}
var TextPathElement = class extends TextElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "textPath";
		this.textWidth = 0;
		this.textHeight = 0;
		this.pathLength = -1;
		this.glyphInfo = null;
		this.letterSpacingCache = [];
		this.measuresCache = new Map([["", 0]]);
		var pathElement = this.getHrefAttribute().getDefinition();
		this.text = this.getTextFromNode();
		this.dataArray = this.parsePathData(pathElement);
	}
	getText() {
		return this.text;
	}
	path(ctx) {
		var { dataArray } = this;
		if (ctx) ctx.beginPath();
		dataArray.forEach((_ref) => {
			var { type, points } = _ref;
			switch (type) {
				case PathParser.LINE_TO:
					if (ctx) ctx.lineTo(points[0], points[1]);
					break;
				case PathParser.MOVE_TO:
					if (ctx) ctx.moveTo(points[0], points[1]);
					break;
				case PathParser.CURVE_TO:
					if (ctx) ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
					break;
				case PathParser.QUAD_TO:
					if (ctx) ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
					break;
				case PathParser.ARC:
					var [cx, cy, rx, ry, theta, dTheta, psi, fs] = points;
					var r$1 = rx > ry ? rx : ry;
					var scaleX = rx > ry ? 1 : rx / ry;
					var scaleY = rx > ry ? ry / rx : 1;
					if (ctx) {
						ctx.translate(cx, cy);
						ctx.rotate(psi);
						ctx.scale(scaleX, scaleY);
						ctx.arc(0, 0, r$1, theta, theta + dTheta, Boolean(1 - fs));
						ctx.scale(1 / scaleX, 1 / scaleY);
						ctx.rotate(-psi);
						ctx.translate(-cx, -cy);
					}
					break;
				case PathParser.CLOSE_PATH:
					if (ctx) ctx.closePath();
					break;
			}
		});
	}
	renderChildren(ctx) {
		this.setTextData(ctx);
		ctx.save();
		var textDecoration = this.parent.getStyle("text-decoration").getString();
		var fontSize = this.getFontSize();
		var { glyphInfo } = this;
		var fill = ctx.fillStyle;
		if (textDecoration === "underline") ctx.beginPath();
		glyphInfo.forEach((glyph, i$2) => {
			var { p0, p1, rotation, text: partialText } = glyph;
			ctx.save();
			ctx.translate(p0.x, p0.y);
			ctx.rotate(rotation);
			if (ctx.fillStyle) ctx.fillText(partialText, 0, 0);
			if (ctx.strokeStyle) ctx.strokeText(partialText, 0, 0);
			ctx.restore();
			if (textDecoration === "underline") {
				if (i$2 === 0) ctx.moveTo(p0.x, p0.y + fontSize / 8);
				ctx.lineTo(p1.x, p1.y + fontSize / 5);
			}
		});
		if (textDecoration === "underline") {
			ctx.lineWidth = fontSize / 20;
			ctx.strokeStyle = fill;
			ctx.stroke();
			ctx.closePath();
		}
		ctx.restore();
	}
	getLetterSpacingAt() {
		var idx = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
		return this.letterSpacingCache[idx] || 0;
	}
	findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c$2, charI) {
		var offset = inputOffset;
		var glyphWidth = this.measureText(ctx, c$2);
		if (c$2 === " " && anchor === "justify" && textFullWidth < fullPathWidth) glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
		if (charI > -1) offset += this.getLetterSpacingAt(charI);
		var splineStep = this.textHeight / 20;
		var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
		var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
		var segment = {
			p0,
			p1
		};
		var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;
		if (dy) {
			var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
			var dyY = Math.cos(-rotation) * dy;
			segment.p0 = _objectSpread$2(_objectSpread$2({}, p0), {}, {
				x: p0.x + dyX,
				y: p0.y + dyY
			});
			segment.p1 = _objectSpread$2(_objectSpread$2({}, p1), {}, {
				x: p1.x + dyX,
				y: p1.y + dyY
			});
		}
		offset += glyphWidth;
		return {
			offset,
			segment,
			rotation
		};
	}
	measureText(ctx, text) {
		var { measuresCache } = this;
		var targetText = text || this.getText();
		if (measuresCache.has(targetText)) return measuresCache.get(targetText);
		var measure = this.measureTargetText(ctx, targetText);
		measuresCache.set(targetText, measure);
		return measure;
	}
	setTextData(ctx) {
		if (this.glyphInfo) return;
		var renderText = this.getText();
		var chars = renderText.split("");
		var spacesNumber = renderText.split(" ").length - 1;
		var dx = this.parent.getAttribute("dx").split().map((_$1) => _$1.getPixels("x"));
		var dy = this.parent.getAttribute("dy").getPixels("y");
		var anchor = this.parent.getStyle("text-anchor").getString("start");
		var thisSpacing = this.getStyle("letter-spacing");
		var parentSpacing = this.parent.getStyle("letter-spacing");
		var letterSpacing = 0;
		if (!thisSpacing.hasValue() || thisSpacing.getValue() === "inherit") letterSpacing = parentSpacing.getPixels();
		else if (thisSpacing.hasValue()) {
			if (thisSpacing.getValue() !== "initial" && thisSpacing.getValue() !== "unset") letterSpacing = thisSpacing.getPixels();
		}
		var letterSpacingCache = [];
		var textLen = renderText.length;
		this.letterSpacingCache = letterSpacingCache;
		for (var i$2 = 0; i$2 < textLen; i$2++) letterSpacingCache.push(typeof dx[i$2] !== "undefined" ? dx[i$2] : letterSpacing);
		var dxSum = letterSpacingCache.reduce((acc, cur, i$3) => i$3 === 0 ? 0 : acc + cur || 0, 0);
		var textWidth = this.measureText(ctx);
		var textFullWidth = Math.max(textWidth + dxSum, 0);
		this.textWidth = textWidth;
		this.textHeight = this.getFontSize();
		this.glyphInfo = [];
		var fullPathWidth = this.getPathLength();
		var startOffset = this.getStyle("startOffset").getNumber(0) * fullPathWidth;
		var offset = 0;
		if (anchor === "middle" || anchor === "center") offset = -textFullWidth / 2;
		if (anchor === "end" || anchor === "right") offset = -textFullWidth;
		offset += startOffset;
		chars.forEach((char, i$3) => {
			var { offset: nextOffset, segment, rotation } = this.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, char, i$3);
			offset = nextOffset;
			if (!segment.p0 || !segment.p1) return;
			this.glyphInfo.push({
				text: chars[i$3],
				p0: segment.p0,
				p1: segment.p1,
				rotation
			});
		});
	}
	parsePathData(path$1) {
		this.pathLength = -1;
		if (!path$1) return [];
		var pathCommands = [];
		var { pathParser } = path$1;
		pathParser.reset();
		while (!pathParser.isEnd()) {
			var { current } = pathParser;
			var startX = current ? current.x : 0;
			var startY = current ? current.y : 0;
			var command = pathParser.next();
			var nextCommandType = command.type;
			var points = [];
			switch (command.type) {
				case PathParser.MOVE_TO:
					this.pathM(pathParser, points);
					break;
				case PathParser.LINE_TO:
					nextCommandType = this.pathL(pathParser, points);
					break;
				case PathParser.HORIZ_LINE_TO:
					nextCommandType = this.pathH(pathParser, points);
					break;
				case PathParser.VERT_LINE_TO:
					nextCommandType = this.pathV(pathParser, points);
					break;
				case PathParser.CURVE_TO:
					this.pathC(pathParser, points);
					break;
				case PathParser.SMOOTH_CURVE_TO:
					nextCommandType = this.pathS(pathParser, points);
					break;
				case PathParser.QUAD_TO:
					this.pathQ(pathParser, points);
					break;
				case PathParser.SMOOTH_QUAD_TO:
					nextCommandType = this.pathT(pathParser, points);
					break;
				case PathParser.ARC:
					points = this.pathA(pathParser);
					break;
				case PathParser.CLOSE_PATH:
					PathElement.pathZ(pathParser);
					break;
			}
			if (command.type !== PathParser.CLOSE_PATH) pathCommands.push({
				type: nextCommandType,
				points,
				start: {
					x: startX,
					y: startY
				},
				pathLength: this.calcLength(startX, startY, nextCommandType, points)
			});
			else pathCommands.push({
				type: PathParser.CLOSE_PATH,
				points: [],
				pathLength: 0
			});
		}
		return pathCommands;
	}
	pathM(pathParser, points) {
		var { x, y: y$1 } = PathElement.pathM(pathParser).point;
		points.push(x, y$1);
	}
	pathL(pathParser, points) {
		var { x, y: y$1 } = PathElement.pathL(pathParser).point;
		points.push(x, y$1);
		return PathParser.LINE_TO;
	}
	pathH(pathParser, points) {
		var { x, y: y$1 } = PathElement.pathH(pathParser).point;
		points.push(x, y$1);
		return PathParser.LINE_TO;
	}
	pathV(pathParser, points) {
		var { x, y: y$1 } = PathElement.pathV(pathParser).point;
		points.push(x, y$1);
		return PathParser.LINE_TO;
	}
	pathC(pathParser, points) {
		var { point, controlPoint, currentPoint } = PathElement.pathC(pathParser);
		points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
	}
	pathS(pathParser, points) {
		var { point, controlPoint, currentPoint } = PathElement.pathS(pathParser);
		points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
		return PathParser.CURVE_TO;
	}
	pathQ(pathParser, points) {
		var { controlPoint, currentPoint } = PathElement.pathQ(pathParser);
		points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
	}
	pathT(pathParser, points) {
		var { controlPoint, currentPoint } = PathElement.pathT(pathParser);
		points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
		return PathParser.QUAD_TO;
	}
	pathA(pathParser) {
		var { rX, rY, sweepFlag, xAxisRotation, centp, a1, ad } = PathElement.pathA(pathParser);
		if (sweepFlag === 0 && ad > 0) ad -= 2 * Math.PI;
		if (sweepFlag === 1 && ad < 0) ad += 2 * Math.PI;
		return [
			centp.x,
			centp.y,
			rX,
			rY,
			a1,
			ad,
			xAxisRotation,
			sweepFlag
		];
	}
	calcLength(x, y$1, commandType, points) {
		var len = 0;
		var p1 = null;
		var p2 = null;
		var t$1 = 0;
		switch (commandType) {
			case PathParser.LINE_TO: return this.getLineLength(x, y$1, points[0], points[1]);
			case PathParser.CURVE_TO:
				len = 0;
				p1 = this.getPointOnCubicBezier(0, x, y$1, points[0], points[1], points[2], points[3], points[4], points[5]);
				for (t$1 = .01; t$1 <= 1; t$1 += .01) {
					p2 = this.getPointOnCubicBezier(t$1, x, y$1, points[0], points[1], points[2], points[3], points[4], points[5]);
					len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
					p1 = p2;
				}
				return len;
			case PathParser.QUAD_TO:
				len = 0;
				p1 = this.getPointOnQuadraticBezier(0, x, y$1, points[0], points[1], points[2], points[3]);
				for (t$1 = .01; t$1 <= 1; t$1 += .01) {
					p2 = this.getPointOnQuadraticBezier(t$1, x, y$1, points[0], points[1], points[2], points[3]);
					len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
					p1 = p2;
				}
				return len;
			case PathParser.ARC:
				len = 0;
				var start = points[4];
				var dTheta = points[5];
				var end = points[4] + dTheta;
				var inc = Math.PI / 180;
				if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
				p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
				if (dTheta < 0) for (t$1 = start - inc; t$1 > end; t$1 -= inc) {
					p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t$1, 0);
					len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
					p1 = p2;
				}
				else for (t$1 = start + inc; t$1 < end; t$1 += inc) {
					p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t$1, 0);
					len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
					p1 = p2;
				}
				p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
				len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
				return len;
		}
		return 0;
	}
	getPointOnLine(dist, p1x, p1y, p2x, p2y) {
		var fromX = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : p1x;
		var fromY = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : p1y;
		var m$2 = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
		var run$1 = Math.sqrt(dist * dist / (1 + m$2 * m$2));
		if (p2x < p1x) run$1 *= -1;
		var rise = m$2 * run$1;
		var pt = null;
		if (p2x === p1x) pt = {
			x: fromX,
			y: fromY + rise
		};
		else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m$2) pt = {
			x: fromX + run$1,
			y: fromY + rise
		};
		else {
			var ix = 0;
			var iy = 0;
			var len = this.getLineLength(p1x, p1y, p2x, p2y);
			if (len < PSEUDO_ZERO) return null;
			var u$1 = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
			u$1 /= len * len;
			ix = p1x + u$1 * (p2x - p1x);
			iy = p1y + u$1 * (p2y - p1y);
			var pRise = this.getLineLength(fromX, fromY, ix, iy);
			var pRun = Math.sqrt(dist * dist - pRise * pRise);
			run$1 = Math.sqrt(pRun * pRun / (1 + m$2 * m$2));
			if (p2x < p1x) run$1 *= -1;
			rise = m$2 * run$1;
			pt = {
				x: ix + run$1,
				y: iy + rise
			};
		}
		return pt;
	}
	getPointOnPath(distance) {
		var fullLen = this.getPathLength();
		var cumulativePathLength = 0;
		var p$1 = null;
		if (distance < -5e-5 || distance - 5e-5 > fullLen) return null;
		var { dataArray } = this;
		for (var command of dataArray) {
			if (command && (command.pathLength < 5e-5 || cumulativePathLength + command.pathLength + 5e-5 < distance)) {
				cumulativePathLength += command.pathLength;
				continue;
			}
			var delta = distance - cumulativePathLength;
			var currentT = 0;
			switch (command.type) {
				case PathParser.LINE_TO:
					p$1 = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
					break;
				case PathParser.ARC:
					var start = command.points[4];
					var dTheta = command.points[5];
					var end = command.points[4] + dTheta;
					currentT = start + delta / command.pathLength * dTheta;
					if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) break;
					p$1 = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
					break;
				case PathParser.CURVE_TO:
					currentT = delta / command.pathLength;
					if (currentT > 1) currentT = 1;
					p$1 = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
					break;
				case PathParser.QUAD_TO:
					currentT = delta / command.pathLength;
					if (currentT > 1) currentT = 1;
					p$1 = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
					break;
			}
			if (p$1) return p$1;
			break;
		}
		return null;
	}
	getLineLength(x1, y1, x2, y2) {
		return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
	}
	getPathLength() {
		if (this.pathLength === -1) this.pathLength = this.dataArray.reduce((length, command) => command.pathLength > 0 ? length + command.pathLength : length, 0);
		return this.pathLength;
	}
	getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
		var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
		var y$1 = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
		return {
			x,
			y: y$1
		};
	}
	getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
		var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
		var y$1 = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
		return {
			x,
			y: y$1
		};
	}
	getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
		var cosPsi = Math.cos(psi);
		var sinPsi = Math.sin(psi);
		var pt = {
			x: rx * Math.cos(theta),
			y: ry * Math.sin(theta)
		};
		return {
			x: cx + (pt.x * cosPsi - pt.y * sinPsi),
			y: cy + (pt.x * sinPsi + pt.y * cosPsi)
		};
	}
	buildEquidistantCache(inputStep, inputPrecision) {
		var fullLen = this.getPathLength();
		var precision = inputPrecision || .25;
		var step = inputStep || fullLen / 100;
		if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
			this.equidistantCache = {
				step,
				precision,
				points: []
			};
			var s$1 = 0;
			for (var l$1 = 0; l$1 <= fullLen; l$1 += precision) {
				var p0 = this.getPointOnPath(l$1);
				var p1 = this.getPointOnPath(l$1 + precision);
				if (!p0 || !p1) continue;
				s$1 += this.getLineLength(p0.x, p0.y, p1.x, p1.y);
				if (s$1 >= step) {
					this.equidistantCache.points.push({
						x: p0.x,
						y: p0.y,
						distance: l$1
					});
					s$1 -= step;
				}
			}
		}
	}
	getEquidistantPointOnPath(targetDistance, step, precision) {
		this.buildEquidistantCache(step, precision);
		if (targetDistance < 0 || targetDistance - this.getPathLength() > 5e-5) return null;
		var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
		return this.equidistantCache.points[idx] || null;
	}
};
var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
var ImageElement = class extends RenderedElement {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "image";
		this.loaded = false;
		var href = this.getHrefAttribute().getString();
		if (!href) return;
		var isSvg = href.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(href);
		document$4.images.push(this);
		if (!isSvg) this.loadImage(href);
		else this.loadSvg(href);
		this.isSvg = isSvg;
	}
	loadImage(href) {
		var _this = this;
		return _asyncToGenerator(function* () {
			try {
				_this.image = yield _this.document.createImage(href);
			} catch (err) {
				console.error("Error while loading image \"".concat(href, "\":"), err);
			}
			_this.loaded = true;
		})();
	}
	loadSvg(href) {
		var _this2 = this;
		return _asyncToGenerator(function* () {
			var match$1 = dataUriRegex.exec(href);
			if (match$1) {
				var data$1 = match$1[5];
				if (match$1[4] === "base64") _this2.image = atob(data$1);
				else _this2.image = decodeURIComponent(data$1);
			} else try {
				_this2.image = yield (yield _this2.document.fetch(href)).text();
			} catch (err) {
				console.error("Error while loading image \"".concat(href, "\":"), err);
			}
			_this2.loaded = true;
		})();
	}
	renderChildren(ctx) {
		var { document: document$4, image, loaded } = this;
		var x = this.getAttribute("x").getPixels("x");
		var y$1 = this.getAttribute("y").getPixels("y");
		var width = this.getStyle("width").getPixels("x");
		var height = this.getStyle("height").getPixels("y");
		if (!loaded || !image || !width || !height) return;
		ctx.save();
		ctx.translate(x, y$1);
		if (this.isSvg) {
			var subDocument = document$4.canvg.forkString(ctx, this.image, {
				ignoreMouse: true,
				ignoreAnimation: true,
				ignoreDimensions: true,
				ignoreClear: true,
				offsetX: 0,
				offsetY: 0,
				scaleWidth: width,
				scaleHeight: height
			});
			subDocument.document.documentElement.parent = this;
			subDocument.render();
		} else {
			var _image = this.image;
			document$4.setViewBox({
				ctx,
				aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
				width,
				desiredWidth: _image.width,
				height,
				desiredHeight: _image.height
			});
			if (this.loaded) {
				if (typeof _image.complete === "undefined" || _image.complete) ctx.drawImage(_image, 0, 0);
			}
		}
		ctx.restore();
	}
	getBoundingBox() {
		var x = this.getAttribute("x").getPixels("x");
		var y$1 = this.getAttribute("y").getPixels("y");
		var width = this.getStyle("width").getPixels("x");
		var height = this.getStyle("height").getPixels("y");
		return new BoundingBox(x, y$1, x + width, y$1 + height);
	}
};
var SymbolElement = class extends RenderedElement {
	constructor() {
		super(...arguments);
		this.type = "symbol";
	}
	render(_$1) {}
};
var SVGFontLoader = class {
	constructor(document$4) {
		this.document = document$4;
		this.loaded = false;
		document$4.fonts.push(this);
	}
	load(fontFamily, url) {
		var _this = this;
		return _asyncToGenerator(function* () {
			try {
				var { document: document$4 } = _this;
				var fonts = (yield document$4.canvg.parser.load(url)).getElementsByTagName("font");
				Array.from(fonts).forEach((fontNode) => {
					var font = document$4.createElement(fontNode);
					document$4.definitions[fontFamily] = font;
				});
			} catch (err) {
				console.error("Error while loading font \"".concat(url, "\":"), err);
			}
			_this.loaded = true;
		})();
	}
};
var StyleElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "style";
		compressSpaces(Array.from(node$2.childNodes).map((_$1) => _$1.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")).split("}").forEach((_$1) => {
			var def = _$1.trim();
			if (!def) return;
			var cssParts = def.split("{");
			var cssClasses = cssParts[0].split(",");
			var cssProps = cssParts[1].split(";");
			cssClasses.forEach((_$2) => {
				var cssClass = _$2.trim();
				if (!cssClass) return;
				var props = document$4.styles[cssClass] || {};
				cssProps.forEach((cssProp) => {
					var prop = cssProp.indexOf(":");
					var name = cssProp.substr(0, prop).trim();
					var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();
					if (name && value) props[name] = new Property(document$4, name, value);
				});
				document$4.styles[cssClass] = props;
				document$4.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
				if (cssClass === "@font-face") {
					var fontFamily = props["font-family"].getString().replace(/"|'/g, "");
					props.src.getString().split(",").forEach((src) => {
						if (src.indexOf("format(\"svg\")") > 0) {
							var url = parseExternalUrl(src);
							if (url) new SVGFontLoader(document$4).load(fontFamily, url);
						}
					});
				}
			});
		});
	}
};
StyleElement.parseExternalUrl = parseExternalUrl;
var UseElement = class extends RenderedElement {
	constructor() {
		super(...arguments);
		this.type = "use";
	}
	setContext(ctx) {
		super.setContext(ctx);
		var xAttr = this.getAttribute("x");
		var yAttr = this.getAttribute("y");
		if (xAttr.hasValue()) ctx.translate(xAttr.getPixels("x"), 0);
		if (yAttr.hasValue()) ctx.translate(0, yAttr.getPixels("y"));
	}
	path(ctx) {
		var { element } = this;
		if (element) element.path(ctx);
	}
	renderChildren(ctx) {
		var { document: document$4, element } = this;
		if (element) {
			var tempSvg = element;
			if (element.type === "symbol") {
				tempSvg = new SVGElement(document$4, null);
				tempSvg.attributes.viewBox = new Property(document$4, "viewBox", element.getAttribute("viewBox").getString());
				tempSvg.attributes.preserveAspectRatio = new Property(document$4, "preserveAspectRatio", element.getAttribute("preserveAspectRatio").getString());
				tempSvg.attributes.overflow = new Property(document$4, "overflow", element.getAttribute("overflow").getString());
				tempSvg.children = element.children;
				element.styles.opacity = new Property(document$4, "opacity", this.calculateOpacity());
			}
			if (tempSvg.type === "svg") {
				var widthStyle = this.getStyle("width", false, true);
				var heightStyle = this.getStyle("height", false, true);
				if (widthStyle.hasValue()) tempSvg.attributes.width = new Property(document$4, "width", widthStyle.getString());
				if (heightStyle.hasValue()) tempSvg.attributes.height = new Property(document$4, "height", heightStyle.getString());
			}
			var oldParent = tempSvg.parent;
			tempSvg.parent = this;
			tempSvg.render(ctx);
			tempSvg.parent = oldParent;
		}
	}
	getBoundingBox(ctx) {
		var { element } = this;
		if (element) return element.getBoundingBox(ctx);
		return null;
	}
	elementTransform() {
		var { document: document$4, element } = this;
		return Transform.fromElement(document$4, element);
	}
	get element() {
		if (!this.cachedElement) this.cachedElement = this.getHrefAttribute().getDefinition();
		return this.cachedElement;
	}
};
function imGet(img, x, y$1, width, _height, rgba) {
	return img[y$1 * width * 4 + x * 4 + rgba];
}
function imSet(img, x, y$1, width, _height, rgba, val) {
	img[y$1 * width * 4 + x * 4 + rgba] = val;
}
function m(matrix, i$2, v$1) {
	return matrix[i$2] * v$1;
}
function c(a$1, m1, m2, m3) {
	return m1 + Math.cos(a$1) * m2 + Math.sin(a$1) * m3;
}
var FeColorMatrixElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "feColorMatrix";
		var matrix = toNumbers(this.getAttribute("values").getString());
		switch (this.getAttribute("type").getString("matrix")) {
			case "saturate":
				var s$1 = matrix[0];
				matrix = [
					.213 + .787 * s$1,
					.715 - .715 * s$1,
					.072 - .072 * s$1,
					0,
					0,
					.213 - .213 * s$1,
					.715 + .285 * s$1,
					.072 - .072 * s$1,
					0,
					0,
					.213 - .213 * s$1,
					.715 - .715 * s$1,
					.072 + .928 * s$1,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					1
				];
				break;
			case "hueRotate":
				var a$1 = matrix[0] * Math.PI / 180;
				matrix = [
					c(a$1, .213, .787, -.213),
					c(a$1, .715, -.715, -.715),
					c(a$1, .072, -.072, .928),
					0,
					0,
					c(a$1, .213, -.213, .143),
					c(a$1, .715, .285, .14),
					c(a$1, .072, -.072, -.283),
					0,
					0,
					c(a$1, .213, -.213, -.787),
					c(a$1, .715, -.715, .715),
					c(a$1, .072, .928, .072),
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					1
				];
				break;
			case "luminanceToAlpha":
				matrix = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					.2125,
					.7154,
					.0721,
					0,
					0,
					0,
					0,
					0,
					0,
					1
				];
				break;
		}
		this.matrix = matrix;
		this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
	}
	apply(ctx, _x, _y, width, height) {
		var { includeOpacity, matrix } = this;
		var srcData = ctx.getImageData(0, 0, width, height);
		for (var y$1 = 0; y$1 < height; y$1++) for (var x = 0; x < width; x++) {
			var r$1 = imGet(srcData.data, x, y$1, width, height, 0);
			var g = imGet(srcData.data, x, y$1, width, height, 1);
			var b = imGet(srcData.data, x, y$1, width, height, 2);
			var a$1 = imGet(srcData.data, x, y$1, width, height, 3);
			var nr = m(matrix, 0, r$1) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a$1) + m(matrix, 4, 1);
			var ng = m(matrix, 5, r$1) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a$1) + m(matrix, 9, 1);
			var nb = m(matrix, 10, r$1) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a$1) + m(matrix, 14, 1);
			var na = m(matrix, 15, r$1) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a$1) + m(matrix, 19, 1);
			if (includeOpacity) {
				nr = 0;
				ng = 0;
				nb = 0;
				na *= a$1 / 255;
			}
			imSet(srcData.data, x, y$1, width, height, 0, nr);
			imSet(srcData.data, x, y$1, width, height, 1, ng);
			imSet(srcData.data, x, y$1, width, height, 2, nb);
			imSet(srcData.data, x, y$1, width, height, 3, na);
		}
		ctx.clearRect(0, 0, width, height);
		ctx.putImageData(srcData, 0, 0);
	}
};
var MaskElement = class MaskElement extends Element {
	constructor() {
		super(...arguments);
		this.type = "mask";
	}
	apply(ctx, element) {
		var { document: document$4 } = this;
		var x = this.getAttribute("x").getPixels("x");
		var y$1 = this.getAttribute("y").getPixels("y");
		var width = this.getStyle("width").getPixels("x");
		var height = this.getStyle("height").getPixels("y");
		if (!width && !height) {
			var boundingBox = new BoundingBox();
			this.children.forEach((child) => {
				boundingBox.addBoundingBox(child.getBoundingBox(ctx));
			});
			x = Math.floor(boundingBox.x1);
			y$1 = Math.floor(boundingBox.y1);
			width = Math.floor(boundingBox.width);
			height = Math.floor(boundingBox.height);
		}
		var ignoredStyles = this.removeStyles(element, MaskElement.ignoreStyles);
		var maskCanvas = document$4.createCanvas(x + width, y$1 + height);
		var maskCtx = maskCanvas.getContext("2d");
		document$4.screen.setDefaults(maskCtx);
		this.renderChildren(maskCtx);
		new FeColorMatrixElement(document$4, {
			nodeType: 1,
			childNodes: [],
			attributes: [{
				nodeName: "type",
				value: "luminanceToAlpha"
			}, {
				nodeName: "includeOpacity",
				value: "true"
			}]
		}).apply(maskCtx, 0, 0, x + width, y$1 + height);
		var tmpCanvas = document$4.createCanvas(x + width, y$1 + height);
		var tmpCtx = tmpCanvas.getContext("2d");
		document$4.screen.setDefaults(tmpCtx);
		element.render(tmpCtx);
		tmpCtx.globalCompositeOperation = "destination-in";
		tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, "no-repeat");
		tmpCtx.fillRect(0, 0, x + width, y$1 + height);
		ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, "no-repeat");
		ctx.fillRect(0, 0, x + width, y$1 + height);
		this.restoreStyles(element, ignoredStyles);
	}
	render(_$1) {}
};
MaskElement.ignoreStyles = [
	"mask",
	"transform",
	"clip-path"
];
var noop = () => {};
var ClipPathElement = class extends Element {
	constructor() {
		super(...arguments);
		this.type = "clipPath";
	}
	apply(ctx) {
		var { document: document$4 } = this;
		var contextProto = Reflect.getPrototypeOf(ctx);
		var { beginPath, closePath } = ctx;
		if (contextProto) {
			contextProto.beginPath = noop;
			contextProto.closePath = noop;
		}
		Reflect.apply(beginPath, ctx, []);
		this.children.forEach((child) => {
			if (typeof child.path === "undefined") return;
			var transform = typeof child.elementTransform !== "undefined" ? child.elementTransform() : null;
			if (!transform) transform = Transform.fromElement(document$4, child);
			if (transform) transform.apply(ctx);
			child.path(ctx);
			if (contextProto) contextProto.closePath = closePath;
			if (transform) transform.unapply(ctx);
		});
		Reflect.apply(closePath, ctx, []);
		ctx.clip();
		if (contextProto) {
			contextProto.beginPath = beginPath;
			contextProto.closePath = closePath;
		}
	}
	render(_$1) {}
};
var FilterElement = class FilterElement extends Element {
	constructor() {
		super(...arguments);
		this.type = "filter";
	}
	apply(ctx, element) {
		var { document: document$4, children } = this;
		var boundingBox = element.getBoundingBox(ctx);
		if (!boundingBox) return;
		var px = 0;
		var py = 0;
		children.forEach((child) => {
			var efd = child.extraFilterDistance || 0;
			px = Math.max(px, efd);
			py = Math.max(py, efd);
		});
		var width = Math.floor(boundingBox.width);
		var height = Math.floor(boundingBox.height);
		var tmpCanvasWidth = width + 2 * px;
		var tmpCanvasHeight = height + 2 * py;
		if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) return;
		var x = Math.floor(boundingBox.x);
		var y$1 = Math.floor(boundingBox.y);
		var ignoredStyles = this.removeStyles(element, FilterElement.ignoreStyles);
		var tmpCanvas = document$4.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
		var tmpCtx = tmpCanvas.getContext("2d");
		document$4.screen.setDefaults(tmpCtx);
		tmpCtx.translate(-x + px, -y$1 + py);
		element.render(tmpCtx);
		children.forEach((child) => {
			if (typeof child.apply === "function") child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
		});
		ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y$1 - py, tmpCanvasWidth, tmpCanvasHeight);
		this.restoreStyles(element, ignoredStyles);
	}
	render(_$1) {}
};
FilterElement.ignoreStyles = [
	"filter",
	"transform",
	"clip-path"
];
var FeDropShadowElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "feDropShadow";
		this.addStylesFromStyleDefinition();
	}
	apply(_$1, _x, _y, _width, _height) {}
};
var FeMorphologyElement = class extends Element {
	constructor() {
		super(...arguments);
		this.type = "feMorphology";
	}
	apply(_$1, _x, _y, _width, _height) {}
};
var FeCompositeElement = class extends Element {
	constructor() {
		super(...arguments);
		this.type = "feComposite";
	}
	apply(_$1, _x, _y, _width, _height) {}
};
var FeGaussianBlurElement = class extends Element {
	constructor(document$4, node$2, captureTextNodes) {
		super(document$4, node$2, captureTextNodes);
		this.type = "feGaussianBlur";
		this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber());
		this.extraFilterDistance = this.blurRadius;
	}
	apply(ctx, x, y$1, width, height) {
		var { document: document$4, blurRadius } = this;
		var body = document$4.window ? document$4.window.document.body : null;
		var canvas = ctx.canvas;
		canvas.id = document$4.getUniqueId();
		if (body) {
			canvas.style.display = "none";
			body.appendChild(canvas);
		}
		processCanvasRGBA(canvas, x, y$1, width, height, blurRadius);
		if (body) body.removeChild(canvas);
	}
};
var TitleElement = class extends Element {
	constructor() {
		super(...arguments);
		this.type = "title";
	}
};
var DescElement = class extends Element {
	constructor() {
		super(...arguments);
		this.type = "desc";
	}
};
var elements = {
	"svg": SVGElement,
	"rect": RectElement,
	"circle": CircleElement,
	"ellipse": EllipseElement,
	"line": LineElement,
	"polyline": PolylineElement,
	"polygon": PolygonElement,
	"path": PathElement,
	"pattern": PatternElement,
	"marker": MarkerElement,
	"defs": DefsElement,
	"linearGradient": LinearGradientElement,
	"radialGradient": RadialGradientElement,
	"stop": StopElement,
	"animate": AnimateElement,
	"animateColor": AnimateColorElement,
	"animateTransform": AnimateTransformElement,
	"font": FontElement,
	"font-face": FontFaceElement,
	"missing-glyph": MissingGlyphElement,
	"glyph": GlyphElement,
	"text": TextElement,
	"tspan": TSpanElement,
	"tref": TRefElement,
	"a": AElement,
	"textPath": TextPathElement,
	"image": ImageElement,
	"g": GElement,
	"symbol": SymbolElement,
	"style": StyleElement,
	"use": UseElement,
	"mask": MaskElement,
	"clipPath": ClipPathElement,
	"filter": FilterElement,
	"feDropShadow": FeDropShadowElement,
	"feMorphology": FeMorphologyElement,
	"feComposite": FeCompositeElement,
	"feColorMatrix": FeColorMatrixElement,
	"feGaussianBlur": FeGaussianBlurElement,
	"title": TitleElement,
	"desc": DescElement
};
function ownKeys$1(object, enumerableOnly) {
	var keys$1 = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly) symbols = symbols.filter(function(sym) {
			return Object.getOwnPropertyDescriptor(object, sym).enumerable;
		});
		keys$1.push.apply(keys$1, symbols);
	}
	return keys$1;
}
function _objectSpread$1(target) {
	for (var i$2 = 1; i$2 < arguments.length; i$2++) {
		var source = arguments[i$2] != null ? arguments[i$2] : {};
		if (i$2 % 2) ownKeys$1(Object(source), true).forEach(function(key) {
			_defineProperty(target, key, source[key]);
		});
		else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		else ownKeys$1(Object(source)).forEach(function(key) {
			Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
		});
	}
	return target;
}
function createCanvas(width, height) {
	var canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	return canvas;
}
function createImage(_x) {
	return _createImage.apply(this, arguments);
}
function _createImage() {
	_createImage = _asyncToGenerator(function* (src) {
		var anonymousCrossOrigin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		var image = document.createElement("img");
		if (anonymousCrossOrigin) image.crossOrigin = "Anonymous";
		return new Promise((resolve, reject) => {
			image.onload = () => {
				resolve(image);
			};
			image.onerror = (_event, _source, _lineno, _colno, error) => {
				reject(error);
			};
			image.src = src;
		});
	});
	return _createImage.apply(this, arguments);
}
var Document = class Document {
	constructor(canvg) {
		var { rootEmSize = 12, emSize = 12, createCanvas: createCanvas$1 = Document.createCanvas, createImage: createImage$1 = Document.createImage, anonymousCrossOrigin } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		this.canvg = canvg;
		this.definitions = Object.create(null);
		this.styles = Object.create(null);
		this.stylesSpecificity = Object.create(null);
		this.images = [];
		this.fonts = [];
		this.emSizeStack = [];
		this.uniqueId = 0;
		this.screen = canvg.screen;
		this.rootEmSize = rootEmSize;
		this.emSize = emSize;
		this.createCanvas = createCanvas$1;
		this.createImage = this.bindCreateImage(createImage$1, anonymousCrossOrigin);
		this.screen.wait(this.isImagesLoaded.bind(this));
		this.screen.wait(this.isFontsLoaded.bind(this));
	}
	bindCreateImage(createImage$1, anonymousCrossOrigin) {
		if (typeof anonymousCrossOrigin === "boolean") return (source, forceAnonymousCrossOrigin) => createImage$1(source, typeof forceAnonymousCrossOrigin === "boolean" ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
		return createImage$1;
	}
	get window() {
		return this.screen.window;
	}
	get fetch() {
		return this.screen.fetch;
	}
	get ctx() {
		return this.screen.ctx;
	}
	get emSize() {
		var { emSizeStack } = this;
		return emSizeStack[emSizeStack.length - 1];
	}
	set emSize(value) {
		var { emSizeStack } = this;
		emSizeStack.push(value);
	}
	popEmSize() {
		var { emSizeStack } = this;
		emSizeStack.pop();
	}
	getUniqueId() {
		return "canvg".concat(++this.uniqueId);
	}
	isImagesLoaded() {
		return this.images.every((_$1) => _$1.loaded);
	}
	isFontsLoaded() {
		return this.fonts.every((_$1) => _$1.loaded);
	}
	createDocumentElement(document$4) {
		var documentElement = this.createElement(document$4.documentElement);
		documentElement.root = true;
		documentElement.addStylesFromStyleDefinition();
		this.documentElement = documentElement;
		return documentElement;
	}
	createElement(node$2) {
		var elementType = node$2.nodeName.replace(/^[^:]+:/, "");
		var ElementType = Document.elementTypes[elementType];
		if (typeof ElementType !== "undefined") return new ElementType(this, node$2);
		return new UnknownElement(this, node$2);
	}
	createTextNode(node$2) {
		return new TextNode(this, node$2);
	}
	setViewBox(config) {
		this.screen.setViewBox(_objectSpread$1({ document: this }, config));
	}
};
Document.createCanvas = createCanvas;
Document.createImage = createImage;
Document.elementTypes = elements;
function ownKeys(object, enumerableOnly) {
	var keys$1 = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly) symbols = symbols.filter(function(sym) {
			return Object.getOwnPropertyDescriptor(object, sym).enumerable;
		});
		keys$1.push.apply(keys$1, symbols);
	}
	return keys$1;
}
function _objectSpread(target) {
	for (var i$2 = 1; i$2 < arguments.length; i$2++) {
		var source = arguments[i$2] != null ? arguments[i$2] : {};
		if (i$2 % 2) ownKeys(Object(source), true).forEach(function(key) {
			_defineProperty(target, key, source[key]);
		});
		else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		else ownKeys(Object(source)).forEach(function(key) {
			Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
		});
	}
	return target;
}
/**
* SVG renderer on canvas.
*/
var Canvg = class Canvg {
	/**
	* Main constructor.
	* @param ctx - Rendering context.
	* @param svg - SVG Document.
	* @param options - Rendering options.
	*/
	constructor(ctx, svg) {
		var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		this.parser = new Parser(options);
		this.screen = new Screen(ctx, options);
		this.options = options;
		var document$4 = new Document(this, options);
		var documentElement = document$4.createDocumentElement(svg);
		this.document = document$4;
		this.documentElement = documentElement;
	}
	/**
	* Create Canvg instance from SVG source string or URL.
	* @param ctx - Rendering context.
	* @param svg - SVG source string or URL.
	* @param options - Rendering options.
	* @returns Canvg instance.
	*/
	static from(ctx, svg) {
		var _arguments = arguments;
		return _asyncToGenerator(function* () {
			var options = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
			var svgDocument = yield new Parser(options).parse(svg);
			return new Canvg(ctx, svgDocument, options);
		})();
	}
	/**
	* Create Canvg instance from SVG source string.
	* @param ctx - Rendering context.
	* @param svg - SVG source string.
	* @param options - Rendering options.
	* @returns Canvg instance.
	*/
	static fromString(ctx, svg) {
		var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		var svgDocument = new Parser(options).parseFromString(svg);
		return new Canvg(ctx, svgDocument, options);
	}
	/**
	* Create new Canvg instance with inherited options.
	* @param ctx - Rendering context.
	* @param svg - SVG source string or URL.
	* @param options - Rendering options.
	* @returns Canvg instance.
	*/
	fork(ctx, svg) {
		var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return Canvg.from(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
	}
	/**
	* Create new Canvg instance with inherited options.
	* @param ctx - Rendering context.
	* @param svg - SVG source string.
	* @param options - Rendering options.
	* @returns Canvg instance.
	*/
	forkString(ctx, svg) {
		var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		return Canvg.fromString(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
	}
	/**
	* Document is ready promise.
	* @returns Ready promise.
	*/
	ready() {
		return this.screen.ready();
	}
	/**
	* Document is ready value.
	* @returns Is ready or not.
	*/
	isReady() {
		return this.screen.isReady();
	}
	/**
	* Render only first frame, ignoring animations and mouse.
	* @param options - Rendering options.
	*/
	render() {
		var _arguments2 = arguments, _this = this;
		return _asyncToGenerator(function* () {
			var options = _arguments2.length > 0 && _arguments2[0] !== void 0 ? _arguments2[0] : {};
			_this.start(_objectSpread({
				enableRedraw: true,
				ignoreAnimation: true,
				ignoreMouse: true
			}, options));
			yield _this.ready();
			_this.stop();
		})();
	}
	/**
	* Start rendering.
	* @param options - Render options.
	*/
	start() {
		var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		var { documentElement, screen, options: baseOptions } = this;
		screen.start(documentElement, _objectSpread(_objectSpread({ enableRedraw: true }, baseOptions), options));
	}
	/**
	* Stop rendering.
	*/
	stop() {
		this.screen.stop();
	}
	/**
	* Resize SVG to fit in given size.
	* @param width
	* @param height
	* @param preserveAspectRatio
	*/
	resize(width) {
		var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : width;
		var preserveAspectRatio = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
		this.documentElement.resize(width, height, preserveAspectRatio);
	}
};

//#endregion
export { AElement, AnimateColorElement, AnimateElement, AnimateTransformElement, BoundingBox, CB1, CB2, CB3, CB4, Canvg, Canvg as default, CircleElement, ClipPathElement, DefsElement, DescElement, Document, Element, EllipseElement, FeColorMatrixElement, FeCompositeElement, FeDropShadowElement, FeGaussianBlurElement, FeMorphologyElement, FilterElement, Font, FontElement, FontFaceElement, GElement, GlyphElement, GradientElement, ImageElement, LineElement, LinearGradientElement, MarkerElement, MaskElement, Matrix, MissingGlyphElement, Mouse, PSEUDO_ZERO, Parser, PathElement, PathParser, PatternElement, Point, PolygonElement, PolylineElement, Property, QB1, QB2, QB3, RadialGradientElement, RectElement, RenderedElement, Rotate, SVGElement, SVGFontLoader, Scale, Screen, Skew, SkewX, SkewY, StopElement, StyleElement, SymbolElement, TRefElement, TSpanElement, TextElement, TextPathElement, TitleElement, Transform, Translate, UnknownElement, UseElement, ViewPort, compressSpaces, getSelectorSpecificity, normalizeAttributeName, normalizeColor, parseExternalUrl, index as presets, toNumbers, trimLeft, trimRight, vectorMagnitude, vectorsAngle, vectorsRatio };
//# sourceMappingURL=index.es-BTwxXvc2.js.map