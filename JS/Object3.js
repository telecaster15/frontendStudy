// for - in : 루프 수행, key를 수행. 배열(Array) 사용엔 부적합

var person = {
    'first-name': 'Greatest',
    'last-name': 'Ever',
    gender: 'male'
  };

// prop 에 객체의 프러피티 이름이 반환됨
  for(var prop in person){
      console.log(prop + ':' + person[prop]);
  }

// index에 배열의 경우 인덱스가 반환됨
  var arr = ['one', 'two', 'three'];

  arr.name = 'kim'; // 배열 요소 이외도 추가 가능

  for(var index in arr){
      console.log(index + ':' +arr[index]);
  }

  // 배열용
  for(const value of arr){
      console.log(value);
      
  }
  // 인덱스 정의
  for(const[index,value] of arr.entries()){
      console.log(index, value);
  }


 

