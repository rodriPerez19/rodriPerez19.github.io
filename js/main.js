const nav = document.querySelector('.navbar');
const hamburguesa = document.querySelector('.menu__hamburguesa');
const perfil = document.querySelector('.perfil');
const navCont= document.querySelector('.nav__container');



window.addEventListener('resize',()=>{    
    if(window.innerWidth > 792){
        nav.classList.remove('nav__open')
    }
});

hamburguesa.addEventListener('click',()=>{

    nav.classList.toggle('nav__open');
    navCont.style.opacity="1";
    navCont.style.visibility="visible";
});

window.addEventListener("click",function(e){

    console.log(e.target);
    if(e.target==navCont){
        nav.classList.toggle("nav__open");

        setTimeout(function(){
            navCont.style.opacity="0";
            navCont.style.visibility="hidden";
           
        },800)
    }
});