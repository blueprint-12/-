/*
✨제일 작은 수 제거하기

✨문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

✨제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다. -> 중복값없음 ? 중복값처리해야한다?

✨입출력 예
arr	        return
[4,3,2,1]	[4,3,2]
[10]	    [-1]
*/

//내 솔루션1
function solution1(arr) {
  //sortedArr 는 내림차순으로 정렬된 배열
  const answer = [];
  const positiveArr = arr.map((e) => Math.abs(e));
  const sortedArr = positiveArr.sort((a, b) => b - a);
  if (arr.length == 1 || arr.length == 0) {
    sortedArr.pop();
    answer.push(-1);
    return answer;
  }
  //pop()원본배열 변형
  sortedArr.pop();
  return sortedArr;
}
// console.log(solution([10]));

//내 솔루션 2
function solution2(arr) {
  if (arr.length == 1) return [-1];
  const positiveArr = arr.map((e) => Math.abs(e));
  const sortedArr = positiveArr.sort((a, b) => b - a);

  sortedArr.splice(-1, 1);
  return sortedArr;
}
// console.log(solution([4, 3, 2, 1]));
//테스트 통과 못함;
// -> 실패 이유: 음의 정수를 절대값으로 강제로 자연수로 만든다음에 sort를 하면 안된다.

//spraed 연산자 공부(ES6)
//Math.min() 주어진 숫자들 중 가장 작은 값을 반환
{
  //Math.min(...arr) 의 경우 arr의 element들이 하나의 전달값(param)으로 알아서 들어감,
  // 우리가 일일이 쪼개서 넣어줄 필요없음
  // -> 배열 데이터 안의 요소를 나열할 필요없이 spread연산자를
  // 이용해 손쉽게 객체 value값으로 전개할 수 있음
}

//되는 solution

// Array.splice(start index, deleteCount) -> 기존 배열을 수정하여 변경시킴 return 값은 변경된 내용
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
