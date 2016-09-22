/**
 * Created by xushuailong on 2016/9/22.
 */

// // 在app.js中
// function MyController($scope, $timeout) {
//     var updateClock = function() {
//         $scope.clock = new Date();
//         $timeout(function() {
//             updateClock();
//         }, 1000);
//     };
//     updateClock();
// };

/**
 * 全局方法构建控制器
 * @param $scope
 * @constructor
 */
function MyController($scope) {
    $scope.clock = {
        now:new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date();
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    },1000);
    updateClock();
};