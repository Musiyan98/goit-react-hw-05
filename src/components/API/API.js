import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjQ2OGFlZmM0MTJhNWIxOTBhYTc2NThlNmU0N2NjYyIsInN1YiI6IjYzM2RkNGFmNDJmMTlmMDA4MTk3MWJmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TCclO1jUZGl1Zv7PUb9KwE7C6gZiJI7nUcwv1qP8Sn0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

export const getTrendMovies = async () => {
  const response = await axios.get('trending/movie/day');
  console.log('getTrendMovies', response.data.results);
  return response.data.results;
};

export const getFilm = async query => {
  const response = await axios.get('search/movie', {
    params: {
      query: query,
    },
  });
  console.log('getFilm', response.data.results);
  return response.data.results;
};

export const getMoviesId = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  console.log('getMoviesId', response.data);
  return response.data;
};

export const getMoviesCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  console.log('getMoviesCast', response.data);
  return response.data;
};

export const getMoviesReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  console.log('getMoviesReviews', response.data);
  return response.data.results;
};
