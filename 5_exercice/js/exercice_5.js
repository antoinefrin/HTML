let tabNombre = [];
let nombre = document.getElementById("nombre");
let result = document.getElementById("result");
let total = 0;

//document.addEventListener("keyup", ajoutNombreTabAvecEntrer);

function ajoutNombreTab(){
        tabNombre.push(nombre.value);
        result.innerHTML = nombre.value + " est ajouté au tableau pour le calcule";
        nombre.value = "";
}

/*function ajoutNombreTabAvecEntrer(a){
    if (a.keyCode = 13 || a.keyCode == 3){
        tabNombre.push(nombre.value);
        result.innerHTML =  nombre.value + " est ajouté au tableau pour le calcule";
        nombre.value = "";
    }
}*/

function somme(){
    for(let i = 0; i<tabNombre.length; i++){
        total += Number(tabNombre[i]);
    }
    result.innerHTML = "La somme de vos saisie est égale à " + total;
}

function effacerSaisie(){
    tabNombre = [];
    total = 0;
    result.innerHTML = "Vos saisie de valeurs on été éffacer.";
}