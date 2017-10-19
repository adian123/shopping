/**
 * Created by acer on 2017/10/18.
 */
var app = angular.module("myApp", ["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("shop", {
            url:"/shop",
            templateUrl: "App/View/shopping.html",
            controller: "shoppingController"
        })
    $urlRouterProvider.otherwise("/shop");

});