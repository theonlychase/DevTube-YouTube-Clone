angular.module('videos', ['ui.router', 'youtube-embed',])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    //Custom $http header
    $httpProvider.defaults.headers.get = { 'X-Mashape-Key' : 'ox2XQuANM0mshFhASNXrHNLHrx96p1vc3CIjsnHU4WbBwOO5Dr', 'Accept': 'application/json' };

    $stateProvider
    
      .state('main', {
        url: '/main',
        templateUrl: 'app/views/main.html',
        controller: 'mainController'
      })
      
      .state('main.watchvideos', {
        url: '/videos/:search/:title',
        templateUrl: 'app/views/watchvideos.html',
        controller: 'videoController',
        resolve: {
            search: function($stateParams) {
                return $stateParams.search;
            },
            title: function($stateParams) {
                return $stateParams.title;
            }
        }
      })
    
    //   .state('main.pagination', {
    //     url: '/videos?page',
    //     templateUrl: 'app/views/videos.html',
    //     controller: 'searchController',
    //     params: {
    //         page: {
    //         value: '0',
    //         squash: true
    //         }
    //     }
    //   })
      
      .state('main.videos', {
        url: '/videos',
        templateUrl: 'app/views/videos.html',
        controller: 'searchController'
    })

    $urlRouterProvider
      .otherwise('/main');

  });
