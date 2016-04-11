//The reason this directive is created is so that the jQuery functions for the sideNav will work with Angular.
angular.module('videos')

  .directive('sidebutton', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/sidebutton.html',
      link: function(scope, element, attributes) {
        $(document).ready(function(){
          // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
          $('.navbar-toggle').click(function () {
          $('.navbar-nav').toggleClass('slide-in');
          $('.side-body').toggleClass('body-slide-in');
          $('#search').removeClass('in').addClass('collapse').slideUp(200);

        /// uncomment code for absolute positioning tweek see top comment in css
        $('.absolute-wrapper').toggleClass('slide-in');
        
    });
   
        // Remove menu for searching
        $('#search-trigger').click(function () {
                $('.navbar-nav').removeClass('slide-in');
                $('.side-body').removeClass('body-slide-in');

                /// uncomment code for absolute positioning tweek see top comment in css
                $('.absolute-wrapper').removeClass('slide-in');

        });
      });
     }
   };


});