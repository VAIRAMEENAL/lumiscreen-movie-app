import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const addFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push(movie);

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const addWatchlist = () => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    watchlist.push(movie);

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  };

  return (
    <div className="movie-card">
      <img src={image} alt={movie.title} />

      <h3>{movie.title}</h3>

      <p>⭐ {movie.vote_average}</p>

      <Link to={`/movie/${movie.id}`}>
        <button>View Details</button>
      </Link>

      <button onClick={addFavorite}>❤️ Favorite</button>

      <button onClick={addWatchlist}>📌 Watchlist</button>
    </div>
  );
}

export default MovieCard;
