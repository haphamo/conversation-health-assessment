import React, { useState, useEffect } from 'react'
import avatar from './assets/ha-test-avatar.png'
import button from './assets/ha-test-button.png'
import './App.css';
import Typewriter from 'typewriter-effect';

// import Message from './components/Typewriter'

  

function App() {
  const [messageCounter, setMessageCounter] = useState(0)

    const nextMessage = function() {
      setMessageCounter(1)
    }

  return (
    <div>
      <div className="container">
        <div id="top-section">
          <div id="speech-bubble">
            <div id="text">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.changeDelay(1)
                  .typeString('Hello World!')
                  .callFunction(() => {
                    console.log('String typed out!');
                    console.log(typewriter);
                  })
                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .typeString("I'm here")
         
                  .start();
              }}
              />
            </div>
          </div>
          <div className="button-and-avatar">
            <button onClick={nextMessage}id="next-button">NEXT</button>
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
