import { findMovie } from "../../movies-api";
import Spinner from "../../components/Spinner/Spinner";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await findMovie();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      {loading && <Spinner />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <p>Write correct title...</p>}
    </>
  );
}
