app.directive("searchBar", function() {
  return {
    restrict: "E",
    templateUrl: "assets/js/shared/directives/searchbar.html",
    replace: true,
    controller: [
      "$scope",
      "movieData",
      "$location",
      function($scope, movieData, $location) {
        $scope.movie = "";

        $scope.resetError = function() {
          $scope.error.show = false;
          $scope.error.message = "";
        };

        $scope.movieSearch = function() {
          $location.path("/");
          // reset error everytime this function gets called
          $scope.resetError();
          movieData
            .searchMovie($scope.movie)
            .then(data => {
              if (!data.length) {
                $scope.error.show = true;
                $scope.error.message = "No movies match your search";
              }
            })
            .catch(err => {
              $scope.error.show = true;
              $scope.error.message = err;
            });
        };

        $scope.error = {
          show: false,
          message: ""
        };
      }
    ]
    // scope: {}
  };
});
