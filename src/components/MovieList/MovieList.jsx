import MovieCard from '../MovieCard/MovieCard';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.list}>
        {moviesList.map(movie => (
          <li className={css.listItem} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
