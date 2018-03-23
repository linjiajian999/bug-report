// polyfill Object.assign
;(function() {
  var reduce = Function.bind.call(Function.call, Array.prototype.reduce);
  var isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
  var concat = Function.bind.call(Function.call, Array.prototype.concat);
  var keys = Reflect.ownKeys;
  if (!Object.values) {
    Object.values = function values(O) {
      return reduce(keys(O),
        function(v, k) {
          return concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : [])
        },
        []
      );
    };
  }
  if (!Object.entries) {
    Object.entries = function entries(O) {
      return reduce(keys(O),
        function(e, k) {return concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : [])},
        []
      );
    };
  }
  if (typeof Object.assign != 'function') {
    Object.assign = function (target) {
      'use strict';
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      target = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }
})()
