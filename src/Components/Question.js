import React from "react";
import { Link } from "react-router-dom";
import CircleProgress from "./CircleProgress";
import "./Question.css";

function Question(props) {
  const {
    title,
    text,
    value,
    a,
    b,
    c,
    d,
    e,
    f,
    questionId,
    onChoiceSelect,
    before,
    after,
    questionText,
  } = props;

  const choices = [a, b, c, d, e, f];

  const handleButtonClick = (choice) => {
    onChoiceSelect(questionId, choice);
  };

  return (
    <div className="containerQuestion">
      <div className="questionGrid">
        <h1 className="title">{title}</h1>
        <div className="circleProgression">
          <CircleProgress text={text} value={value} />
        </div>
        <div className="buttons">
          {choices.map(
            (choice, index) =>
              choice && (
                <button key={index} onClick={() => handleButtonClick(choice)}>
                  {String.fromCharCode(97 + index)}. {choice}
                </button>
              )
          )}
        </div>
        <div className="navButtons">
          <Link to={before} style={{ textDecoration: "none" }}>
            <button id="back">Back</button>
          </Link>
          <Link to={after} style={{ textDecoration: "none" }}>
            <button id="next">{questionText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Question;
