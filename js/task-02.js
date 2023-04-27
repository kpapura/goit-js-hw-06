const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
for (let i = 0; i < ingredients.length; i++){
    let items = document.createElement('li');
    items.textContent = ingredients[i];
    items.classList.add('item');
    list.append(items);
}
 console.log(list);
