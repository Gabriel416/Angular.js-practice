app.controller("detailsController", [
  "$scope",
  "movieData",
  "$filter",
  "$location",
  function($scope, movieData, $filter, $location) {
    $scope.selectedMovie = movieData.selectedMovie;

    $scope.$watch("selectedMovie", function(newVal, oldVal, scope) {
      if (!newVal) {
        $location.path("/");
      }
    });

    $scope.formatDate = function(date) {
      let formattedDate = moment(date).format("MMM Do YYYY");
      let dateObject = {
        day: null,
        month: null,
        year: null
      };
      let splitDate = formattedDate.split(" ");
      dateObject.month = splitDate[0];
      dateObject.day = splitDate[1];
      dateObject.year = splitDate[2];
      return dateObject;
    };

    $scope.range = function(n) {
      return new Array(n);
    };
  }
]);
