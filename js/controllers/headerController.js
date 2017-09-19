/**
 * Created by shamsad.ahmad on 12/10/2015.
 */

var headerController = angular.module('headerCtrl', [])

headerController.controller('headerController', function($rootScope,$location, Auth,$window,$scope) {

    $scope.loggedIn = Auth.isLoggedIn();
  
    $scope.test="testing";
    if($scope.loggedIn)
    {
        //console.log(window.localStorage.getItem('userDetails'));
        var userDetailsData = localStorage.getItem('userDetails');
        var jsonUserData = JSON.parse(userDetailsData);

        $scope.userName=jsonUserData.user.name;
        //alert($scope.userName);

        //alert(jsonUserData.user.contact.firstName);

    }

    /*
    $rootScope.$on('$routeChangeStart', function($window) {

        $scope.loggedIn = Auth.isLoggedIn();
        alert($scope.loggedIn);
        $scope.test="testing";
        if($scope.loggedIn)
        {
            //console.log(window.localStorage.getItem('userDetails'));
            $scope.userName=localStorage.getItem('userDetails');

        }
    });
*/
    $scope.doLogout = function() {
        //alert('test');
        Auth.logout();
        $location.path('/logout');
    }
	
	 

});