/* ✨문제 설명
 어떤 정수들이 있습니다.
 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가
 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
*/
/* ✨제한사항
 absolutes의 길이는 1 이상 1,000 이하입니다.
 absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
 signs의 길이는 absolutes의 길이와 같습니다.
 signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다. 
*/

/* ✨입출력 예
 absolutes	 signs	      result
 [4,7,12]	[true,false,true]	9
 [1,2,3]	[false,false,true]	0 */

/* 
입출력 예 설명

입출력 예 #1 
 
signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
따라서 세 수의 합인 9를 return 해야 합니다. */

/* 입출력 예 #2 

signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
따라서 세 수의 합인 0을 return 해야 합니다. */

// const abs = [1, 3, 4, 5, 6];
// const signs = [true, false, true, false, true];

//key method: reduce(acc(누산기: 콜백의 반환값을 누적, 첫번째 호출시 acc의 값은 초기값과 같음), cur ,초기값(acc의 0번째 세팅값으로 들어감))
function solution(abs, signs) {
  for (i = 0; i < abs.length; i++) {
    //배열의 길이만큼 요소를 하나씩 조회, 두 배열의 길이가 같고 index요소끼리 상응하므로 1개를 기준으로 조회하면 됨
    if (signs[i] === false) {
      //sings의 요소값이 false 이면 -abs[i] // abs[i] * -1 같은 거
      abs[i] = -abs[i];
    } else {
      // 아니라면 그대로
      abs[i];
    }
  }
  // - + 부호가 붙은 abs 배열의 요소합을 구해서 반환,
  return abs.reduce(function (acc, cur) {
    return acc + cur;
  });
}
