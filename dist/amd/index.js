define(["exports"], function (exports) {
  "use strict";

  var _slice = Array.prototype.slice;
  var _toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  var ConsoleAppender = (function () {
    var ConsoleAppender = function ConsoleAppender() {};

    ConsoleAppender.prototype.debug = function (logger, message) {
      var rest = _slice.call(arguments, 2);

      console.debug.apply(console, ["DEBUG [" + logger.id + "] " + message].concat(_toArray(rest)));
    };

    ConsoleAppender.prototype.info = function (logger, message) {
      var rest = _slice.call(arguments, 2);

      console.info.apply(console, ["INFO [" + logger.id + "] " + message].concat(_toArray(rest)));
    };

    ConsoleAppender.prototype.warn = function (logger, message) {
      var rest = _slice.call(arguments, 2);

      console.warn.apply(console, ["WARN [" + logger.id + "] " + message].concat(_toArray(rest)));
    };

    ConsoleAppender.prototype.error = function (logger, message) {
      var rest = _slice.call(arguments, 2);

      console.error.apply(console, ["ERROR [" + logger.id + "] " + message].concat(_toArray(rest)));
    };

    return ConsoleAppender;
  })();

  exports.ConsoleAppender = ConsoleAppender;
});