
function login() {
    var loginForm = document.login_form
    var userID = loginForm.userID;
    var userPWD = loginForm.userPWD;
    var rePWD = loginForm.rePWD;
  if (userID.value.length == 0){
      alert('ID를 입력하시오');
      userID.focus();
      return false;
  }

  if (userPWD.value !== rePWD.value){
      alert('password 와 re-password는 같아야 한다')
      userPWD.focus();
      return false;
  }

    if (userPWD.value.length == 0){
        alert('PASSWORD를 입력하시오');
        userPWD.focus();
        return false;
    }
    if (userPWD.value.length == 0){
        alert('re-PASSWORD를 입력하시오');
        rePWD.focus();
        return false;
    }
    // if (userPWD.value !== rePWD.value){
    //     alert('password 와 re-password는 같아야 한다')
    //     userPWD.focus();
    //     return false;
    // }
        return true; // submit 버튼을 사용할 때
    // loginForm.submit(); // button 사용할 때 action 주소로 submit

}
