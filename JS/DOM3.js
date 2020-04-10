// DOM Manipulation (조작)
// 텍스트 노드의 부모 => firstChild.nodeValue

const one = document.getElementById('one');
console.log(one.value); //0
console.dir(one); // li#one.red
console.log(one.nodeName) // LI

const textNode = one.firstChild;
console.log(textNode.nodeName) // #text

const text = textNode.nodeValue;
console.log(text)// seoul
const text2 = one.innerText;
console.log(text2) // seoul

textNode.nodeValue = 'Busan';
one.innerText = 'Gwangju';
console.log(textNode.nodeValue); // Busan
console.log(one.innerText); // Gwangju