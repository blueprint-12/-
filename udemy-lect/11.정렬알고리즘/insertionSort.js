// * insertionSort
// ? 편리한 경우: 라이브, 스트리밍 방식으로 들어온 데이터를 즉시 입력해야 하는 상황
{
  function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
      var currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
        console.log(arr);
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }
  insertionSort([2234, 634, 2, 156, 343]);
}
// ? 와 이해가 안간다. i와 j를 확인해보고 또 es2015 버전으로 리팩토링해보기
// ? 변수의 키워드가 let일때는 스코프에 접근이 안돼서 로직이 돌아가지 않음
