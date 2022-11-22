//✅ 두 개 뽑아서 더하기
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
// 입출력 예시
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]
{
  function solution(numbers) {
    const answer = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        let sum = numbers[i] + numbers[j];
        if (answer.indexOf(sum) === -1) {
          answer.push(sum);
        }
      }
    }
    return answer.sort((a, b) => a - b);
  }
}
//다른 사람 solution
//Set 활용, Set은 중복을 허용하지 않는 자료 구조이기 때문이다.
// Set을 배열로 만들기 위해 ... 전개 연산자 활용

//2중 for문을 안쓰는 방법은 없나? 생각.
{
  function solution(numbers) {
    const temp = [];

    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        temp.push(numbers[i] + numbers[j]);
      }
    }

    const answer = [...new Set(temp)];

    return answer.sort((a, b) => a - b);
  }
}
