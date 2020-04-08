// 객체 Object {}, 함수 function(), 배열 [], 정규표현삭
// {key : value}
// 속성 기능
// 상속 구현 : prototype 객체 메소드를 상속

// key : 빈 문자열('')을 포함한 모든 문자열, Symbol 값
// value : 모든 값
// 객체의 함수 => 메소드 

var eObj = {};
console.log(typeof eObj); //object

var person = {
    name: 'lee' ,
    gender: 'male' ,
    sayHello: function (){
        console.log('Hi, My name is' + this.name);
        
    }
};

console.log(person.name);
console.log(person.gender);
console.log(person.sayHello());


var person = new Object();
person.name = 'lee';
person.gender = 'male';
person.sayHello = function(){
    console.log('Hi, My name is ' + this.name);
    
}

person.sayHello();

// 생성자 함수
function Person(name, gender){
    var married = true; // private
    this.name = name; // public
    this.gender = gender;
    this.sayHello = function(){
        console.log('Hi, My name is ' + this.name);
        
    }
}

var person1 = new Person('kim','male');
var person2 = new Person('park','female');

person1.sayHello();
person2.sayHello();
console.log(person1.married); // undefined
