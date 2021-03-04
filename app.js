const menu = document.querySelector('#menu')
const menuMobile = document.querySelector('.menu')
const menuContainer = document.querySelector('#menuContainer')
const closeBtn = document.querySelector('#menuClose')

menu.addEventListener('click', () => {
  menuMobile.setAttribute('style', 'right:0;')
})

closeBtn.addEventListener('click', () => {
  menuMobile.removeAttribute('style')
})