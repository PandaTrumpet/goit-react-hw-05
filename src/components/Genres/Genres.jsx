export default function Genres({ data: { genres } }) {
  return (
    <>
      <h3>Genres</h3>
      <ul>
        {genres.map((el) => {
          return <li key={el.id}>{el.name}</li>;
        })}
      </ul>
    </>
  );
}
