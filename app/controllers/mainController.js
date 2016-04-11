angular.module('videos')
  .controller('mainController', function($scope, $stateParams, mainService, $state) {

    //This function calls the getVideo function from the mainService and returns finalData
    $scope.getData = function() {
      $state.go('main.videos');
      mainService.getVideo($scope.video).then(function (dataFromService) {
        $scope.finalData = dataFromService;
      })
    }
    
    //This is to show how you can create the links in the side navigation using ng-repeat. Add ng-class and style each link dynamically in main.html
    $scope.states = {};
    $scope.states.activeItem = 'item1';
    $scope.items = [{
        id: 'item1',
        title: 'Home',
        icon: 'home'
    }, {
        id: 'item2',
        title: 'My Channel',
        icon: 'user'
    }, {
        id: 'item3',
        title: 'Subscriptions',
        icon: 'expand'
    }, {
        id: 'item4',
        title: 'History',
        icon: 'hourglass'
    }, {
        id: 'item5',
        title: 'Watch Later',
        icon: 'time'
    }];

});
