const BASE_URL = "http://localhost:8000/users";

const loginForm = document.querySelector("#lgn-form");
const newEmail = document.querySelector(".email");
const newPassword = document.querySelector("#password");
const msgEl = document.querySelector("#msg"); // ✅ make sure you have <p id="msg"></p> in HTML

loginForm.addEventListener("submit", onLogin);

async function onLogin(e) {
  e.preventDefault();

  try {
    const email = newEmail.value.trim();
    const password = newPassword.value;

    const res = await fetch(`${BASE_URL}?email=${email}&password=${password}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const users = await res.json();

    if (users.length === 0) {
      msgEl.textContent = "Invalid email or password.";
      return;
    }

    const user = users[0];
    // localStorage.setItem("currentUser", JSON.stringify(user)); // uncomment if you want auto-login

    msgEl.style.color = "green";
    msgEl.textContent = "Login successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "index.html"; // ✅ only redirect if login successful
    }, 1000);
      } catch (error) {
    console.error(error);
    msgEl.textContent = "Something went wrong. Try again.";
  }
}
