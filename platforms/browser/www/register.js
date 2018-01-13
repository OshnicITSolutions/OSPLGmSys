
'use strict';

OSPLGmSysApp.controller('registerController', function ($scope, pageService) {
    console.log('register')

    $scope.register = function (editForm) {
        alert('register')
        pageService.registerNewUser($scope.entity).then(function (result) {
            console.log(result)
        }, function (err) {
            console.log(err)
        })
    }
});