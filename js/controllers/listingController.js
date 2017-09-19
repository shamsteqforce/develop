/**
 * Created by shamsad.ahmad on 12/14/2015.
 */

/**
 * Created by shamsad.ahmad on 11/26/2015.
 */
var ListingController = angular.module('listingCtrl', []);

ListingController.controller('showListingController', function($rootScope,Auth,$location) {

    var vm = this;
    vm.test="testing";
    vm.loggedIn = Auth.isLoggedIn();

    if(!vm.loggedIn)
        $location.path('/');
		
		
   

});







