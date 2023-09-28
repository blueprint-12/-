//? TITLE: 최소직사각형

/* 문제설명: 명함을 만드는데 지갑의 크기를 정한다.
다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서 작아서 들기 편해야함 
명함의 가로 세로 길이는 swap될 수 있다. 명함을 가로로넣었을 때 세로로 넣었을 경우가 있으므로  */

// 제한사항:
/* sizes의 길이는 1이상 10,000 이하 (sizes는 2차원 배열이며 즉 명함수를 가리킨다.)
w는 명함의 가로길이
h는 명함의 세로길이
w와 h는 1이상 1,000이하인 자연수 => 양의 정수 */

// 입출력 예시: [[60, 50], [30, 70], [60, 30], [80, 40]] result: 4000

/* 접근 방법:

1. 2차원 배열에 들어있는 가로 세로 길이 대소비교 후 왼쪽 값이 오른쪽 값보다 크다면 자리를 변경 => 즉, 왼쪽은 오른쪽 값보다 무조건 작거나 같음 
이렇게 해서 가로로 넣었을 때 세로로 넣었을 때 경우를 없애줌

 
*/

{
  function solution(
    sizes = [
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40],
    ],
  ) {
    const fixedArr = sizes.map((arr) => {
      let [w, h] = arr;
      if (w > h) {
        let temp = w;
        w = h;
        h = temp;
      }
      return [w, h];
    });
    const w = Math.max.apply(
      null,
      fixedArr.map((arr) => arr[0]),
    );
    const h = Math.max.apply(
      null,
      fixedArr.map((arr) => arr[1]),
    );
    return w * h;
  }
}
// 내 코드 문제: map함수에서 return 부분을 작성하지않아서 fixedArr 에 undefined만 엄청 담김. 왜 틀렸는지 확인할 때는 역시 디버깅이 짱..

// 다른 사람 풀이(1)

// 2차원배열은 forEach를 많이사용하는군
// 배열 전체가 필요한 것이 아니라 값2개만 필요하기 때문에 maxSize [0,0] 으로 초기화시켜서 값을 저장한 뒤 그 값을 return 한 것
// 구조분해할당을 엄청 잘쓰네

{
  function solution(sizes) {
    const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
      if (w > maxSize[0]) maxSize[0] = w;
      if (h > maxSize[1]) maxSize[1] = h;
    });
    return maxSize[0] * maxSize[1];
  }
}

// 다른 사람 풀이(2)
// 바보같이 if + temp 변수를 활용해서 대소구분한 했는데
// const [a, b] 구조분해할당 = sort()활용하니까 너무 간단해짐
// 위의 코드보다 간결
{
  function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach((s) => {
      const [a, b] = s.sort((a, b) => a - b);
      if (a > h) h = a;
      if (b > w) w = b;
    });

    return w * h;
  }
}

// 다른 사람 풀이(3)
// 나랑 비슷한 메서드를 썼길래 가져옴 sort() 활용하는건 국룰인데 왜 생각을 못했지
{
  function solution(sizes) {
    sizes.map((item) => item.sort((a, b) => b - a));
    let hMax = Math.max.apply(
      null,
      sizes.map((item) => item[0]),
    );
    let vMax = Math.max.apply(
      null,
      sizes.map((item) => item[1]),
    );
    return hMax * vMax;
  }
}
