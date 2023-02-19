function linearSearch(arr, value) {
  // * 만일 숫자 배열에 해당 숫자가 있다면, 아니라면 -1 반환
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2342, 32, 4, 2, 5], 2));

// * 이진 검색 만들어보기
// ! 무조건 sorted 된 arr 데이터
{
  function binarySearch(arr, val) {
    // * 왼쪽 포인터, 중간점, 오른쪽 포인터
    // ? 만일 val의 값이 arr에 포함되지 않는다면 무한 루프에 빠지게된다
    // ? white의 조건식에 && start <= end 를 더해줘서 해결한다.
    let start = 0;
    let end = arr.length - 1;
    // * 중간값이 정수가 나오지 않을 수 있으니 Math.floor 활용
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
      if (val < arr[middle]) end = middle - 1;
      else start = middle + 1;

      middle = Math.floor((start + end) / 2);
    }
    // ? 여기서 조건문을 통해 중간값이 우리가 찾던 값이 아닌지 확인한다.
    // * 아래의 조건문을 달아주지 않으면 우리가 val이 배열에 없더라도 마지막 인덱스를 반환하게 된다.

    return arr[middle] === val ? middle : -1;
    // 삼항 연산자를 통해서 아래코드를 위처럼 간단하게 리팩터링
    // if (arr[middle] === val) {
    //   return middle;
    // }
    // return -1;
  }
  console.log(binarySearch([1, 2, 3, 4, 5, 6, 12, 16], 12));
}

// Naive String Search
{
  // ? Long string: wowomgzomg, Short string: omg
  function naiveStringSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < short.length; j++) {
        console.log(short[j], long[i + j]);
        if (short[j] !== long[i + j]) {
          // 짧은 루프에서 빠져나와서 j에서 0부터 다시 시작하라는 뜻
          // 즉, 문자가 일치하지 않을 때는 루프를 빠져나오면 된다.
          console.log('BREAK!');
          break;
        }
        if (j === short.length - 1) {
          console.log('Found out!');
          count++;
        }
      }
    }
    return count;
  }

  console.log(naiveStringSearch('hahah this is the onhae', 'something'));
}
