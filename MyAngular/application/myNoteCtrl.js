/**
 * Created by xushuailong on 2016/9/7.
 */
app.controller("myNoteCtrl", function ($scope) {
    $scope.message = "";
    $scope.left = function () {
        return 100 - $scope.message.length;
    };
    $scope.clear = function () {
        $scope.message = "";
    };
    $scope.save = function () {
        alert("Note Saved !")
    }
})