import "./Accordion.css";
import { useState, useRef } from "react";
const Accordion = (props) => {
  const [currentState, setState] = useState("");
  const [currentHeightState, setHieghtState] = useState("0px");
  const content = useRef(null);

  const changeDisplay = () => {
    setState(currentState === "" ? "active" : "");
    setHieghtState(
      currentState === "" ? `${content.current.scrollHeight}px` : "0px"
    );
  };

  return (
    <div className="question">
      <div
        className={`question__title ${currentState}`}
        onClick={changeDisplay}
      >
        {props.title}
      </div>
      <div
        className="question__answer"
        ref={content}
        style={{ maxHeight: `${currentHeightState}` }}
      >
        <div className="question__answer__content">{props.answer}</div>
      </div>
    </div>
  );
};
export default Accordion;
