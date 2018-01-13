
'use strict';
OSPLGmSysApp.controller('authController', function ($rootScope, $scope, pageService) {
    $scope.loginText = 'Login';
    $scope.login = function () {

        $scope.loginText = 'Please wait...'
        pageService.token($scope.loginData).then(function (result) {
            console.log(result);
            if (result[".token"] !== undefined) {
                localStorage.setItem('.token', result['.token']);
                localStorage.setItem('.expiry', result['.expiry']);


                var tokenStr = LZString.decompressFromEncodedURIComponent(result['.token']);
                var tokenObj = angular.fromJson(tokenStr);
                $rootScope.user = tokenObj;

                location.href = 'index.html'
            }
        }, function (err) {
            $scope.loginText = 'Login';
            console.log(err)
        })
    }
});