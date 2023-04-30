// * 2023 04 30 프로그래머스 lv.0 문제 풀이 (총 5개)

// * 1.문제이름: 주사위의 개수

/* 문제 설명 
정육면체 모양의 주사위 -> 직육면체 모양의 상자에 최대한 많이 채우고싶음
: 들어갈 수 있는 주사위의 최대 개수 return하는 solution 
상자의 가로 box[0], 세로 box[1], 높이 box[2]가 저장되어있는 배열 box
주사위 모서리의 길이 정수 n 매개변수 */

// ? n은 box의 원소와 같거나 작다

// ? 주사위를 상자에 최대 몇 개나 넣을 수 있는 지 계산하는것
// * 가로, 세로, 높이 별 주사위 모서리(n)가 몇개나 들어가는 지 확인한 다음,
// 직육면체 부피를 구하는 공식인 가x세x높 을 처리해서 리턴하도록 하는 함수를 작성하면 된다.

//? 최소공배수 활용문제
/* 입출력 예시 
box	n	result
[1, 1, 1]	1	1
[10, 8, 6]	3	12 */

{
  function solution(box, n) {
    let a, b, c;
    a = Math.floor(box[0] / n);
    b = Math.floor(box[1] / n);
    c = Math.floor(box[2] / n);
    return a * b * c;
  }
}

//다른 사람 풀이 1
// ✅구조 분해 할당으로 직관적으로 만듦
// Math.floor() 혹은 parseInt() 로 정수부분을 받는듯

{
  function solution(box, n) {
    let [width, length, height] = box;

    return (
      Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
    );
  }
}
//다른 사람 풀이 2
// ✅reduce 사용..
{
  function solution(box, n) {
    return box.reduce((acc, v) => acc * Math.floor(v / n), 1);
  }
  // 누적값, 현재값 => 누적값 초기(1)에 Math.floor한 현재값/n -> 이후 누적 곱하기
}

// =================================================================================

// * 2.문제이름: 문자열 정렬하기(1)

// my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수 작성

// ? my_string에는 숫자가 한 개 이상 포함되어있음
// 또한, 영어 소문자 또는 0-9 까지 숫자로 이루어져 있음
// => 숫자만 골라서 오름차순

// 정규표현식 사용 => /\d/g  처음 사용했을 때 처음 match되는 애만 뽑혀서

/* /\d/g 정규표현식을 match()에 활용 => match는 pattern(정규표현식)에 일치하는 모든 부분을 배열에 각각 담아 반환한다. */

// 오름차순 정렬하려면 string -> number로 형변환하고 arr.sort(활용)
// arr.sort((a,b)=> a - b); 오름차순 정렬
// ? 어차피 arr.sort() 의 기본값이 오름차순이라 매개변수 안 넘겨줘도 된다.
{
  function solution(my_string) {
    return my_string
      .match(/\d/g)
      .map((numString) => +numString)
      .sort((a, b) => a - b);
  }
}

// =================================================================================

// * 3.문제이름: 직각삼각형 출력하기
// 자바했을 때 극혐했던 별찍기 등장.

/* 문제설명: "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요. */

// ? n은 1부터 10까지

// node.js말고 그냥 js로 하니까 라인사이즈 다른걸로 error

{
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on('line', function (line) {
    input = line.split(' ');
  }).on('close', function () {
    const num = Number(input[0]);
    let logStr = '';
    for (let i = 0; i < num; i++) {
      for (let j = 0; j <= i; j++) {
        logStr += '*';
      }
      logStr += '\n';
    }
    console.log(logStr);
  });
}

//다른 사람 풀이
//repeat 활용 , solution을 따로 빼서 사용
//입력값으로 받는 input[0] 번째 요소가 바로 n을 나타냄 -> string to Number로 형변환 (내 answer처럼 2중 for문은 필요없음)
{
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on('line', function (line) {
    input = line.split(' ');
  }).on('close', function () {
    solution(Number(input[0]));
  });

  function solution(n) {
    for (let i = 1; i < n + 1; i++) {
      console.log('*'.repeat(i));
    }
  }
}
// =================================================================================
// * 4.문제이름: 최댓값 만들기

//? 문제 설명: 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

/* numbers의 원소는 -10,000 ~ 10,000 까지
numbers의 길이는 2부터 100개 */

//내림차순 정렬하고 .. 그 다음에 양끝단에있는 2요소끼리 곱했을 때 값이 더 큰애를 리턴하면 될듯
{
  function solution(numbers) {
    numbers.sort((a, b) => b - a);
    const [first, second, backSecond, backFirst] = [
      numbers[0],
      numbers[1],
      numbers[numbers.length - 2],
      numbers[numbers.length - 1],
    ];
    return first * second > backFirst * backSecond
      ? first * second
      : backFirst * backSecond;
  }
}

// 다른 사람풀이에서 좋은 점: 나는 구조분해할당으로 좀더 직관적인 코드를 만들었지만 굳이 변수를 선언하지 않고도 Math.max()를 통해 둘 중에 큰 값을 리턴해줄 수 있었음
{
  function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(
      numbers[0] * numbers[1],
      numbers[numbers.length - 1] * numbers[numbers.length - 2],
    );
  }
}
// =================================================================================
// * 5.문제이름: n의 배수 고르기
/* 문제 설명: 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요. */

/* 입출력 예
n	numlist	result
3	[4, 5, 6, 7, 8, 9, 10, 11, 12]	[6, 9, 12]
5	[1, 9, 3, 10, 13, 5]	[10, 5]
12	[2, 100, 120, 600, 12, 12]	[120, 600, 12, 12] */

