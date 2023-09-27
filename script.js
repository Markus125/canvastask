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
ctx.moveTo(300, 300); 
ctx.lineTo(330, 315);
ctx.lineTo(310, 295);
ctx.lineTo(300, 315);
ctx.lineTo(318, 300);
ctx.lineTo(280, 50);
ctx.stroke();

//Rõngas
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.arc(100, 50, 30, 0, Math.PI/100*360);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(85, 15); ctx.lineTo(115, 15);
ctx.lineTo(100, 50);
ctx.fillStyle();

ctx.beginPath();
ctx.lineWidth = 15;
ctx.strokeStyle = 'white';
ctx.arc(100, 50, 40, 0, Math.PI/100*360);
ctx.closePath();
ctx.stroke();


