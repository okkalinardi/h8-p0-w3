function palindrome(kata) {
    var pisah = kata.split('');
    var balik= pisah.reverse();
    var gabung = balik.join('');
    if (gabung===kata){
        return true;
    }else{
        return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false


  //Atau

  function palindrome(kata){
    var balik='';
    for(i=kata.length-1; i >=0; i--){
        balik += kata[i]
    }
    if (balik===kata){
        return true;
    }else{
        return false
    }
}
 
 // TEST CASES
 console.log(palindrome('katak')); // true
 console.log(palindrome('blanket')); // false
 console.log(palindrome('civic')); // true
 console.log(palindrome('kasur rusak')); // true
 console.log(palindrome('mister')); // false