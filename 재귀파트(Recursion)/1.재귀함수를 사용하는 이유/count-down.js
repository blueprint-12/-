//for 문을 써서 카운트다운 하는 함수를 만들기
//naive solution
{
  function countDown(num) {
    for (let i = num; i > 0; i--) {
      console.log(i);
    }
    console.log('all done!');
  }
  countDown(5);
}
{
  //재귀함수 사용
  function countDown(num) {
    if (num <= 0) {
      console.log('all done');
      return;
    }
    console.log(num);
    num--;
    countDown(num);
  }
  countDown(3);
  //실행 순서
  /*
  print 3
  num-- // 2 
  countDown(2)호출
  print 2
  num-- // 1 
  countDown(1)
  print 1 
  num-- // 0
  if절 실행 -> all done return; 끝. 
  즉, if절(num <= 0)에서 return이 꼭있어야 한다. 중단점
  */
}
{
  //해당 예시에서는 return이 2개나 있어서 헷갈릴 수 있는데
  //첫줄의 if절은 조건에 부합할 때 멈추는 구간이다.

  function sumRange(num) {
    if (num === 1) return 1; //중단점 breakpoint
    return num + sumRange(num - 1);
  }
  console.log(sumRange(3)); // 6, 3+2+1
  //실행 순서
  /*sumRange(3)
    return 3 + sumRange(2)
                return 2 + sumRange(1)
                                return 1
                                역순서로 값을 더해간다. 
                                */
}
{
  //factorial 만들기
  //for 문을 사용해서 만들기, 비재귀적 solution, 반복 솔루션
  function factorial(num) {
    let total = 1;
    // for문에 i > 0 -> i > 1로 수정, total이 1이기 때문에 굳이 중복을 할 필요없다.
    for (let i = num; i > 1; i--) {
      total *= i; // total = total * i  와 같음
    }
    return total; //for문을 나올 때 total을 리턴
  }
}
{
  //factorial 만들기
  //재귀함수로 만들기 (재귀 팩토리얼)
  //중요한 점은 큰 부분을 작은 부분으로 나눠서 하는 것
  function factorial(num) {
    //factorial(3)는 factorial(2) * 3과 같음
    //factorial(2)는 factorial(1) * 2와 같음
    if (num === 1) return 1; //중단점
    return num * factorial(num - 1);
  }
  console.log('재귀 팩토리얼의 결과 값은' + factorial(10));
}
{
  //망한 factoral 재귀함수 ^^
  function factorial(num) {
    if (num === 1) console.log(1); //리턴값을 까먹는 경우, 여기엔 return이 없다.
    return num * factorial(num); //잘못된 값을 반환 num * factorial(num)은 중단점에 도달할 수 없다.
  }
}
