import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPoints, highScore, dispatch } = useQuiz();
  const percentage = (points / maxPoints) * 100;

  const handleClick = () => {
    dispatch({ type: "restartQuiz" });
  };
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore})</p>
      <button className="btn btn-ui" onClick={handleClick}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
