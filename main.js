import './style.css'

const menuBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const menu = document.getElementById('menu')

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('hidden')
    menu.classList.toggle('hidden')
    closeBtn.classList.toggle('hidden')
})

closeBtn.addEventListener('click', ()=> {
    closeBtn.classList.toggle('hidden')
    menu.classList.toggle('hidden')
    menuBtn.classList.toggle('hidden')
})