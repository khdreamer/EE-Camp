app.controller('contentCtrl', function ($scope, $rootScope, $state) {

  $scope.news = news;
  $scope.faqs = faqs;
  $scope.info = info;
  $scope.intro = intro;
  const from = 201;
  const to = 275;

  // photo gallary
  $scope.photo_range = _.range(from, to+1);
  $scope.show = false;
  $scope.photo_idx = 201;

  $scope.showImage = function(idx){

    $scope.photo_idx = idx;
    $scope.show = true;

  }

  $scope.close = function(){

    $scope.show = false;

  }

  $scope.next = function(){

    $scope.photo_idx++;
    if($scope.photo_idx > to) $scope.photo_idx = from;

  }

  $scope.prev = function(){

    $scope.photo_idx--;
    if($scope.photo_idx < from) $scope.photo_idx = to;

  }

});