const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listIngredients = document.querySelector('#ingredients');

const createListIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
  });
};

const elListIngredients = createListIngredients(ingredients);

listIngredients.append(...elListIngredients);
