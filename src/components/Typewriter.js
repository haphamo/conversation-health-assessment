import React from "react";
import Typewriter from "typewriter-effect";
// working on separating the typewriter component for more reusability
export default function Message({ fixture, messageCounter }) {
  return (
    <Typewriter
      onInit={function(typewriter) {
        // do some logic here
        if (messageCounter === 0) {
          typewriter
            .pauseFor(3000)
            .start()
            .changeDelay(60)
            .typeString(fixture[0]);
        } else if (messageCounter === 1) {
          typewriter
            .start()
            .changeDelay(3)
            .typeString(fixture[1]);
        } else if (messageCounter === 2) {
          typewriter
            .start()
            .changeDelay(3)
            .typeString(fixture[2]);
        }
      }}
    />
  );
}
