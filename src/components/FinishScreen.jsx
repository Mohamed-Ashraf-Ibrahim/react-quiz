/* eslint-disable react/prop-types */
function FinishScreen({ points, maxPoints, highScore }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore})</p>
    </>
  );
}

export default FinishScreen;
