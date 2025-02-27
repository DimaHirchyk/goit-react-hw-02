export default function Feedback({ meaning, total }) {
  const persent = Number(Math.round((meaning.good / total) * 100));

  return (
    <>
      {total === 0 ? (
        <p>Not Feedbak yet</p>
      ) : (
        <>
          <p>Good: {meaning.good} </p>
          <p>Neutral: {meaning.neutal}</p>
          <p>Bad: {meaning.bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {persent}%</p>
        </>
      )}
    </>
  );
}
