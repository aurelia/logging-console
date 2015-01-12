"use strict";

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var ConsoleAppender = (function () {
  var ConsoleAppender = function ConsoleAppender() {};

  _prototypeProperties(ConsoleAppender, null, {
    debug: {
      value: function (logger, message) {
        var rest = [];

        for (var _key = 2; _key < arguments.length; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        console.debug.apply(console, ["DEBUG [" + logger.id + "] " + message].concat(_toArray(rest)));
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    info: {
      value: function (logger, message) {
        var rest = [];

        for (var _key2 = 2; _key2 < arguments.length; _key2++) {
          rest[_key2 - 2] = arguments[_key2];
        }

        console.info.apply(console, ["INFO [" + logger.id + "] " + message].concat(_toArray(rest)));
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    warn: {
      value: function (logger, message) {
        var rest = [];

        for (var _key3 = 2; _key3 < arguments.length; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }

        console.warn.apply(console, ["WARN [" + logger.id + "] " + message].concat(_toArray(rest)));
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    error: {
      value: function (logger, message) {
        var rest = [];

        for (var _key4 = 2; _key4 < arguments.length; _key4++) {
          rest[_key4 - 2] = arguments[_key4];
        }

        console.error.apply(console, ["ERROR [" + logger.id + "] " + message].concat(_toArray(rest)));
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return ConsoleAppender;
})();

exports.ConsoleAppender = ConsoleAppender;