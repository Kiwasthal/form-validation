const form = document.querySelector('form');
console.log(form);
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
const regZip = new RegExp('^[0-9]*$');

countryInput.addEventListener('input', () => {
  countryInput.addEventListener('mouseleave', () => {
    if (countryInput.validity.valid) {
      errorCountry.textContent = '';
      countryInput.style.backgroundColor = '#ffffff';
    }
  });
});

countryInput.addEventListener('click', () => {
  countryInput.addEventListener('mouseleave', () => {
    if (countryInput.validity.valueMissing) {
      countryInput.style.backgroundColor = '#ffb5b5';
      errorCountry.textContent = '*This field can not be empty';
    }
  });
});

zipInput.addEventListener('input', () => {
  if (zipInput.validity.valid) {
    errorZipcode.textContent = '';
    zipInput.style.backgroundColor = '#ffffff';
  }
});

zipInput.addEventListener('click', () => {
  zipInput.addEventListener('mouseleave', () => {
    if (zipInput.validity.valueMissing) {
      zipInput.style.backgroundColor = '#ffb5b5';
      errorZipcode.textContent = '*This field can not be empty';
    } else if (zipInput.validity.tooShort) {
      zipInput.style.backgroundColor = '#ffb5b5';
      errorZipcode.textContent =
        '*This field can not be less than 4 digits long';
    } else if (regZip.test(zipInput.value) == false) {
      zipInput.style.backgroundColor = '#ffb5b5';
      errorZipcode.textContent = '*This field should contain numbers';
    }
  });
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.validity.valid) {
    passwordInput.textContent = '';
    passwordInput.style.backgroundColor = '#ffffff';
  }
});

passwordInput.addEventListener('click', () => {
  passwordInput.addEventListener('mouseleave', () => {
    if (passwordInput.validity.tooShort) {
      errorPassword.textContent = 'Password must be at least 8 characters long';
      passwordInput.style.backgroundColor = '#ffb5b5';
    } else if (passwordInput.validity.tooLong) {
      errorPassword.textContent =
        'Password must be at least 16 characters long';
      passwordInput.style.backgroundColor = '#ffb5b5';
    } else if (passwordInput.validity.valid) {
      errorPassword.textContent = '';
      passwordInput.style.backgroundColor = '#ffffff';
    }
  });
});

confirmPasswordInput.addEventListener('click', () => {
  confirmPasswordInput.addEventListener('mouseleave', () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
      passwordInput.style.backgroundColor = '#ffb5b5';
      confirmPasswordInput.style.backgroundColor = '#ffb5b5';
      errorConfirmPassword.textContent = 'Passwords do not match';
    }
  });
});

confirmPasswordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    passwordInput.style.backgroundColor = '#ffb5b5';
    confirmPasswordInput.style.backgroundColor = '#ffb5b5';
    errorConfirmPassword.textContent = 'Passwords do not match';
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
  emailInput.addEventListener('mouseleave', () => {
    if (emailInput.validity.typeMismatch) {
      emailInput.style.backgroundColor = '#ffb5b5';
      errorMail.textContent = 'Input a valid e-mail adress';
    }
  });
});

// passwordInput.addEventListener('click');

document.addEventListener('submit', () => {});
