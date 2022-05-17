/*
✨자릿수 더하기

✨문제 설명
    자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
    예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

✨제한사항
    N의 범위 : 100,000,000 이하의 자연수

✨입출력 예
    N	answer
    123	6
    987	24
    입출력 예 설명
    입출력 예 #1
    문제의 예시와 같습니다.

    입출력 예 #2
    9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
*/

//split('')를 통해 문자열로 만들어줬던 숫자를 하나씩 쪼갭니다.
// 쪼갠 숫자문자열을 다시 map함수와 콜백함수 내부에 +를 통해 데이터타입을 숫자로 만들어줍니다.
// map은 호출한 결과를 모아 새로운 배열을 반환합니다.
// 숫자로 만들어준 요소를 reduce함수를 통해 합을 내줍니다. reduce는 Array.reduce()이고 하나의 결과값을 반환합니다.
function solution(n) {
  //넘버로 받은 데이터를 String으로 변환해준다. ->하나씩 쪼개야하니까
  let num_string = String(n);
  return num_string
    .split('')
    .map((num_char) => +num_char)
    .reduce((a, b) => a + b, 0);
}
console.log(solution(6643)); //19

//다른 사람 풀이

function solution(n) {
  // 쉬운방법
  return (n + '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}
