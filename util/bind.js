/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}

.apply version
*/


Function.prototype.myBindApply = function (thisArg, ...argArray) {
  const originalMethod = this;
  return function (...args) {
    return originalMethod.apply(thisArg, [...argArray, ...args]);
  };
};

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 *
 * Symbol version
 *
 */
Function.prototype.myBindSymbol = function (thisArg, ...argArray) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);
  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return function (...args) {
    return wrapperObj[sym](...argArray, ...args);
  };
};