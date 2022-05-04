const form = document.querySelector('form');
const countryInput = document.querySelector('#country');
const errorCountry = document.querySelector('.errorCountry');
const zipInput = document.querySelector('#zipcode');
const errorZipcode = document.querySelector('.errorZipcode');
const passwordInput = document.querySelector('#password');
const errorPassword = document.querySelector('.errorPassword');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const errorConfirmPassword = document.querySelector('.errorConfirmPassword');
const emailInput = document.querySelector('#email');
const errorMail = document.querySelector('.errorMail');
const button = document.querySelector('#button');
const regZip = new RegExp('^[0-9]*$');

let findZipErrors = () => {
  if (zipInput.value === '') {
    zipInput.style.backgroundColor = '#ffb5b5';
    errorZipcode.textContent = '*This field can not be empty';
    return false;
  } else if (zipInput.validity.tooShort) {
    zipInput.style.backgroundColor = '#ffb5b5';
    errorZipcode.textContent = '*This field can not be less than 4 digits long';
    return false;
  } else if (regZip.test(zipInput.value) == false) {
    zipInput.style.backgroundColor = '#ffb5b5';
    errorZipcode.textContent = '*This field should contain numbers';
    return false;
  } else return true;
};

let findCountryErrors = () => {
  if (countryInput.value === '') {
    countryInput.style.backgroundColor = '#ffb5b5';
    errorCountry.textContent = '*This field can not be empty';
    return false;
  } else return true;
};

let findPasswordErrors = () => {
  if (passwordInput.value === '') {
    console.log('?');
    errorPassword.textContent = '*This field can not be empty';
    passwordInput.style.backgroundColor = '#ffb5b5';
    return false;
  } else if (passwordInput.validity.tooShort) {
    errorPassword.textContent = '*Password must be at least 8 characters long';
    passwordInput.style.backgroundColor = '#ffb5b5';
    return false;
  } else if (passwordInput.validity.tooLong) {
    errorPassword.textContent = 'Password must be at least 16 characters long';
    passwordInput.style.backgroundColor = '#ffb5b5';
    return false;
  } else return true;
};

let PasswordsMatch = () => {
  if (
    confirmPasswordInput.value !== passwordInput.value &&
    confirmPasswordInput.value.length >= 8 &&
    passwordInput.value.length >= 8
  ) {
    passwordInput.style.backgroundColor = '#ffb5b5';
    confirmPasswordInput.style.backgroundColor = '#ffb5b5';
    errorConfirmPassword.textContent = '*Passwords do not match';
    return false;
  } else return true;
};

let findEmailErrors = () => {
  if (emailInput.value === '') {
    emailInput.style.backgroundColor = '#ffb5b5';
    errorMail.textContent = '*This field can not be empty';
    return false;
  } else if (emailInput.validity.typeMismatch) {
    emailInput.style.backgroundColor = '#ffb5b5';
    errorMail.textContent = '*Input a valid e-mail adress';
    return false;
  } else return true;
};

let findErrors = () => {
  findCountryErrors();
  findZipErrors();
  findPasswordErrors();
  PasswordsMatch();
  findEmailErrors();
};

countryInput.addEventListener('input', () => {
  if (countryInput.validity.valid) {
    errorCountry.textContent = '';
    countryInput.style.backgroundColor = '#ffffff';
  }
});

countryInput.addEventListener('click', () => {
  countryInput.addEventListener('mouseleave', findCountryErrors);
});

zipInput.addEventListener('input', () => {
  if (zipInput.validity.valid) {
    errorZipcode.textContent = '';
    zipInput.style.backgroundColor = '#ffffff';
  }
});

zipInput.addEventListener('click', () => {
  zipInput.addEventListener('mouseleave', findZipErrors);
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.validity.valid) {
    errorPassword.textContent = '';
    passwordInput.style.backgroundColor = '#ffffff';
  }
});

passwordInput.addEventListener('click', () => {
  passwordInput.addEventListener('mouseleave', findPasswordErrors);
});

confirmPasswordInput.addEventListener('click', () => {
  confirmPasswordInput.addEventListener('mouseleave', () => PasswordsMatch);
});

confirmPasswordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    passwordInput.style.backgroundColor = '#ffb5b5';
    confirmPasswordInput.style.backgroundColor = '#ffb5b5';
    errorConfirmPassword.textContent = '*Passwords do not match';
  } else {
    passwordInput.style.backgroundColor = '#ffffff';
    confirmPasswordInput.style.backgroundColor = '#ffffff';
    errorConfirmPassword.textContent = '';
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.validity.valid) {
    errorMail.textContent = '';
    emailInput.style.backgroundColor = '#ffffff';
  }
});

emailInput.addEventListener('click', () => {
  emailInput.addEventListener('mouseleave', findEmailErrors);
});

form.addEventListener('submit', function (event) {
  findErrors();
  if (
    findCountryErrors() &&
    findZipErrors() &&
    findPasswordErrors() &&
    PasswordsMatch() &&
    findEmailErrors()
  ) {
    alert('Congratulations, you submitted the form');
  } else event.preventDefault();
});
