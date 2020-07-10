const tabDay = ["dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
let date = new Date();
let resultDay = document.getElementById("resultDay");

function day(){
    resultDay.innerHTML = "Nous sommes " + tabDay[date.getDay()]+".";
}