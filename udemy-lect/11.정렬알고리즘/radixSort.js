// * radix sort helper

// TODO: 자릿수 알아내기 (getDigit)
// getDigit(num, place) - returns the digit in num at the given place value
// e.g.) getDigit(12345, 0); // 5
//getDigit(12345, 1); // 4
//getDigit(12345, 2); // 3
// digit 은 왼쪽부터가 아니라 오른쪽부터 카운트이다. 0번째 요소니까 5를 리턴한다.
{
  //abs는 음수를 고려하기 위해서 사용된 메서드
  function getDigit(num, i) {
    //Math.pow는 제곱 계산
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  console.log(getDigit(2234, 3));
  //100의 자리에 있는 수를 구하는 거니까 3을 i로 잡고 2234에서 2를 리턴

  function digitCount(num) {
    //digitCount ->num이 몇자리 수인지 알려주는 함수
    //Math.log10 -> 밑이 10인 로그, 10의 어떤 거듭제곱으로 이 수(num)가 되는 지 묻는다.
    //num이 0일 경우에는 log10을 할때 infinity값을 갖게되기때문에 return 1 을 해준다.
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  console.log(digitCount(2235234)); // 7 (7자리수)

  //TODO: mostDigits(nums) -> 인자로 숫자들이 담긴 배열을 주고 가장 큰 숫자의 digits를 반환한다.
  function mostDigits(nums) {
    let maxDigits = 0;
    // Math.max(0,12) => 두 숫자 중 더 큰 수를 반환한다.

    //if문을 사용해서 x(최대 자릿수)가 현재 최댓값보다 클 경우 현재 최댓값으로 재할당하도록 작성하는 대신
    //자릿수 최댓값(maxDigits)를 현재 최댓값과 nums[i]의 자릿수 계산(digitCount)중 큰 값과 같도록 설정할 수 있다.
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
}

// TODO: Radix sort function
// loop는 maxDigits 만큼 돈다.
// 각 loop의 순회에 bucket을 만든다. *bucket은 []빈배열이다.
{
  //abs는 음수를 고려하기 위해서 사용된 메서드
  function getDigit(num, i) {
    //Math.pow는 제곱 계산
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  console.log(getDigit(2234, 3));
  //100의 자리에 있는 수를 구하는 거니까 3을 i로 잡고 2234에서 2를 리턴

  function digitCount(num) {
    //digitCount ->num이 몇자리 수인지 알려주는 함수
    //Math.log10 -> 밑이 10인 로그, 10의 어떤 거듭제곱으로 이 수(num)가 되는 지 묻는다.
    //num이 0일 경우에는 log10을 할때 infinity값을 갖게되기때문에 return 1 을 해준다.
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  console.log(digitCount(2235234)); // 7 (7자리수)

  //TODO: mostDigits(nums) -> 인자로 숫자들이 담긴 배열을 주고 가장 큰 숫자의 digits를 반환한다.
  function mostDigits(nums) {
    let maxDigits = 0;
    // Math.max(0,12) => 두 숫자 중 더 큰 수를 반환한다.

    //if문을 사용해서 x(최대 자릿수)가 현재 최댓값보다 클 경우 현재 최댓값으로 재할당하도록 작성하는 대신
    //자릿수 최댓값(maxDigits)를 현재 최댓값과 nums[i]의 자릿수 계산(digitCount)중 큰 값과 같도록 설정할 수 있다.
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }

  function radixSort(nums) {
    let maxDigitsCount = mostDigits(nums);
    for (let k = 0; k < maxDigitsCount; k++) {
      //Array.from으로 배열 10개를 만들어준다.
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i++) {
        let digit = getDigit(nums[i], k); //digit이 3이면 3번 버켓에 넣어줘야한다.
        digitBuckets[digit].push(nums[i]);
      }
      console.log('digitBuckets :', digitBuckets);
      nums = [].concat(...digitBuckets);
      console.log('nums :', nums);
    }
    return nums;
  }
  radixSort([223, 1, 2464, 7456, 234, 4, 2, 664]);
}
