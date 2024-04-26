import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../movies-api";
export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  async function fetchSearchMovies(nameMovie) {
    try {
      setLoading(true);
      const data = await searchMovies(nameMovie);
      setMovies(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nameMovie = form.elements.search.value;
    // console.log(nameMovie);
    fetchSearchMovies(nameMovie);
    // searchMovies();
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
