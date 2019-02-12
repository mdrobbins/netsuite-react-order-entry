//noinspection JSUnresolvedFunction
/**
 *  @NAPIVersion 2.0
 *  @NModuleScope Public
 */
define(['N/log', 'N/error'], function (log, error) {
  /**
   * Wraps a potentially unsafe NetSUite call in a try/catch and implements basic loggins
   * @returns {{isSuccess: bool, message: string, details: object, result: object}}
   */
  function safeExecute() {
    var parameters = Array.prototype.slice.call(arguments);
    var functionToExecute = parameters.shift();
    if (typeof (functionToExecute) === 'function') {
      try {
        var result = functionToExecute.apply(this, parameters);
        return {
          isSuccess: true,
          result: result
        };
      } catch (ex) {
        var response = {
          isSuccess: false,
          message: ex.message,
          details: {
            functionCalled: functionToExecute.name,
            parameters: JSON.stringify(parameters)
          }
        };
        log.error('Failed to call function', JSON.stringify(response));
        return response;
      }
    } else {
      throw error.create({
        name: 'INVALID_ARGUMENT',
        message: functionToExecute + ' is not a function and cannot be called.',
        notify: false
      });
    }
  }

  return safeExecute;
});