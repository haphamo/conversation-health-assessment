import React, { useState } from "react";
import avatar from "./assets/ha-test-avatar.png";
import button from "./assets/ha-test-button.png";
import "./App.css";
import Typewriter from "typewriter-effect";
import { messages } from "./lib/messages"

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

          <div className="button-and-avatar">
            <div className="buttons">
              {count > 0 && <button className="nav-button back" onClick={() => handleClick("back")}>
                BACK
              </button>}
              {((count > 0) && (count <  messages.length - 1)) && 
                <button onClick={() => handleClick("next")} className="nav-button next-appear">
                  NEXT
                </button>
                }
              {count === 0 && 
                <button onClick={() => handleClick("next")} className="nav-button next">
                  NEXT
                </button>}
              

            </div>
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
