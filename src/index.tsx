import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { TextBox } from "./TextBox";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h1> blank here</h1>
    <TextBox name="TextBox" />
  </div>
);

render(<App />, document.getElementById("root"));
