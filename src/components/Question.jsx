/* eslint-disable react/prop-types */

import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import Timer from "./Timer";

function Start() {
  const { question, dispatch, answer, secondsRemaining } = useQuiz();
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      <Timer
        dispatch={dispatch}
        secondsRemaining={secondsRemaining}
        question={question}
      />
    </div>
  );
}

export default Start;
