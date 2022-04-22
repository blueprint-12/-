//🍕백준문제10926번 ??!
//첫째 줄에 준하가 가입하려는 아이디를 입력. 알파벳은 소문자로만 이루어져있음 길이 50제한
//출력값: 입력받은아이디 +??!
/*입력예제: joonas, 출력예제: joonas??!*/

const fs = require('fs');
const id = fs.readFileSync('/dev/stdin').toString().toLowerCase().trim();
console.log(`${id}??!`);

//틀린이유: .trim()을 통해 양끝의 공백을 제거해줘야한다.
//숏코딩 답안:console.log(require("fs").readFileSync(0, "utf8").trim() + "??!")

//fs.readFile( path, [options], callback ) 이 부분이 제대로 이해가지않음
//https://jesstory-codinglish.tistory.com/41 참고해서 공부하기
