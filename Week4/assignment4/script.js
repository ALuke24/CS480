var errorText = "Error. Incorrect format."

// /web(dev)?/
function checkName() {
    var NameExp = /[a-zA-Z\-]+\s[a-zA-Z\-]+/;
    var nameInput = document.getElementById("fullName").value;
    var errorSpan = document.getElementById("fullNameError");
    if (!NameExp.test(nameInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkPassword() {
    var PasswordExp = /([A-Za-z0-9_]{7,})/;
    var passwordInput = document.getElementById("password").value;
    var errorSpan = document.getElementById("passwordError");
    if (!PasswordExp.test(passwordInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkAddress() {
    //I made the pattern on this one to require a 1-5 digit house code, followed by a street name then type (Lane, Street, Avenue, etc..)
    //I thought this made more sense
    var AddressExp = /^(\d{1,5})\s([a-zA-Z]{1,15})\s([a-zA-Z]{1,10})$/;
    var addressInput = document.getElementById("streetAddress").value;
    var errorSpan = document.getElementById("addressError");
    if (!AddressExp.test(addressInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkZip() {
    var ZipExp = /\d{5,}/;
    var zipInput = document.getElementById("zipCode").value;
    var errorSpan = document.getElementById("zipError");
    if (!ZipExp.test(zipInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkBirth() {
    var BirthExp = /[0-1][0-9]\-[0-3][0-9]\-[1-2]([0-9]{3})/;
    var birthInput = document.getElementById("dateOfBirth").value;
    var errorSpan = document.getElementById("birthError");
    if (!BirthExp.test(birthInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkCard() {
    var CardExp = /[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}/;
    var cardInput = document.getElementById("creditCard").value;
    var errorSpan = document.getElementById("cardError");
    if (!CardExp .test(cardInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}