// TITLE: 숫자 문자열과 영단어

//? 문제 설명
/* 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요. */

// 키포인트 s에 들어간 문자열 애들을 어떻게 구분해서 순서는 보장되게 넣을 것인가?
// 정규표현식을 잘 사용할 것
// ! 답을 보면 오름차순, 요소끼리 중복없음
function solution(s = '1two34') {
  const engArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  if (/^[0-9]+$/.test(s)) {
    return parseInt(s);
  }

  for (let i = 0; i < engArr.length; i++) {
    const regex = new RegExp(engArr[i], 'g');
    s = s.replace(regex, i);
  }
  return parseInt(s);
}

//다른 사람 풀이
// 으아악 split메서드
// 정규표현식 굳이 쓰지 않아도 됐음 ㅠ ㅠ
// ? 설명 추가: 단어로 split했던 array를 join으로 다시 묶으면서 그 사이에 i(해당 숫자)를 넣어주는 것
{
  function solution(s = '1two34') {
    let numbers = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
    let answer = s;

    for (let i = 0; i < numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      answer = arr.join(i);
    }

    return Number(answer);
  }
}
