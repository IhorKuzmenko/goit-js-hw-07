const span = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
let counter = Number(span.textContent);

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);

function increment() {
  counter += 1;
  span.textContent = counter;
}

function decrement() {
  counter -= 1;
  span.textContent = counter;
}
