const MIN_USER_NAME_LENGTH = 5; // 최소 이름값 길이
const username = document.querySelector('#username');
const msg = document.querySelector('.message');
const btn = document.querySelector('.btn');

function checkUserNameLength(n) {
    if (username.value.length===0){
        // alert('User Name을 넣으시오')
        msg.innerHTML ='User Name을 넣으시오';
        username.focus();

    }else if(username.value.length<5){
        // alert('2자 이상 입력하시오');
        msg.innerHTML = '5자 이상 입력하시오';
        username.focus();
    }else{
        msg.innerHTML='';
    }
}

btn.addEventListener('click', function () {
    checkUserNameLength(MIN_USER_NAME_LENGTH);
});

