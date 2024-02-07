/*
  Req:
  1. Returns a singe value

  2. Single value return is the end result of:
    * Running each element in the array in order, through a "reducer" callbackFn

    * NOTE: callBackFn takes an optional parameter "initialValue"

    If initialValue exists, then starting value of reducer is set to this value
    If hasNoInitialValue, starting value is set to 0th index of starting array

    If hasNoInitialValue starting index for array traversal is 1st array index
    if initialValue, this is set to the 0th index.


    Steps:

    1. Create pointer to track if hasNoInitialValue
       * Create pointer to keep track of reducer value, if hasNoInitialValue, set to 0th index of array

    2. --optional-- handle the case where if hasNoInitialValue AND array.length === 0
       then throw an error prompting for an array with items in it and an initial value

    3. Create pointer for starting index

    4. Traverse array at the correct starting index
       * optionally cache indexValue
       * if index is valid (Object.hasOwn(index, this) )
         then set the reducer to the return value of the callback fn with all params passed in

    5. return reducer value
*/


Array.prototype.myReduce = function(callbackFn, initialValue) {
  const hasNoInitialValue = initialValue === undefined;

  if (hasNoInitialValue && this.length === 0) {
    throw new TypeError('Please enter either a non empty array or an initial value');
  }

  let reducer = hasNoInitialValue ? this[0] : initialValue;
  let startingIndex = hasNoInitialValue ? 1 : 0;

  for (let index = startingIndex; index < this.length; index++) {
    // optionally cache indexValue
    let indexValue = this[index];

    if (Object.hasOwn(this, index)) {
      reducer = callbackFn(reducer, indexValue, index, this);
    }
  }
  return reducer;
};
