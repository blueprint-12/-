const str = "she is she";
const re = /she/y;
console.log(re.lastIndex); // 0
re.lastIndex = 7;
console.log(re.lastIndex); // 7
console.log(str.match(re));
