//Q. 문자열을 취하고 문자열의 각 문자 수를 반환하는 함수를 만들어라
//아래와 같은 결과가 나오게 기능을 구현해보는 것
//charCount("aaa")  결과값: {a:3}
//charCount("Hello") 결과값: {h:1, e:1, l:2, o:1}

// 주석을 통해서 내가 해야할 것들을 작성
// -> 문제 세분화
function charCount(str) {
  // return 소문자 키를 가진 객체를 반환
  // 영숫자 문자와 소문자만 주의
  // make object to return at end
  const result = {};
  // loop over string for each character...
  for (let i = 0; i < str.length; i++) {
    // 파편화된 문자들을 char 안에 담아준다.
    const char = str[i].toLowerCase();
    // if the char is a number/letter AND a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      // if the char is a number/letter AND not in obj, add it to object and set value to 1
      result[char] = 1;
    }
  }
  return result;
  //if character is something else(space, period, etc. ) don't be do anything
  // return obj at end
}

// 리팩토링 charCount

// 문자가 영숫자인지 여부를 검사하는 간단한 정규식 추가(if문을 하나 더 추가해서0) /[a-z0-9]/ -> 문자가 소문자 a에서 z, 혹은 0부터 9에 해당하는지 검사
// 영숫자가 아닌 공백, 밑줄 대시 마침표 쉼표 등을 제거하고 문자와 숫자에 대해서만 소문자로 바꾼 다음 각 문자를 검사하는 것
// for loop가 아닌 for -of 루프를 적용하면 각 문자가 즉시 출력된다. -> for loop 를 for of 로 변환
// charCodeAt()을 통해 정규표현식을 간단한 수학적 비교로 대체할 수 있다.
// 정규표현식 사용하기-> test()	문자열에 일치하는 부분이 있는지 확인합니다. true 또는 false를 반환합니다.
// 정규표현식 대신에 charCodeAt(0) 메소드를 통해서 위치를 0으로 지정하고 유효현 문자 코드인지 확인
// JS만의 OR 연산자 추가 기능을 이용하면 if 문을 대체할 수 있습니다(코드 가독성이 떨어지니 사용시 유의)

function charCount1(str) {
  // return 소문자 키를 가진 객체를 반환
  // 영숫자 문자와 소문자만 주의
  // make object to return at end
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      // 문자열에 있는 해당 문자가 영숫자라면 소문자로 바꾼다음,
      // 객체에 추가하거나 1로 초기화하고 현재 값에 1을 더한다.
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha ( A-Z)
    !(code > 96 && code < 123) // lower alpha( a-z)
  ) {
    return false;
  }
  return true;
}
console.log(charCount1("Hello World!!!"));
// 정규표현식보다 문자 코드를 사용하는 것이 성능적으로 더 효율적이라함

// ||OR연산자 추가 기능
// || 첫번째 truthy의 원형을 반환하는 것
let firstName = "";
let lastName = "";
let nickName = "김곤잘레스";
document.write(firstName || lastName || nickName || "익명"); // 바이올렛
document.write(firstName || "<br>익명");

// 단락 평가
true || alert("not printed");
false || alert("printed");
