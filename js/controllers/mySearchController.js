/**
 * Created by shamsad.ahmad on 11/26/2015.
 */
var SearchController = angular.module('searchCtrl',['searchService']);

SearchController.controller('SearchController', function($rootScope,Auth,$location,Search,cfpLoadingBar,$cookieStore) {

    var vm = this;
    vm.test="testing";
    vm.loggedIn = Auth.isLoggedIn();
	var aSearchText;
	var _latitude,_longitude,postalCode;

/*
    if(!vm.loggedIn)
        $location.path('/');
*/






/*
vm.go = function ( path ) {
  
};
*/


 if(!vm.loggedIn){ //anonymous user
	 
    _latitude = 44.6832226; //default latitude and longitude
    _longitude =-63.5345829;
	//var postalCode=vm.asearchText;//postal code entered at search bar	
	if($cookieStore.get("searchData"))
		{
		aSearchText= $cookieStore.get('searchData');
		//alert(aSearchText);
		postalCode=aSearchText;
		}
 }
 else //loggedin user
 {
	$cookieStore.remove('searchData');
	var userDetailsData = localStorage.getItem('userDetails');
     var jsonUserData = JSON.parse(userDetailsData);
     _latitude = jsonUserData.user.geoCordinates.latitude;
     _longitude = jsonUserData.user.geoCordinates.longitude;
	  postalCode = jsonUserData.user.contact.zip;
	//alert(_latitude+" "+_longitude+" "+postalCode);
	
	/*
	_latitude = 44.6832226; //logged in user latitude and longitude
    _longitude =-63.5345829;
	postalCode="B3L 4P3";//logged in user postal code comes here
	*/
 }



//alert(_latitude+" "+_longitude);


 
	
	
	var businessData={};
	vm.searchData={};
    

vm.loadData=function()
{		    
					cfpLoadingBar.start();
					Search.getBusinessDataPostal(postalCode)
                    .success(function(response) {
									  //alert(response.length);
						if(response.length!=0){ 
						console.log(response);
                        businessData=response;						
						cfpLoadingBar.complete();
						vm.searchData=businessData;
						createHomepageGoogleMap(_latitude, _longitude, vm.searchData);
						//createHomepageGoogleMap(response[0].geoCordinates.latitude, response[0].geoCordinates.longitude, vm.searchData);
						}
						else
						{
						cfpLoadingBar.complete();
						//alert('No Listings found for this postal code');
						createHomepageGoogleMap(_latitude, _longitude, vm.searchData);
						}
                    })
                    .error(function (response) {
						cfpLoadingBar.complete();			 
                        console.log("Error");
						createHomepageGoogleMap(_latitude, _longitude, vm.searchData);
                       alert("Error while fetching business");

                    });
					
					
}


vm.loadData();

  
   
vm.go=function(path)
{
	//alert(vm.asearchText);
	$cookieStore.put('searchData', vm.asearchText);
	$location.path( path );
	
}


    vm.getSearchBusiness=function(){ // when user search for any postal code
		postalCode=vm.searchText;
		vm.loadData();
    }

    // Set if language is RTL and load Owl Carousel

    $(window).load(function(){
        var rtl = false; // Use RTL
        initializeOwl(rtl);
    });

    autoComplete();




});
