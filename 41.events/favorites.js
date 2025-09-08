const BASE_URL = "http://localhost:8000/events";
const favContainer = document.querySelector("#favorites-cards");

// Load favorites from localStorage
function loadFavorites() {
  try {
    return [...new Set((JSON.parse(localStorage.getItem("favorites")) || [])
      .filter(Boolean)
      .map(String))];
  } catch { return []; }
}

async function getFavoriteEvents() {
  const favs = loadFavorites();
  if (!favs.length) {
    favContainer.innerHTML = `<div class="alert alert-info">No favorites yet!</div>`;
    return;
  }

  try {
    // fetch only favorite IDs (parallel requests)
    const requests = favs.map(id => fetch(`${BASE_URL}/${id}`).then(r => r.json()));
    const events = await Promise.all(requests);

    renderFavoriteCards(events);
  } catch (error) {
    favContainer.innerHTML = `<div class="alert alert-danger">Could not load favorites</div>`;
  }
}

function renderFavoriteCards(events) {
  favContainer.innerHTML = "";

  events.forEach(evt => {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${evt.posterURL}" class="card-img-top" alt="${evt.name}">
        <div class="card-body">
          <h5 class="card-title">${evt.name}</h5>
          <p class="card-text">${evt.description}</p>
          <a href="details.html?id=${evt.id}" class="btn btn-primary">See Details</a>
          <p class="show-date">${evt.dateTime.split("T")[0]} <i class="fa-regular fa-calendar"></i></p>
        </div>
      </div>
    `;
    favContainer.appendChild(card);
  });
}

getFavoriteEvents();
