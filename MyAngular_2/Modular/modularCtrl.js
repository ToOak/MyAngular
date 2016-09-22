/**
 * Created by xushuailong on 2016/9/22.
 */
angular.module("myApp",[])
    .run(function ($rootScope) {
        $rootScope.name = "World";
    })
    .controller("myController",function ($scope) {
        $scope.age = 16;
        $scope.counter = 0;
        $scope.person = {
            name:"Ari Lerner"
        };
        $scope.add = function (amount) {
            $scope.counter += 1;
        };
        $scope.substract = function (amount) {
            $scope.counter -= 1;
        };
    })
    .controller('ParentController', function($scope) {
        $scope.person = {greeted: false};
    })
    .controller('ChildController', function($scope) {
        $scope.sayHello = function() {
            $scope.person.name = 'Ari Lerner';
            $scope.person.greeted = true;
        };
    });