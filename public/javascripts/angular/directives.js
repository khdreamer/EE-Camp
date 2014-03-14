app.directive('fbComment', function () {
  return {
    restrict: "E",
    link: function (scope, element, attrs) {
      // FB.XFBML.parse(element);
      console.log("fbc");

    },
    template: '<div class="fb-comments" data-href="http://example.com/comments" data-width="630" data-numposts="5" data-colorscheme="light"></div>'
  }
});