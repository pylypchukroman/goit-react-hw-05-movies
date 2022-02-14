import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: 'b30723d90054545e6fdab6d6887d20fb',
  language: 'en-US',
};

export const getMoviesList = () => {
  return axios
    .get('/3/trending/movie/day?')
    .then(res => res.data.results)
    .catch(error => {
      throw error;
    });
};

export const getMoviesDetails = id => {
  return axios
    .get(`/3/movie/${id}?`)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
};
