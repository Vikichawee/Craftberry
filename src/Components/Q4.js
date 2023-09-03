import Question from "./Question";

function Q4(props) {
  return (
    <div>
      <Question
        questionId="q4"
        onChoiceSelect={(questionId, choice) =>
          props.onChoiceSelect(questionId, choice)
        }
        title="Is there anything troubling you about your hair?"
        a="Breakage"
        b="Frizz"
        c="Scalp dryness"
        d="Damage"
        e="Tangling"
        before="/q3"
        after="/q5"
        text="4/5"
        value={`0.8`}
        questionText="Next Question ->"
      />
    </div>
  );
}

export default Q4;
