import css from "./Genres.module.css";
export default function Genres({ data: { genres } }) {
  return (
    <>
      <h3>Genres</h3>
      <ul className={css.genreList}>
        {genres.map((el) => {
          return (
            <li key={el.id} className={css.genreItem}>
              {el.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
