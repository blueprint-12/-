// TITLE: 문자열 정렬하기(2)

// 문제설명:
/*
영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, 
my_string 을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 
*/

// 제한사항:
// 0 < my_string 길이 < 100

// 입출력 예
/* 
my_string	result
"Bcad"	   "abcd"
"heLLo"	   "ehllo"
"Python"   "hnopty"
*/

// 입출력 설명 예 #1
// "Bcad"를 모두 소문자로 바꾸면 "bcad"이고 이를 알파벳 순으로 정렬하면 "abcd"입니다.

{
  function solution(my_string) {
    const answer = [...my_string.toLowerCase()].sort();
    return answer.join('');
  }
}

// TITLE: 합성수 찾기

// 약수는 무조건 1이상
// 합성수 = 소수만 제외한 수, 1보다 큰 자연수 중 1과 그 수 자신이외에 또 다른 수를 약수로 가지는 수로 정의

// 문제 설명: 합성수? 약수의 개수가 3개 이상인 수
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return 하도록

// 제한 사항: 1 <= n <= 100

function solution(n) {
  let count = 0;

  const isComposite = (num) => {
    // 1은 합성수가 아니므로 false 반환
    if (num === 1) {
      return false;
    }
    // 2부터 number-1까지의 수로 나누어지면 합성수이므로 true 반환
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return true;
      }
    }
    // 나누어지는 수가 없으면 합성수가 아니므로 false 반환
    return false;
  };

  for (let i = 1; i <= n; i++) {
    if (isComposite(i)) {
      count++;
    }
  }

  return count;
}
