// JavaScript Document

/**
 * Created by shamsad.ahmad on 11/26/2015.
 */
var SingleListingController = angular.module('singleListCtrl',[]);

SingleListingController.controller('SingleListingController', function($rootScope,Auth,$location) {

    var vm = this;
    vm.test="testing";
    vm.loggedIn = Auth.isLoggedIn();
	var aSearchText;
	var _latitude,_longitude;
	_latitude = 44.6832226; //default latitude and longitude
    _longitude =-63.5345829;
	
	if(!vm.loggedIn)
        $location.path('/');
	
	var jsonData=[{
        "_id": "56d039c3ea1f41ef5d6f7706",
        "type": "Customer",
        "name": "Md Shamsad Ahmed",
        "accountId": "56d039c0ea1f41ef5d6f7705",
        "__v": 0,
        "geoCordinates": {
            "longitude": "-63.5345829",
            "latitude": "44.6832226"
        },
        "contact": {
            "country": "Canada",
            "province": "Nova Scotia",
            "city": "Halifax",
            "zip": "B3L 4P3",
            "address": "6969 Bayers Road"
        }
    }];
	
	/*
	var test=[
    {
       "_id": "56d010e2ea1f41ef5d6f7700",
        "type": "Customer",
        "name": "MD Shamsad Ahmed",
        "accountId": "56d010e1ea1f41ef5d6f76ff",
        "__v": 0,
        "geoCordinates": {
            "longitude": "85.316207",
            "latitude": "23.339349"
        },
        "contact": {
            "country": "India",
            "province": "Jharkhand",
            "city": "Ranchi",
            "zip": "834001",
            "address": "Doranda"
        }
    },
    {
        "_id": "56d039c3ea1f41ef5d6f7706",
        "type": "Customer",
        "name": "Md Shamsad4 Ahmed",
        "accountId": "56d039c0ea1f41ef5d6f7705",
        "__v": 0,
        "geoCordinates": {
            "longitude": "-63.62418040000001",
            "latitude": "44.6555165"
        },
        "contact": {
            "country": "Canada",
            "province": "Nova Scotia",
            "city": "Halifax",
            "zip": "B3L 4P3",
            "address": "6969 Bayers Road"
        }
    }];
	*/
	
	createHomepageGoogleMap(_latitude, _longitude,jsonData);

/*
    if(!vm.loggedIn)
        $location.path('/');
*/




/*
  if(vm.loggedIn) //loggedin user
 {
	$cookieStore.remove('searchData');
	var userDetailsData = localStorage.getItem('userDetails');
     var jsonUserData = JSON.parse(userDetailsData);
     _latitude = jsonUserData.user.geoCordinates.latitude;
     _longitude = jsonUserData.user.geoCordinates.longitude;
	  postalCode = jsonUserData.user.contact.zip;

	
 }

*/


    




  
   

    // Set if language is RTL and load Owl Carousel

    $(window).load(function(){
        var rtl = false; // Use RTL
        initializeOwl(rtl);
    });

    autoComplete();




});

