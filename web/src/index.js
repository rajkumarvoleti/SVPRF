import React from "react";
import { render } from "react-dom";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./css/styles.css";
import App from "./components/App";

render(<App />, document.querySelector("#root"));
