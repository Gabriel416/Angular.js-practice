app.controller("homeController", [
  "$scope",
  "movieData",
  "$location",
  function($scope, movieData, $location) {
    $scope.movieData = movieData;
    $scope.movieList = [];

    $scope.$watch("movieData.movieList", function(newVal, oldVal, scope) {
      if (newVal !== oldVal) {
        $scope.movieList = newVal;
      }
    });

    $scope.formatDate = function(date) {
      return moment(date).format("MMM Do YYYY");
    };

    $scope.setSelectedMovie = function(selectedMovie) {
      let moviePromise = movieData.setSelectedMovie(selectedMovie);
      moviePromise
        .then(response => {
          return;
        })
        .catch(err => {
          alert(err);
        });
    };
  }
]);
