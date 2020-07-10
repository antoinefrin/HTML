let canvas = document.getElementById("canvas1");
let carre = canvas.getContext("2d");
let circle = canvas.getContext("2d");

// carre noir sur la tête de trump
carre.fillStyle = "black";
carre.fillRect(495,153,90,90);

// cercle autour de la tête de may
circle.strokeStyle = "red";
circle.lineWidth = "5";
circle.arc(120,227,60,0, Math.PI * 2);
circle.stroke();