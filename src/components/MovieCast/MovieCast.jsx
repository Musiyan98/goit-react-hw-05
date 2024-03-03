import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../../components/API/API.js';

const defaultImage =
  'https://st2.depositphotos.com/3994049/8290/v/950/depositphotos_82902580-stock-illustration-retro-movie-projector-vector-detailed.jpg';
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    async function fetchCastData() {
      try {
        const fetchedCastData = await getMoviesCast(movieId);
        setCasts(fetchedCastData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCastData();
  }, [movieId]);

  return (
    <>
      {casts && (
        <div>
          <ul>
            {casts.cast.map(cast => (
              <li key={cast.id}>
                <img
                  src={cast.profile_path ? `${baseImageUrl}${cast.profile_path}` : defaultImage}
                  alt={cast.name}
                />
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MovieCast;
