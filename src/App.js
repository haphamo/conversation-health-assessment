import React, { useState } from "react";
import avatar from "./assets/ha-test-avatar.png";
import button from "./assets/ha-test-button.png";
import "./App.css";
import Typewriter from "typewriter-effect";

const messages = [
  "<strong>Our deep understanding of the Pharma industry </strong> ensures we deliver Medical-Legal-Regulatory compliant, friction-free, meaningful customer experiences - while providing compelling business value for our clients.",
  "We are the only conversational AI platform powering healthcare brands.",
  "<strong>Consumers across all industries are moving to chatbots and voice skills.</strong>   Patients and healthcare professionals are no different, but building conversational AI in healthcare is."
];
// Next step is to make code DRY
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="container">
        <div id="top-section">
          <div id="speech-bubble">
            <div id="text">
              {count === 0 && (
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .pauseFor(3000)
                      .changeDelay(50)
                      .typeString(messages[0])
                      .start();
                  }}
                />
              )}
              {count === 1 && (
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .changeDelay(50)
                      .typeString(messages[1])
                      .start();
                  }}
                />
              )}
              {count >= 2 && (
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .changeDelay(50)
                      .typeString(messages[2])
                      .start();
                  }}
                />
              )}
            </div>
          </div>

          <div className="button-and-avatar">
            <button onClick={() => handleClick()} id="next-button">
              NEXT
            </button>
            <div id="avatar-section">
              <img id="avatar" alt="chat bot avatar" src={avatar}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
