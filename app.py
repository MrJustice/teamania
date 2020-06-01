from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/gallery')
def gallery():
    return render_template('gallery.html')


@app.route('/<string:name>')
def single_tea():
    return render_template('single.html')


@app.route('/add-tea')
def add_tea():
    return render_template('add_tea.html')


if __name__ == "__main__":
    app.run(debug=True)