// 2023 05 02

// *문제 이름: 최대공약수와 최소공배수

/* 문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다. */

// 제한 사항: 두 수는 1이상 ~ 1,000,000이하의 자연수 (양수)

//입출력 예시
/* n  m   return 
3 12    [3, 12]
2  5    [1 , 10] */



{
  function solution(n, m) {
    let gcd = 1;
    let lcm;

    //i = 2, 최대 공약수는 1보다 큰 자연수 중 가장 작은 값이기 때문
    // n, m의 최대공약수는 n과 m중 작은 값보다 큰 수가 될 수 없기 때문에 Math.min() 활용
    for (let i = 2; i <= Math.min(n, m); i++) {
      if (n % i === 0 && m % i === 0) gcd = i;
    }
    lcm = (n * m) / gcd;

    return [gcd, lcm];
  }
}

//위의 코드는 매개변수의 크기가 커지면 성능문제를 일으킬 수 있음 for문보다 훨씬 빠른 코드 -> 유클리드 알고리즘 적용한 코드 예시

{
  function solution(n, m) {
    let a = Math.max(n, m);
    let b = Math.min(n, m);
    let r = a % b;

    // while문에서 유클리드 알고리즘을 반복적으로 수행하여 최대 공약수 찾기
    // b = 최대공약수 저장
    while (r > 0) {
      a = b;
      b = r;
      r = a % b;
    }
    const gcd = b;
    const lcm = (n * m) / gcd;
    return [gcd, lcm];
  }
}

