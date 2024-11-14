var circuntr1 = document.querySelector(".tr-circun-1");
var circunobj1 = document.getElementById('circun-line-1');
var cirifo1 = document.getElementById("tr-cirinfo-1");
circunobj1.addEventListener('click', function(){
    circuntr1.classList.toggle('circun-tr-cima');
    if (cirifo1.style.height == '21vh') {
        cirifo1.style.height = '0vw'
        
    } else {
        cirifo1.style.height = '21vh'
        
    };
});

var circuntr2 = document.querySelector(".tr-circun-2");
var circunobj2 = document.getElementById('circun-line-2');
var cirifo2 = document.getElementById("tr-cirinfo-2");
circunobj2.addEventListener('click', function(){
    circuntr2.classList.toggle('circun-tr-cima');
    if (cirifo2.style.height == '21vh') {
        cirifo2.style.height = '0vw'
        
    } else {
        cirifo2.style.height = '21vh'
        
    };
});