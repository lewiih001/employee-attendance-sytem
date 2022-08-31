let element = '{ "employees" : [' +
'{ "firstName":"Lewis" , "lastName":"Ndila" },' +
'{ "firstName":"Kelvin" , "lastName":"Kweyu" },' +
'{ "firstName":"Susan" , "lastName":"Rose" } ]}';

document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;

element.addEventListener("click", function() {
    document.getElementById("demo").innerHTML = " ";
  });

  const myObj = {name: "Lewis", age: 21, };
  const myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);
  
  
  const text = localStorage.getItem("testJSON");
  let obj = JSON.parse(text);
  document.getElementById("demo").innerHTML = obj.name;
  document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
