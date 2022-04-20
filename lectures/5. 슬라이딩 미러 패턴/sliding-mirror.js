/*
An Example
인자(param)로 정수 배열과 n이라는 수를 취하는 maxSubarraySum 이라는 함수를 작성﻿해라
- 배열은 정렬할 필요없이 '정수'만 있으면 된다. (오름차순으로 정렬 필요없음)
- 두 번째 인자인 n을 전달하면 함수는 해당 배열의 연속된 요소의 가장 큰 합계를 계산하게 된다. 

the result should be...
maxSubarraySum([1,2,4,2,8,1,5],2) //10
maxSubarraySum([1,2,5,2,8,1,5],4) //17
maxSubarraySum([4,2,1,6],1) //10
maxSubarraySum([4,2,1,6,2],4) //13
maxSubarraySum([], 4) // null
*/

//먼저 naive solution (비효율적이지만 작동은 하는 순진한 접근법)
//이중 for문으로 시간 복잡도는 O(n^2)임
//n은 합계를 구하고자 하는 숫자의 개수
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  //배열이 모두 음수로 구성되어 있다면 가장 큰 합은 여전히 음수일 것임
  //이처럼 양수로만 작업을 하지 않는한 0에서 시작하는 것은 전혀 도움이 되지 않기 때문에 0대신 -infinity로 설정한 것이다.
  let max = -Infinity;
  //i가 순회하는 범위는 배열의 끝까지 도달하는 것이 아니라 -num + 1을 한다.
  for (let i = 0; i < arr.length - num + 1; i++) {
    //temp에는 각 루프의 합계가 저장된다.
    //n개의 수를 더해서 현재의 max보다 크다면 max가 temp가 되도록 바꿔준다.
    let temp = 0;
    for (let j = 0; j < num; j++) {
      //arr[i + j]는, i에서 시작하여 i + j를 수행하면 j의 위치(index)가 옆으로 한 자리 이동하는데,
      //num이 3일때, 세 가지 숫자를 더하는 방법이라고 보면 된다.
      //그냥 단순하게 생각하면 2중 for 문이니까 i가 한번 카운트되면, j라는 변수가 index를 3개순회하면서 그 값을 temp에 더하는 것
      temp += arr[i + j];
    }
    //만일 temp가 max보다 큰 경우에 max가 temp와 같도록 해준다.
    if (temp > max) {
      max = temp; // 새 값으로 max를 바꾸는 것(현재 값보다 더 큰 값을 만났으니 update)
    }
    console.log(temp, max);
  }
  return max;
}
console.log(maxSubarraySum([2, 3, 64, 5, 2, 4, 1], 3));
/*
풀이: 
n이 3일 때,
아래와 같이 3개를 연산하여 합계를 냄
2, 3, 64 = 69 max는 69
3, 64, 5 = 72 max는 72
64, 5, 2 = 71 max는 이전값 그대로 72
5, 2, 4 = 11 max는 그대로 72
2, 4, 1 // 여기서 '2'가 마지노선으로 3개를 연산할 수 있는 곳이 되므로 arr.length - num(3) + 1
// 7 max는 그대로 72

temp, max
69 69
72 72 
71 72 
11 72
7 72
결과: 72
*/

//아래는 위의 코드를 refactor한 것(with. sliding mirror pattern )
function reFMaxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  //합계가 유효하지 않은 배열이고 숫자가 너무 크면 null 반환
  if (arr.length < num) return null;
  //첫번째 maxSum을 만든다.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    //아래의 코드가 sliding window 패턴적용: 배열 값에 하나를 빼고 하나를 더하는 것
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum); // Math.max()는 더 큰 값을 취하는 메소드이다.
    //naive solution처럼 if문을 사용해도된다.
    //tempSum이 maxSum보다 크면 maxSum을 갱신해준다.
    console.log(tempSum, maxSum);
  }
  return maxSum;
}
reFMaxSubarraySum([2, 3, 4, 51, 5, 2, 3, 6, 5], 3);
console.log(reFMaxSubarraySum([2, 3, 4, 51, 5, 2, 3, 6, 5], 3));
