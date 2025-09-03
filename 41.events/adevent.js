const BASE_URL = "http://localhost:8000/events";
const form = document.querySelector("#add-event-form");
const msgEl = document.querySelector("#msg");

// handle form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msgEl.textContent = "";

  // collect values
  const newEvent = {
    name: document.querySelector("#name").value.trim(),
    dateTime: document.querySelector("#dateTime").value,
    venueName: document.querySelector("#venueName").value.trim(),
    venueAddress: document.querySelector("#venueAddress").value.trim(),
    venueCapacity: Number(document.querySelector("#venueCapacity").value),
    organizer: document.querySelector("#organizer").value.trim(),
    description: document.querySelector("#description").value.trim(),
    ticketsAvailable: Number(document.querySelector("#ticketsAvailable").value),
    category: document.querySelector("#category").value,
    price: Number(document.querySelector("#price").value),
    ageRestriction: document.querySelector("#ageRestriction").value,
    posterURL: document.querySelector("#posterURL").value.trim(),
    duration: document.querySelector("#duration").value.trim(),
    soldTickets: Number(document.querySelector("#soldTickets").value) || 0,
    createdAt: new Date().toISOString()
  };

  try {
    // send POST request
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent)
    });

    if (!res.ok) throw new Error("Failed to save event");

    const savedEvent = await res.json();
    console.log("Event saved:", savedEvent);

    msgEl.style.color = "green";
    msgEl.textContent = "Event added successfully! Redirecting...";

    // redirect to homepage where events are listed
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);

  } catch (err) {
    console.error(err);
    msgEl.style.color = "red";
    msgEl.textContent = "Error saving event.";
  }
});











const posterInput = document.querySelector("#posterURL");
const posterPreview = document.querySelector("#posterPreview");

posterInput.addEventListener("input", () => {
  const url = posterInput.value.trim();
  if (url) {
    posterPreview.src = url;
    posterPreview.style.display = "block";
  } else {
    posterPreview.style.display = "none";
  }
});
