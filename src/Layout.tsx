import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default", // White background
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          py: 1,
        }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
