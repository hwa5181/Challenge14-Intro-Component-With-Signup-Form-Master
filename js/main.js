const form = document.getElementById('registerForm');
//First Name
const firstNameInput = document.getElementById('first-name');
const iconErrFirstName = document.getElementById("iconErrFirstName");
const errFirstName = document.getElementById("errFirstName");

//Last Name
const lastNameInput = document.getElementById('last-name');
const iconErrLastName = document.getElementById("iconErrLastName");
const errLastName = document.getElementById("errLastName");

//Email
const emailInput = document.getElementById('email');
const iconErrEmail = document.getElementById("iconErrEmail");
const errEmail = document.getElementById("errEmail");

//Password
const passwordInput = document.getElementById('password');
const iconErrPassword = document.getElementById("iconErrPassword");
const errPassword = document.getElementById("errPassword");


form.addEventListener('submit', function (event) {
    event.preventDefault();

    let hasError = false;

    if (!firstNameInput.value.trim()) {
        firstNameInput.style.borderColor = 'var(--red)';
        iconErrFirstName.style.display = "block";
        errFirstName.style.display = "block";
        hasError = true;
    }

    if (!lastNameInput.value.trim()) {
        lastNameInput.style.borderColor = 'var(--red)';
        iconErrLastName.style.display = "block";
        errLastName.style.display = "block";
        hasError = true;
    }

    // Custom email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        email.style.borderColor = 'var(--red)';
        email.value = '';
        email.placeholder = "email@example/com";
        email.style.setProperty('--placeholder-color', 'var(--red)');
        iconErrEmail.style.display = "block";
        errEmail.style.display = "block";
        hasError = true;
    } 

    if (!passwordInput.value.trim()) {
        password.style.borderColor = 'var(--red)';
        iconErrPassword.style.display = "block";
        errPassword.style.display = "block";
        hasError = true;
    }

    if (!hasError) {
        alert("Form Submitted.");
        email.placeholder = "Email Address";
        email.style.setProperty('--placeholder-color', 'var(--grayish-blue)');
        form.reset();
    }

});

// Add event listeners to reset when input is focused
firstNameInput.addEventListener('focus', function () {
    firstNameInput.style.border = '';
    iconErrFirstName.style.display = "none";
    errFirstName.style.display = "none"
});

lastNameInput.addEventListener('focus', function () {
    lastNameInput.style.border = '';
    iconErrLastName.style.display = "none";
    errLastName.style.display = "none"
});

emailInput.addEventListener('focus', function () {
    emailInput.style.border = '';
    iconErrEmail.style.display = "none";
    errEmail.style.display = "none"
});

passwordInput.addEventListener('focus', function () {
    passwordInput.style.border = '';
    iconErrPassword.style.display = "none";
    errPassword.style.display = "none"
});

