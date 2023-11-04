import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { QueueProvider } from "./context/queue.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueueProvider>
      <App />
    </QueueProvider>
  </React.StrictMode>
);
