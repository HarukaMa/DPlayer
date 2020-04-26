(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DPlayer", [], factory);
	else if(typeof exports === 'object')
		exports["DPlayer"] = factory();
	else
		root["DPlayer"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/art-template/lib/compile/runtime.js":
/*!**********************************************************!*\
  !*** ./node_modules/art-template/lib/compile/runtime.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/*! art-template@runtime | https://github.com/aui/art-template */

var globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
var runtime = Object.create(globalThis);
var ESCAPE_REG = /["&'<>]/;
/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */

runtime.$escape = function (content) {
  return xmlEscape(toString(content));
};
/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data
 * @param {function}     callback
 */


runtime.$each = function (data, callback) {
  if (Array.isArray(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      callback(data[i], i);
    }
  } else {
    for (var _i in data) {
      callback(data[_i], _i);
    }
  }
}; // 将目标转成字符


function toString(value) {
  if (typeof value !== 'string') {
    if (value === undefined || value === null) {
      value = '';
    } else if (typeof value === 'function') {
      value = toString(value.call(value));
    } else {
      value = JSON.stringify(value);
    }
  }

  return value;
} // 编码 HTML 内容


function xmlEscape(content) {
  var html = '' + content;
  var regexResult = ESCAPE_REG.exec(html);

  if (!regexResult) {
    return content;
  }

  var result = '';

  var i = void 0,
      lastIndex = void 0,
      _char = void 0;

  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        _char = '&#34;';
        break;

      case 38:
        _char = '&#38;';
        break;

      case 39:
        _char = '&#39;';
        break;

      case 60:
        _char = '&#60;';
        break;

      case 62:
        _char = '&#62;';
        break;

      default:
        continue;
    }

    if (lastIndex !== i) {
      result += html.substring(lastIndex, i);
    }

    lastIndex = i + 1;
    result += _char;
  }

  if (lastIndex !== i) {
    return result + html.substring(lastIndex, i);
  } else {
    return result;
  }
}

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/art-template/lib/runtime.js":
/*!**************************************************!*\
  !*** ./node_modules/art-template/lib/runtime.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./compile/runtime */ "./node_modules/art-template/lib/compile/runtime.js");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports["default"] = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
  var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (_typeof(val) === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/balloon-css/balloon.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/balloon-css/balloon.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root{--balloon-color:rgba(16,16,16,0.95);--balloon-font-size:12px;--balloon-move:4px}button[aria-label][data-balloon-pos]{overflow:visible}[aria-label][data-balloon-pos]{position:relative;cursor:pointer}[aria-label][data-balloon-pos]:after{text-indent:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;font-style:normal;text-shadow:none;font-size:var(--balloon-font-size);background:var(--balloon-color);border-radius:2px;color:#fff;content:attr(aria-label);padding:.5em 1em;white-space:nowrap}[aria-label][data-balloon-pos]:after,[aria-label][data-balloon-pos]:before{opacity:0;pointer-events:none;transition:all .18s ease-out .18s;position:absolute;z-index:10}[aria-label][data-balloon-pos]:before{width:0;height:0;border:5px solid transparent;border-top:5px solid var(--balloon-color);content:\"\"}[aria-label][data-balloon-pos]:hover:after,[aria-label][data-balloon-pos]:hover:before,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,[aria-label][data-balloon-pos][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-visible]:before{opacity:1;pointer-events:none}[aria-label][data-balloon-pos].font-awesome:after{font-family:FontAwesome,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}[aria-label][data-balloon-pos][data-balloon-break]:after{white-space:pre}[aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after{white-space:pre-line;word-break:break-word}[aria-label][data-balloon-pos][data-balloon-blunt]:after,[aria-label][data-balloon-pos][data-balloon-blunt]:before{transition:none}[aria-label][data-balloon-pos][data-balloon-pos=up]:after{margin-bottom:10px}[aria-label][data-balloon-pos][data-balloon-pos=up]:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:before{bottom:100%;left:50%;transform:translate(-50%,var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:before{transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:after{bottom:100%;left:0;margin-bottom:10px;transform:translateY(var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:before{bottom:100%;left:5px;transform:translateY(var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:before{transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:after{bottom:100%;right:0;margin-bottom:10px;transform:translateY(var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:before{bottom:100%;right:5px;transform:translateY(var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:before{transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down]:after{left:50%;margin-top:10px;top:100%;transform:translate(-50%,calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color);left:50%;top:100%;transform:translate(-50%,calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:before{transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:after{left:0;margin-top:10px;top:100%;transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color);left:5px;top:100%;transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:before{transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:after{right:0;margin-top:10px;top:100%;transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color);right:5px;top:100%;transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:before{transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=left]:after{margin-right:10px;right:100%;top:50%;transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:before{width:0;height:0;border:5px solid transparent;border-left:5px solid var(--balloon-color);right:100%;top:50%;transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:before{transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:after{left:100%;margin-left:10px;top:50%;transform:translate(calc(var(--balloon-move)*-1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:before{width:0;height:0;border:5px solid transparent;border-right:5px solid var(--balloon-color);left:100%;top:50%;transform:translate(calc(var(--balloon-move)*-1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:before{transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-length=small]:after{white-space:normal;width:80px}[aria-label][data-balloon-pos][data-balloon-length=medium]:after{white-space:normal;width:150px}[aria-label][data-balloon-pos][data-balloon-length=large]:after{white-space:normal;width:260px}[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:380px}@media screen and (max-width:768px){[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:90vw}}[aria-label][data-balloon-pos][data-balloon-length=fit]:after{white-space:normal;width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/balloon-css/balloon.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/balloon-css/balloon.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "@-webkit-keyframes my-face{2%{transform:translateY(1.5px) rotate(1.5deg)}4%{transform:translateY(-1.5px) rotate(-.5deg)}6%{transform:translateY(1.5px) rotate(-1.5deg)}8%{transform:translateY(-1.5px) rotate(-1.5deg)}10%{transform:translateY(2.5px) rotate(1.5deg)}12%{transform:translateY(-.5px) rotate(1.5deg)}14%{transform:translateY(-1.5px) rotate(1.5deg)}16%{transform:translateY(-.5px) rotate(-1.5deg)}18%{transform:translateY(.5px) rotate(-1.5deg)}20%{transform:translateY(-1.5px) rotate(2.5deg)}22%{transform:translateY(.5px) rotate(-1.5deg)}24%{transform:translateY(1.5px) rotate(1.5deg)}26%{transform:translateY(.5px) rotate(.5deg)}28%{transform:translateY(.5px) rotate(1.5deg)}30%{transform:translateY(-.5px) rotate(2.5deg)}32%{transform:translateY(1.5px) rotate(-.5deg)}34%{transform:translateY(1.5px) rotate(-.5deg)}36%{transform:translateY(-1.5px) rotate(2.5deg)}38%{transform:translateY(1.5px) rotate(-1.5deg)}40%{transform:translateY(-.5px) rotate(2.5deg)}42%{transform:translateY(2.5px) rotate(-1.5deg)}44%{transform:translateY(1.5px) rotate(.5deg)}46%{transform:translateY(-1.5px) rotate(2.5deg)}48%{transform:translateY(-.5px) rotate(.5deg)}50%{transform:translateY(.5px) rotate(.5deg)}52%{transform:translateY(2.5px) rotate(2.5deg)}54%{transform:translateY(-1.5px) rotate(1.5deg)}56%{transform:translateY(2.5px) rotate(2.5deg)}58%{transform:translateY(.5px) rotate(2.5deg)}60%{transform:translateY(2.5px) rotate(2.5deg)}62%{transform:translateY(-.5px) rotate(2.5deg)}64%{transform:translateY(-.5px) rotate(1.5deg)}66%{transform:translateY(1.5px) rotate(-.5deg)}68%{transform:translateY(-1.5px) rotate(-.5deg)}70%{transform:translateY(1.5px) rotate(.5deg)}72%{transform:translateY(2.5px) rotate(1.5deg)}74%{transform:translateY(-.5px) rotate(.5deg)}76%{transform:translateY(-.5px) rotate(2.5deg)}78%{transform:translateY(-.5px) rotate(1.5deg)}80%{transform:translateY(1.5px) rotate(1.5deg)}82%{transform:translateY(-.5px) rotate(.5deg)}84%{transform:translateY(1.5px) rotate(2.5deg)}86%{transform:translateY(-1.5px) rotate(-1.5deg)}88%{transform:translateY(-.5px) rotate(2.5deg)}90%{transform:translateY(2.5px) rotate(-.5deg)}92%{transform:translateY(.5px) rotate(-.5deg)}94%{transform:translateY(2.5px) rotate(.5deg)}96%{transform:translateY(-.5px) rotate(1.5deg)}98%{transform:translateY(-1.5px) rotate(-.5deg)}0%,to{transform:translate(0) rotate(0deg)}}@keyframes my-face{2%{transform:translateY(1.5px) rotate(1.5deg)}4%{transform:translateY(-1.5px) rotate(-.5deg)}6%{transform:translateY(1.5px) rotate(-1.5deg)}8%{transform:translateY(-1.5px) rotate(-1.5deg)}10%{transform:translateY(2.5px) rotate(1.5deg)}12%{transform:translateY(-.5px) rotate(1.5deg)}14%{transform:translateY(-1.5px) rotate(1.5deg)}16%{transform:translateY(-.5px) rotate(-1.5deg)}18%{transform:translateY(.5px) rotate(-1.5deg)}20%{transform:translateY(-1.5px) rotate(2.5deg)}22%{transform:translateY(.5px) rotate(-1.5deg)}24%{transform:translateY(1.5px) rotate(1.5deg)}26%{transform:translateY(.5px) rotate(.5deg)}28%{transform:translateY(.5px) rotate(1.5deg)}30%{transform:translateY(-.5px) rotate(2.5deg)}32%{transform:translateY(1.5px) rotate(-.5deg)}34%{transform:translateY(1.5px) rotate(-.5deg)}36%{transform:translateY(-1.5px) rotate(2.5deg)}38%{transform:translateY(1.5px) rotate(-1.5deg)}40%{transform:translateY(-.5px) rotate(2.5deg)}42%{transform:translateY(2.5px) rotate(-1.5deg)}44%{transform:translateY(1.5px) rotate(.5deg)}46%{transform:translateY(-1.5px) rotate(2.5deg)}48%{transform:translateY(-.5px) rotate(.5deg)}50%{transform:translateY(.5px) rotate(.5deg)}52%{transform:translateY(2.5px) rotate(2.5deg)}54%{transform:translateY(-1.5px) rotate(1.5deg)}56%{transform:translateY(2.5px) rotate(2.5deg)}58%{transform:translateY(.5px) rotate(2.5deg)}60%{transform:translateY(2.5px) rotate(2.5deg)}62%{transform:translateY(-.5px) rotate(2.5deg)}64%{transform:translateY(-.5px) rotate(1.5deg)}66%{transform:translateY(1.5px) rotate(-.5deg)}68%{transform:translateY(-1.5px) rotate(-.5deg)}70%{transform:translateY(1.5px) rotate(.5deg)}72%{transform:translateY(2.5px) rotate(1.5deg)}74%{transform:translateY(-.5px) rotate(.5deg)}76%{transform:translateY(-.5px) rotate(2.5deg)}78%{transform:translateY(-.5px) rotate(1.5deg)}80%{transform:translateY(1.5px) rotate(1.5deg)}82%{transform:translateY(-.5px) rotate(.5deg)}84%{transform:translateY(1.5px) rotate(2.5deg)}86%{transform:translateY(-1.5px) rotate(-1.5deg)}88%{transform:translateY(-.5px) rotate(2.5deg)}90%{transform:translateY(2.5px) rotate(-.5deg)}92%{transform:translateY(.5px) rotate(-.5deg)}94%{transform:translateY(2.5px) rotate(.5deg)}96%{transform:translateY(-.5px) rotate(1.5deg)}98%{transform:translateY(-1.5px) rotate(-.5deg)}0%,to{transform:translate(0) rotate(0deg)}}.dplayer{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1}.dplayer *{box-sizing:content-box}.dplayer svg{width:100%;height:100%}.dplayer svg circle,.dplayer svg path{fill:#fff}.dplayer:-webkit-full-screen{width:100%;height:100%;background:#000;position:fixed;z-index:100000;left:0;top:0;margin:0;padding:0;transform:translate(0)}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{-webkit-animation:danmaku-center 6s linear;animation:danmaku-center 6s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{-webkit-animation:danmaku 8s linear;animation:danmaku 8s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer.dplayer-live .dplayer-bar-wrap,.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting-showdan .dplayer-setting-danunlimit .dplayer-setting-danmaku,.dplayer.dplayer-live .dplayer-setting-loop,.dplayer.dplayer-live .dplayer-time,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,.dplayer.dplayer-no-danmaku .dplayer-danmaku{display:none}.dplayer.dplayer-arrow .dplayer-danmaku{font-size:18px}.dplayer.dplayer-arrow .dplayer-icon{margin:0 -3px}.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move{-webkit-animation-play-state:running;animation-play-state:running}@media (min-width:900px){.dplayer.dplayer-playing .dplayer-controller,.dplayer.dplayer-playing .dplayer-controller-mask{opacity:0}.dplayer.dplayer-playing:hover .dplayer-controller,.dplayer.dplayer-playing:hover .dplayer-controller-mask{opacity:1}}.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon{display:block}.dplayer.dplayer-loading .dplayer-danmaku,.dplayer.dplayer-loading .dplayer-danmaku-move,.dplayer.dplayer-paused .dplayer-danmaku,.dplayer.dplayer-paused .dplayer-danmaku-move{-webkit-animation-play-state:paused;animation-play-state:paused}.dplayer.dplayer-hide-controller{cursor:none}.dplayer.dplayer-hide-controller .dplayer-controller,.dplayer.dplayer-hide-controller .dplayer-controller-mask{opacity:0;transform:translateY(100%)}.dplayer.dplayer-show-controller .dplayer-controller,.dplayer.dplayer-show-controller .dplayer-controller-mask{opacity:1}.dplayer.dplayer-fulled{position:fixed;z-index:100000;left:0;top:0;width:100%;height:100%}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume{display:none}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:static;display:inline-block}.dplayer.dplayer-mobile .dplayer-bar-time,.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play{display:none}.dplayer.dplayer-mobile .dplayer-mobile-play{display:block}.dplayer-web-fullscreen-fix{position:fixed;top:0;left:0;margin:0;padding:0}[data-balloon]:before{display:none}[data-balloon]:after{padding:.3em .7em;background:rgba(17,17,17,.7)}[data-balloon][data-balloon-pos=up]:after{margin-bottom:0}.dplayer-bezel{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon{position:absolute;top:50%;left:50%;margin:-26px 0 0 -26px;height:52px;width:52px;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.5);border-radius:50%;opacity:0;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition{-webkit-animation:bezel-hide .5s linear;animation:bezel-hide .5s linear}@-webkit-keyframes bezel-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(2)}}@keyframes bezel-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(2)}}.dplayer-bezel .dplayer-danloading{position:absolute;top:50%;margin-top:-7px;width:100%;text-align:center;font-size:14px;line-height:14px;-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-bezel .diplayer-loading-icon{display:none;position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;height:36px;width:36px;pointer-events:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide{display:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot{-webkit-animation:diplayer-loading-dot-fade .8s ease infinite;animation:diplayer-loading-dot-fade .8s ease infinite;opacity:0;transform-origin:4px 4px}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7{-webkit-animation-delay:.7s;animation-delay:.7s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6{-webkit-animation-delay:.6s;animation-delay:.6s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5{-webkit-animation-delay:.5s;animation-delay:.5s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4{-webkit-animation-delay:.4s;animation-delay:.4s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3{-webkit-animation-delay:.3s;animation-delay:.3s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2{-webkit-animation-delay:.2s;animation-delay:.2s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1{-webkit-animation-delay:.1s;animation-delay:.1s}@-webkit-keyframes diplayer-loading-dot-fade{0%{opacity:.7;transform:scale(1.2)}50%{opacity:.25;transform:scale(.9)}to{opacity:.25;transform:scale(.85)}}@keyframes diplayer-loading-dot-fade{0%{opacity:.7;transform:scale(1.2)}50%{opacity:.25;transform:scale(.9)}to{opacity:.25;transform:scale(.85)}}.dplayer-controller-mask{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;height:98px;width:100%}.dplayer-controller,.dplayer-controller-mask{position:absolute;bottom:0;transition:all .3s ease}.dplayer-controller{left:0;right:0;height:41px;padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons{display:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box{display:block}.dplayer-controller .dplayer-bar-wrap{padding:5px 0;cursor:pointer;position:absolute;bottom:33px;width:calc(100% - 40px);height:3px}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight{display:block;width:8px;transform:translateX(-4px);top:4px;height:40%}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight{z-index:12;position:absolute;top:5px;width:6px;height:20%;border-radius:6px;background-color:#fff;text-align:center;transform:translateX(-3px);transition:all .2s ease-in-out}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text{display:block}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-preview,.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-time{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text{display:none;position:absolute;left:50%;top:-24px;padding:5px 8px;background-color:rgba(0,0,0,.62);color:#fff;border-radius:4px;font-size:12px;white-space:nowrap;transform:translateX(-50%)}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview{position:absolute;background:#fff;pointer-events:none;display:none;background-size:16000px 100%}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas{position:absolute;width:100%;height:100%;z-index:1;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time{position:absolute;left:0;top:-20px;border-radius:4px;padding:5px 7px;background-color:rgba(0,0,0,.62);color:#fff;font-size:12px;text-align:center;opacity:1;transition:opacity .1s ease-in-out;word-wrap:normal;word-break:normal;z-index:2;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-bar{position:relative;height:3px;width:100%;background:hsla(0,0%,100%,.2);cursor:pointer}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{background:hsla(0,0%,100%,.4);transition:all .5s ease}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded,.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played{position:absolute;left:0;top:0;bottom:0;height:3px;will-change:width}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons{height:38px;position:absolute;bottom:0}.dplayer-controller .dplayer-icons.dplayer-comment-box{display:none;position:absolute;transition:all .3s ease-in-out;z-index:2;height:38px;bottom:0;left:20px;right:20px;color:#fff}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon{position:absolute;left:0;top:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon{position:absolute;right:0;top:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box{position:absolute;background:rgba(28,28,28,.9);bottom:41px;left:0;box-shadow:0 0 25px rgba(0,0,0,.3);border-radius:4px;padding:10px 10px 16px;font-size:14px;width:204px;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open{transform:scale(1)}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio]{display:none}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label{cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title{font-size:13px;color:#fff;line-height:30px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type{font-size:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title{margin-bottom:6px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span{border-radius:4px 0 0 4px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span{border-radius:0 4px 4px 0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span{width:33%;padding:4px 6px;line-height:16px;display:inline-block;font-size:12px;color:#fff;border:1px solid #fff;margin-right:-1px;box-sizing:border-box;text-align:center;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked+span{background:#e4e4e6;color:#1c1c1c}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color{font-size:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label{font-size:0;padding:6px;display:inline-block}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span{width:22px;height:22px;display:inline-block;border-radius:50%;box-sizing:border-box;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover{-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input{outline:none;border:none;padding:8px 31px;font-size:14px;line-height:18px;text-align:center;border-radius:4px;background:none;margin:0;height:100%;box-sizing:border-box;width:100%;color:#fff}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-webkit-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input:-ms-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear{display:none}.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-icons-right{right:20px}.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon{padding:8px}.dplayer-controller .dplayer-icons .dplayer-live-badge,.dplayer-controller .dplayer-icons .dplayer-time{line-height:38px;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);vertical-align:middle;font-size:13px;cursor:default}.dplayer-controller .dplayer-icons .dplayer-live-dot{display:inline-block;width:6px;height:6px;vertical-align:4%;margin-right:5px;content:\"\";border-radius:6px}.dplayer-controller .dplayer-icons .dplayer-icon{width:40px;height:100%;border:none;background-color:transparent;outline:none;cursor:pointer;vertical-align:middle;box-sizing:border-box;display:inline-block}.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content{transition:all .2s ease-in-out;opacity:.8}.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content{opacity:1}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon{color:#fff;width:auto;line-height:22px;font-size:14px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon{padding:10px 9px 9px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon{padding-top:8.5px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon{width:43px}.dplayer-controller .dplayer-icons .dplayer-volume{position:relative;display:inline-block;cursor:pointer;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap{display:inline-block;margin:0 10px 0 -5px;vertical-align:middle;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar{position:relative;top:17px;width:45px;height:3px;background:#aaa;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner{position:absolute;bottom:0;left:0;height:100%;transition:all .1s ease;will-change:width}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons .dplayer-setting,.dplayer-controller .dplayer-icons .dplayer-subtitle-btn{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{position:absolute;right:0;bottom:50px;transform:scale(0);width:150px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 0;transition:all .3s ease-in-out;overflow:hidden;z-index:2}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div.dplayer-setting-origin-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow{width:70px;height:180px;text-align:center}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer;position:relative}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku{padding:5px 0}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label{padding:0 10px;display:inline}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap{padding:0 10px;box-sizing:border-box;display:none;vertical-align:middle;height:100%;width:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar{position:relative;top:8.5px;width:100%;height:3px;background:#fff;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner{position:absolute;bottom:0;left:0;height:100%;transition:all .1s ease;background:#aaa;will-change:width}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;background:#aaa}.dplayer-controller .dplayer-icons .dplayer-full{display:inline-block;height:100%;position:relative}.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon{display:block}.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:absolute;top:-30px;z-index:1;display:none}.dplayer-controller .dplayer-icons .dplayer-quality{position:relative;display:inline-block;height:100%;z-index:2}.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list,.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask{display:block}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask{display:none;position:absolute;bottom:38px;left:-18px;width:80px;padding-bottom:12px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list{display:none;font-size:12px;width:80px;border-radius:2px;background:rgba(28,28,28,.9);padding:5px 0;transition:all .3s ease-in-out;overflow:hidden;color:#fff;text-align:center}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item{height:25px;box-sizing:border-box;cursor:pointer;line-height:25px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-comment{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-label{color:#eee;font-size:13px;display:inline-block;vertical-align:middle;white-space:nowrap}.dplayer-controller .dplayer-icons .dplayer-toggle{width:32px;height:20px;text-align:center;font-size:0;vertical-align:middle;position:absolute;top:5px;right:10px}.dplayer-controller .dplayer-icons .dplayer-toggle input{max-height:0;max-width:0;display:none}.dplayer-controller .dplayer-icons .dplayer-toggle input+label{display:inline-block;position:relative;box-shadow:inset 0 0 0 0 #dfdfdf;border:1px solid #dfdfdf;height:20px;width:32px;border-radius:10px;box-sizing:border-box;cursor:pointer;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:after,.dplayer-controller .dplayer-icons .dplayer-toggle input+label:before{content:\"\";position:absolute;display:block;height:18px;width:18px;top:0;left:0;border-radius:15px;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:after{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label{border-color:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:before{width:30px;background:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:after{left:12px}.dplayer-mobile-play{display:none;width:50px;height:50px;border:none;background-color:transparent;outline:none;cursor:pointer;box-sizing:border-box;bottom:0;opacity:.8;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.dplayer-danmaku{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff}.dplayer-danmaku .dplayer-danmaku-item{display:inline-block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;white-space:nowrap;text-shadow:.5px .5px .5px rgba(0,0,0,.5)}.dplayer-danmaku .dplayer-danmaku-item--demo{position:absolute;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-right{position:absolute;right:0;transform:translateX(100%)}.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{will-change:transform;-webkit-animation:danmaku 5s linear;animation:danmaku 5s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku{0%{transform:translateX(100%)}}@keyframes danmaku{0%{transform:translateX(100%)}}.dplayer-danmaku .dplayer-danmaku-bottom,.dplayer-danmaku .dplayer-danmaku-top{position:absolute;width:100%;text-align:center;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{will-change:visibility;-webkit-animation:danmaku-center 4s linear;animation:danmaku-center 4s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}@keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}.dplayer-logo{pointer-events:none;position:absolute;left:20px;top:20px;max-width:50px;max-height:50px}.dplayer-logo img{max-width:100%;max-height:100%;background:none}.dplayer-menu{position:absolute;width:170px;border-radius:2px;background:rgba(28,28,28,.85);padding:5px 0;overflow:hidden;z-index:3;display:none}.dplayer-menu.dplayer-menu-show{display:block}.dplayer-menu .dplayer-menu-item{height:30px;box-sizing:border-box;cursor:pointer}.dplayer-menu .dplayer-menu-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-menu .dplayer-menu-item a{padding:0 10px;line-height:30px;color:#eee;font-size:13px;display:inline-block;vertical-align:middle;width:100%;box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-menu .dplayer-menu-item a:hover{text-decoration:none}.dplayer-notice{opacity:0;position:absolute;bottom:60px;left:20px;font-size:14px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 20px;transition:all .3s ease-in-out;overflow:hidden;color:#fff;pointer-events:none}.dplayer-subtitle{position:absolute;bottom:40px;width:90%;left:5%;text-align:center;color:#fff;text-shadow:.5px .5px .5px rgba(0,0,0,.5);font-size:20px}.dplayer-subtitle.dplayer-subtitle-hide{display:none}.dplayer-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:none}.dplayer-mask.dplayer-mask-show{display:block}.dplayer-video-wrap{position:relative;background:#000;font-size:0;width:100%;height:100%}.dplayer-video-wrap .dplayer-video{width:100%;height:100%;display:none}.dplayer-video-wrap .dplayer-video-current{display:block}.dplayer-video-wrap .dplayer-video-prepare{display:none}.dplayer-info-panel{position:absolute;top:10px;left:10px;width:400px;background:rgba(28,28,28,.8);padding:10px;color:#fff;font-size:12px;border-radius:2px}.dplayer-info-panel-hide{display:none}.dplayer-info-panel .dplayer-info-panel-close{cursor:pointer;position:absolute;right:10px;top:10px}.dplayer-info-panel .dplayer-info-panel-item>span{display:inline-block;vertical-align:middle;line-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-info-panel .dplayer-info-panel-item-title{width:100px;text-align:right;margin-right:10px}.dplayer-info-panel .dplayer-info-panel-item-data{width:260px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
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
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
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

  while (len) {
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
}; // v8 likes predictible objects


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

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/promise-polyfill/src/finally.js":
/*!******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/finally.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    // @ts-ignore
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    // @ts-ignore
    return constructor.resolve(callback()).then(function () {
      // @ts-ignore
      return constructor.reject(reason);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (finallyConstructor);

/***/ }),

