angular.module('videos')
  .service('mainService', function($http, $q) {

    var formatData = function (data, pageNumber) {
      return {
        videoId: data.videoId,
        title: data.title,
        description: data.description,
        image: data.img.medium,
        // videoUrl: 'https://www.youtube.com/watch?v=' + data.videoId
        // pageTwo: 'https://www.youtube.com/watch?v=' + data.videoId + '&page=' + pageNumber //Uncomment for pagination development
      };
    };

    var formatDownloads = function (download) {
      return {
        imageD: download.img,
        titleD: download.title,
        map: download.map
      };
    };

    this.getVideo = function(search) {
      var deferred = $q.defer();

      $http({
        method: "GET",
        url: 'https://zazkov-youtube-grabber-v1.p.mashape.com/search.video.php?maxResults=10&pageToken=2&query=' + search
      }).then(function(response) {
        var parsedResponse = response.data.data;
        var videos = [];
        for (var i = 0; i < parsedResponse.length; i++) {
          videos.push(formatData(parsedResponse[i]));
        }
        deferred.resolve(videos);
        console.log(videos);
      })
      return deferred.promise;
  }
    //The below code is a start to add the ability to actually download the youtube video. Uncomment to continue development of this feature :)

    // this.getDownload = function() {
    //   var deferred = $q.defer();

    //   $http({
    //     method: "GET",
    //     url: 'https://zazkov-youtube-grabber-v1.p.mashape.com/download.video.php?id=' + videoSlug
    //   }).then(function (response) {
    //     var parsedResponse2 = response.data.data;
    //     var downloads = [];
    //     for (var i = 0; i < parsedResponse2.length; i++) {
    //       downloads.push(formatDownloads(parsedResponse2[i]));
    //     }
    //     deferred.resolve(downloads);
    //     console.log(downloads);
    //   })
    //   return deferred.promise;
    // }

});
