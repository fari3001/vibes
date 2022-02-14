var axios = require("axios").default;

const URL = 'https://shazam-core.p.rapidapi.com/v1/artists/details'


const options = {
  params: {artist_id: '43328183'},
  headers: {
    'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
    'x-rapidapi-key': '22264506a0msha725dfa36378936p1e6addjsnd2c98d708a0d'
  }
};

export const getMusicData = async () => {
  try {
    const {data} = await axios.get(URL, options);
    return data
  } catch (error) {
    console.log(error)
  }
}