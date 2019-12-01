import React from "react";

export default function Drums() {
  const allDrums = [
    {
      key: "Q",
      mp3:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Bld_H1.mp3"
    },
    {
      key: "W",
      mp3:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Brk_Snr.mp3"
    },
    {
      key: "E",
      mp3:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Cev_H2.mp3"
    },
    {
      key: "A",
      mp3:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Dry_Ohh.mp3"
    },
    {
      key: "S",
      mp3:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Dsc_Oh.mp3"
    },
    {
      key: "D",
      mp3:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Give_us_a_light.mp3"
    },
    {
      key: "Z",
      mp3:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Heater-1.mp3"
    },
    {
      key: "X",
      mp3:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Heater-2.mp3"
    },
    {
      key: "C",
      mp3:
        "https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Heater-3.mp3"
    }
  ];

  const handleClick = letter => console.log(letter);

  const handleKey = letter => console.log(letter);

  const drumPads = allDrums.map(drum => (
    <div
      key={drum.key}
      data-key={drum.key}
      className="drumpad"
      id={drum.key}
      onClick={event => handleClick(drum.key)}
    >
      <kbd>{drum.key}</kbd>
      <audio className="clip" data-key={drum.key} src={drum.mp3} />
    </div>
  ));

  return (
    <div id="drum-machine">
      <div id="display">{drumPads}</div>
    </div>
  );
}
