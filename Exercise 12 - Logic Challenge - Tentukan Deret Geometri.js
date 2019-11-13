function tentukanDeretGeometri(arr) {
  var a = 0;
  var b = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < (arr.length - 1) - i; j++)
      if (i != j) {
        a = arr[i] / arr[j]
        b = arr[i + 1] / arr[j + 1]
      }
  }
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

//Additional TEST CASE (From Bang Yusuf)
console.log(tentukanDeretGeometri([1, 2, 2, 2, 2, 3, 9, 27, 81])); // false
