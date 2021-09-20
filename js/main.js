const nav = document.querySelector('.navbar');
const hamburguesa = document.querySelector('.menu__hamburguesa');
const perfil = document.querySelector('.perfil');



window.addEventListener('resize',()=>{    
    if(window.innerWidth > 792){
        nav.classList.remove('nav__open')
    }
});

hamburguesa.addEventListener('click',()=>{

    nav.classList.toggle('nav__open');
});