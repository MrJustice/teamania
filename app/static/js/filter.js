const minSlider = document.getElementById('input-left');
const maxSlider = document.getElementById('input-right');

const ul = document.getElementById('search-results');
const li = ul.getElementsByTagName('li');

var checkBoxes = document.querySelectorAll('input[type=checkbox]');

function filterByType() {
    for (i = 0; i < li.length; i++) {
        teaType = li[i].querySelector('.tea__stats:nth-child(2)>p');
        teaTypeValue = teaType.textContent;
        if (getChecked().includes(teaTypeValue)) {
            li[i].style.display = ''
        } else if (getChecked().length == 0) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

function filterByPrice() {
    for (i = 0; i < li.length; i++) {
        price = li[i].querySelector('.tea__stats:nth-child(3)>p');
        priceValue = parseInt(price.textContent.split('$')[0]);
        if (priceValue >= minSlider.value && priceValue <= maxSlider.value) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

function filterByCountry() {
    for (i = 0; i < li.length; i++) {
        country = li[i].querySelector('.tea__stats:nth-child(1)>p');
        countryValue = country.textContent;
        if (getChecked().includes(countryValue)) {
            li[i].style.display = ''
        } else if (getChecked().length == 0) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

function getChecked() {
    var checkedOnValues = [], i;
    for (i = 0; i < checkBoxes.length; ++i) {
        if (checkBoxes[i].checked == true) {
            checkedOnValues.push(checkBoxes[i].value)
        }
    }
    return checkedOnValues;
}