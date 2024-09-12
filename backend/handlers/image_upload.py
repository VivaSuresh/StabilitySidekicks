import os
from flask import request, jsonify, g
from handlers.gemini_integration import GeminiAPIClient

UPLOAD_FOLDER = './uploads'

def upload_file():

    client = g.client
    
    if 'image' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        # Save image to uploads
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        print("Saving file")
        file.save(file_path)

        # Process image and get advice from Gemini API
        advice = client.analyze_image(file_path)
        print(f"Sending response: {file_path}, {advice}")

        # Delete the file after sending the response
        try:
            os.remove(file_path)
            print(f"Deleted file: {file_path}")
        except Exception as e:
            print(f"Error deleting file: {e}")

        # Delete file here
        return jsonify({
            "image_url": file_path,
            "advice": advice
        }), 200
