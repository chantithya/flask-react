# Filename - server.py

from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import datetime

# Initializing flask app
app = Flask(__name__)
CORS(app)  # Enable CORS

# Route for seeing a data
@app.route('/data', methods=['GET'])
def get_data():
    x = datetime.datetime.now()
    return {
        'Name': "geek", 
        "Age": "22",
        "Date": x.strftime("%Y-%m-%d %H:%M:%S"), 
        "programming": "python"
    }

# Route to handle form submission
@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.json
    keyword = data.get('keyword')
    start_date = data.get('start_date')
    end_date = data.get('end_date')
    return jsonify({
        'keyword': keyword,
        'start_date': start_date,
        'end_date': end_date
    })

# Running app
if __name__ == '__main__':
    app.run(debug=True)
