var text = '{ "employees":[' +
      '{"firstName":"John", "lastName":"Doe"},' +
      '{"firstName":"Anna", "lastName":"Smith"},' +
      '{"firstName":"Peter", "lastName":"Jones"}]}';

var obj = JSON.parse(text)

console.log(obj.employees[0].firstName);

// {
// 	"employees":[
// 	  {"firstName":"John", "lastName":"Doe"},
// 	  {"firstName":"Anna", "lastName":"Smith"},
// 	  {"firstName":"Peter", "lastName":"Jones"}
// 	]
// }

//It's easiest to format the JSON object to a single line of text. Then use the stringify method
var jsontostring = JSON.stringify({"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]});

console.log(jsontostring);