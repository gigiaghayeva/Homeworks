const API_URL = 'https://northwind.vercel.app/api/suppliers'; // path to your data file
const tbody = document.getElementById('suppliers-body');

async function loadSuppliers() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Build rows
    const rows = data.map(s => `
      <tr>
        <td>${s.id ?? ''}</td>
        <td>${s.companyName ?? ''}</td>
        <td>${s.contactName ?? ''}</td>
        <td>${s.contactTitle ?? ''}</td>
        <td>${s.address?.country ?? ''}</td>
        <td>${s.address?.phone ?? ''}</td>
        <td>${s.address?.postalCode ?? ''}</td>
        <td><a href="#" class="pill link">Link to Supplier</a></td>
        <td><button class="pill delete" data-id="${s.id}">Delete</button></td>
      </tr>
    `).join('');

    tbody.innerHTML = rows || `<tr><td colspan="9">No suppliers found</td></tr>`;
  } catch (err) {
    console.error(err);
    tbody.innerHTML = `<tr><td colspan="9">Error loading suppliers</td></tr>`;
  }
}

loadSuppliers();
