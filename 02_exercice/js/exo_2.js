function direction(haut,gauche) {
    let carreRed = document.getElementById("carreRed");
    let carreTop = carreRed.offsetTop;
    let carreLeft = carreRed.offsetLeft;

    carreRed.style.top = parseInt(carreTop) + haut + "px";
    carreRed.style.left = parseInt(carreLeft) + gauche + "px";
} 