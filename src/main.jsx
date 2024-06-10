import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WeeklyTopSongProvider } from "./constext/useContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeeklyTopSongProvider>
      <App />
    </WeeklyTopSongProvider>
  </React.StrictMode>
);
