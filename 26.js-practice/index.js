// console.log(document.title);//sehifenin basligi
// console.log(document.body); // body elementi


// const h1=document.getElementById("basliq");
// const p = document.querySelector(".metn"); //daha rahat cssmselecctor
// const items= document.querySelectorAll(`li`) //nodelist


// h1.textContent="Salam, DOM!";
// //H1.innerHTML ="<em>SALAM</em>"

// p.setAttribute(`title`,`ipucu`);
// console.log(p.getAnimations(`title`));


// p.style.color=`purple`
// p.classList.add(`aktiv`);
// p.classList.toggle(`gizli`);

//  const ul = document.querySelector(`ul`);
//  const li = document.createElement(`li`)
//  li.textContent= `yeni madde`;
//  ul.appendChild(li);
 
//  li.remove();



// const element = document.getElementById(id)
// let elemtns = document.getElementsByName(name)
// let elements =document.getElementsByTagName(tagName)
// let elementos = element.getElementsByClassName(names)
// let elemen =parentNode.querySelector(selector)


const incrementBtn =document.querySelector(".inc-btn");
const decrementBtn= document.querySelector(".dec-btn");
const count= document.querySelector("#count");
const addBtn = document.querySelector(".add");
const substructBtn= document.querySelector(".substruct");
const multiplyBtn=document.querySelector(".multiply");
const divideBtn=document.querySelector(".divide");
const result =document.querySelector("#result");
const firstNumber =document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");

addBtn.addEventListener


decrementBtn.setAttribute("disabled","true")
let countValue =0;
incrementBtn.addEventListener("click", ()=>{
    countValue++
    count.textContent =countValue
    if (countValue>0){
        decrementBtn.removeAttribute("disabled")

    }

})


decrementBtn.addEventListener("click", ()=>{
    countValue--
    count.textContent = countValue

    if (countValue ===0){
    decrementBtn.setAttribute("disabled", "true")
}
})

