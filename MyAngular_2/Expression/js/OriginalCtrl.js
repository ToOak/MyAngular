/**
 * Created by xushuailong on 2016/9/22.
 */
angular.module("baseApp",[])
    .controller("myController", function ($scope,$parse) {
        $scope.$watch("expr", function (newVal,oldVal,scope) {
            if (newVal !== oldVal){
                // 用该表达式设置parseFun
                var parseFun = $parse(newVal);
                // 获取经过解析后表达式的值
                $scope.parseValue = parseFun(scope);
            }
        });

        // $scope.onExprChange = function () {
        //     $scope.parseValue = $scope.expr;
        // };
    })
    .controller("myController_2",function ($scope, $interpolate) {
        $scope.to = 'ari@fullstack.io';
        $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
        // 设置监听
        $scope.$watch("emailBody", function (body) {
            if (body){
                var template = $interpolate(body);
                $scope.previewText = template({
                    to:$scope.to
                });
            }else {
                $scope.previewText = "";
            };
        });
    });