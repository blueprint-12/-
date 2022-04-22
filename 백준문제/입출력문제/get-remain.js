//🍕백준문제10430번
/*
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.*/

/* 
✅출력값
첫째 줄에 (A+B)%C
둘째 줄에 ((A%C) + (B%C))%C
셋째 줄에 (A×B)%C
넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

✅입력 예제
5 8 4

✅출력 예제
1
1
0
0
 */
const fs = require('fs');
const inputArr = fs.readFileSync(0, 'utf-8').split(' ');
let a = +inputArr[0];
let b = +inputArr[1];
let c = +inputArr[2];
console.log(Math.floor((a + b) % c));
console.log(Math.floor(((a % c) + (b % c)) % c));
console.log(Math.floor((a * b) % c));
console.log(Math.floor(((a % c) * (b % c)) % c));

/*✅key point: 나누기 연산자가 있으니까 결과값이 실수가 나올 수 있음
출력값이 전부 정수인점을 고려하여 소수점을 없애는 작업이 필요함*/
