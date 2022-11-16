/*
    머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다.
    머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때,
    머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
*/
//제한 사항:
// 1 <= array.length <= 100 , 다른 아이들 수 리미트
// 1 <= height <= 200 ,  내 키 범위
// 1<= array의 원소 <=   200 , 다른 아이들 키 범위

function solution(array, height) {
  //height 가 숫자겠지?
  let answer = [];

  array.map((i) => {
    if (i > height) {
      answer.push(i);
    }
  });
  return answer.length;
}
solution([149, 180, 192, 170], 167);

//회고:map 으로 했다가 모든 요소를 다 돌기 때문에 조건에 맞지않는 아이도 undefined 로 값이 들어가서
// map메소드말고 새로운 빈배열을 만들어 요소를 추가하는 식으로 했는데, filter 메소드를 쓰면
// 조건에 충족하는 아이들만 반환하여 새로운 배열을 받을 수 있다는 것을 다시 알게 됐다.

//이 외에도 for문을 돌려서 if 문과 같이 결합하여 사용해도 좋을 거 같다는 생각을 했는데
//내장 메소드를 쓰는 것이 더 간편해서 array 내장 메서드를 활용했다.
//다른 사람 솔루션
{
  function solution(arr, height) {
    arr.filter((el) => {
      return el > height;
    }).length;
  }
}
