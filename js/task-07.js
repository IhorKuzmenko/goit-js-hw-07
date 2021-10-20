const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', changeInput);

function changeInput() {
  text.style.fontSize = `${input.value * 2}%`;
}
