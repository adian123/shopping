/**
 * Created by acer on 2017/10/18.
 */

app.directive("shopcarItem", function () {
    return {
        restrict: "EA",
        scope: {
            user: "=user",
            index: "@index"
        },
        templateUrl: "App/View/temp/_shopping.html",
        controller: "shoppingItem"
    }
});