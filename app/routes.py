from app import app, db
from flask import render_template, url_for, request, redirect
from app.models import *


def to_fixed(val, digits):
    return f'{val:.{digits}f}'


@app.route('/')
@app.route('/index')
def index():
    teas_by_rating = Tea.query.order_by(Tea.rating.desc()).limit(5).all()
    teas_by_date = Tea.query.order_by(Tea.timestamp.desc()).limit(10).all()
    return render_template('index.html', teas_by_rating=teas_by_rating, teas_by_date=teas_by_date)


@app.route('/login')
@app.route('/index/login')
def login():
    teas_by_rating = Tea.query.order_by(Tea.rating.desc()).limit(5).all()
    teas_by_date = Tea.query.order_by(Tea.timestamp.desc()).limit(10).all()
    return render_template('index.html', teas_by_rating=teas_by_rating, teas_by_date=teas_by_date)


@app.route('/registration')
@app.route('/index/registration')
def registration():
    teas_by_rating = Tea.query.order_by(Tea.rating.desc()).limit(5).all()
    teas_by_date = Tea.query.order_by(Tea.timestamp.desc()).limit(10).all()
    return render_template('index.html', teas_by_rating=teas_by_rating, teas_by_date=teas_by_date)


@app.route('/gallery')
def gallery():
    teas = Tea.query.order_by(Tea.title).all();
    return render_template('gallery.html', teas=teas)


@app.route('/gallery/<int:id>')
def single(id):
    tea = Tea.query.get(id)
    comments = tea.comments
    return render_template('single.html', tea=tea, comments=comments)


@app.route('/gallery/<int:id>/comment', methods=['POST'])
def comment(id):
    tea = Tea.query.get(id)
    comments = tea.comments
    rating = request.form['star']
    body = request.form['comment-body']
    comment = Comment(rating=rating, body=body, tea_id=tea.id)
    avg_rating = (sum([x.rating for x in comments]) + int(comment.rating)) / (comments.count()+1)
    tea.rating = to_fixed(avg_rating, 2)
    try:
        db.session.add(comment)
        db.session.commit()
    except:
        return 'Cant add comment'
    return render_template('single.html', tea=tea, comments=comments)


@app.route('/add-tea', methods=['POST', 'GET'])
def add_tea():
    if request.method == 'POST':
        title = request.form['Title']
        category = request.form['Type']
        country = request.form['Country']
        price = request.form['Price']
        rating = request.form['star']
        description = request.form['description']
        tea = Tea(title=title, type=category, country=country, price=price, rating=rating, description=description)
        try:
            db.session.add(tea)
            db.session.commit()
            return redirect('/gallery')
        except:
            return 'Something went wrong'
        return redirect('/gallery')
    else:
        return render_template('add_tea.html')