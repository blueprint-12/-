{
  //TITLE: 약수 구하기
  function solution(n) {
    const answer = [];
    let index = 1;
    while (index <= n) {
      if (n % index === 0) {
        answer.push(index);
      }
      index++;
    }
    return answer.sort((a, b) => a - b);
  }
}

// TITLE: 숫자 찾기
{
  function solution(num, k) {
    const stringArr = String(num);
    const answer = [...stringArr].findIndex((el) => +el === k);
    return answer === -1 ? answer : answer + 1;
  }
}
