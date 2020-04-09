// 클로저(closure) : 현재 상태를 기억하고 변경된 최신 상태를 유지

function outerFunc() {
    var x = 10; // 지역변수 local
    var innerFunc = function () {console.log(x);};
    return innerFunc;
}
var inner = outerFunc(); // 10
inner();

