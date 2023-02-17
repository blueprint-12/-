/* Example
오름차순(값이 작은 것 -> 큰 것)으로 정렬(sorted)된 배열을 취하는 sumZero 라는 함수를 만들어라.  
명심할 점은 인수로 넘겨받는 배열이 꼭 정렬되어 있어야 한다는 것입니다. 그래야 해당 패턴에 적용가능
-sumZero함수는 합이 0이되는 첫번째 pair(요소 2개)를 찾아야 합니다. 
-짝이 있는 경우, 반환값은 합이 0인 값을 담은 배열, 짝이 없는 경우는 undefined를 반환합니다. 

the result should be...
sumZero([-3,-2,-1,0,1,2,3]) // [-3, 3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

//Naive Soultion (a.k.a- 순진한 솔루션, 작동은 하지만 비효율적인 솔루션을 말함)
// 아래 예시코드의 시간복잡도: O(N^2), 공간복잡도 O(1)
// 이중 for 문으로 중첩 루프이니 시간 복잡도가 n^2임
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//refactored solution! (multi-pointer pattern이 적용됨)
// 배열의 맨 왼쪽과 오른쪽을 포인터로 잡고 두개를 비교하는 것 중앙으로 좁혀지면서 비교
// 즉, 포인터가 치음과 끝에 존재하고 가운데로 방향 이동하면서 비교하는 것
// 시간 복잡도: O(n), 공간복잡도 O(1)
function refactoredSumZero(arr) {
  //변수에 할당된 값은 index를 의미
  let left = 0;
  let right = arr.length - 1;
  //while의 조건식에서 left < right이라고 명시한 이유는 동일한 값에 left와 right가 같이 걸려서
  // '같은 수 -(빼기) 같은 수'를 하면 안되기 때문이다.
  // 이런 점을 방지하기 위해 미만이라고 정의
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const result = refactoredSumZero([-5, -4, -3, -2, 0, 1, 2, 3, 4]);
for (const value of result) {
  console.log(value);
}

//다중 포인터 문제2: countUniqueValue, 고유값을 세는 과제
//오름차순으로 정렬된 배열의 고유값을 세시오. 음수가 있어도 됩니다.
//result should be..
/*
conutUniqueValue([1,1,1,1,1,2]) // 2
conutUniqueValue([1,2,3,4,4,5]) // 5
conutUniqueValue([]) // 0
conutUniqueValue([-2,-1,-1,0,1]) // 4
*/
//힌트: 포인터를 앞에 두개 i와 j로 두고 j만 배열의 끝까지 순회한다. i는 고유값을 표현한다.

function countUniqueValue(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}
console.log(countUniqueValue([1, 3, 3, 4, 5, 5, 7, 7, 7, 9]));
/*
i j 출력값 아래
1 1
1 2
2 3
3 4
3 5
4 6
4 7
4 8
5 9

결과: 6
*/
