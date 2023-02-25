// * quick sort!
// TODO: 1) pivot helper 만들기 -> 배열을 재가공하지 않고 해당 배열에서 pivot위치(index)를 return하는 함수
// 1-1 pivot helper 는 인자로 3개를 받는다 배열, 첫번째 배열요소 index, 마지막 배열요소 index
{
  function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    let pivot = arr[start];
    //swapIdx는 pivot 이 마지막에 어디로 스왑해야하는 지 알려주는 지표이다.
    let swapIdx = start;
    //for문에서 pivot으로 선택된 요소는 순회할 필요없기 때문에 start +1 을 초기값으로 설정

    for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
        console.log(arr);
      }
    }
    swap(arr, start, swapIdx);
    console.log('the final form of array: ', arr);
    return swapIdx;
  }
  console.log(pivot([4, 6, 2, 7, 1, 3, 8, 9])); //pivot index: 3
}
{
  //pivot function
  function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    let pivot = arr[start];
    //swapIdx는 pivot 이 마지막에 어디로 스왑해야하는 지 알려주는 지표이다.
    let swapIdx = start;
    //for문에서 pivot으로 선택된 요소는 순회할 필요없기 때문에 start +1 을 초기값으로 설정

    for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
        console.log(arr);
      }
    }
    swap(arr, start, swapIdx);
    console.log('the final form of array: ', arr);
    return swapIdx;
  }

  // quickSort함수가 재귀적으로 하위 배열을 다시 시작하기 때문에 하위 배열은 시작포인트, 엔드포인트가 다르다.
  //  pivot함수의 인자값으로 left, right를 새롭게 지정하여 보내줘야 pivotIndex값을 제대로 받을 수 있다.
  function quickSort(arr, left = 0, right = arr.length - 1) {
    //if문에 베이스케이스를 잡아주지 않으면 스택오버플로우가 걸림
    // ? 베이스 케이스: 결국 하위 배열로 갈수록 l r의 거리가 가까워지는 것이므로 더이상 쪼개지지않는 경우라면 중단
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      //left(pivotIndex 부분은 포함시키지 않아야 한다. )
      quickSort(arr, left, pivotIndex - 1);
      //right
      quickSort(arr, pivotIndex + 1, right);
    }
    // 배열을 꼭 리턴해야한다. 재귀적으로 돌아가고 있기 때문에 퀵 정렬 함수의 결과를 기다리고 있기 때문
    return arr;
  }
  console.log(quickSort([3, 5, 1, 8, 6, 9, 10, 44, 13]));
  /*
    [
    1,  3,  5,  6, 8,
    9, 10, 13, 44
    ]
   */
}
