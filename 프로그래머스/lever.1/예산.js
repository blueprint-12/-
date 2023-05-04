// * 문제 이름: 예산

// ? 문제 설명
// 부서별로 물품을 구매하는데 필요한 금액을 조사(배열에 담음)
// 전체 예산이 정해져있기 때문에 모든 부서의 물품을 구매해줄 수는 없다.
// 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하고 싶다. (오름차순 정렬)

// 부서별로 신청한 금액이 들어있는 배열 d, 전체예산 budget 매개변수
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return

// ! 제한 사항
// 전체 부서의 개수는 1이상 100이하, i = 0; d.length < 100 까지
// d의 각 원소는 부서별로 신청 금액 1이상 100,000이하의 자연수 (양의 정수)
// budget 1이상 10,000,000 이하의 자연수(양의 정수)

//🌝sort()할 때, 매개변수없이 쓰면 기본값이 오름차순인줄 알았는데, 문자순서가 default라서 a - b로 명시해줘야 한다.

{
  function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    d.sort((a, b) => a - b);

    for (let i = 0; i < d.length; i++) {
      answer++;
      sum += d[i];

      if (sum > budget) {
        answer--;
        break;
      }
    }
    return answer;
  }
  // console.log(solution([2, 2, 3, 3], 10)); 디버깅용
}

{
  //🤸‍♀️다른 사람 풀이
  // while 과 reduce, pop을 쓴 조합도있었지만 효율성이 떨어지는 거 같았다.

  function solution(d, budget) {
    let answer = 0;
    let index = 0;
    d.sort((a, b) => a - b);

    //while을 사용하지만 내부적으로 reduce를 사용하지 않기 떄문에 이 코드가 더 효율적으로 보인다.
    while (answer + d[index] <= budget) {
      answer += d[index];
      index++;
    }
    return index;
  }
}

// * 문제 이름: 시저 암호

// 문제 설명:
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화방식을 시저 암호라고 한다.
// "AB"는 1밀면 "BC"가 되고, 3만큼 밀면 "DE"가 된다.
// "z"는 1만큼 밀면 "a"가 된다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수를 구현해라

// !제한 조건
// 공백은 아무리 밀어도 공백이다. =>(공백은 제거한다.)
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있다.
// s의 길이는 8000이하
// n은 1이상 25이하인 자연수

//split() => join()

// 대문자를 변환한 값에 n을 더한 값이 90을 넘어가면 Z를 넘어가는 값이기 때문에 다시 처음 A로 돌아가기위해 아스키 코드 값에 +4한 값에 -26을 해준 값

// 그렇지 않을 경우 아스키코드값에 +4한 값을 리턴
{
  function solution(s, n) {
    return s
      .split('')
      .map((value) => {
        if (value === ' ') return value;
        return value.toUpperCase().charCodeAt() + n > 90
          ? String.fromCharCode(value.charCodeAt() + n - 26)
          : String.fromCharCode(value.charCodeAt() + n);
      })
      .join('');
  }
}

// 다른 사람 풀이
// 아스키없이 한 코드 중 가장 깔끔
{
  function solution(s, n) {
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var answer = '';

    for (var i = 0; i < s.length; i++) {
      var text = s[i];
      if (text == ' ') {
        answer += ' ';
        continue;
      }
      var textArr = upper.includes(text) ? upper : lower;
      var index = textArr.indexOf(text) + n;
      if (index >= textArr.length) index -= textArr.length;
      answer += textArr[index];
    }
    return answer;
  }
}
