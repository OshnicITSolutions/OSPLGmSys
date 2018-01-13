
'use strict';

OSPLGmSysApp.controller('registerController', function ($scope, pageService) {
    console.log('register')
    $scope.buttonText = 'Register'
    $scope.register = function (editForm) {
        $scope.buttonText = 'Please wait..'
        pageService.registerNewUser($scope.entity).then(function (result) {
            console.log(result)
            $scope.buttonText = 'Register'
        }, function (err) {
            console.log(err)
            $scope.buttonText = 'Register'
        })
    }
});