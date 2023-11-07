import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import ReactQueryProvider from "./providers/react-query.provider";
import ActionTypeLoadingProvider from "./contexts/ActionTypeLoading";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactQueryProvider>
      <ActionTypeLoadingProvider>
        <App />
      </ActionTypeLoadingProvider>
    </ReactQueryProvider>
  </React.StrictMode>
);
