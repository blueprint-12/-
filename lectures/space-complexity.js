// 공간복잡도 문제
// 공간은 입력의 크기와는 상관없이 항상 똑같다.

// 아래 함수의 공간복잡도를 표현하세요.
function sum(arr) {
  let total = 0; // 여기서 숫자 할당
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; // let i = 0; 숫자 할당
  }
  return total;
}
// 결론적으로 상수 공간이 있다는 것 -> O(1) 공간

//Example 2
function double(arr) {
  let newArr = []; // 참조타입(배열) 메모리 할당
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
//입력된 배열의 길이가 50이면 50개의 아이템을 담은 새로운 배열을 리턴한다.
// 즉, 차지하는 공간은 입력된 배열의 크기와 비례해서 커지게 된다.
// 여기서는 let newArr = [] 나 let i = 0과 같은 것은 크게 의미가 없다.
// O(n)로 단순화 할 수 있음