/***/ "./node_modules/promise-polyfill/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ "./node_modules/promise-polyfill/src/finally.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())

var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {} // Polyfill for Function.prototype.bind


function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}
/**
 * @constructor
 * @param {Function} fn
 */


function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */

  this._state = 0;
  /** @type {!boolean} */

  this._handled = false;
  /** @type {Promise|undefined} */

  this._value = undefined;
  /** @type {!Array<!Function>} */

  this._deferreds = [];
  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }

  if (self._state === 0) {
    self._deferreds.push(deferred);

    return;
  }

  self._handled = true;

  Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }

    var ret;

    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }

    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

    if (newValue && (_typeof(newValue) === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;

      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }

    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }

  self._deferreds = null;
}
/**
 * @constructor
 */


function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */


function doResolve(fn, self) {
  var done = false;

  try {
    fn(function (value) {
      if (done) return;
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function (onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);
  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];

Promise.all = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (_typeof(val) === 'object' || typeof val === 'function')) {
          var then = val.then;

          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }

        args[i] = val;

        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function (resolve) {
    resolve(value);
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
}; // Use polyfill for setImmediate for performance gains


Promise._immediateFn = // @ts-ignore
typeof setImmediate === 'function' && function (fn) {
  // @ts-ignore
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/assets/camera.svg":
/*!*******************************!*\
  !*** ./src/assets/camera.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z\"></path></svg>"

/***/ }),

/***/ "./src/assets/comment-off.svg":
/*!************************************!*\
  !*** ./src/assets/comment-off.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z\"></path></svg>"

/***/ }),

/***/ "./src/assets/comment.svg":
/*!********************************!*\
  !*** ./src/assets/comment.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z\"></path></svg>"

/***/ }),

/***/ "./src/assets/full-web.svg":
/*!*********************************!*\
  !*** ./src/assets/full-web.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 33\"><path d=\"M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z\"></path></svg>"

/***/ }),

/***/ "./src/assets/full.svg":
/*!*****************************!*\
  !*** ./src/assets/full.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 33\"><path d=\"M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z\"></path></svg>"

/***/ }),

/***/ "./src/assets/loading.svg":
/*!********************************!*\
  !*** ./src/assets/loading.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" viewBox=\"0 0 22 22\"><svg x=\"7\" y=\"1\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-0\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"11\" y=\"3\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-1\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"13\" y=\"7\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-2\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"11\" y=\"11\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-3\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"7\" y=\"13\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-4\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"3\" y=\"11\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-5\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"1\" y=\"7\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-6\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg><svg x=\"3\" y=\"3\"><circle class=\"diplayer-loading-dot diplayer-loading-dot-7\" cx=\"4\" cy=\"4\" r=\"2\"></circle></svg></svg>"

/***/ }),

/***/ "./src/assets/pallette.svg":
/*!*********************************!*\
  !*** ./src/assets/pallette.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z\"></path></svg>"

/***/ }),

/***/ "./src/assets/pause.svg":
/*!******************************!*\
  !*** ./src/assets/pause.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 17 32\"><path d=\"M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z\"></path></svg>"

/***/ }),

/***/ "./src/assets/play.svg":
/*!*****************************!*\
  !*** ./src/assets/play.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 16 32\"><path d=\"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z\"></path></svg>"

/***/ }),

/***/ "./src/assets/right.svg":
/*!******************************!*\
  !*** ./src/assets/right.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg>"

/***/ }),

/***/ "./src/assets/send.svg":
/*!*****************************!*\
  !*** ./src/assets/send.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z\"></path></svg>"

/***/ }),

/***/ "./src/assets/setting.svg":
/*!********************************!*\
  !*** ./src/assets/setting.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 28\"><path d=\"M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z\"></path></svg>"

/***/ }),

/***/ "./src/assets/subtitle.svg":
/*!*********************************!*\
  !*** ./src/assets/subtitle.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z\"></path></svg>"

/***/ }),

/***/ "./src/assets/volume-down.svg":
/*!************************************!*\
  !*** ./src/assets/volume-down.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 21 32\"><path d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z\"></path></svg>"

/***/ }),

/***/ "./src/assets/volume-off.svg":
/*!***********************************!*\
  !*** ./src/assets/volume-off.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 21 32\"><path d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z\"></path></svg>"

/***/ }),

/***/ "./src/assets/volume-up.svg":
/*!**********************************!*\
  !*** ./src/assets/volume-up.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 21 32\"><path d=\"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z\"></path></svg>"

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  send: function send(options) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(options.url, options.data).then(function (response) {
      var data = response.data;

      if (!data || data.code !== 0) {
        options.error && options.error(data && data.msg);
        return;
      }

      options.success && options.success(data);
    })["catch"](function (e) {
      console.error(e);
      options.error && options.error();
    });
  },
  read: function read(options) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(options.url).then(function (response) {
      var data = response.data;

      if (!data || data.code !== 0) {
        options.error && options.error(data && data.msg);
        return;
      }

      options.success && options.success(data.data.map(function (item) {
        return {
          time: item[0],
          type: item[1],
          color: item[2],
          author: item[3],
          text: item[4]
        };
      }));
    })["catch"](function (e) {
      console.error(e);
      options.error && options.error();
    });
  }
});

/***/ }),

