/*la fonction getElementByTagName renvoie une liste des éléments portant le nom de balise donné ici "span".*/
let span = document.getElementsByTagName("span");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let t;
let ms=0, s=0, mn=0, h=0;
 
/*La fonction "start" démarre un appel répétitive de la fonction updateChrono par une cadence de 100 milliseconde
    en utilisant setInterval et désactive le bouton "start" */

function start(){
    t =setInterval(updateChrono,100);
    buttonStart.disabled=true;
}

/*La fonction updateChrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100 */
function updateChrono(){
    ms+=1;
    /*si ms=10 <==> ms*cadence = 1000ms <==> 1s alors on incrémente le nombre de secondes*/
    if(ms==10){
        ms=1;
        s+=1;
    }
    /*on teste si s=60 pour incrémenter le nombre de minute*/
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }
    /*afficher les nouvelle valeurs*/
    span[0].innerHTML=h+" h";
    span[1].innerHTML=mn+" min";
    span[2].innerHTML=s+" s";
    span[3].innerHTML=ms+" ms";
}

/*on arrête le "timer" par clearInterval ,on réactive le bouton start */
function stop(){
    clearInterval(t);
    buttonStart.disabled=false;
}
/*dans cette fonction on arrête le "timer" ,on réactive le bouton "start" et on initialise les variables à zéro */
function reset(){
    clearInterval(t);
    buttonStart.disabled=false;
    ms=0,s=0,mn=0,h=0;
/*on accède aux différents span par leurs indice*/
    span[0].innerHTML=h+" h";
    span[1].innerHTML=mn+" min";
    span[2].innerHTML=s+" s";
    span[3].innerHTML=ms+" ms";
}