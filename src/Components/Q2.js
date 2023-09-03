import Question from "./Question";

function Q2(props) {
  return (
    <div>
      <Question
        questionId="q2"
        onChoiceSelect={(questionId, choice) =>
          props.onChoiceSelect(questionId, choice)
        }
        title="How often do you wash your hair?"
        a="Daily"
        b="Every other day"
        c="Twice a week"
        d="Once a week"
        e="Once every two weeks"
        before="/q1"
        after="/q3"
        text="2/5"
        value={`0.4`}
        questionText="Next Question ->"
      />
    </div>
  );
}

export default Q2;
