import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMoviesId } from '../../components/API/API';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';
import LinkBackBtn from '../../components/LinkBackBtn/LinkBackBtn';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import Loader from '../../components/Loader/Loader.jsx';

const MovieDetailsPage = () => {
  const location = useLocation();
  const LinkBackBtnRef = useRef(location.state);

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await getMoviesId(movieId);
        console.log(response);
        setMovie(response);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchMovie();
  }, [movieId]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      {error && <ErrorMessage />}
      <LinkBackBtn href={LinkBackBtnRef.current ?? '/movies'}>Back to all Movies</LinkBackBtn>

      {movie && (
        <div>
          <MovieDetailsCard movie={movie} />
          <div className={css.nav}>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
