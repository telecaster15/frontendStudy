var fo =x=100;
console.log(fo); //100
//% 나머지
console.log(10%3);

var x = 5, result;

result =  x++;
console.log(result,x); // 5,x=6

result =  ++x;
console.log(result,x); // 7,x=7

// 산술 연산자
1 + true  // 2 (true ->1)
1 + false // 1 (false ->0)
true + false // 1
1 + null // 1 (null->0)
1 + undefined // NaN (undefined -> NaN)


// == : 동등비교(값) , === : 일치 비교(값과 타입)

5 == 5; //true
5 == '5'; // true
5 === '5'; // false
NaN === NaN; //false
isNaN(NaN);; // true


// var x =2;
// var rs = x % 2?
//
// console.log(rs); // 짝수

typeof ''              // "string"
typeof 1               // "number"
typeof NaN             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof null            // "object"
typeof []              // "object"
typeof {}              // "object"
typeof new Date()      // "object"
typeof /test/gi        // "object"
typeof function () {}  // "function"