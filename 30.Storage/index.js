const btnL = document.querySelector("#left")
const btnR = document.querySelector("#right")
const counter = document.querySelector(".counter")
const text = document.querySelector("#text")


counter.textContent = localStorage.getItem('counter')

let count =localStorage.getItem('counter');

btnL.addEventListener("click",  ()=>{
    count ++
    localStorage.setItem("counter", count)
    counter.textContent= count
})


btnR.addEventListener("click", ()=>{
    count --
    localStorage.setItem("counter", count)
    counter.textContent=count
})


const textArea = document.querySelector("textarea");


textArea.addEventListener("keyup", () => {
    localStorage.setItem("savedText", textArea.value);
});

const saved = localStorage.getItem("savedText");
if (saved) {
  textArea.value = saved;
}










