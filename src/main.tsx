import React from "react";
import ReactDOM from "react-dom/client";

import { SelectedArmorProvider } from "./contexts/selectedArmor";
import { App } from "./app/app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SelectedArmorProvider>
      <App />
    </SelectedArmorProvider>
  </React.StrictMode>,
);
