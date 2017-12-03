# Flask & React.js
Running Front-End library React.js on Python Flask project. This project gives you a sample to creating modern UI with React.js
and redirecting it with Python Flask.

# Requirements
React.js uses ***JSX*** for templating instead of regular JavaScript. However current browser can't compile and run ***'.jsx'*** files. 
We have to transform them to ***'.js'*** file. To transform we are going to use 
[WebPack](https://webpack.github.io) and [Babel](https://babeljs.io). Also you need [npm](https://www.npmjs.com/) and [nodejs](https://nodejs.org/) to create a React App.

# Installation
Firstly let's create a Flask application. You should installed **virtualenv** before these steps
    
    pip install virtualenv

After installation cd to project folder

    cd flask-react
    mkdir static
    . venv/bin/activate
    touch app.py
    
Install libraries

    pip install requests[security]
    pip install flask
    pip freeze > requirements.txt
   
app.py:
    
    from flask import Flask
    from flask import render_template

    app = Flask(__name__, static_folder="./static", template_folder="./static/flask-react/public")
    app.secret_key = "liverpool"

    @app.route('/')
    def home():
      return render_template('index.html')

    if __name__ == '__main__':
      app.run()

Then now we are going to create front-end. We are going to use React.js
    
    cd static
    create-react-app flask-react
    
Customize your components in ***'src'*** folder. Then we are ready to install **webpack** and **babel**

install WebPack

    cd /static/flask-react
    npm install --save webpack
    touch webpack.config.js
    
We have to make some settings in **webpack.config.js**. This file transform our ***'.jsx'*** file to ***'.js'***

webpack.config.js

    var webpack = require('webpack');
    var path = require('path');

    var BUILD_DIR = path.resolve(__dirname, 'src/js');
    var APP_DIR = path.resolve(__dirname, 'src');

    var config = {
        entry: { // These are our jsx files.
        app: APP_DIR + '/App.jsx',
        content: APP_DIR + '/Content.jsx',
        index: APP_DIR + '/index.js'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js' //output files
    },
    module: {
  	    loaders: [
  	{ 
  		test: /\.(js|jsx)?$/,
  	    include: APP_DIR,
        exclude: /node_modules/,
  	    loader: 'babel-loader',
        query: 
      {
        presets:['es2015', 'react']
      }
  	 }
  	 ]
    }
    };
    module.exports = config;

webpack.config.js files inputs are in src folder and it's outputs are in src/js. We are going to use this ***.js*** files in out HTML file.

We are ready to install **babel**. in /static/flask-react folder

    npm install --save babel-loader babel-preset-es2015 babel-preset-react
    touch babel.rc
 
Write this code in babel.rc file

    {
        "presets" : ["es2015", "react"]
    }
    
We did everything that we need. We can transform our ***.jsx*** files. To do this in /static/flask-react folder

    ./node_modules/.bin/webpack -d
    
This command create outputs in src/js. We need to reach them in our HTML file. In my project main file is index.js. index.js calls App.jsx. App.jsx is parent component. It import Content.jsx. These two components shown in same page. So we only should call index.js in our index.html. Go to /flask-react/public and open **index.html**. Insert following code into body tags

    <script src="../static/flask-react/src/js/index.js" type="text/javascript"></script>
    
Run your project in main folder

    python app.py
     * Running on http://127.0.0.1:5000/ 
     
Open http://127.0.0.1:5000/ on your browser and that's it you see parent and child components on that page

# Version
0.1.0

# License
MIT License
  
    
    
