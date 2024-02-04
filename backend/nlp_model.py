from transformers import AutoModelForSequenceClassification, AutoTokenizer, TextClassificationPipeline

def getTrainedClassifier():
    # Load your trained model and tokenizer
    model_path = "nlp_model/checkpoint-550"
    model = AutoModelForSequenceClassification.from_pretrained(model_path)
    tokenizer = AutoTokenizer.from_pretrained(model_path)

    # Create a text classification pipeline using your model and tokenizer
    classifier = TextClassificationPipeline(model=model, tokenizer=tokenizer)
    return classifier

def getPrediction(str_input):
    classifier = getTrainedClassifier()
    # Run inference
    result = classifier(text)
    print(result)