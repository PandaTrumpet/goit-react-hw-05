import { getActors } from "../../movies-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const [actors, setActors] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchGetActorc() {
      try {
        const data = await getActors(moviesId);
        setActors(data);
      } catch (error) {}
    }
    fetchGetActorc();
  }, [moviesId]);
  return (
    <div>
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
              </li>
            );
          })}
      </ul>
    </div>
  );
}
