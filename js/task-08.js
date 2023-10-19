const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  const form = {};
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля мають бути заповнені");
  }

  form[email.name] = email.value;
  form[password.name] = password.value;
  console.log(form);

  evt.currentTarget.reset();
}
