const regForm = document.getElementById('reg-form');
const regEmail = document.getElementById('reg-email');
const regUsername = document.getElementById('reg-username');
const regPassword = document.getElementById('reg-password');

// const loginForm = document.getElementById('login-form');
// const loginUsername = document.getElementById('login-username');
// const loginPassword = document.getElementById('login-password');

const red = "#f44336";

regForm.addEventListener('submit',
function(event){
    if(
        validateRegEmail() &&
        validateRegPassword() 
    ) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
});

// loginForm.addEventListener('submit',
// function(event){
//     if(
//         validateLoginUsername() &&
//         validateLoginPassword() 
//     ) {
//         return true;
//     } else {
//         event.preventDefault();
//         return false;
//     }
// });

function validateRegEmail(){
    if(checkIfEmpty(regEmail)) return;
    if(matchWithRegexp(regEmail)) return;

}

function validateRegPassword(){
    if(checkIfEmpty(regPassword)) return;
    if(!meetLenght(regPassword, 6, 50)) return;
    return true;
}



// function validateLoginUsername(){
//     if(checkIfEmpty(loginUsername)) return;
//     return true;
// }

// function validateLoginPassword(){
//     if(checkIfEmpty(loginPassword)) return;
//     return true;
// }

function checkIfEmpty(field){
    if(isEmpty(field.value.trim())){
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else {
        setValid(field);
        return false;
    }
}

function isEmpty(value){
    if(value === '') return true;
    return false;
}

function setInvalid(field, message){
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field){
    field.nextElementSibling.innerHTML = '';
}

function checkIfOnlyLetters(field){
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}

function checkIfOnlyNumbers(field){
    if(/^\d*\.?\d*$/.test(field.value)){
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only numbers`);
        return false;
    }
}

function meetLenght(field, minLenght, maxLenght){
    if(field.value.lenght >= minLenght && field.value.lenght <= maxLenght){
        setValid(field);
        return true;
    } else if(field.value.lenght <= minLenght){
        setInvalid(field, `${field.name} must be at least ${minLenght} characters long`)
        return false;
    } else {
        setInvalid(field, `${field.name} must be shorter then ${minLenght} characters`)
        return false;
    }
}

function matchWithRegexp(field){
    let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(field.value.match(emailRegEx)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} incorrectly set`);
        return false
    }
}