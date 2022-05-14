/*
✨문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, 
x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

✨제한 조건
x는 -10000000 이상, 10000000 이하인 정수입니다. 
n은 1000 이하인 자연수입니다. *자연수: 음(-)이 아닌 정수

✨입출력 예
    x	n	answer
    2	5	[2,4,6,8,10]
    4	3	[4,8,12]
    -4	2	[-4, -8]
*/
function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

// console.log(solution(2, 5));

//short code
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

//다른 solution
function solution(x, n) {
  const answer = [];
  let cnt = 0;
  while (cnt < n) {
    cnt++;
    answer.push(x * cnt);
  }
  return answer;
}

// 출처: https://developer-sj.tistory.com/24 [devlog of SJ]
