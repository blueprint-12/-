//🍕백준문제9498번 시험 성적

/*
✅Q. 시험 점수를 입력받아 
90 ~ 100점은 A, 
80 ~ 89점은 B, 
70 ~ 79점은 C, 60 ~ 69점은 D,
나머지 점수는 F를 출력하는 프로그램을 작성하시오.

✅입력: 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다
✅출력: 시험 성적을 출력한다.

✅예제 입력: 
100 // A
*/

const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString();
const result = Number(data);

if (90 <= result && 100 >= result) {
  console.log('A');
} else if (80 <= result && 89 >= result) {
  console.log('B');
} else if (70 <= result && 79 >= result) {
  console.log('C');
} else if (60 <= result && 69 >= result) {
  console.log('D');
} else console.log('F');

/*최초 1회 틀린 이유?..
 아마 toString().trim()으로 데이터를 받아온 것을 result 에서 data[0]로 사용해서
 그런 것이 아닐까 싶음 -> 확인해보니까 맞는 거 같다 젠장. split()에 익숙해져있어서 바보같이 배열을 
 반환하는 줄 알고 있었음 
 */
