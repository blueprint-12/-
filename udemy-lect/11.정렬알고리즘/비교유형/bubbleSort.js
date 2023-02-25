{
  function numberCompare(num1, num2) {
    return num1 - num2;
  }
  console.log([6, 5, 15, 10].sort(numberCompare)); //[ 5, 6, 10, 15 ]
  //* num1인 6에서 num2인 5를 뺐을 때, 양수를 return 하므로  num2인 5가 6보다 앞으로 오게 된다.
  // 즉, 이를 통해서 내림차순 정렬이 가능하다.
}

// ! Before we sort, we muse swap!
{
  //ES5
  function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  //ES2015
  //심플해보이지만 가독성이 떨어지는 단점이 있다.
  //장점: 파일 크기와 파일이 얼마나 짧은 지 관심이 있는 사람은 아래의 코드를 사용하는 걸 추천
  const swap = (arr, idx1, idx2) => {
    // arr[idx1] 을 arr[idx2] 로 바꾸고 arr[idx2]를 arr[idx1]으로 바꾼다.
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  //chapGPT example
  function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
  }

  // Example usage
  var x = 10;
  var y = 20;
  console.log('Before swap: x =', x, 'y =', y);
  swap(x, y);
  console.log('After swap: x =', x, 'y =', y);
}

// bubbleSort 만들어보기(최적화 되기 전)
// * 최적화 되기 전이라고 한 이유: 우선 마지막 요소인 숫자와 마지막에 존재하지않는 수 undefined가 비교되는 경우가 생기고
// * 한번의 swap가 생기면 마지막 요소는 이미 정렬된 수라 비교할 필요가 없는데 또 다시 비교에 들어간다.
// ? 여기서 불필요한 연산을 줄이려면? 한번의 swap이 발생하면 총4개의 요소에서 3개의 요소만 비교하는 식으로 비교 횟수를 줄여가는 것
{
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log(arr);

        if (arr[j] > arr[j + 1]) {
          //SWAP ->조건, 지금 대상이 비교대상보다 크다면 swap!
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  bubbleSort([25, 35, 29, 8]);
}

// 리팩터링 최적화전 bubbleSort 함수
{
  function bubbleSort(arr) {
    //for 루프의 조건을 바꿔준다. i의 초기값이 4로 시작하고 i가 1에 도달할때 종료, i를 감소시킨다.
    for (let i = arr.length; i > 0; i--) {
      // j는 0부터 시작하며 j는 i-1보다 작을때까지, j를 증가시켜준다.
      for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j + 1]);

        if (arr[j] > arr[j + 1]) {
          //SWAP ->조건, 지금 대상이 비교대상보다 크다면 swap!
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      console.log('----one pass complete-----');
    }
    return arr;
  }

  console.log('the answer: ', bubbleSort([25, 35, 29, 8, -4, 330]));
  /*
  [ 25, 35, 29, 8, -4, 330 ] 25 35
  [ 25, 35, 29, 8, -4, 330 ] 35 29
  [ 25, 29, 35, 8, -4, 330 ] 35 8
  [ 25, 29, 8, 35, -4, 330 ] 35 -4
  [ 25, 29, 8, -4, 35, 330 ] 35 330
  ----one pass complete-----
  [ 25, 29, 8, -4, 35, 330 ] 25 29
  [ 25, 29, 8, -4, 35, 330 ] 29 8
  [ 25, 8, 29, -4, 35, 330 ] 29 -4
  [ 25, 8, -4, 29, 35, 330 ] 29 35
  ----one pass complete-----
  [ 25, 8, -4, 29, 35, 330 ] 25 8
  [ 8, 25, -4, 29, 35, 330 ] 25 -4
  [ 8, -4, 25, 29, 35, 330 ] 25 29
  ----one pass complete-----
  [ 8, -4, 25, 29, 35, 330 ] 8 -4
  [ -4, 8, 25, 29, 35, 330 ] 8 25
  ----one pass complete-----
  [ -4, 8, 25, 29, 35, 330 ] -4 8
  ----one pass complete-----
  ----one pass complete-----
  the answer:  [ -4, 8, 25, 29, 35, 330 ]
  */
}

// bubbleSorting 최적화 ver
// * noSwaps 라는 변수를 만들어준다.
// swap이 일어나지않는다면 break를 걸어 루프밖으로 나가게 한다.
{
  function bubbleSort(arr) {
    let isSwapped;
    for (let i = arr.length; i > 0; i--) {
      isSwapped = false;
      for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          isSwapped = true;
          console.log('SWAP!');
        }
      }
      console.log('----one pass complete-----');
      if (!isSwapped) break;
    }
    return arr;
  }
  console.log(bubbleSort([1, 2, 3, 7, 5, 13, 14]));
}
