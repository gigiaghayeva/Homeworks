const BASE_URL = "http://localhost:8000/users";
const form = document.querySelector("#signup-form-el"); // matches HTML
const elname = document.querySelector("#fullname");     // lowercase id
const elemail = document.querySelector("#email");
const pass = document.querySelector("#password");
const confpass = document.querySelector("#confirm-password");
const msgEl = document.querySelector("#msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msgEl.textContent = "";

  const fullName = elname.value.trim();
  const email = elemail.value.trim();
  const password = pass.value;
  const confirm = confpass.value;

  if (password !== confirm) {
    msgEl.textContent = "Passwords do not match!";
    return;
  }

  try {
    // check if email already exists
    const checkRes = await fetch(`${BASE_URL}?email=${email}`);
    const existing = await checkRes.json();
    if (existing.length > 0) {
      msgEl.textContent = "User already registered";
      return;
    }

    // create user with POST
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        password,
        role: "client",
        createdAt: new Date().toISOString()
      })
    });

    if (!res.ok) throw new Error("Failed to create user");
    const newUser = await res.json();

    // save to localStorage
    // localStorage.setItem("currentUser", JSON.stringify(newUser));

    msgEl.style.color = "green";
    msgEl.textContent = "Signup successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);

  } catch (error) {
    console.error(error);
    msgEl.textContent = "Something went wrong. Try again.";
  }
});
