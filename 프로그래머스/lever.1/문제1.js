/* 
🔥문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해라

제한 사항
- n은 0 이상 3000이하인 정수입니다.

입출력 예 
n	return
12	28
5	6

예시 설명
입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

😉 내 풀이
정수의 약수는 나머지가 0인 수
빈배열에 나머지가 0인 값을 넣어서 해당 배열에 들어가있는 수를 전부 더한다. 

😉활용 메소드
Array.prototype.reduce() 👾리듀스메소드 너무 중요하다!
-> 배열의 합이나 배열의 평균을 알아낼 때 사용하면 좋다.
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서함수를 실행하고, 하나의 결과값을 반환합니다. 

  arr.reduce(callback[, initialValue])


리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값이 됩니다. 

*/

function solution(n) {
  let answer = 0;
  let number = n;
  let arr = [];
  let index = 1;
  while (index <= number) {
    if (number % index == 0) {
      arr.push(index);
    }
    index += 1;
  }
  answer = arr.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);
  return answer;
}
console.log(answer);
