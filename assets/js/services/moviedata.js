app.service("movieData", [
  "$http",
  "$location",
  function($http, $location) {
    const self = this;
    this.movieList = null;
    this.selectedMovie = null;

    this.searchMovie = function(title) {
      return new Promise((resolve, reject) => {
        $http.get(url).then(
          function(response) {
            //First function handles success
            console.log(response, "api response");
            self.movieList = response.data.results;
            resolve(response.data.results);
          },
          function(err) {
            //todo better error handling later
            reject(err);
          }
        );
      });
    };

    this.setSelectedMovie = function(selectedMovie) {
      return new Promise((resolve, reject) => {
        $http.get(url).then(
          response => {
            self.selectedMovie = response.data;
            console.log(self.selectedMovie, "specific movie data");
            $location.path(`/details/${response.data.id}`);
            resolve(response.data);
          },
          err => {
            reject(err);
          }
        );
      });
    };
  }
]);
