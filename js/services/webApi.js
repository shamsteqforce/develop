// JavaScript Document

/**
 * Created by shamsad.ahmad on 05/01/2016.
 */

angular.module('webApiService', [])

    .factory('webApi', function() {

        var webApiFactory = {};
        var baseUrl="http://ec2-52-35-90-25.us-west-2.compute.amazonaws.com:8080/";
		
        webApiFactory.login =baseUrl+"public/api/user/login/session"; 
		webApiFactory.searchUrl =baseUrl+"public/api/search/"; 
		webApiFactory.signUp =baseUrl+"public/api/user/account";
		webApiFactory.update =baseUrl+"protected/api/user/";
            

        return webApiFactory;

    });
