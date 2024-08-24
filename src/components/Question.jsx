/* eslint-disable no-unused-vars */
import Options from "./Options";
import Timer from "./Timer";
/* eslint-disable react/prop-types */
function Start({ question, dispatch, answer, secondsRemaining }) {
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
