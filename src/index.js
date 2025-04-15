function fibs(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

console.log("Iterative Fibonacci");
console.log(fibs(0));
console.log(fibs(2));
console.log(fibs(5));
console.log(fibs(8));
console.log(fibs(10));

function fibsRecurse(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const arr = fibsRecurse(n - 1);
  return arr.concat(arr[arr.length - 1] + arr[arr.length - 2]);
}

console.log("==========================================");
console.log("Recursive Fibonacci");
console.log(fibsRecurse(0));
console.log(fibsRecurse(2));
console.log(fibsRecurse(5));
console.log(fibsRecurse(8));
console.log(fibsRecurse(10));

function merge(left, right) {
  const merged = [];
  const leftLength = left.length;
  const rightLength = right.length;
  let i = 0;
  let j = 0;
  while (i < leftLength && j < rightLength) {
    if (left[i] < right[j]) merged.push(left[i++]);
    else merged.push(right[j++]);
  }
  for (; i < leftLength; i++) {
    merged.push(left[i]);
  }
  for (; j < rightLength; j++) {
    merged.push(right[j]);
  }
  return merged;
}

function mergeSort(arr) {
  // base case
  if (arr.length === 1) return arr;
  // recursive case
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

console.log("==========================================");
console.log("Merge Sort");
console.log(mergeSort([5, 3, 8, 1, 2, 7, 4, 6]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
