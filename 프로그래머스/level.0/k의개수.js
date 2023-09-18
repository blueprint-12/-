// TITLE: k의 개수

// 문제설명:
/*
1부터 13까지의 수에서, 1은 1, 10, 11,12,13 이렇게 총6번 등장한다. 
정수 i,j,k가 매개변수로 주어질 때, i부터 j까지 k가 몇번 등장하는지 return 하도록 함수를 완성하라.
*/

// 제한사항:
// 1 ≤ i < j ≤ 100,000 , 범위는 양수
// 0 ≤ k ≤ 9, k는 0을 포함하는 1자리 숫자

// 한번도 등장하지 않으면 0을 return

// 입출력 예
/* 

i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0
*/

{
  function solution(i, j, k) {
    let count = 0;
    const numbers = [];
    for (let num = i; num <= j; num++) {
      numbers.push(String(num));
    }
    const combined = numbers.join('');
    if (combined.length === 1) return 0;
    return (count = combined.split(String(k)).length - 1);
  }
}

//다른 사람 풀이
// 문자열 + 숫자 = 문자열 자동 형변화
// 해당 문자열에서 같은 문자열을 기준으로 끊어내고 숫자를 판별하는 것이기 때문에 k의 타입변환이 필요없는 문제였다.
{
  function solution(i, j, k) {
    let a = '';
    for (i; i <= j; i++) {
      a += i;
    }

    return a.split(k).length - 1;
  }
}
