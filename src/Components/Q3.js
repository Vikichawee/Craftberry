import Question from "./Question";

function Q3(props) {
  return (
    <div>
      <Question
        questionId="q3"
        onChoiceSelect={(questionId, choice) =>
          props.onChoiceSelect(questionId, choice)
        }
        title="What benefit do you look for in your hair products?"
        a="Anti-breakage"
        b="Hydration"
        c="Soothing dry scalp"
        d="Repairs the appearance of damaged hair"
        e="Volume"
        f="Curl and coil enhancing"
        before="/q2"
        after="/q4"
        text="3/5"
        value={`0.6`}
        questionText="Next Question ->"
      />
    </div>
  );
}

export default Q3;
