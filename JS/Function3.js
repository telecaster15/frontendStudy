// //즉시 실행 함수
//
// (function myFunction() {
//     var a =3;
//     var b = 5;
//     return a*b;
// }());
//
//
// // 재귀 함수(Recusive function)
//
// // 팩토리얼 : n! = 1 * 2 * 3 ... *(n-1) * n
// function factorial(n) {
//     if (n < 2) return 1;
//     return  factorial(n-1) * n;
// }
//
// console.log(factorial(6)); // 720


//콜백 함수(Callback function)

var button = document.getElementById('myButton');
button.addEventListener('click', function () {
    alert('myButton clicked')
});

function doSomething() {
    var name = 'Lee'
    setTimeout(function () {
        console.log('My name is  ' + name)

    },1000);

}
