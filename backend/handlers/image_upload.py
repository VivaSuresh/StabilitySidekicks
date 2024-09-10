import os
from flask import request, jsonify
from handlers.gemini_integration import process_image_and_send_to_gemini

UPLOAD_FOLDER = './uploads'

def upload_file():
    if 'image' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        # Save image to uploads
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)

        # Process image and get advice from Gemini API
        advice = process_image_and_send_to_gemini(file_path)

        return jsonify({
            "image_url": file_path,
            "advice": advice
        }), 200
