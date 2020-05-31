var stars = document.querySelectorAll('#self-stars label'), i;
for (i = 0; i < stars.length; ++i) {
    stars[i].addEventListener('click',
    function() {
        document.querySelector('.popup').style.display = 'flex';
        document.querySelector('#comment-popup').style.display = 'flex';
    });
}

document.querySelector('#close-comment').addEventListener('click',
function() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('#comment-popup').style.display = 'none';
});