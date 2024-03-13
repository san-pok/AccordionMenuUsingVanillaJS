const accordionContainer = document.querySelectorAll(".accordionContainer");

accordionContainer.forEach((accordian)=>{
   accordian.addEventListener("click", ()=>{
    accordian.classList.toggle("active")
   })
})