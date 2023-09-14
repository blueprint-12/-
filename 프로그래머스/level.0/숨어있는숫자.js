//문제 제목: 숨어있는 숫자의 덧셈(2)

//? 문제 설명:
/*
문자열 my_string 이 매개 변수로 주어진다. 
my_string은 소문자, 대문자, 자연수로만 구성
my_string 안의 자연수들의 합을 return 
*/

// ! 자연수가 없는 경우 0을 return

// 문자열은 정규표현식으로 어떻게해보면 될듯 => match() 활용
// 연속으로 이어진 숫자, 리스트로 추출

// ? match에 /g 옵션값은 매칭되는 값이 없다면 null을 return 하기 때문에 런타임에러가 났음
// 런타임 에러 난 이유가 시간 초과 연산이 많아서 그런거 인줄알았는데 그게 아니라 null값을 제대로 처리하지 않아서 그런거였음

function solution(my_string = 'zzsdfwvd') {
  let arr = my_string.match(/\d+/g)?.map((v) => +v);
  let sum = 0;
  if (!arr) return 0;
  for (const val of arr) {
    sum += val;
  }
  return sum;
}

// 다른 사람 solution
{
  function solution(my_string) {
    return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
  }
}
