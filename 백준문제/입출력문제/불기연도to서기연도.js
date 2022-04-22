//🍕백준문제18108번 1998년생인 내가 태국에서는 2541년생?!
//우리나라는 서기년도를 씁니다. 불기년도 - 543 = 서기년도
const fs = require('fs');
const 불기연도 = fs.readFileSync(0, 'utf8').trim();
const 서기연도 = Number(불기연도) - 543;
console.log(서기연도);
