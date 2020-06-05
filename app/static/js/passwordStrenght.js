function strength(password){
    var pswdStrength = document.getElementById('pswdStrength');
    var counter = 0;

    if (password!='') {
        if(password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){
            counter += 1;
        }
        if(password.match(/[~<>?]+/)){
            counter += 1;
        }
        if(password.match(/[!@#$%^&*()]+/)){
            counter += 1;
        }
        if(password.length > 10) {
            counter += 1;
        }
    }

    switch(counter) {
        case 1:
            pswdStrength.innerHTML='Weak';
            pswdStrength.style.background = '#f11409';
            pswdStrength.style.color = '#ffffff';
            break
        case 2:
            pswdStrength.innerHTML='Medium';
            pswdStrength.style.background = '#fdb026';
            pswdStrength.style.color = '#000000';
            break
        case 3:
            pswdStrength.innerHTML='Good';
            pswdStrength.style.background = '#f8f32b';
            pswdStrength.style.color = '#000000';
            break
        case 4:
            pswdStrength.innerHTML='Strong';
            pswdStrength.style.background = '#66ff00';
            pswdStrength.style.color = '#000000';
            break
    }
}