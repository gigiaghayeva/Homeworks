const startBtn =document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const clearBtn = document.querySelector(".clear");
    const display = document.querySelector(".display");


startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
clearBtn.addEventListener("click", clear)
 let interval ;
 let count =0;

 function start(){
    interval=setInterval(()=>{
        count++
        display.textContent=count

    },100)
 }
 function stop(){
    clearInterval(interval)
    interval=null
 }
 function clear(){
    clearInterval(interval)
    count=0;
    display.textContent=count
 }