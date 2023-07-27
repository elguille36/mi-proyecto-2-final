
/*Dominio del DOM, se reemplazo la imagen del logo en el header*/ 
const logotipo = document.querySelector('.img-logo');

logotipo.src='https://previews.123rf.com/images/alluranet/alluranet1705/alluranet170503164/78230984-dise%C3%B1o-de-logotipo-de-transferencia-de-tecnolog%C3%ADa-letra-g.jpg';


const cambioFondo=document.querySelector('body');
const modoOscuro=document.querySelector('#modobtn');

modobtn.addEventListener('click', function(){

  document.body.classList.toggle('modo-oscuro')
})




