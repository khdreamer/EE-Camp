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
        console.log("contentt");

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
      templateUrl: "/javascripts/angular/views/faq.html"
    })
});

// app.run(function ($rootScope, $state, $stateParams) {
//   $rootScope.$state = $state;
//   $rootScope.$stateParams = $stateParams;
// });
