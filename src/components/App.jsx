import { useState, useEffect } from "react";
import Description from "./description/Description ";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";
import Notification from "./notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const LS = localStorage.getItem("feedback");

    if (LS !== null) {
      return JSON.parse(LS);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options
        total={totalFeedback}
        data={updateFeedback}
        reset={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback total={totalFeedback} meaning={feedback} />
      )}
    </>
  );
}
