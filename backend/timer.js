/**
 *  @NAPIVersion 2.0
 *  @NModuleScope Public
 */
define([], function () {
  function Timer() {
    var START_TIME = new Date();

    this.getStartTime = function () {
      return START_TIME;
    };

    this.getElapsedTime = function () {
      var CURRENT_TIME = new Date();
      return CURRENT_TIME.getTime() - START_TIME.getTime();
    };

    this.getElapsedSeconds = function () {
      return this.getElapsedTime() / 1000;
    };
  }

  return Timer;
});