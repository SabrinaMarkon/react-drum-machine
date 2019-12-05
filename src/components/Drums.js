import React, { useEffect } from "react";
import OneDrum from "./OneDrum";
import Footer from "./Footer";
import { allDrums } from "../constants";

export default function Drums() {
  const hitDrum = e => {
    const drumObj = allDrums.filter(obj => obj.keyCode === e.key.toUpperCase());
    if (drumObj.length !== 0) {
      const drumDiv = drumObj[0]["describeSound"].replace(/ /g, "");
      if (e.type === "keydown") {
        document.getElementById(drumDiv).classList.add("pressed-key"); // change style.
        const drumSound = document.getElementById(e.key.toUpperCase());
        const playPromise = drumSound.play();
        if (playPromise) {
          playPromise
            .then(() => {
              // Audio Loading Successful
              // Audio playback takes time
              setTimeout(() => {
                // console.log("done.");
              }, drumSound.duration * 1000); // duration is the length of the sound.
            })
            .catch(e => {
              console.log("Failed to load audio.");
            });
        }
      } else {
        document.getElementById(drumDiv).classList.remove("pressed-key"); // change style back.
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
