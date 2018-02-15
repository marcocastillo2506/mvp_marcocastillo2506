

var myApp = angular.module("myApp",[]);
myApp.controller('AppCtrl',function($scope,$http){
  console.log("Testing controller");


  $http({
    method:'GET',
    url:'contactlist'
  }).then(function successCallback(response){
    console.log("I got the data i requested");
    $scope.contactlist = response.data;
  },function errorCallback(response){
    //content error
  });



});
