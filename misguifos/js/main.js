/*var nombre = prompt("cómo te llamás?");

nombre

console.log(nombre)

var parImpar = prompt("muy bien ahora ingresá un número");

if (parImpar%2==0) {
    console.log("el número es par, qué no?");
} else {
    console.log("el número es impar");
};
*/
/*
var edad = prompt("Cuál es tu edad?");

console.log(edad)

var educacion = (confirm("estás estudiando?")) ? "Si" : "No";

console.log(educacion)

if(edad >= 18 && educacion == true){
    console.log("muy bien! en la universidad, segruo");
/*    (confirm("En la universidad?")) ? "Sí" : "No";
} else if(edad < 18 && educacion == true) {
    (confirm("En el secundario?")) ? "Sí" : "No";
} else if(educacion == false){
    var vago = prompt("Estás recibido?");
    vago
    if(vago==true){
        var trabajo = prompt("Estás trabajando?");
        trabajo
        if(trabajo==true){
            console.log("Bien allí!");
        } else {
            console.log("qué macana, algo va a salir");
        };
    } else {
        var trabajo = prompt("Estás trabajando?");
        trabajo
        if(trabajo==true){
            console.log("Bien allí!");
        } else {
            console.log("ALERTA - VAGO ENCONTRADO");
        };
    };
};*/
/*
var edad = prompt("Cuál es su edad?")
console.log(edad)
if(edad >= 18){
    if(edad >=18 && edad <= 65){
        alert("Estás obligado a votar, y lo sabés");
    } else {
        alert("puede votar, si le pinta");
    }
} else {
    alert("más te gustaría votar, bebito");
};
*/

// DROPDOWN FUNCTION

function dropdownFunc(){
    document.getElementById("clkDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// DROPDOWN FUNCTION



/*function modoOscuro() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
*/