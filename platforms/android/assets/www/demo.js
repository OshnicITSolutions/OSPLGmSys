
'use strict';

OSPLGmSysApp.run(function ($transform) {
  window.$transform = $transform;
});

//
// You can configure ngRoute as always, but to take advantage of SharedState location
// feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch: false'
// in order to avoid unwanted routing.
//
OSPLGmSysApp.config(function ($routeProvider) {
  $routeProvider.when('/', { templateUrl: 'home.html', reloadOnSearch: false });
  $routeProvider.when('/scroll', { templateUrl: 'pages/scroll.html', reloadOnSearch: false });
  $routeProvider.when('/toggle', { templateUrl: 'pages/toggle.html', reloadOnSearch: false });
  $routeProvider.when('/tabs', { templateUrl: 'pages/tabs.html', reloadOnSearch: false });
  $routeProvider.when('/accordion', { templateUrl: 'pages/accordion.html', reloadOnSearch: false });
  $routeProvider.when('/overlay', { templateUrl: 'pages/overlay.html', reloadOnSearch: false });
  $routeProvider.when('/forms', { templateUrl: 'pages/forms.html', reloadOnSearch: false });
  $routeProvider.when('/dropdown', { templateUrl: 'pages/dropdown.html', reloadOnSearch: false });
  $routeProvider.when('/touch', { templateUrl: 'pages/touch.html', reloadOnSearch: false });
  $routeProvider.when('/swipe', { templateUrl: 'pages/swipe.html', reloadOnSearch: false });
  $routeProvider.when('/drag', { templateUrl: 'pages/drag.html', reloadOnSearch: false });
  $routeProvider.when('/drag2', { templateUrl: 'pages/drag2.html', reloadOnSearch: false });
  $routeProvider.when('/carousel', { templateUrl: 'pages/carousel.html', reloadOnSearch: false });
});



//
// For this trivial demo we have just a unique MainController
// for everything
//
OSPLGmSysApp.controller('MainController', function ($rootScope, $scope) {

  var authData = localStorage.getItem(".token")
  if (authData == null) {
    location.href = 'auth.html'
    return;
  }


  var tokenStr = LZString.decompressFromEncodedURIComponent(authData);
  var tokenObj = angular.fromJson(tokenStr);
  $rootScope.user = tokenObj;

  $scope.user = $rootScope.user;
  console.log($scope.user)

  onDeviceReady();
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    console.log('device ready')
    // var db = window.openDatabase("ospl_gmsys", "1.0", "OSPL DB", 1000000);
    // db.transaction(populateDB, errorCB, successCB);

  }

  $scope.logout = function () {
    var isRem = localStorage.getItem('.isRem');
    var ru = localStorage.getItem('.ru');
    var mo = localStorage.getItem('.mo');

    localStorage.clear();
    
    localStorage.setItem('.isRem', isRem);
    localStorage.setItem('.ru', ru);
    localStorage.setItem('.mo', mo);

    
    location.href = 'auth.html';
  }
  $scope.swiped = function (direction) {
    alert('Swiped ' + direction);
  };

  // User agent displayed in home page
  $scope.userAgent = navigator.userAgent;

  // Needed for the loading screen
  $rootScope.$on('$routeChangeStart', function () {
    $rootScope.loading = true;
  });

  $rootScope.$on('$routeChangeSuccess', function () {
    $rootScope.loading = false;
  });

  // Fake text i used here and there.
  $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
    'Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum ' +
    'corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

  //
  // 'Scroll' screen
  //
  var scrollItems = [];

  for (var i = 1; i <= 100; i++) {
    scrollItems.push('Item ' + i);
  }

  $scope.scrollItems = scrollItems;

  $scope.bottomReached = function () {
    alert('Congrats you scrolled to the end of the list!');
  };

  //
  // Right Sidebar
  //
  $scope.chatUsers = [
    { name: 'Carlos  Flowers', online: true },
    { name: 'Byron Taylor', online: true },
    { name: 'Jana  Terry', online: true },
    { name: 'Darryl  Stone', online: true },
    { name: 'Fannie  Carlson', online: true },
    { name: 'Holly Nguyen', online: true },
    { name: 'Bill  Chavez', online: true },
    { name: 'Veronica  Maxwell', online: true },
    { name: 'Jessica Webster', online: true },
    { name: 'Jackie  Barton', online: true },
    { name: 'Crystal Drake', online: false },
    { name: 'Milton  Dean', online: false },
    { name: 'Joann Johnston', online: false },
    { name: 'Cora  Vaughn', online: false },
    { name: 'Nina  Briggs', online: false },
    { name: 'Casey Turner', online: false },
    { name: 'Jimmie  Wilson', online: false },
    { name: 'Nathaniel Steele', online: false },
    { name: 'Aubrey  Cole', online: false },
    { name: 'Donnie  Summers', online: false },
    { name: 'Kate  Myers', online: false },
    { name: 'Priscilla Hawkins', online: false },
    { name: 'Joe Barker', online: false },
    { name: 'Lee Norman', online: false },
    { name: 'Ebony Rice', online: false }
  ];

  //
  // 'Forms' screen
  //
  $scope.rememberMe = true;
  $scope.email = 'me@example.com';

  $scope.login = function () {
    alert('You submitted the login form');
  };

  //
  // 'Drag' screen
  //
  $scope.notices = [];

  for (var j = 0; j < 10; j++) {
    $scope.notices.push({ icon: 'envelope', message: 'Notice ' + (j + 1) });
  }

  $scope.deleteNotice = function (notice) {
    var index = $scope.notices.indexOf(notice);
    if (index > -1) {
      $scope.notices.splice(index, 1);
    }
  };
});
