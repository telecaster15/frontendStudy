// 암묵적 전역

// console.log(x); // undefined
// console.log(y); // y is not defined
var x = 10;

function foo() {
    // 선언하지 않은 식별자
    y = 20; // var y는 지역 변수
    console.log(x + y);
}
foo();//30


// 최소한의 전역변수 사용

(function () {

var MYAPP = {};

MYAPP.student = {
    name:'lee',
    gender:'male'
};
console.log(MYAPP.student.name); // lee
}());

// console.log(MYAPP.student.name); // MYAPP is not defined
