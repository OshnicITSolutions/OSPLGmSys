
'use strict';
OSPLGmSysApp.controller('authController', function ($rootScope, $scope, pageService) {
    $scope.login = function () {
        alert('login')
        pageService.token($scope.loginData).then(function (result) {
            console.log(result);
            if (result[".token"] !== undefined) {
                localStorage.setItem('.token', result['.token']);
                localStorage.setItem('.expiry', result['.expiry']);
                location.href = 'index.html'
            }
        }, function (err) {
            console.log(err)
        })
    }
});