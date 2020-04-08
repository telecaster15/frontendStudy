var a=3;
var s1="Hello world";
var s2='Hello Javascript';

// alert(s2);
console.log(s1);
console.log(s2);

// Number
var num1 = 1001;
var num2 = 10.50;

// String
var string1 = 'Hello';
var string2 = "World";

// Boolean
var bool = true;

// null
var foo = null;

// undefined
var bar;

// object
var obj={ name: 'Lee', gender : 'male'}

// Array
var arr = [1,2,3];
var foo = function (a,b) {
    var c= a+b;
    return c;
};

function sum(a, b) {
    var c= a+b;
    return c;
}

// console.log(obj.name);
// console.log(obj.gender);
// console.log(arr[0]);
// console.log(foo(1,2));
// console.log(sum(3,4));

// + - * //

// 문자열 연결 연산자
var name = 'Lee';
var str='My name is' + name;

// 할당 연산자
var color= 'red';

// 비교 연산자
var foo= 3>5;

// 논리 연산자
var bar = (5>3) && (2,4);

// 타입 연산자
var type = typeof 'Hi';

// 인스턴스 생성 연산자
var today = new Date();

var foo=1+'10'; //110
var bar=2*'10'; //20
var bar=2*'a0'; //NaN

console.log(bar);
console.log(type);
console.log(today);

