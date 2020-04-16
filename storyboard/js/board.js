
function testing () {

    var Writer = document.querySelector('#writer')
    var Title = document.querySelector('#title')
    var Txt = document.querySelector('#TXT')
    var Pwd = document.querySelector('#PWD')

    if (!Writer.value.length) {
        alert("작성자는 필수 입력 입니다.")
        return false;
    }
    if (!Title.value.length) {
        alert("제목은 필수 입력 입니다.")
        return false;
    }
    if (!Txt.value.length) {
        alert("내용은 필수 입력 입니다.")
        return false;
    }
    if (!Pwd.value.length) {
        alert("비밀번호는 필수 입력 입니다.")
        return false;
    }

return true
}

function deltesting() {
    

}