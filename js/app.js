const menu = document.querySelector(".menu")
const openMenuBtn = document.querySelector(".open-menu")
const closeMenuBtn = document.querySelector(".close-menu")

function toggleMenu() {   /* "toggle" significa que -si el menú- está abierto quiero que lo cierre, y si está cerrado quiero que lo abra*/
    menu.classList.toggle("menu_opened");
}


openMenuBtn.addEventListener("click", toggleMenu);  /*Le asignamos el toggler al evento onClick de ese elemento de abrir/cerrar. "Cuando se le haga "click" a ese elemento (a .open-menu que llamo "openMenuBtn"), se va a ejecutar la función "toggleMenu" */ 
closeMenuBtn.addEventListener("click", toggleMenu);



const menuLinks = document.querySelectorAll(".menu a[href^=\"#\"]");  /* Para que el menú se cierre una vez que seleccione uno de los elementos.  '^='  significa que "quiero que empiece con.." */ 


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const menuLink = document.querySelector(".menu a[href=\"#${id}\"]");
        
            if (entry.isIntersecting) {
                document.querySelector(".menu a.selected").classList.remove("selected");  /*Para que, siempre que intersecte con una nueva sección, elimina el que esta seleccionado y le agrega "selected" a esa nueva sección*/ 
                menuLink.classList.add("selected");
            } 
        });
    }, 
    {rootMargin: "-30px 0px -70px 0px"}
);



menuLinks.forEach((menuLink) => {   /* Para que el menú se cierre una vez que seleccione uno de los elementos.  '^='  significa que "quiero que empiece con.."*/
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    })
   

//     const hash = menulink.getAttribute("href");
//     const target = document.querySelector(hash);
//     if (target) {
//         observer.observe(target);
//   }
});