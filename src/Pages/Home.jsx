import { useEffect, useState } from "react";
import {
  fetchTrendingMovies,
  searchMovies,
} from "../Services/api.jsx";

import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import GenreFilter from "../components/GenreFilter";

function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedGenre, setSelectedGenre] = useState("All");

  const moviesPerPage = 8;

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    filterMovies();
  }, [selectedGenre, movies]);

  const getMovies = async () => {
    const data = await fetchTrendingMovies();

    setMovies(data);
    setFilteredMovies(data);
  };

  const handleSearch = async () => {
    if (search.trim() === "") {
      getMovies();
      return;
    }

    const data = await searchMovies(search);

    setMovies(data);
    setFilteredMovies(data);
  };

  const filterMovies = () => {
    if (selectedGenre === "All") {
      setFilteredMovies(movies);
      return;
    }

    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(getGenreId(selectedGenre))
    );

    setFilteredMovies(filtered);
  };

  const getGenreId = (genre) => {
    const genreMap = {
      Action: 28,
      Comedy: 35,
      Animation: 16,
      Horror: 27,
      Thriller: 53,
      Drama: 18,
    };

    return genreMap[genre];
  };

  // Pagination Logic

  const lastMovieIndex = currentPage * moviesPerPage;

  const firstMovieIndex = lastMovieIndex - moviesPerPage;

  const currentMovies = filteredMovies.slice(
    firstMovieIndex,
    lastMovieIndex
  );

  const totalPages = Math.ceil(
    filteredMovies.length / moviesPerPage
  );

  return (
    <div className="container">
      <SearchBar search={search} setSearch={setSearch} />

      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>

      <GenreFilter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <div className="movie-grid">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;
