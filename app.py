from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# Additional routes can be defined similarly.
@app.route('/features')
def features():
    return render_template('features.html')  # create a features.html template if needed

if __name__ == '__main__':
    app.run(debug=True)
