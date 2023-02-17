function takeShower() {
  return 'I showered!';
}
function eatBreakfast() {
  let meal = cookFood();
  return `eating ${meal}`;
}
function cookFood() {
  let items = ['오트밀', '감자', '계란', '단백질 바'];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUP() {
  takeShower();
  eatBreakfast();
  console.log('ready to go!');
}
wakeUP();
