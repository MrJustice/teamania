from app import app, db
from flask import render_template, url_for, request, redirect
from app.models import *

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/gallery')
def gallery():
    return render_template('gallery.html')


@app.route('/<string:name>/<int:id>')
def single_tea(name, id):
    return render_template('single.html')


@app.route('/add-tea', methods=['POST', 'GET'])
def add_tea():
    if request.method == 'POST':
        
        return redirect('/gallery')
    else:
        return render_template('add_tea.html')