 // 원시타입, 참조타입

// Reference
 var foo = {
     val:10
 }

 var bar = foo; // address of reference
 console.log(foo.val, bar.val); // 10, 10
 
 bar.val = 20;

 console.log(foo.val, bar.val); // 20, 20

 console.log(foo === bar); // true
 
 // value

 var a = 1;
 var b = a;

 console.log(a,b); //1,1
 console.log(a === b); //true

 a = 10;
 console.log(a,b); // 10, 1
 console.log(a === b); // false
 
 
 
 