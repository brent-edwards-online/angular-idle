'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngIdle'])

.config(['$routeProvider', 'IdleProvider', function($routeProvider, IdleProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

  IdleProvider.idle(5); // in seconds
	IdleProvider.timeout(5); // in seconds
}])

.controller('View1Ctrl', ['$scope','Idle',function($scope, Idle) {
    Idle.watch();
  
    $scope.$on('IdleStart', function() {
      // the user appears to have gone idle
      console.log('IdleStart');
    });
  
    $scope.$on('IdleWarn', function(e, countdown) {
      // follows after the IdleStart event, but includes a countdown until the user is considered timed out
      // the countdown arg is the number of seconds remaining until then.
      // you can change the title or display a warning dialog from here.
      // you can let them resume their session by calling Idle.watch()
      console.log('IdleWarn');
    });
  
    $scope.$on('IdleTimeout', function() {
      // the user has timed out (meaning idleDuration + timeout has passed without any activity)
      // this is where you'd log them
      console.log('IdleStart');
    });
  
    $scope.$on('IdleEnd', function() {
      // the user has come back from AFK and is doing stuff. if you are warning them, you can use this to hide the dialog
      console.log('IdleEnd');
    });
}]);
