import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../movies-api";

export default function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getFetchReviews() {
      try {
        const data = await getReviews(moviesId);
        setReviews(data);
      } catch (error) {}
    }
    getFetchReviews();
  }, [moviesId]);

  return (
    <div>
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
