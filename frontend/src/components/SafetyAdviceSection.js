import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const SafetyAdviceCard = ({ advice }) => {
  return (
    <Card sx={{ backgroundColor: '#F7F7F7', borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: '#2C3E50' }}>
          Safety Advice
        </Typography>
        <Typography variant="body1" sx={{ color: '#34495E', fontSize: '1.1rem' }}>
          {advice}
        </Typography>
      </CardContent>
    </Card>
  );
};

const SafetyAdviceSection = ({ advice }) => {
  return (
    <Box sx={{ padding: '20px 0', backgroundColor: '#F7F7F7' }}>
      <SafetyAdviceCard advice={advice} />
    </Box>
  );
};

export default SafetyAdviceSection;