/***/ "./src/js/bar.js":
/*!***********************!*\
  !*** ./src/js/bar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bar = /*#__PURE__*/function () {
  function Bar(template) {
    _classCallCheck(this, Bar);

    this.elements = {};
    this.elements.volume = template.volumeBar;
    this.elements.played = template.playedBar;
    this.elements.loaded = template.loadedBar;
    this.elements.danmaku = template.danmakuOpacityBar;
  }
  /**
   * Update progress
   *
   * @param {String} type - Point out which bar it is
   * @param {Number} percentage
   * @param {String} direction - Point out the direction of this bar, Should be height or width
   */


  _createClass(Bar, [{
    key: "set",
    value: function set(type, percentage, direction) {
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      this.elements[type].style[direction] = percentage * 100 + '%';
    }
  }, {
    key: "get",
    value: function get(type) {
      return parseFloat(this.elements[type].style.width) / 100;
    }
  }]);

  return Bar;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ }),

/***/ "./src/js/bezel.js":
/*!*************************!*\
  !*** ./src/js/bezel.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bezel = /*#__PURE__*/function () {
  function Bezel(container) {
    var _this = this;

    _classCallCheck(this, Bezel);

    this.container = container;
    this.container.addEventListener('animationend', function () {
      _this.container.classList.remove('dplayer-bezel-transition');
    });
  }

  _createClass(Bezel, [{
    key: "switch",
    value: function _switch(icon) {
      this.container.innerHTML = icon;
      this.container.classList.add('dplayer-bezel-transition');
    }
  }]);

  return Bezel;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bezel);

/***/ }),

/***/ "./src/js/comment.js":
/*!***************************!*\
  !*** ./src/js/comment.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Comment = /*#__PURE__*/function () {
  function Comment(player) {
    var _this = this;

    _classCallCheck(this, Comment);

    this.player = player;
    this.player.template.mask.addEventListener('click', function () {
      _this.hide();
    });
    this.player.template.commentButton.addEventListener('click', function () {
      _this.show();
    });
    this.player.template.commentSettingButton.addEventListener('click', function () {
      _this.toggleSetting();
    });
    this.player.template.commentColorSettingBox.addEventListener('click', function () {
      var sele = _this.player.template.commentColorSettingBox.querySelector('input:checked+span');

      if (sele) {
        var color = _this.player.template.commentColorSettingBox.querySelector('input:checked').value;

        _this.player.template.commentSettingFill.style.fill = color;
        _this.player.template.commentInput.style.color = color;
        _this.player.template.commentSendFill.style.fill = color;
      }
    });
    this.player.template.commentInput.addEventListener('click', function () {
      _this.hideSetting();
    });
    this.player.template.commentInput.addEventListener('keydown', function (e) {
      var event = e || window.event;

      if (event.keyCode === 13) {
        _this.send();
      }
    });
    this.player.template.commentSendButton.addEventListener('click', function () {
      _this.send();
    });
  }

  _createClass(Comment, [{
    key: "show",
    value: function show() {
      this.player.controller.disableAutoHide = true;
      this.player.template.controller.classList.add('dplayer-controller-comment');
      this.player.template.mask.classList.add('dplayer-mask-show');
      this.player.container.classList.add('dplayer-show-controller');
      this.player.template.commentInput.focus();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.player.template.controller.classList.remove('dplayer-controller-comment');
      this.player.template.mask.classList.remove('dplayer-mask-show');
      this.player.container.classList.remove('dplayer-show-controller');
      this.player.controller.disableAutoHide = false;
      this.hideSetting();
    }
  }, {
    key: "showSetting",
    value: function showSetting() {
      this.player.template.commentSettingBox.classList.add('dplayer-comment-setting-open');
    }
  }, {
    key: "hideSetting",
    value: function hideSetting() {
      this.player.template.commentSettingBox.classList.remove('dplayer-comment-setting-open');
    }
  }, {
    key: "toggleSetting",
    value: function toggleSetting() {
      if (this.player.template.commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
        this.hideSetting();
      } else {
        this.showSetting();
      }
    }
  }, {
    key: "send",
    value: function send() {
      var _this2 = this;

      this.player.template.commentInput.blur(); // text can't be empty

      if (!this.player.template.commentInput.value.replace(/^\s+|\s+$/g, '')) {
        this.player.notice(this.player.tran('Please input danmaku content!'));
        return;
      }

      this.player.danmaku.send({
        text: this.player.template.commentInput.value,
        color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].color2Number(this.player.container.querySelector('.dplayer-comment-setting-color input:checked').value),
        type: parseInt(this.player.container.querySelector('.dplayer-comment-setting-type input:checked').value)
      }, function () {
        _this2.player.template.commentInput.value = '';

        _this2.hide();
      });
    }
  }]);

  return Comment;
}();

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./src/js/contextmenu.js":
/*!*******************************!*\
  !*** ./src/js/contextmenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ContextMenu = /*#__PURE__*/function () {
  function ContextMenu(player) {
    var _this = this;

    _classCallCheck(this, ContextMenu);

    this.player = player;
    this.shown = false;
    Array.prototype.slice.call(this.player.template.menuItem).forEach(function (item, index) {
      if (_this.player.options.contextmenu[index].click) {
        item.addEventListener('click', function () {
          _this.player.options.contextmenu[index].click(_this.player);

          _this.hide();
        });
      }
    });
    this.player.container.addEventListener('contextmenu', function (e) {
      if (_this.shown) {
        _this.hide();

        return;
      }

      var event = e || window.event;
      event.preventDefault();

      var clientRect = _this.player.container.getBoundingClientRect();

      _this.show(event.clientX - clientRect.left, event.clientY - clientRect.top);

      _this.player.template.mask.addEventListener('click', function () {
        _this.hide();
      });
    });
  }

  _createClass(ContextMenu, [{
    key: "show",
    value: function show(x, y) {
      this.player.template.menu.classList.add('dplayer-menu-show');
      var clientRect = this.player.container.getBoundingClientRect();

      if (x + this.player.template.menu.offsetWidth >= clientRect.width) {
        this.player.template.menu.style.right = clientRect.width - x + 'px';
        this.player.template.menu.style.left = 'initial';
      } else {
        this.player.template.menu.style.left = x + 'px';
        this.player.template.menu.style.right = 'initial';
      }

      if (y + this.player.template.menu.offsetHeight >= clientRect.height) {
        this.player.template.menu.style.bottom = clientRect.height - y + 'px';
        this.player.template.menu.style.top = 'initial';
      } else {
        this.player.template.menu.style.top = y + 'px';
        this.player.template.menu.style.bottom = 'initial';
      }

      this.player.template.mask.classList.add('dplayer-mask-show');
      this.shown = true;
      this.player.events.trigger('contextmenu_show');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.player.template.mask.classList.remove('dplayer-mask-show');
      this.player.template.menu.classList.remove('dplayer-menu-show');
      this.shown = false;
      this.player.events.trigger('contextmenu_hide');
    }
  }]);

  return ContextMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (ContextMenu);

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _thumbnails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thumbnails */ "./src/js/thumbnails.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Controller = /*#__PURE__*/function () {
  function Controller(player) {
    var _this = this;

    _classCallCheck(this, Controller);

    this.player = player;
    this.autoHideTimer = 0;

    if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
      this.player.container.addEventListener('mousemove', function () {
        _this.setAutoHide();
      });
      this.player.container.addEventListener('click', function () {
        _this.setAutoHide();
      });
      this.player.on('play', function () {
        _this.setAutoHide();
      });
      this.player.on('pause', function () {
        _this.setAutoHide();
      });
    }

    this.initPlayButton();
    this.initThumbnails();
    this.initPlayedBar();
    this.initFullButton();
    this.initQualityButton();
    this.initScreenshotButton();
    this.initSubtitleButton();
    this.initHighlights();

    if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
      this.initVolumeButton();
    }
  }

  _createClass(Controller, [{
    key: "initPlayButton",
    value: function initPlayButton() {
      var _this2 = this;

      this.player.template.playButton.addEventListener('click', function () {
        _this2.player.toggle();
      });
      this.player.template.mobilePlayButton.addEventListener('click', function () {
        _this2.player.toggle();
      });

      if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
        this.player.template.videoWrap.addEventListener('click', function () {
          _this2.player.toggle();
        });
        this.player.template.controllerMask.addEventListener('click', function () {
          _this2.player.toggle();
        });
      } else {
        this.player.template.videoWrap.addEventListener('click', function () {
          _this2.toggle();
        });
        this.player.template.controllerMask.addEventListener('click', function () {
          _this2.toggle();
        });
      }
    }
  }, {
    key: "initHighlights",
    value: function initHighlights() {
      var _this3 = this;

      this.player.on('durationchange', function () {
        if (_this3.player.video.duration !== 1 && _this3.player.video.duration !== Infinity) {
          if (_this3.player.options.highlight) {
            var highlights = document.querySelectorAll('.dplayer-highlight');
            [].slice.call(highlights, 0).forEach(function (item) {
              _this3.player.template.playedBarWrap.removeChild(item);
            });

            for (var i = 0; i < _this3.player.options.highlight.length; i++) {
              if (!_this3.player.options.highlight[i].text || !_this3.player.options.highlight[i].time) {
                continue;
              }

              var p = document.createElement('div');
              p.classList.add('dplayer-highlight');
              p.style.left = _this3.player.options.highlight[i].time / _this3.player.video.duration * 100 + '%';
              p.innerHTML = '<span class="dplayer-highlight-text">' + _this3.player.options.highlight[i].text + '</span>';

              _this3.player.template.playedBarWrap.insertBefore(p, _this3.player.template.playedBarTime);
            }
          }
        }
      });
    }
  }, {
    key: "initThumbnails",
    value: function initThumbnails() {
      var _this4 = this;

      if (this.player.options.video.thumbnails) {
        this.thumbnails = new _thumbnails__WEBPACK_IMPORTED_MODULE_1__["default"]({
          container: this.player.template.barPreview,
          barWidth: this.player.template.barWrap.offsetWidth,
          url: this.player.options.video.thumbnails,
          events: this.player.events
        });
        this.player.on('loadedmetadata', function () {
          _this4.thumbnails.resize(160, _this4.player.video.videoHeight / _this4.player.video.videoWidth * 160, _this4.player.template.barWrap.offsetWidth);
        });
      }
    }
  }, {
    key: "initPlayedBar",
    value: function initPlayedBar() {
      var _this5 = this;

      var thumbMove = function thumbMove(e) {
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this5.player.template.playedBarWrap)) / _this5.player.template.playedBarWrap.clientWidth;

        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);

        _this5.player.bar.set('played', percentage, 'width');

        _this5.player.template.ptime.innerHTML = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].secondToTime(percentage * _this5.player.video.duration);
      };

      var thumbUp = function thumbUp(e) {
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, thumbUp);
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, thumbMove);

        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this5.player.template.playedBarWrap)) / _this5.player.template.playedBarWrap.clientWidth;

        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);

        _this5.player.bar.set('played', percentage, 'width');

        _this5.player.seek(_this5.player.bar.get('played') * _this5.player.video.duration);

        _this5.player.timer.enable('progress');
      };

      this.player.template.playedBarWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragStart, function () {
        _this5.player.timer.disable('progress');

        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, thumbMove);
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, thumbUp);
      });
      this.player.template.playedBarWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, function (e) {
        if (_this5.player.video.duration) {
          var px = _this5.player.template.playedBarWrap.getBoundingClientRect().left;

          var tx = (e.clientX || e.changedTouches[0].clientX) - px;

          if (tx < 0 || tx > _this5.player.template.playedBarWrap.offsetWidth) {
            return;
          }

          var time = _this5.player.video.duration * (tx / _this5.player.template.playedBarWrap.offsetWidth);

          if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
            _this5.thumbnails && _this5.thumbnails.show();
          }

          _this5.thumbnails && _this5.thumbnails.move(tx);
          _this5.player.template.playedBarTime.style.left = "".concat(tx - (time >= 3600 ? 25 : 20), "px");
          _this5.player.template.playedBarTime.innerText = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].secondToTime(time);

          _this5.player.template.playedBarTime.classList.remove('hidden');
        }
      });
      this.player.template.playedBarWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
          _this5.thumbnails && _this5.thumbnails.hide();
        }
      });

      if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isMobile) {
        this.player.template.playedBarWrap.addEventListener('mouseenter', function () {
          if (_this5.player.video.duration) {
            _this5.thumbnails && _this5.thumbnails.show();

            _this5.player.template.playedBarTime.classList.remove('hidden');
          }
        });
        this.player.template.playedBarWrap.addEventListener('mouseleave', function () {
          if (_this5.player.video.duration) {
            _this5.thumbnails && _this5.thumbnails.hide();

            _this5.player.template.playedBarTime.classList.add('hidden');
          }
        });
      }
    }
  }, {
    key: "initFullButton",
    value: function initFullButton() {
      var _this6 = this;

      this.player.template.browserFullButton.addEventListener('click', function () {
        _this6.player.fullScreen.toggle('browser');
      });
      this.player.template.webFullButton.addEventListener('click', function () {
        _this6.player.fullScreen.toggle('web');
      });
    }
  }, {
    key: "initVolumeButton",
    value: function initVolumeButton() {
      var _this7 = this;

      var vWidth = 35;

      var volumeMove = function volumeMove(event) {
        var e = event || window.event;
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this7.player.template.volumeBarWrap) - 5.5) / vWidth;

        _this7.player.volume(percentage);
      };

      var volumeUp = function volumeUp() {
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, volumeUp);
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, volumeMove);

        _this7.player.template.volumeButton.classList.remove('dplayer-volume-active');
      };

      this.player.template.volumeBarWrapWrap.addEventListener('click', function (event) {
        if (/mobile/i.test(window.navigator.userAgent)) {
          return;
        }

        var e = event || window.event;
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this7.player.template.volumeBarWrap) - 5.5) / vWidth;

        _this7.player.volume(percentage);
      });
      this.player.template.volumeBarWrapWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragStart, function () {
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, volumeMove);
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, volumeUp);

        _this7.player.template.volumeButton.classList.add('dplayer-volume-active');
      });
      this.player.template.volumeButtonIcon.addEventListener('click', function () {
        _this7.player.toggleMute();
      });
    }
  }, {
    key: "initQualityButton",
    value: function initQualityButton() {
      var _this8 = this;

      if (this.player.options.video.quality) {
        this.player.template.qualityList.addEventListener('click', function (e) {
          if (e.target.classList.contains('dplayer-quality-item')) {
            _this8.player.switchQuality(e.target.dataset.index);
          }
        });
      }
    }
  }, {
    key: "initScreenshotButton",
    value: function initScreenshotButton() {
      var _this9 = this;

      if (this.player.options.screenshot) {
        this.player.template.camareButton.addEventListener('click', function () {
          var canvas = document.createElement('canvas');
          canvas.width = _this9.player.video.videoWidth;
          canvas.height = _this9.player.video.videoHeight;
          canvas.getContext('2d').drawImage(_this9.player.video, 0, 0, canvas.width, canvas.height);
          var dataURL;
          canvas.toBlob(function (blob) {
            dataURL = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = dataURL;
            link.download = 'DPlayer.png';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(dataURL);
          });

          _this9.player.events.trigger('screenshot', dataURL);
        });
      }
    }
  }, {
    key: "initSubtitleButton",
    value: function initSubtitleButton() {
      var _this10 = this;

      if (this.player.options.subtitle) {
        this.player.events.on('subtitle_show', function () {
          _this10.player.template.subtitleButton.dataset.balloon = _this10.player.tran('Hide subtitle');
          _this10.player.template.subtitleButtonInner.style.opacity = '';

          _this10.player.user.set('subtitle', 1);
        });
        this.player.events.on('subtitle_hide', function () {
          _this10.player.template.subtitleButton.dataset.balloon = _this10.player.tran('Show subtitle');
          _this10.player.template.subtitleButtonInner.style.opacity = '0.4';

          _this10.player.user.set('subtitle', 0);
        });
        this.player.template.subtitleButton.addEventListener('click', function () {
          _this10.player.subtitle.toggle();
        });
      }
    }
  }, {
    key: "setAutoHide",
    value: function setAutoHide() {
      var _this11 = this;

      this.show();
      clearTimeout(this.autoHideTimer);
      this.autoHideTimer = setTimeout(function () {
        if (!_this11.player.video.played.length) {
          _this11.setAutoHide();

          return;
        }

        if (!_this11.player.paused && !_this11.disableAutoHide) {
          _this11.hide();
        }
      }, 3000);
    }
  }, {
    key: "show",
    value: function show() {
      this.player.container.classList.remove('dplayer-hide-controller');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.player.container.classList.add('dplayer-hide-controller');
      this.player.setting.hide();
      this.player.comment && this.player.comment.hide();

      if (/mobile/i.test(window.navigator.userAgent)) {
        this.player.template.mask.classList.add('dplayer-mask-show');
      }
    }
  }, {
    key: "isShow",
    value: function isShow() {
      return !this.player.container.classList.contains('dplayer-hide-controller');
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isShow()) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      clearTimeout(this.autoHideTimer);
    }
  }]);

  return Controller;
}();

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./src/js/danmaku.js":
/*!***************************!*\
  !*** ./src/js/danmaku.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Danmaku = /*#__PURE__*/function () {
  function Danmaku(options) {
    _classCallCheck(this, Danmaku);

    this.options = options;
    this.container = this.options.container;
    this.danTunnel = {
      right: {},
      top: {},
      bottom: {}
    };
    this.danIndex = 0;
    this.dan = [];
    this.showing = true;
    this._opacity = this.options.opacity;
    this.events = this.options.events;
    this.unlimited = this.options.unlimited;

    this._measure('');

    this.load();
  }

  _createClass(Danmaku, [{
    key: "load",
    value: function load() {
      var _this = this;

      var apiurl;

      if (this.options.api.maximum) {
        apiurl = "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id, "&max=").concat(this.options.api.maximum);
      } else {
        apiurl = "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id);
      }

      var endpoints = (this.options.api.addition || []).slice(0);
      endpoints.push(apiurl);
      this.events && this.events.trigger('danmaku_load_start', endpoints);

      this._readAllEndpoints(endpoints, function (results) {
        _this.dan = [].concat.apply([], results).sort(function (a, b) {
          return a.time - b.time;
        });
        window.requestAnimationFrame(function () {
          _this.frame();
        });

        _this.options.callback();

        _this.events && _this.events.trigger('danmaku_load_end');
      });
    }
  }, {
    key: "reload",
    value: function reload(newAPI) {
      this.options.api = newAPI;
      this.dan = [];
      this.clear();
      this.load();
    }
    /**
     * Asynchronously read danmaku from all API endpoints
     */

  }, {
    key: "_readAllEndpoints",
    value: function _readAllEndpoints(endpoints, callback) {
      var _this2 = this;

      var results = [];
      var readCount = 0;

      var _loop = function _loop(i) {
        _this2.options.apiBackend.read({
          url: endpoints[i],
          success: function success(data) {
            results[i] = data;
            ++readCount;

            if (readCount === endpoints.length) {
              callback(results);
            }
          },
          error: function error(msg) {
            _this2.options.error(msg || _this2.options.tran('Danmaku load failed'));

            results[i] = [];
            ++readCount;

            if (readCount === endpoints.length) {
              callback(results);
            }
          }
        });
      };

      for (var i = 0; i < endpoints.length; ++i) {
        _loop(i);
      }
    }
  }, {
    key: "send",
    value: function send(dan, callback) {
      var _this3 = this;

      var danmakuData = {
        token: this.options.api.token,
        id: this.options.api.id,
        author: this.options.api.user,
        time: this.options.time(),
        text: dan.text,
        color: dan.color,
        type: dan.type
      };
      this.options.apiBackend.send({
        url: this.options.api.address + 'v3/',
        data: danmakuData,
        success: callback,
        error: function error(msg) {
          _this3.options.error(msg || _this3.options.tran('Danmaku send failed'));
        }
      });
      this.dan.splice(this.danIndex, 0, danmakuData);
      this.danIndex++;
      var danmaku = {
        text: this.htmlEncode(danmakuData.text),
        color: danmakuData.color,
        type: danmakuData.type,
        border: "2px solid ".concat(this.options.borderColor)
      };
      this.draw(danmaku);
      this.events && this.events.trigger('danmaku_send', danmakuData);
    }
  }, {
    key: "frame",
    value: function frame() {
      var _this4 = this;

      if (this.dan.length && !this.paused && this.showing) {
        var item = this.dan[this.danIndex];
        var dan = [];

        while (item && this.options.time() > parseFloat(item.time)) {
          dan.push(item);
          item = this.dan[++this.danIndex];
        }

        this.draw(dan);
      }

      window.requestAnimationFrame(function () {
        _this4.frame();
      });
    }
  }, {
    key: "opacity",
    value: function opacity(percentage) {
      if (percentage !== undefined) {
        var items = this.container.getElementsByClassName('dplayer-danmaku-item');

        for (var i = 0; i < items.length; i++) {
          items[i].style.opacity = percentage;
        }

        this._opacity = percentage;
        this.events && this.events.trigger('danmaku_opacity', this._opacity);
      }

      return this._opacity;
    }
    /**
     * Push a danmaku into DPlayer
     *
     * @param {Object Array} dan - {text, color, type}
     * text - danmaku content
     * color - danmaku color, default: `#fff`
     * type - danmaku type, `right` `top` `bottom`, default: `right`
     */

  }, {
    key: "draw",
    value: function draw(dan) {
      var _this5 = this;

      if (this.showing) {
        var itemHeight = this.options.height;
        var danWidth = this.container.offsetWidth;
        var danHeight = this.container.offsetHeight;
        var itemY = parseInt(danHeight / itemHeight);

        var danItemRight = function danItemRight(ele) {
          var eleWidth = ele.offsetWidth || parseInt(ele.style.width);
          var eleRight = ele.getBoundingClientRect().right || _this5.container.getBoundingClientRect().right + eleWidth;
          return _this5.container.getBoundingClientRect().right - eleRight;
        };

        var danSpeed = function danSpeed(width) {
          return (danWidth + width) / 5;
        };

        var getTunnel = function getTunnel(ele, type, width) {
          var tmp = danWidth / danSpeed(width);

          var _loop2 = function _loop2(i) {
            var item = _this5.danTunnel[type][i + ''];

            if (item && item.length) {
              if (type !== 'right') {
                return "continue";
              }

              for (var j = 0; j < item.length; j++) {
                var danRight = danItemRight(item[j]) - 10;

                if (danRight <= danWidth - tmp * danSpeed(parseInt(item[j].style.width)) || danRight <= 0) {
                  break;
                }

                if (j === item.length - 1) {
                  _this5.danTunnel[type][i + ''].push(ele);

                  ele.addEventListener('animationend', function () {
                    _this5.danTunnel[type][i + ''].splice(0, 1);
                  });
                  return {
                    v: i % itemY
                  };
                }
              }
            } else {
              _this5.danTunnel[type][i + ''] = [ele];
              ele.addEventListener('animationend', function () {
                _this5.danTunnel[type][i + ''].splice(0, 1);
              });
              return {
                v: i % itemY
              };
            }
          };

          for (var i = 0; _this5.unlimited || i < itemY; i++) {
            var _ret = _loop2(i);

            switch (_ret) {
              case "continue":
                continue;

              default:
                if (_typeof(_ret) === "object") return _ret.v;
            }
          }

          return -1;
        };

        if (Object.prototype.toString.call(dan) !== '[object Array]') {
          dan = [dan];
        }

        var docFragment = document.createDocumentFragment();

        var _loop3 = function _loop3(i) {
          dan[i].type = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].number2Type(dan[i].type);

          if (!dan[i].color) {
            dan[i].color = 16777215;
          }

          var item = document.createElement('div');
          item.classList.add('dplayer-danmaku-item');
          item.classList.add("dplayer-danmaku-".concat(dan[i].type));

          if (dan[i].border) {
            item.innerHTML = "<span style=\"border:".concat(dan[i].border, "\">").concat(dan[i].text, "</span>");
          } else {
            item.innerHTML = dan[i].text;
          }

          item.style.opacity = _this5._opacity;
          item.style.color = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].number2Color(dan[i].color);
          item.addEventListener('animationend', function () {
            _this5.container.removeChild(item);
          });

          var itemWidth = _this5._measure(dan[i].text);

          var tunnel = void 0; // adjust

          switch (dan[i].type) {
            case 'right':
              tunnel = getTunnel(item, dan[i].type, itemWidth);

              if (tunnel >= 0) {
                item.style.width = itemWidth + 1 + 'px';
                item.style.top = itemHeight * tunnel + 'px';
                item.style.transform = "translateX(-".concat(danWidth, "px)");
              }

              break;

            case 'top':
              tunnel = getTunnel(item, dan[i].type);

              if (tunnel >= 0) {
                item.style.top = itemHeight * tunnel + 'px';
              }

              break;

            case 'bottom':
              tunnel = getTunnel(item, dan[i].type);

              if (tunnel >= 0) {
                item.style.bottom = itemHeight * tunnel + 'px';
              }

              break;

            default:
              console.error("Can't handled danmaku type: ".concat(dan[i].type));
          }

          if (tunnel >= 0) {
            // move
            item.classList.add('dplayer-danmaku-move'); // insert

            docFragment.appendChild(item);
          }
        };

        for (var i = 0; i < dan.length; i++) {
          _loop3(i);
        }

        this.container.appendChild(docFragment);
        return docFragment;
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.paused = false;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "_measure",
    value: function _measure(text) {
      if (!this.context) {
        var measureStyle = getComputedStyle(this.container.getElementsByClassName('dplayer-danmaku-item')[0], null);
        this.context = document.createElement('canvas').getContext('2d');
        this.context.font = measureStyle.getPropertyValue('font');
      }

      return this.context.measureText(text).width;
    }
  }, {
    key: "seek",
    value: function seek() {
      this.clear();

      for (var i = 0; i < this.dan.length; i++) {
        if (this.dan[i].time >= this.options.time()) {
          this.danIndex = i;
          break;
        }

        this.danIndex = this.dan.length;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.danTunnel = {
        right: {},
        top: {},
        bottom: {}
      };
      this.danIndex = 0;
      this.options.container.innerHTML = '';
      this.events && this.events.trigger('danmaku_clear');
    }
  }, {
    key: "htmlEncode",
    value: function htmlEncode(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2f;');
    }
  }, {
    key: "resize",
    value: function resize() {
      var danWidth = this.container.offsetWidth;
      var items = this.container.getElementsByClassName('dplayer-danmaku-item');

      for (var i = 0; i < items.length; i++) {
        items[i].style.transform = "translateX(-".concat(danWidth, "px)");
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.showing = false;
      this.pause();
      this.clear();
      this.events && this.events.trigger('danmaku_hide');
    }
  }, {
    key: "show",
    value: function show() {
      this.seek();
      this.showing = true;
      this.play();
      this.events && this.events.trigger('danmaku_show');
    }
  }, {
    key: "unlimit",
    value: function unlimit(_boolean) {
      this.unlimited = _boolean;
    }
  }]);

  return Danmaku;
}();

/* harmony default export */ __webpack_exports__["default"] = (Danmaku);

/***/ }),

