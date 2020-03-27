import React, { useState, useEffect } from 'react'
import avatar from './assets/ha-test-avatar.png'
import button from './assets/ha-test-button.png'
import './App.css';


import Message from './components/Typewriter'

const messages = {
  0: "Our deep understanding of the Pharma industry ensures we deliver Medical-Legal-Regulatory compliant, friction-free, meaningful customer experiences - while providing compelling business value for our clients.",
  1: "We are the only conversational AI platform powering healthcare brands.",
  2: "Consumers across all industries are moving to chatbots and voice skills.   Patients and healthcare professionals are no different, but building conversational AI in healthcare is."
};

function App() {

  const [messageCounter, setMessageCounter] = useState(0)
  
  useEffect(() => {
    console.log(messageCounter)
    
  }, messageCounter)
  

  return (
    <div>
      <div className="container">
        <div id="top-section">
         
            <div id="speech-bubble">
              <div id="text">
                <Message  fixture={messages} messageCounter={messageCounter}/>

              </div>
            </div>
           
        
          <div className="button-and-avatar">
            <button onClick={() => setMessageCounter(messageCounter + 1)} id="next-button">NEXT</button>
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
