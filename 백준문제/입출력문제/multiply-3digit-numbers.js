//🍕백준문제 2588번
//fs모듈로 여러줄 입력값을 받아오는 법
//e.g.) let input = fs.readFileSync('text.txt','utf8').split('\n');

/*
입력 예제
472
385
*/
/*
출력 예제
2360
3776
1416
181720
*/

// 해당 코드는 문자열-> 숫자로 데이터타입을 변환하지 않았는데 정상작동 됐다.
// 왜 그런 지 확인해보니 사칙연산 중 덧셈을 제외하면 숫자/문자형 상관없이 계산이 된다고 한다.
// 심지어 연산이 끝난 string은 number로 자동 형변환이 된다.
{
  const num1 = '10';
  const num2 = '20';
  const result = num1 * num2;
  console.log(typeof result); // number로 자동 형변환
}

const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split('\n');

const [firstNum, secondNum] = data;
const [a, b, c] = secondNum;

let ac = firstNum * c;
let ab = firstNum * b;
let aa = firstNum * a;

console.log(ac);
console.log(ab);
console.log(aa);
console.log(firstNum * secondNum);

//해당 문제에 카라추바 알고리즘을 적용해야 겠다고 생각했는데 그럴 필요까진 없었다.
// 카라추바 알고리즘으로 분할정복하는 것도 나중에 해봐야 겠다.
