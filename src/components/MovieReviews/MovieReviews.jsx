import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../movies-api";
import Spinner from "../Spinner/Spinner";
export default function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getFetchReviews() {
      try {
        setLoading(true);
        const data = await getReviews(moviesId);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getFetchReviews();
  }, [moviesId]);

  return (
    <div>
      {loading && <Spinner />}
      {error && <p>Error....</p>}
      <ul>
        {reviews.length > 0 ? (
          reviews.map((el) => {
            return (
              <li key={el.id}>
                <h3>Author: {el.author}</h3>
                <p>{el.content}</p>
              </li>
            );
          })
        ) : (
          <p>Ther is no reviews </p>
        )}
      </ul>
    </div>
  );
}
