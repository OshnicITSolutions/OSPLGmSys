
'use strict';
OSPLGmSysApp.controller('authController', function ($rootScope, $scope, pageService) {
    $scope.loginText = 'Login';
    $scope.isRemember = false;


    $scope.login = function () {
        $scope.loginText = 'Please wait...'

        if (!$scope.isRemember) {
            $scope.loginData.mobileNo = document.getElementsByName('mobile')[0].value;
        }
        else {
            $scope.loginData.mobileNo = $scope.rem.mobileNo;
        }




        pageService.token($scope.loginData).then(function (result) {


            if (result.statusCode) {
                if (result.statusCode < 0) {
                    $scope.loginText = 'Login';
                }
            }
            else if (result[".token"] !== undefined) {
                localStorage.setItem('.token', result['.token']);
                localStorage.setItem('.expiry', result['.expiry']);


                var tokenStr = LZString.decompressFromEncodedURIComponent(result['.token']);
                var tokenObj = angular.fromJson(tokenStr);
                $rootScope.user = tokenObj;

                localStorage.setItem('.isRem', $scope.rememberMe);
                localStorage.setItem('.ru', result['.token']);
                localStorage.setItem('.mo', $scope.loginData.mobileNo);
                location.href = 'index.html'
            }
        }, function (err) {
            $scope.loginText = 'Login';
            console.log(err)
        })
    }

    function loadController() {

        var isRemember = localStorage.getItem('.isRem');
        $scope.isRemember = isRemember;
        $scope.rememberMe = isRemember;
        if (isRemember != null) {
            if (isRemember) {
                var user = localStorage.getItem('.ru');
                var remMo = localStorage.getItem('.mo')
                var tokenStr = LZString.decompressFromEncodedURIComponent(user);
                var tokenObj = angular.fromJson(tokenStr);
                $scope.rem = tokenObj;
                $scope.rem.mobileNo = remMo;

                $scope.loginData = { mobileNo: remMo }

                console.log($scope.rem)
            }
        }
    }

    loadController();
});