//문제 설명
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

//제한 사항
// 10 ≤ price ≤ 1,000,000 -> 양의 정수
// price는 10원 단위로(1의 자리가 0) 주어집니다. -> 가격은 10원 단위
// 소수점 이하를 버린 정수를 return합니다. -> Math.floor()

// 입출력 예
// price	result
// 150,000	142,500
// 580,000	464,000

// 입출력 예 설명
// 입출력 예 #1

// 150,000원에서 5%를 할인한 142,500원을 return 합니다.
// 입출력 예 #2

// 580,000원에서 20%를 할인한 464,000원을 return 합니다

function solution(price) {
  if (price >= 500000) {
    price *= 0.8;
  } else if (price >= 300000) {
    price *= 0.9;
  } else if (price >= 100000) {
    price *= 0.95;
  }
  return Math.floor(price);
}
//결론: 소수점을 버리는 용도로는 Math.floor보다는 parseInt가 나은 거 같다.

//다른 분 풀이 2차 배열, for of 문법 활용

{
  const discounts = [
    [500000, 20],
    [300000, 10],
    [100000, 5],
  ];

  //
  const solution = (price) => {
    for (const discount of discounts)
      if (price >= discount[0])
        return Math.floor(price - (price * discount[1]) / 100);
    return price;
  };

  console.log(solution(150000)); //142500
}
