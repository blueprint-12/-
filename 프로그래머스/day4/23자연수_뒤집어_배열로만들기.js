/*
✨자연수 뒤집어 배열로 만들기

✨문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

✨제한 조건
n은 10,000,000,000이하인 자연수입니다.

✨입출력 예
n	        return
12345	[5,4,3,2,1]
*/

// 키워드 -> Array.reverse() 원본배열의 요소를 반전시킨다(새배열 반환x)
function solution(n) {
  //입력받은 숫자를 string으로 형변환 후 split으로 쪼갠 새배열을 string_num에 넣어준다.
  let stringNumArr = String(n).split('');
  //map으로 다시 숫자로 각각의 요소를 형변환 시켜준 뒤 반환받은 새 배열에 Array.reverse()를 통해 원본배열의 요소들을 반전시킴(새배열 반환x )
  return stringNumArr.map((e) => +e).reverse();
}
//console.log(solution(2347196734));

//다른 사람 solution
function solution(n) {
  // 문자풀이
  // return (n+"").split("").reverse().map(v => parseInt(v));

  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
