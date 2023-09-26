//? 문제 설명

// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

//* 제한 사항
/*
1 ≤ p의 길이 ≤ 18
p의 길이 ≤ t의 길이 ≤ 10,000
t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다. 
*/

//* 입출력 예시
// "3141592"	"271"	2
// "500220839878"	"7"	8
// "10203"	"15"	3

//? 내 풀이
// 변수를 따로 선언한 거 말고는 딱히 다른 점은 없는듯
// 포인터 개념을 통해서 만들었는데 slice의 end 조건을 잘못생각해서 처음에 틀렸었다. => 디버깅으로 원인 발견
//JS 문법상 string타입과 num타입의 연산이 되기때문에 한쪽만 Number()생성자로 명시적으로 형변환해주었다.
{
  function solution(t = '3141592', p = '271') {
    const size = p.length;
    const comparedNum = Number(p);
    let answer = 0;
    for (let i = 0; i <= t.length - size; i++) {
      const targetOft = t.slice(i, i + size);
      if (targetOft <= comparedNum) answer++;
    }
    return answer;
  }
}

//* 다른 사람 풀이
{
  function solution(t, p) {
    let count = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
      let value = t.slice(i, i + p.length);
      if (+p >= +value) count++;
    }
    return count;
  }
}
