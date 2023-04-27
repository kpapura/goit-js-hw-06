const inputValidation = document.getElementById('validation-input');
inputValidation.addEventListener('blur', onBlurChangeColor);
function onBlurChangeColor(event) {
  const inputValidationDataLength = Number(inputValidation.dataset.length);
  const inputValidationLength = Number(inputValidation.value.trim().length);

  if (inputValidationLength === inputValidationDataLength) {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  } else {
    inputValidation.classList.remove('valid');
    inputValidation.classList.add('invalid');
  }
}