var x = 10;

// 명시적 타입 변환
var str = x.toString();
console.log(typeof str);

// 암묵적 타입 변환 
var str = x + '';
console.log(typeof str);

// 불리언 타입으로 변환
if ('')    console.log('1');
if (true)  console.log('2'); // *
if (0)     console.log('3');
if ('str') console.log('4'); // *
if (null)  console.log('5');
if (undefined) console.log('6');
if (NaN) console.log('7');
if (' ')    console.log('8'); // *

console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(Infinity)); //true

console.log(Boolean({})); // object true
console.log(Boolean([])); //array true



// 문자열 타입으로 변환
console.log(String(1));
console.log(String(NaN));
console.log(String(1/10));
console.log(String(true));

console.log((1).toString());
console.log((NaN).toString());

// 숫자 타입으로 변환
console.log(Number('1.53')); // 1.53
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(parseInt('1.53')); // 1.53
console.log(parseInt(false)); // NaN


console.log(+'1.53'); // 1.53

console.log('-1' * 1); // -1


// && , || 

var f = 'Cat' && 'Dog'
var f2 = 'Cat' || 'Dog' 

console.log(f); // Dog
console.log(f2); // Cat


console.log(false || 'dog'); // dog
console.log('cat' || false); // cat

console.log(false && 'Dog'); // false
console.log('Cat' && false); // false


// 객체가 null 인지 확인하고 프로퍼티를 참조할 때
var elem = null;

console.log(elem.value); //TypeError
console.log(elem && elem.value); //null

// 함수의 인수 초기화
function getStringLength(str){
    str = str || ''; //
    return str.length;
}

var l = getStringLength('hi');

console.log(l); // 2

// es6 
function getStringLength(str = ''){
    return str.length;
} 

