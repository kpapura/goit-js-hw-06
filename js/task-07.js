const text = document.querySelector('#text');
const inputFontSize = document.querySelector('#font-size-control');
const fontSizeControl = ({ currentTarget }) =>
  (text.style.fontSize = `${currentTarget.value}px`);

inputFontSize.addEventListener('input', fontSizeControl);