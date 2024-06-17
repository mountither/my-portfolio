import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AnalyticsProvider } from "use-analytics";
import analytics from "./analyticsInit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AnalyticsProvider instance={analytics}>
      <App />
    </AnalyticsProvider>
  </React.StrictMode>
);
