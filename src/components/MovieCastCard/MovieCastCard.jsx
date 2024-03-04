const defaultImage =
  'https://st2.depositphotos.com/3994049/8290/v/950/depositphotos_82902580-stock-illustration-retro-movie-projector-vector-detailed.jpg';
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

const MovieCastCard = ({ cast: { profile_path, name, character } }) => {
  return (
    <div>
      <img src={profile_path ? `${baseImageUrl}${profile_path}` : defaultImage} alt={name} />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </div>
  );
};

export default MovieCastCard;
