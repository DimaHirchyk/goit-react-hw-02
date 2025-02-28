export default function Feedback({ meaning, total, persent }) {
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
