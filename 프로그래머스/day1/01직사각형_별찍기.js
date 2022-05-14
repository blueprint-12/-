process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  // 입력받은 숫자를 data에 받는다.
  const n = data.split(' '); //data(입력받은 숫자)를 배열로 변경
  const a = Number(n[0]),
    b = Number(n[1]); //a는 한줄에 대한 별의 갯수, b는 몇줄 출력
  for (let i = 0; i < b; i++) {
    //i선언 몇줄(b)만큼 반복
    let str = ''; // 출력할 변수 선언
    for (let j = 0; j < a; j++) {
      // j선언 후 별을 한 줄에 몇개 찍을지 반복
      str = str + '*';
    }
    console.log(str);
  }
});

//a 는 5, b는 3

//추천 코드
//핵심 메소드 repeat()
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = '*'.repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
