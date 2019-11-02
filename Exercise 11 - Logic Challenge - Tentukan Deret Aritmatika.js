function tentukanDeretAritmatika(arr) {
    var a = 0;
    var b = 0;
    for(i=0 ; i<arr.length-2 ; i++){
      a = arr[i+1]-arr[i]
      b = arr[i+2]-arr[i+1]
    }
        if(a===b){
        return true;
    }else{
        return false;
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false