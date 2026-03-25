// Simple JavaScript Demo

let numbers = [10, 20, 30, 40];

function getAverage(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

let result = getAverage(numbers);

console.log("The average is:", result);