/***/ "./src/js/events.js":
/*!**************************!*\
  !*** ./src/js/events.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Events = /*#__PURE__*/function () {
  function Events() {
    _classCallCheck(this, Events);

    this.events = {};
    this.videoEvents = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'];
    this.playerEvents = ['screenshot', 'thumbnails_show', 'thumbnails_hide', 'danmaku_show', 'danmaku_hide', 'danmaku_clear', 'danmaku_loaded', 'danmaku_send', 'danmaku_opacity', 'contextmenu_show', 'contextmenu_hide', 'notice_show', 'notice_hide', 'quality_start', 'quality_end', 'destroy', 'resize', 'fullscreen', 'fullscreen_cancel', 'webfullscreen', 'webfullscreen_cancel', 'subtitle_show', 'subtitle_hide', 'subtitle_change'];
  }

  _createClass(Events, [{
    key: "on",
    value: function on(name, callback) {
      if (this.type(name) && typeof callback === 'function') {
        if (!this.events[name]) {
          this.events[name] = [];
        }

        this.events[name].push(callback);
      }
    }
  }, {
    key: "trigger",
    value: function trigger(name, info) {
      if (this.events[name] && this.events[name].length) {
        for (var i = 0; i < this.events[name].length; i++) {
          this.events[name][i](info);
        }
      }
    }
  }, {
    key: "type",
    value: function type(name) {
      if (this.playerEvents.indexOf(name) !== -1) {
        return 'player';
      } else if (this.videoEvents.indexOf(name) !== -1) {
        return 'video';
      }

      console.error("Unknown event name: ".concat(name));
      return null;
    }
  }]);

  return Events;
}();

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./src/js/fullscreen.js":
/*!******************************!*\
  !*** ./src/js/fullscreen.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FullScreen = /*#__PURE__*/function () {
  function FullScreen(player) {
    var _this = this;

    _classCallCheck(this, FullScreen);

    this.player = player;
    this.lastScrollPosition = {
      left: 0,
      top: 0
    };
    this.player.events.on('webfullscreen', function () {
      _this.player.resize();
    });
    this.player.events.on('webfullscreen_cancel', function () {
      _this.player.resize();

      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setScrollPosition(_this.lastScrollPosition);
    });

    var fullscreenchange = function fullscreenchange() {
      _this.player.resize();

      if (_this.isFullScreen('browser')) {
        _this.player.events.trigger('fullscreen');
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setScrollPosition(_this.lastScrollPosition);

        _this.player.events.trigger('fullscreen_cancel');
      }
    };

    var docfullscreenchange = function docfullscreenchange() {
      var fullEle = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

      if (fullEle && fullEle !== _this.player.container) {
        return;
      }

      _this.player.resize();

      if (fullEle) {
        _this.player.events.trigger('fullscreen');
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setScrollPosition(_this.lastScrollPosition);

        _this.player.events.trigger('fullscreen_cancel');
      }
    };

    if (/Firefox/.test(navigator.userAgent)) {
      document.addEventListener('mozfullscreenchange', docfullscreenchange);
      document.addEventListener('fullscreenchange', docfullscreenchange);
    } else {
      this.player.container.addEventListener('fullscreenchange', fullscreenchange);
      this.player.container.addEventListener('webkitfullscreenchange', fullscreenchange);
      document.addEventListener('msfullscreenchange', docfullscreenchange);
      document.addEventListener('MSFullscreenChange', docfullscreenchange);
    }
  }

  _createClass(FullScreen, [{
    key: "isFullScreen",
    value: function isFullScreen() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';

      switch (type) {
        case 'browser':
          return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

        case 'web':
          return this.player.container.classList.contains('dplayer-fulled');
      }
    }
  }, {
    key: "request",
    value: function request() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';
      var anotherType = type === 'browser' ? 'web' : 'browser';
      var anotherTypeOn = this.isFullScreen(anotherType);

      if (!anotherTypeOn) {
        this.lastScrollPosition = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollPosition();
      }

      switch (type) {
        case 'browser':
          if (this.player.container.requestFullscreen) {
            this.player.container.requestFullscreen();
          } else if (this.player.container.mozRequestFullScreen) {
            this.player.container.mozRequestFullScreen();
          } else if (this.player.container.webkitRequestFullscreen) {
            this.player.container.webkitRequestFullscreen();
          } else if (this.player.video.webkitEnterFullscreen) {
            // Safari for iOS
            this.player.video.webkitEnterFullscreen();
          } else if (this.player.video.webkitEnterFullScreen) {
            this.player.video.webkitEnterFullScreen();
          } else if (this.player.container.msRequestFullscreen) {
            this.player.container.msRequestFullscreen();
          }

          break;

        case 'web':
          this.player.container.classList.add('dplayer-fulled');
          document.body.classList.add('dplayer-web-fullscreen-fix');
          this.player.events.trigger('webfullscreen');
          break;
      }

      if (anotherTypeOn) {
        this.cancel(anotherType);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';

      switch (type) {
        case 'browser':
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.webkitCancelFullscreen) {
            document.webkitCancelFullscreen();
          } else if (document.msCancelFullScreen) {
            document.msCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }

          break;

        case 'web':
          this.player.container.classList.remove('dplayer-fulled');
          document.body.classList.remove('dplayer-web-fullscreen-fix');
          this.player.events.trigger('webfullscreen_cancel');
          break;
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'browser';

      if (this.isFullScreen(type)) {
        this.cancel(type);
      } else {
        this.request(type);
      }
    }
  }]);

  return FullScreen;
}();

