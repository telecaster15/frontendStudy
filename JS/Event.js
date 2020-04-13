// 이벤트
// 발생하는 시점이나 순서를 사전에 인지할 수 없으므로 일반적 제어 흐름과 다른 접근 방식 필요

function myHandler1() {
    alert('Button Clicked1')
}
function myHandler2() {
    alert('Button Clicked2')
}

// 속성 : 프로퍼티 방식 핸들러 연결
const btn = document.querySelector('.btn');
btn.onclick = function () {
    alert('Button Clicked')
}


//addEventListener()
btn.addEventListener('click',function () {
    alert('Button clicked1')
})
btn.addEventListener('click',function () {
    alert('Button clicked2')
})

// 불특정
// addEventListener('click', function () {
//     alert('Button clicked?')
// })

// blur
const input = document.querySelector('input[type=text]');
const message = document.querySelector('.message');
// input.addEventListener('blur',function ()
btn.addEventListener('click',function (){
    if (input.value.length===0){
    // alert('User Name을 넣으시오')
    message.innerHTML ='User Name을 넣으시오';
    input.focus();

    }else if(input.value.length<2){
    // alert('2자 이상 입력하시오');
    message.innerHTML = '2자 이상 입력하시오';
        input.focus();
    }else{
        message.innerHTML='';
    }

})