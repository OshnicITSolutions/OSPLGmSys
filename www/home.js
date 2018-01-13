
'use strict';

OSPLGmSysApp.controller('homeController', function ($scope, pageService) {
    console.log('home')



    function loadController() {
        pageService.getGrandSummary().then(function (result) {
            console.log(result);
            if (result.Table1) {
                console.log('Table1')
                var grand = {};
                grand.weight = result.Table1[0]['CURRENT STOCK [WEIGHT]'];
                grand.valuation = result.Table1[0]['STOCK VALUATION [TIME OF DEPOSIT]'];
                grand.currentValue = result.Table1[0]['STOCK VALUATION [CURRENT]'];
                grand.bigBag = result.Table1[0]['STOCK BIG BAG'];
                grand.smallBag = result.Table1[0]['STOCK SMALL BAG'];
                grand.noOfWhr = result.Table1[0]['NO OF OPEN RECEIPT'];
                $scope.grand = grand;
            }
        }, function (err) {
            console.log(err)
        })
    }

    loadController();
});