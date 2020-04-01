import React from "react";
import Typewriter from "typewriter-effect";

// working on separating the typewriter component for more reusability
export default function Message({ message, typingSpeed}) {
  return (
    <div id="speech-bubble">
      <div id="text">
        <Typewriter
            onInit={typewriter => {
              typewriter
                .pauseFor(1000)
                .changeDelay(typingSpeed)
                .typeString(message)
                .start();
            }}
          />
      </div>

    </div>
  );
}
