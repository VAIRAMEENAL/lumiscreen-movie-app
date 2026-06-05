import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favourites";
import Watchlist from "./Pages/WatchList";
import MovieDetails from "./Pages/MovieDetails";

import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/watchlist"
          element={<Watchlist />}
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;