
let hamburger= document.querySelector('#hamburger');

let navLinks = document.querySelector('.nav-links');



hamburger.addEventListener('click' , ()=>{
  navLinks.classList.toggle('show');
  if (hamburger.classList.contains('fa-bars')){
    hamburger.classList.remove('fa-bars');
    hamburger.classList.add('fa-xmark')
  }
  else{
    hamburger.classList.remove('fa-xmark');
    hamburger.classList.add('fa-bars')
  }
})


const themeToggleBtn = document.getElementById("theme-toggle");
const toggleBtn = document.getElementById("toggle-btn")

themeToggleBtn.addEventListener('click',()=>{
  if (document.body.getAttribute('data-theme') === 'dark'){
    document.body.removeAttribute('data-theme');//back to light
    toggleBtn.classList.remove('fa-moon');
    toggleBtn.classList.add('fa-sun');
  }
  else {
    document.body.setAttribute('data-theme','dark');
    toggleBtn.classList.remove('fa-sun');
    toggleBtn .classList.add('fa-moon')
  }
})