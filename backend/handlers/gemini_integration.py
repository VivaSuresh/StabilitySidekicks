import google.generativeai as genai
import base64

# Initialize Gemini API
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

def process_image_and_send_to_gemini(file_path):
    # Convert image to Base64
    base64_image = encode_image_to_base64(file_path)

    prompt = "You are an assistant tasked with providing fall prevention advice based on the image."
    model = genai.ChatVertexAI(model_name="gemini-pro-vision", max_output_tokens=1024)

    response = model([
        {
            "type": "text",
            "text": prompt,
        },
        {
            "type": "image_url",
            "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"}
        }
    ])

    return response["content"]

def encode_image_to_base64(file_path):
    with open(file_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')
