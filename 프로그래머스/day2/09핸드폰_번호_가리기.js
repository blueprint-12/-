/*
✨문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

✨제한 조건
phone_number는 길이 4 이상, 20이하인 문자열입니다.

✨입출력 예
phone_number	return
"01033334444"	"*******4444"
"027778888"	"*****8888"
*/

//key word : Array.slice(시작index, 끝index) ->  끝을 생략하면 맨끝까지 범위 ,
// 시작부터 마지막(바로 전)까지의 복사본을 배열 객체로 반환(새배열 반환), 원본 배열 수정 x

function solution(phone_number) {
  let elements_sum = ''; //요소들이 string타입이니까 '' 빈배열로 초기화
  let answer = '';
  let front_nums = '';
  let back_nums = '';
  //들어오는 문자열의 길이가 어떻게 되는 지 모르니까 for문을 돌려서 해당 요소를 하나씩 분해
  for (let i = 0; i < phone_number.length; i++) {
    elements_sum += phone_number[i];
    //slice 요소값의 시작지점: -4 (뒤부터 4개), 끝지점: 생략 (생략하면 요소끝까지 범위)
  }
  //뒷 번호: 맨 뒤부터 4번째 요소까지 분리
  back_nums = elements_sum.slice(-4);
  //앞 번호: 맨 처음 요소부터 뒤에서 4번째 요소까지
  front_nums = elements_sum.slice(0, -4);
  // 문자열 + 문자열 연산, *을(front_nums의 길이만큼 반복) + 뒷번호
  answer = '*'.repeat(front_nums.length) + back_nums;
  return answer;
}
// console.log(solution('01044527830'));

// ✨다른 사람 solution - 정규표현식
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}
