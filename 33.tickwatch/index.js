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
   startBtn.disabled=true;
    stopBtn.disabled = false;
    interval=setInterval(()=>{
        count++
        display.textContent=count

    },100)
 }
 function stop(){
    stopBtn.disabled = true;  
  startBtn.disabled = false;
    clearInterval(interval)
    interval=null
 }
 function clear(){
    startBtn.disabled = false;
  stopBtn.disabled = true;
    clearInterval(interval)
    count=0;
    display.textContent=count
 }