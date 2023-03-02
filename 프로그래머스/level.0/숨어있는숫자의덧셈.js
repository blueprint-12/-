// * 2023 03 02 프로그래머스 lv.0 문제 풀이 (총 5개)

// * 1.문제이름: 숨어있는 숫자의 덧셈
// 문제설명: 문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

// TODO: my_string의 각각의 요소를 우선 쪼개야한다.
// filter를 통해 조건에 부합하는 지 확인(number로 형변환됨?)
// 쪼갠 요소의 배열에서 number로 형변환이 되는 애들만 담은 새배열을 반환
// 형변환이 되는지 filter로 조건 확인만 한 것이기 때문에 number로 형변환은 reduce 내에서 해준다.
//  reduce를 통해 값을 누적하여 반환한다.

function solution(my_string) {
  return my_string
    .split('')
    .filter((char) => Number(char))
    .reduce((acc, cur) => acc + Number(cur), 0);
}
console.log(solution('aAb1B2cC34oOp'));

//다른 사람 풀이

// ? replace 메서드 활용, 정규표현식을 통해서 숫자만 추출
// replace는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
{
  function solution(my_string) {
    const answer = my_string
      .replace(/[^0-9]/g, '')
      .split('')
      .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
  }
}

// ! Array.from() 을 통해서도 string을 각각의 char요소로 쪼갤 수 있다.

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

//============================================================================

// * 2.문제이름: 순서쌍의 개수
/*
순서쌍: 두 개의 숫자를 순서를 정하여 짝지어낸 쌍으로 (a,b) 표기
자연수 n이 매개변수로 주어질 때, 두 숫자의 곱이 n인 순서쌍의 개수를 return 
! 제한사항: n은 1이상 1,000,000이하 
n 20일 때, 6리턴
n이 20 이므로 곱이 20인 순서쌍은 (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1) 이므로 6을 return합니다.
*/
// ? 자연수 n의 약수가 순서쌍의 개수 (a,b) (b,a)처럼 앞뒤 순서가 바뀐 경우도 각각의 쌍으로 채택하니까
//약수는 나머지가 0인 수
function solution(n) {
  let answer = [];
  let index = 1;
  while (index <= n) {
    if (n % index === 0) {
      answer.push(index);
    }
    index += 1;
  }
  return answer.length;
}
// ? 내 솔루션에 불필요한 변수가 존재, 아래처럼 for문을 활용하면 더 나을듯

//for문 활용

{
  function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
      if (n % i === 0) {
        answer += 1;
      }
    }
    return answer;
  }
}
//============================================================================

// * 3.문제이름: 문자열안에 문자열
// 문제 설명: 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// ? 제한사항: str1, str2에 ""빈 문자열은 없음
// ? 문자열은 알파벳 대소문자, 숫자 구성

// TODO: ES6: Array.prototype.includes() 활용 -> 값이 있으면 true 없다면 false 반환

function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}

//다른 사람풀이
// ? split 기준점으로 나누면 값이 어떻게 나오는 지 확인해보기
{
  function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2;
  }
}
// ? if else 말고 3항연산자 활용하면 1줄로 가능
// 다른 사람 풀이, 위의 경우말고도 search(), indexOf(), match() 활용
//============================================================================

// * 4.문제 이름: 자릿수 더하기
// ? 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
// ? 제한사항: 양의 정수(자연수)

/* TODO: 양의 정수 n을 string화 -> 전개연산자로 하나씩 찢기
 찢어진 각각의 요소를 number로 다시 형변환 (map활용)
 reduce를 통해 누적값 반환
 */

{
  function solution(n) {
    let answer = [...n.toString()];
    return answer.map((a) => Number(a)).reduce((a, b) => a + b);
  }
}

// ? 다른 사람 풀이 해설
// toString() 후 split("") 로 찢는 방법이 가장 간단한데 이 부분을 나는 전개연산자로 처리
// 배열의 모든 요소를 Number로 형변환해야한다고 생각해서 map을 사용했지만 reduce의 return 값에서 형변환해줘도 된다.
// reduce의 초기값으로 0을 주면 맨처음 acc가 0(number type)이고 현재값인 cur 만 Number()로 형변환 해주면 map을 사용하지 않아도 됐다.

{
  function solution(n) {
    return n
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);
  }
}

// ? 참고로 숫자로 형변환 시에는 Number()을 사용해도되지만 +변수 를 통해서도 숫자형변환이 가능하다.
// 하지만, 코드를 읽을 때 무슨 작동을하는지 명시해주기 위해서 Number을 사용
//============================================================================

// * 5.문제 이름: 모음 제거
// ? 문제 설명: 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// ! 제한사항
// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000

// TODO: 모음 배열을 담은 변수를 만들고(조건), 해당 조건에 하나라도 부합한다면 이 부분을 제거하고 string값을 리턴
// * replace -> 특정 문자 제거, 문자 모두 제거, 대소문자 구분없이 모두 제거

// ? 정규표현식에서  OR 연산자는 | 혹은 [] 로 묶어줄 수 있다.
// 관련 링크: https://chrisjune-13837.medium.com/%EC%A0%95%EA%B7%9C%EC%8B%9D-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC-%EC%98%88%EC%A0%9C%EB%A5%BC-%ED%86%B5%ED%95%9C-cheatsheet-%EB%B2%88%EC%97%AD-61c3099cdca8
function solution(my_string) {
  return my_string.replace(/a|e|i|o|u/g, '');
  // replace(/[aeiou]/g, "") 와 동일
}
console.log(solution('nice to meet you'));
