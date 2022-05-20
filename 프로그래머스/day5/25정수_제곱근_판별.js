/*
✨정수 제곱근 판별

✨문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
 n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 
 ->if n == x**2 return (x+1)**2 
 else return -1

✨제한 사항
n은 1이상, 50000000000000 이하인 양의 정수입니다.
✨입출력 예
n	    return
121 	144
3	    -1
✨입출력 예 설명
입출력 예#1
    121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

입출력 예#2
    3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.
*/

// Math.sqrt() : 제곱근을 구해주는 math메소드
// -> 반환값: param으로 주어진 숫자에 루트를 씌웁니다. 숫자가 음수이면 NaN 반환
// 참고사항:sqrt()는 Math의 정적 메서드 이므로 만든
// Math 객체의 메서드가 아니라 항상 Math.sqrt()함수를 사용해야합니다. (Math는 생성자가 없습니다.)

// 살펴보면 좋을 거 같은 메소드 Math.pow(base, exponent)
// base 밑 값,  exponent (밑을 제곱하기 위해 사용하는) 지수/  반환값: 주어진 밑 값을 주어진 지수값으로 거듭제곱한 숫자 값
function solution(n) {
  let num = Math.sqrt(n);
  // 정수판별 내장함수 Number.inInteger() -> 주어진 값이 정수인지 판별 T, F 반환
  //num이 정수인지 판별하기 위해서 1로 나눴을 때 나머지가 0인지 확인(정수는 1로 나누면 항상 나머지가 0)
  // **2 -> 거듭제곱 연산자(**n / n은 지수)
  if (num % 1 === 0) return (num + 1) ** 2;
  else return -1;
}

// 내장 함수를 안쓴 solution

function nextSqaure(n) {
  let result = 0;
  let x = 0;
  while (x * x < n) {
    x++;
  }
  if (x * x == n) {
    x++;
    result = x * x;
  } else {
    result = 'no';
  }

  return result;
}
