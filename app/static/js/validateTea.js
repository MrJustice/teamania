const form = document.getElementById('add-tea-form');
const title = document.getElementById('title');
const type = document.getElementById('type');
const country = document.getElementById('country');
const price = document.getElementById('price');
const description = document.getElementById('description');

const red = "#f44336";

form.addEventListener('submit',
function(event){
    if(
        validateTitle() &&
        validateType() &&
        validateCountry() &&
        validatePrice()
    ) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
});

//Validators
function validateTitle(){
    if(checkIfEmpty(title)) return;
    if(!checkIfOnlyLetters(title)) return;
    return true;
}

function validateType(){
    if(checkIfEmpty(type)) return;
    if(!checkIfOnlyLetters(type)) return;
    return true;
}

function validateCountry(){
    if(checkIfEmpty(country)) return;
    if(!checkIfOnlyLetters(country)) return;
    return true;
}

function validatePrice(){
    if(checkIfEmpty(price)) return;
    if(!checkIfOnlyNumbers(price)) return;
    return true;
}

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