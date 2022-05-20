// 자연수 뒤집어 더하기
// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요.
// 예를들어 n이 12345이면 "5+4+3+2+1=15" 라는 문자열을 리턴합니다.

/*입출력 예
12345
"5+4+3+2+1=15"
1532576
"6+7+5+2+3+5+1=29"
*/

//지정 입력값
/*718253
"3+5+2+8+1+7=26"
*/

function solution(n) {
  const answer = [];
  const str_numArr = String(n).split('');
  // 문자 요소들을 다시 숫자로 형변환 후 reverse메소드를 통해 요소를 반전시켜준다.
  const numArr = str_numArr.map((e) => +e).reverse();
  let sum = numArr.reduce((a, b) => a + b, 0);
  //결과로 될 배열에는 numArr 의 요소 + 총합 까지해서 length + 1 의 길이를 가지고 있고
  //for 문을 돌려서 각 요소마다 if문의 조건식에 해당하는 값이 맞으면 anwer배열에 push해줬다.
  //``백틱을 통해 string형태로 기호와 if문의 조건식이 참인 해당 요소값을 넣어줬다.

  for (i = 0; i < numArr.length + 1; i++) {
    if (i <= numArr.length - 2) {
      answer.push(`${numArr[i]}+`);
    } else if (i == numArr.length - 1) {
      answer.push(`${numArr[i]}=`);
    } else answer.push(`${sum}`);
  }
  return answer.join('');
}
console.log(solution(718253));
console.log(solution(12345));
console.log(solution(1532576));
