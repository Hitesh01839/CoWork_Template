const header = document.querySelector('.header');

window.addEventListener("scroll", () => {
    if(window.scrollY >= 220){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled")
    }
})

const com1 = document.querySelector('.com1');
const com2 = document.querySelector('.com2');
const com3 = document.querySelector('.com3');

com1.addEventListener('click', () => {
    com1.classList.add('active');
    com2.classList.remove('active');
    com3.classList.remove('active');
})
com2.addEventListener('click', () => {
    com1.classList.remove('active');
    com3.classList.remove('active');
    com2.classList.add('active');
})
com3.addEventListener('click', () => {
    com1.classList.remove('active');
    com2.classList.remove('active');
    com3.classList.add('active');
})