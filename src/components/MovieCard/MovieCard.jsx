const defaultImage =
  'https://st2.depositphotos.com/3994049/8290/v/950/depositphotos_82902580-stock-illustration-retro-movie-projector-vector-detailed.jpg';
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
const MovieCard = ({ movie: { poster_path, title } }) => {
  return (
    <div className="gallery__card">
      <img
        className="gallery__foto"
        src={poster_path ? `${baseImageUrl}${poster_path}` : defaultImage}
        alt={title}
        loading="lazy"
      />
      <h2 className="gallery__subtitle">{title}</h2>
    </div>
  );
};
export default MovieCard;
