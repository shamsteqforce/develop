// JavaScript Document

angular.module('searchService', ['webApiService'])


    .factory('Search', function($http,$q,webApi) {

        var searchFactory = {};
        searchFactory.getBusinessDataPostal = function(postalCode) {
            return $http.get(webApi.searchUrl+postalCode)
            .success(function(data) {
                return data;
            })
                .error(function(data) {
                })
        }

        return searchFactory;

    });
