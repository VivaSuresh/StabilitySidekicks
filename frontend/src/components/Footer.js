import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', padding: '20px 0', marginTop: '50px' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} StabilitySidekicks. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
