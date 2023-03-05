class Student {
  constructor(firstName, lastName, year) {
    //this를 생성자 함수 내부에서 사용허게 되면, 개발 클래스 인스턴스 즉 개별 Student 인스턴스를 지칭하게 됩니다.
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  static EnrollStudents() {
    return 'enrolled all!';
  }
  fullName() {
    return `your full name is ${this.firstName} ${this.lastName};`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'you are expelled';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScores(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    if (this.scores.length === 0) {
      return "there's no scores";
    }
    let sum = this.scores.reduce((acc, crr) => acc + crr);
    return Math.floor(sum / this.scores.length);
  }
}
let firstStudent = new Student('gamza', 'kim', 1);
let secondStudent = new Student('alex', 'chang', 2);
console.log(firstStudent.markLate()); //gamza kim has been late 1 times
console.log(firstStudent.markLate());
console.log(firstStudent.markLate()); //you are expelled
firstStudent.addScores(83);
firstStudent.addScores(55);
console.log(firstStudent.calculateAverage()); //69
console.log(Student.EnrollStudents()); // enrolled all!

// *static method(class method)
{
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static distance(a, b) {
      //? 두 점 사이의 거리를 계산하는 거리 공식 사용
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
  }
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  console.log('p1', p1);
  console.log('p2', p2);
  console.log(Point.distance(p1, p2)); //7.0710678118654755
}
