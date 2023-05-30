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
    // 
    
    
    document.querySelector('#back-to-login').onclick = () => {
        console.log('clicked');
        loginForm.classList.toggle('active');
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
    let autoAdvanceTimer;
    function next(){
        clearInterval(autoAdvanceTimer); // Clear the auto advance timer
        slides[index].classList.remove('active')
        index = (index + 1) % slides.length
        slides[index].classList.add('active')
        startAutoAdvance(); // Restart auto advancing
    }
    function prev(){
        clearInterval(autoAdvanceTimer); // Clear the auto advance timer
        slides[index].classList.remove('active')
        index = (index - 1 + slides.length) % slides.length
        slides[index].classList.add('active')
        startAutoAdvance(); // Restart auto advancing
    }
    function autoAdvance() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    function startAutoAdvance() {
        clearInterval(autoAdvanceTimer); // Clear any existing interval
        autoAdvanceTimer = setInterval(autoAdvance, 5000); // Start new interval
    }
    
    // Start auto advancing every 5 seconds
        startAutoAdvance(); // Start initial auto advancing
