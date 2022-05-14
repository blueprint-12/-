// ✨문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 🎃이해하기: 1. 단어 s 는 들어오는 param을 가리킴
// 단어의 길이가 짝수면 가운데 두글자 반환
// 단어의 길이가 홀수라면 가운데 하나만 반환

// ✨제한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// ✨입출력 예
//  s	   return
// "abcde"	"c"
// "qwer"	"we"

// 키 메소드 Array.concat()
//concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
// 기존배열을 변경하지 않습니다.  -> concat이 좋은점 원본 유지
// 리턴값: 추가된 새로운 배열을 반환합니다.

//concat 예문 아래
//const alpha = ['a', 'b', 'c'];

// alpha.concat(1, [2, 3]);
// 결과: ['a', 'b', 'c', 1, 2, 3]

function solution(s) {
  let answer = '';
  if (s.length % 2 === 0) {
    answer = answer.concat(s[s.length / 2 - 1]); //
    // concat을 통해 문자열 인덱스 즉 s[?]번째 를 합쳐준다.
    answer = answer.concat(s[s.length / 2]);
    // 짝수는 중앙 두 개의 값을 반환해야 하므로 concat()을 두번 진행해서 answer에 담아준다.
  } else {
    answer = answer.concat(s[Math.floor(s.length / 2)]);
    // 홀수인 문자열의 길이를 2로 나누고 floor를 통해 소수점을 버려준다. -> 소수점을 왜 버려? * index는 0부터 시작
    // 해당 인덱스의 문자를 answer에 담아준다.
  }
  return answer;
}

//다른 사람 솔루션
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
