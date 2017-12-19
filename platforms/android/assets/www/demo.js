
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
  $routeProvider.when('/scroll', { templateUrl: 'scroll.html', reloadOnSearch: false });
  $routeProvider.when('/toggle', { templateUrl: 'toggle.html', reloadOnSearch: false });
  $routeProvider.when('/tabs', { templateUrl: 'tabs.html', reloadOnSearch: false });
  $routeProvider.when('/accordion', { templateUrl: 'accordion.html', reloadOnSearch: false });
  $routeProvider.when('/overlay', { templateUrl: 'overlay.html', reloadOnSearch: false });
  $routeProvider.when('/forms', { templateUrl: 'forms.html', reloadOnSearch: false });
  $routeProvider.when('/dropdown', { templateUrl: 'dropdown.html', reloadOnSearch: false });
  $routeProvider.when('/touch', { templateUrl: 'touch.html', reloadOnSearch: false });
  $routeProvider.when('/swipe', { templateUrl: 'swipe.html', reloadOnSearch: false });
  $routeProvider.when('/drag', { templateUrl: 'drag.html', reloadOnSearch: false });
  $routeProvider.when('/drag2', { templateUrl: 'drag2.html', reloadOnSearch: false });
  $routeProvider.when('/carousel', { templateUrl: 'carousel.html', reloadOnSearch: false });
});



//
// For this trivial demo we have just a unique MainController
// for everything
//
OSPLGmSysApp.controller('MainController', function ($rootScope, $scope) {

  var authData = window.localStorage.getItem("auth")
  if (authData == null) {
    location.href = 'auth.html'
  }

  onDeviceReady();
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    console.log('device ready')
    var db = window.openDatabase("ospl_gmsys", "1.0", "OSPL DB", 1000000);
    db.transaction(populateDB, errorCB, successCB);

  }

  function populateDB(tx) {
    // tx.executeSql('DROP TABLE IF EXISTS DEMO');
    // tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
    // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
    // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    // console.log('result')
    tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
  }

  function errorCB(err) {
    alert("Error processing SQL: " + err.code);
  }

  function successCB() {
    // alert("success!");
  }

  function queryDB(tx) {
    tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
  }

  function querySuccess(tx, results) {
    console.log(results);
    // this will be empty since no rows were inserted.
    console.log("Insert ID = " + results.rows[0].id);
    // this will be 0 since it is a select statement
    console.log("Rows Affected = " + results.rowAffected);
    // the number of rows returned by the select statement
    console.log("Rows Count = " + results.rows.length);
  }

  function errorCB(err) {
    console.log(err)
    alert("Error processing SQL: " + err.code);
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
