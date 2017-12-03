from flask import Flask
from flask import render_template

app = Flask(__name__, static_folder="./static", template_folder="./static/flask-react/public")
app.secret_key = "liverpool"

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()