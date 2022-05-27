
//Everything in Angular is just binding


var myApp = angular.module("myList",[]);
myApp.controller("myListController",function($scope){
    $scope.items=["AngularJS","ReactJS","UnderscoreJS"];   //bind this items in html list
    $scope.newItem="";   //newItem is binded with additem text box
    $scope.pushItem=function(){
        if($scope.newItem !=""){                    //checks if the user has entered a value
        $scope.items.push($scope.newItem);
        $scope.newItem="";
        }
    }
    $scope.deleteItem=function(index){
        $scope.items.splice(index,1);    //splice is used to remove an element from array '1' denotes number of elements to be removed
    }
});