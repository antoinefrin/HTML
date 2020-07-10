let photo = document.getElementById("photo");

function changeColor(color) { 
    photo.style.backgroundColor = color;                
}

function changeSize() {
    let newWidth = parseInt(document.getElementById("picsWidth").value);
    console.log(newWidth)
    photo.style.width = newWidth + "px";

    let newHeight = parseInt(document.getElementById("picsHeight").value);
    console.log(newHeight)
    photo.style.height = newHeight + "px";
}

function changePosition() {

    let newPositionTop = parseInt(document.getElementById("positionTop").value);
    console.log(newPositionTop);
    photo.style.top = newPositionTop + "px";

    let newPositionLeft = parseInt(document.getElementById("positionLeft").value);
    console.log(newPositionLeft);
    photo.style.left = newPositionLeft + "px";
}