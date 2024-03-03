const defaultImage =
  'https://st2.depositphotos.com/3994049/8290/v/950/depositphotos_82902580-stock-illustration-retro-movie-projector-vector-detailed.jpg';
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsCard = ({ movie: { poster_path, title, vote_average, overview, genres } }) => {
  return (
    <div>
      <img src={poster_path ? `${baseImageUrl}${poster_path}` : defaultImage} alt={title} />
      <h1>{title}</h1>
      <h2>
        User Score: <p>{vote_average}</p>
      </h2>
      <p>{overview}</p>
      <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
    </div>
  );
};
export default MovieDetailsCard;
