fetch("https://northwind.vercel.app/api/categories",{})
.then((res)=> res.json()).then((data)=> {
    console.log("categories", data);
}).catch((error)=> {
    console.log(error);
})



const p=document.querySelector(".p")
setTimeout(function(){
    p.textContent = "My name is Gunay";

}, 5000)
p.computedStyleMap.color= "red"
//request -asking for some data
//get data from the server 
//post data to send data to the server
//response -sending back data

/// api- application programming interface -it allowes two software to talk to each other 
//like dom api , location api
//own class api 

// weather data 
//data  about contries 
//flights data 
//currency conversion data 
// api for sending emails and sms 
// google maps 
// millions of possibilites 
/// xml- data format 
// ajax -async
// json -most popular  api data format 

const response = fetch("url")