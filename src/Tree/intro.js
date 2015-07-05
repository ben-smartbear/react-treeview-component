/**
 * Wrapper for the component that compatible with amd, commonjs and as global object
 */
(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    define(function () {
      return factory();
    });
  } else if(typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Treeview = factory();
  }
}(this, function() {
  'use strict';