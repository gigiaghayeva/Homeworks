const BASE_URL = "http://localhost:8000/events";

const newCards=document.querySelector("#cards")
const eventBtn=document.querySelector(".add")


  eventBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "add-event.html";
  });






async function getEvents(){
    try {
        const res=await fetch(BASE_URL)
        const events= await res.json();


     newCards.innerHTML="" ;
     

     
     events.forEach(evt=> {
        const card=document.createElement("div");
        card.className="col";


        card.innerHTML=`
        <div class="card h-100 shadow-sm">
          <img src="${evt.posterURL}" class="card-img-top" alt="${evt.name}">
          <div class="card-body">
            <h5 class="card-title">${evt.name}</h5>
            <p class="card-text">${evt.description}</p>
            <a href="#" class="btn btn-primary">See Details</a>
          </div>
        </div>
      `;
      newCards.appendChild(card);
   
        
        
    
     });
    } catch (error) {
            cards.innerHTML = `<div class="alert alert-danger">Could not load events</div>`;

    }
}

getEvents()





