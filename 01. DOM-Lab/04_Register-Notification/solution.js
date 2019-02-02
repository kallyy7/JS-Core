function register() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let pattern = /(.+)@(.+).(com|bg)/gm;

    if (username.length > 0 &&
        password.length > 0 &&
        pattern.test(email)) {
        let result = document.getElementById('result');

        result.innerHTML = `<h1>Successful Registration!</h1>Username: 
    ${username}<br>Email: ${email}<br>Password: ${'*'.repeat(password.length)}`;
    }

    setTimeout(() => {
        document.getElementById('result').innerHTML = '';
    }, 5000);
}