const form = document.getElementById('form');

const fname = document.getElementById('firstName');
const lname= document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

const checkInputs = () => {
    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    const emailVal = email.value;
    const passwordVal = password.value;

    let correctInputs = 0;

    if (fnameVal === '' || fnameVal == null) {
        triggerError(fname);
    }
    else {
        triggerCorrectInputBehavior(fname);
        correctInputs++;
    }
    if (lnameVal === '' || lnameVal == null) {
        triggerError(lname);
    }
    else {
        triggerCorrectInputBehavior(lname);
        correctInputs++;
    }
    if (!checkEmailValidity(emailVal)) {
        triggerError(email);
    }
    else {
        triggerCorrectInputBehavior(email);
        correctInputs++;
    }
    if (passwordVal === '' || passwordVal == null) { 
        triggerError(password);
    }
    else {
        triggerCorrectInputBehavior(password);
        correctInputs++;
    }

    if (correctInputs === 4) {
        // Submit the form
        form.submit();
    }
}

const checkEmailValidity = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const triggerError = input => {
    const customInput = input.parentElement;
    const errorIcon = customInput.querySelector('img');
    const errorMessage = customInput.querySelector('small');

    errorIcon.style.visibility = "visible";
    errorMessage.style.visibility = "visible";
}

const triggerCorrectInputBehavior = input => {
    const customInput = input.parentElement;
    const errorIcon = customInput.querySelector('img');
    const errorMessage = customInput.querySelector('small');

    if (errorIcon.style.visibility === "visible") {
        errorIcon.style.visibility = "hidden";
    }
    if (errorMessage.style.visibility === "visible") {
        errorMessage.style.visibility = "hidden";
    }
}