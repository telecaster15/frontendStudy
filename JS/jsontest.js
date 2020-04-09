// var object = { "Employees": ["firstname":"Joo","lastname":"Duu"}]};

var text = '{"Employees":[';
text += '{"firstname":"joo","lastname":"duu"}';
text += ']}';

var object = JSON.parse(text);
var employees = object.Employees;

console.log(employees);
console.log(employees[0].firstname)
console.log(employees[0]['lastname'])