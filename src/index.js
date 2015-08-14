import {Logger} from 'aurelia-logging';

// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(global) {
  'use strict';
  global.console = global.console || {};
  var con = global.console;
  var prop, method;
  var empty = {};
  var dummy = function() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
})(typeof window === 'undefined' ? this : window);
// Using `this` for web workers while maintaining compatibility with browser
// targeted script loaders such as Browserify or Webpack where the only way to
// get to the global object is via `window`.

if (Function.prototype.bind && window.console && typeof console.log == "object"){
  ["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function (method) {
    console[method] = this.bind(console[method], console);
  }, Function.prototype.call);
}

export class ConsoleAppender {
  debug(logger : Logger, ...rest : any[]) : void {
    console.debug(`DEBUG [${logger.id}]`, ...rest);
  }

  info(logger : Logger, ...rest : any[]) : void {
    console.info(`INFO [${logger.id}]`, ...rest);
  }

  warn(logger : Logger, ...rest : any[]) : void {
    console.warn(`WARN [${logger.id}]`, ...rest);
  }

  error(logger : Logger, ...rest : any[]) : void {
    console.error(`ERROR [${logger.id}]`, ...rest);
  }
}
