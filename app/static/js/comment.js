const commentForm = document.getElementById('comment-form');
// var stars = document.querySelectorAll('#self-stars label'), i;

// for (i = 0; i < stars.length; ++i) {
//     stars[i].addEventListener('click',
//     function() {
//         document.querySelector('.popup').classList.add('show');
//         document.getElementById('comment-popup').classList.add('show');
//     });
// }

document.querySelector('#self-rating').addEventListener('click',
function() {
    document.querySelector('.popup').classList.add('show');
    document.getElementById('comment-popup').classList.add('show');
});

document.querySelector('#close-comment').addEventListener('click',
function() {
    document.querySelector('.popup').classList.remove('show');
    document.getElementById('comment-popup').classList.remove('show');
});

