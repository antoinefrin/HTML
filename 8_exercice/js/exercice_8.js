const tableau = [-2, 1, 4];
console.log(tableau);

const newTab = tableau.map(i => i+2);
console.log(newTab)

function afficherAddition(){
    let result = document.getElementById("div1");
    result.innerHTML = newTab[0]+" et " +newTab[newTab.length -1];
}