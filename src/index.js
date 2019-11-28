import React from "react";
import ReactDOM from "react-dom";
import Drums from "./components/Drums";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Drums />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
