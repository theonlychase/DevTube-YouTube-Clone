angular.module('videos')

  .controller('searchController', function($scope, $stateParams, $state) {

    //This function returns the value which is being watched
    $scope.$parent.$watch('finalData', function() {
      $scope.searchResults = $scope.$parent.finalData;
    })

    

  })
