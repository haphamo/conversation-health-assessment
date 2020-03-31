import React from "react";
import Typewriter from "typewriter-effect";

// working on separating the typewriter component for more reusability
export default function Message({ count, messages, typingSpeed}) {
  return (
    <div id="text">
      {count === 0 && (
        <Typewriter
          onInit={typewriter => {
            typewriter
              .pauseFor(1000)
              .changeDelay(typingSpeed)
              .typeString(messages)
              .callFunction(() => {
                console.log(typewriter);
              })
              .start();
          }}
        />
      )}
      {count === 1 && (
        <Typewriter
          onInit={typewriter => {
            typewriter
              .changeDelay(20)
              .typeString(messages)
              .start();
          }}
        />
      )}
      {count >= 2 && (
        <Typewriter
          onInit={typewriter => {
            typewriter
              .changeDelay(20)
              .typeString(messages)
              .start();
          }}
        />
      )}
      {/* <Typewriter
          onInit={typewriter => {
            typewriter
              .pauseFor(1000)
              .changeDelay(20)
              .typeString(messages)
              .start();
          }}
        /> */}
    </div>
  );
}
