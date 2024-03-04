import css from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../API/API.js';
import MovieCastCard from '../MovieCastCard/MovieCastCard.jsx';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCastData() {
      try {
        setError(false);
        setLoading(true);
        const fetchedCastData = await getMoviesCast(movieId);
        setCasts(fetchedCastData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCastData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!loading && !error && casts && (
        <>
          <ul className={css.list}>
            {casts.cast.map(cast => (
              <li className={css.listItem} key={cast.id}>
                <MovieCastCard cast={cast} />
              </li>
            ))}
          </ul>
        </>
      )}
      {!loading && !error && !casts && <p>Soory, but we don`t know this cast </p>}
    </>
  );
};

export default MovieCast;
