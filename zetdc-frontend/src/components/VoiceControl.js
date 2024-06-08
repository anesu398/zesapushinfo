// src/components/VoiceControl.js
import { useEffect } from 'react';

const VoiceControl = () => {
  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      console.log(`Command received: ${command}`);
      // Execute command
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);

  return <div>Voice Control Active</div>;
};

export default VoiceControl;