/* harmony default export */ __webpack_exports__["default"] = (FullScreen);

/***/ }),

/***/ "./src/js/hotkey.js":
/*!**************************!*\
  !*** ./src/js/hotkey.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HotKey = function HotKey(player) {
  _classCallCheck(this, HotKey);

  if (player.options.hotkey) {
    document.addEventListener('keydown', function (e) {
      if (player.focus) {
        var tag = document.activeElement.tagName.toUpperCase();
        var editable = document.activeElement.getAttribute('contenteditable');

        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
          var event = e || window.event;
          var percentage;

          switch (event.keyCode) {
            case 32:
              event.preventDefault();
              player.toggle();
              break;

            case 37:
              event.preventDefault();
              player.seek(player.video.currentTime - 5);
              player.controller.setAutoHide();
              break;

            case 39:
              event.preventDefault();
              player.seek(player.video.currentTime + 5);
              player.controller.setAutoHide();
              break;

            case 38:
              event.preventDefault();
              percentage = player.volume() + 0.1;
              player.volume(percentage);
              break;

            case 40:
              event.preventDefault();
              percentage = player.volume() - 0.1;
              player.volume(percentage);
              break;
          }
        }
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    var event = e || window.event;

    switch (event.keyCode) {
      case 27:
        if (player.fullScreen.isFullScreen('web')) {
          player.fullScreen.cancel('web');
        }

        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HotKey);

/***/ }),

/***/ "./src/js/i18n.js":
/*!************************!*\
  !*** ./src/js/i18n.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
W3C def language codes is :
    language-code = primary-code ( "-" subcode )
        primary-code    ISO 639-1   ( the names of language with 2 code )
        subcode         ISO 3166    ( the names of countries )

NOTE: use lowercase to prevent case typo from user!
Use this as shown below..... */
function i18n(lang) {
  var _this = this;

  this.lang = lang;

  this.tran = function (text) {
    if (tranTxt[_this.lang] && tranTxt[_this.lang][text]) {
      return tranTxt[_this.lang][text];
    } else {
      return text;
    }
  };
} // add translation text here


var tranTxt = {
  'zh-cn': {
    'Danmaku is loading': '弹幕加载中',
    Top: '顶部',
    Bottom: '底部',
    Rolling: '滚动',
    'Input danmaku, hit Enter': '输入弹幕，回车发送',
    'About author': '关于作者',
    'DPlayer feedback': '播放器意见反馈',
    'About DPlayer': '关于 DPlayer 播放器',
    Loop: '洗脑循环',
    Speed: '速度',
    'Opacity for danmaku': '弹幕透明度',
    Normal: '正常',
    'Please input danmaku content!': '要输入弹幕内容啊喂！',
    'Set danmaku color': '设置弹幕颜色',
    'Set danmaku type': '设置弹幕类型',
    'Show danmaku': '显示弹幕',
    'Video load failed': '视频加载失败',
    'Danmaku load failed': '弹幕加载失败',
    'Danmaku send failed': '弹幕发送失败',
    'Switching to': '正在切换至',
    'Switched to': '已经切换至',
    quality: '画质',
    FF: '快进',
    REW: '快退',
    'Unlimited danmaku': '海量弹幕',
    'Send danmaku': '发送弹幕',
    Setting: '设置',
    'Full screen': '全屏',
    'Web full screen': '页面全屏',
    Send: '发送',
    Screenshot: '截图',
    s: '秒',
    'Show subtitle': '显示字幕',
    'Hide subtitle': '隐藏字幕',
    Volume: '音量',
    Live: '直播',
    'Video info': '视频统计信息'
  },
  'zh-tw': {
    'Danmaku is loading': '彈幕載入中',
    Top: '頂部',
    Bottom: '底部',
    Rolling: '滾動',
    'Input danmaku, hit Enter': '輸入彈幕，Enter 發送',
    'About author': '關於作者',
    'DPlayer feedback': '播放器意見回饋',
    'About DPlayer': '關於 DPlayer 播放器',
    Loop: '循環播放',
    Speed: '速度',
    'Opacity for danmaku': '彈幕透明度',
    Normal: '正常',
    'Please input danmaku content!': '請輸入彈幕內容啊！',
    'Set danmaku color': '設定彈幕顏色',
    'Set danmaku type': '設定彈幕類型',
    'Show danmaku': '顯示彈幕',
    'Video load failed': '影片載入失敗',
    'Danmaku load failed': '彈幕載入失敗',
    'Danmaku send failed': '彈幕發送失敗',
    'Switching to': '正在切換至',
    'Switched to': '已經切換至',
    quality: '畫質',
    FF: '快進',
    REW: '快退',
    'Unlimited danmaku': '巨量彈幕',
    'Send danmaku': '發送彈幕',
    Setting: '設定',
    'Full screen': '全螢幕',
    'Web full screen': '頁面全螢幕',
    Send: '發送',
    Screenshot: '截圖',
    s: '秒',
    'Show subtitle': '顯示字幕',
    'Hide subtitle': '隱藏字幕',
    Volume: '音量',
    Live: '直播',
    'Video info': '影片統計訊息'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ "./src/js/icons.js":
/*!*************************!*\
  !*** ./src/js/icons.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_play_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/play.svg */ "./src/assets/play.svg");
/* harmony import */ var _assets_play_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_play_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_pause_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/pause.svg */ "./src/assets/pause.svg");
/* harmony import */ var _assets_pause_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_pause_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_volume_up_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/volume-up.svg */ "./src/assets/volume-up.svg");
/* harmony import */ var _assets_volume_up_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_volume_up_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_volume_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/volume-down.svg */ "./src/assets/volume-down.svg");
/* harmony import */ var _assets_volume_down_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_volume_down_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/volume-off.svg */ "./src/assets/volume-off.svg");
/* harmony import */ var _assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_full_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/full.svg */ "./src/assets/full.svg");
/* harmony import */ var _assets_full_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_full_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_full_web_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/full-web.svg */ "./src/assets/full-web.svg");
/* harmony import */ var _assets_full_web_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_full_web_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_setting_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/setting.svg */ "./src/assets/setting.svg");
/* harmony import */ var _assets_setting_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_setting_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_right_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/right.svg */ "./src/assets/right.svg");
/* harmony import */ var _assets_right_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_right_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_comment_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/comment.svg */ "./src/assets/comment.svg");
/* harmony import */ var _assets_comment_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_comment_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_comment_off_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/comment-off.svg */ "./src/assets/comment-off.svg");
/* harmony import */ var _assets_comment_off_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_comment_off_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_send_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/send.svg */ "./src/assets/send.svg");
/* harmony import */ var _assets_send_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_send_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_pallette_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/pallette.svg */ "./src/assets/pallette.svg");
/* harmony import */ var _assets_pallette_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_pallette_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_camera_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/camera.svg */ "./src/assets/camera.svg");
/* harmony import */ var _assets_camera_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_camera_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_subtitle_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/subtitle.svg */ "./src/assets/subtitle.svg");
/* harmony import */ var _assets_subtitle_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_subtitle_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_loading_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/loading.svg */ "./src/assets/loading.svg");
/* harmony import */ var _assets_loading_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_loading_svg__WEBPACK_IMPORTED_MODULE_15__);
















var Icons = {
  play: _assets_play_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
  pause: _assets_pause_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  volumeUp: _assets_volume_up_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  volumeDown: _assets_volume_down_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  volumeOff: _assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  full: _assets_full_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  fullWeb: _assets_full_web_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  setting: _assets_setting_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  right: _assets_right_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
  comment: _assets_comment_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
  commentOff: _assets_comment_off_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
  send: _assets_send_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
  pallette: _assets_pallette_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
  camera: _assets_camera_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
  subtitle: _assets_subtitle_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  loading: _assets_loading_svg__WEBPACK_IMPORTED_MODULE_15___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.js");


/* global DPLAYER_VERSION GIT_HASH */

console.log('\n'.concat(" %c DPlayer v", "1.25.0", " ").concat("d2ddd84", " %c http://dplayer.js.org ", '\n', '\n'), 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
/* harmony default export */ __webpack_exports__["default"] = (_player__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/js/info-panel.js":
/*!******************************!*\
  !*** ./src/js/info-panel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global DPLAYER_VERSION GIT_HASH */
var InfoPanel = /*#__PURE__*/function () {
  function InfoPanel(player) {
    var _this = this;

    _classCallCheck(this, InfoPanel);

    this.container = player.template.infoPanel;
    this.template = player.template;
    this.video = player.video;
    this.player = player;
    this.template.infoPanelClose.addEventListener('click', function () {
      _this.hide();
    });
  }

  _createClass(InfoPanel, [{
    key: "show",
    value: function show() {
      this.beginTime = Date.now();
      this.update();
      this.player.timer.enable('info');
      this.player.timer.enable('fps');
      this.container.classList.remove('dplayer-info-panel-hide');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.player.timer.disable('info');
      this.player.timer.disable('fps');
      this.container.classList.add('dplayer-info-panel-hide');
    }
  }, {
    key: "triggle",
    value: function triggle() {
      if (this.container.classList.contains('dplayer-info-panel-hide')) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.template.infoVersion.innerHTML = "v".concat("1.25.0", " ").concat("d2ddd84");
      this.template.infoType.innerHTML = this.player.type;
      this.template.infoUrl.innerHTML = this.player.options.video.url;
      this.template.infoResolution.innerHTML = "".concat(this.player.video.videoWidth, " x ").concat(this.player.video.videoHeight);
      this.template.infoDuration.innerHTML = this.player.video.duration;

      if (this.player.options.danmaku) {
        this.template.infoDanmakuId.innerHTML = this.player.options.danmaku.id;
        this.template.infoDanmakuApi.innerHTML = this.player.options.danmaku.api;
        this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length;
      }
    }
  }, {
    key: "fps",
    value: function fps(value) {
      this.template.infoFPS.innerHTML = "".concat(value.toFixed(1));
    }
  }]);

  return InfoPanel;
}();

/* harmony default export */ __webpack_exports__["default"] = (InfoPanel);

/***/ }),

/***/ "./src/js/options.js":
/*!***************************!*\
  !*** ./src/js/options.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/js/api.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global DPLAYER_VERSION */

/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  // default options
  var defaultOption = {
    container: options.element || document.getElementsByClassName('dplayer')[0],
    live: false,
    autoplay: false,
    theme: '#b7daff',
    loop: false,
    lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
    screenshot: false,
    hotkey: true,
    preload: 'metadata',
    volume: 0.7,
    apiBackend: _api_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    video: {},
    contextmenu: [],
    mutex: true,
    pluginOptions: {
      hls: {},
      flvjs: {},
      dash: {},
      webtorrent: {}
    }
  };

  for (var defaultKey in defaultOption) {
    if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
      options[defaultKey] = defaultOption[defaultKey];
    }
  }

  if (options.video) {
    !options.video.type && (options.video.type = 'auto');
  }

  if (_typeof(options.danmaku) === 'object' && options.danmaku) {
    !options.danmaku.user && (options.danmaku.user = 'DIYgod');
  }

  if (options.subtitle) {
    !options.subtitle.type && (options.subtitle.type = 'webvtt');
    !options.subtitle.fontSize && (options.subtitle.fontSize = '20px');
    !options.subtitle.bottom && (options.subtitle.bottom = '40px');
    !options.subtitle.color && (options.subtitle.color = '#fff');
  }

  if (options.video.quality) {
    options.video.url = options.video.quality[options.video.defaultQuality].url;
  }

  if (options.lang) {
    options.lang = options.lang.toLowerCase();
  }

  options.contextmenu = options.contextmenu.concat([{
    text: 'Video info',
    click: function click(player) {
      player.infoPanel.triggle();
    }
  }, {
    text: 'About author',
    link: 'https://diygod.me'
  }, {
    text: "DPlayer v".concat("1.25.0"),
    link: 'https://github.com/MoePlayer/DPlayer'
  }]);
  return options;
});

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/js/options.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n */ "./src/js/i18n.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template */ "./src/js/template.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/js/icons.js");
/* harmony import */ var _danmaku__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danmaku */ "./src/js/danmaku.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events */ "./src/js/events.js");
/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fullscreen */ "./src/js/fullscreen.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user */ "./src/js/user.js");
/* harmony import */ var _subtitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subtitle */ "./src/js/subtitle.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bar */ "./src/js/bar.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timer */ "./src/js/timer.js");
/* harmony import */ var _bezel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bezel */ "./src/js/bezel.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./setting */ "./src/js/setting.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comment */ "./src/js/comment.js");
/* harmony import */ var _hotkey__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hotkey */ "./src/js/hotkey.js");
/* harmony import */ var _contextmenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contextmenu */ "./src/js/contextmenu.js");
/* harmony import */ var _info_panel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./info-panel */ "./src/js/info-panel.js");
/* harmony import */ var _template_video_art__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../template/video.art */ "./src/template/video.art");
/* harmony import */ var _template_video_art__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_template_video_art__WEBPACK_IMPORTED_MODULE_20__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






















var index = 0;
var instances = [];

