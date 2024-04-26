import { getActors } from "../../movies-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
export default function MovieCast() {
  const [actors, setActors] = useState([]);
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchGetActorc() {
      try {
        setLoading(true);
        const data = await getActors(moviesId);
        setActors(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchGetActorc();
  }, [moviesId]);
  return (
    <div>
      {loading && <Spinner />}
      {error && <p>Error...</p>}
      <ul>
        {actors.length > 0 &&
          actors.map((el) => {
            return (
              <li key={el.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                  alt=""
                />
                <p>{el.name}</p>
                <p>Character: {el.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
