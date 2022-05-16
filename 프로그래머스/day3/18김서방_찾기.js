/*
✨서울에서 김서방 찾기
✨문제 설명
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

✨제한 사항
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.
✨입출력 예
seoul	return
["Jane", "Kim"]	"김서방은 1에 있다"
*/

// seoul은 문자열을 담은 1차원 배열
// 배열을 Arr 변수에 담고 for of 문을 통해 각 요소를 반복문을 돌림
// 만약 i에 Kim이 있다면 해당 index를 반환
function solution(seoul) {
  const Arr = seoul;
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i].includes('Kim')) {
      return `김서방은 ${i}에 있다`;
    }
  }
}
// console.log(solution(['nono', 'this', 'Kim']));

// 다른 solution
//이게 훨씬 간단하고 좋은 코드같음..
//Kim이 오직 한 번 나타나고 잘못된 값이 입력되는 경우가 없으므로 indexOf()를 사용하면 가장 처음 발견되는 Kim의 index번호를 가져올 수 있다.
//Array.indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.

function findKim(seoul) {
  let idx = seoul.indexOf('Kim');
  return '김서방은 ' + idx + '에 있다';
}
