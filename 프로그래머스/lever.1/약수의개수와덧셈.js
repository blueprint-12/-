// * 문제 이름: 문자열 내림차순으로 배치하기
/* 문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다. */

{
  //내림차순이니까 오름차순 sort()에서 reverse()를 해주면 기준에맞는 내림차순이 된다.
  function solution(s) {
    return s.split("").sort().reverse().join("");
  }
}

// * 문제 이름: 약수의 개수와 덧셈

// ?약수 구하는 법
/* 
1. while문 
2. 주어진 수의 절반을 대상으로만 확인 (약수는 본인을 제외하고 n/2 보다 클 수 없기 때문에 절반값까지만 체크)
3. 제곱근 사용(Math.sqrt) => 해당 약수를 가지고 입력받은 값을 나누게 될 경우 나오는 결과 값 역시 약수이기 때문이다.  */

/* 
문제 설명
두 정수 left와 right가 매개변수로 주어집니다. 
left부터 right까지의 모든 수들 중에서, 
약수의 개수가 짝수인 수는 더하고,
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000

입출력 예
left	right	result
13	17	43
24	27	52 */
{
  function solution(left, right) {
    const numArr = Array.from({ length: right - left + 1 }, () => left++);

    const result = numArr.map((el) => {
      const divisors = [];
      for (let i = 1; i <= Math.sqrt(el); i++) {
        if (el % i === 0) {
          divisors.push(i);
          if (el / i !== i) {
            divisors.push(el / i);
          }
        }
      }
      return divisors.length % 2 === 0 ? el : -el;
    });
    return result.reduce((acc, cur) => acc + cur, 0);
  }
}
// 다른 사람 솔루션
// 🐱‍🐉우선 굳이 array를 만들어주지 않아도 됐다는 점..(ㅠㅠ)
// for문의 범위를 잡아줄 때,left와 right를 사용 하면 된다. 해당 요소를 한번은 순회해야 하니까
//🤷‍♂️ 제곱근이 정수면 약수의 개수가 홀수이다.👌
{
  function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
        answer -= i;
      } else {
        answer += i;
      }
    }
    return answer;
  }
}
