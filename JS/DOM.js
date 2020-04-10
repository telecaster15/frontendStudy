//  DOM : 모든 요소와 요소의 어트리뷰트, 텍스트를 각각의 객체로 만들고 이들 객체를 부자 관계로 표현할 수 있는 트리구조로 구성한 것

// DOM API : 정적인 웹페이지에 접근하여 동적으로 웹페이지를 변경하기 위한 유일한 방법은 메모리 상에 존재하는 DOM을 변경하는 것이고, 이때 필요한 것이 DOM에 접근하고 변경하는 프로퍼티와 메소드의 집합

// DOM tree : 브라우저가 HTML 문서를 로드한 후 파싱하여 생성하는 모델


// id로 하나의 요소 선택
const elem = document.getElementById('one');
// 클래스 어트리뷰트 변경
elem.className = 'blue';

// 요소 선택
const elem2 = document.querySelector('li.red');
elem2.className='green';


// 여러개의 요소 노드 선택
// const elems = document.getElementsByClassName('red'); // HTML Collection live(유사배열)

// const elems = document.getElementsByTagName('li'); //p.class#id

// var elemsArr = [...elems]; // 실제 배열로

const elems = document.querySelectorAll('li.red');

for (let i=0; i<elems.length; i++){
    elems[i].className='blue';
}

