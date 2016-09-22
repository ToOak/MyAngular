/**
 * Created by xushuailong on 2016/9/22.
 */
angular.module('myApp', ['emailParser'])
    .controller('myController_3', ['$scope', 'EmailParser',
        function($scope, EmailParser) {
        // 设置监听
        $scope.$watch('emailBody', function(body) {
            if (body) {
                $scope.previewText = EmailParser.parse(body, {
                    to: $scope.to
                });
            }
        });
    }]);