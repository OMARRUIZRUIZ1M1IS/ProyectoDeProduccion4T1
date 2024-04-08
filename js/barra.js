const cloud =document.getElementById("cloud");

const barraLateral= document.querySelector(".barra-lateral");

const spans= document.querySelectorAll("span");

const main= document.querySelector(".mainBarra");

cloud.addEventListener("click", () => {
    
    barraLateral.classList.toggle("mini-barra-lateral");
   
   
    
  
    spans.forEach((span) => { // Aquí agregué el parámetro "span"
        span.classList.toggle("oculto");
        
    });
});

cloud.addEventListener("click", () => {
    
  
    main.classList.toggle("minmain");

});
