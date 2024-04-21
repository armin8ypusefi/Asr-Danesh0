const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');

logregBox.addEventListener('click', (event) => {
    if (event.target.classList.contains('register-link')) {
        logregBox.classList.add('active');
    } else if (event.target.classList.contains('login-register')) {
        logregBox.classList.remove('active');
    }
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});
