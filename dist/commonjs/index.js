'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaLoggingConsole = require('./aurelia-logging-console');

Object.keys(_aureliaLoggingConsole).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaLoggingConsole[key];
    }
  });
});