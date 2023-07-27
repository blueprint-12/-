// 제한 사항: 대소문자 구분, 공백도 문자로 취급
// 문자열 my_string이 주어졌을 때, 가장 첫번째 문자만 남기고 중복제거하기

//내 풀이
{
  function solution(str) {
    return str
      .split('')
      .filter((char, index, arr) => arr.indexOf(char) === index)
      .join('');
  }
}

// 다른 사람 풀이
// Set 활용, 요소의 중복을 제거하는 좋은 자료구조임
// string의 각 char들을 구조분해 할당하고 배열에 넣어주고.join("") 으로 온전한 문자열 반환

//? 너무 좋은 솔루션이다.
{
  function solution(my_string) {
    return [...new Set(my_string)].join('');
  }
}

// title: 분수의 덧셈

// 문제 설명:
/*
첫번째 분수의 분자 numer1, 분모 denom1 ,
두번째 분수의 분자 numer2, 분모 denom2 가 매개변수로 주어짐
두 분수를 더한 값을 기약분수로 나타냈을 때, 
분자와 분모를 순서대로 return [분자, 분모]  

* 기약분수: 분자와 분모가 서로소(둘의 공약수가 1밖에없는) 상태여서 (다시 말해 이미 약분이 다 끝난 상태) 더 이상 약분을 할 수 없는 분수를 의미
*/
//제한 사항: 0 < numer1, denom1, numer2, denom2 < 1,000 //전부 양의 정수

//입출력 예 #1
// 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
{
  function solution(numer1, denom1, numer2, denom2) {
    let a = numer1 * denom2 + numer2 * denom1;
    let b = denom1 * denom2;
    let maximum = 1;

    for (let i = 1; i <= a; i++) {
      if (a % i === 0 && b % i === 0) {
        maximum = i;
      }
    }
    return [a / maximum, b / maximum];
  }

  // 최대 공약수를 구하고 해당 값으로 분자, 분모를 나눠서 출력할 것
}

// 다른 사람 풀이=> 재귀함수를 사용하는 gcd 함수로 최대 공약수 추출
{
  function fnGCD(a, b) {
    return a % b ? fnGCD(b, a % b) : b;
  }

  function solution(denum1, num1, denum2, num2) {
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum / gcd, num / gcd];
  }
}

//? 위의 코드를 GPT한테 물어보았다.
{
  // 최대공약수를 구하는 함수
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function solution(num1, denom1, num2, denom2) {
    // 두 분수를 더함
    const numerator = num1 * denom2 + num2 * denom1;
    const denominator = denom1 * denom2;

    // 더한 분수를 기약분수로 만듦
    const commonFactor = gcd(numerator, denominator);
    const simplifiedNumerator = numerator / commonFactor;
    const simplifiedDenominator = denominator / commonFactor;

    return [simplifiedNumerator, simplifiedDenominator];
  }

  // 테스트
  console.log(solution(1, 2, 3, 4)); // 출력: [5, 4]

  //코드 설명: 위의 코드에서 gcd 함수는 재귀적인 방법으로 최대공약수를 구합니다. 그리고 solution 함수에서는 먼저 두 분수를 더한 뒤, 최대공약수를 구해서 분자와 분모를 나누어 기약분수로 만듭니다. 이렇게 하면 주어진 제한 사항에 맞게 두 분수를 더한 값을 기약분수 형태로 구할 수 있습니다.
}
