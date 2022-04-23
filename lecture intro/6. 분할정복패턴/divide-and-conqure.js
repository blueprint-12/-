//항상 sorted array of integers
//return: the index where the value passed to the function is located.
//if the value is not found, return -1

/*
search([1,2,3,4,5,6],4) // 3 (index:3(인덱스의 위치를 반환한다.) there's number 4)
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1 (not found)
*/

//A naive solution , 시간 복잡도: O(n) Linear Search
//해당 구조를 선형 탐색이라고 부른다.
//선형 탐색은 n만큼 즉, 하나하나 일직선으로 탐색하는 것이라고 생각하면 된다.
function search(arr, value) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}

//refactored code, 시간 복잡도 O(log n)
//이진 탐색이라고 부르며 분할 정복 알고리즘이 적용됐다
//1. 정렬된 array를 만든다.
//2. 선형탐색해도 되지만 배열을 나누는 이진 탐색을 사용한다. -> 정렬된 배열의 중간지점을 선택
//2-1.배열의 중간 값을 대충 골라서 해당 값이 찾고자하는 값보다 작은지 확인 작다면 왼쪽에 있는 값들은 무시
//2-2.오른쪽에 남은 배열의 부분에서 또 중간지점을 선택 찾고자하는 값보다 작다면 왼쪽값 무시 반복
//2-3. 결국 배열을 중간으로 자꾸 나누면서 범위를 좁혀가는 것 이렇게되면 연산이 선형 탐색보다 훨씬 빨라진다.

//결론: 분할정복은 더 큰 데이터셋을 취해 작은 하위셋으로 분할하고 다른 부분은 무시하는 개념이다.
//병합 정렬이나 퀵 정렬의 경우, 요소들을 다시 병합 즉, 작은 조각들에서 한 번에 하나씩 병합하는 형태

function search(array, val) {
  let min = 0;
  let max = array.lengh - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
