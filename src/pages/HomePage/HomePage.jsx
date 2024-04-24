import { findMovie } from "../../movies-api";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [movues, setMovies] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = findMovie();
        setMovies(data);
      } catch (error) {
        setError(true);
      }
    }
    fetchMovies();
  });
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
