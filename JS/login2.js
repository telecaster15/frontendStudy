
function login2() {
    var login_form = document.querySelector('#login_form')
    var userID = document.querySelector('#userID')
    var userPWD = document.querySelector('#userPWD')
    var rePWD = document.querySelector('#rePWD')

    if (userID.value.length===0){
        alert('ID를 입력하시오')
        userID.focus();
        return false;}

    // if (userPWD.value.length === 0){
    //     alert('PASSWORD를 입력하시오');
    //     userPWD.focus();
    //     return false;
    // }
    if (!userPWD.value.length){
        alert('PASSWORD를 입력하시오');
        userPWD.focus();
        return false;
    }
    if (userPWD.value !== rePWD.value){
        alert('password 와 re-password는 같아야 한다')
        userPWD.value=''; // 입력한 pwd 초기화
        rePWD.value=''; // 입력한 re-pwd 초기화
        userPWD.focus();
        return false;
    }

    login_form.submit();
}

const loginbtn = document.querySelector('#loginBtn')
loginbtn.onclick = function () {
    login2();
}

// loginbtn.addEventListener('click',function () {
//     login2();
// })