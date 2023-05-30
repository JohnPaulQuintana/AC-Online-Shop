console.log('connected')
// old version
let searchForm = document.querySelector('.search-form')
let cart = document.querySelector('.shopping-cart')
let loginForm = document.querySelector('.login-form')
let registerForm = document.querySelector('.registration-form')
let navbar = document.querySelector('.navbar')

// new way of toggle and remove
const elementsToRemoveActiveClass = [searchForm, cart, registerForm, navbar];

document.querySelector('#search-btn').onclick = () => {
    console.log('clicked')
    searchForm.classList.toggle('active')
    cart.classList.remove('active')
    loginForm.classList.remove('active')
    registerForm.classList.remove('active')
    navbar.classList.remove('active')
}
// old version
// let cart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () => {
    console.log('clicked')
    cart.classList.toggle('active')
    searchForm.classList.remove('active')
    // cart.classList.remove('active')
    loginForm.classList.remove('active')
    registerForm.classList.remove('active')
    navbar.classList.remove('active')
}

// old version
// let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {
    console.log('clicked')
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    cart.classList.remove('active')
    // loginForm.classList.remove('active')
    registerForm.classList.remove('active')
    navbar.classList.remove('active')
}

// going back to login
document.querySelector('#back-to-login').onclick = () => {
    console.log('clicked');
    loginForm.classList.toggle('active');
    // this one line iteration of removing active class
    elementsToRemoveActiveClass.forEach(element => element.classList.remove('active'));
};

// old version
// let registerForm = document.querySelector('.registration-form')

document.querySelector('#registration-btn').onclick = () => {
    console.log('clicked')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
    cart.classList.remove('active')
    registerForm.classList.toggle('active')
    navbar.classList.remove('active')
}

// old version
// let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    console.log('clicked')
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    cart.classList.remove('active')
    loginForm.classList.remove('active')
    registerForm.classList.remove('active')
    // navbar.classList.remove('active')
}

window.onscroll = () => {
    searchForm.classList.remove('active')
    cart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
    registerForm.classList.remove('active')
}

let slides = document.querySelectorAll('.home .slides-container .slide')
let index = 0
function next(){
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length
    slides[index].classList.add('active')
}
function prev(){
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length
    slides[index].classList.add('active')
}