import React, { useState } from "react";
import avatar from "./assets/ha-test-avatar.png";

import "./App.css";
import Typewriter from "typewriter-effect";
import { messages } from "./lib/messages"
import ButtonAndAvatar from "./components/ButtonAndAvatar";

// Next step is to make code DRY
function App() {
  const [count, setCount] = useState(0);

  const handleClick = (action) => {
    if(action === "next") {
      setCount(count + 1);
    } else if(action === "back") {
      setCount(count - 1)
    }
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
                      .pauseFor(1000)
                      .changeDelay(20)
                      .typeString(messages[0])
                      .start();
                  }}
                />
              )}
              {count === 1 && (
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .changeDelay(20)
                      .typeString(messages[1])
                      .start();
                  }}
                />
              )}
              {count >= 2 && (
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .changeDelay(20)
                      .typeString(messages[2])
                      .start();
                  }}
                />
              )}
            </div>
          </div>
          <ButtonAndAvatar count={count} messages={messages} handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
