/**
 * Created by xushuailong on 2016/9/6.
 */
var app = angular.module('myAngular', []);
app.controller('myCtrl', function($scope,$rootScope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
//            控制器中创建一个属性名 "carname"，对应了视图中使用 {{ }} 中的名称。
    $scope.carname="Volvo";
    $scope.carnames=["Volvo","QQ","BMW"];
    $rootScope.lastname="春";
    $scope.names=["元","迎","叹","惜"];
    $scope.funname=function () {
        return $scope.firstName + " " + $scope.lastName;
    }
    $scope.novels=[{name:"雨季不再来",author:"sa三毛"},
        {name:"头号书迷",author:"sh史蒂芬·金"},
        {name:"白夜行",author:"do东野圭吾"}];
});
app.controller('costCtrl',function ($scope) {
    $scope.quantity=1;
    $scope.price=99.9;
})
app.controller('namesCtrl',function ($scope) {
    $scope.names=[{name:"Kai",country:"Denmark"},
        {name:"Jani",country:"Norway"},
        {name:"Hege",country:"Sweden"}]
})