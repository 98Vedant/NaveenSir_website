const form = document.getElementById("login-form");
const message = document.getElementById("login-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  if (username === "naveen" && password === "12345") {
    window.location.href = "homepage.html";
  } else {
    message.innerHTML = "Incorrect username or password";
    message.style.color = "red";
    message.style.display = "block";
  }
});
