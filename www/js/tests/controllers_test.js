/**
 * Created by dharatamhane on 3/4/17.
 */
describe("Sports Meetup JS controllers suite", function () {
  var scope, createController, ionicModal, state, controller;

  beforeEach(function () {
    module('starter.controllers');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      createController = function(){
          return $controller('LoginCtrl', {
            $scope : scope,
            $ionicModal: {
              fromTemplateUrl : function () {
                return {
                  then :  function () {
                  }
                }
              }
            },
            $state: state
          });
      }

    });
  });

  it("tests if variable a has correct value", function () {
    var a = 1 + 6;
    expect(a).toBe(7);
  });

  it("initializes login controller", function () {
    var login = createController();
    expect(scope.loginData).toEqual({});
    expect(scope.hideLogin).toBe(false);
  });

});
