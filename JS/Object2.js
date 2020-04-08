var person = {
    'first name' : 'Greatest' , // 유효한 이름이 아닌 경우 ''
    'last name' : 'Ever',
    name : 'lee',
    gender: 'male' ,
    sayHello: function (){
        console.log('Hi, My name is' + this.name);
        
    }
};

// 추가
person['first name'] = 'Baddest';
person.age = 20;

// 삭제
delete person.age;
person = null;
delete person; 

console.log(person.name); // o
console.log(person['name']); // o
// console.log(person.[name]); // x

// console.log(person.1); // x

