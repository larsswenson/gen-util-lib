/**
 * Identity function returns passed argument without modification
 * @param arg - value to be returned
 * @returns - same value passed as argument
 */
function identity(arg) {
    return arg;
}
/**
 * Reverse array of elements of type T
 * @param array - array to be reversed
 * @returns - new array of elements in reverse
 */
function reverseArray(array) {
    return array.slice().reverse();
}
/**
 * Maps object's props to new object with same keys but modified values
 * @param obj - object with keys of type K and values of type V
 * @param mapFn - function converts type V to type U
 * @returns - new object with keys of type K and values of type U
 */
function mapObject(obj, mapFn) {
    var result = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mapFn(obj[key]);
        }
    }
    return result;
}
/**
 * Filters elements of array based on predicate function
 * @param array - array of elements of type T
 * @param predicate - function takes an element of type T and returns a boolean
 * @returns - array with only filtered true elements
 */
function filterArray(array, predicate) {
    return array.filter(predicate);
}
// Tests
console.log("Test identity function: ");
console.log(identity(1)); // 1
console.log(identity("Hello!")); // "Hello!"
console.log("\nTest reverseArray function: ");
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ['c', 'b', 'a']
console.log("\nTest mapObject function: ");
console.log(mapObject({ a: 1, b: 2 }, function (x) { return x.toString(); })); // { a: '1', b: '2' }
console.log("\nTest filterArray function: ");
console.log(filterArray([1, 2, 3, 4], function (x) { return x % 2 === 0; })); // [2, 4]
console.log(filterArray(["Hello", "World!", "test"], function (x) { return x.indexOf("o") !== -1; })); // ["Hello", "World!"]
