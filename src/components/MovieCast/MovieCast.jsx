import css from "./MovieCast.module.css";
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
    if (!moviesId) return;
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

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  return (
    <div>
      {loading && <Spinner />}
      {error && <p>Error...</p>}
      <ul>
        {actors.length > 0 &&
          actors.map((el) => {
            const mainPhotoURL = `https://image.tmdb.org/t/p/w200${el.profile_path}`;
            return (
              <li key={el.id}>
                {/* <img src={mainPhotoURL} alt={el.name} /> */}

                <img
                  src={
                    mainPhotoURL
                      ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                      : defaultImg
                  }
                  width={200}
                  alt="poster"
                />
                <h3 className={css.actorName}>{el.name}</h3>
                <p className={css.actorCharacter}>
                  <b>Character:</b> {el.character}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
