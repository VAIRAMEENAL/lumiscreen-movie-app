function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={prevPage}>⬅ Prev</button>

      <span style={{color:"gray"}}>
        Page {currentPage} of {totalPages}
      </span>

      <button onClick={nextPage}>Next ➡</button>
    </div>
  );
}

export default Pagination;