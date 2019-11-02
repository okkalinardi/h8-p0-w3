function groupAnimals(animals) {
    var result = [];
    for(i=0 ; i<animals.length ; i++){
      result[i] = [animals[i]];
      for(j=i+1 ; j<animals.length ; j++){
        if(animals[j][0]==result[i][0][0]){
          result[i].push(animals[j]);
          animals.splice(j, 1);
        }
      }
    }
    return result.sort()
    }
    
    // TEST CASES
    console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
    // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
    console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
    // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]