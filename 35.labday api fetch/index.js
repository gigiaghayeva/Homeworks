let allProducts = [];

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data;

    renderProducts(allProducts);
  });

function renderProducts(products) {



  const productContainer = document.querySelector(".products-container");

  productContainer.innerHTML = ''
  products.forEach((element) => {
    productContainer.innerHTML += `
       
         <div class="product-card">
      <img src="${element.image}" alt="Product 2">
      <h2 class="">${element.title}</h2>
      <p class="">${element.price}</p>
    <a href="detail.html?id=${element.id}"> Details</a>

    </div>
       
       `;
  });
}

const search = document.getElementById("searchName");

search.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();

  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(searchValue)
  );
  renderProducts(filtered);
});

const sort =document.querySelector(".select")

sort.addEventListener("change", ()=> {
    const sortValue = sort.value;
    let sortedProducts= [...allProducts];
    if(sortValue==="asc"){
        sortedProducts.sort((a,b)=>a.title.localeCompare(b.title))

    }else if (sortValue==="desc"){
        sortedProducts.sort((a,b)=>b.title.localeCompare(a.title));
    }
    renderProducts(sortedProducts);
})
