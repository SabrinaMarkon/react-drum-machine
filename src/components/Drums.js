import React from "react";

export default function Drums() {
  return (
    <div id="drum-machine">
      <div id="display">
        <div className="drumpad" id="Q">
          <kbd>Q</kbd>
          <audio
            className="clip"
            src="https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Bld_H1.mp3"
          />
        </div>
        <div className="drumpad" id="W">
          <kbd>W</kbd>
          <audio
            className="clip"
            src="https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Brk_Snr.mp3"
          />
        </div>
        <div className="drumpad" id="E">
          <kbd>E</kbd>
          <audio
            className="clip"
            src="https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Cev_H2.mp3"
          />
        </div>
        <div className="drumpad" id="A">
          <kbd>A</kbd>
          <audio
            className="clip"
            src="https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Dry_Ohh.mp3"
          />
        </div>
        <div className="drumpad" id="S">
          <kbd>S</kbd>
          <audio
            className="clip"
            src="https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Dsc_Oh.mp3"
          />
        </div>
        <div className="drumpad" id="D">
          <kbd>D</kbd>
          <audio
            className="clip"
            src="https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Give_us_a_light.mp3"
          />
        </div>
        <div className="drumpad" id="Z">
          <kbd>Z</kbd>
          <audio
            className="clip"
            src="https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Give_us_a_light.mp3"
          />
        </div>
        <div className="drumpad" id="X">
          <kbd>X</kbd>
          <audio
            className="clip"
            src="https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Heater-2.mp3"
          />
        </div>
        <div className="drumpad" id="C">
          <kbd>C</kbd>
          <audio
            className="clip"
            src="https://sabrinamarkon-images.s3-us-west-2.amazonaws.com/react-drum-machine/Heater-3.mp3"
          />
        </div>
      </div>
    </div>
  );
}