var DPlayer = /*#__PURE__*/function () {
  /**
   * DPlayer constructor function
   *
   * @param {Object} options - See README
   * @constructor
   */
  function DPlayer(options) {
    var _this = this;

    _classCallCheck(this, DPlayer);

    this.options = Object(_options__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread({
      preload: options.video.type === 'webtorrent' ? 'none' : 'metadata'
    }, options));

    if (this.options.video.quality) {
      this.qualityIndex = this.options.video.defaultQuality;
      this.quality = this.options.video.quality[this.options.video.defaultQuality];
    }

    this.tran = new _i18n__WEBPACK_IMPORTED_MODULE_3__["default"](this.options.lang).tran;
    this.events = new _events__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.user = new _user__WEBPACK_IMPORTED_MODULE_9__["default"](this);
    this.container = this.options.container;
    this.container.classList.add('dplayer');

    if (!this.options.danmaku) {
      this.container.classList.add('dplayer-no-danmaku');
    }

    if (this.options.live) {
      this.container.classList.add('dplayer-live');
    }

    if (_utils__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
      this.container.classList.add('dplayer-mobile');
    }

    this.arrow = this.container.offsetWidth <= 500;

    if (this.arrow) {
      this.container.classList.add('dplayer-arrow');
    }

    this.template = new _template__WEBPACK_IMPORTED_MODULE_4__["default"]({
      container: this.container,
      options: this.options,
      index: index,
      tran: this.tran
    });
    this.video = this.template.video;
    this.bar = new _bar__WEBPACK_IMPORTED_MODULE_11__["default"](this.template);
    this.bezel = new _bezel__WEBPACK_IMPORTED_MODULE_13__["default"](this.template.bezel);
    this.fullScreen = new _fullscreen__WEBPACK_IMPORTED_MODULE_8__["default"](this);
    this.controller = new _controller__WEBPACK_IMPORTED_MODULE_14__["default"](this);

    if (this.options.danmaku) {
      this.danmaku = new _danmaku__WEBPACK_IMPORTED_MODULE_6__["default"]({
        container: this.template.danmaku,
        opacity: this.user.get('opacity'),
        callback: function callback() {
          setTimeout(function () {
            _this.template.danmakuLoading.style.display = 'none'; // autoplay

            if (_this.options.autoplay) {
              _this.play();
            }
          }, 0);
        },
        error: function error(msg) {
          _this.notice(msg);
        },
        apiBackend: this.options.apiBackend,
        borderColor: this.options.theme,
        height: this.arrow ? 24 : 30,
        time: function time() {
          return _this.video.currentTime;
        },
        unlimited: this.user.get('unlimited'),
        api: {
          id: this.options.danmaku.id,
          address: this.options.danmaku.api,
          token: this.options.danmaku.token,
          maximum: this.options.danmaku.maximum,
          addition: this.options.danmaku.addition,
          user: this.options.danmaku.user
        },
        events: this.events,
        tran: function tran(msg) {
          return _this.tran(msg);
        }
      });
      this.comment = new _comment__WEBPACK_IMPORTED_MODULE_16__["default"](this);
    }

    this.setting = new _setting__WEBPACK_IMPORTED_MODULE_15__["default"](this);
    this.plugins = {};
    document.addEventListener('click', function () {
      _this.focus = false;
    }, true);
    this.container.addEventListener('click', function () {
      _this.focus = true;
    }, true);
    this.paused = true;
    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_12__["default"](this);
    this.hotkey = new _hotkey__WEBPACK_IMPORTED_MODULE_17__["default"](this);
    this.contextmenu = new _contextmenu__WEBPACK_IMPORTED_MODULE_18__["default"](this);
    this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type);
    this.infoPanel = new _info_panel__WEBPACK_IMPORTED_MODULE_19__["default"](this);

    if (!this.danmaku && this.options.autoplay) {
      this.play();
    }

    index++;
    instances.push(this);
  }
  /**
   * Seek video
   */


  _createClass(DPlayer, [{
    key: "seek",
    value: function seek(time) {
      time = Math.max(time, 0);

      if (this.video.duration) {
        time = Math.min(time, this.video.duration);
      }

      if (this.video.currentTime < time) {
        this.notice("".concat(this.tran('FF'), " ").concat((time - this.video.currentTime).toFixed(0), " ").concat(this.tran('s')));
      } else if (this.video.currentTime > time) {
        this.notice("".concat(this.tran('REW'), " ").concat((this.video.currentTime - time).toFixed(0), " ").concat(this.tran('s')));
      }

      this.video.currentTime = time;

      if (this.danmaku) {
        this.danmaku.seek();
      }

      this.bar.set('played', time / this.video.duration, 'width');
      this.template.ptime.innerHTML = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].secondToTime(time);
    }
    /**
     * Play video
     */

  }, {
    key: "play",
    value: function play() {
      var _this2 = this;

      this.paused = false;

      if (this.video.paused && !_utils__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
        this.bezel["switch"](_icons__WEBPACK_IMPORTED_MODULE_5__["default"].play);
      }

      this.template.playButton.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].pause;
      this.template.mobilePlayButton.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].pause;
      var playedPromise = promise_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(this.video.play());
      playedPromise["catch"](function () {
        _this2.pause();
      }).then(function () {});
      this.timer.enable('loading');
      this.container.classList.remove('dplayer-paused');
      this.container.classList.add('dplayer-playing');

      if (this.danmaku) {
        this.danmaku.play();
      }

      if (this.options.mutex) {
        for (var i = 0; i < instances.length; i++) {
          if (this !== instances[i]) {
            instances[i].pause();
          }
        }
      }
    }
    /**
     * Pause video
     */

  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
      this.container.classList.remove('dplayer-loading');

      if (!this.video.paused && !_utils__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile) {
        this.bezel["switch"](_icons__WEBPACK_IMPORTED_MODULE_5__["default"].pause);
      }

      this.template.playButton.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].play;
      this.template.mobilePlayButton.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].play;
      this.video.pause();
      this.timer.disable('loading');
      this.container.classList.remove('dplayer-playing');
      this.container.classList.add('dplayer-paused');

      if (this.danmaku) {
        this.danmaku.pause();
      }
    }
  }, {
    key: "switchVolumeIcon",
    value: function switchVolumeIcon() {
      if (this.volume() >= 0.95) {
        this.template.volumeIcon.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].volumeUp;
      } else if (this.volume() > 0) {
        this.template.volumeIcon.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].volumeDown;
      } else {
        this.template.volumeIcon.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].volumeOff;
      }
    }
    /**
     * Set volume
     */

  }, {
    key: "volume",
    value: function volume(percentage, nostorage, nonotice) {
      percentage = parseFloat(percentage);

      if (!isNaN(percentage)) {
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);
        this.bar.set('volume', percentage, 'width');
        var formatPercentage = "".concat((percentage * 100).toFixed(0), "%");
        this.template.volumeBarWrapWrap.dataset.balloon = formatPercentage;

        if (!nostorage) {
          this.user.set('volume', percentage);
        }

        if (!nonotice) {
          this.notice("".concat(this.tran('Volume'), " ").concat((percentage * 100).toFixed(0), "%"));
        }

        this.video.volume = percentage;

        if (this.video.muted) {
          this.video.muted = false;
        }

        this.switchVolumeIcon();
      }

      return this.video.volume;
    }
    /**
     * Toggle volume between muted and unmuted
     */

  }, {
    key: "toggleMute",
    value: function toggleMute(mute) {
      if (mute === undefined) {
        mute = !this.video.muted;
      }

      this.video.muted = mute;

      if (mute) {
        this.bar.set('volume', 0, 'width');
        this.template.volumeIcon.innerHTML = _icons__WEBPACK_IMPORTED_MODULE_5__["default"].volumeOff;
      } else {
        this.bar.set('volume', this.volume(), 'width');
        this.switchVolumeIcon();
      }
    }
    /**
     * Toggle between play and pause
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.video.paused) {
        this.play();
      } else {
        this.pause();
      }
    }
    /**
     * attach event
     */

  }, {
    key: "on",
    value: function on(name, callback) {
      this.events.on(name, callback);
    }
    /**
     * Switch to a new video
     *
     * @param {Object} video - new video info
     * @param {Object} danmaku - new danmaku info
     */

  }, {
    key: "switchVideo",
    value: function switchVideo(video, danmakuAPI) {
      this.pause();
      this.video.poster = video.pic ? video.pic : '';
      this.video.src = video.url;
      this.initMSE(this.video, video.type || 'auto');

      if (danmakuAPI) {
        this.template.danmakuLoading.style.display = 'block';
        this.bar.set('played', 0, 'width');
        this.bar.set('loaded', 0, 'width');
        this.template.ptime.innerHTML = '00:00';
        this.template.danmaku.innerHTML = '';

        if (this.danmaku) {
          this.danmaku.reload({
            id: danmakuAPI.id,
            address: danmakuAPI.api,
            token: danmakuAPI.token,
            maximum: danmakuAPI.maximum,
            addition: danmakuAPI.addition,
            user: danmakuAPI.user
          });
        }
      }
    }
  }, {
    key: "initMSE",
    value: function initMSE(video, type) {
      var _this3 = this;

      this.type = type;

      if (this.options.video.customType && this.options.video.customType[type]) {
        if (Object.prototype.toString.call(this.options.video.customType[type]) === '[object Function]') {
          this.options.video.customType[type](this.video, this);
        } else {
          console.error("Illegal customType: ".concat(type));
        }
      } else {
        if (this.type === 'auto') {
          if (/m3u8(#|\?|$)/i.exec(video.src)) {
            this.type = 'hls';
          } else if (/.flv(#|\?|$)/i.exec(video.src)) {
            this.type = 'flv';
          } else if (/.mpd(#|\?|$)/i.exec(video.src)) {
            this.type = 'dash';
          } else {
            this.type = 'normal';
          }
        }

        switch (this.type) {
          // https://github.com/video-dev/hls.js
          case 'hls':
            if (window.Hls) {
              if (window.Hls.isSupported()) {
                var options = this.options.pluginOptions.hls;
                var hls = new window.Hls(options);
                this.plugins.hls = hls;
                hls.loadSource(video.src);
                hls.attachMedia(video);
                this.events.on('destroy', function () {
                  hls.destroy();
                  delete _this3.plugins.hls;
                });
              } else {
                // this.notice('Error: Hls is not supported.');
                console.log('Error: Hls is not supported.');
              }
            } else {
              this.notice("Error: Can't find Hls.");
            }

            break;
          // https://github.com/Bilibili/flv.js

          case 'flv':
            if (window.flvjs) {
              if (window.flvjs.isSupported()) {
                var _options = Object.assign(this.options.pluginOptions.flvjs, {
                  type: 'flv',
                  url: video.src
                });

                var flvPlayer = window.flvjs.createPlayer(_options);
                this.plugins.flvjs = flvPlayer;
                flvPlayer.attachMediaElement(video);
                flvPlayer.load();
                this.events.on('destroy', function () {
                  flvPlayer.unload();
                  flvPlayer.detachMediaElement();
                  flvPlayer.destroy();
                  delete _this3.plugins.flvjs;
                });
              } else {
                this.notice('Error: flvjs is not supported.');
              }
            } else {
              this.notice("Error: Can't find flvjs.");
            }

            break;
          // https://github.com/Dash-Industry-Forum/dash.js

          case 'dash':
            if (window.dashjs) {
              var dashjsPlayer = window.dashjs.MediaPlayer().create().initialize(video, video.src, false);
              var _options2 = this.options.pluginOptions.dash;
              dashjsPlayer.updateSettings(_options2);
              this.plugins.dash = dashjsPlayer;
              this.events.on('destroy', function () {
                window.dashjs.MediaPlayer().reset();
                delete _this3.plugins.dash;
              });
            } else {
              this.notice("Error: Can't find dashjs.");
            }

            break;
          // https://github.com/webtorrent/webtorrent

          case 'webtorrent':
            if (window.WebTorrent) {
              if (window.WebTorrent.WEBRTC_SUPPORT) {
                this.container.classList.add('dplayer-loading');
                var _options3 = this.options.pluginOptions.webtorrent;
                var client = new window.WebTorrent(_options3);
                this.plugins.webtorrent = client;
                var torrentId = video.src;
                video.src = '';
                video.preload = 'metadata';
                video.addEventListener('durationchange', function () {
                  return _this3.container.classList.remove('dplayer-loading');
                }, {
                  once: true
                });
                client.add(torrentId, function (torrent) {
                  var file = torrent.files.find(function (file) {
                    return file.name.endsWith('.mp4');
                  });
                  file.renderTo(_this3.video, {
                    autoplay: _this3.options.autoplay
                  });
                });
                this.events.on('destroy', function () {
                  client.remove(torrentId);
                  client.destroy();
                  delete _this3.plugins.webtorrent;
                });
              } else {
                this.notice('Error: Webtorrent is not supported.');
              }
            } else {
              this.notice("Error: Can't find Webtorrent.");
            }

            break;
        }
      }
    }
  }, {
    key: "initVideo",
    value: function initVideo(video, type) {
      var _this4 = this;

      this.initMSE(video, type);
      /**
       * video events
       */
      // show video time: the metadata has loaded or changed

      this.on('durationchange', function () {
        // compatibility: Android browsers will output 1 or Infinity at first
        if (video.duration !== 1 && video.duration !== Infinity) {
          _this4.template.dtime.innerHTML = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].secondToTime(video.duration);
        }
      }); // show video loaded bar: to inform interested parties of progress downloading the media

      this.on('progress', function () {
        var percentage = video.buffered.length ? video.buffered.end(video.buffered.length - 1) / video.duration : 0;

        _this4.bar.set('loaded', percentage, 'width');
      }); // video download error: an error occurs

      this.on('error', function () {
        if (!_this4.video.error) {
          // Not a video load error, may be poster load failed, see #307
          return;
        }

        _this4.tran && _this4.notice && _this4.type !== 'webtorrent' && _this4.notice(_this4.tran('Video load failed'), -1);
      }); // video end

      this.on('ended', function () {
        _this4.bar.set('played', 1, 'width');

        if (!_this4.setting.loop) {
          _this4.pause();
        } else {
          _this4.seek(0);

          _this4.play();
        }

        if (_this4.danmaku) {
          _this4.danmaku.danIndex = 0;
        }
      });
      this.on('play', function () {
        if (_this4.paused) {
          _this4.play();
        }
      });
      this.on('pause', function () {
        if (!_this4.paused) {
          _this4.pause();
        }
      });
      this.on('timeupdate', function () {
        _this4.bar.set('played', _this4.video.currentTime / _this4.video.duration, 'width');

        var currentTime = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].secondToTime(_this4.video.currentTime);

        if (_this4.template.ptime.innerHTML !== currentTime) {
          _this4.template.ptime.innerHTML = currentTime;
        }
      });

      var _loop = function _loop(i) {
        video.addEventListener(_this4.events.videoEvents[i], function () {
          _this4.events.trigger(_this4.events.videoEvents[i]);
        });
      };

      for (var i = 0; i < this.events.videoEvents.length; i++) {
        _loop(i);
      }

      this.volume(this.user.get('volume'), true, true);

      if (this.options.subtitle) {
        this.subtitle = new _subtitle__WEBPACK_IMPORTED_MODULE_10__["default"](this.template.subtitle, this.video, this.options.subtitle, this.events);

        if (!this.user.get('subtitle')) {
          this.subtitle.hide();
        }
      }
    }
  }, {
    key: "switchQuality",
    value: function switchQuality(index) {
      var _this5 = this;

      index = typeof index === 'string' ? parseInt(index) : index;

      if (this.qualityIndex === index || this.switchingQuality) {
        return;
      } else {
        this.qualityIndex = index;
      }

      this.switchingQuality = true;
      this.quality = this.options.video.quality[index];
      this.template.qualityButton.innerHTML = this.quality.name;
      var paused = this.video.paused;
      this.video.pause();
      var videoHTML = _template_video_art__WEBPACK_IMPORTED_MODULE_20___default()({
        current: false,
        pic: null,
        screenshot: this.options.screenshot,
        preload: 'auto',
        url: this.quality.url,
        subtitle: this.options.subtitle
      });
      var videoEle = new DOMParser().parseFromString(videoHTML, 'text/html').body.firstChild;
      this.template.videoWrap.insertBefore(videoEle, this.template.videoWrap.getElementsByTagName('div')[0]);
      this.prevVideo = this.video;
      this.video = videoEle;
      this.initVideo(this.video, this.quality.type || this.options.video.type);
      this.seek(this.prevVideo.currentTime);
      this.notice("".concat(this.tran('Switching to'), " ").concat(this.quality.name, " ").concat(this.tran('quality')), -1);
      this.events.trigger('quality_start', this.quality);
      this.on('canplay', function () {
        if (_this5.prevVideo) {
          if (_this5.video.currentTime !== _this5.prevVideo.currentTime) {
            _this5.seek(_this5.prevVideo.currentTime);

            return;
          }

          _this5.template.videoWrap.removeChild(_this5.prevVideo);

          _this5.video.classList.add('dplayer-video-current');

          if (!paused) {
            _this5.video.play();
          }

          _this5.prevVideo = null;

          _this5.notice("".concat(_this5.tran('Switched to'), " ").concat(_this5.quality.name, " ").concat(_this5.tran('quality')));

          _this5.switchingQuality = false;

          _this5.events.trigger('quality_end');
        }
      });
    }
  }, {
    key: "notice",
    value: function notice(text) {
      var _this6 = this;

      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
      var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.8;
      this.template.notice.innerHTML = text;
      this.template.notice.style.opacity = opacity;

      if (this.noticeTime) {
        clearTimeout(this.noticeTime);
      }

      this.events.trigger('notice_show', text);

      if (time > 0) {
        this.noticeTime = setTimeout(function () {
          _this6.template.notice.style.opacity = 0;

          _this6.events.trigger('notice_hide');
        }, time);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.danmaku) {
        this.danmaku.resize();
      }

      if (this.controller.thumbnails) {
        this.controller.thumbnails.resize(160, this.video.videoHeight / this.video.videoWidth * 160, this.template.barWrap.offsetWidth);
      }

      this.events.trigger('resize');
    }
  }, {
    key: "speed",
    value: function speed(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      instances.splice(instances.indexOf(this), 1);
      this.pause();
      this.controller.destroy();
      this.timer.destroy();
      this.video.src = '';
      this.container.innerHTML = '';
      this.events.trigger('destroy');
    }
  }], [{
    key: "version",
    get: function get() {
      /* global DPLAYER_VERSION */
      return "1.25.0";
    }
  }]);

  return DPlayer;
}();

