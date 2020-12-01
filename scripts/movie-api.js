const API_KEY = "a2ef58e9";

function searchMovies(searchTerm) {
    const uri = encodeURI(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    return fetch(uri)
        .then(function(response) {
            return response.json();
        });
}