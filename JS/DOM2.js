// DOM 탐색

// parent node
// : 부모노드 탐색, Return: HTMLElement를 상속받은 객체

// const elem = document.querySelector('#two');
// elem.parentNode.className = 'yellow';

// first Child, lastChild
// :자식 노드를 탐색한다.

// const parent = document.querySelector('ul');
// parent.firstElementChild.className = 'blue';
// parent.lastElementChild.className = 'blue';

// hasChildNodes() : boolean, 자식
// ChildNodes : 텍스트 요소를 포함한 모든 자식 요소 반환
// children : 자식 요소 중 Element type만 반환

// const parent2 = document.querySelector('ul');
// const children = parent2.children;
// const childNodes =parent2.childNodes;
//
// if (parent2.hasChildNodes()){
//     for (let i=0;i<children.length;i++){
//         console.log(children[i].nodeName); // 1 : 요소노드의 값
//     }

// }

// previousSibling, nextSibling : text node 포함한 모든 형제노드
// previousElementSibling, nextElementSibling : Element type 요소만

const parent3 = document.querySelector('ul');
parent3.firstElementChild.nextElementSibling.className = 'blue'; // London
parent3.lastElementChild.previousElementSibling.className ='blue'; //New York

