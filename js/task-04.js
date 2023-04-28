let counterValue = 0;
const value = document.getElementById("value");
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const onClickButtonDecrement = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
};
buttonDecrement.addEventListener("click", onClickButtonDecrement);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const onClickButtonIncrement = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};
buttonIncrement.addEventListener("click", onClickButtonIncrement);
