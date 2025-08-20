setTimeout(() => {
  console.log("Hello World");
}, 3000);

let count =0;
let interval=setInterval(()=> {
    count++
    console.log("Hello world")
    if (count===5){
        clearInterval(interval)

    }
},200);

let seconds = +window.prompt("add your second");
let secondsInterval = setInterval(() => {
    console.log(seconds);
  seconds--;
  if (seconds < 0) {
    console.log("Time's up");
    clearInterval(secondsInterval);
  }
});
