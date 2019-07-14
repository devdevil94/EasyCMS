import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Button } from "react-bootstrap";
import { EditorState } from "draft-js";
import "./styles.css";
import TextEditor from "./components/TextEditor";

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
  };
  const handleClick = () => {
    console.log(editorState);
    console.log(editorState.getCurrentContent());
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Container>
        <TextEditor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
        <Button variant="primary" onClick={handleClick}>
          Save
        </Button>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
