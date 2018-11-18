app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "assets/js/scenes/home/home.html",
      controller: "homeController"
    })
    .when("/details/:id", {
      templateUrl: "assets/js/scenes/details/details.html",
      controller: "detailsController"
    });
});
