const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const profile = {
      email: email.value,
      password: password.value,
    };

    console.log(profile);
  }
  event.currentTarget.reset();
}
