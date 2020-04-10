// HTML 콘텐츠 조작

// textContent : 요소 텍스트 컨텐츠를 취득 또는 변경
const ul = document.querySelector('ul');
// console.log(ul.textContent);
const one = document.querySelector('#one');
const one_text = one.textContent
one.textContent = one_text + ', korea';

one.textContent = '<h1>' + one_text + '</h1>';

// innerText, innerHTML (비추천. 표준x, visibility:hidden, 느리다)

console.log(ul.innerHTML);

const one1=document.getElementById('one');
console.log(one.innerHTML);
one1.innerHTML += '<em class="blue">, Korea</em>';

// createElement(tagName)
// createTextNode(text)
// appendChild(Node)
// removeChild(Node)

const newElem = document.createElement('li');
const newText = document.createTextNode('Beijing');

newElem.appendChild(newText);

const container = document.querySelector('ul');

container.appendChild(newElem);

const removeElem = document.getElementById('one');
container.removeChild(removeElem);
