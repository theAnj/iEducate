

var burger = document.querySelector('.burger')
var navBar = document.querySelector('.navBar')
var navList = document.querySelector('.navList')
var rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    navBar.classList.toggle("h-nav")
    navList.classList.toggle("v-nav")
    rightNav.classList.toggle("v-nav")
})