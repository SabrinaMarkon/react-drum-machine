import React, { useEffect } from "react";
import OneDrum from "./OneDrum";
import { allDrums } from "../constants";

export default function Drums() {
  const hitDrum = e => {
    const drumObj = allDrums.filter(obj => obj.keyCode === e.key.toUpperCase());
    if (drumObj) {
      const drumSound = document.getElementById(e.key.toUpperCase());
      drumSound.play();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", hitDrum);
    return () => window.removeEventListener("keydown", hitDrum);
  }, []);

  const drumPads = allDrums.map(drum => (
    <OneDrum
      key={drum.keyCode}
      keyCode={drum.keyCode}
      describeSound={drum.describeSound}
      mp3Url={drum.mp3Url}
    />
  ));
  return (
    <div id="drum-machine">
      <div id="display">Sabrina's Gnarly DruMz</div>
      <div className="drum-pads">{drumPads}</div>
    </div>
  );
}
