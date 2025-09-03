// edit.js
const API = "http://localhost:3000/blogs";

// Grab elements
const form     = document.querySelector("#form");
const titleEl  = document.querySelector("#title");
const bodyEl   = document.querySelector("#body");
const authorEl = document.querySelector("#author");
const okLine   = document.querySelector("#status-ok");
const errLine  = document.querySelector("#status-err");
const saveBtn  = form.querySelector('button[type="submit"]');

// Read ?id= from URL
const id = new URLSearchParams(location.search).get("id");

document.addEventListener("DOMContentLoaded", init);
form.addEventListener("submit", onSave);

function show(el, msg = "", visible = true) {
  if (!el) return;
  el.style.display = visible ? "block" : "none";
  if (msg) el.textContent = msg;
}

async function init() {
  if (!id) {
    show(errLine, "Missing id in URL. Open as edit.html?id=1", true);
    saveBtn.disabled = true;
    return;
  }

  try {
    const { data: b } = await axios.get(`${API}/${id}`);

    // Prefill form
    titleEl.value  = b.title  || "";
    bodyEl.value   = b.body   || "";
    // Ensure the author is selectable even if not in <select> options
    if (b.author && ![...authorEl.options].some(o => o.value === b.author)) {
      const opt = document.createElement("option");
      opt.value = b.author;
      opt.textContent = b.author;
      authorEl.appendChild(opt);
    }
    authorEl.value = b.author || "";

    show(okLine, "Loaded.", true);
    setTimeout(() => show(okLine, "", false), 800);
  } catch (e) {
    console.error(e);
    show(errLine, "Post not found.", true);
    saveBtn.disabled = true;
  }
}

async function onSave(e) {
  e.preventDefault();
  if (!id) return;

  const payload = {
    title:  titleEl.value.trim(),
    body:   bodyEl.value.trim(),
    author: authorEl.value
  };

  // Basic validation
  if (!payload.title || !payload.author) {
    show(errLine, "Please fill Title and Author.", true);
    return;
  }

  try {
    saveBtn.disabled = true;
    show(errLine, "", false);

    await axios.patch(`${API}/${id}`, payload);

    show(okLine, "Saved successfully.", true);

    // Redirect after save (switch to "index.html" if you prefer)
    setTimeout(() => {
      location.href = `post.html?id=${id}`;
    }, 600);
  } catch (e) {
    console.error(e);
    show(errLine, "Failed to save changes.", true);
  } finally {
    saveBtn.disabled = false;
  }
}
