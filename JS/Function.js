// 함수

function square(number) {
    return number * number;
}

var s = square(2);
console.log(s)

// 함수형 언어 : 일급 객체
// 무명 리터럴로 표현가능
// 변수, 객체, 배열 저장 가능
// 파라미터 전달 가능
// 반환값으로 상용가능

var foo = function multiply(a,b) {
    return a * b;
}

var bar = function (a,b) {
    return a* b;
}

console.log(foo(10,5));
// console.log(multiply(10,5));

console.log(bar(10,5));

var square2 = new Function('number','return number * number'); // 일반적으로 사용하지 않음


// 일급 객체 ( First-class object)

// 1. 무명의 리터럴로 표현 가능
// 2. 변수나 자료 구조에 저장 가능

var increase = function (num) {
    return ++num;

};

var decrease = function (num) {
    return --num;
}

var predicates = { increase, decrease};


function  makeCounter(predicates) {
    var number=0;

    return function () {
        number = predicates(number);
        return number;
    };
};

var increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

var decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2