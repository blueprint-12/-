// ✨문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// ✨제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// ✨입출력 예
// numbers	         result
// [1,2,3,4,6,7,8,0]   14
// [5,8,4,0,6,7,9]	    6
// 입출력 예 설명
// 입출력 예 #1
// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

// 입출력 예 #2
// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

// 검색키워드: JS 배열과 배열 비교
// 반복문 X
// -1의미? 배열에 어떤 값이 없을 때 false일때 리턴값

//arr.filter() 메소드 사용
//https://soft91.tistory.com/84
// const arr1 = ['1','2','3','4','5'];
// const arr2 = ['1','2'];
//교집합 (Intersection)
// let intersetion = arr1.filter(x => arr2.includes(x))
//차집합 (Differnece)
//arr1의 차집합 구할 때
// let diffence = arr1.filter(x => !arr2.includes(x));

//param 0~9 사이의 정수를 담은 배열 numArr

// arr.filter() -> 리턴값 새배열, 원본 배열 변경시키지 X
function solution(numArr) {
  const fixedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // fixedArr의 차집합 구하기 (0-9값에 해당하지 않는 요소를 담은 새로운 배열을 diffArr에 담기)
  let diffArr = fixedArr.filter((e) => !numArr.includes(e));
  //   console.log(diffArr);
  // diffArr의 모든 요소를 더해서 sumdiffs에 담아서 반환, * sumdiffs를 사용하기 위해 위에 기본값선언할당
  let result = diffArr.reduce((prev, curr) => prev + curr, 0);
  return result;
}

solution([1, 2, 3, 4, 5, 7, 0]);
// foreach는 리턴값x 그래서 외부에서 호출 시 해당 값이 undefined로 뜸 ..
// map은 결과값이 [6, 14 , 23] 이런식으로 진척값이 보임 ^^ 아오
// ✔ reduce() param으로 1.누산기(콜백의 반환값 누적-> 즉 이전값) 2.현재값(처리할 현재 요소)
// 3.callback의 최초 호출 첫번째 인수에 제공값(누산기의 초기값할당) 얘가 없으면 배열의 첫번째 요소를 초기값으로 씀

// 다른 사람 solution
function solution(numbers) {
  ㅈ;
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
//해설 0-9 전체합 45에서 numbers의 차집합인 부분을 구해야하니까 빼기 numbers의 전체합
