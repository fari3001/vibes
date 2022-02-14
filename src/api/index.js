var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://shazam-core.p.rapidapi.com/v1/artists/details',
  params: {artist_id: '43328183'},
  headers: {
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
    'x-rapidapi-key': '22264506a0msha725dfa36378936p1e6addjsnd2c98d708a0d'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});