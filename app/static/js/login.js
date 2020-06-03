document.getElementById('login').addEventListener('click',
function() {
    document.querySelector('.popup').classList.add('show');
    document.getElementById('popup-content').classList.add('show');
    document.getElementById('login-button').classList.remove('hide');
    document.getElementById('registration-button').classList.remove('hide');
    document.getElementById('reg-complete').classList.remove('show');
    document.querySelector('#popup-content label').classList.remove('show');
    document.querySelector('#popup-content input:nth-child(2)').classList.remove('show');
});

document.querySelector('#close-login').addEventListener('click',
function() {
    document.querySelector('.popup').classList.remove('show');
    document.getElementById('popup-content').classList.remove('show');
});

document.getElementById('registration-button').addEventListener('click',
function() {
    document.querySelector('#popup-content input:nth-child(2)').classList.add('show');
    document.getElementById('login-button').classList.add('hide');
    document.getElementById('registration-button').classList.add('hide');
    document.getElementById('reg-complete').classList.add('show');
    document.querySelector('#popup-content label').classList.remove('show');
});

document.getElementById('reg-complete').addEventListener('click',
function() {
    document.getElementById('reg-complete').classList.remove('show');
    document.getElementById('login-button').classList.remove('hide');
    document.getElementById('registration-button').classList.remove('hide');
    document.querySelector('#popup-content input:nth-child(2)').classList.remove('show');
    document.querySelector('#popup-content label').classList.add('show');
});