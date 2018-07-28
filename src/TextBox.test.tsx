import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBox } from "./TextBox";

it("renders component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TextBox />, div);
});
