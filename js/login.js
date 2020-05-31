document.getElementById('login').addEventListener('click',
function() {
    document.querySelector('.popup').style.display = 'flex';
    document.querySelector('#popup-content').style.display = 'flex';
});

document.querySelector('#close-login').addEventListener('click',
function() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('#popup-content').style.display = 'none';
});

document.getElementById('registration-button').addEventListener('click',
function() {
    document.querySelector('#popup-content input:nth-child(2)').style.display = 'block';
    document.getElementById('login-button').style.display = 'none';
    document.getElementById('registration-button').style.display = 'none';
    document.getElementById('reg-complete').style.display = 'block';
    document.querySelector('#popup-content label').style.display = 'none';
});

document.getElementById('reg-complete').addEventListener('click',
function() {
    document.getElementById('reg-complete').style.display = 'none';
    document.getElementById('login-button').style.display = 'block';
    document.getElementById('registration-button').style.display = 'block';
    document.querySelector('#popup-content input:nth-child(2)').style.display = 'none';
    document.querySelector('#popup-content label').style.display = 'block';
});