import React from "react";

export default function OneDrum(props) {
  const playAudio = letter => {
    const sound = document
      .getElementById(letter)
      .getElementsByClassName("clip")[0];
    sound.play();
    document.getElementById("display").innerText = props.describeSound;
  };
  return (
    <div
      data-key={props.keyCode}
      className="drum-pad"
      id={props.keyCode}
      onClick={event => playAudio(props.keyCode)}
    >
      <kbd>{props.keyCode}</kbd>
      <audio className="clip" src={props.mp3Url} />
    </div>
  );
}
