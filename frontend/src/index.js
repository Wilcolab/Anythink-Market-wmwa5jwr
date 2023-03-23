import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";
import theme from "./styles/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/GlobalStyle";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);
