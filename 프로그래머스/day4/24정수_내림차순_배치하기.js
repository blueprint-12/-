/*
✨정수 내림차순으로 배치하기

✨문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다.
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

✨제한 조건
n은 1이상 8000000000 이하인 자연수입니다.
✨입출력 예
 n	    return
118372	873211
*/
//Array.join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
function solution(n) {
  let string_num = String(n);
  let answer = 0;

  answer = string_num
    .split('')
    .map((e) => +e)
    .sort((a, b) => b - a)
    .join('');
  return +answer;
}

//console.log(typeof solution(123456789));

//다른 사람 solution

function solution(n) {
  const newN = n + '';
  const newArr = newN.split('').sort().reverse().join('');

  return +newArr;
}
