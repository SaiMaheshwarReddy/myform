const btn = document.querySelector(".btn");

btn.addEventListener('click', toggleNav);

function togglrNav(){
    document.querySelector(".navbar").classList.toggle("navbar--open");
    
}