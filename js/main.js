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