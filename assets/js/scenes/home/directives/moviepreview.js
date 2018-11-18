app.directive("moviePreview", [
  function() {
    return {
      restrict: "E",
      templateUrl: "/assets/js/scenes/home/moviepreview.html",
      replace: true,
      scope: {
        movieTitle: "@",
        moviePoster: "@",
        releaseDate: "@",
        setSelectedMovie: "&",
        formatDate: "&"
      }
    };
  }
]);
