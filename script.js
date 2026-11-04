let numbers = [12, 7, 25, 8, 19, 3, 40, 15];

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let calculateSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

let countOdd = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
};

console.log("Array:", numbers);
console.log("Maximum number:", findMax(numbers));
console.log("Sum of all elements:", calculateSum(numbers));
console.log("Count of odd numbers:", countOdd(numbers));