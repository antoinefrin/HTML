let canvas = document.querySelector("#canvas1");
let context = canvas.getContext("2d");

// Rectangle jaune
context.fillStyle = "yellow";
// petit rectangle dans le canvas
context.fillRect(50,50,150,55);

// rectangle avec un width et un height plus grand que celui du canvas
//context.fillRect(50,50,600,550);

// bordure blanche 10px
context.lineWidth = "10";
context.strokeStyle = "white";
context.strokeRect(50,50,150,55);