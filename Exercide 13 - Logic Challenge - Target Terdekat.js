function targetTerdekat(arr) {
  var poso = [];
  var posx = [];
  for(i=0 ; i<arr.length ;i++ ){
  if(arr[i]=='o'){
    poso.push(i);
  }else if(arr[i]=='x'){
    posx.push(i)
  }
  }
  if(poso.length == 0 || posx.length == 0){
    return 0
  }else{
  var jarak = [];
  for(j=0 ; j<poso.length ; j++){
    for(k=0 ;k<posx.length ; k++){
      if(poso[j]>posx[k]){
        jarak.push(poso[j]-posx[k]);
      }else if(poso[j]<posx[k]){
        jarak.push(posx[k]-poso[j]);
      }
      }
      }
    }
    jarak.sort(function compareNumbers(a, b) {
  return a - b;})
  return jarak[0];
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2