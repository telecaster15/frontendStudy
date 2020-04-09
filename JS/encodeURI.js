

var uri = 'http://example.com/?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher';
var enc = encodeURI(uri);
var dec = decodeURI(enc);

console.log(enc);
console.log(dec);

