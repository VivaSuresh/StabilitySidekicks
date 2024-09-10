import React, { useState } from 'react';
import { Grid, Typography, Button, Container, Box } from '@mui/material';
import SafetyAdviceSection from './SafetyAdviceSection';

const HeroSection = ({ onImageUpload, uploadedImage, safetyAdvice }) => {
  const [image, setImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const [advice, setAdvice] = useState('');

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file)); // Preview image locally

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setBackendImage(result.image_url); // Assuming backend returns image URL
      setAdvice(result.advice); // Assuming backend returns advice
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

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
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            id="imageUpload"
          />
          <label htmlFor="imageUpload">
            <Button variant="contained" color="primary" component="span" sx={{ fontSize: '1.1rem' }}>
              Upload Image
            </Button>
          </label>

          {/* Display uploaded image */}
          {image && (
            <Box sx={{ marginTop: '20px' }}>
              <img 
                src={image} 
                alt="Uploaded Preview" 
                style={{ width: '100%', maxWidth: '500px', margin: '20px auto', display: 'block' }} 
              />
            </Box>
          )}

          {/* Show Safety Advice */}
          {advice && (
            <Box sx={{ marginTop: '20px' }}>
              <SafetyAdviceSection advice={advice} />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
