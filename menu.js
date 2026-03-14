const toggle = document.querySelector('.menu');
const menuLista = document.querySelector('.nav_list');

toggle.addEventListener('click', () =>{
    menuLista.classList.toggle('show');
});