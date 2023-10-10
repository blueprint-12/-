//TITLE: 컨트롤제트

// ?문제 설명
/* 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요. */

//? 문제 풀이 접근 방법
/* 
숫자와 "Z"가 `공백`으로 구분된 문자열 
"Z": 바로 전에 더했던 숫자를 뺀다는 뜻 == 이전값 무효화? 0 취급? 

1) 변수 s를 split(" ")로 쪼개고 배열에 담는다 Z에 index + 1의 값은 0으로 바꾸고 
나머지 값들을 더한 값을 return 한다. reduce 사용하고 초기값을 0으로 주면 숫자 형변환 상관없을듯  
2) String 내장 메서드 replace(정규식, 변환값) 해서 원본에서 Z앞의 값까지 삭제 
공백으로 구분되어있으니 공벡을 구분으로 값을 더하면 될듯
정규식: /.{2} Z/g; 
Z와 공백을 포함한 2까지의 문자까지 포함하는 정규표현식
replace와 replaceAll 둘 다, 매칭되는 값이 없으면 원본 s를 return함

3) for문으로 Z요소를 만났을 때 직전값은 pop하고 아니라면 push
stack 활용
pop 배열의 마지막 요소 제거 



*/

// !제한 사항
/* 1 ≤ s의 길이 ≤ 200
-1,000 < s의 원소 중 숫자 < 1,000
s는 숫자, "Z", 공백으로 이루어져 있습니다.
s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
연속된 공백은 주어지지 않습니다.
0을 제외하고는 0으로 시작하는 숫자는 없습니다.
s는 "Z"로 시작하지 않습니다.
s의 시작과 끝에는 공백이 없습니다.
"Z"가 연속해서 나오는 경우는 없습니다.
 */

// 입출력 예시
/* s	    result
"1 2 Z 3"	    4
"10 20 30 40"	100
"10 Z 20 Z 1"	1 => 10 다음 Z, 20 다음 Z로 10, 20이 지워지고 1만 더하여 1을 return 합니다.
"10 Z 20 Z"	    0
"-1 -2 -3 Z"	-3 
*/
// {
//   function solution(s = '1 2 Z 3') {
//     // let noSpaceString = s.split(' ').join('');
//     const numStringArr = s
//       .replaceAll(/.{2} Z/g, 'x')
//       .split(' ')
//       .filter((char) => char !== 'x');
//     let answer = numStringArr.reduce((prev, curr) => prev + Number(curr), 0);
//     return answer;
//   }
// }
// solution();

{
  //   function solution(s = '10 Z 20 Z') {
  //     const noSpaceString = s
  //       .split(/.{2} Z/g)
  //       .join('')
  //       .trim();
  //     if (!noSpaceString) return 0;
  //     return noSpaceString
  //       .split(' ')
  //       .reduce((prev, curr) => prev + Number(curr), 0);
  //   }
}

//3번째 for문이랑 stack 구조 이용해서 푸니까 됐음..
{
  function solution(s = '10 Z 20 Z') {
    let arr = s.split(' ');
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'Z') {
        answer.pop();
      } else {
        answer.push(arr[i]);
      }
    }
    return answer.reduce((a, b) => a + Number(b), 0);
  }
}
