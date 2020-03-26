import React from 'react';
import avatar from './assets/ha-test-avatar.png'
import speechBubble from './assets/ha-test-bubble.png'
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="avatar-container">
        <img id="avatar" alt="chat bot avatar" src={avatar}></img>
      </div>
      <div class="speech-container">
        <img id="speech" alt="speech bubble" src={speechBubble}></img>
      </div>
    </div>
  );
}

export default App;
