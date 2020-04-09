// http로 시작하는 것

const url ='http://google.com';

const regexr = /^http/; // ^ : 문자열의 처음을 의미
console.log(regexr.test(url)); // true

const regexr2 =/com$/  // $ : 'html'로 끝나는지 검사
console.log(regexr2.test(url))


// 아이디 검사
const id = "abc123"
const regexr3 = /^[A-Za-z0-9]{4,10}/;
console.log(regexr3.test(id)); // false

if (!regexr3.test(id)){
    console.log('잘못된 ID 형식입니다. 4~10자리만 입력 가능합니다.');
}else{
    console.log('올바른 ID')
}


// 전화번호
const tel = '010-1234-1234';
const regexp1 = /^\d{3}-\d{3,4}-\d{4}$/;

console.log(regexp1.test(tel)); // true
