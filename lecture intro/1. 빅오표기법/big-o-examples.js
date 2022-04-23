// O(n)안에 O(n)으로 루프가 중첩되어있으면 O(n*n) -> O(n^2)됩니다.
// O(n) operation inside of an O(n) operation.
//간단히 생각해보면된다. n의 입력값으로 5를 주면 25개의 페어가 생기고 2를 주면 4개의 페어가 생깁니다.

//O(n^2) 의 예시

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
// printAllPairs(5); // 25
// printAllPairs(2); // 4

// O(n^2)를 그래프로 확인해보면 n값과 시간이 비례해서 늘어나는 선형(linear)이 아니다.
// n이 커질수록 훨씬 더 커진다. n곱하기 n만큼 늘어나는 것
// 기본적으로 입력인 n이 커질수록 알고리즘이 얼마나 효율적인지 표현하는 방식이 Big O라는 것만 기억하기
// O(n^2)는 n의 값이 커질수록 더 가파른 곡선을 이루고 있다.

// 아래 함수에 대한 시간 복잡도를 구하세요.

function logAtMost10(n) {
  for (let i = 0; i < Math.min(n, 10); i++) {
    console.log(i);
  }
}
// loop안에 n의 범위가 어디까지인지가 핵심
// Math.min메소드는 인수로 받는 값중에서 가장 작은 값을 반환한다.
// 즉, 해석해보면 최대가 10이고 0~9까지만 반환된다. 10 이상의 값을 n이라는 입력값으로 받아도 9까지만 출력된다.
// 고로 정답: O(1)
// logAtMost10(10);

function logAtLeast10(n) {
  for (let i = 0; i < Math.max(n, 10); i++) {
    console.log(i);
  }
}
logAtLeast10(15); //1~14까지 출력됨
//10보다 작은 수를 넣어도 무조건 1~9까지 출력된다.
//-> 상수는 필요없는 것이고 n의 값이 중요하므로
// O(n)이 정답

function onlyElementsAtEvenIndex(array) {
  const newArray = Array(Math.ceil(array.length / 2));
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

const myArr = [2, 3, 4, 5, 6, 7, 3, 6345, 345, 32];
const myChangedArr = onlyElementsAtEvenIndex(myArr);
console.log(myChangedArr); //(5) [2, 4, 6, 3, 345]

//정답: O(n)이라함 왜?..
