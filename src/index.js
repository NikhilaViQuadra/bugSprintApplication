import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import React from "react";

const StaticText = () => {
  return (
    <div>
      <h1>NormalTextArea</h1>
      <p>This is some text.</p>
    </div>
  );
};

export default StaticText;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
