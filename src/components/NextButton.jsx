/* eslint-disable react/prop-types */
function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  const handleClick = () => {
    const actionType = index < numQuestions - 1 ? "nextQuestion" : "finish";
    dispatch({ type: actionType });
  };

  return (
    <button className="btn btn-ui" onClick={handleClick}>
      {index < numQuestions - 1 ? "Next" : "Finish"}
    </button>
  );
}

export default NextButton;
