import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../Services/api.jsx";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const data = await fetchMovieDetails(id);
    setMovie(data);
  };

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="details-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div>
        <h1>{movie.title}</h1>

        <p>{movie.overview}</p>

        <p>⭐ {movie.vote_average}</p>

        <p>📅 {movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
