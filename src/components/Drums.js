import React, { useEffect } from "react";
import OneDrum from "./OneDrum";
import Footer from "./Footer";
import { allDrums } from "../constants";

export default function Drums() {
  const hitDrum = e => {
    const drumObj = allDrums.filter(obj => obj.keyCode === e.key.toUpperCase());
    const drumDiv = drumObj[0]["describeSound"].replace(/ /g, "");
    if (drumObj) {
      if (e.type === "keydown") {
        document.getElementById(drumDiv).classList.add("pressed-key");
        const drumSound = document.getElementById(e.key.toUpperCase());
        drumSound.play();
      } else {
        document.getElementById(drumDiv).classList.remove("pressed-key");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", hitDrum);
    window.addEventListener("keyup", hitDrum);
    return () => {
      window.removeEventListener("keydown", hitDrum);
      window.removeEventListener("keyup", hitDrum);
    };
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
      <Footer />
    </div>
  );
}
