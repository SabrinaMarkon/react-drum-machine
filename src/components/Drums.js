import React from "react";
import OneDrum from "./OneDrum";

export default function Drums() {
  const allDrums = [
    {
      keyCode: "Q",
      mp3Url:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Bld_H1.mp3"
    },
    {
      keyCode: "W",
      mp3Url:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Brk_Snr.mp3"
    },
    {
      keyCode: "E",
      mp3Url:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Cev_H2.mp3"
    },
    {
      keyCode: "A",
      mp3Url:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Dry_Ohh.mp3"
    },
    {
      keyCode: "S",
      mp3Url:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Dsc_Oh.mp3"
    },
    {
      keyCode: "D",
      mp3Url:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Give_us_a_light.mp3"
    },
    {
      keyCode: "Z",
      mp3Url:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Heater-1.mp3"
    },
    {
      keyCode: "X",
      mp3Url:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Heater-2.mp3"
    },
    {
      keyCode: "C",
      mp3Url:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Heater-3.mp3"
    }
  ];

  const drumPads = allDrums.map(drum => (
    <OneDrum key={drum.keyCode} keyCode={drum.keyCode} my3Url={drum.mp3Url} />
  ));

  return (
    <div id="drum-machine">
      <div id="display">{drumPads}</div>
    </div>
  );
}
