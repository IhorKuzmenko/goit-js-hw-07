const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  let name = input.value.trim();
  if (name === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = name;
  }
});
