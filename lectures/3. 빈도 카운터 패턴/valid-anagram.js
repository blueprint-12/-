/* 
Q. Given two strings, write a function to determine if 
the second string is an anagram of the first. An anagram is a
word, or name formed by rearranging the letters of another, such
as cinema, formed from iceman.

Expected output should be...:
validAnagram('',''); // true
validAnagram('aaa', 'zza'); false
validAnagram('anagram', nagaram'); // true
validAnagram('rat','car'); // false   
*/
function myAnagram(str1, str2) {
  // 모든 글자는 입력을 어떻게 받는 소문자로
  // 공백, 특수문자 등 제외
  // 객체 두개를 비교하는 것으로 시간복잡도 낮추기
  if (str1.length !== str2.length) {
    return false;
  }
  let firstCounter = {};
  let secondCounter = {};

  for (const value of str1) {
    firstCounter[value] = (firstCounter[value] || 0) + 1;
  }
  for (const value of str2) {
    secondCounter[value] = (secondCounter[value] || 0) + 1;
  }
  for (const key in firstCounter) {
    if (!(key in secondCounter)) {
      return false;
    }
    if (firstCounter[key] !== secondCounter[key]) {
      return false;
    }
  }
  console.log(firstCounter);
  console.log(secondCounter);
  return true;
}

const result = myAnagram("cong", "ocgn");
console.log(result);
//위에는 내가 만든 anagram -> 입력값에 대한 유효성 검사 기능이 없음

//해설 답안
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i].toLowerCase();
    //if letter exists, increment, otherwise set to 1
    // 3항 연산자를 사용
    console.log(lookup[letter]); //여기서 다 undefined뜸 그말은 falsy값이라는 것
    //그러면 뒤에있는 lookup[letter] = 1로 전부 세팅됨
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);
  //str2에 루프를 적용하고 letter라는 자리 표시자 변수를 만든 다음에
  // n과 같은 개별 문자들이 처음부터 여기에 저장되도록 하는것
  // 1.해당 문자를 찾을 수 없다면, false 리턴
  // 2. 아니라면 lookup에서 1을 뺀다.
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i].toLowerCase();
    //0은 거짓 같은 값(falsy)이기 때문에 lookup[letter]를 실행하지 않으면 0이 되지 않는다. 즉, 참이되는 것
    // 그렇기때문에 letter가 0일때의 조건을 따로 달아주지 않아도 된다. (!0은 true이므로 false를 리턴하고 있으니 실행되지 않음)
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// {c:1, o:1, n:1, g:1}
console.log(validAnagram("king", "ANGk"));
