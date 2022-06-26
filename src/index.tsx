import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./Context/themes";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/Global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GlobalStyle />
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

reportWebVitals();
