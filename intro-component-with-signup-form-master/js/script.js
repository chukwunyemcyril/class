let form = document.querySelector(".form");
let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let firstNameError = document.querySelector(".firstNameError");
let lastNameError = document.querySelector(".lastNameError");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");

const handleSubmit = (e) => {
  e.preventDefault();
  if (firstName.value === "") {
    firstNameError.innerHTML = "First name is required";
    firstName.classList.add("is-invalid");
    firstNameError.style.display = "block";
  } else if (firstName.value.length < 3) {
    firstNameError.innerHTML = "First name must be at least 3 characters";
    firstName.classList.add("is-invalid");
    firstNameError.style.display = "block";
  } else {
    firstName.classList.remove("is-invalid");
    firstNameError.style.display = "none";
  }

  if (lastName.value === "") {
    lastNameError.innerHTML = "Last name is required";
    lastName.classList.add("is-invalid");
    lastNameError.style.display = "block";
  } else if (lastName.value.length < 3) {
    lastNameError.innerHTML = "Last name must be at least 3 characters";
    lastName.classList.add("is-invalid");
    lastNameError.style.display = "block";
  } else {
    lastName.classList.remove("is-invalid");
    lastNameError.style.display = "none";
  }

  let isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value === "") {
    emailError.innerHTML = "Email is required";
    email.classList.add("is-invalid");
    emailError.style.display = "block";
  } else if (!isEmail.test(email.value)) {
    emailError.innerHTML = "Email is invalid";
    email.classList.add("is-invalid");
    emailError.style.display = "block";
  } else {
    email.classList.remove("is-invalid");
    emailError.style.display = "none";
  }

  if (password.value === "") {
    passwordError.innerHTML = "Password is required";
    password.classList.add("is-invalid");
    passwordError.style.display = "block";
  } else if (password.value.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters";
    password.classList.add("is-invalid");
    passwordError.style.display = "block";
  } else {
    password.classList.remove("is-invalid");
    passwordError.style.display = "none";
  }

  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    email.value !== "" &&
    password.value !== ""
  ) {
    setTimeout(() => {
      alert("You will be redirected to google page");
      window.location.href = "https://www.google.com";
    }, 3000);
  }

  //settimeout
  //SETINTERVAL
};

form.addEventListener("submit", handleSubmit);
