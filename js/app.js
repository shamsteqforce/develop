/**
 * Created by shamsad.ahmad on 11/26/2015.
 */
var hiveApp=angular.module('hiveMarket', ['appRoutes','mainCtrl','authService','searchCtrl','userCtrl','headerCtrl','listingCtrl','singleListCtrl','searchService','ui.bootstrap','ngCookies','listService','passwordService','addListingCtrl','ngCart','ngFileUpload'])

hiveApp.config(function($httpProvider) {

        $httpProvider.interceptors.push('AuthInterceptor');

    })


hiveApp.directive("zipValidation", function(){
    return {        
        restrict: 'A',
        link: function(scope, element, attrs){                    
            scope.$watch(attrs.zipValidation, function(value) {
                //console.log(value);
                if(angular.isDefined(value)){

					var _regex = /[ABCEGHJKLMNPRSTVXY]\d[A-Z][ ]?\d[A-Z]\d/;
                    var zipTest = _regex.test(value);                
					
                    if (zipTest) {
                        scope.zipInvalid = 'correct';
                    } 
                     else {
                        scope.zipInvalid = 'Incorrect';
                    }
					
					
                }
            });
        }
    };
})

hiveApp.directive("ngFileSelect",function(){    
  return {
    link: function($scope,el){          
      el.bind("change", function(e){          
        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      });          
    }        
  };
 })
  

hiveApp.directive('validFile', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attrs, ngModel) {
            ngModel.$render = function () {
                ngModel.$setViewValue(el.val());
            };

            el.bind('change', function () {
                scope.$apply(function () {
                    ngModel.$render();
                });
            });
        }
    };
});

/*

hiveApp.directive('requiredAny', function () {
    // Hash for holding the state of each group
    var groups = {};

    // Helper function: Determines if at least one control
    //                  in the group is non-empty
    function determineIfRequired(groupName) {
        var group = groups[groupName];
        if (!group) return false;

        var keys = Object.keys(group);
        return keys.every(function (key) {
            return (key === 'isRequired') || !group[key];
        });
    }

    return {
        restrict: 'A',
        require: '?ngModel',
        scope: {},   // an isolate scope is used for easier/cleaner
                     // $watching and cleanup (on destruction)
        link: function postLink(scope, elem, attrs, modelCtrl) {
            // If there is no `ngModel` or no groupName has been specified,
            // then there is nothing we can do
            if (!modelCtrl || !attrs.requiredAny) return;

            // Get a hold on the group's state object
            // (if it doesn't exist, initialize it first)
            var groupName = attrs.requiredAny;
            if (groups[groupName] === undefined) {
                groups[groupName] = {isRequired: true};
            }
            var group = scope.group = groups[groupName];

            // Clean up when the element is removed
            scope.$on('$destroy', function () {
                delete(group[scope.$id]);
                if (Object.keys(group).length <= 1) {
                    delete(groups[groupName]);
                }
            });

            // Updates the validity state for the 'required' error-key
            // based on the group's status
            function updateValidity() {
                if (group.isRequired) {
                    modelCtrl.$setValidity('required', false);
                } else {
                    modelCtrl.$setValidity('required', true);
                }
            }

            // Updates the group's state and this control's validity
            function validate(value) {
                group[scope.$id] = !modelCtrl.$isEmpty(value);
                group.isRequired = determineIfRequired(groupName);
                updateValidity();
                return group.isRequired ? undefined : value;
            };

            // Make sure re-validation takes place whenever:
            //   either the control's value changes
            //   or the group's `isRequired` property changes
            modelCtrl.$formatters.push(validate);
            modelCtrl.$parsers.unshift(validate);
            scope.$watch('group.isRequired', updateValidity);
        }
    };
});

*/






hiveApp.directive('headeruser',['$location',function() {
    return {
      templateUrl:'js/directives/header-user/header-user.html',
      restrict: 'E',
      replace: true,
	 // controller:'headerController'
	}
  }]);

