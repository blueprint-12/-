// unordered, key value pairs

let instructor = {
  firstName: "cong",
  isInsructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

instructor.hasOwnProperty("firstName");

// arrays (ordered lists)
let names = ['Michael', 'Melissa', 'Anya'];
//여러 데이터 타입을 담을 수 있다. 
//엘리먼트마다 붙어있는 index가 있다. 
let value = [true, {}, [], 2, 'awesome']; 
// 정렬되어 있는 데이터 구조가 배열만 있는 것은 아니다. 
// 자바스크립트에 그냥 내장되어 있는 구조일 뿐