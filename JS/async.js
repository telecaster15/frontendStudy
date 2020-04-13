// Asynchronous processing model

// 동기식 처리 모델 : 순차적 실행

function func1() {
    console.log('func1');
    func2();
}
function func2() {
    console.log('func2');
    func3();
}
function func3() {
    console.log('func3');
}
func1();

// 비동기식 처리 모델 : 병렬적 실행, 끝나지 않아도 다음 태스크 실행
// Timer,Ajax

function funcs1() {
    console.log('funcs1');
    funcs2();
}

function funcs2() {
    setTimeout(function () {
        console.log('funcs2');
    },0);

    funcs3();
}

function funcs3() {
    console.log('funcs3');
}

funcs1();

