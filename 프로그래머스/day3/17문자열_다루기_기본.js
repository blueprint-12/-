/*
✨
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

✨제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.

✨입출력 예
s	    return
"a234"	false
"1234"	true

*/
// 키워드: isNaN() , NaN은 같음 연산(==, ===)을 사용할 수 없음
// NaN == NaN은 false로 평가되기 때문. 그렇기 때문에 NaN을 판별할 함수가 필요함
// String.split() : 주어진 문자열을 separator 마다 끊은 부분 문자열을 담은 Array를 반환합니다.
// Array.every() : 해당 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는 지 테스트한다. Boolean값을 반환한다.
function solution(s) {
  //   let str = s;
  //   let strArr = [];
  //   if (str.length === 4 || str.length === 6) {
  //     let newArr = parseInt([...str]);

  //   }

  //   for (const i of strArr) {
  //     if (typeof i === 'number') {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  //문자열의 길이가 4나 6이면
  const length = s.length;
  if (length === 4 || length === 6) {
    // 문자열을 각각의 element로 쪼갠 뒤 그 요소를 담은 배열에
    // every 함수를 통해 각각의 요소가 숫자인지( isNaN은 숫자가 아닌 것이니까 앞에 부정연산자 붙여줌)
    // 확인한다. every는 모든 요소가 해당 조건을 만족해야 true를 반환 , 아니라면 false
    return s.split('').every((c) => !isNaN(c));
  }
  //길이가안맞거나 하나라도 숫자가 아닌게 있다면 return false
  // 참고로 else 키워드는 생략가능
  return false;
}
//테스트 코드
// console.log(solution('3324'));

//short code (정규식)
function alpha_string46(s) {
  const regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
