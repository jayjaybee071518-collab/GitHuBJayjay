let numbers = [10, 20, 30, 40];

function getAverage(arr) {
  let total = 0;

  for (let i = 0; i <= arr.length; i++) {
    total += arr[i];
  }

  let average = total / arr.length;
  return average;
}

console.log("Average:", getAverage(numbers));