import React from 'react';
import { Grid, Typography, Button, Container, Box } from '@mui/material';
import SafetyAdviceSection from './SafetyAdviceSection';

const HeroSection = ({ onImageUpload, uploadedImage, safetyAdvice }) => {
  return (
    <Container maxWidth="lg" sx={{ padding: '50px 0', backgroundColor: '#F7F7F7' }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#2C3E50', fontSize: '2.5rem' }}>
            Keep Your Home Safe
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#34495E', fontSize: '1.2rem' }}>
            Upload pictures of your rooms and furniture, and we’ll help you find ways to prevent falls with tailored safety advice.
          </Typography>

          {/* Image Upload Button */}
          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            style={{ display: 'none' }}
            id="imageUpload"
          />
          <label htmlFor="imageUpload">
            <Button variant="contained" color="primary" component="span" sx={{ fontSize: '1.1rem' }}>
              Upload Image
            </Button>
          </label>

          {/* Display uploaded image */}
          {uploadedImage && (
            <Box sx={{ marginTop: '20px' }}>
              <img 
                src={uploadedImage} 
                alt="Uploaded Preview" 
                style={{ width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block' }} 
              />
            </Box>
          )}

          {/* Show Safety Advice */}
          {safetyAdvice && (
            <Box sx={{ marginTop: '20px' }}>
              <SafetyAdviceSection advice={safetyAdvice} />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
