/*
✨문제 설명
    정수를 담고 있는 배열 arr의 평균값을 return하는 함수,
     solution을 완성해보세요.

✨제한사항
    arr은 길이 1 이상, 100 이하인 배열입니다.
    arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

✨입출력 예
    arr	       return
    [1,2,3,4]	2.5
    [5,5]	      5
*/

//key words : Array.reduce() , 화살표 함수 (return과 {} 중괄호 생략 못하는 경우는 '코드가 여러 줄일때')

//arr 는 정수를 담은 배열

function solution(arr) {
  let answer = 0; //answer 초기선언할당
  answer = arr.reduce((acc, curr) => acc + curr); //배열의 요소 합을 answer에 할당
  return answer / arr.length; //전체합을 요소의 수만큼 나눠주기 (평균값구하기)
}
// console.log(solution([122, 4, 1, 6]));
