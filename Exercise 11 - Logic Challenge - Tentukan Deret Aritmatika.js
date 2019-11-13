function tentukanDeretAritmatika(arr) {
  var a = 0;
  var b = 0;
  var result = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < (arr.length - 1) - i; j++) {
      if (i != j) {
        a = arr[i] - arr[j]
        b = arr[i + 1] - arr[j + 1]
      }
      if (a === b) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
  }
  result.sort()
  if (result[0] == false) {
    return false
  } else {
    return true
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

//Additional TEST CASE (From Bang Yusuf)
console.log(tentukanDeretAritmatika([1, 2, 3, 30, 33, 39, 4, 5, 6])); // false