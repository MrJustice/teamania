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


@app.route('/single')
def single_tea():
    return render_template('single.html')


@app.route('/add-tea', methods=['POST', 'GET'])
def add_tea():
    if request.method == 'POST':
        # title = request.form('title')
        # category = request.form('category')
        # country = request.form('country')
        # price = request.form('title')
        # description = request.form('description')
        # tea = Tea(title=title, type=category, country=country, price=price, description=description)
        # try:
        #     db.session.add(tea)
        #     db.session.commit()
        #     return redirect('/gallery')
        # except:
        #     return 'Something went wrong'
        print(request.form)
        return redirect('/gallery')
    else:
        return render_template('add_tea.html')