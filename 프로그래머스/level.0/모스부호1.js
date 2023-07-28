// TITLE: 모스부호(1)

// 문제 설명:
// 문자열 letter 가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수 완성

// 제한사항:
/* 
1 ≤ letter의 길이 ≤ 1,000
return값은 소문자입니다.
letter의 모스부호는 공백으로 나누어져 있습니다.
letter에 공백은 연속으로 두 개 이상 존재하지 않습니다.
해독할 수 없는 편지는 주어지지 않습니다.
편지의 시작과 끝에는 공백이 없습니다.
*/

// 입출력 예
/*
    [letter]        [result]
".... . .-.. .-.. ---"	"hello"
".--. -.-- - .... --- -."	"python"
*/

{
  function solution(letter) {
    // morse key:string, val:string
    // 객체 key :value로 이루어짐
    // 모스 부호는 공백으로 이루어짐
    const morse = {
      '.-': 'a',
      '-...': 'b',
      '-.-.': 'c',
      '-..': 'd',
      '.': 'e',
      '..-.': 'f',
      '--.': 'g',
      '....': 'h',
      '..': 'i',
      '.---': 'j',
      '-.-': 'k',
      '.-..': 'l',
      '--': 'm',
      '-.': 'n',
      '---': 'o',
      '.--.': 'p',
      '--.-': 'q',
      '.-.': 'r',
      '...': 's',
      '-': 't',
      '..-': 'u',
      '...-': 'v',
      '.--': 'w',
      '-..-': 'x',
      '-.--': 'y',
      '--..': 'z',
    };
    return letter
      .split(' ')
      .map((val) => morse[val])
      .join('');
  }
}

// TITLE: 2차원으로 만들기

// 문제설명:
// 정수 배열 num_list와 정수 n이 매개변수로 주어진다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

// num_list가 [1,2,3,4,5,6,7,8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경한다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경한다.

// 제한사항
/*
num_list의 길이는 n의 배 수개입니다.
0 ≤ num_list의 길이 ≤ 150
2 ≤ n < num_list의 길이
*/

// 내 풀이 (직관적이지 못함)
{
  function solution(num_list, n) {
    return Array.from({ length: Math.ceil(num_list.length / n) }, (_, index) =>
      num_list.slice(index * n, index * n + n),
    );
  }
  solution([1, 2, 3, 4, 5, 3, 2, 5], 2);
}

// 다른 사람 풀이(1) -while 활용
{
  function solution(num_list, n) {
    const answer = [];

    while (num_list.length) {
      answer.push(num_list.splice(0, n));
    }

    return answer;
  }
}

//다른 사람 풀이(2) -ES6 활용
{
  function solution(num_list, n) {
    return Array(num_list.length / n)
      .fill([])
      .map(() => num_list.splice(0, n));
  }
}
