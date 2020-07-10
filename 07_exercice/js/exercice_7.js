let chiffreMax = 100;
let chiffreATrouver = Math.floor((Math.random() * chiffreMax) + 0);

let nombreEssais = 0;

let valeurSaisie = document.getElementById("valeurSaisie");
let result = document.getElementById("result");

function compare(){
    if(valeurSaisie.value == "") {
        result.innerHTML = "Veuillez saisir un nombre";
    }else if (valeurSaisie.value >= 0 && valeurSaisie.value <= 100){
        nombreEssais ++;
        if(valeurSaisie.value < chiffreATrouver){
            result.innerHTML = "Le chiffre générer est plus GRAND que votre saisie.";
        }else if(valeurSaisie.value > chiffreATrouver){
            result.innerHTML = "Le chiffre générer est plus PETIT que votre saisie.";
        }else{
            result.innerHTML = "Félicitation vous avez trouvé en " + nombreEssais + " essai(s).";
        }
    }
    if(valeurSaisie.value > chiffreMax){
        result.innerHTML = "Votre saisie est supérieur à 100, veuillez saisir un chiffre entre 0 et 100."
    }
}