/* harmony default export */ __webpack_exports__["default"] = (DPlayer);

/***/ }),

/***/ "./src/js/setting.js":
/*!***************************!*\
  !*** ./src/js/setting.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Setting = /*#__PURE__*/function () {
  function Setting(player) {
    var _this = this;

    _classCallCheck(this, Setting);

    this.player = player;
    this.player.template.mask.addEventListener('click', function () {
      _this.hide();
    });
    this.player.template.settingButton.addEventListener('click', function () {
      _this.show();
    }); // loop

    this.loop = this.player.options.loop;
    this.player.template.loopToggle.checked = this.loop;
    this.player.template.loop.addEventListener('click', function () {
      _this.player.template.loopToggle.checked = !_this.player.template.loopToggle.checked;

      if (_this.player.template.loopToggle.checked) {
        _this.loop = true;
      } else {
        _this.loop = false;
      }

      _this.hide();
    }); // show danmaku

    this.showDanmaku = this.player.user.get('danmaku');

    if (!this.showDanmaku) {
      this.player.danmaku && this.player.danmaku.hide();
    }

    this.player.template.showDanmakuToggle.checked = this.showDanmaku;
    this.player.template.showDanmaku.addEventListener('click', function () {
      _this.player.template.showDanmakuToggle.checked = !_this.player.template.showDanmakuToggle.checked;

      if (_this.player.template.showDanmakuToggle.checked) {
        _this.showDanmaku = true;

        _this.player.danmaku.show();
      } else {
        _this.showDanmaku = false;

        _this.player.danmaku.hide();
      }

      _this.player.user.set('danmaku', _this.showDanmaku ? 1 : 0);

      _this.hide();
    }); // unlimit danmaku

    this.unlimitDanmaku = this.player.user.get('unlimited');
    this.player.template.unlimitDanmakuToggle.checked = this.unlimitDanmaku;
    this.player.template.unlimitDanmaku.addEventListener('click', function () {
      _this.player.template.unlimitDanmakuToggle.checked = !_this.player.template.unlimitDanmakuToggle.checked;

      if (_this.player.template.unlimitDanmakuToggle.checked) {
        _this.unlimitDanmaku = true;

        _this.player.danmaku.unlimit(true);
      } else {
        _this.unlimitDanmaku = false;

        _this.player.danmaku.unlimit(false);
      }

      _this.player.user.set('unlimited', _this.unlimitDanmaku ? 1 : 0);

      _this.hide();
    }); // speed

    this.player.template.speed.addEventListener('click', function () {
      _this.player.template.settingBox.classList.add('dplayer-setting-box-narrow');

      _this.player.template.settingBox.classList.add('dplayer-setting-box-speed');
    });

    var _loop = function _loop(i) {
      _this.player.template.speedItem[i].addEventListener('click', function () {
        _this.player.speed(_this.player.template.speedItem[i].dataset.speed);

        _this.hide();
      });
    };

    for (var i = 0; i < this.player.template.speedItem.length; i++) {
      _loop(i);
    } // danmaku opacity


    if (this.player.danmaku) {
      var dWidth = 130;
      this.player.on('danmaku_opacity', function (percentage) {
        _this.player.bar.set('danmaku', percentage, 'width');

        _this.player.user.set('opacity', percentage);
      });
      this.player.danmaku.opacity(this.player.user.get('opacity'));

      var danmakuMove = function danmakuMove(event) {
        var e = event || window.event;
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this.player.template.danmakuOpacityBarWrap)) / dWidth;
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);

        _this.player.danmaku.opacity(percentage);
      };

      var danmakuUp = function danmakuUp() {
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, danmakuUp);
        document.removeEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, danmakuMove);

        _this.player.template.danmakuOpacityBox.classList.remove('dplayer-setting-danmaku-active');
      };

      this.player.template.danmakuOpacityBarWrapWrap.addEventListener('click', function (event) {
        var e = event || window.event;
        var percentage = ((e.clientX || e.changedTouches[0].clientX) - _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingClientRectViewLeft(_this.player.template.danmakuOpacityBarWrap)) / dWidth;
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);

        _this.player.danmaku.opacity(percentage);
      });
      this.player.template.danmakuOpacityBarWrapWrap.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragStart, function () {
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragMove, danmakuMove);
        document.addEventListener(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].nameMap.dragEnd, danmakuUp);

        _this.player.template.danmakuOpacityBox.classList.add('dplayer-setting-danmaku-active');
      });
    }
  }

  _createClass(Setting, [{
    key: "hide",
    value: function hide() {
      var _this2 = this;

      this.player.template.settingBox.classList.remove('dplayer-setting-box-open');
      this.player.template.mask.classList.remove('dplayer-mask-show');
      setTimeout(function () {
        _this2.player.template.settingBox.classList.remove('dplayer-setting-box-narrow');

        _this2.player.template.settingBox.classList.remove('dplayer-setting-box-speed');
      }, 300);
      this.player.controller.disableAutoHide = false;
    }
  }, {
    key: "show",
    value: function show() {
      this.player.template.settingBox.classList.add('dplayer-setting-box-open');
      this.player.template.mask.classList.add('dplayer-mask-show');
      this.player.controller.disableAutoHide = true;
    }
  }]);

  return Setting;
}();

/* harmony default export */ __webpack_exports__["default"] = (Setting);

/***/ }),

/***/ "./src/js/subtitle.js":
/*!****************************!*\
  !*** ./src/js/subtitle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Subtitle = /*#__PURE__*/function () {
  function Subtitle(container, video, options, events) {
    _classCallCheck(this, Subtitle);

    this.container = container;
    this.video = video;
    this.options = options;
    this.events = events;
    this.init();
  }

  _createClass(Subtitle, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.container.style.fontSize = this.options.fontSize;
      this.container.style.bottom = this.options.bottom;
      this.container.style.color = this.options.color;

      if (this.video.textTracks && this.video.textTracks[0]) {
        var track = this.video.textTracks[0];

        track.oncuechange = function () {
          var cue = track.activeCues[0];
          _this.container.innerHTML = '';

          if (cue) {
            var template = document.createElement('div');
            template.appendChild(cue.getCueAsHTML());
            var trackHtml = template.innerHTML.split(/\r?\n/).map(function (item) {
              return "<p>".concat(item, "</p>");
            }).join('');
            _this.container.innerHTML = trackHtml;
          }

          _this.events.trigger('subtitle_change');
        };
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.container.classList.remove('dplayer-subtitle-hide');
      this.events.trigger('subtitle_show');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.container.classList.add('dplayer-subtitle-hide');
      this.events.trigger('subtitle_hide');
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.container.classList.contains('dplayer-subtitle-hide')) {
        this.show();
      } else {
        this.hide();
      }
    }
  }]);

  return Subtitle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Subtitle);

/***/ }),

/***/ "./src/js/template.js":
/*!****************************!*\
  !*** ./src/js/template.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./src/js/icons.js");
/* harmony import */ var _template_player_art__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/player.art */ "./src/template/player.art");
/* harmony import */ var _template_player_art__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_player_art__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Template = /*#__PURE__*/function () {
  function Template(options) {
    _classCallCheck(this, Template);

    this.container = options.container;
    this.options = options.options;
    this.index = options.index;
    this.tran = options.tran;
    this.init();
  }

  _createClass(Template, [{
    key: "init",
    value: function init() {
      this.container.innerHTML = _template_player_art__WEBPACK_IMPORTED_MODULE_1___default()({
        options: this.options,
        index: this.index,
        tran: this.tran,
        icons: _icons__WEBPACK_IMPORTED_MODULE_0__["default"],
        mobile: _utils__WEBPACK_IMPORTED_MODULE_2__["default"].isMobile,
        video: {
          current: true,
          pic: this.options.video.pic,
          screenshot: this.options.screenshot,
          preload: this.options.preload,
          url: this.options.video.url,
          subtitle: this.options.subtitle
        }
      });
      this.volumeBar = this.container.querySelector('.dplayer-volume-bar-inner');
      this.volumeBarWrap = this.container.querySelector('.dplayer-volume-bar');
      this.volumeBarWrapWrap = this.container.querySelector('.dplayer-volume-bar-wrap');
      this.volumeButton = this.container.querySelector('.dplayer-volume');
      this.volumeButtonIcon = this.container.querySelector('.dplayer-volume-icon');
      this.volumeIcon = this.container.querySelector('.dplayer-volume-icon .dplayer-icon-content');
      this.playedBar = this.container.querySelector('.dplayer-played');
      this.loadedBar = this.container.querySelector('.dplayer-loaded');
      this.playedBarWrap = this.container.querySelector('.dplayer-bar-wrap');
      this.playedBarTime = this.container.querySelector('.dplayer-bar-time');
      this.danmaku = this.container.querySelector('.dplayer-danmaku');
      this.danmakuLoading = this.container.querySelector('.dplayer-danloading');
      this.video = this.container.querySelector('.dplayer-video-current');
      this.bezel = this.container.querySelector('.dplayer-bezel-icon');
      this.playButton = this.container.querySelector('.dplayer-play-icon');
      this.mobilePlayButton = this.container.querySelector('.dplayer-mobile-play');
      this.videoWrap = this.container.querySelector('.dplayer-video-wrap');
      this.controllerMask = this.container.querySelector('.dplayer-controller-mask');
      this.ptime = this.container.querySelector('.dplayer-ptime');
      this.settingButton = this.container.querySelector('.dplayer-setting-icon');
      this.settingBox = this.container.querySelector('.dplayer-setting-box');
      this.mask = this.container.querySelector('.dplayer-mask');
      this.loop = this.container.querySelector('.dplayer-setting-loop');
      this.loopToggle = this.container.querySelector('.dplayer-setting-loop .dplayer-toggle-setting-input');
      this.showDanmaku = this.container.querySelector('.dplayer-setting-showdan');
      this.showDanmakuToggle = this.container.querySelector('.dplayer-showdan-setting-input');
      this.unlimitDanmaku = this.container.querySelector('.dplayer-setting-danunlimit');
      this.unlimitDanmakuToggle = this.container.querySelector('.dplayer-danunlimit-setting-input');
      this.speed = this.container.querySelector('.dplayer-setting-speed');
      this.speedItem = this.container.querySelectorAll('.dplayer-setting-speed-item');
      this.danmakuOpacityBar = this.container.querySelector('.dplayer-danmaku-bar-inner');
      this.danmakuOpacityBarWrap = this.container.querySelector('.dplayer-danmaku-bar');
      this.danmakuOpacityBarWrapWrap = this.container.querySelector('.dplayer-danmaku-bar-wrap');
      this.danmakuOpacityBox = this.container.querySelector('.dplayer-setting-danmaku');
      this.dtime = this.container.querySelector('.dplayer-dtime');
      this.controller = this.container.querySelector('.dplayer-controller');
      this.commentInput = this.container.querySelector('.dplayer-comment-input');
      this.commentButton = this.container.querySelector('.dplayer-comment-icon');
      this.commentSettingBox = this.container.querySelector('.dplayer-comment-setting-box');
      this.commentSettingButton = this.container.querySelector('.dplayer-comment-setting-icon');
      this.commentSettingFill = this.container.querySelector('.dplayer-comment-setting-icon path');
      this.commentSendButton = this.container.querySelector('.dplayer-send-icon');
      this.commentSendFill = this.container.querySelector('.dplayer-send-icon path');
      this.commentColorSettingBox = this.container.querySelector('.dplayer-comment-setting-color');
      this.browserFullButton = this.container.querySelector('.dplayer-full-icon');
      this.webFullButton = this.container.querySelector('.dplayer-full-in-icon');
      this.menu = this.container.querySelector('.dplayer-menu');
      this.menuItem = this.container.querySelectorAll('.dplayer-menu-item');
      this.qualityList = this.container.querySelector('.dplayer-quality-list');
      this.camareButton = this.container.querySelector('.dplayer-camera-icon');
      this.subtitleButton = this.container.querySelector('.dplayer-subtitle-icon');
      this.subtitleButtonInner = this.container.querySelector('.dplayer-subtitle-icon .dplayer-icon-content');
      this.subtitle = this.container.querySelector('.dplayer-subtitle');
      this.qualityButton = this.container.querySelector('.dplayer-quality-icon');
      this.barPreview = this.container.querySelector('.dplayer-bar-preview');
      this.barWrap = this.container.querySelector('.dplayer-bar-wrap');
      this.notice = this.container.querySelector('.dplayer-notice');
      this.infoPanel = this.container.querySelector('.dplayer-info-panel');
      this.infoPanelClose = this.container.querySelector('.dplayer-info-panel-close');
      this.infoVersion = this.container.querySelector('.dplayer-info-panel-item-version .dplayer-info-panel-item-data');
      this.infoFPS = this.container.querySelector('.dplayer-info-panel-item-fps .dplayer-info-panel-item-data');
      this.infoType = this.container.querySelector('.dplayer-info-panel-item-type .dplayer-info-panel-item-data');
      this.infoUrl = this.container.querySelector('.dplayer-info-panel-item-url .dplayer-info-panel-item-data');
      this.infoResolution = this.container.querySelector('.dplayer-info-panel-item-resolution .dplayer-info-panel-item-data');
      this.infoDuration = this.container.querySelector('.dplayer-info-panel-item-duration .dplayer-info-panel-item-data');
      this.infoDanmakuId = this.container.querySelector('.dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data');
      this.infoDanmakuApi = this.container.querySelector('.dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data');
      this.infoDanmakuAmount = this.container.querySelector('.dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data');
    }
  }]);

  return Template;
}();

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./src/js/thumbnails.js":
/*!******************************!*\
  !*** ./src/js/thumbnails.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Thumbnails = /*#__PURE__*/function () {
  function Thumbnails(options) {
    _classCallCheck(this, Thumbnails);

    this.container = options.container;
    this.barWidth = options.barWidth;
    this.container.style.backgroundImage = "url('".concat(options.url, "')");
    this.events = options.events;
  }

  _createClass(Thumbnails, [{
    key: "resize",
    value: function resize(width, height, barWrapWidth) {
      this.container.style.width = "".concat(width, "px");
      this.container.style.height = "".concat(height, "px");
      this.container.style.top = "".concat(-height + 2, "px");
      this.barWidth = barWrapWidth;
    }
  }, {
    key: "show",
    value: function show() {
      this.container.style.display = 'block';
      this.events && this.events.trigger('thumbnails_show');
    }
  }, {
    key: "move",
    value: function move(position) {
      this.container.style.backgroundPosition = "-".concat((Math.ceil(position / this.barWidth * 100) - 1) * 160, "px 0");
      this.container.style.left = "".concat(Math.min(Math.max(position - this.container.offsetWidth / 2, -10), this.barWidth - 150), "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      this.container.style.display = 'none';
      this.events && this.events.trigger('thumbnails_hide');
    }
  }]);

  return Thumbnails;
}();

/* harmony default export */ __webpack_exports__["default"] = (Thumbnails);

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer(player) {
    _classCallCheck(this, Timer);

    this.player = player;

    window.requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    }();

    this.types = ['loading', 'info', 'fps'];
    this.init();
  }

  _createClass(Timer, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.types.map(function (item) {
        if (item !== 'fps') {
          _this["init".concat(item, "Checker")]();
        }

        return item;
      });
    }
  }, {
    key: "initloadingChecker",
    value: function initloadingChecker() {
      var _this2 = this;

      var lastPlayPos = 0;
      var currentPlayPos = 0;
      var bufferingDetected = false;
      this.loadingChecker = setInterval(function () {
        if (_this2.enableloadingChecker) {
          // whether the video is buffering
          currentPlayPos = _this2.player.video.currentTime;

          if (!bufferingDetected && currentPlayPos === lastPlayPos && !_this2.player.video.paused) {
            _this2.player.container.classList.add('dplayer-loading');

            bufferingDetected = true;
          }

          if (bufferingDetected && currentPlayPos > lastPlayPos && !_this2.player.video.paused) {
            _this2.player.container.classList.remove('dplayer-loading');

            bufferingDetected = false;
          }

          lastPlayPos = currentPlayPos;
        }
      }, 100);
    }
  }, {
    key: "initfpsChecker",
    value: function initfpsChecker() {
      var _this3 = this;

      window.requestAnimationFrame(function () {
        if (_this3.enablefpsChecker) {
          _this3.initfpsChecker();

          if (!_this3.fpsStart) {
            _this3.fpsStart = new Date();
            _this3.fpsIndex = 0;
          } else {
            _this3.fpsIndex++;
            var fpsCurrent = new Date();

            if (fpsCurrent - _this3.fpsStart > 1000) {
              _this3.player.infoPanel.fps(_this3.fpsIndex / (fpsCurrent - _this3.fpsStart) * 1000);

              _this3.fpsStart = new Date();
              _this3.fpsIndex = 0;
            }
          }
        } else {
          _this3.fpsStart = 0;
          _this3.fpsIndex = 0;
        }
      });
    }
  }, {
    key: "initinfoChecker",
    value: function initinfoChecker() {
      var _this4 = this;

      this.infoChecker = setInterval(function () {
        if (_this4.enableinfoChecker) {
          _this4.player.infoPanel.update();
        }
      }, 1000);
    }
  }, {
    key: "enable",
    value: function enable(type) {
      this["enable".concat(type, "Checker")] = true;

      if (type === 'fps') {
        this.initfpsChecker();
      }
    }
  }, {
    key: "disable",
    value: function disable(type) {
      this["enable".concat(type, "Checker")] = false;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      this.types.map(function (item) {
        _this5["enable".concat(item, "Checker")] = false;
        _this5["".concat(item, "Checker")] && clearInterval(_this5["".concat(item, "Checker")]);
        return item;
      });
    }
  }]);

  return Timer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./src/js/user.js":
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var User = /*#__PURE__*/function () {
  function User(player) {
    _classCallCheck(this, User);

    this.storageName = {
      opacity: 'dplayer-danmaku-opacity',
      volume: 'dplayer-volume',
      unlimited: 'dplayer-danmaku-unlimited',
      danmaku: 'dplayer-danmaku-show',
      subtitle: 'dplayer-subtitle-show'
    };
    this["default"] = {
      opacity: 0.7,
      volume: player.options.hasOwnProperty('volume') ? player.options.volume : 0.7,
      unlimited: (player.options.danmaku && player.options.danmaku.unlimited ? 1 : 0) || 0,
      danmaku: 1,
      subtitle: 1
    };
    this.data = {};
    this.init();
  }

  _createClass(User, [{
    key: "init",
    value: function init() {
      for (var item in this.storageName) {
        var name = this.storageName[item];
        this.data[item] = parseFloat(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].storage.get(name) || this["default"][item]);
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.data[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].storage.set(this.storageName[key], value);
    }
  }]);

  return User;
}();

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMobile = false; // /mobile/i.test(window.navigator.userAgent);

