/*
✨2016년 a월 b일이 무슨 요일일까?

✨문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

✨제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

✨입출력 예
a	b	result
5	24	"TUE"
*/

// 키워드 : new Date() , Date 객체 사용
// Date 객체는 기본적으로 7가지의 형식 출력을 제공한다.
//Date 객체가 제공하는 getFullYear(), getMonth(), getDate() 함수를 사용해서 Date 날짜 형식을 yyyy-MM-dd 형태로 정의해서 출력할 수 있습니다.

// slice(0,3)
function solution(a, b) {
  //const dayOfweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  //new Date(년도, 월, 일)  a - 1? 월은 0부터 시작하기 때문에  param값 -1
  //.slice로 처음부터 3글자만 잘라낸 뒤-> toUpperCase로 문자열을 전체를 대문자로 변환
  //.slice로 0부터 3까지의
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}

// console.log(new Date(2016, 2, 5).toString()); //Sat Mar 05 2016 00:00:00 GMT+0900 (대한민국 표준시)
