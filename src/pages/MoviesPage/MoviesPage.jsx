import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../movies-api";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [queryName, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";

  const location = useLocation();

  useEffect(() => {
    async function fetchSearchMovies() {
      try {
        setLoading(true);
        const data = await searchMovies(queryName);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchSearchMovies();
  }, [queryName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nameMovie = form.elements.search.value;
    setSearchParams({ query: nameMovie });
    setQuery(nameMovie);

    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