var utils = {
  /**
   * Parse second to time string
   *
   * @param {Number} second
   * @return {String} 00:00 or 00:00:00
   */
  secondToTime: function secondToTime(second) {
    second = second || 0;

    if (second === 0 || second === Infinity || second.toString() === 'NaN') {
      return '00:00';
    }

    var add0 = function add0(num) {
      return num < 10 ? '0' + num : '' + num;
    };

    var hour = Math.floor(second / 3600);
    var min = Math.floor((second - hour * 3600) / 60);
    var sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
  },

  /**
   * control play progress
   */
  // get element's view position
  getElementViewLeft: function getElementViewLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    var elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
      while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
      }
    } else {
      while (current !== null && current !== element) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
      }
    }

    return actualLeft - elementScrollLeft;
  },

  /**
  * optimize control play progress
   * optimize get element's view position,for float dialog video player
  * getBoundingClientRect 在 IE8 及以下返回的值缺失 width、height 值
  * getBoundingClientRect 在 Firefox 11 及以下返回的值会把 transform 的值也包含进去
  * getBoundingClientRect 在 Opera 10.5 及以下返回的值缺失 width、height 值
  */
  getBoundingClientRectViewLeft: function getBoundingClientRectViewLeft(element) {
    var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    if (element.getBoundingClientRect) {
      if (typeof this.getBoundingClientRectViewLeft.offset !== 'number') {
        var temp = document.createElement('div');
        temp.style.cssText = 'position:absolute;top:0;left:0;';
        document.body.appendChild(temp);
        this.getBoundingClientRectViewLeft.offset = -temp.getBoundingClientRect().top - scrollTop;
        document.body.removeChild(temp);
        temp = null;
      }

      var rect = element.getBoundingClientRect();
      var offset = this.getBoundingClientRectViewLeft.offset;
      return rect.left + offset;
    } else {
      // not support getBoundingClientRect
      return this.getElementViewLeft(element);
    }
  },
  getScrollPosition: function getScrollPosition() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  },
  setScrollPosition: function setScrollPosition(_ref) {
    var _ref$left = _ref.left,
        left = _ref$left === void 0 ? 0 : _ref$left,
        _ref$top = _ref.top,
        top = _ref$top === void 0 ? 0 : _ref$top;

    if (this.isFirefox) {
      document.documentElement.scrollLeft = left;
      document.documentElement.scrollTop = top;
    } else {
      window.scrollTo(left, top);
    }
  },
  isMobile: isMobile,
  isFirefox: /firefox/i.test(window.navigator.userAgent),
  isChrome: /chrome/i.test(window.navigator.userAgent),
  storage: {
    set: function set(key, value) {
      localStorage.setItem(key, value);
    },
    get: function get(key) {
      return localStorage.getItem(key);
    }
  },
  nameMap: {
    dragStart: /mobile/i.test(window.navigator.userAgent) ? 'touchstart' : 'mousedown',
    dragMove: /mobile/i.test(window.navigator.userAgent) ? 'touchmove' : 'mousemove',
    dragEnd: /mobile/i.test(window.navigator.userAgent) ? 'touchend' : 'mouseup'
  },
  color2Number: function color2Number(color) {
    if (color[0] === '#') {
      color = color.substr(1);
    }

    if (color.length === 3) {
      color = "".concat(color[0]).concat(color[0]).concat(color[1]).concat(color[1]).concat(color[2]).concat(color[2]);
    }

    return parseInt(color, 16) + 0x000000 & 0xffffff;
  },
  number2Color: function number2Color(number) {
    return '#' + ('00000' + number.toString(16)).slice(-6);
  },
  number2Type: function number2Type(number) {
    switch (number) {
      case 0:
        return 'right';

      case 1:
        return 'top';

      case 2:
        return 'bottom';

      default:
        return 'right';
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ }),

/***/ "./src/template/player.art":
/*!*********************************!*\
  !*** ./src/template/player.art ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$blocks = arguments[1] || {}, include = function (content) {
            $$out += content;
            return $$out;
        }, video = $data.video, options = $data.options, $escape = $imports.$escape, tran = $data.tran, icons = $data.icons, index = $data.index, $each = $imports.$each, $value = $data.$value, $index = $data.$index;
    $$out += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ';
    include(__webpack_require__(/*! ./video.art */ "./src/template/video.art")(video));
    $$out += '\n    ';
    if (options.logo) {
        $$out += '\n    <div class="dplayer-logo">\n        <img src="';
        $$out += $escape(options.logo);
        $$out += '">\n    </div>\n    ';
    }
    $$out += '\n    <div class="dplayer-danmaku"';
    if (options.danmaku && options.danmaku.bottm) {
        $$out += ' style="margin-bottom:';
        $$out += $escape(options.danmaku.bottm);
        $$out += '"';
    }
    $$out += '>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ';
    if (options.danmaku) {
        $$out += '\n        <span class="dplayer-danloading">';
        $$out += $escape(tran('Danmaku is loading'));
        $$out += '</span>\n        ';
    }
    $$out += '\n        <span class="diplayer-loading-icon">';
    $$out += icons.loading;
    $$out += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="';
    $$out += $escape(tran('Setting'));
    $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
    $$out += icons.pallette;
    $$out += '</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">';
    $$out += $escape(tran('Set danmaku color'));
    $$out += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-';
    $$out += $escape(index);
    $$out += '" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">';
    $$out += $escape(tran('Set danmaku type'));
    $$out += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-';
    $$out += $escape(index);
    $$out += '" value="1">\n                    <span>';
    $$out += $escape(tran('Top'));
    $$out += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-';
    $$out += $escape(index);
    $$out += '" value="0" checked>\n                    <span>';
    $$out += $escape(tran('Rolling'));
    $$out += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-';
    $$out += $escape(index);
    $$out += '" value="2">\n                    <span>';
    $$out += $escape(tran('Bottom'));
    $$out += '</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="';
    $$out += $escape(tran('Input danmaku, hit Enter'));
    $$out += '" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="';
    $$out += $escape(tran('Send'));
    $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
    $$out += icons.send;
    $$out += '</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">';
    $$out += icons.play;
    $$out += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">';
    $$out += icons.volumeDown;
    $$out += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ';
    $$out += $escape(options.theme);
    $$out += ';">\n                        <span class="dplayer-thumb" style="background: ';
    $$out += $escape(options.theme);
    $$out += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ';
    if (options.live) {
        $$out += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ';
        $$out += $escape(options.theme);
        $$out += ';"></span>';
        $$out += $escape(tran('Live'));
        $$out += '</span>\n        ';
    }
    $$out += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ';
    if (options.video.quality) {
        $$out += '\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">';
        $$out += $escape(options.video.quality[options.video.defaultQuality].name);
        $$out += '</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ';
        $each(options.video.quality, function ($value, $index) {
            $$out += '\n                    <div class="dplayer-quality-item" data-index="';
            $$out += $escape($index);
            $$out += '">';
            $$out += $escape($value.name);
            $$out += '</div>\n                ';
        });
        $$out += '\n                </div>\n            </div>\n        </div>\n        ';
    }
    $$out += '\n        ';
    if (options.screenshot) {
        $$out += '\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="';
        $$out += $escape(tran('Screenshot'));
        $$out += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">';
        $$out += icons.camera;
        $$out += '</span>\n        </div>\n        ';
    }
    $$out += '\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="';
    $$out += $escape(tran('Send danmaku'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.comment;
    $$out += '</span>\n            </button>\n        </div>\n        ';
    if (options.subtitle) {
        $$out += '\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="';
        $$out += $escape(tran('Hide subtitle'));
        $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
        $$out += icons.subtitle;
        $$out += '</span>\n            </button>\n        </div>\n        ';
    }
    $$out += '\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="';
    $$out += $escape(tran('Setting'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.setting;
    $$out += '</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('Speed'));
    $$out += '</span>\n                        <div class="dplayer-toggle">';
    $$out += icons.right;
    $$out += '</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('Loop'));
    $$out += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('Show danmaku'));
    $$out += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('Unlimited danmaku'));
    $$out += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('Opacity for danmaku'));
    $$out += '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    <div class="dplayer-setting-speed-item" data-speed="0.5">\n                        <span class="dplayer-label">0.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="0.75">\n                        <span class="dplayer-label">0.75</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1">\n                        <span class="dplayer-label">';
    $$out += $escape(tran('Normal'));
    $$out += '</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.25">\n                        <span class="dplayer-label">1.25</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.5">\n                        <span class="dplayer-label">1.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="2">\n                        <span class="dplayer-label">2</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="';
    $$out += $escape(tran('Web full screen'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.fullWeb;
    $$out += '</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="';
    $$out += $escape(tran('Full screen'));
    $$out += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">';
    $$out += icons.full;
    $$out += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ';
    $$out += $escape(options.theme);
    $$out += '">\n                <span class="dplayer-thumb" style="background: ';
    $$out += $escape(options.theme);
    $$out += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ';
    if (options.danmaku) {
        $$out += '\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danamku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danamku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danamku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ';
    }
    $$out += '\n</div>\n<div class="dplayer-menu">\n    ';
    $each(options.contextmenu, function ($value, $index) {
        $$out += '\n        <div class="dplayer-menu-item">\n            <a';
        if ($value.link) {
            $$out += ' target="_blank"';
        }
        $$out += ' href="';
        $$out += $escape($value.link || 'javascript:void(0);');
        $$out += '">';
        $$out += $escape(tran($value.text));
        $$out += '</a>\n        </div>\n    ';
    });
    $$out += '\n</div>\n<div class="dplayer-notice"></div>\n<button class="dplayer-mobile-play">\n    ';
    $$out += icons.play;
    $$out += '\n</button>';
    return $$out;
};

/***/ }),

/***/ "./src/template/video.art":
/*!********************************!*\
  !*** ./src/template/video.art ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', enableSubtitle = $data.enableSubtitle, subtitle = $data.subtitle, current = $data.current, pic = $data.pic, $escape = $imports.$escape, screenshot = $data.screenshot, preload = $data.preload, url = $data.url;
    var enableSubtitle = subtitle && subtitle.type === 'webvtt';
    $$out += '\n<video\n    class="dplayer-video ';
    if (current) {
        $$out += 'dplayer-video-current';
    }
    $$out += '"\n    webkit-playsinline\n    playsinline\n    ';
    if (pic) {
        $$out += 'poster="';
        $$out += $escape(pic);
        $$out += '"';
    }
    $$out += '\n    ';
    if (screenshot || enableSubtitle) {
        $$out += 'crossorigin="anonymous"';
    }
    $$out += '\n    ';
    if (preload) {
        $$out += 'preload="';
        $$out += $escape(preload);
        $$out += '"';
    }
    $$out += '\n    ';
    if (url) {
        $$out += 'src="';
        $$out += $escape(url);
        $$out += '"';
    }
    $$out += '\n    >\n    ';
    if (enableSubtitle) {
        $$out += '\n    <track kind="metadata" default src="';
        $$out += $escape(subtitle.url);
        $$out += '"></track>\n    ';
    }
    $$out += '\n</video>';
    return $$out;
};

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=DPlayer.js.map