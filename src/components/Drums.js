import React from "react";
import OneDrum from "./OneDrum";
import { allDrums } from "../constants";

export default function Drums() {
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
