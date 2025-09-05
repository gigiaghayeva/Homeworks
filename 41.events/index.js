const BASE_URL = "http://localhost:8000/events";
const newCards = document.querySelector("#cards");
const eventBtn = document.querySelector(".add");
const loginBtn = document.querySelector(".login-btn");
const searchInput = document.querySelector("#search");
let timeout;
searchInput.addEventListener("keyup", (e) => {
  clearTimeout(timeout);
  const searchValue = e.target.value.trim().toLowerCase();
  timeout = setTimeout(async () => {
    try {
      const resp = await fetch(`${BASE_URL}?name_like=${searchValue}`);
      const events = await resp.json();

      console.log(events);

      renderEventCards(events);
    } catch (error) {
      console.log(error);
    }
  }, 300);
});

const currentUser = JSON.parse(localStorage.getItem("currentUser"));


if (currentUser) {
  loginBtn.outerHTML = `
  <span class ="navbar-text me-2">Hello,${currentUser.username}</span>
  
 <div class="dropdown">
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-user"></i>
    Profile
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Orders</a></li>
    <li><a class="dropdown-item" href="#">Favorites</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  <a href="#" class ="btn btn-danger logout-btn">Logout</a>
 
  
  `;

  document.querySelector(".logout-btn").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    window.location.reload();
  });
}

// eventBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = "add-event.html";
// });

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
  newCards.innerHTML = "";

  events.forEach((evt) => {
    const card = document.createElement("div");
    card.className = "col";

    card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${evt.posterURL}" class="card-img-top" alt="${evt.name}">
          <i class="fa-regular fa-heart favorite-btn"></i>
          <div class="card-body">
            <h5 class="card-title">${evt.name}</h5>
            <p class="card-text">${evt.description}</p>
            <a href="details.html?id=${
              evt.id
            }" class="btn btn-primary">See Details</a>
            <p class="show-date">${
              evt.dateTime.split("T")[0]
            }<i class="fa-regular fa-calendar"></i> </p>
          </div>
        </div>
      `;
      
    newCards.appendChild(card);
  });
}

