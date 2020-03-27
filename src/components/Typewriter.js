import React from 'react'
import Typewriter from 'typewriter-effect';

const messages = {
  0:  "Our deep understanding of the Pharma industry ensures we deliver Medical-Legal-Regulatory compliant, friction-free, meaningful customer experiences - while providing compelling business value for our clients.", 
  1:  "We are the only conversational AI platform powering healthcare brands.",
  2:   "Consumers across all industries are moving to chatbots and voice skills.   Patients and healthcare professionals are no different, but building conversational AI in healthcare is."
}


export default function Message(props) {
    // init typewriter with options
    const typewriter = new Typewriter('#text', {
    });
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(messages[0])
          .callFunction(() => {
            console.log('String typed out!');
          })
          .start()
        }}
      />
  )
}
