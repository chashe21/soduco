function loginFunc(userName, password) {
    var userName = document.getElementById("usernameInput").value
    var password = document.getElementById("passwordInput").value
    if (userName == '' || password == '') {
        document.getElementById('userNameError').innerHTML = 'Please Fill In password and Username!'
    } else if (userName == 'abcd' && password == '1234') {
        window.open("index.html", "_self");

    } else {
        document.getElementById('userNameError').innerHTML = 'Username or Password incorrect!';
    }

}