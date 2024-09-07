// Timer.js
import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { secondsRemaining, dispatch, question } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    dispatch({ type: "resetTimer" });

    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    // Cleaner FUnction
    return () => clearInterval(id);
  }, [dispatch, question]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
