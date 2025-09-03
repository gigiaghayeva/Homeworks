const API = "http://localhost:3000/blogs";
const posts = document.querySelector("#posts");

document.addEventListener("DOMContentLoaded", loadBlogs);

async function loadBlogs() {
  try {
    const { data } = await axios.get(`${API}?_sort=createdAt&_order=desc&_limit=4`);
    posts.innerHTML = data.map(cardHTML).join("");
  } catch (e) {
    console.error(e);
    posts.innerHTML = "<p>Failed to load blogs.</p>";
  }
}

function cardHTML(b) {
  const bodyShort = (b.body || "").slice(0, 60);
  return `
    <article class="card" data-id="${b.id}">
      <h2 class="title">${b.title}</h2>
      <p class="excerpt">${bodyShort}… <a class="more" href="details.html?id=${b.id}">Read More</a></p>
      <p class="meta">written by ${b.author}</p>
      <div class="actions">
        <button class="btn btn-danger" data-action="delete">Delete</button>
        <button class="btn btn-warn" data-action="edit">Edit</button>
      </div>
    </article>
  `;
}

posts?.addEventListener("click", async (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const card = btn.closest(".card");
  const id = card.dataset.id;

  if (btn.dataset.action === "delete") {
    if (confirm("Delete this blog?")) {
      await axios.delete(`${API}/${id}`);
      card.remove();
    }
  } else if (btn.dataset.action === "edit") {
    location.href = `edit.html?id=${id}`;
  }
});
