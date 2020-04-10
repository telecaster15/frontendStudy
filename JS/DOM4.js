// Attribute node 접근/수정 : id,herf,src,width ...

//className
const elems = document.querySelectorAll('li');

for (let i=0;i<elems.length;i++ ){
    if (elems[i].className==='red'){
        elems[i].className='blue'
    }else {
        elems[i].className='red' // Tokyo
    }
}

// classList
const elems2 = document.querySelectorAll('li');
for (let i=0; i<elems2.length;i++){
    if (elems2[i].classList.contains('blue')){
        elems2[i].classList.replace('blue','red')
    }
}

// id 없으면 생성, 있는 값은 할당

const heading= document.querySelector('h1');
console.dir(heading);
console.log(heading.firstChild.nodeValue); // Cities
heading.id='heading';
console.log(heading.id);//heading

// hasAttribute(attribute) : boolean
// getAttribute(attribute) : get string
// setAttribute(attribute, value) : set
// removeAttribute(attribute) : remove

const input = document.querySelector('input[type=text]');
if (!input.hasAttribute('value')){
    // input.setAttribute('value','Hello')
}

var str = input.getAttribute('value');

input.removeAttribute('value');
