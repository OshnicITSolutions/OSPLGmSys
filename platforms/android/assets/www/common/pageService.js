
'use strict';
OSPLGmSysApp.factory('pageService', ['$http', '$rootScope',
    function ($http, $rootScope) {
        var serviceAPIBaseURL = 'http://api.osindia.in/api/';


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
        var pageServiceFactory = {};

        pageServiceFactory.registerNewUser = _registerNewUser;
        pageServiceFactory.token = _token;
        return pageServiceFactory;
    }]);