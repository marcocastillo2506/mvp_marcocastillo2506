

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
   var refresh = function(){
     $http({
       method:'GET',
       url:'contactlist'
     }).then(function successCallback(response){
       console.log("I got the data i requested");
       $scope.contactlist = response.data;
     },function errorCallback(response){
       //content error
     });
   }

  $scope.addContact = function() {
      console.log($scope.contact);
      $http({
            method: 'POST',
            url: '/contactlist',
            data: $scope.contact
          })
          .then(function(response) {
            $scope.contact = ""; //Clear input box
            console.log('POST Response: '+ response.statusText);
            refresh();
      });
    };﻿

    $scope.remove = function(id){
      console.log(id);
    //$http.delete('/contactlist/' + id,id)
    $http({
      method:'DELETE',
      url: '/contactlist/'+ id,id
    }).then(function successCallback(response){
      console.log("DELETED");
      $scope.contactlist = response.data;
    },function errorCallback(response){
      //content error
    });
      refresh();
    };
});
