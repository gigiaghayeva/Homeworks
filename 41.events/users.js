const BASE_URL="http://localhost:8000/users"

const tbody =document.getElementById("users-table-body");

const searchInput = document.getElementById("user-search");

searchInput.addEventListener("keyup", async (e) => {
  const q = e.target.value.trim(); // what you typed

  if (!q) {
    // if empty, just reload all users
    getUsers();
    return;
  }

  try {
    // here we ask JSON Server: give me users that match `q`
    const res = await fetch(BASE_URL + "?q=" + q);
    const results = await res.json();

    renderUsers(results);
  } catch (error) {
    console.error("Search failed:", error);
  }
});




async function getUsers() {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch users");

    const users = await res.json();
    renderUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    tbody.innerHTML = `<tr>
      <td colspan="5" class="text-center text-red-600 py-4">
        Could not load users
      </td>
    </tr>`;
  }
}

function renderUsers(users) {
  tbody.innerHTML = "";
  users.forEach(user => {
    const row = document.createElement("tr");
    row.className = "hover:bg-gray-50 transition-colors duration-150";

    row.innerHTML = `
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
        
          <div class="h-10 w-10 flex-shrink-0">
            <img class="h-10 w-10 rounded-full object-cover" 
                 src="${user.profilePictureURL || "https://via.placeholder.com/80"}" 
                 alt="">
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
              ${user.username || user.fullName || "—"}
            </div>
            <div class="text-sm text-gray-500">${user.email}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900 capitalize">${user.role}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">${user.id || "—"}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">${user.password || "—"}</div>
      </td>
    
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <a href="#" class="text-red-600 hover:text-red-900 delete-btn" data-id="${user.id}">
      Delete
    </a>
  </td>
    `;
    tbody.appendChild(row);
  });
}

getUsers();


document.addEventListener("click", async (e) => {
  const btn = e.target.closest(".delete-btn"); 
  if (!btn) return;

  e.preventDefault();
  const id = btn.dataset.id;
  if (!id) return;

  if (confirm("Are you sure you want to delete this user?")) {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      getUsers(); 
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Could not delete user.");
    }
  }
});
