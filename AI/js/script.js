'use strict';

console.log(validateEmail("email@gmail.com"));

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}