// newblog.js
const API = "http://localhost:3000/blogs";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const title = document.querySelector("#title");
  const body = document.querySelector("#body");
  const author = document.querySelector("#author");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      title: title.value.trim(),
      body: body.value.trim(),
      author: author.value,
      createdAt: new Date().toISOString()
    };

    try {
      await axios.post(API, payload);
      location.href = "index.html"; // back to blog list
    } catch (err) {
      console.error("Failed to add blog", err);
      alert("Failed to add blog");
    }
  });
});
