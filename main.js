function checkForm(e){
    e.preventDefault();
    console.log(e)

    let errors = [];

    let uName = document.getElementById('username').value;
    let pWord = document.getElementById('password').value;
    let country = document.getElementById('country').value;
    let zip = document.getElementById('zipcode').value;

    if (checkUserName(uName) == false) {
        errors.push('Username is too short');
        document.getElementById('userNameError').innerHTML = 'Username is too short!';
    }

    if (checkPassWord(pWord) == false) {
        errors.push('Password is too short');
        document.getElementById('passWordError').innerHTML = 'Password is too short!';
    }

    if (checkCountry(country) == false) {
        errors.push('Please select a country');
        document.getElementById('countryError').innerHTML = 'Please select a country!';
    }

    if (checkZipCode(zip) == false) {
        errors.push('Zipcode has to be 5 digits long');
        document.getElementById('zipError').innerHTML = 'Zipcode has to be 5 digits long!';
    }
}

function checkUserName(username){
    if (username.length >= 4) {
        return true;        
    } else {
        return false;
    }
}

function checkPassWord(password){
    if (password.length >= 6) {
        return true;
    } else {
        return false;
    }
}

function checkCountry(country){
    if (country == "Select") {
        return false;
    } else {
        return true;
    }
}

function checkZipCode(zip){
    if (zip == 5) {
        return true;
    } else {
        return false
    }
}