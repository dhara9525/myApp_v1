angular.module('starter.controllers', [])

  .controller('LoginCtrl', function($scope, $ionicModal, $state) {
    $scope.loginData = {};
    $scope.hideLogin = false;

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/loginModal.html', {
      scope: $scope,
      backdropClickToClose: false
    }).then(function(modal) {
      $scope.modal = modal;
    });


    $scope.login = function() {
      $scope.modal.show();
      $scope.hideLogin = true;
    };

    $scope.doLogin = function() {
      $scope.closeLogin();
    };

    $scope.closeLogin = function() {
      $scope.modal.hide();
      $scope.hideLogin = false;
      $state.go('home',{user: $scope.loginData.username});
    };
  })

.controller('HomeCtrl', function($scope, $state) {
  if(!$state.params.user){
    $state.go('login');
  }

  $scope.userName = $state.params.user;
});
