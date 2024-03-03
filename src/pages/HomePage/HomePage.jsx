import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { getTrendMovies } from '../../components/API/API.js';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  console.log('home', location);

  const trendingFilms = async () => {
    try {
      setLoading(true);
      const response = await getTrendMovies();
      setMovies(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    trendingFilms();
  }, []);

  return (
    <div>
      {!error && <h1>Trending Today</h1>}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList moviesList={movies} />}
      {loading && <Loader />}
    </div>
  );
};
export default HomePage;
