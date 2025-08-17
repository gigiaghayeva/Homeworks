const headers = document.querySelectorAll(".accordion-header");
console.log(headers)
headers.forEach((element) => {
  element.addEventListener("click", () => {
    const isActive = element.classList.contains("active");

    if (!isActive) {
      element.classList.add("active");
      element.nextElementSibling.classList.add("show")



    }else{
        element.classList.remove("active")
        element.nextElementSibling.classList.remove("show")    }
    
  });
});
