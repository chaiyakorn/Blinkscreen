// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('AppCtrl', function($scope) {
    $scope.moveButtons = function() {
        var buttons = document.getElementById('buttons');
 
        move(buttons)
        .ease('in-out')
        .y(200)
        .duration('0.5s')
        .end();
    };
    $scope.animateVisuals = function () {
        var bg = document.getElementById('contentBG');
        var header = document.getElementById('header');
        move(bg)
        .set('padding', '10%')
        .duration('2s')
        .end(function () {
            move(header)
            .set('background-color', '#4DB6AC')
            .duration('2s')
            .end();
        });
    };
    $scope.blink = function () {
        var bg = document.getElementById('contentBG');

        var highlightBack = move(bg)
        .set('background', '#FFFFFF')
        .duration('0.2s')
        .delay('10ms')

        .end();

        var highlight = move(bg)
        .set('background', '#B9F6CA')
        .duration('0.2s')
        .then(highlightBack)
        .end();
    };

    $scope.blink2 = function () {
        var bg = document.getElementById('contentBG');
       
        var highlightBack = move(bg)
        .set('background', '#FFFFFF')
        .duration('0.2s')
        .delay('10ms')
        .end();

        var highlight = move(bg)
        .set('background', '#B9F6CA')
        .duration('0.2s')
        .then(highlightBack)
        .end();
    };
});
