export default function Options({ data, total, reset }) {
  return (
    <>
      <button onClick={() => data("good")}>Good</button>
      <button onClick={() => data("neutral")}>Neutral</button>
      <button onClick={() => data("bad")}>Bad</button>
      {total !== 0 && (
        <>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </>
  );
}
