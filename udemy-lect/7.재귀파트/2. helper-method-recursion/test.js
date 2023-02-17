{
  function collectOddValues(arr) {
    // 일종의 결과를 컴파일할 때 흔히 사용되는 패턴
    // 배열이나 데이터 목록 같은 것(혹은 배열과 비슷한 다른 형태의 데이터 구조)
    // ? 예시로, 어느 배열에서 모든 홀수 값을 수집하는 것과 같은 작업
    let result = [];

    function helper(helperInput) {
      // 아래 if절은 종료조건 즉, 중단점
      if (helperInput.length === 0) {
        return;
      }

      if (helperInput[0] % 2 !== 0) {
        result.push(helperInput[0]);
      }
      // slice(1)으로 이미 체킹이 끝난 0번째 요소를 제외 시키고 나머지 배열을 재귀적으로 호출!
      helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
  }
  console.log(collectOddValues([1, 2, 3, 4, 5]));
  // * 출력값: [1,2,3]
}
function collectObbValuesPureRecursion(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] & (2 !== 0)) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectObbValuesPureRecursion(arr.slice(1)));
  return newArr;
}
