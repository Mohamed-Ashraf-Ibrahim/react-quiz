
function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  const handleOptionClick = (index) => {
    dispatch({ type: "newAnswer", payload: index });
  };

  const getButtonClassName = (index) => {
    let className = "btn btn-option";

    if (index === answer) className += " answer";

    if (hasAnswered) {
      className += index === question.correctOption ? " correct" : " wrong";
    }
    return className;
  };

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={getButtonClassName(index)}
          onClick={() => handleOptionClick(index)}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
