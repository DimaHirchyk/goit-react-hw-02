import { useState, useEffect } from "react";
import Decription from "./description/Deccription";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const LS = localStorage.getItem("feedback");

    if (LS !== null) {
      return JSON.parse(LS);
    }
    return {
      good: 0,
      neutal: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === 0) {
      setFeedback({ good: 0, neutal: 0, bad: 0 });
    } else {
      setFeedback((prev) => ({
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      }));
    }
  };

  const totalFeedback = feedback.good + feedback.neutal + feedback.bad;

  return (
    <>
      <Decription />
      <Options total={totalFeedback} data={updateFeedback} />
      <Feedback total={totalFeedback} meaning={feedback} />
    </>
  );
}
