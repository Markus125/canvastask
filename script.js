

//lipp
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
ctx.rect(150, 10, 100, 30); 
ctx.fillStyle = "#0072CE";
ctx.fillRect(150, 10, 100, 30)
ctx.rect(150, 40, 100, 30);
ctx.fillStyle = "#000000";
ctx.fillRect(150, 40, 100, 30)
ctx.rect(150, 70, 100, 30);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(150, 70, 100, 30)

ctx.rect(150, 10, 100, 90);
ctx.stroke();

//täheke

ctx.beginPath(); 
ctx.moveTo(100,55);
ctx.lineTo(120,70);
ctx.lineTo(110,50);
ctx.lineTo(100,70);
ctx.lineTo(120,55);
ctx.lineTo(100,55);
ctx.stroke();

//Rõngas
ctx.beginPath();
ctx.arc(110,100, 20, 0, 2 * Math.PI);
ctx.lineWidth = 1;
ctx.fillStyle = 'black'; 
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(110,100, 20, 5, 10);
ctx.lineTo(110,100);
ctx.lineTo(110,80);
ctx.fillStyle = 'white'; 
ctx.fill();
ctx.stroke();

