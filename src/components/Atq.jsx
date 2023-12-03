import React from "react";
import "./atq.css";

const Atq = ({ ques, ans, changebg }) => {
  return (
    <div
      className="ATQ-wrapper"
      style={{
        color: changebg ? "" : "#2f0743",
      }}
    >
      <span className="ATQ-bg-text">TOUCH ME</span>
      <h4 className="ATQ-heading">{ques}</h4>
      <p className="ATQ-p">{ans}</p>
    </div>
  );
};

export default Atq;
