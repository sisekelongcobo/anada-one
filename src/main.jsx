import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Layout from "./Layout.tsx";
import theme from "./Theme.tsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>,
);
