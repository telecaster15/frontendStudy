// Parameter

// var foo = function (p1, p2) {
//     console.log(p1, p2);
//
// }
//
// foo(1); // undefined

function foo(primitive) {
    primitive += 1;
    return primitive;

}

var x = 0 ;

console.log(foo(x)); // 1
console.log(x); // 0


function  changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'kim';
    obj.gender = 'female';

}

var num = 100;
var obj = {
    name : 'Lee',
    gender : 'male'
};

console.log(num); // 100
console.log(obj); // { name: 'Lee', gender: 'male' }

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // { name: 'kim', gender: 'female' }


// 반환값

function  calculateArea(width, height) {
    var area = width *height;
    return area; // 단일 값 반환

}

function getSize(width, height, depth) {
    var area = width* height;
    var volume = width * height * depth;
    return[area, volume]; // 복수 값의 반환

}

console.log('area is '+ getSize(3,2,3)[0]);
console.log('volume is ' + getSize(3,2,3)[1]);



// 함수도 객체 -> 프로퍼티(속성,변수)

function square(number) {
    return number * number;
}
square.x = 10;
square.y = 20;

console.log(square.x, square.y);
console.log(square.name); // square