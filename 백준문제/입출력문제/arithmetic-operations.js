//🍕백준문제1001번 A-B 만들기
// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
/*
✅입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
✅출력
첫째 줄에 A-B를 출력한다.

✅입력예제: 3 2, 출력예제: 1
*/

const fs = require('fs');
// split() - separator로 구분된 문자열을 배열에 담아 리턴한다.
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(inputData[0]) - Number(inputData[1]));

//🍕백준문제10998번 A*B 만들기

const fs = require('fs');
const inputDataArr = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(+inputDataArr[0] * +inputDataArr[1]);

//🍕백준문제1008번 A/B 만들기
//첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.

const fs = require('fs');
const inputData2 = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(+inputData2[0] / +inputData2[1]);

//🍕백준문제10869번 사칙연산 출력하기
// 두 자연수 A와 B가 주어진다.
// 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.
const fs = require('fs');
const inputData3 = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(+inputData3[0] + +inputData3[1]);
console.log(+inputData3[0] - +inputData3[1]);
console.log(+inputData3[0] * +inputData3[1]);
console.log(Math.floor(+inputData3[0] / +inputData3[1]));
console.log(+inputData3[0] % +inputData3[1]);

//위의 코드가 한 번 틀렸는데 이유는 나누기의 결과값이 정수로 떨어지는 것을 제대로 확인하지 않았음
//Math.floor를 통해 소수점을 없애주자
//코드가 저렇게 여러개 출력하니까 너무 더러워보임 아래와같이 변수로 따로 빼준다.
const fs = require('fs');
const inputDatas = fs.readFileSync('/dev/stdin').toString().split(' ');
let firstData = +inputDatas[0]; //String 타입의 데이터를 +를 통해 숫자로 형변환
let secondData = +inputDatas[1];
console.log(firstData + secondData);
console.log(firstData - secondData);
console.log(firstData * secondData);
console.log(Math.floor(firstData / secondData));
console.log(firstData % secondData);
