import React, { useState, useEffect } from "react";
import "./Post.css"; // Replace "styles.css" with the path to your CSS file

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [selectedVoice, setSelectedVoice] = useState(null);

  const u = new SpeechSynthesisUtterance(text); // Define the utterance outside useEffect

  useEffect(() => {
    const synth = window.speechSynthesis;

    const handleVoicesChanged = () => {
      const voices = synth.getVoices();
      console.log(voices); // Log available voices for debugging

      // You can create a list of voices to display to the user and let them select one
      // For simplicity, you can select the first voice available here
      if (voices.length > 0) {
        setSelectedVoice(voices[0]);
        u.voice = voices[0];
        setUtterance(u);
      }
    };

    synth.addEventListener("voiceschanged", handleVoicesChanged);

    return () => {
      synth.cancel();
      synth.removeEventListener("voiceschanged", handleVoicesChanged);
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    if (selectedVoice) {
      u.voice = selectedVoice;
    }

    synth.speak(u); // Use the defined `u` variable here

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div>
      <button className="play-button" onClick={handlePlay}>
        {isPaused ? "Resume" : "Play"}
      </button>
      <button className="pause-button" onClick={handlePause}>
        Pause
      </button>
      <button className="stop-button" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};

export default TextToSpeech;
