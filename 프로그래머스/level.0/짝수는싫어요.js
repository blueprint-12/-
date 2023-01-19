/* 문제 설명:
 정수 n이 매개변수로 주어질 때, 
 n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 
 solution 함수를 완성해주세요.
 제한 사항: 1 ≤ n ≤ 100 
 */
// 입 출력 예시
/*
n	result
10	[1, 3, 5, 7, 9]
15	[1, 3, 5, 7, 9, 11, 13, 15]
*/

//n은 양의 정수라는 거고
//Array.filter를 사용하면 될 듯
function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
}
// 다른 사람 풀이1) 다른점:
for (let i = 1; i <= n; i += 2) answer.push(i);
// -> 3번째 조건 i+=2 전부 돌지 않고 그냥 홀수번째에 해당하는 애들만 연산

// 다른 사람 풀이2)
// Array.from() 유사 배열 객체(array-like obj)나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만든다.
//문법: Array.from(arrayLike[, mapFn[, thisArg]])
//코드 가독성이나 연산 부분에서 크게 좋아보이는 코드는 아닌 거 같다.
//filter는 좋은 듯(명시적이니까)
const solution = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);
