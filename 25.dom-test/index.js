const click =document.getElementById("openBtn")
const close =document.querySelector(".close")
const modal = document.getElementById("myModal")

click.addEventListener("click",()=>{
modal.style.display="block"
})
close.addEventListener("click", ()=> {
    modal.style.display="none";

})

window.addEventListener("click", (e)=> {


    if(e.target === modal){
        modal.style.display = "none";
    
    }


})
