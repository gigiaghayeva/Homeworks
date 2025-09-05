// tickets.js
const API = "http://localhost:8000/tickets";
const tbody = document.getElementById("tickets-table-body");

// load on script load
getTickets();

async function getTickets() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("Failed to fetch tickets");
    const tickets = await res.json();
    renderTickets(tickets);
  } catch (err) {
    console.error(err);
    tbody.innerHTML = `<tr>
      <td colspan="7" class="text-center text-red-600 py-4">Could not load tickets</td>
    </tr>`;
  }
}

function renderTickets(tickets) {
  tbody.innerHTML = "";
  if (!tickets.length) {
    tbody.innerHTML = `<tr>
      <td colspan="7" class="text-center text-gray-500 py-4">No tickets yet.</td>
    </tr>`;
    return;
  }

  tickets.forEach(t => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="px-6 py-4 whitespace-nowrap">${t.ticketCode || "—"}</td>
      <td class="px-6 py-4 whitespace-nowrap">${t.userId}</td>
      <td class="px-6 py-4 whitespace-nowrap">${t.eventId}</td>
      <td class="px-6 py-4 whitespace-nowrap">${t.quantity}</td>
      <td class="px-6 py-4 whitespace-nowrap">$${t.price}</td>
      <td class="px-6 py-4 whitespace-nowrap">${(t.purchaseDate || "").toString().slice(0,10)}</td>
      <td class="px-6 py-4 whitespace-nowrap text-right">
        <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-3 view-btn" data-id="${t.id}">View</a>
        <a href="#" class="text-red-600 hover:text-red-900 delete-btn" data-id="${t.id}">Delete</a>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// simple delete (event delegation)
document.addEventListener("click", async (e) => {
  const del = e.target.closest(".delete-btn");
  if (!del) return;
  e.preventDefault();
  const id = del.dataset.id;
  if (!id) return;

  if (confirm("Delete this ticket?")) {
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      getTickets();
    } catch (err) {
      console.error(err);
      alert("Could not delete ticket.");
    }
  }
});
