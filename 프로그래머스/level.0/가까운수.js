//? TITLE: 가까운 수

// 문제 설명: 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

//! 제한 사항
/* 
1 ≤ array의 길이 ≤ 100
1 ≤ array의 원소 ≤ 100
1 ≤ n ≤ 100
가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다. 
*/

// 입출력 예
/* array	    n	    result
[3, 10, 28]	    20	    28
[10, 11, 12]	13	    12 
*/

// array.sort(); array.reduce((acc, cur) => {}, array[0]);

{
  function solution(array, n) {
    array.sort();
    let closestNumber = array[0];
    let minDifference = Math.abs(n - array[0]);

    for (let i = 1; i < array.length; i++) {
      const currentDifference = Math.abs(n - array[i]);

      if (currentDifference < minDifference) {
        minDifference = currentDifference;
        closestNumber = array[i];
      }
    }

    return closestNumber;
  }
}

// 다른 사람 풀이 (1)
// Math.abs() 로 절대값이 가장 작은 수를 return 하는 것은 생각하긴했는데 reduce를 같이 사용하다가 꼬여서 구현실패함 아래는 Math.abs()와 3항연산자 조합으로 코드를 만들었다.

//코드 해설: Math.abs(n-a) - Math.abs(n-b) 를 계산하여 두 숫자 a, b 사이의 차이를 비교한다. 이렇게 하면 n에 가까운 숫자가 가장 먼저 오게된다. => 즉 배열이 n에 가까운 순서로 정렬된다.
// 만약 두 숫자의 절대값 차이가 같다면, a-b 를 계산하여 원래 배열 순서대로 정렬한다. 이렇게 함으로써 동일한 절대값 차이를 가지는 숫자들은 원래 배열 순서를 유지하면서 정렬된다.
//마지막으로 정렬된 배열의 첫번째 요소인 array[0]를 반환하여 n에 가장 가까운 숫자를 반환한다.
{
  function solution(array, n) {
    array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
    return array[0];
  }
}

// 다른 사람 풀이(2)
// Math.min, reduce, Math.abs + 삼항 연산자 활용
// 내가 생각했던 로직이기도 한데 min을 생각하진 못했고 직접 구현하지 못했음
// 단점으로는 가독성?..
{
  function solution(array, n) {
    return array.reduce((a, c) =>
      Math.abs(a - n) < Math.abs(c - n)
        ? a
        : Math.abs(a - n) === Math.abs(c - n)
        ? Math.min(a, c)
        : c,
    );
  }
}
