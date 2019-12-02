import React from "react";

export default function OneDrum(props) {
  const handleClick = letter => console.log(letter);
  const handleKey = letter => console.log(letter);
  return (
    <div
      data-key={props.keyCode}
      className="drum-pad"
      id={props.keyCode}
      onClick={event => handleClick(props.keyCode)}
      onKeyDown={event => handleKey(props.keyCode)}
    >
      <kbd>{props.keyCode}</kbd>
      <audio className="clip" data-key={props.keyCode} src={props.mp3Url} />
    </div>
  );
}
