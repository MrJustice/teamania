document.getElementById('login').addEventListener('click',
function() {
    document.querySelector('.popup').classList.add('show');
    document.getElementById('popup-content').classList.add('show');
    document.getElementById('login-form').classList.add('show');
});

document.querySelector('#close-login').addEventListener('click',
function() {
    document.querySelector('.popup').classList.remove('show');
    document.getElementById('popup-content').classList.remove('show');
    document.getElementById('login-form').classList.remove('show');
    document.getElementById('reg-form').classList.remove('show');
});

document.getElementById('registration-button').addEventListener('click',
function() {
    document.getElementById('login-form').classList.remove('show');
    document.getElementById('reg-form').classList.add('show');
});

document.getElementById('reg-complete').addEventListener('click',
function() {
    document.getElementById('reg-form').classList.remove('show');
    document.getElementById('login-form').classList.add('show');
});