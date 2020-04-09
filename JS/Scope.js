
// 스코프

var x ='global';

function foo() {
    var x = 'function scope';
    console.log(x);
}

foo(); // function scope
console.log(x); // global


var x = 0;
{
    var x =1;
    console.log(x); //1
}
console.log(x); //1

// let : 블록 레벨 스코프
let y =0;
{
    let y=1;
    console.log(y); // 1
}
console.log(y); // 0

// 비 블록 레벨 스코프

if (true){
    var x = 5;
}
console.log(x); // 5


