//양꼬치 n 12000
//음료수 k 2000
//조건 n이 10의 배수이면 -k

//와 레벨 0인데 너무 어렵게 생각하고 풀어서 망함 1시간 소요

//다른 사람 답 아래와 같음
//~~연산자 Math.floor()과 동등하게 쓰이는 연산자
{
  let num = '22.432';
  console.log(~~num); // 22
}
//~ (틸트), C언어와 마찬가지로 비트로 부정하는 연산자 -(n+1) 이런 식이 성립 문자열 메서드인 indexOf()로 논리식을 짤 수 있음

{
  function solution(n, k) {
    return n * 12000 + k * 2000 - parseInt((n / 10) * 2000);
  }
}
{
  function solution(n, k) {
    let aa = parseInt(n / 10);
    return n * 12000 + (k - aa) * 2000;
  }
}

function solution(n = 1, k = 0) {
  let 양꼬치값 = n * 12000;
  let 음료수값 = k * 2000;
  let 서비스값;
  let answer;

  let n자릿수 = String(n).length - 1;

  switch (n자릿수) {
    case 0:
      return (answer = 양꼬치값 + 음료수값);

    case 1:
      for (let i = 1; i <= n; i++) {
        if (i % 10 === 0) {
          console.log(n);
          let numString = +String(n)[0];
          서비스값 = numString * 2000;
        }
      }
      return (answer = 양꼬치값 + (음료수값 - 서비스값));
    case 2:
      for (let i = 1; i <= n; i++) {
        if (i % 100 === 0) {
          let numString = +String(n).substring(0, 2);
          서비스값 = numString * 2000;
        }
      }

      return (answer = 양꼬치값 + (음료수값 - 서비스값));

    default:
      return;
  }
}
//회고: 레벨0 짜리 문제를 너무 어렵게 생각하고 문제를 풀었다.
// 답이 최대 20분 안으로 안나온다면 답지를 그냥 보는 것이 더 효율적
