const kangrebur= document.querySelector(".kangrebur")
const hamburguer_menu= document.querySelector(".hamburguer_menu")
const close_menu= document.querySelector(".close_menu")

kangrebur.addEventListener("click", ()=> {
    hamburguer_menu.classList.add("hamburguer_menu_visible")
})

close_menu.addEventListener("click", ()=> {
    hamburguer_menu.classList.remove("hamburguer_menu_visible")
})