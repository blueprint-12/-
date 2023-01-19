// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
// 제한 사항: array의 길이는 홀수
// 0 < array.length < 100
// -1000 < array의 원소 < 1000

// sort()는 원본을 변형함(새 배열 반환x)

function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
solution([1, 3, 4, 5, 6]);
