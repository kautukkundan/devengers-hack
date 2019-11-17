from flask import Flask, jsonify
from flask import request
import joblib 

app = Flask(__name__)
model = joblib.load('model.joblib')

@app.route('/infer', methods=['POST'])
def infer():
    out=model.predict([request.json['data']])
    return jsonify({"output":out.tolist()})

@app.route('/')
def method_name():
   return "success"

if __name__ == '__main__':
    app.run(host="0.0.0.0")
