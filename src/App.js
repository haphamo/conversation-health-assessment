import React from 'react';
import avatar from './assets/ha-test-avatar.png'
// import speechBubble from './assets/ha-test-bubble.png'
import button from './assets/ha-test-button.png'
import './App.css';
// <img id="button" alt="next button for conversation" src={button}></img>
function App() {
  return (
    <div>

      <div class="container">
       
        <div id="top-section">
          <div id="speech-bubble">
            <div id="text">
              Our deep understanding of the Pharma industry ensures we deliver Medical-Legal-Regulatory compliant, friction-free, meaningful customer experiences - while providing compelling business value for our clients.
            </div>
          </div>
          <div class="button-and-avatar">
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
