// if, for

// 블록문
{
    var foo=10;
    console.log(foo);
    
}

// // if
// if (조건식){
//     //
// }else if(조건식2){
//     //
// }else{
// //
// }

var x =2;
var result;
if(x % 2){
    
    console.log("홀수")
}else{
    console.log("짝수");
    
}

// switch

switch(con){
    case 0:
        console.log("짝수");
        break;

    case 1:
        console.log("홀수");
        break;

    default :
        console.log(con);            
}


// for

for(var i=0; i<2; i++){
    console.log(i);
    
} console.log(i);

for(;;){ 
    break;
} // 무한루프 

//while

var i = 0;
while(i<2){
    console.log(i);
    i++;
}

while(true){
    true;
} // 무한루프


//do...while

var i = 0;
do{
    console.log(i);
    i++;
    
}
while(i < 2);

outer : for (var i=0; i<3; i++){
    for(var j=0; i<3; i++){
        if(i+j===3){
            break;
        }
    }
}

