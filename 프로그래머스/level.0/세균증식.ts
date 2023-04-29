// ? 실수, 정수 (실수 > 정수)
// flo 는 0 이상 100 이하

// parseInt 사용(인자가 string일때): 함수의 문자열 인자를 파싱하여 특정 진수의 정수를 반환

// Number.toFixed() : 소수점 이하 숫자 버리고 정수만 리턴
// Math.trunc() 소수 부분을 모두 버리고 정수만 리턴
{
  function solution(flo) {
    return Math.trunc(flo);
  }
}

//다른 사람 풀이 Math.floor() 사용

// * title: 대문자로 바꾸기
// ? 알파벳으로 이루어진 문자열 myString이 주어진다. 모든 알파벳을 대문자로 변환하여 return

{
  function solution2(myString: string) {
    return myString.toUpperCase();
  }
}

// *title: 조건에 맞게 수열 변환하기 3

/* 정수 배열 arr 와 자연수 k가 주어진다.
만약 k가 홀수라면 모든 원소에 k를 곱하기
짝수라면, 모든 원소에 k를 더하기
변환 후의 arr를 리턴하는 함수를 구현
(k는 1부터 100까지 양수) */
{
  function solution3(arr: number[], k: number) {
    if (k % 2 === 0) {
      return arr.map((num) => num + k);
    }

    if (k % 2 === 1) {
      return arr.map((num) => num * k);
    }
  }
}

// *title: 문자열의 앞의 n글자

/* 문자열 my_string과 정수 n이 매개변수로 주어질 때,
my_string 의 앞의 n글자로 이루어진 문자열을 return 하는 솔루션 */
{
  function solution4(my_string: string[], n: number) {
    return my_string.slice(0, n);
  }
}

// *title: 세균 증식

// n은 1이상 10이하 (세균 수)
// t는 1이상 15이하 (시간)
// => 둘 다 양수
{
  function solution5(n: number, t: number) {
    for (let i = 1; i <= t; i++) {
      n *= 2;
    }
    return n;
  }
}

//세균 증식 다른 사람 풀이 1
{
  //2진수, 시프트 연산
  function solutionEx1(n, t) {
    return n << t;
  }
}
//다른 사람 풀이 2
{
  // Math.pow() 확인
  function solutionEx2(n, t) {
    return n * Math.pow(2, t);
  }
}
