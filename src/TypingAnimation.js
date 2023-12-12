import React, { useState, useEffect } from 'react';

function TypingAnimation(props) {
  const [text, setText] = useState('');
  const messages = [props.text];
  const typingSpeed = 100; // Speed in milliseconds between each character

  useEffect(() => {
    let currentIndex = 0;
    let currentMessageIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= messages[currentMessageIndex].length) {
        setText(messages[currentMessageIndex].slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        }, 1000); // Wait for 1 second before clearing text and moving to the next message
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <>{text}</>
  );
}

export default TypingAnimation;
