//////////////////////////// TASK 1  /////////////////////////////////////
const itemsLi = document.querySelectorAll('.item')
console.log(`Number of categories: ${itemsLi.length}`);

itemsLi.forEach((heading) => {
    let elements = heading.querySelector('ul')
    console.log(`Category: ${heading.querySelector('h2').textContent} 
    Elements: ${elements.childElementCount}`);
})


//////////////////////////// TASK 2  /////////////////////////////////////

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector('#ingredients')
for (let i = 0; i < ingredients.length; i++){
    let items = document.createElement('li');
    items.textContent = ingredients[i];
    items.classList.add('item');
    list.append(items);
}
 console.log(list);

 //////////////////////////// TASK 3  /////////////////////////////////////

 const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
 ];

 const gallery = document.querySelector('.gallery');
 const renderGallery = ({ url, alt }) =>
  `<li class: "gallery-item"><img src="${url}" alt="${alt}" width = "300" height = "200px"></li>`;
 const galleryMarkup = images.map(renderGallery).join('');
 gallery.insertAdjacentHTML('beforeend', galleryMarkup);
 console.log(gallery);

  //////////////////////////// TASK 4  /////////////////////////////////////
let counterValue = 0;
const value = document.getElementById('value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const onClickButtonDecrement = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
}; 
buttonDecrement.addEventListener('click', onClickButtonDecrement)

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const onClickButtonIncrement = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};
buttonIncrement.addEventListener('click', onClickButtonIncrement)

 //////////////////////////// TASK 5  /////////////////////////////////////

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener("input", (event) => {
    if (input.value !== '') { output.textContent = event.currentTarget.value; }
    else {
    output.textContent = 'Anonymous';
  }
});

 //////////////////////////// TASK 6  /////////////////////////////////////

// const inputValidation = document.getElementById('validation-input');
// inputValidation.addEventListener('blur', onBlurChangeColor);
// function onBlurChangeColor(event) {
//   const inputValidationDataLength = Number(inputValidation.dataset.length);
//   const inputValidationLength = Number(inputValidation.value.trim().length);

//   if (inputValidationLength === inputValidationDataLength) {
//     inputValidation.classList.add('valid');
//     inputValidation.classList.remove('invalid');
//   } else {
//     inputValidation.classList.remove('valid');
//     inputValidation.classList.add('invalid');
//   }
// }

 //////////////////////////// TASK 7  /////////////////////////////////////

// const text = document.querySelector('#text');
// const inputFontSize = document.querySelector('#font-size-control');
// const fontSizeControl = ({ currentTarget }) =>
//   (text.style.fontSize = `${currentTarget.value}px`);

// inputFontSize.addEventListener('input', fontSizeControl);

 //////////////////////////// TASK 8  /////////////////////////////////////

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);
const profile = {};

function handleSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  event.currentTarget.reset();
}

 //////////////////////////// TASK 9  /////////////////////////////////////

const widget = document.querySelector('.widget');
const color = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const body = document.body;

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 }
const changeColor = () => {
  color.textContent = body.style.backgroundColor = getRandomHexColor();
};
changeColorButton.addEventListener('click', changeColor);
