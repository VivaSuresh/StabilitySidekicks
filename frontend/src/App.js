import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [safetyAdvice, setSafetyAdvice] = useState("");

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));

      // Simulate API call to Gemini (replace with actual API call logic)
      const mockAdvice = "Make sure that the rug’s corners are tucked in properly to avoid tripping.";
      setSafetyAdvice(mockAdvice);
    }
  };

  return (
    <>
      <NavBar />
      
      {/* Pass state and handlers to the Hero section */}
      <HeroSection 
        onImageUpload={handleImageUpload} 
        uploadedImage={uploadedImage} 
        safetyAdvice={safetyAdvice} 
      />
    </>
  );
}

export default App;
