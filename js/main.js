
/*Dominio del DOM, se reemplazo la imagen del logo en el header*/ 
const logotipo = document.querySelector('.img-logo');

logotipo.src='https://previews.123rf.com/images/alluranet/alluranet1705/alluranet170503164/78230984-dise%C3%B1o-de-logotipo-de-transferencia-de-tecnolog%C3%ADa-letra-g.jpg';

/* funcion al body en modo oscuro*/ 
const modoOscuro=document.querySelector('#modobtn');

modobtn.addEventListener('click',function(){

  document.body.classList.toggle('modo-oscuro');
});

/* funcion al boton menu desplegable a icono mobile*/ 
const menu= document.querySelector('header')
const menubtn= document.querySelector('#menu-btn');
menubtn.addEventListener('click',function(){

  document.body.classList.toggle('menu-active');
})

/*funciones de interaciones de permanencia en los navegadores al clickar*/
const menuNav= document.querySelectorAll('.menu-nav');

menuNav.forEach(function(nav){

  nav.addEventListener('click',function(e){

    const activeNav= document.querySelector('.active');

    activeNav.classList.remove('active');
    e.target.classList.add('active');

});

});
/* dando un fondo de transparencia al pasar el mouse al titulo habilidades */
 function cambioColor(){

  document.querySelector('.habilidades').style.backgroundColor ='transparent';

}

function restaurarColor(){

document.querySelector('.habilidades').style.backgroundColor ='rgb(247, 132, 78';

}







