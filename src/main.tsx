import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./app/shared/context/ThemeContext";

// router
import AppRouter from "./app/shared/routes/Router";
import GlobalStyles from "./app/styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyles />
        <AppRouter />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
