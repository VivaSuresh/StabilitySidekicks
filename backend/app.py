from flask import Flask, g
from flask_cors import CORS
from dotenv import load_dotenv
import os
from handlers.image_upload import upload_file
from handlers.gemini_integration import GeminiAPIClient

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

load_dotenv()  # Load environment variables from .env file
api_key = os.getenv("GEMINI_API_KEY")

client: GeminiAPIClient = GeminiAPIClient(api_key)

@app.before_request
def before_request():
    g.client = client  # Set the client object in the Flask `g` object


# Routes
app.add_url_rule('/upload', 'upload_file', upload_file, methods=['POST'])

if __name__ == '__main__':
    app.run(debug=True)
