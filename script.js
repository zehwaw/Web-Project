const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const navItems = document.querySelector(".nav-items");


document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

function myFunction(x) {
  x.classList.toggle("change");
    navItems.classList.toggle("active");  
     nav.classList.remove("scrolled");
}

function itemsClick() {
  navItems.classList.remove("active");
  menu.classList.toggle("change");    
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.atems');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.atems[href*=' + id + ']').classList.add('active');
            });
        };
    });
};