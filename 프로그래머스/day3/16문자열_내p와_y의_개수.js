/*
✨문자열 내 p와 y의 개수

✨문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

✨제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.

✨입출력 예
 s	        answer
"pPoooyY"	true
"Pyy"	    false

입출력 예 설명
입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
*/

//이해하기: 대소문자 섞인 문자열 s 안의 p 와 y의 개수를 비교하여 같으면 true, 다르면 false ,
//둘 다 하나도 없다면 true, 개수비교에서는 대소문자 구분X

//array.filter () - 필터함수는 배열에서 특정 조건과 일치하는 값을 모아서 새로운 배열로 리턴하는 함수이다.
//(callback함수에서 true를 리턴하는 element들을 모아서 새로운 배열로 만들어 리턴)

//split()메소드를 이용하여 문자열을 String 배열에 넣기

//1.1 문자열의 문자들을 분리하여 배열로 변환 : Spread Operator
//스프레드 연산자(Spread Operator)를 이용하여 문자열을 배열로 변환할 수 있습니다. 문자열을 구성하는 문자들이 분리되어 요소로 배열에 추가됩니다.
function solution(s) {
  //입력받은 s 전부 소문자로 전환
  let str = s.toLowerCase();
  //스프레드 연산자(ES6)로 문자열을 배열로 변환
  const arr = [...str];
  //Array.filter()을 사용하여 중복값을 담은 새배열 반환 -> 해당 배열의 길이(중복 수)를 p_count에 담아줌
  let p_count = arr.filter((element) => 'p' === element).length;
  let y_count = arr.filter((element) => 'y' === element).length;
  if (p_count === y_count) {
    return true;
  } else if (p_count === 0 && y_count === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(solution('ppyeee'));

//짧은 솔루션

//키워드: split()
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}
