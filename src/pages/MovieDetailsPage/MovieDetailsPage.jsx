import { useEffect, useRef, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import css from "./MovieDetailsPage.module.css";
import Spinner from "../../components/Spinner/Spinner";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getMoviesId } from "../../movies-api";
import Genres from "../../components/Genres/Genres";
import { Suspense } from "react";
export default function MovieDetailsPage() {
  const [dataMovie, setDataMivie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { moviesId } = useParams();
  const genres = dataMovie.genres;
  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const data = await getMoviesId(moviesId);
        setDataMivie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [moviesId]);
  const location = useLocation();
  const backLinkURL = useRef(location.state) ?? "/movies";
  return (
    <div>
      <div>
        <Link to={backLinkURL.current} className={css.back}>
          {<GoArrowLeft />}Go back
        </Link>
      </div>
      {loading && <Spinner />}
      <div className={css.pageContainer}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${dataMovie.backdrop_path}`}
            alt={`Photo of film ${dataMovie.title}`}
          />
        </div>
        <div className={css.informContainer}>
          <h2>{dataMovie.title}</h2>
          <p>User score: {`${dataMovie.vote_average * 10}% `}</p>

          <h3>Overview</h3>
          <p>{dataMovie.overview}</p>
          {genres && <Genres data={dataMovie} />}
        </div>
      </div>
      {error && <p>Error....</p>}
      <hr />
      <p className={css.addInfo}>Additional information</p>
      <ul className={css.list}>
        <li className={css.listItem}>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<p>The page is loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
