// `Array.prototype.find()` is a built-in function in JavaScript which is used to
// get the value of the first element in the array that satisfies the provided
// condition. With this, you can quickly check all the elements of the array and
// return the first match. */

/**```js
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
``` */
// superbowlWin() should receive 1 argument, an `Array` of JavaScript `Object`s
// 1) Each object has two properties: `year` and `result`

// 2)It should use `find()` to test each `Object` to see if the `result` is `"W"` —
//  a win!

// 3) It should return the `year` when the win occurred (if it occurred at all!) 

// 4) If no win is found, it should return, sadly, `undefined`
//PLAN
//  function takes an arr of objs
//  set const to newObj
//  use find() to ck first ele in arr against a condiditon true/false
//  if res is "W" return year
//  if otherwise return undefined

// _function superbowlWin(arr) {
//     const newObj = arr.find(arr => arr.result === "W") 
//         return !!newObj ? newObj.year : undefined
//     };

    const  superbowlWin = (arr) => {
        const newObj = arr.find(arr => arr.result === "W") 
            return !!newObj ? newObj.year : undefined
        };
