function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="container">
      <h2>Favorite Movies</h2>

      <div className="movie-grid">
        {favorites.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
