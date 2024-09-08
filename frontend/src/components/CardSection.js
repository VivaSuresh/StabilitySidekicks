import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import FeatureCard from './FeatureCard';  // Importing the individual feature card component

const CardSection = () => {
  return (
    <Container sx={{ padding: '50px 0' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            title="Fast Performance"
            description="Our solution is optimized for speed and stability."
            image="https://source.unsplash.com/random/300x200?tech"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            title="Advanced Security"
            description="We prioritize security to ensure the safety of your data."
            image="https://source.unsplash.com/random/300x200?security"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            title="AI-Powered"
            description="Leverage the power of AI to enhance your systems."
            image="https://source.unsplash.com/random/300x200?ai"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardSection;
