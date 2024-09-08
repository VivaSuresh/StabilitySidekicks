import React, { useState } from 'react';

const ImageForm = () => {
    const [image, setImage] = useState(null);  // State for the uploaded image
    const [text, setText] = useState('');      // State for the text input
    const [response, setResponse] = useState(null);  // State for the backend response

    // Handle file input
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);  // Set the selected file
    };

    // Handle text input
    const handleTextChange = (e) => {
        setText(e.target.value);  // Update text state
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to send the image and text
        const formData = new FormData();
        formData.append('image', image);
        formData.append('text', text);

        try {
            // Send POST request to the backend
            const response = await fetch('http://localhost:8080/submit-gemini', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            setResponse(result);  // Set response state
        } catch (error) {
            console.error('Error uploading data:', error);
            setResponse({ error: 'Failed to upload data' });
        }
    };

    return (
        <div className="container mt-5">
            <h1>Submit Your Image and Text</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="imageInput" className="form-label">Upload Image</label>
                    <input
                        className="form-control"
                        type="file"
                        id="imageInput"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="textInput" className="form-label">Enter Text</label>
                    <textarea
                        className="form-control"
                        id="textInput"
                        value={text}
                        onChange={handleTextChange}
                        rows="4"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {response && (
                <div className="mt-4">
                    <h2>Response from Backend</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ImageForm;
