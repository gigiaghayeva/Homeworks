function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

let max=maxOfThree(12, 4, 8)
console.log("The largest number is:", max);



// task 2 // chat gpt
function doubleArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

console.log(doubleArray([1, 2, 3]));  // [2, 4, 6]




//task3 
const reverseNumber = function(num) {
  return parseInt(num.toString().split('').reverse().join(''));
};



//task4 
let minMax = [ 2, 5, 1, 9];
const min = Math.min(...minMax);
const maxx = Math.max(...minMax);
console.log("Max:", maxx);
console.log("Min:", min);


let age=[ 46,14, 77,25 , 54, 8];
const young= Math.min(...age);
const old=Math.max(...age);
console.log("Youngest in the family:", young);
console.log("Oldest in the family:", old);


let cars=[ 500, 300, 200,700];
const ferrari=Math.max(...cars);
const toyota=Math.min(...cars);
console.log("Ferrari is the fastest:", ferrari);
console.log("Toyota is less speed than Ferrari", toyota);
