
'use strict';

OSPLGmSysApp.controller('registerController', function ($scope, pageService) {
    console.log('register')
    $scope.buttonText = 'Register'
    $scope.register = function (editForm) {

        if ($scope.entity.userId) {
            if ($scope.entity.userId.length <= 4) {
                alert('Please enter valid customer user id.')
                return;
            }
        }
        else {
            alert('Please enter customer user id.')
            return;
        }


        if ($scope.entity.password) {
            if ($scope.entity.password.length == '') {
                alert('Please enter valid password.')
                return;
            }
        }
        else {
            alert('Please enter password.')
            return;
        }

        if ($scope.entity.corporateId) {
            if ($scope.entity.corporateId.length < 3) {
                alert('Please enter valid Corporate Id.')
                return;
            }
        }
        else {
            alert('Please enter Corporate Id.')
            return;
        }

        if ($scope.entity.mobileNo) {
            if ($scope.entity.mobileNo.length < 10 || $scope.entity.mobileNo.length > 10) {
                alert('Please enter valid mobile no.')
                return;
            }
        }
        else {
            alert('Please enter your mobile no.')
            return;
        }


        if ($scope.entity.loginPIN) {
            if ($scope.entity.loginPIN.length < 4 || $scope.entity.loginPIN.length > 4) {
                alert('Login PIN must be any 4 digit number.')
                return;
            }
        }
        else {
            alert('Please enger any 4 digit Login PIN.')
            return;
        }


        if ($scope.entity.loginPIN !== $scope.entity.confirmPIN) {
            alert('Login & Confirm PIN must be same.')
        }


        $scope.buttonText = 'Please wait..'
        pageService.registerNewUser($scope.entity).then(function (result) {
            if (result.statusCode) {
                if (result.statusCode == 0) {
                    alert('Registered Successfully. Please Login')
                    location.href = 'auth.html'
                }
            }
            console.log(result)
            $scope.buttonText = 'Register'
        }, function (err) {
            console.log(err)
            $scope.buttonText = 'Register'
        })
    }
});