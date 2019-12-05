import React from "react";

export default function OneDrum(props) {
  const playAudio = letter => {
    const sound = document.getElementById(letter);
    sound.play();
    document.getElementById("display").innerText = props.describeSound;
  };
  return (
    <div
      className="drum-pad"
      id={props.describeSound.replace(/ /g, "")}
      onClick={event => playAudio(props.keyCode)}
    >
      <kbd>{props.keyCode}</kbd>
      <audio className="clip" id={props.keyCode} src={props.mp3Url} />
    </div>
  );
}
