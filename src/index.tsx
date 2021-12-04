import { Global } from "@emotion/react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import globalStyles from "./assets/globalStyles";

const container = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <Global styles={globalStyles} />
    <App />
  </BrowserRouter>,
  container
);
