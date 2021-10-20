const amountOfCategory = document.querySelectorAll('.item');
console.log(`В списке ${amountOfCategory.length} категории`);

const IterateCategory = ul => {
  return ul.forEach(element => {
    const title = element.querySelector('h2').textContent;
    console.log(`Категория: ${title}`);
    const li = element.querySelector('ul').children.length;
    console.log(`Количество элементов: ${li}`);
  });
};

IterateCategory(amountOfCategory);
