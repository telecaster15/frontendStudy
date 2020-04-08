var string = 'Hello World.';
var index = 0;
// l 의 위치값 찾기

for (var i =0; i<string.length; i++){
    if(string[i] =='l') 
    index = i;
    break;
    
}

console.log(index); //2

var string = 'Hello World.';
var index = 0;


// l 의 갯수

for (var i =0; i<string.length; i++){
    if(string[i] =='l') index++;
    
}

console.log(index); //2