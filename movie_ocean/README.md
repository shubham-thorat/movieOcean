<!-- const options = {
  method: 'GET',
  url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
  params: {type: 'get-movies-by-title', title: 'matrix'},
  headers: {'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

//search movies by title


//movies details
const options = {
  method: 'GET',
  url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
  params: {type: 'get-movie-details', imdb: 'tt2935510'},
  headers: {'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


//movies images
onst options = {
  method: 'GET',
  url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
  params: {type: 'get-movies-images-by-imdb', imdb: 'tt1375666'},
  headers: {'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
}); -->

FEATURED_API = https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a008b1&page=1
