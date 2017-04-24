angular.module('starter.controllers', [])
//login page controller
  .controller('LoginCtrl', function($scope, $ionicModal, $state, GoogleSignin) {
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
      GoogleSignin.signIn().then(function (user) {
        $state.go('home',{user: user});
        console.log(user);
      }, function (err) {
        console.log(err);
      });

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
  //home page controller
.controller('HomeCtrl', function($scope, $state, $http) {
  if(!$state.params.user){
    $state.go('login');
  }

  $scope.user = $state.params.user;

  $scope.userName = $scope.user ? $scope.user.w3.ig : "";

  $scope.testServerConnect = function(){

    $http.get("http://sportsmeetup-160707.appspot.com/greeting?name=Dhara")
      .then(function(response) {
        //use server returned data here
      });
  }
});
