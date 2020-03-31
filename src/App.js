import React, { useState } from "react";
import avatar from "./assets/ha-test-avatar.png";

import "./App.css";
import Typewriter from "typewriter-effect";
import { messages } from "./lib/messages"
import ButtonAndAvatar from "./components/ButtonAndAvatar";
import Messages from "./components/Messages";

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
            <Messages count={count} messages={messages}/>
          </div>
          <ButtonAndAvatar count={count} messages={messages} handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
