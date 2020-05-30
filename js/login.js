document.getElementById('login').addEventListener('click',
function() {
    var images = document.querySelectorAll('.tea__image'),
        bodyStyle = 'position: fixed; width: 100%; overflow-y: scroll;', i;
    document.querySelector('.popup').style.display = 'flex';
    document.body.style.cssText = bodyStyle;
    for (i = 0; i < images.length; ++i) {
        images[i].style.opacity = '0.5';
    }
});

document.querySelector('.close').addEventListener('click',
function() {
    var images = document.querySelectorAll('.tea__image'),
        bodyStyle = 'position: fixed; width: 100%; overflow-y: scroll;', i;
    document.querySelector('.popup').style.display = 'none';
    document.body.style.cssText = bodyStyle;
    for (i = 0; i < images.length; ++i) {
        images[i].style.opacity = '1';
    }
});