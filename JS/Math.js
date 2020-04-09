console.log(Math.PI); // 3.14...
console.log(Math.abs(-1)); // 절대값
console.log(Math.round(1.5)); // 반올림
console.log(Math.ceil(1.3)); // 올림
console.log(Math.floor(1.9)); // 버림
console.log(Math.sqrt(9)); // 제곱근

console.log(Math.random())// 랜덤

for (var i=0; i<10; i++){
    const random = Math.floor(Math.random()*10+1);
    console.log(random)
}

console.log(Math.pow(2,8)); // 2^8

const date = new Date();
console.log(date);

const now = Date.now();
const today = new Date(now)
console.log(today);

const year = today.getFullYear();
const day = today.getDate();
const month = today.getMonth()
const day2 = today.getDay();
console.log(year);
console.log(month+1);
console.log(day);
console.log(day2); // 4 : 목요일

var pDay =['일','월','화','수','목','금','토'];
console.log(pDay[day2] +'요일');

