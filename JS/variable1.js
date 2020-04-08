console.log(1 === 1.0); //true

var pInf = 10 / 0;
console.log(pInf); // Infinity

var str = 'String'; // 유사배열
for (var i =0; i <str.length; i++){
    console.log(str[i]);
}

str[0] = "b";
console.log(str); // 문자열을 변경할 수 없다.

var str= 'string';
str = str.substring(1,3);
console.log(str); //tr

// Undefined
var foo;
var obj={ name: 'lee'};
console.log(foo);//undefined
console.log(obj.tel);//undefined

// var element = document.querySelector('.myElem');
// console.log(element); // HTML문서에 요소가 없다면 null을 반환.

var foo = null;
console.log(typeof  foo); //object

var foo= null;
console.log(typeof  foo === null); //false
console.log(foo === null);//true
console.log(foo == null);//true


// 심볼 : 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용
var key = Symbol('key');
console.log(typeof key); //symbol

var obj={};
obj[key] = 'value';
console.log(obj[key]); // value

console.dir(obj); // 디버깅


// Variable Hoisting
console.log(foo); // undefined
var foo = 123;
console.log(foo); //123
{var foo = 456}; // 전역 변수
console.log(foo);//456

name();

function name() {
    console.log('Lee')
}

