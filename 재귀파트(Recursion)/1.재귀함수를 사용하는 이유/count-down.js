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

// Helper Method Recursion(헬퍼 메소드 재귀)
/*
 */
{
  /*만약 아래의 함수에서 홀수를 담는 빈배열을 만들고 
  해당 함수를 재귀함수로 사용한다면 이 다음에 뭘 입력하든 간에 
  함수가 호출될 때마다 result 가 리셋되면서 배열이 텅비게 된다. 
  그렇다면 데이터를 수집하기 위해 어떻게 해야할까? 
  솔루션1. result 배열을 함수 외부에 정의하는 것 (그리고 함수 내부에서 result.push)
  솔루션2. 위처럼 뜬금없는 위치에 result 를 배치하는 대신, 헬퍼 메소드 재귀를 사용하기

  */
  //솔루션1
  const result = [];
  function collectOdds(nums) {
    result.push(nums);
  }
}

{
  //헬퍼 메소드 재귀- 일종의 결과를 컴파일할 때 흔히 사용되는 패턴
  //결과는 주로 배열이나 배열과 비슷한 다른 형태의 데이터 구조이다.
  //헬퍼 메소드 재귀는 그냥 재귀적이지 않은 외부 함수가 재귀적인 내부 함수(inner function)을 호출하는 패턴을 말한다.
  //솔루션2
  function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
      //아래는 base case(재귀함수니까 base case가 있어야 겠죠.)
      // 길이가 0이면 반환
      if (helperInput.length === 0) {
        return;
      }

      // reculsive case -홀수라면 result 배열에 0번째 input값을 넣어준다.
      if (helperInput[0] % 2 !== 0) {
        result.push(helperInput[0]);
      }
      //Array.prototype.slice()
      // 어떤 배열의 begin부터 end까지(end미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
      // 원본배열은 바뀌지 않음
      // begin과 end는 optional이고 index를 나타내며 end를 생략할 경우 arr.length까지 추출한다.
      helper(helperInput.slice(1)); // 즉, 0번째 index를 제외한 1부터 끝까지의 배열 복사본을 다시 재호출
      // 배열이 텅 빌때까지 계속해서 줄여나간다.
    }

    helper(arr); //위에 정의된 헬퍼함수를 배열을 사용해 호출

    return result; //정의한 result를 반환한다.
  }
  const result = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(result);
}

{
  // Pure Recursion (순수 재귀)
  //이전의 헬퍼 메소드 재귀와 한 세트로 보셈
  //collectOddValues 함수를 순수 재귀를 통해 만들수도 있다.
  //이전의 솔루션들이 유일한 방법은 아니라는 소리
  //순수 재귀의 경우 필요한 모든 코드가 함수 자체에 포함되며 재귀적이다.
  //이전의 헬퍼 메소드 재귀처럼 외부 데이터 구조를 사용하지 않음(e.g. let result = [])

  function collectOddValues(arr) {
    let newArr = []; //재귀함수로 해당 함수가 쓰이면 계속 빈배열이 된다고 했음
    // 그렇기 때문에 해당 코드도 다시 불러질 때마다 빈배열이 됨
    //차이점: 빈배열이돼도 상관없다 ->우리가 실제로 하는 작업은 계산이 완료됐을 때
    // 모든 배열을 하나의 배열로 합쳐서(concatenate) 반환하는 것
    if (arr.length === 0) {
      return;
    }
    if (arr[0] % 2 !== 0) {
      newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
  }
  console.log(
    'this is pure recursion result!' + collectOddValues([1, 2, 3, 4, 5]),
  );
  /* 
  코드 작동 설명
  collectOddValues([1,2,3,4,5]); 를 호출한다면
  [1].concat(collectOddValues([2,3,4,5])) 이런 모습이 된다. 
  */
  // Pure Recursion Tips
  //배열의 경우 헬퍼 메소드 없이 순수 재귀 솔루션을 작성하는 경우에,
  //배열을 복사하는 slice, spread 연산자(operator), concat 같은 메소드를 사용할 수 있습니다.
  //그러면 배열을 변경할 필요가 없음,  일종의 결과를 축적할 수 있다 .

  //주의: 문자열을 변경할 수가 없다. 그래서 slice, substr, substring 등의 메소드를 사용하여
  // 문자열의 카피를 만들어야 한다.
  // 객체의 경우 Object.assign이나 spread 연산자를 사용하는 것이 유용하다.
}
