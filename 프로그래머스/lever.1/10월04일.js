// 짝수면 Even 홀수면 Odd 리턴
// 조건 num은 정수 -> 타입 판별 필요 X
function solution(num) {
  let answer = num % 2 === 0 ? 'Even' : 'Odd';
  return answer;
}

// solution(24);

//다른 사람 코드
{
  //0은 false라는 발상을 이용하심
  function evenOrOdd(num) {
    return num % 2 ? 'Odd' : 'Even';
  }
}
//===============================
//✅약수의 합
//정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수구현
//제한사항: n은 0 이상 3000이하인 정수입니다

//num의 약수는 num나누기 약수를 했을 때 나머지가 0
{
  function solution(num) {
    const answer = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        answer.push(i);
      }
    }
    return answer.reduce((sum, curr) => {
      return sum + curr;
    }, 0);
  }
}
// 다른 사람 solution
// 배열을 굳이 쓰지 않아도된다.
//조건문에서 해당 값의 나머지가 0이라면 sum에 i값을 더해주면 된다.

{
  function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) sum += i;
    }
    return sum;
  }
}

//===============================
//✅나머지가 1이 되는 수 찾기
/* 자연수 n이 매개변수로 주어집니다.
 n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

 자연수는 0을 포함하지 않는 양의 정수

 제한사항: 3 ≤ n ≤ 1,000,000 (n은 3이상)
 */
//자연수n을 x로 나누면 나머지가 1이고 x는 가장 작은 자연수를 리턴해야함
{
  function solution(n) {
    if (n >= 3) {
      for (let i = 1; i < n; i++) {
        if (n % i === 1) {
          return i;
        }
      }
    }
  }
  solution(12);
}
//다른 사람 풀이1
// 디폴트값이랑 while문에 증감연산자 사용
{
  function solution(n, x = 1) {
    while (x++) {
      if (n % x === 1) {
        return x;
      }
    }
  }
}
// 다른 사람 풀이2
{
  function solution(n) {
    let answer = 0;
    for (let i = 0; i < n; i++) {
      if (answer > 0) {
        break;
      }

      if (n % i == 1) {
        answer = i;
      }
    }

    return answer;
  }
}
//===============================
//✅나누어 떨어지는 숫자 배열
/*문제 설명
array의 각 element 중 divisor로 나누어 떨어지는 값을 
오름차순으로 정렬한 배열을 반환하는 함수, 
solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

제한사항:
- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

입출력 예시:
arr	    divisor   	return
[5, 9, 7, 10]	5	   [5, 10]
[2, 36, 1, 3]	1	   [1, 2, 3, 36]
[3,2,6]	     10	   [-1]
*/
{
  function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % divisor == 0) {
        answer.push(arr[i]);
      }
    }
    if (answer.length == 0) {
      answer.push(-1);
    }
    //오름차순 정렬
    return answer.sort((a, b) => a - b);
  }
}
//다른 사람 풀이1 - Array.filter() 활용
{
  function solution(arr, divisor) {
    let answer = arr.filter((v) => v % divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
  }
}
// 다른 사람 풀이2 - Array.map() 활용
{
  function solution(arr, divisor) {
    let answer = [];
    arr.map((o) => {
      o % divisor === 0 && answer.push(o);
    });
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
  }
}
// 2번째 솔루션은 왜 굳이 map을 쓴 지 모르겠다 foreach를 사용해도 될 거 같은데
