import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getMoviesId } from "../../movies-api";
import Genres from "../../components/Genres/Genres";
// import MovieReviews from "../../components/MovieReviews/MovieReviews";
// import MovieCast from "../../components/MovieCast/MovieCast";
export default function MovieDetailsPage() {
  const [dataMovie, setDataMivie] = useState({});
  const { moviesId } = useParams();
  const genres = dataMovie.genres;
  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMoviesId(moviesId);
        setDataMivie(data);
      } catch (error) {}
    }
    fetchMovie();
  }, [moviesId]);
  // const genres = { dataMovie.genres };
  return (
    <div>
      {/* <p>Movie id- {moviesId}</p> */}
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${dataMovie.backdrop_path}`}
            alt=""
          />
        </div>
        <h2>{dataMovie.title}</h2>
        <p>User score: {`${dataMovie.vote_average * 10}% `}</p>

        <h3>Overview</h3>
        <p>{dataMovie.overview}</p>
        {genres && <Genres data={dataMovie} />}
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
