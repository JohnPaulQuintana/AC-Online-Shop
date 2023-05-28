console.log('connected')
let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    console.log('clicked')
    searchForm.classList.toggle('active')
    cart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

let cart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () => {
    console.log('clicked')
    cart.classList.toggle('active')
    searchForm.classList.remove('active')
    // cart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}


let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {
    console.log('clicked')
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    cart.classList.remove('active')
    // loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    console.log('clicked')
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    cart.classList.remove('active')
    loginForm.classList.remove('active')
    // navbar.classList.remove('active')
}

window.onscroll = () => {
    searchForm.classList.remove('active')
    cart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}