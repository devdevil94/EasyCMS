import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TextEditor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
