from flask import Flask
from handlers.image_upload import upload_file

app = Flask(__name__)

# Routes
app.add_url_rule('/upload', 'upload_file', upload_file, methods=['POST'])

if __name__ == '__main__':
    app.run(debug=True)
