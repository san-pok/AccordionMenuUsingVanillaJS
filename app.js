const accordionContainer = document.querySelectorAll(".accordionContainer");

accordionContainer.forEach((accordian)=>{
   accordian.addEventListener("click", ()=>{
    accordionContainer.forEach((Currentitem)=>{
       if(Currentitem !== accordian){
         Currentitem.classList.remove("active")
       }else{
        Currentitem.classList.toggle("active")
       }
    })
   
   })
})