import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Context from "./contexts/Context";
import App from "./App";
import theme from "./theme";
import "./styles.css";

function EnhancedApp() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<EnhancedApp />, rootElement);
