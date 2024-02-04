from flask_cors import CORS
from flask import Flask, request
from db_connect import getHistoryFromDb, insertToDb
from nlp_model import getTrainedClassifier

app = Flask(__name__)
CORS(app)
classifier = getTrainedClassifier()

@app.route('/')
def index():
    return {"Hey":"App"}

@app.route('/predict')
def predict():
    str_input = request.args.get('str_input')
    result = classifier(str_input)
    # write data to my database
    insertToDb(str_input, result[0]['label'])
    return {"prediction":result}

@app.route('/getHistory')
def getHistory():
    history = getHistoryFromDb()
    return history

if __name__ == "__main__":
    # for production change debug to False
    app.run(debug=True)