import { Global } from "@emotion/react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import globalStyles from "./assets/globalStyles";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <ToastContainer />
    <Global styles={globalStyles} />
    <App />
  </BrowserRouter>,
  container
);
