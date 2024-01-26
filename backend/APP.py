import base64
import io
from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
import tensorflow as tf

app = Flask(__name__)


def load_model():
    model_path = 'D:/Image Caption Generation/best_model.h5'
    model = tf.keras.models.load_model(model_path)
    return model


image_caption_model = load_model()

def preprocess_image(image_data):
    
    image = Image.open(io.BytesIO(base64.b64decode(image_data)))

    
    resized_image = image.resize((224, 224))

    
    normalized_image = np.array(resized_image) / 255.0
    tensor_image = np.expand_dims(normalized_image, axis=0)

    return tensor_image

def generate_caption(image_data):
   
    preprocessed_image_data = preprocess_image(image_data)

    caption = image_caption_model.predict(preprocessed_image_data)

    return caption.tolist()

@app.route('/generate-caption', methods=['POST'])
def generate_image_caption():

    image_data = request.json['imageData']

  
    caption = generate_caption(image_data)

    
    return jsonify({'caption': caption})

if __name__ == '__main__':
    app.run(port=5000)
