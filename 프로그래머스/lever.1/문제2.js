/* 
🔥문제 설명
두 정수 사이의 수 합을 구하여라.
a b 는 대소구분이 없습니다. 
만일 a와 b가 같은 수 일 때, a 혹은 b를 리턴하세요


for문을 활용-> 
어떤 수부터 ~ 어떤 수 까지 합계를 구하는 것이기 때문에
*/

function solution(a, b) {
  let answer = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else if (a < b) {
    for (let j = a; j <= b; j++) {
      answer += j;
    }
  } else {
    return a;
  }
  return answer;
}
console.log(answer);
