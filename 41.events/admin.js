const BASE_URL = "http://localhost:8000";

async function loadDashboardStats() {
  try {
    const [usersRes, eventsRes, ticketsRes] = await Promise.all([
      fetch(`${BASE_URL}/users`).then(r => r.json()),
      fetch(`${BASE_URL}/events`).then(r => r.json()),
      fetch(`${BASE_URL}/tickets`).then(r => r.json())
    ]);

    // Insert counts into the HTML
    document.getElementById("users-count").textContent = usersRes.length;
    document.getElementById("events-count").textContent = eventsRes.length;
    document.getElementById("tickets-count").textContent = ticketsRes.length;

  } catch (error) {
    console.error("Error loading stats:", error);
  }
}

// Run when page loads
loadDashboardStats();

