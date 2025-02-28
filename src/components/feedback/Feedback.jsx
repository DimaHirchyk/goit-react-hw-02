export default function Feedback({ meaning, total }) {
  const persent = Number(Math.round((meaning.good / total) * 100));

  return (
    <>
      <p>Good: {meaning.good} </p>
      <p>Neutral: {meaning.neutral}</p>
      <p>Bad: {meaning.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {persent}%</p>
    </>
  );
}
