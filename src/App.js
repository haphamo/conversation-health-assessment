import React, { useState, useEffect } from "react";

import "./App.css";
import { messages } from "./lib/messages"
import ButtonAndAvatar from "./components/ButtonAndAvatar";
import Messages from "./components/Messages";

// Next step is to make code DRY
// The larger the number, the slower the type speed, ex. 500
const typingSpeed = 5

function App() {
  const [count, setCount] = useState(0);
  const [ first, ...rest ] = messages
  const array = [first]
  const [text, setText] = useState(array)

  const handleClick = (action) => {
    // handles creating the speech bubbles
    if(action === "next") {
      setCount(count + 1);
      setText([...text, messages[count + 1]])
    } else if(action === "back") {
      setCount(count - 1)
    }
  };

  const messagesToDisplay = text.map(function(message, index) {
    return(
      <Messages key={index} typingSpeed={typingSpeed} message={messages[index]}/>
    )
  })
  
  return (
    <div>
      <div className="container">
        <div id="top-section">
          {messagesToDisplay}
          <ButtonAndAvatar count={count} messages={messages} handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
