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

console.log(charCount("Hi there!"));
console.log(charCount("an nyong ha sae yo"));
