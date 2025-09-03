// post.js
const API = "http://localhost:3000/blogs";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const titleEl = document.querySelector("#title");
const metaEl  = document.querySelector("#meta");
const bodyEl  = document.querySelector("#body");
const editLink = document.querySelector("#editLink");

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString(); // you can localize further
}

function clearSkeleton() {
  [titleEl, metaEl, bodyEl].forEach(el => el.classList.remove("skeleton"));
  bodyEl.style.height = "auto";
}

async function loadPost() {
  if (!id) {
    titleEl.textContent = "Missing id in URL.";
    clearSkeleton();
    return;
  }
  try {
    const { data: b } = await axios.get(`${API}/${id}`);
    titleEl.textContent = b.title || "(untitled)";
    metaEl.textContent  = `${b.author || "Unknown"} • ${formatDate(b.createdAt)}`;
    bodyEl.textContent  = b.body || "";
    editLink.href = `edit.html?id=${id}`;
  } catch (e) {
    titleEl.textContent = "Post not found.";
    metaEl.textContent = "";
    bodyEl.textContent = "";
  } finally {
    clearSkeleton();
  }
}

loadPost();
