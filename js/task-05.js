const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const defaultValue = output.textContent;

input.addEventListener('input', valueInput);

function valueInput(event) {
  if (event.currentTarget.value.length < 1) {
    output.textContent = defaultValue;
  } else {
    output.textContent = event.currentTarget.value;
  }
}
