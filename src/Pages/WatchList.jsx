function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  return (
    <div className="container">
      <h2>Watchlist</h2>

      <div className="movie-grid">
        {watchlist.map((movie) => (
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

export default Watchlist;
