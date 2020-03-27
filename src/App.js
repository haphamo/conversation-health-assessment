import React, { useState, useEffect } from 'react'
import avatar from './assets/ha-test-avatar.png'
import button from './assets/ha-test-button.png'
import './App.css';
import Message from './components/Typewriter'

  

function App() {

  return (
    <div>
      <div className="container">
        <div id="top-section">
          <div id="speech-bubble">
            <div id="text">
              <Message />
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
