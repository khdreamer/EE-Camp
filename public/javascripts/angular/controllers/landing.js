app.controller('landingCtrl', function ($scope, $rootScope, $state) {

  $rootScope.isContent = ($state.current.name.indexOf("content") > -1 );
  $scope.nav_items = nav_items;
  $scope.news = news;

  $scope.toPage = function(state){

    $rootScope.isContent = true;
    console.log(state);
    $state.go(state);

  }
  
});