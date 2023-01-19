// 문제 설명
// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ s1, s2의 길이 ≤ 100 -> 배열의 최대 원소몇개
// 1 ≤ s1, s2의 원소의 길이 ≤ 10 -> 각 배열 값의 한 개당 길이
// s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
// s1과 s2는 각각 중복된 원소를 갖지 않습니다.

// 입출력 예
// s1	s2	result
// ["a", "b", "c"]	["com", "b", "d", "p", "c"]	2
// ["n", "omg"]	["m", "dot"]	0

// 입출력 예 설명
// 입출력 예 #1

// "b"와 "c"가 같으므로 2를 return합니다.
// 입출력 예 #2

// 같은 원소가 없으므로 0을 return합니다.

//for ... in 반복문: key 전용 (배열에 사용하기엔 의미가 없음)
//for ... of 반복문: es6에 추가된 새로운 컬렉션 전용 반복 구문, iterable 객체의 value 반복문

function solution(s1, s2) {
  let answer = [];
  for (i of s1) {
    for (j of s2) {
      if (i === j) {
        answer.push(i);
      }
    }
  }
  return answer.length;
}

//내 답은 이중 for문을 사용하였는데 성능적으로 좋은 코드는 아니다.
//그렇다면 가독성이라도 좋아야 하는데 내장 메서드를 활용하지 못한 점이 아쉽다.

// 다른 사람 풀이
// 검색 키워드로 js "교집합"을 구하는 공식 같은 것을 찾아보면 좋을 듯
// filter() : 해당 조건에 부합하는 요소를 새 배열에 리턴한다.
// includes() : 배열이 특정 요소를 포함하고 있는 지 판별한다. 반환값은 boolean
// includes 에 true값인 아이들만 새 배열로해서 반환한다.
// 간결하면서 의미가 명확한 좋은 코드 같다.
{
  function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
  }
}
