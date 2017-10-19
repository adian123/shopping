/**
 * Created by acer on 2017/10/18.
 */
app.controller('shoppingController', ["$scope", "shoppingServer", function ($scope, shoppingServer) {

    shoppingServer.getTab().then(function (result) {
        console.log(result)
        $scope.userInfo = result;
        price()
    })
    $scope.$on("checkeds", function (event, index) {
        var count = 0;
        $scope.userInfo[index].state = !$scope.userInfo[index].state;
        for (var i = 0; i < $scope.userInfo.length; i++) {

            if ($scope.userInfo[i].state) {
                count++;
            }
        }
        if (count == $scope.userInfo.length) {
            $scope.flag = true;
        }
        else {
            $scope.flag = false;
        }
        price()

    });
    $scope.$on("numberChange", function (event) {
        price();
    });

    $scope.$on('deletes', function (event, index) {

        $scope.userInfo.splice(index, 1);
        price()
    })

    $scope.flag = false
    $scope.checkAll = function () {
        $scope.flag = !$scope.flag;

        for (var i = 0; i < $scope.userInfo.length; i++) {

            if ($scope.flag) {

                $scope.userInfo[i].state = true;

            }
            else {
                $scope.userInfo[i].state = false;
            }

        }
        price()
    }

    function price() {

        $scope.goodsPrice = 0;
        $scope.goodsCount = 0;
        $scope.userInfo.forEach(function (user, index) {

            if (user.state) {
                $scope.goodsPrice += user.num * user.price;
                $scope.goodsCount += user.num;
            }
        })
    }


}])