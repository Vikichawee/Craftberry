import { Link } from "react-router-dom";
import "./Start.css";

function Start() {
  return (
    <div>
      <div className="container">
        <img
          src="https://s3-alpha-sig.figma.com/img/9015/5e76/9545e9b86afd1e9c431704007c1c0714?Expires=1694390400&Signature=nb-BZkP7NW9FRc1sOp-0ORkb58fbjv1hQkxkCGLLztkAg3BNSeQqoNKUvecTaX0vYyA4H2ox9yzaWuGgyqfScTUBenJ6JBvSipkI~VxqYmC6S9mtsCBY9n0VR1fNgUYnspgl6744ZSM0iCNpUiqXbHJXXP7MtwW4tOTtEb4zvwyo9GxgdRnXOL0-7dJSNvsysveZvHSu~zy~GPo05LwrLD87C7WTXFbIYndSBsYlmDitN-JMSbog5tZL-5mTwpo2P6w6jtxlESQucZhW40TN4mBdmIVHhZnG~ygASIaMUKX4d0lgXPhnuC0AI2G4pbIQ3d9sJI8LV2ErQA3EUPYN1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Self Care Illustration"
        />
        <div className="grid">
          <h1 className="text">
            Build a self care routine <br />
            suitable for you{" "}
          </h1>
          <h4 className="subText">
            Take out test to get a personalized self care
            <br /> routine based on your needs.
          </h4>

          <Link to="/q1" style={{ textDecoration: "none" }}>
            <button id="quizButton">Start the quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
