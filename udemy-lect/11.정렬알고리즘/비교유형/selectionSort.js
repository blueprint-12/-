// selction sort example
{
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        //console.log(i, j);
        if (arr[j] < arr[lowest]) {
          lowest = j;
        }
      }
      if (i !== lowest) {
        console.log(i, lowest);
        /*2 4
        3 6
        4 5
        5 6
        */
        //SWAP function
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
    return arr;
  }
  console.log(selectionSort([0, 2, 34, 22, 10, 18, 17]));
  /*   
   [0, 2, 10, 17, 18, 22, 34]
  */
}

//ES2015 ver
{
  function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
      if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
  }
}
