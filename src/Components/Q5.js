import Question from "./Question";

function Q5(props) {
  return (
    <div>
      <Question
        questionId="q5"
        onChoiceSelect={(questionId, choice) =>
          props.onChoiceSelect(questionId, choice)
        }
        title="What is your natural hair color(s) today?"
        a="Black"
        b="Brown"
        c="Blonde"
        d="Red/Orange"
        e="Silver/Grey"
        before="/q4"
        after="/result"
        text="5/5"
        value={`1`}
        questionText="Discover your results"
      />
    </div>
  );
}

export default Q5;