// ? filter()사용하면되겠다.

function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

// =================================================================================
// * 6.문제이름: 인덱스 바꾸기

/* 문제 설명
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요. */

// my_string[n1] 의 값을 my_string[n2]의 자리를 바꾸는 거
{
  function solution(my_string, num1, num2) {
    //my string을 복사한 배열을 만들어서 return할때는 다시 string으로 조인
    const result = [...my_string];
    result.splice(num1, 1, my_string[num2]);
    result.splice(num2, 1, my_string[num1]);
    return result.join('');
  }
}

// 다른 사람 풀이: ✅구조분해할당 활용하여 해당 index요소끼리 자리 스위칭하는 로직 temp를 사용하지 않아도 됨
{
  function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
  }
}

// =================================================================================
// * 7.문제이름: 배열 회전시키기
/* 문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요. */

// shift, unshift, pop 이 내장메서드로 구현돼있다니 유레카임.
// 반환값이 각각 좀 다르므로 확인해볼 필요가 있음
// ! n+1 시켜야한다는 생각에 for문부터 생각했는데 모든 요소의 자리가 바뀔 필요없이 방향대로 맨앞 맨뒤 요소의 자리만 바뀌면 됐던 문제

//? direction은 left / right 둘 중 하나의 string
// 한 칸씩 회전=> 해당 방향으로 n+1 시키라
{
  function solution(numbers, direction) {
    if (direction === 'left') {
      numbers.push(numbers.shift());
      return numbers;
    }
    if (direction === 'right') {
      numbers.unshift(numbers.pop());
      return numbers;
    }
  }
}

// 다른 사람 풀이
// 흠 굳이 변수를 또 생성하지 않아도 될 거 같고..
// 나는 if절을 두개로 썻지만 if else로 처리하셨음
{
  function solution(numbers, direction) {
    var answer = [];

    if ('right' == direction) {
      numbers.unshift(numbers.pop());
    } else {
      numbers.push(numbers.shift());
    }

    answer = numbers;

    return answer;
  }
}

// =================================================================================
// * 8.문제이름: 외계행성의 나이
/* 문제 설명
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요. */

//? 제한사항
/* age는 자연수입니다.
age ≤ 1,000
PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다. */

// 입출력 예 #1

// age가 23이므로 "cd"를 return합니다.

{
  function solution(age) {
    const alphabetArr = 'abcdefghij'.split('');
    const result = String(age)
      .split('')
      .map((char) => alphabetArr[char])
      .join('');
    return result;
  }
}

//다른 사람 solution
// ✅굳이 변수를 따로 만들 필요가 없고 나이를 나타낸다는 점에서 a ~ j 까지(0-9)10진수라는 걸 까먹고있었음
// string도 배열처럼 index를 가지고 있기 때문에 변수는 더욱 필요없음
{
  function solution(age) {
    return age
      .toString()
      .split('')
      .map((v) => 'abcdefghij'[v])
      .join('');
  }
}
// =================================================================================
// * 9.문제이름: 가장 큰 수 찾기

/* 문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요. */

//제한 사항:
/* 1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다. */

{
  function solution(array) {
    const max = Math.max(...array);
    return [max, array.indexOf(max)];
  }
}

// =================================================================================
// * 10.문제이름: 피자 나눠 먹기(2)

/* 문제 설명
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요. */

// 1개의 피자 6조각으로 나눔
//? 나눠 먹을 사람의 수: n

//제한 사항: 1 ≤ n ≤ 100
{
  function solution(n) {
    let answer = 1;
    while ((answer * 6) % n !== 0) {
      answer++;
    }
    return answer;
  }
}

//다른 사람 풀이
// ✅솔직히 내 풀이는 잘 이해가 가지 않는다.
// 이 코드가 더 직관적이고 좋은 거 같다.
{
  const solution = (n) => {
    let piece = 6;

    while (true) {
      if (piece % n === 0) {
        break;
      }
      piece += 6;
    }

    return piece / 6;
  };
}
// 다른 사람 풀이 2
{
  function solution(n) {
    //피자가 1개로 시작하고, 피자 * 6의 나머지 n이 true가 될때까지 pizza ++인데.. 나머지가 0 즉, falsy한 값이되어야 딱 떨어지는 값이다.
    // 이 풀이도 너무 좋다.
    let pizza = 1;
    while ((pizza * 6) % n) {
      pizza++;
    }
    return pizza;
  }
}

// =================================================================================
// * 11.문제이름: 369게임
/* 문제 설명
머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요. */
{
  function solution(order) {
    const result = String(order)
      .split('')
      .filter((num) => num === '3' || num === '6' || num === '9');
    return result.length;
  }
}

//다른 사람 풀이1
//✅정규표현식과 .matchAll() 활용
{
  function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
  }
}
//다른 사람 풀이2
//replace와 정규표현식 활용
//✅ 문자열로 형변환해줄때 order + "" 를 많이쓰는 거 같다. 나는 toString() 이나 String()이 더 직관적인거 같은데=> 성능상의 차이는 미세하다고 함 본인이 더 편한 것을 쓰면 된다.
{
  function solution(order) {
    return (order + '').replace(/[0,1,2,4,5,7,8]/g, '').length;
  }
}

//다른 사람 풀이3
//✅set을 활용하여 set의 has메서드 활용
{
  function solution(order) {
    const mySet = new Set([3, 6, 9]);
    return String(order)
      .split('')
      .filter((num) => mySet.has(Number(num))).length;
  }
}
