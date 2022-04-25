//🍕백준문제14681번 사분면(Quadrant) 고르기

/*
✅Q. 예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다.
 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.
점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오.
 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.
윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

✅입력: 첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)
✅출력: 점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.

✅예제 입력: 
12
5
//1
*/
const fs = require('fs');
const data = fs.readFileSync(0).toString().trim().split('\n');
const x = Number(data[0]);
const y = Number(data[1]);

if (x > 0 && y > 0) {
  console.log('1');
} else if (x < 0 && y > 0) {
  console.log('2');
} else if (x < 0 && y < 0) {
  console.log('3');
} else if (x > 0 && y < 0) {
  console.log('4');
} else console.log('this number is not matched on Quadrant');

//fs 모듈에서 런타임 에러가 난다.
//dev/stdin에서 오류가 발생한다고 한다. 경로를 dev.stdin -> 0로 변경
//혹은 readline 모듈을 써야한다. fs모듈에서 런타임에러가 발생한다면 readline을 통해 할 줄도 알아야 함
