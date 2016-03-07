/**
 * Created by JessJing on 1/29/16.
 */
angular.module('myApp',['ngRoute']).config(function($routeProvider){
    $routeProvider.
    when('/freedom',{templateUrl:'creditfree.html',controller:'freeCtrl'}).
    when('/slate',{templateUrl:'slate.html',controller:'slateCtrl'}).
    when('/prefer',{templateUrl:'prefer.html',controller:'preferCtrl'}).
    when('/saving',{templateUrl:'save.html',controller:'saveCtrl'}).
    when('/checking',{templateUrl:'check.html',controller:'checkCtrl'}).
        otherwise({redirectTo:'/'})
})