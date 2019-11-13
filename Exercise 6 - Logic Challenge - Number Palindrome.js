function angkaPalindrome(num) {
  for (var i = 1; i < num; i++) {
    var temp = num + i
    var str = temp + '';
    var strbalik = str.split("").reverse().join("");
    if (str === strbalik) {
      return temp
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

//Additional TEST CASE (From Bang Yusuf)
console.log(angkaPalindrome(12)); // 22

