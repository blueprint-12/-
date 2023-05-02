// *문제 제목: 같은 숫자는 싫어

// ! 🤷‍♂️스택/큐 문제

/* 문제 설명
배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요. */

//? 제한 사항
/* 
배열 arr의 크기 : 1,000,000 이하의 자연수
배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수 
*/
// arr.length <= 1,000,000 (양의 정수)
// 0 <=arr[i] <= 9
function solution(arr) {
  // *🐱‍🐉syntax: arr.filter(callback(element[, index[, array]])[, thisArg])
  // val, index를 콜백의 인자로 쓰고 현재 val값이 arr의 현재 index +1의 값과 다른 애만 담아 새배열 return
  // 마지막 인덱스로는 참조할 요소가 없어서, undefined가 뜬다고 함 그러면 undefined와 값을 비교한다.
  return arr.filter((val, index) => val !== arr[index + 1]);
}

// 다른 사람 풀이
{
  function solution(arr) {
    //첫번째 요소를 바로 넣는다(비교할 대상)
    let answer = [arr[0]];

    //for문에서 두번째요소 arr[1] 부터 비교,
    //arr.length 미만으로 범위를 정한 이유: arr.length-1가 index범위이기 때문
    // arr 범위를 넘어가면 error 발생

    for (let i = 1; i < arr.length; i++) {
      if (answer[answer.length - 1] !== arr[i]) {
        answer.push(arr[i]);
      }
    }
  }
}

// *문제 제목: 3진법 뒤집기

// 문제 설명
/* 
자연수 n이 매개변수로 주어집니다.
n을 3진법 상에서 앞뒤로 뒤집은 후, 
이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요. 
*/

// ? 제한 사항
// n은 1이상 100,000,000 이하인 자연수이다.

/* 입출력 예
n	result
45	7
125	229 */

// ? 도출 과정
// n(10진법): 45 => n(3진법):1200 => 앞뒤 반전(3진법): 0021 => 10진법으로 표현: 7

// key point 3진법으로 표현한 10진수를 return 하는 것이므로
// parseInt 의 2번째 인자인 base 로 10(진법)이 아닌 3을 줘야 한다.
// e.g) 0021 에서 10진법화하면 21이 된다.
{
  function solution(n) {
    let ternaryNum = n.toString(3); //3진법으로 변환된 문자열
    let reversedTernary = [...ternaryNum].reverse().join("");
    console.log(reversedTernary);
    return parseInt(reversedTernary, 3);
  }

//  solution(45); debug
}
