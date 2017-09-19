/**
 * Created by shamsad.ahmad on 11/26/2015.
 */

var authService=angular.module('authService', ['webApiService'])


/* This factory is created for methods for login, logout and loginStatus */
authService.factory('Auth', function($http, $q, AuthToken,webApi) {

        var authFactory = {};
        authFactory.login = function(username, password) {
            return $http.post(webApi.login, {
                useremail: username,
                password: password
            })
                .success(function(data) {
                    AuthToken.setToken(data.token);
                    AuthToken.setUserDetails(data);
                    return data;
                })
                .error(function(data) {
                })
        }

        authFactory.logout = function() {
            AuthToken.setToken();

        }

        authFactory.isLoggedIn = function() {
            if(AuthToken.getToken())
                return true;
            else
                return false;
        }

    /*
        authFactory.getUser = function() {
            if(AuthToken.getToken())
                return $http.get('/api/me');
            else
                return $q.reject({ message: "User has no token"});

        }
*/

        return authFactory;

    })


/* This factory is created for getting and setting token for user*/
authService.factory('AuthToken', function($window) {

        var authTokenFactory = {};

        authTokenFactory.getToken = function() {
            return $window.localStorage.getItem('token');
        }

        authTokenFactory.setToken = function(token) {

            if(token)
                $window.localStorage.setItem('token', token);
            else {
                $window.localStorage.removeItem('token');
                $window.localStorage.removeItem('userDetails');
            }

        }

    authTokenFactory.setUserDetails = function(setUserDetails) {
//alert(userName);
        if(setUserDetails)
        {
            //$window.localStorage.setItem('userDetails', {"userName":setUserDetails.user.contact.firstName});
            $window.localStorage['userDetails'] = angular.toJson(setUserDetails);
            //$window.localStorage.setItem('userLatitude', setUserDetails.user.contact.firstName);
           // $window.localStorage.setItem('userLongitude', setUserDetails.user.contact.firstName);
        }

        else {
            $window.localStorage.removeItem('userDetails');
           // $window.localStorage.removeItem('userLatitude');

        }

    }



        return authTokenFactory;

    })


/* This service is for validate and send token */
authService.factory('AuthInterceptor', function($q, $location, AuthToken) {

        var interceptorFactory = {};
        interceptorFactory.request = function(config) {
			
			//config.headers['Access-Control-Allow-Origin'] = '*';
			//config.headers['Access-Control-Allow-Methods'] = '*';
			//config.headers['Access-Control-Allow-Headers'] = 'GET,POST,PUT,DELETE,OPTIONS';
            
			var token = AuthToken.getToken();

            if(token) {
                config.headers['token'] = token;
            }

            return config;

        };




        return interceptorFactory;
    });


