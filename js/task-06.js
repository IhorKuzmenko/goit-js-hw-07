const input = document.querySelector('#validation-input');

input.addEventListener('blur', lossOfFocus);

function lossOfFocus() {
  input.classList.add('invalid');
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.replace('invalid', 'valid');
  } else {
    input.classList.replace('valid', 'invalid');
  }
}
