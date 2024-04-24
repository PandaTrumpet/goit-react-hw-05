import { Link, Outlet } from "react-router-dom";
// import MovieReviews from "../../components/MovieReviews/MovieReviews";
// import MovieCast from "../../components/MovieCast/MovieCast";
export default function MovieDetailsPage() {
  return (
    <div>
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
