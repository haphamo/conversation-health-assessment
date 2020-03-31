import React from "react";
import Typewriter from "typewriter-effect";

// working on separating the typewriter component for more reusability
export default function Message({ count, messages }) {
  return (
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
  );
}
