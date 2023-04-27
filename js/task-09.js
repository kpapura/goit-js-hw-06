
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