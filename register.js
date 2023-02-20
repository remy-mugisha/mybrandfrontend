const signupForm = document.querySelector(".signup-form");
const signNameError = document.querySelector(".signName-error");
const signEmailError = document.querySelector(".signEmail-error");
const signPasswordError = document.querySelector(".signPassword-error");
const msg = document.querySelector(".message-sent span");


const createUser = () => {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = signupForm.username.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
    if (name == "") {
      signNameError.innerHTML = "";
      signupForm.username.focus();
    } else if ((atpos < 1 || dotpos - atpos < 2) && email == "") {
      signEmailError.innerHTML = "Invalid email!";
      signupForm.email.focus();
    } else if (password == "") {
      signPasswordError.innerHTML = "Password field is required!";
      signupForm.password.focus();
      return;
    } else if (password.length < 4) {
      signPasswordError.innerHTML =
        "Your password must have at least 4 characters!";
      signupForm.password.focus();
      return;
    } else {
      signNameError.style.visibility = "hidden";
      signEmailError.style.visibility = "hidden";
      signPasswordError.style.visibility = "hidden";
    }
    const newUser = { username: name, password: password, email: email };

    fetch("https://remmyapi.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          msg.innerHTML = "Your account have been created";
          msg.parentNode.style.display = "block";
          setTimeout(() => {
            msg.innerHTML = "Your account have been created";
            msg.parentNode.style.display = "none";
          }, 2000);
          signupForm.reset()
        }
      })
      .catch((error) => console.log(error));
  });
};

createUser();