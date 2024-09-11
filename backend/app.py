from flask import Flask
from flask_cors import CORS
from handlers.image_upload import upload_file

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Routes
app.add_url_rule('/upload', 'upload_file', upload_file, methods=['POST'])

if __name__ == '__main__':
    app.run(debug=True)
