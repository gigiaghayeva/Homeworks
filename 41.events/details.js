const BASE_URL ="http://localhost:8000/events";
const detCards=document.querySelector(".details-card");

const params = new URLSearchParams(window.location.search);
const eventId = params.get("id"); // ✅ no dot

async function loadDetails(){
  try {
    const res = await fetch(`${BASE_URL}/${eventId}`); // ✅ fixed interpolation
    if (!res.ok) throw new Error("Event not found");
    const e = await res.json(); // ✅ single object, not array

    detCards.innerHTML = `
      <div class="container mt-5">
        <div id="event-details" class="card shadow-lg">
          <img class="card-img-top" src="${e.posterURL}" alt="${e.name}" />

          <div class="card-body">
            <h2 class="card-title">${e.name}</h2>
            <p class="card-text">${e.description}</p>

            <ul class="list-group list-group-flush mt-3">
              <li class="list-group-item"><strong>Date & Time:</strong> ${new Date(e.dateTime).toLocaleString()}</li>
              <li class="list-group-item"><strong>Venue:</strong> ${e.venueName}, ${e.venueAddress}</li>
              <li class="list-group-item"><strong>Capacity:</strong> ${e.venueCapacity}</li>
              <li class="list-group-item"><strong>Organizer:</strong> ${e.organizer}</li>
              <li class="list-group-item"><strong>Tickets Available:</strong> ${e.ticketsAvailable}</li>
              <li class="list-group-item"><strong>Sold Tickets:</strong> ${e.soldTickets}</li>
              <li class="list-group-item"><strong>Category:</strong> ${e.category}</li>
              <li class="list-group-item"><strong>Price:</strong> $${e.price}</li>
              <li class="list-group-item"><strong>Age Restriction:</strong> ${e.ageRestriction}</li>
              <li class="list-group-item"><strong>Duration:</strong> ${e.duration}</li>
            </ul>

            <div class="mt-4 text-center">
              <a href="index.html" class="btn btn-secondary">Back to Events</a>
              <button class="btn btn-success">Book Ticket</button>
            </div>
          </div>
        </div>
      </div>`;
  } catch (error) {
    console.error(error);
    detCards.innerHTML = `<p class="text-danger">Could not load event details.</p>`;
  }
}

loadDetails();
