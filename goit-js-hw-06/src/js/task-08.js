const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // перезагрузка форми

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // перевiрка полей
  if (!emailInput.value || !passwordInput.value) {
    alert("Please fill in all fields");
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);

  loginForm.reset();
});
