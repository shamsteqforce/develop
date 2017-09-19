/**
 * Created by shamsad.ahmad on 12/1/2015.
 */
angular.module('userCtrl', ['userService'])


    .controller('UserController', function(User) {


        var vm = this;


        User.all()
            .success(function(data) {
                vm.users = data;
            })


    })


.controller('UserCreateController', function(User,$location,$window,$scope,CountryStateService,Auth,Password,cfpLoadingBar,AuthToken) {

	$scope.loggedIn = Auth.isLoggedIn();
		if($scope.loggedIn)
		{
			$location.path('/search');
		}
		var firstName='',lastName='';

        $scope.userData={};
		$scope.saveData={};
		$scope.saveData.password="";
		
		$scope.$watch('saveData.password', function(pass) {

			$scope.passwordStrength = Password.getStrength(pass);

		
		if($scope.isPasswordWeak()) {

				$scope.userForm.password.$setValidity('strength', false);

			} else {

				$scope.userForm.password.$setValidity('strength', true);
			}
		});
		
		

		$scope.isPasswordWeak = function() {

			return $scope.passwordStrength < 40;
		}

		$scope.isPasswordOk = function() {

			return $scope.passwordStrength >= 40 && $scope.passwordStrength <= 70;
		}

		$scope.isPasswordStrong = function() {

			return $scope.passwordStrength > 70;
		}
		
		
		
		
      
	    $scope.userData.user={};
		  $scope.userData.user["type"] = "Customer";
		//$scope.userData.user.type="Customer";.
	    $scope.userData.user.contact={};
		//$scope.userData.user.contact.address2="";
		//$scope.userData.user.contact.firstName="";
		//$scope.userData.user.contact.lastName="";
		firstName=$scope.firstName;
		lastName=$scope.lastName;
		

		
        $scope.step = 1;
        $scope.nextStep = function(){
            $scope.step++;
        }

        $scope.prevStep = function(){
            $scope.step--;
        }

        $scope.error="";
		
		$scope.checkTerms=function()
		{
			alert('test');
		}
		
		$scope.countries = CountryStateService.getCountry();
		
		 $scope.getCountryStates = function(){
         $scope.states = CountryStateService.getCountryState($scope.userData.user.contact.country);
         $scope.cities =[];
   		 }

        $scope.getStateCities = function(){
        $scope.cities = CountryStateService.getStateCity($scope.userData.user.contact.province);
       }
 


//$scope.userData.user["name"] = firstName+" "+lastName;

$scope.saveData=$scope.saveData;


        

        $scope.submitForm = function(isValid) {
            // check to make sure the form is completely valid
          if (isValid) {
                //alert('our form is amazing');
				cfpLoadingBar.start();
				
											
		
                User.create($scope.saveData)
                    .success(function(response) {								   
								   console.log('token->'+response.token);
								   //AuthToken.setToken(response.token);
								    $scope.userData.user["name"]=$scope.firstName+" "+$scope.lastName;
									
									
									if($scope.address2=='' || typeof $scope.address2==='undefined')
									{
									$scope.userData.user.contact["address"]=$scope.address1;	
									
									}
									else
									{
									$scope.userData.user.contact["address"]=$scope.address1+","+$scope.address2;
									}
								
									//$scope.userData.user.contact["useremail"]=$scope.saveData.useremail;
									$scope.userData.user["accountId"] = response.accountId ;
									$scope.testData=$scope.userData;
									
									User.update($scope.testData)
										.success(function(response)
														  {
														  
														  	 //if(response.token) { 
															 cfpLoadingBar.complete();														  
																$location.path('/search');
															//}
														  
														  })
										.error(function (response) {
											cfpLoadingBar.complete();			 
											//Auth.logout();			 
											$location.path('/signup');
											$scope.error="Error while creating Profile. Try again";
                   										 })
						

                    })
                    .error(function (response) {
                        //console.log("Error while signup")
						cfpLoadingBar.complete();
                        $location.path('/signup');
                        $scope.error="Error while signup. Try again";

                    })
					
					
            } //isValid
			
			

        } //submitForm Function

        /*
        vm.signupUser = function() {
        vm.message = '';

        User.create(vm.userData)
            .then(function(response) {
                vm.userData = {};

                vm.message = "Successful SignUp";

                $window.localStorage.setItem('token', response.data.token);
                $location.path('/search');
            })
            .error(function (response) {
                console.log("Error while signup")
                $location.path('/');
            })


    }*/

})


/*
.directive("passwordStrength", function(){
    return {        
        restrict: 'A',
        link: function(scope, element, attrs){                    
            scope.$watch(attrs.passwordStrength, function(value) {
                console.log(value);
                if(angular.isDefined(value)){
                    if (value.length > 8) {
                        scope.strength = 'strong';
                    } else if (value.length > 3) {
                        scope.strength = 'medium';
                    } else {
                        scope.strength = 'weak';
                    }
                }
            });
        }
    };
});
*/