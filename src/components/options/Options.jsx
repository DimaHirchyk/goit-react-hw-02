export default function Options({ data, total }) {
  return (
    <>
      <button onClick={() => data("good")}>Good</button>
      <button onClick={() => data("neutal")}>Neutal</button>
      <button onClick={() => data("bad")}>Bad</button>
      {total === 0 ? (
        ""
      ) : (
        <>
          <button onClick={() => data(0)}>Reset</button>
        </>
      )}
    </>
  );
}
