from flask import Flask, request, jsonify
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import cv2

app = Flask(__name__)

dummy_model = RandomForestClassifier()
dummy_model.n_classes_ = 3  # Mock

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    return jsonify({"recommendations": [101, 102, 103]})

@app.route('/process-image', methods=['POST'])
def process_image():
    file = request.files.get('image')
    if not file:
        return jsonify({"error":"no file"}), 400
    npimg = np.frombuffer(file.read(), np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, mask = cv2.threshold(gray, 250, 255, cv2.THRESH_BINARY_INV)
    result = cv2.bitwise_and(img, img, mask=mask)
    _, buf = cv2.imencode('.jpg', result)
    return (buf.tobytes(), 200, {'Content-Type': 'image/jpeg'})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
