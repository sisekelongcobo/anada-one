import { Box, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  const socials = {
    Facebook: "https://facebook.com",
    Instagram: "https://instagram.com",
    Twitter: "https://twitter.com",
  };

  const links = {
    "Privacy Policy": "/privacy",
    "Terms of Service": "/terms",
    "Contact Us": "/contact",
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000000", // Black background
        color: "#ffffff", // White text
        py: 4,
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          © {new Date().getFullYear()} AnadaOne. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={4} justifyContent="center" sx={{ mb: 2 }}>
          {Object.entries(links).map(([name, url]) => (
            <Link
              key={name}
              href={url}
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": { color: "#888888" },
              }}
            >
              {name}
            </Link>
          ))}
        </Stack>

        <Stack direction="row" spacing={3} justifyContent="center">
          {Object.entries(socials).map(([name, url]) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
              sx={{
                "&:hover": { color: "#888888" },
              }}
            >
              {name}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
