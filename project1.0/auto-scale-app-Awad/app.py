from flask import Flask  
app = Flask(__name__)

@app.route('/')  
def home():
    return "Hello Mr. Ashraf Abdulkhaliq"  

if __name__ == '__main__':
    app.run()