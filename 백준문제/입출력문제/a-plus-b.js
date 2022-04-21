//🍕백준문제1000번 A+B 만들기
//두 정수 A와 B를 입력받은 다음, A+B 를 출력하는 프로그램을 작성해라.
//input 값 (0<A, B<10)
//return 값 A+B

//언어: node.js
//자바스클비트는 웹 브라우저 위에서 동작하도록 만들어진 언어
//웹 브라우저 외의 로컬 환경에서 사용하려면 node.js사용해야한다.

//중요개념: fs모듈, readline 모듈

//file system 모듈을 불러온다.
const fs = require('fs');
// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// 읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, inputData = ['2', '3'];
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
// 자꾸 오답나서 왜이런가 봤는데 split(' ') 사이에 공백을 안넣어서 계속 틀렸음
console.log(Number(inputData[0]) + Number(inputData[1]));

// option으로 인코딩을 string 자료형으로 넘기는 경우, toString을 할 필요없이 문자열 반환
const inputData2 = fs.readFileSync(0, 'utf-8').split(' ');

//solution 2) readline 모듈 사용하기 (fs모듈이 속도가 더 빠르다함 런타임오류를 막기위해 fs사용)
