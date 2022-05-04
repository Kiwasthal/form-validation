const countryInput = document.querySelector('#country');
const errorCountry = document.querySelector('.errorCountry');
const zipInput = document.querySelector('#zipcode');
const errorZipcode = document.querySelector('.errorZipcode');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const emailInput = document.querySelector('#email');
const regZip = new RegExp('^[0-9]*$');

countryInput.addEventListener('input', () => {
  countryInput.addEventListener('mouseleave', () => {
    errorCountry.textContent = '';
    countryInput.style.backgroundColor = '#ffffff';
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
  errorZipcode.textContent = '';
  zipInput.style.backgroundColor = '#ffffff';
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

document.addEventListener('submit', () => {});
