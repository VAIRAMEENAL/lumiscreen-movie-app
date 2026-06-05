function GenreFilter({ selectedGenre, setSelectedGenre }) {
  const genres = [
    "All",
    "Action",
    "Comedy",
    "Animation",
    "Horror",
    "Thriller",
    "Drama",
  ];

  return (
    <div className="genre-filter">
      {genres.map((genre) => (
        <button
          key={genre}
          className={selectedGenre === genre ? "active-genre" : ""}
          onClick={() => setSelectedGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;