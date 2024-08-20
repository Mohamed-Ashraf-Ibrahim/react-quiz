/* eslint-disable react/prop-types */
function FinishScreen({ points, maxPoints, highScore, dispatch }) {
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
