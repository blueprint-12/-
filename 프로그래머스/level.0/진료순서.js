//TITLE: 진료 순서 정하기

//문제 설명:
/* 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요. */

//제한 사항
/* 중복된 원소는 없습니다.
1 ≤ emergency의 길이 ≤ 10 , 원소의 개수는 1개이상 10개 이하
1 ≤ emergency의 원소 ≤ 100 
*/

//입출력 예시
/* emergency	        result
[3, 76, 24]	            [3, 1, 2]
[1, 2, 3, 4, 5, 6, 7]	[7, 6, 5, 4, 3, 2, 1]
[30, 10, 23, 6, 100]	[2, 4, 3, 5, 1] 
*/

// ? 원소가 높을수록 우선순위가 높다.
// 중복 원소는 없다.

{
  function solution(emergency) {
    let sorted = emergency.slice().sort((a, b) => b - a);
    return emergency.map((v) => sorted.indexOf(v) + 1);
  }
}
