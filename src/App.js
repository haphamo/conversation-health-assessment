import React from 'react'
import avatar from './assets/ha-test-avatar.png'
import button from './assets/ha-test-button.png'
import Typewriter from 'typewriter-effect';


import './App.css';


function App() {

  const message = new Typewriter('#text', {
    strings: ['Hello', 'World'],
    autoStart: true,
  });
  console.log(message.context)
  return (
    <div>

      <div className="container">
       
        <div id="top-section">
          <div id="speech-bubble">
            <div id="text">
            <Typewriter
              options={{
                strings: ['Our deep understanding of the Pharma industry ensures we deliver Medical-Legal-Regulatory compliant, friction-free, meaningful customer experiences - while providing compelling business value for our clients.'],
                autoStart: true,
                loop: false,
              }}
            />
              
            </div>
          </div>
          <div className="button-and-avatar">
            <button id="next-button">NEXT</button>
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
