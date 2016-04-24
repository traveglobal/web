(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
        'underscore'
    ];

    fn_initialize = function (_) {
        /* forEach polyfill from MDN */
        var fn_foreach = function (callback, thisArg) {

            var T, k;

            if (this == null) {
                throw new TypeError(" this is null or not defined");
            }

            // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
            var O = Object(this);

            // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var len = O.length >>> 0;

            // 4. If IsCallable(callback) is false, throw a TypeError exception.
            // See: http://es5.github.com/#x9.11
            if (typeof callback !== "function") {
                throw new TypeError(callback + " is not a function");
            }

            // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
            if (arguments.length > 1) {
                T = thisArg;
            }

            // 6. Let k be 0
            k = 0;

            // 7. Repeat, while k < len
            while (k < len) {

                var kValue;

                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                if (k in O) {

                    // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
                    kValue = O[k];

                    // ii. Call the Call internal method of callback with T as the this value and
                    // argument list containing kValue, k, and O.
                    if (callback.call(T, kValue, k, O) === false) {
                        break;
                    }
                }
                // d. Increase k by 1.
                k++;
            }
            // 8. return undefined
        };

        return function (object, callback, thisArg) {
            if (_.isArray(object) || (object instanceof NodeList)) {
                /* native "Array.prototype.forEach" loop cannot be broken by returning false, 
                 * so implement foreach method internally for this feature */
                fn_foreach.call(object, callback, thisArg);

                return;
            }

            var key = null;

            if (_.isObject(Object)) {
                for (key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (callback.call(thisArg, object[key], key, object) === false) {
                            break;
                        }
                    }
                }
            }
        };
    };

    define(arr_dependency, fn_initialize);
}());