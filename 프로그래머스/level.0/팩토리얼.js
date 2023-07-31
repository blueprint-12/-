// TITLE: 팩토리얼
// 문제설명: i!은 1부터 i까지 정수의 곱을 의미 5! = 5 ~ 1 까지 곱한거
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하시오

// !조건: i! <= n

//제한 사항: n은 0부터 3,628,800 사이 값(1! ~ 10!이 최대)

//접근 방향
//정수 n의 값보다 같거나 작아야한다.
// for문을 돌려서 i는 1부터시작하고 증감연산자를 사용
// while문 사용해도될듯?

{
  function solution(n) {
    let answer = 1;

    // 팩토리얼 구하는 공식
    // 조건식: i <= n도 동작하지만 3,628,800까지 범위므로 10으로 제한해도 ok
    for (let i = 1; i <= 10; i++) {
      answer *= i;

      // 내부 조건(1)으로 answer에 누적된 값이 n과 같으면 i를 리턴
      if (answer === n) {
        return i;
      }

      // 내부 조건(2)으로 answer에 누적된 값이 n보다 크다면 i-n를 리턴
      if (answer > n) {
        return i - 1;
      }
    }
  }
}
// 다른 사람 solution 'for'문 활용
{
  function solution(n) {
    // for문 초기값의 변수를 2개 선언했음 i, v
    // v 가 answer 과 같은 역할을 하는 듯
    // 조건식을 true로 줘서 while문처럼 썼음
    // i증감 v의 값이 n보다 커지면 i에서 -1한 값을 리턴
    for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
  }
}
//=============================================================
// TITLE: A로 B만들기

// 문제 설명: 문자열 before과 after가 매개변수로 주어질때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1, 아니라면 0을 return

// 두 매개변수의 길이는 같음 범위는 0초과 1,000미만

//내 풀이: 머리 안돌아가니까 그냥 막 어렵게 풀어버렸음;
{
  function solution(before, after) {
    const beforeArr = [...before];
    const afterArr = [...after];
    const canMake = () => {
      for (const char of afterArr) {
        const index = beforeArr.indexOf(char);
        if (index === -1) {
          return false;
        }
        before.splice(index, 1);
      }
      return true;
    };

    return canMake() ? 1 : 0;
  }
}

//다른 사람 풀이
//이 방법 아는데 ㅜㅜ예전에 했던 방법이라 까먹어버림.. 역시 계속 연습해야하구나
//?해설: 문자열을 쪼갠다음(배열) 정렬시킨다 그다음 다시 문자열로 마지막으로 비교
{
  function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('')
      ? 1
      : 0;
  }
}
//=============================================================

//TITLE: k의 개수

// 문제 설명: 1부터 13까지의 수에서, 1은 10,11,12,13 이렇게 총 6번 등장
// 정수 i, j, k 가 매개변수로 주어질 때, i부터 j까지 k가 몇번 등장하는지 return 하도록 solution 함수를 완성하자
// i와 j는 1이상 100,000이하
// k는 0이상 9이하

// 입출력 예시
// i	j	k	result
// 1	13	1	6
