import Question from "./Question";

function Q1(props) {
  return (
    <div>
      <Question
        questionId="q1"
        onChoiceSelect={(questionId, choice) =>
          props.onChoiceSelect(questionId, choice)
        }
        title="What's your hair type or texture?"
        a="Straight"
        b="Curly"
        c="Wavy"
        d="Fine"
        before="/"
        after="/q2"
        text="1/5"
        value={`0.2`}
        questionText="Next Question ->"
      />
    </div>
  );
}

export default Q1;
