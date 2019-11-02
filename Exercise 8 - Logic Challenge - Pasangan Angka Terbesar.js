function pasanganTerbesar(num) {
  var str=num+'';
  var strpasang = '';
  var arrpasang = [];
  for(i=0 ; i<str.length-1 ; i++){
    strpasang += str[i]+str[i+1]+' ';
  }
  arrpasang= strpasang.split(' ');
  arrpasang.sort().reverse();
  return arrpasang[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99