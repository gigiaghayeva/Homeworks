const params = new URLSearchParams(window.location.search);
console.log(params)
const id =params.get("id");
    console.log(id)
 fetch("https://fakestoreapi.com/products/"+id)
  .then(res=>res.json())
  .then (item => {
    const detail =document.getElementById("detail");
    detail.innerHTML=`
    <div class="product-card">
      <img src="${item.image}" alt="Product 2">
      <h2 class="${item.title}">Product 2</h2>
      <p class="${item.price}">$29.99</p>
  

    </div>
       
       `; 
  })