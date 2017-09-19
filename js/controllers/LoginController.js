/**
 * Created by Taran on 11/1/2015.
 */
var loginController = angular.module('loginController', ['geolocation', 'mapFactory', 'userService']);
loginController.controller('LoginCtrl', function ($scope, $location, $http, geolocation, mapFactory, userService) {

        $scope.searchData = {};
        $scope.loginData = {};
        $scope.signData = {};
        $scope.showModal = false;

        $scope.toggleModal = function (key) {
            if (key === 'login') {
                $scope.loginModal = !$scope.loginModal;
            } else {
                $scope.signupModal = !$scope.signupModal;
            }
        }


        /**
         * This is the function which is used for the guest users for whom we might need to show the map.
         *
         *@author Taran
         * */
        $scope.loadBusinessWithSearchPage = function () {
            var userData = {
                origpostalcode: $scope.searchData.origpostalcode
            }
            mapFactory.postal = userData.origpostalcode;
            $location.path('/search');
        };

        /**
         * Function to log user into the system.
         *
         * @author Taran
         * */
        $scope.logUserIn = function () {
            var userData = {
                useremail: $scope.signData.useremail,
                password: $scope.signData.password
            }
            userService.loginUser(userData);
            mapFactory.postal = 'B2X 1S1';
            $location.path('/search');
        };

        /**
         * Function to register the user into the system.
         *
         * @author Taran
         * */

        $scope.signUpUser = function () {
            var userData = {
                useremail: $scope.signData.useremail,
                username: $scope.signData.username,
                password: $scope.signData.password
            }
            userService.createUser(userData);
        };
    }
);


loginController.directive('modal', function () {
    return {
        template: '<div class="modal fade">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '<h4 class="modal-title">{{ title }}</h4>' +
        '</div>' +
        '<div class="modal-body" ng-transclude></div>' +
        '</div>' +
        '</div>' +
        '</div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function (value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
});