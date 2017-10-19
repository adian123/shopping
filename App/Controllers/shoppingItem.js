/**
 * Created by acer on 2017/10/18.
 */
app.controller('shoppingItem', function ($scope) {

    $scope.checkeds = function (index) {
        $scope.$emit("checkeds", index);
    };
    $scope.deletes = function (index) {
        $scope.$emit('deletes', index)
    }
    $scope.numberChange = function (flag) {
        if (flag == '+') {
            $scope.user.num += 1
        }
        else {
            if ($scope.user.num <= 1) return;
            $scope.user.num -= 1
        }
        $scope.$emit("numberChange")
    }
})
