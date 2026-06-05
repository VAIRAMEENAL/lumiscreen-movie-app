import axios from "axios";

const API_KEY = "ccdca8bf450be231e8488472b75f86c2";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );

  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  return response.data;
};

