var app = angular.module("myApp",[]);
app.controller("AppCtrl",function($scope){
  console.log("Testing controller");

  person1 = {
    name: "Marco",
    email:"marcocastillo2506@gmail.com",
    number: 5513025563
  };

  person2 = {
    name:"Edgar",
    email:"edgargonzales1702@gmail.com",
    number: 5516035163
  };

  person3 = {
    name:"Alexis",
    email:"alexisgonzales0101",
    number: 5558971521
  };

  var contactlist = [person1, person2, person3];

})
