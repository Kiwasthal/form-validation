const countryInput = document.querySelector('#country');
const errorCountry = document.querySelector('.errorCountry');
const zipInput = document.querySelector('#zipcode');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const emailInput = document.querySelector('#email');

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

document.addEventListener('submit', () => {});
