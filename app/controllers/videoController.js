angular.module('videos')

  .controller('videoController', function($scope, $stateParams, search, title, mainService) {

    $scope.search = 'https://www.youtube.com/watch?v=' + search

    $scope.title = title;

    $scope.videoLink = function() {
      mainService.getDownload($scope.videoSlug).then(function (dataFromService) {
        $scope.finalDownload = dataFromService;
      })
    }

  })
