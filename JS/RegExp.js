// 정규표현식 (Regular Expression)

const str = "Is this all there is?"

// 문자열 is를 대소문자를 구별하여 한번만 검색한다.
let regExp = /is/;

var find1 = str.match(regExp);
console.log(find1); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// 문자열 is를 대소문자를 구별하지 않고 대상 문자열 끝까지 검색한다.
regExp = /is/ig;

// . : 임의의 문자 1개
const str2 = "AA AAA BB aa bb 11 22 33 44 @11 #22 !33";
let regexr = /.../g; // 임의의 문자 3개를 반복하여 검색

var find2 = str2.match(regexr);
console.log(find2);
console.log(find2.length);

let regExp3 = /A+/g; // 'A'가 한번이상 반복되는 문자열('A', 'AA', 'AAA', ...)을 반복 검색

var find3 = str2.match(regExp3);
console.log(find3); // [ 'AA', 'AAA' ]

const regexr2 = /A|B/g; // 'A' 또는 'B'를 반복 검색
console.log(str2.match(regexr2));
// [
//     'A', 'A', 'A',
//     'A', 'A', 'B',
//     'B'
// ]

// 'A' ~ 'Z' 또는 'a' ~ 'z'가 한번 이상 반복되는 문자열을 반복 검색
const regexr3 =/[A-Za-z]+/g;
console.log(str2.match(regexr3));

// '0' ~ '9' 또는 ','가 한번 이상 반복되는 문자열을 반복 검색
let regexr5 = /[\d,]+/g; // 대문자는 반대
console.log(str2.match(regexr5));
