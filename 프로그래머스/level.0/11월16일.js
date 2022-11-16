//✅정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록
// solution 함수를 작성해주세요.
//제한 사항: 0 < n ≤ 1000

{
  const solution = (n) => {
    const arr = [];
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 0) {
        arr.push(i);
      }
    }
    return arr.reduce((pre, curr) => pre + curr, 0);
  };
}

//다른 사람 풀이
//애초에 초기값을 2부터 잡고 짝수니까 공차가 2그냥 2씩 넘는 요소들을 answer에 더해서 리턴.
//후기: 쉽게 생각해보는 연습을 하자.
{
  function solution(n) {
    var answer = 0;

    for (let i = 2; i <= n; i += 2) {
      answer += i;
    }

    return answer;
  }
}

// ✅두 수의 나눗셈
// 나: Math.trunc() 사용

{
  function solution(num1, num2) {
    let raw = (num1 / num2) * 1000;
    return Math.trunc(raw);
  }
}
//다른 사람 solution 1
//Math.floor() 사용
{
  const solution = (num1, num2) => Math.floor((num1 / num2) * 1000);
}
//다른 사람 solution 2
//parseInt 사용(정수만 반환)
{
  function solution(num1, num2) {
    return parseInt((num1 / num2) * 1000);
  }
}
//✅ 배열의 평균값
{
  function solution(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0) / numbers.length;
  }
}
//다른 사람 solution
//for of .. & += (더하기 할당)
//복합대입연산자 +=,  -=,  *=,  /=
{
  value += 10;

  //위 코드와 같은 의미
  value = value + 10;
}
{
  function solution(numbers) {
    var answer = 0;
    for (i of numbers) {
      answer += i;
    }
    return answer / numbers.length;
  }
}
//✅중복된 숫자 개수
{
  function solution(array, n) {
    const answer = [];
    for (i of array) {
      if (i === n) {
        answer.push(i);
      }
    }
    return answer.length;
  }
}
//다른 사람 solution 1
//filter 메소드 왜 생각못했지 ㅠ ㅋㅋ
{
  function solution(array, n) {
    return array.filter((v) => v === n).length;
  }
}
//다른 사람 solution 2
// 클래식한 답변
{
  function solution(array, n) {
    var answer = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] == n) {
        answer++;
      }
    }
    return answer;
  }
}

//✅피자 나눠 먹기(1)
/*
 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
 피자를 나눠먹을 사람의 수 n이 주어질 때,
 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
 */
//제한 사항:  1 ≤ n ≤ 100
{
  function solution(n) {
    return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
  }
}
//다른 사람 solution
//Math.ceil()
{
  Math.ceil(0.95); // 1
  Math.ceil(4); // 4
  Math.ceil(7.004); // 8
  Math.ceil(-0.95); // -0
  Math.ceil(-4); // -4
  Math.ceil(-7.004); // -7
}
{
  function solution(n) {
    return Math.ceil(n / 7);
  }
}

// 배열 뒤집기
{
  function solution(num_list) {
    return num_list.reverse();
  }
}

//✅문자열 뒤집기
{
  function solution(my_string) {
    return my_string.split('').reverse().join('');
  }
}

//✅최대값 만들기(1)
/* 
정수 배열 numbers가 매개변수로 주어진다. 
numbers 의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return 하도록 solution 함수를 완성
*/
{
  function solution(numbers) {
    //내림차순 정렬한 다음에 가장 큰 애들끼리 곱해서 리턴
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
  }
}
//✅피자 나눠 먹기 (3)
/*
머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 
피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, 
n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 
시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/
//제한 사항
/*
2 ≤ slice ≤ 10
1 ≤ n ≤ 100
*/
{
  function solution(slice, n) {
    return Math.ceil(n / slice);
  }
}

//✅삼각형의 완성조건(1)
/*
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
세 변으로 삼각형을 만들 수 있다면 1, 
만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
*/
//제한사항
/* sides의 원소는 자연수입니다.
 sides의 길이는 3입니다.
 1 ≤ sides의 원소 ≤ 1,000
 */
{
  function solution(sides) {
    //sides 는 3개의 변 길이를 원소로 가진 배열
    //내림차순 정렬 or 그냥 가장 큰애 고르기 ? , 내림차순 정렬해야 함 나머지 2개도 쓰니까
    sides.sort((a, b) => b - a);
    return sides[0] < sides[1] + sides[2] ? 1 : 2;
  }
}

//✅배열 두 배 만들기
{
  function solution(numbers) {
    return numbers.map((x) => x * 2);
  }
}

//✅편지
/*
 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 
 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며,
 편지를 가로로만 적을 때, 축하 문구 message를 
 적기 위해 필요한 편지지의 
 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
*/
//제한 사항
/*
제한사항
    공백도 하나의 문자로 취급합니다.
    1 ≤ message의 길이 ≤ 50
    편지지의 여백은 생각하지 않습니다.
    message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다
*/
{
  function solution(message) {
    return message.length * 2;
  }
}
//✅짝수 홀수 개수
{
  function solution(num_list) {
    const odd = [];
    const even = [];
    for (let i of num_list) {
      i % 2 === 0 ? even.push(i) : odd.push(i);
    }
    return [even.length, odd.length];
  }
}
//다른 사람 solution
//신기하다
{
  function solution(num_list) {
    var answer = [0, 0];

    for (let a of num_list) {
      answer[a % 2] += 1;
    }

    return answer;
  }
}

//✅배열 원소 길이
// 문제 설명
// 문자열 배열 strlist가 매개변수로 주어집니다.
// strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를
// 완성해주세요.

// 제한사항
// 1 ≤ strlist 원소의 길이 ≤ 100
// strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

{
  function solution(strlist) {
    var answer = [];
    return answer;
  }
}
