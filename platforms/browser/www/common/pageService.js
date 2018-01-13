
'use strict';
OSPLGmSysApp.factory('pageService', ['$http', '$rootScope',
    function ($http, $rootScope) {
        var serviceAPIBaseURL = 'http://api.osindia.in/api/';
        // var serviceAPIBaseURL = 'http://localhost:62207/api/';


        function _registerNewUser(entity) {
            // var postData = 
            var url = serviceAPIBaseURL + 'User/Register';
            return $http.post(url, entity,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (results) {
                    return results;
                });


        }
        function _token(entity) {
            // var postData = 
            var url = serviceAPIBaseURL + 'User/Token';
            return $http.post(url, entity,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (results) {
                    return results;
                });


        }


        function _getGrandSummary() {
            return _getRequest('Data/Grand');
        }

        function _getUserActivity() {
            return _getRequest('Data/Activity');
        }

        function _getRequest(pagePath) {
            var url = serviceAPIBaseURL + pagePath;
            return $http.get(url).then(function (results) {
                return results;
            });
        }
        function _postRequest(pagePath, data) {

        }
        var pageServiceFactory = {};

        pageServiceFactory.registerNewUser = _registerNewUser;
        pageServiceFactory.token = _token;
        //======================================================================
        pageServiceFactory.getGrandSummary = _getGrandSummary;
        pageServiceFactory.getUserActivity = _getUserActivity;
        return pageServiceFactory;
    }]);