// var v let

var koo = 123;
{
    var koo = 456; // 전역
}

console.log(koo); // 456

let foo = 123;
{
    let foo = 456; //지역
    let bar = 456;
}
// console.log(foo); // 123
// console.log(bar); // not defined

// + 연산
const first = 'Greatest';
const last = 'Ever' ;
console.log('My name is '+first + ' '+last+'.');
console.log(`My name is ${first} ${last}.`)

//  화살표 함수
//  () => { ... } // 매개변수가 없을 경우
// x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
// (x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

// ~es5
var pow = x=>{return x*x};

// es6
var pow = x => x*x;
var pow = function(x) {
    return x*x;
}

var arr = [1,2,3];
var pow = arr.map(function (x) {
return x*x;
});
console.log(pow); //[ 1, 4, 9 ]

