angular.module('appRoutes', ['ngRoute','cfp.loadingBar'])

    .config(function($routeProvider,cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true; // for loading spinner to display after login button clicked
		//$locationProvider.html5Mode(true);
        $routeProvider

            .when('/', {
                templateUrl: 'views/index.html'
                //controller: 'MainController',
                //controllerAs: 'main'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'MainController',
                controllerAs: 'login'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchController'
            })

            .when('/signup', {
                templateUrl: 'views/signupProfile.html',
                controller: 'UserCreateController',
                controllerAs: 'user'
            })
            .when('/singleListing', {
                templateUrl: 'views/singleListing.html',
                controller: 'showListingController',
                controllerAs: 'singleListing'
            })
             .when('/addListing', {
                 templateUrl: 'views/addListing.html',
                 controller: 'AddListingController',

             })
             
            .otherwise({
                redirectTo: '/error',
				templateUrl: 'error.html'
            })




        //$httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

    })