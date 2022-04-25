//🍕백준문제2753번 윤년

/*
✅Q. 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
✅입력:첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.
✅출력: 첫째 줄에 윤년이면 1, 아니면 0을 출력한다.

✅예제 입력: 
2000 / 1
*/

const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString();
const year = Number(data);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log('1');
} else {
  console.log('0');
}
