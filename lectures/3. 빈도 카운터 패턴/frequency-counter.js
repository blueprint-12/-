/*문제
두개의 배열을 인수로 받는 same이라는 명의 함수를 만드시오.
same함수의 리턴값은 true/ false
if every value in the array has it's corresponding value squared
in the second array. The frequecy of value must be the same. 
예측 결과: 
same([1,2,3],[4,1,9]) // true -> 순서는 상관없이 일대일 대응하면됨
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false -> must be same frequency 
*/

/*사용 메소드
Array.prototype.indexOf()
Array.prototype.splice(start, deleteCount, item): 배열의 기존 요소를 삭제 or 교체하거나 새 요소를 추가하여 배열의 내용을 변경
start 를 제외한 나머지는 optional입니다. item을 지정하지 않을 경우 splice 는 요소를 제거하기만 합니다.
return value: 제거한 요소를 담은 배열.
해당 메소드를 사용하면 원본 배열을 수정하는 것임 
*/

//중첩 루프 사용
function same(arr1, arr2) {
  //두 배열의 길이가 같지않으면 false
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // 첫번째 배열을 돌면서 해당 배열의 제곱값이 arr2에 있는 지 확인합니다.
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    //만일 대응 값이 없다면 (indexOf의 반환값이 -1 이니까)
    if (correctIndex === -1) {
      return false;
    }
    // 루프를 계속 반복하면서 splice를 사용하여 대응되는 제곱값인 correctIndex를 arr2배열에서 제거한다.
    //콘솔에 arr2를 찍어보면서 줄어드는 것을 확인할 수 있다.
    console.log(arr2);
    /* arr2의 내용
    (3) [9, 4, 1]
    (2) [9, 4]
    [9]
    */
    arr2.splice(correctIndex, 1);
  }
  //배열의 요소 중 false를 반환할 것이 없는 [] 빈배열이 되면(즉, arr1의 모든 요소가 arr2의 제곱값으로 상응되어 소거되면) true리턴
  return true;
}
same([1, 2, 3], [9, 4, 1]);

function refactoredSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

console.log(refactoredSame([1, 2, 3], [9, 4, 1])); // true
//빈도 카운터의 개념은 보통 객체를 사용한다는 것
//객체를 사용하여 프로파일을 구성하는 것은 배열이나 문자열의 내용을 분석하는 방법으로
//보통 배열이나 문자열과 같은 선형 구조(linear)를 구성하는 것이다.
// 그러면 해당 분석을 문자열이나 배열에서 생성된 다른 객체의 형태와 신속하게 비교할 수 있음
