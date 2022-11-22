//✅베열 원소의 길이
//문제 설명: 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요
// 제한사항: 1 ≤ strlist 원소의 길이 ≤ 100
// strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

// 예시: ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.

//고려사항: .length 가 특수문자도 카운트하는 지?
//for문 말고 내장함수 사용하는 것이 좋을 거 같다.
//그러면 원본 배열을 변형하지 않고 새배열을 반환하는 메서드 사용하자  -> map

{
  function solution(strlist) {
    return strlist.map((el) => el.length);
  }
}

//다른 사람 solution
// ruduce 사용
{
  function solution(strlist) {
    return strlist.reduce((a, b) => [...a, b.length], []);
  }
}
//for문 사용
{
  function solution(strlist) {
    var answer = [];

    for (let i = 0; i < strlist.length; i++) {
      answer = [...answer, strlist[i].length];
    }

    return answer;
  }
}
//✅점의 위치 구하기
//문제 설명: 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
// 제1사분면 x,y 양수
// 2 : x음수, y 양수
// 3 : x,y 음수
// 4: x양수, y음수

// dot은 [x,y] 배열
// 리턴값은 1,2,3,4 사분면
{
  function solution(dot) {
    const [x, y] = dot;

    if (x >= 0) {
      return y >= 0 ? 1 : 4;
    } else {
      return y < 0 ? 3 : 2;
    }
  }
}

//다른 사람 solution
{
  function solution(dot) {
    const [num, num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
  }
}
//다른 사람 solution 2
{
  function solution(dot) {
    return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
  }
}

//✅배열 자르기
//문제 설명
//정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
// 정수 배열 numbers는 오름차순으로 정렬된 배열, 길이순서 numbers > num2 > num1
// 숫자 2개 둘 다 양수
// slice 사용-> 원본 배열 훼손 x
// splice -> 기존 배열의 요소를 변경 원본 훼손
{
  function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
  }
}
//다른 사람 풀이 for문
{
  function solution(numbers, num1, num2) {
    var answer = [];

    for (let i = num1; i < num2 + 1; i++) {
      answer.push(numbers[i]);
    }

    return answer;
  }
}
//✅문자 반복 출력하기
// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
// 제한 사항
// 2 ≤ my_string 길이 ≤ 5
// 2 ≤ n ≤ 10
// "my_string"은 영어 대소문자로 이루어져 있습니다.
{
  function solution(my_string, n) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
      answer += my_string[i].repeat(n);
    }
    return answer;
  }
}
//다른 사람 solution
//map과 repeat을 생각안한 건 아니지만 join을 굳이쓰기 싫어서 그냥 했음
//놓친게 있다면 구조분해를 통해서 string값을 쪼갤 생각을 못했다는 것

{
  function solution(my_string, n) {
    var answer = [...my_string].map((v) => v.repeat(n)).join('');
    console.log(answer);
    return answer;
  }
}
//다른 사람 solution 2
// reduce는 항상 봐도 새롭군.. 초기값관련 다시 보기
{
  function solution(my_string, n) {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '');
  }
}

//✅ 특정 문자 제거하기
//문제 설명
//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// letter은 길이가 1인 영문자입니다.
// my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
// 대문자와 소문자를 구분합니다.

//특정문자 모두 -> replaceAll(), *대소문자 구별함
{
  function solution(my_string, letter) {
    return my_string.replaceAll(letter, '');
  }
}

//다른 사람 solution
// split 에 인자로 넘겨지는애는 separator, limit
// separator은 문자열 또는 분할이 발생해야하는 위치를 설명하는 패턴, 일반적인 예는 정규 표현식?
{
  function solution(my_string, letter) {
    const answer = my_string.split(letter).join('');
    return answer;
  }
}

//다른 사람 solution 2
// 정규표현식 객체 생성
{
  function solution(my_string, letter) {
    let reg = new RegExp(letter, 'g');
    return my_string.replace(reg, '');
  }
}
