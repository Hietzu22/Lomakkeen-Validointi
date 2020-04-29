function Submit() {
    document.getElementById("username").value
    document.getElementById("test").innerHTML = username
}

function checkForm(e){
    e.preventDefault();
    console.log(e)

    let errors = [];

    let uName = document.getElementById('username').value;

    if (checkUserName(uName) == false) {
        errors.push('Username is too short!');
        document.getElementById('userNameError').innerHTML = 'Username is too short!';
    }



    console.log(errors);

}

function checkUserName(username){
    if (username.length >= 4) {
        return true;        
    } else {
        return false;
    }
}