function checkForm(e){
    e.preventDefault();
    console.log(e)

    let errors = [];

    let uName = document.getElementById('username').value;
    let pWord = document.getElementById('password').value;
    let country = document.getElementById('country').value;
    let zip = document.getElementById('zipcode').value;
    let email = document.getElementById('email').value;
    let fName = document.getElementById('name').value
    let fAddress = document.getElementById('address').value

    if (checkUserName(uName) == false) {
        errors.push('Username is too short');
        document.getElementById('userNameError').innerHTML = 'Username is too short!';
    } else {
        document.getElementById('userNameError').innerHTML = '';
    }

    if (checkPassWord(pWord) == false) {
        errors.push('Password is too short');
        document.getElementById('passWordError').innerHTML = 'Password is too short!';
    } else {
        document.getElementById('passWordError').innerHTML = '';
    }

    if (checkCountry(country) == false) {
        errors.push('Please select a country');
        document.getElementById('countryError').innerHTML = 'Please select a country!';
    } else {
        document.getElementById('countryError').innerHTML = '';
    }

    
    if (checkZipCode(zip) == false) {
        errors.push('Zipcode has to be 5 digits long');
        document.getElementById('zipError').innerHTML = 'Zipcode has to be 5 digits long!';
    } else {
        document.getElementById('zipError').innerHTML = '';
    }

    if (checkEmail(email) == false) {
        errors.push('Not a valid email');
        document.getElementById('emailError').innerHTML = 'Not a valid email';
    } else {
        document.getElementById('emailError').innerHTML = '';
    }

    if (checkFullName(fName) == false) {
        errors.push('Please enter your full name');
        document.getElementById('nameError').innerHTML = 'Please enter your full name';
    } else {
        document.getElementById('nameError').innerHTML = '';
    }

    if (checkAddress(fAddress) == false) {
        errors.push('Please enter your address');
        document.getElementById('addressError').innerHTML = 'Please enter your address';
    } else {
        document.getElementById('addressError').innerHTML = '';
    }

    if (checkGender() == false) {
        errors.push('Please select a gender');
        document.getElementById('genderError').innerHTML = 'Please select a gender';
    } else {
        document.getElementById('genderError').innerHTML = '';
    }

    if (errors.length == 0) {
        alert('Registeration complete. Redirecting...')
        window.location.replace('http://it.esedu.fi/~hietanen.veeti/Hietzu22_homepage/En/index.html')
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
    if (zip.length == 5) {
        return true;
    } else {
        return false
    }
}

function checkEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
}

function checkFullName(fName){
    if (/^[a-öA-Ö]+ [a-öA-Ö]+$/.test(fName)) {
        return true;
    } else {
        return false;
    }
}

function checkAddress(fAddress){
    if (/^[a-öA-Ö0-9\s-]{5,100}$/.test(fAddress)) {
        return true;
    } else {
        return false;
    }
}

function checkGender(){
    if (document.getElementById('male').checked) {
        return true;
    } else if (document.getElementById('female').checked) {
        return true;
    } else if (document.getElementById('other').checked) {
        return true;
    } else {
        return false;
    }
}

function checkRadios(x){
    let rbs = document.querySelectorAll('input[name="'+x+'"]');
    for (let i=0; i<rbs.length; i++){
        if(rbs[i].checked == true){
            return true;
        }
    }
    return false;
}