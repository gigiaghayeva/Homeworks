
const element = document.getElementById("demo")
element.textContent="Salam Dunya"



const para = document.getElementsByClassName('paragraph');

Array.from(para).forEach(item=>{
    item.textContent ="Bu metn yenilendi"

})

console.log(para)


const container =  document.getElementById("container")

container.innerHTML=`
<p>lorem17</p>
<p>lorem17</p>
<p>lorem17</p>

`
const list =document.querySelector(`.list`)
const li =document.createElement(`li`)



li.textContent = 'New list item';
list.appendChild(li)