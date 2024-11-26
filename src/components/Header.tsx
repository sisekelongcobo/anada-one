import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, Container, IconButton, InputBase, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  const pages = ["shop", "about", "contact"];
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            AnadaOne
          </Typography>

          {/* Navigation Links */}
          <Box component="nav" sx={{ display: "flex", gap: 3 }}>
            {pages.map((page) => (
              <Typography
                key={page}
                variant="body1"
                component="a"
                href={`/${page.toLowerCase()}`}
                sx={{ textDecoration: "none", color: "white", "&:hover": { color: "#f0f0f0" } }}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Typography>
            ))}
          </Box>

          {/* Actions: Search and Cart */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#444",
                borderRadius: 1,
                px: 1,
              }}
            >
              <InputBase placeholder="Search..." sx={{ color: "white", ml: 1, flex: 1 }} />
              <IconButton type="submit" aria-label="search">
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <IconButton aria-label="cart" href="/cart">
              <ShoppingCartIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
