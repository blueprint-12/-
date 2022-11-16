/*
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 
두 정수 num과 total이 주어집니다. 
연속된 수 num개를 더한 값이 total이 될 때, 
정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
*/
//제한사항 num 은 1이하 100이하 수 -> num은 연속되는 숫자의 개수
// total은 0이상 1000이하
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없다.

//시나리오
//answer.length = num
//answer 의 sum이 total
{
  function solution(num, total) {
    let answer = [];

    return answer;
  }
}

//각도기
{
  function solution(angle) {
    if (0 < angle && angle < 90) {
      return 1;
    } else if (angle === 90) {
      return 2;
    } else if (90 < angle && angle < 180) {
      return 3;
    } else if (angle === 180) {
      return 4;
    }
  }

  solution(180);
}
