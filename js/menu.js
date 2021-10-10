let boton = document.getElementById('menu-btn')
let lista = document.getElementById('menu-items')


boton.addEventListener('click', ()=> {
    lista.classList.toggle('active')
})