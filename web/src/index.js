import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./css/styles.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from "./components/App";

render(<App />, document.querySelector("#root"));
