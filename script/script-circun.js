var circuntr = document.querySelector(".tr-circun");
var circunobj = document.getElementById('circun-line');
var cirifo = document.getElementById("tr-cirinfo");
circunobj.addEventListener('click', function(){
    circuntr.classList.toggle('circun-tr-cima');
    if (cirifo.style.height == '21vh') {
        cirifo.style.height = '0vw'
        
    } else {
        cirifo.style.height = '21vh'
        
    };
});