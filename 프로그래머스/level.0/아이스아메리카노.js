/* 
* 아이스 아메리카노 한잔: 5,500원
* 머쓱이가 가지고 있는 돈 money(매개변수)
TODO 머쓱이가 최대로 마실 수 있는 아메리카노 수 & 남은 돈을 순서대로 담은 배열 return

답안 예시: return [최대 아메리카노 개수, 잔돈]  

* 제한 사항: money는 0부터 1,000,000 한도
*/
{
  function solution(money) {
    const coffeeCost = 5500;
    if (money < coffeeCost) return [0, money];
    let coffeeCount = parseInt(money / coffeeCost);
    let charge = money % coffeeCost;
    return [coffeeCount, charge];
  }
}

/*  다른 사람 풀이
! 내 solution에는 굳이 없어도 되는 변수가 너무 많다. 
! if절로 제한걸었던 부분은 어차피 연산시 나머지와 몫을 구하는 연산에서 제대로 값이 나옴
-> 즉 if절은 필요없는 구절 
  5500은 고정값이라서 굳이 변수에 담아주지 않아도 된다. 
  배열을 리턴해주는 것이므로 내부적으로 써줘도 된다. 
* JS에서 몫을 구하는 방법은 Math.floor 과 parseInt 가 있음
*/

function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
