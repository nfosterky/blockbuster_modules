window.blockbuster = (function () {
  var movies = [{
    title: 'No Country For Old Men'
  },{
    title: 'Jurassic Park'
  },{
    title: 'Zoolander'
  }];

  function addMovie (title) {
    // verify title is string
    movies.push({
      title: title
    });
  }

  function getMovie (title) {
    movies.filter(function (movie) {
      return movie.title === title;
    });
  }

  function getAllMovies () {
    return movies;
  }

  return {
    addMovie,
    getMovie,
    getAllMovies
  };

})();
