const o = {name:'lee', gender:'male', age : 20};
console.log(typeof o)

// 객체 => JSON 형식의 문자열, 직렬화
const str = JSON.stringify(o);
console.log(typeof str)

//JSON + prettify
const strP = JSON.stringify(o, null,2);
console.log(strP)

// parse : string => object(역직렬화)
const newObject = JSON.parse(str);
console.log(typeof newObject);
console.log(newObject.name); // .사용
console.log(newObject['name']); //[] 사용

// 일반적인 경우
const todos = [
    {id:1, content:'HTML', Completed :true},
    {id:2, content:'CSS', Completed :true},
    {id:3, content:'JavaScript', Completed :true},
];

// array => String(JSON)
const astr = JSON.stringify(todos);
console.log(typeof astr);
console.log(astr)

//string(json) => array(json)
const todosnew = JSON.parse(astr);
console.log(typeof todosnew,todosnew);

// CSS 가져오기
console.log(todosnew.length);
for (var i=0; i<todosnew.length; i++){
    console.log('content : ' + todosnew[i].content);
}