// * mergeSort

{
  // * 합병 정렬의 합병부분(합병함수)
  // ? 1.첫번째로 할 일은 포인터 두 개를 만드는 것
  function merge(arr1, arr2) {
    // 오름차순 정렬(작은수 -> 큰 수 )
    let results = [];
    // ? i와 j는 각각 arr1, arr2의 포인터
    let i = 0;
    let j = 0;
    // ? 첫번째 while문은 하나의 arr가 배열의 끝에 도달하면 끝나버리기 때문에 나머지 요소들을 push해줘야함
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        // arr1[i]가 arr2[j]보다 더 작은 경우는
        // results에 작은 요소를 넣고 i의 포인터를 1증가시켜준다.
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    // ? 위의 while문에서 result로 넘어가지못하고 남은 요소들을 결과에 담아준다.
    // i와 j의 array 중 어느것이 먼저 배열의 끝에 도달할 지 모르기 때문에 각각 while문 작성
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }

  // *합병 정렬의 정렬부분
  // ! 목표: 배열을 계속 반으로 나누는 것, 기본케이스의 끝에 도달하여 배열 길이가 1보다 작거나 같아야함(1 or 0)
  // slice() 사용하여 나누는 것을 추천
  // 0 또는 1개의 요소를 가진 작은 배열이 준비되면 작성해놓았던 합병 함수를 사용해 다시 합친다.
  // 재귀함수가 필요하다. => 모든 재귀 함수에는 기본 케이스와 재귀 케이스가 있다는 사실을 기억
  function mergeSort(arr) {
    //기본 케이스 먼저 작성
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    // ? slice에 start값만 적어주면 end는 자동으로 배열의 끝까지 한다.
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  console.log(mergeSort([223, 34, 52, 665, 3]));
  // [3, 34, 52, 223, 665]
}
