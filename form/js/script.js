let form = document.querySelector(".form");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let password2 = document.querySelector(".password2");
let phone = document.querySelector(".phone");
let errorName = document.querySelector(".error-name");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");
let errorPassword2 = document.querySelector(".error-password2");
let errorPhone = document.querySelector(".error-phone");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (name.value === "") {
    errorName.innerHTML = "Name is required";
    errorName.style.display = "block";
    name.classList.add("is-invalid");
  } else if (name.value.length < 3) {
    errorName.innerHTML = "Name must be at least 3 characters";
    errorName.style.display = "block";
    name.classList.add("is-invalid");
  } else {
    errorName.style.display = "none";
    name.classList.remove("is-invalid");
  }

  let isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value === "") {
    errorEmail.innerHTML = "Email is required";
    errorEmail.style.display = "block";
    email.classList.add("is-invalid");
  } else if (!isEmail.test(email.value)) {
    errorEmail.innerHTML = "Email is invalid";
    errorEmail.style.display = "block";
    email.classList.add("is-invalid");
  } else {
    errorEmail.style.display = "none";
    email.classList.remove("is-invalid");
  }

  if (password.value === "") {
    errorPassword.innerHTML = "Password is required";
    errorPassword.style.display = "block";
    password.classList.add("is-invalid");
  } else if (password.value.length < 8) {
    errorPassword.innerHTML = "Password must be at least 8 characters";
    errorPassword.style.display = "block";
    password.classList.add("is-invalid");
  } else {
    errorPassword.style.display = "none";
    password.classList.remove("is-invalid");
  }

  if (password2.value === "" || password2.value !== password.value) {
    errorPassword2.textContent = "Password must match";
    errorPassword2.style.display = "block";
    password.classList.add("is-invalid");
  } else {
    errorPassword2.textContent = "";
    errorPassword2.style.display = "none";
  }

  if (phone.value === "") {
    errorPhone.innerText = "Phone is required";
    errorPhone.style.display = "block";
    phone.classList.add("is-invalid");
  } else if (phone.value.length < 11) {
    errorPhone.innerText = "Phone must be 11 characters";
    errorPhone.style.display = "block";
    phone.classList.add("is-invalid");
  } else {
    errorPhone.style.display = "none";
    phone.classList.remove("is-invalid");
  }

  console.log(
    name.value,
    password.value,
    password2.value,
    email.value,
    phone.value
  );

  name.value = "";
  password.value = " ";
  password2.value = "";
  email.value = "";
  phone.value = "";
});
