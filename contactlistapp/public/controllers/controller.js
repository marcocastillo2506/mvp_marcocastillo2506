

var myApp = angular.module("myApp",[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
  console.log("Testing controller");

  $http({
    method:'GET',
    url:'/'
  }).then(function successCallback(response){
    console.log("I got the data i requested");
    //$scope.contactlist = response.data;
  },function errorCallback(response){
    //content error
  });

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
    email:"alexisgonzales0101@gmail.com",
    number: 5558971521
  };
  var contactlist = [person1, person2, person3];
  $scope.contactlist = contactlist;

}]);
