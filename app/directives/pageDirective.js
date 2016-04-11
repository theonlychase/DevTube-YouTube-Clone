//This directive is used for pagination if you decide you want to add new features to the app

angular.module('videos')

  .directive('paginated', function() {
    return {
      restrict: 'EA',
      template: '<nav style="text-align: center" ng-cloak> <ul class="pagination"><li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo; Previous</span></a></li><li><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#" aria-label="Next"><span aria-hidden="true">Next &raquo;</span></a></li></ul></nav>'
    }

  })
