import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(/banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container sx={{ mt: 35 }}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Welcome to AnadaOne
          </Typography>
          <Typography variant="h5" sx={{ my: 2 }}>
            Discover the latest trends in fashion for men, women, and kids.
          </Typography>
          <Button variant="contained" size="large" sx={{ backgroundColor: "primary.main", mt: 2 }}>
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 4 }}>
          Shop by Category
        </Typography>
        <Grid container spacing={4}>
          {["Men", "Women", "Kids"].map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Card sx={{ boxShadow: 2 }}>
                <CardMedia component="img" height="200" image={`/women.jpg`} alt={category} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "center" }}>
                    {category}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: "center", pb: 2 }}>
                  <Button variant="outlined" color="primary">
                    Explore {category}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products Section */}
      <Container sx={{ py: 6, backgroundColor: "background.default" }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 4 }}>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product}>
              <Card sx={{ boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={`/women.jpg`}
                  alt={`Product ${product}`}
                />
                <CardContent>
                  <Typography variant="h6">Product {product}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    $99.99
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: "center", pb: 2 }}>
                  <Button variant="contained" color="primary">
                    Buy Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          py: 6,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Join Our Newsletter
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          Stay updated with the latest offers and collections.
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2 }}>
          Subscribe Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
