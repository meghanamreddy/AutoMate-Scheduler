from flask_cors import CORS
from flask import Flask, request
from pymongo import MongoClient
import json
from dotenv import load_dotenv
import os

load_dotenv()
DB_URL = os.environ['DB_URL']

# Create a connection to the database
def get_database():
    client = MongoClient(DB_URL)
    dbname = client['GameTest']
    collection_name = dbname["NLP_challenge"]
    return collection_name

# Function to fetch entries from the database
def getHistoryFromDb():
    collection_name = get_database()
    entries = collection_name.find()
    data = {}
    for item in entries:
        data[item['text']] = item['intent']
    json_data = json.dumps(data)
    return json_data

# Insert an entry into the database
def insertToDb(text, intent):
    db_entry = {
        "text" : text,
        "intent" : intent
    }
    # Get the database and insert
    collection_name = get_database()
    collection_name.insert_one(db_entry)

if __name__ == "__main__":   
    #hist = getHistoryFromDb()
    #print(hist)