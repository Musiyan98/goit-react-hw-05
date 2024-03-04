import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getFilmsByQuery } from '../../components/API/API.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  // const location = useLocation();

  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const search = params.get('search') ?? '';

  const changeSearch = newSearch => {
    params.set('search', newSearch);
    setParams(params);
  };

  const searchFilms = async query => {
    try {
      setError(false);
      setLoading(true);
      const response = await getFilmsByQuery(query);
      setFilms(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (search.trim() !== '') {
      searchFilms(search);
    }
  }, [search]);

  return (
    <div>
      {!loading && <SearchBar onSearch={changeSearch} value={search} />}
      {error && <ErrorMessage />}
      {films.length > 0 && <MovieList moviesList={films} />}
      {loading && <Loader />}
      <>{!films && !loading && <MovieList items={films} />}</>
    </div>
  );
};

export default MoviesPage;
