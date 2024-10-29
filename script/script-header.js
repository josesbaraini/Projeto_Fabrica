var altura = document.querySelector(".aba-utilidades");
var button = document.getElementById('button-utilidades');
var main = document.querySelector(".main-teste");
console.log(main);
button.addEventListener('click', function(){
    altura.classList.toggle('aumentada');
    main.classList.toggle('main-diminuido');

    console.log('oi');
});