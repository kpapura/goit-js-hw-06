const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
// const items = [];
// for (let i = 0; i < ingredients.length; i++){
//     const liItem = document.createElement('li')
//     liItem.textContent = ingredients[i];
//   liItem.classList.add('item');
//   items.push(liItem);
// }
const items = ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add("item");
  return liItem;
});
list.append(...items);
console.log(list);
