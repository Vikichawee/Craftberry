import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircleProgress(props) {
  return (
    <div>
      <CircularProgressbar
        value={props.value}
        text={props.text}
        maxValue={`1`}
      />
    </div>
  );
}

export default CircleProgress;
