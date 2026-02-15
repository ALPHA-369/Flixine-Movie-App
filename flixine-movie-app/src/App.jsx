import "./App.css";
import Search from "./components/search";
import { useState, useEffect } from "react";
import Spinner from "./components/spinner";
import MovieCard from "./components/MovieCard";

const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const endpoint = `${API_BASE_URL}discover/movie?include_adult=false&include_video=true&&page=1&sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.Response === "False") {
        setErrorMsg(data.Error || "No movies found.");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
      console.log(data.results);
    } catch (error) {
      console.error(error);
      setErrorMsg("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero banner" />
          <h1>
            Explore our vast collection of awesome{" "}
            <span className="text-gradient">movies</span> & {""}
            <span className="text-gradient">TV shows</span>!
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <div className="all-movies">
          <h2 className="mt-[45px]">All Movies</h2>

          {isLoading ? (
            Spinner({ loading: isLoading })
          ) : errorMsg ? (
            <p className="text-red-500">{errorMsg}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}

          {errorMsg && <p className="error">{errorMsg}</p>}
        </div>
      </div>
    </main>
  );
};

export default App;
