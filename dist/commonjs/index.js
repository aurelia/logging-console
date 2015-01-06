"use strict";

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var ConsoleAppender = function ConsoleAppender() {};

ConsoleAppender.prototype.debug = function (logger, message) {
  var rest = [];

  for (var _key = 2; _key < arguments.length; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  console.debug.apply(console, ["DEBUG [" + logger.id + "] " + message].concat(_toArray(rest)));
};

ConsoleAppender.prototype.info = function (logger, message) {
  var rest = [];

  for (var _key2 = 2; _key2 < arguments.length; _key2++) {
    rest[_key2 - 2] = arguments[_key2];
  }

  console.info.apply(console, ["INFO [" + logger.id + "] " + message].concat(_toArray(rest)));
};

ConsoleAppender.prototype.warn = function (logger, message) {
  var rest = [];

  for (var _key3 = 2; _key3 < arguments.length; _key3++) {
    rest[_key3 - 2] = arguments[_key3];
  }

  console.warn.apply(console, ["WARN [" + logger.id + "] " + message].concat(_toArray(rest)));
};

ConsoleAppender.prototype.error = function (logger, message) {
  var rest = [];

  for (var _key4 = 2; _key4 < arguments.length; _key4++) {
    rest[_key4 - 2] = arguments[_key4];
  }

  console.error.apply(console, ["ERROR [" + logger.id + "] " + message].concat(_toArray(rest)));
};

exports.ConsoleAppender = ConsoleAppender;