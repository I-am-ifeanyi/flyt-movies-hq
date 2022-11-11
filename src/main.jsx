import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

import { ContextAPI } from "./ContextAPI";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextAPI>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ContextAPI>
);
