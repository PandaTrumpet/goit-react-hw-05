import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getMoviesId } from "../../movies-api";
import Genres from "../../components/Genres/Genres";
import { Suspense } from "react";
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
  const location = useLocation();
  const backLinkURL = useRef(location.state) ?? "/movies";
  return (
    <div>
      <div>
        <Link to={backLinkURL.current}>Go back</Link>
      </div>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${dataMovie.backdrop_path}`}
            alt={`Photo of film ${dataMovie.title}`}
          />
        </div>
        <h2>{dataMovie.title}</h2>
        <p>User score: {`${dataMovie.vote_average * 10}% `}</p>

        <h3>Overview</h3>
        <p>{dataMovie.overview}</p>
        {genres && <Genres data={dataMovie} />}
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<p>The page is loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
