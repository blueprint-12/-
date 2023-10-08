//TITLE: 한 번만 등장한 문자

//문제 설명 :
/* 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다. */

//제한 사항:

/* 0 < s의 길이 < 1,000
s는 소문자로만 이루어져 있습니다. */

//입출력 예
/* s	result
"abcabcadc"	"d"
"abdc"	"abcd"
"hello"	"eho" */

//접근방법

//1. 1번만 등장하는 문자열 추출하기
// 2.sort로 알파벳순 정렬?

{
  function solution(s = 'abcabcadc') {
    const charCount = {};
    const result = [];

    //문자열 순회하면서 각 알파벳의 등장 횟수를 카운트
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }

    // 등장 획수가 1인 알파벳을 결과 배열에 추가
    for (let char in charCount) {
      if (charCount[char] === 1) {
        result.push(char);
      }
    }
    return result.sort().join('');
  }
}

// 내 풀이 문제점: 문자열에서 1번만 등장한 것을 추출해야하는데 중복제거 로직을 짜고있어서 계속 원하는 값이 안나왔음 => 질문을 제대로 읽고 의도대로 풀어가고있는지 확인 필요

//다른 사람 풀이
// indexOf와 lastIndexOf 를 활용함 천재인가.
// 왼쪽부터 오른쪽에서 각자가 마주하는 최초값이 동일하다 === 값이 1개 뿐이다.
{
  function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
  }
}
