/**
 * Created by shamsad.ahmad on 12/1/2015.
 */

angular.module('userService', ['webApiService'])


    .factory('User', function($http, $q, AuthToken,webApi) {

        var userFactory = {};

        userFactory.create = function(userData) {
            return $http.post(webApi.signUp, userData)
            .success(function(data) {
							  console.log(data);
                AuthToken.setToken(data.token);
                //AuthToken.setUserDetails(data);
                return data;
            })
                .error(function(data) {
                })
        }
		
		
		 userFactory.update = function(updateData) {
			 
			 /*console.log('token->'+token);
			  var headers={};
				if(token) {
	
					//headers['token'] = token; //if token then putting in headers
					headers = { 'token': token };
				}
				console.log('headers->'+headers);
				*/
            return $http.post(webApi.update, updateData)
            .success(function(data) {
				console.log(data);			  
                AuthToken.setUserDetails(data);
                return data;
            })
                .error(function(data) {
                })
        }
		

        return userFactory;

    });
