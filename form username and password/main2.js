const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.querySelector('.btn')

button.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue == '' || passwordValue == '') {
        setErrorFor(username, 'Username cannot be blank');
        setErrorFor(password, 'password cannot be blank');
    } else {
        setSuccessFor(username);
        setSuccessFor(password);
    }

    if(passwordValue == '') {
        setErrorFor(password, 'password cannot be blank');
    } else {
        setSuccessFor(password);
    }

}

function setErrorFor(input, message) {
    const control = input.parentElement;
    const small = control.querySelector('small');

    small.innerText = message;

    control.className = 'control error';
}

function setSuccessFor(input) {
    const control = input.parentElement;
    control.className = 'control success';
}