var altura = document.querySelector(".aba-utilidades");
var button = document.getElementById('button-utilidades');
var main = document.querySelector(".escuro");
button.addEventListener('click', function(){
    altura.classList.toggle('aumentada');
    main.classList.toggle('escuro-aparecendo');

    console.log('oi');
});