const BASE_URL = "http://localhost:8000/events";
const newCards = document.querySelector("#cards");
const loginBtn = document.querySelector(".login-btn");
const searchInput = document.querySelector("#search");


if (searchInput) {
  let timeout;
  searchInput.addEventListener("keyup", (e) => {
    clearTimeout(timeout);
    const searchValue = e.target.value.trim().toLowerCase();
    timeout = setTimeout(async () => {
      try {
        const resp = await fetch(`${BASE_URL}?name_like=${searchValue}`);
        renderEventCards(await resp.json());
      } catch (error) {
        console.log(error);
      }
    }, 300);
  });
}


let currentUser = null;
try { currentUser = JSON.parse(localStorage.getItem("currentUser")); } catch {}

if (currentUser && loginBtn) {
  const displayName = currentUser.fullName || currentUser.username || currentUser.email || "User";
  loginBtn.outerHTML = `
    <span class="navbar-text me-2">Hello, ${displayName}</span>
    <div class="dropdown">
      <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-solid fa-user"></i> Profile
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Orders</a></li>
        <li><a class="dropdown-item" href="favorites.html">Favorites</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <a href="#" class="btn btn-danger logout-btn">Logout</a>
    <a class="btn btn-outline-secondary ms-2" href="favorites.html">
      <i class="fa-regular fa-heart me-1"></i> Favorites
    </a>
  `;
  document.querySelector(".logout-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    window.location.reload();
  });
}


function loadFavorites() {
  try {
    return [...new Set((JSON.parse(localStorage.getItem("favorites")) || [])
      .filter(Boolean)
      .map(String))];
  } catch { return []; }
}
function saveFavorites(list) {
  const clean = [...new Set(list.filter(Boolean).map(String))];
  localStorage.setItem("favorites", JSON.stringify(clean));
}


async function getEvents() {
  try {
    const res = await fetch(BASE_URL);
    const events = await res.json();
    renderEventCards(events);
  } catch (error) {
    newCards.innerHTML = `<div class="alert alert-danger">Could not load events</div>`;
  }
}
getEvents();

function renderEventCards(events) {
  const saved = new Set(loadFavorites()); // keep hearts active if saved
  newCards.innerHTML = "";

  events.forEach((evt) => {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${evt.posterURL}" class="card-img-top" alt="${evt.name}">
        <i class="fa-regular fa-heart favorite-btn ${saved.has(String(evt.id)) ? "active" : ""}" data-id="${evt.id}"></i>
        <div class="card-body">
          <h5 class="card-title">${evt.name}</h5>
          <p class="card-text">${evt.description}</p>
          <a href="details.html?id=${evt.id}" class="btn btn-primary">See Details</a>
          <p class="show-date">${evt.dateTime.split("T")[0]} <i class="fa-regular fa-calendar"></i></p>
        </div>
      </div>
    `;
    newCards.appendChild(card);
  });
}

document.addEventListener("click", (e) => {
  const heart = e.target.closest(".favorite-btn");
  if (!heart) return;

  const id = heart.dataset.id;
  if (!id) return;

  let favs = loadFavorites();

  if (favs.includes(id)) {
    
    favs = favs.filter(x => x !== id);
    heart.classList.remove("active", "fa-solid");
    heart.classList.add("fa-regular");
  } else {
    
    favs.push(id);
    heart.classList.add("active", "fa-solid");
    heart.classList.remove("fa-regular");
  }

  saveFavorites(favs);
});

