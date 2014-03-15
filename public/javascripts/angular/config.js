app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to landing
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('landing', {
      url: "/",
      template: " ",
      onEnter: function($rootScope){

        $rootScope.isContent = false;
        console.log("landing");

      }
    })
    .state('content', {
      abstract: true,
      url: "/",
      templateUrl: "/javascripts/angular/views/content.html",
      onEnter: function($rootScope){

        $rootScope.isContent = true;
        console.log("content");

      }
    })
    .state('content.news', {
      url: "news",
      templateUrl: "/javascripts/angular/views/news.html"
    })
    .state('content.register', {
      url: "register",
      templateUrl: "/javascripts/angular/views/register.html"
    })
    .state('content.info', {
      url: "info",
      templateUrl: "/javascripts/angular/views/info.html"
    })
    .state('content.photo', {
      url: "photo",
      templateUrl: "/javascripts/angular/views/photo.html"
    })
    .state('content.faq', {
      url: "faq",
      templateUrl: "/javascripts/angular/views/faq.html",
      onEnter: function($rootScope){

        $rootScope.isContent = true;
        console.log("content");

        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'eecamp2014'; // required: replace example with your forum shortname

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();

      }
    })
});

// app.run(function ($rootScope, $state, $stateParams) {
//   $rootScope.$state = $state;
//   $rootScope.$stateParams = $stateParams;
// });
